<script lang="ts" generics="TWord extends object">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import NumericInput from "@/components/svelte/NumericInput.svelte";
  import { ShufflingCircularQueue } from "@/lib/shuffling-circular-queue";
  import { isEqual, randomInt, sampleSize } from "es-toolkit";
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
      valueFn: (word: TWord) => string | undefined;
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
      defaultValue: 4,
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

  const isQuestionEmpty = $derived(!settings.questionSettings.some((is) => is));
  const isOptionEmpty = $derived(!settings.optionSettings.some((is) => is));
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

  let questionsQueue = $derived(new ShufflingCircularQueue(words));
  let question: TWord | undefined = $state();
  let options: TWord[] = $state([]);
  let keyFn = (word: TWord): (string | number | boolean)[] | undefined => {
    const key = []; // array as key

    for (const { valueFn } of schema.filter((_, i) => settings.questionSettings[i])) {
      const value = valueFn(word);
      if (value === undefined) return undefined;
      key.push(value);
    }
    // for (const { valueFn } of schema.filter((_, i) => optionSettings[i])) {
    //   const value = valueFn(word);
    //   if (value === undefined) return undefined;
    //   key.push(value);
    // }

    return key;
  };
  let showRomanization = $state(false);

  function nextQuestion() {
    untrack(() => {
      question = questionsQueue.next();

      if (question === undefined) {
        options = [];
      } else {
        const candidates = words.filter((word) => !isEqual(keyFn(word), keyFn(question!)));
        options = sampleSize(candidates, Math.min(candidates.length, settings.numOptions - 1));
        options.splice(randomInt(options.length + 1), 0, question);
      }

      showRomanization = false;
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
      <span class={["text-red-700", !isQuestionEmpty && "invisible"]}>
        please choose at least one
      </span>
      <span class={["text-red-700", !isOptionEmpty && "invisible"]}>
        please choose at least one
      </span>
    </div>
  </div>
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numOptions} label="number of options:" min={1} />
  </div>

  <!-- question and options -->
  {#if !isQuestionEmpty && !isOptionEmpty}
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
                  speak(wordToPronunciationFn(question!));
                }
              : undefined}
          >
            {#each schema as { valueFn }, i}
              {#if settings.questionSettings[i]}
                <span>{valueFn(question)}</span>
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
            {wordToRomanizationFn(question)}
          {/if}
        {/if}
      </div>

      <span>Select the matching one:</span>

      <!-- options -->
      <div class="flex flex-wrap items-center-safe gap-4">
        {#each options as option}
          <Highlighted
            vertical
            onclick={() => {
              if (question !== undefined && isEqual(keyFn(option), keyFn(question))) nextQuestion();
            }}
          >
            {#each schema as { valueFn }, i}
              {#if settings.optionSettings[i]}
                <span>{valueFn(option)}</span>
              {/if}
            {/each}
          </Highlighted>
        {/each}
      </div>
    </div>
  {/if}
</div>
