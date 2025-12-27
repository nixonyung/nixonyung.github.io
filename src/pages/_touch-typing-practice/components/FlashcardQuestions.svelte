<script lang="ts" generics="TWord extends object">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import NumericInput from "@/components/svelte/NumericInput.svelte";
  import { ShufflingCircularQueue } from "@/lib/shuffling-circular-queue";
  import { clone, isEqual, randomInt, range } from "es-toolkit";
  import { untrack } from "svelte";
  import { initSettings, useSyncSettings } from "../../../lib/settings.svelte";
  import { app, speak } from "../app.svelte";

  const {
    words,
    wordToPronunciationFn,
    wordToRomanizationFn,
    schema,
  }: {
    words: TWord[];
    wordToPronunciationFn?: (word: TWord) => string | undefined;
    wordToRomanizationFn?: (word: TWord) => string | undefined;
    schema: {
      label: string;
      valueFn: (word: TWord) => string | string[] | undefined;
      defaultPosition?: "question" | "option";
    }[];
  } = $props();

  const SETTINGS_SCHEMA = {
    questionSettings: {
      paramKey: "questionSettings",
      defaultValue: [],
      arrayType: "boolean[]" as const,
    },
    optionSettings: {
      paramKey: "optionSettings",
      defaultValue: [],
      arrayType: "boolean[]" as const,
    },
    numOptions: {
      paramKey: "numOptions",
      defaultValue: 6,
    },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);
  $effect(() => {
    if (settings.questionSettings.length !== schema.length) {
      settings.questionSettings = schema.map(
        ({ defaultPosition }) => defaultPosition === "question",
      );
    }
    if (settings.optionSettings.length !== schema.length) {
      settings.optionSettings = schema.map(({ defaultPosition }) => defaultPosition === "option");
    }
  });

  const isQuestionSettingsEmpty = $derived(!settings.questionSettings.some((is) => is));
  const isOptionSettingsEmpty = $derived(!settings.optionSettings.some((is) => is));
  $effect(() => {
    for (const [i, is] of settings.questionSettings.entries()) {
      if (is) untrack(() => (settings.optionSettings[i] = false));
    }
  });
  $effect(() => {
    for (const [i, is] of settings.optionSettings.entries()) {
      if (is) untrack(() => (settings.questionSettings[i] = false));
    }
  });

  function questionKeyFn(word: TWord) {
    const key = []; // array as key

    for (const [i, { valueFn }] of schema.entries()) {
      if (!settings.questionSettings[i]) continue;

      const value = valueFn(word);
      if (value === undefined) return undefined;
      key.push(clone(value));
    }

    return key;
  }
  function answerKeyFn(word: TWord) {
    const key = []; // array as key

    for (const [i, { valueFn }] of schema.entries()) {
      if (!settings.optionSettings[i]) continue;

      const value = valueFn(word);
      if (value === undefined) return undefined;
      key.push(clone(value));
    }

    return key;
  }
  const validWords = $derived(
    words
      .map((word) => ({ word, questionKey: questionKeyFn(word), answerKey: answerKeyFn(word) }))
      .filter(
        (
          entry,
        ): entry is {
          word: TWord;
          questionKey: (string | string[])[];
          answerKey: (string | string[])[];
        } => entry.questionKey !== undefined && entry.answerKey !== undefined,
      ),
  );
  let questionsQueue = $derived(new ShufflingCircularQueue(validWords));
  let question:
    | {
        word: TWord;
        questionKey: (string | string[])[];
        answerKey: (string | string[])[];
      }
    | undefined = $state();
  let options: (string | string[])[][] = $state([]);
  let showRomanization = $state(false);

  function nextQuestion() {
    untrack(() => {
      question = questionsQueue.next();
      showRomanization = false;

      options = [];
      if (question !== undefined) {
        // pick N from validWords without replacement & with predicate

        const answerKeyStrs = new Set();

        // Fisher-Yates shuffle, from left-to-right, running on indices to avoid copying
        const indices = range(validWords.length);
        let i = 0;
        while (options.length < settings.numOptions - 1 && i < indices.length) {
          // (ref.) https://github.com/toss/es-toolkit/blob/3d75a713169c2db6fffe04121bc73ac0363d741e/src/array/shuffle.ts
          const j = randomInt(i, indices.length);
          [indices[i], indices[j]] = [indices[j], indices[i]];
          const word = validWords[indices[i]];
          i++;

          // filter out words that could be considered as answers:
          // (the real answer will be added at the end)
          if (
            // answers from other same-looking questions
            isEqual(word.questionKey, question.questionKey) ||
            // same-looking answers from other questions
            isEqual(word.answerKey, question.answerKey)
          )
            continue;

          // filter out duplicated options
          const answerKeyStr = word.answerKey.flat().join("|");
          if (answerKeyStrs.has(answerKeyStr)) continue;
          answerKeyStrs.add(answerKeyStr);

          options.push(word.answerKey);
        }

        // add the real answer
        options.splice(randomInt(options.length + 1), 0, question.answerKey);
      }
    });
  }

  $effect(() => {
    words;
    settings.numOptions;
    for (let i = 0; i < schema.length; i++) settings.questionSettings[i];
    for (let i = 0; i < schema.length; i++) settings.optionSettings[i];

    nextQuestion();
  });
