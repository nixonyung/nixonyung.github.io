<script lang="ts" module>
  type Entry = string | string[];
</script>

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
      valueFn: (word: TWord) => Entry | undefined;
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
    numOptions: { paramKey: "numOptions", defaultValue: 6 },
    onlyPinned: { paramKey: "onlyPinned", defaultValue: false },
    onlyUnpinned: { paramKey: "onlyUnpinned", defaultValue: false },
    autoReadQuestion: { paramKey: "autoReadQuestion", defaultValue: false },
    pinWhenWrong: { paramKey: "pinWhenWrong", defaultValue: true },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);
  $effect.pre(() => {
    if (settings.onlyPinned) untrack(() => (settings.onlyUnpinned = false));
  });
  $effect.pre(() => {
    if (settings.onlyUnpinned) untrack(() => (settings.onlyPinned = false));
  });

  const isQuestionSettingsEmpty = $derived(!settings.questionSettings.some((is) => is));
  const isOptionSettingsEmpty = $derived(!settings.optionSettings.some((is) => is));
  $effect.pre(() => {
    for (const [i, enabled] of settings.questionSettings.entries()) {
      if (enabled) untrack(() => (settings.optionSettings[i] = false));
    }
  });
  $effect.pre(() => {
    for (const [i, enabled] of settings.optionSettings.entries()) {
      if (enabled) untrack(() => (settings.questionSettings[i] = false));
    }
  });

  type Question = {
    word: TWord;
    questionEntries: Entry[];
    answerEntries: Entry[];
    pronunciation?: string;
    romanization?: string;
    idx: number;
  };
  function wordToEntries(word: TWord, settings: boolean[]) {
    const entries = range(settings.length)
      .filter((i) => settings[i])
      .map((i) => schema[i].valueFn(word));
    return entries.includes(undefined)
      ? undefined
      : <Exclude<ReturnType<(typeof schema)[number]["valueFn"]>, undefined>[]>entries;
  }

  const allQuestions = $derived.by(() => {
    const result: Question[] = [];

    for (const word of words) {
      const questionEntries = wordToEntries(word, settings.questionSettings);
      const answerEntries = wordToEntries(word, settings.optionSettings);
      if (questionEntries === undefined || answerEntries === undefined) continue;

      result.push({
        word,
        questionEntries,
        answerEntries,
        pronunciation: wordToPronunciationFn?.(word),
        romanization: wordToRomanizationFn?.(word),
        idx: result.length,
      });
    }

    return result;
  });

  let pinnedIdxs = $state(new SvelteSet<number>());
  let questionsPools = $derived.by(() => {
    const pinned: Question[] = [];
    const unpinned: Question[] = [];

    for (const question of allQuestions) {
      (pinnedIdxs.has(question.idx) ? pinned : unpinned).push(question);
    }

    return { pinned, unpinned };
  });
  let unpinnedQuestionsQueue = $derived(new QuestionQueue(questionsPools.unpinned));
  let pinnedQuestionsQueue = $derived(new QuestionQueue(questionsPools.pinned));
  $effect.pre(() => {
    allQuestions;

    pinnedIdxs = new SvelteSet<number>();
  });

  let question: Question | undefined = $state();
  let showRomanization = $state(false);
  let isQuestionPinned = $state(false);
  $effect.pre(() => {
    question;

    showRomanization = false;
    isQuestionPinned = question ? pinnedIdxs.has(question.idx) : false;
  });

  let options: Entry[][] = $state([]);
  let isWrongOptions: boolean[] = $state([]);

  function nextQuestion() {
    untrack(() => {
      if (!allQuestions.length) {
        question = undefined;
      } else if (settings.onlyPinned && questionsPools.pinned.length) {
        question = pinnedQuestionsQueue.next();
      } else if (settings.onlyUnpinned && questionsPools.unpinned.length) {
        question = unpinnedQuestionsQueue.next();
      } else if (random(allQuestions.length) < questionsPools.unpinned.length) {
        question = unpinnedQuestionsQueue.next();
      } else {
        question = pinnedQuestionsQueue.next();
      }

      options = [];
      if (question !== undefined) {
        if (settings.autoReadQuestion) {
          speech.speak(question?.pronunciation);
        }

        // pick N randomly (without replacement) from allQuestions with filtering

        function entriesToStr(entries: Entry[]) {
          return entries.flat().join("|");
        }
        const optionStrs = new Set([entriesToStr(question.answerEntries)]);

        // Fisher-Yates shuffle, from left-to-right, running on indices to avoid copying
        // (ref.) https://github.com/toss/es-toolkit/blob/3d75a713169c2db6fffe04121bc73ac0363d741e/src/array/shuffle.ts
        const indices = range(allQuestions.length);
        let i = 0;
        while (options.length < settings.numOptions - 1 && i < indices.length) {
          const j = randomInt(i, indices.length);
          [indices[i], indices[j]] = [indices[j], indices[i]];
          const word = allQuestions[indices[i]];
          i++;

          // filter out answers from other same-looking questions
          if (isEqual(word.questionEntries, question.questionEntries)) continue;

          // filter out same-looking options
          const answerEntriesStr = entriesToStr(word.answerEntries);
          if (optionStrs.has(answerEntriesStr)) continue;

          options.push(word.answerEntries);
          optionStrs.add(answerEntriesStr);
        }

        // add the real answer at random position
        options.splice(randomInt(options.length + 1), 0, question.answerEntries);
      }
      isWrongOptions = Array(options.length).fill(false);
    });
  }
  $effect.pre(() => {
    allQuestions;
    settings.onlyPinned;
    settings.onlyUnpinned;
    settings.numOptions;

    nextQuestion();
  });
