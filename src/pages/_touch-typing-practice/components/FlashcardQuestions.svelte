<script lang="ts" generics="TWord extends object">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import Highlighted from "@/components/Highlighted.svelte";
  import NumericInput from "@/components/NumericInput.svelte";
  import { QuestionQueue } from "@/lib/question-queue";
  import { speech } from "@/lib/speech.svelte";
  import { isEqual, random, randomInt, range } from "es-toolkit";
  import { untrack } from "svelte";
  import { SvelteSet } from "svelte/reactivity";
  import { initSettings, useSyncSettings } from "../../../lib/settings.svelte";

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
      defaultValue: schema.map(({ defaultPosition }) => defaultPosition === "question"),
      arrayType: "boolean[]" as const,
    },
    optionSettings: {
      paramKey: "optionSettings",
      defaultValue: schema.map(({ defaultPosition }) => defaultPosition === "option"),
      arrayType: "boolean[]" as const,
    },
    numOptions: {
      paramKey: "numOptions",
      defaultValue: 6,
    },
    preferPinnedProb: {
      paramKey: "preferPinnedProb",
      defaultValue: 0.4,
    },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

  const isQuestionSettingsEmpty = $derived(!settings.questionSettings.some((is) => is));
  const isOptionSettingsEmpty = $derived(!settings.optionSettings.some((is) => is));
  $effect(() => {
    for (const [i, enabled] of settings.questionSettings.entries()) {
      if (enabled) untrack(() => (settings.optionSettings[i] = false));
    }
  });
  $effect(() => {
    for (const [i, enabled] of settings.optionSettings.entries()) {
      if (enabled) untrack(() => (settings.questionSettings[i] = false));
    }
  });

  type Question = {
    word: TWord;
    questionKey: (string | string[])[];
    answerKey: (string | string[])[];
    pronunciation?: string;
    romanization?: string;
    idx: number;
  };
  function key(word: TWord, settings: boolean[]) {
    const key = range(settings.length)
      .filter((i) => settings[i])
      .map((i) => schema[i].valueFn(word));
    return key.includes(undefined) ? undefined : key;
  }

  const validWords = $derived.by(() => {
    const result: Question[] = [];

    for (const word of words) {
      const questionKey = key(word, settings.questionSettings);
      const answerKey = key(word, settings.optionSettings);
      if (questionKey === undefined || answerKey === undefined) continue;

      result.push(<Question>{
        word,
        questionKey,
        answerKey,
        pronunciation: wordToPronunciationFn?.(word),
        romanization: wordToRomanizationFn?.(word),
        idx: result.length,
      });
    }

    return result;
  });
  let questionsQueue = $derived(new QuestionQueue(validWords));
  let question: Question | undefined = $state();
  let isQuestionPinned = $state(false);
  let pinnedIdxs = $state(new SvelteSet<number>());
  let pinnedQuestions = $derived(Array.from(pinnedIdxs).map((idx) => validWords[idx]));
  let pinnedQuestionsQueue = $derived(new QuestionQueue(pinnedQuestions));
  let options: (string | string[])[][] = $state([]);
  let showRomanization = $state(false);
  $effect(() => {
    validWords;

    pinnedIdxs = new SvelteSet<number>();
  });

  function nextQuestion() {
    untrack(() => {
      question = (
        pinnedIdxs.size && random(1) < settings.preferPinnedProb
          ? pinnedQuestionsQueue
          : questionsQueue
      ).next();
      isQuestionPinned = false;
      showRomanization = false;

      options = [];
      if (question !== undefined) {
        isQuestionPinned = pinnedIdxs.has(question.idx);

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
    validWords;
    settings.numOptions;

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
    <NumericInput bind:value={settings.numOptions} label="Number of Options" min={1} />
    <NumericInput
      bind:value={settings.preferPinnedProb}
      label="Prefer Pinned Probability"
      min={0}
      max={1}
      step={0.1}
    />
  </div>

  <!-- question and options -->
  {#snippet item(values: (string | string[])[])}
    {#each values as content}
      {#if typeof content === "string"}
        <span>{content}</span>
      {:else if Array.isArray(content) && content.length}
        <div class="flex flex-col items-start text-xs">
          {#each content as text}
            <span>{text}</span>
          {/each}
        </div>
      {/if}
    {/each}
  {/snippet}

  {#if !isQuestionSettingsEmpty && !isOptionSettingsEmpty}
    <div class="flex flex-col gap-6">
      <!-- question -->
      <div class="flex items-center-safe gap-3">
        <span class="underline">Question:</span>
        {#if question}
          <Highlighted
            vertical
            class={[speech.voice && "pr-6", speech.isSpeaking && "cursor-wait"]}
            onclick={speech.voice
              ? () => {
                  showRomanization = true;
                  speech.speak(question!.pronunciation);
                }
              : undefined}
          >
            {@render item(question.questionKey)}

            <!-- pronunciation indicator -->
            {#if question!.pronunciation && speech.voice}
              <span
                class="absolute top-1 right-1 icon-[heroicons--speaker-wave-solid] text-xs opacity-80"
              ></span>
            {/if}
          </Highlighted>

          {#if showRomanization}
            {question.romanization}
          {/if}

          <div class="group/list relative cursor-default p-3">
            <button
              title="Pin this question."
              class="cursor-pointer rounded-full px-2 py-1 text-primary-content hover:bg-primary-lighter"
              onclick={() => {
                if (isQuestionPinned) {
                  pinnedIdxs.delete(question!.idx);
                  isQuestionPinned = false;
                } else {
                  pinnedIdxs.add(question!.idx);
                  isQuestionPinned = true;
                }
              }}
            >
              {#if isQuestionPinned}
                <span class="icon-[icon-park-solid--pin]"></span>
              {:else}
                <span class="icon-[icon-park-outline--pin] opacity-75"></span>
              {/if}
            </button>

            {#if pinnedIdxs.size}
              <div
                class="invisible absolute top-0 right-0 z-10 flex translate-x-full translate-y-2 flex-col divide-y rounded bg-primary whitespace-nowrap ring group-hover/list:visible"
              >
                {#each pinnedQuestions as { questionKey, answerKey, romanization, idx }}
                  <button
                    class="group/item flex cursor-pointer items-center-safe gap-1.5 px-2 py-1.5"
                    onclick={() => {
                      if (idx === question!.idx) isQuestionPinned = false;
                      pinnedIdxs.delete(idx);
                    }}
                  >
                    <div class="flex gap-4.5">
                      {@render item(questionKey)}
                      {romanization && `(${romanization})`}
                      {@render item(answerKey)}
                    </div>
                    <div class="grow"></div>
                    <span
                      class="invisible icon-[icon-park-outline--close-small] opacity-75 group-hover/item:visible"
                    ></span>
                  </button>
                {/each}
              </div>
            {/if}
          </div>
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
            {@render item(option)}
          </Highlighted>
        {/each}
      </div>
    </div>
  {/if}

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>