</script>

<div class="flex flex-col gap-6">
  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <div class="flex flex-col">
      <span>show in question:</span>
      <span>show in options:</span>
    </div>

    {#each schema as { label }, i}
      <div class="flex flex-col">
        <CheckboxInput bind:checked={settings.questionSettings[i]} {label} />
        <CheckboxInput bind:checked={settings.optionSettings[i]} {label} />
      </div>
    {/each}

    <div class="flex flex-col">
      <span class={["text-red-700", !isQuestionSettingsEmpty && "invisible"]}>
        please choose at least one
      </span>
      <span class={["text-red-700", !isOptionSettingsEmpty && "invisible"]}>
        please choose at least one
      </span>
    </div>
  </div>
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numOptions} label="number of options:" min={1} />
  </div>

  <!-- question and options -->
  {#if !isQuestionSettingsEmpty && !isOptionSettingsEmpty}
    <div class="flex flex-col gap-6">
      <!-- question -->
      <div class="flex items-center-safe gap-3">
        <span class="underline">Question:</span>
        {#if question}
          <Highlighted
            vertical
            class={[app.voice && "pr-6", app.isSpeaking && "cursor-wait"]}
            onclick={wordToPronunciationFn && app.voice
              ? () => {
                  showRomanization = true;
                  speak(wordToPronunciationFn(question!.word));
                }
              : undefined}
          >
            {#each question.questionKey as values}
              {#if values}
                {#if typeof values === "string"}
                  <div>{values}</div>
                {:else}
                  <div class="flex flex-col items-start text-xs">
                    {#each values as value}
                      <span>{value}</span>
                    {/each}
                  </div>
                {/if}
              {/if}
            {/each}

            <!-- pronunciation indicator -->
            {#if wordToPronunciationFn && app.voice}
              <span
                class="absolute top-1 right-1 icon-[heroicons--speaker-wave-solid] text-xs opacity-80"
              ></span>
            {/if}
          </Highlighted>
          {#if wordToRomanizationFn && showRomanization}
            {wordToRomanizationFn(question.word)}
          {/if}
        {/if}
      </div>

      <span>Select the most appropriate one:</span>

      <!-- options -->
      <div class="flex flex-col gap-2">
        {#each options as option}
          <Highlighted
            vertical
            onclick={() => {
              if (isEqual(option, question?.answerKey)) nextQuestion();
            }}
          >
            {#each option as values}
              {#if typeof values === "string"}
                <div>{values}</div>
              {:else}
                <div class="flex flex-col items-start text-xs">
                  {#each values as value}
                    <span>{value}</span>
                  {/each}
                </div>
              {/if}
            {/each}
          </Highlighted>
        {/each}
      </div>
    </div>
  {/if}
</div>