</script>

<div>
  <hr class="mt-3 opacity-50" />

  <!-- settings -->
  <div class="mt-6 flex items-center-safe gap-9 whitespace-nowrap">
    <div class="flex flex-col">
      <span>Show in Questions:</span>
      <span>Show in Options:</span>
    </div>

    {#each schema as { label }, i}
      <div class="flex flex-col">
        <CheckboxInput bind:checked={settings.questionSettings[i]} {label} />
        <CheckboxInput bind:checked={settings.optionSettings[i]} {label} />
      </div>
    {/each}

    <div class="flex flex-col text-red-700">
      <span class={[!isQuestionSettingsEmpty && "invisible"]}>Please choose at least one!</span>
      <span class={[!isOptionSettingsEmpty && "invisible"]}>Please choose at least one!</span>
    </div>
  </div>
  <div class="mt-3 flex flex-col gap-1.5">
    <CheckboxInput bind:checked={settings.autoReadQuestion} label="Auto Read Question" />
    <CheckboxInput bind:checked={settings.pinWhenWrong} label="Auto Pin When Wrong" />
    <div class="flex gap-9">
      <CheckboxInput bind:checked={settings.onlyPinned} label="Only Use Pinned (if any)" />
      <CheckboxInput bind:checked={settings.onlyUnpinned} label="Only Use Unpinned (if any)" />
    </div>
    <NumericInput bind:value={settings.numOptions} label="Number of Options" min={1} />
  </div>

  {#snippet entries(entries: Entry[])}
    {#each entries as entry}
      {#if typeof entry === "string"}
        <span>{entry}</span>
      {:else if Array.isArray(entry) && entry.length}
        <div class="flex flex-col items-start text-xs">
          {#each entry as text}
            <span>{text}</span>
          {/each}
        </div>
      {/if}
    {/each}
  {/snippet}

  {#if !isQuestionSettingsEmpty && !isOptionSettingsEmpty}
    <hr class="mt-6 opacity-50" />

    <!-- question -->
    <div class="mt-9 flex items-center-safe">
      <span class="underline">Question:</span>
      {#if question}
        <Highlighted
          vertical
          class={["ml-6", speech.voice && "pr-6", speech.isSpeaking && "cursor-wait"]}
          onclick={speech.voice
            ? () => {
                showRomanization = true;
                speech.speak(question!.pronunciation);
              }
            : undefined}
        >
          {@render entries(question.questionEntries)}

          <!-- pronunciation indicator -->
          {#if question!.pronunciation && speech.voice}
            <span
              class="absolute top-1 right-1 icon-[heroicons--speaker-wave-solid] text-xs opacity-80"
            ></span>
          {/if}
        </Highlighted>

        {#if showRomanization}
          <span class="ml-3">{question.romanization}</span>
        {/if}

        <div class="group/list relative ml-6 cursor-default p-3">
          <button
            title="Pin this question."
            class="grid size-10 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
            onclick={() => {
              if (isQuestionPinned) {
                pinnedIdxs.delete(question!.idx);
              } else {
                pinnedIdxs.add(question!.idx);
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
              {#each questionsPools.pinned as { questionEntries, answerEntries, romanization, idx }}
                <button
                  class="group/item flex cursor-pointer items-center-safe gap-1.5 px-2 py-1.5"
                  onclick={() => {
                    pinnedIdxs.delete(idx);
                  }}
                >
                  <div class="flex flex-col items-start">
                    <div class="flex gap-4.5">
                      {@render entries(questionEntries)}
                      {@render entries(answerEntries)}
                    </div>
                    {#if romanization}
                      <span>{romanization}</span>
                    {/if}
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

    <div class="mt-9 flex flex-col gap-1.5">
      <span>Select the most appropriate one:</span>
    </div>

    <!-- options -->
    <div class="mt-6 flex flex-col gap-2">
      {#each options as option, i}
        <Highlighted
          vertical
          variant={isWrongOptions[i] ? "error" : "primary-lighter"}
          onclick={() => {
            if (!question) return;

            if (isEqual(option, question.answerEntries)) {
              nextQuestion();
            } else {
              isWrongOptions[i] = true;
              if (settings.pinWhenWrong) {
                pinnedIdxs.add(question.idx);
              }
            }
          }}
          disabled={isWrongOptions[i]}
        >
          {@render entries(option)}
        </Highlighted>
      {/each}
    </div>
  {/if}

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>
