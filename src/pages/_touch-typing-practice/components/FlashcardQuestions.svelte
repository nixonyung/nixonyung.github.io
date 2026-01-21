<script lang="ts" module>
  type Entry = string | string[];
</script>

<script lang="ts" generics="TWord extends object">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import Highlighted from "@/components/Highlighted.svelte";
  import KBD from "@/components/KBD.svelte";
  import NumericInput from "@/components/NumericInput.svelte";
  import { onkeydown } from "@/lib/keyboard";
  import { QuestionsQueue } from "@/lib/questions-queue.svelte.ts";
  import { speech } from "@/lib/speech.svelte";
  import { isEqual, randomInt, range, sortBy } from "es-toolkit";
  import { tick, untrack } from "svelte";
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
      });
    }

    return result;
  });

  let questionsQueue = $state(new QuestionsQueue(allQuestions));
  let question: (Question & { idx: number }) | undefined = $state();
  let questionRef: Highlighted | undefined = $state();
  let showRomanization = $state(false);

  let options: Entry[][] = $state([]);
  let isWrongOptions: boolean[] = $state([]);

  function entriesToStr(entries: Entry[]) {
    return entries.flat().join("|");
  }
  function genOptions() {
    options = [];
    if (question !== undefined) {
      // from allQuestions, sample N elements (without replacement) with filtering
      //
      // problem: need to efficiently find a new unique element if the current one is filtered out
      //
      // inferior solutions:
      //   - repeatedly call es-toolkit's `sampleSize` and filter until having enough elements
      //     - will incorrectly return elements WITH replacement
      //   - shuffle the whole array and pick until having N elements
      //     - costly in time when the array is large

      const optionStrs = new Set([entriesToStr(question.answerEntries)]);

      // Fisher-Yates shuffle, from left-to-right, running on indices to avoid copying
      // (ref.) https://github.com/toss/es-toolkit/blob/3d75a713169c2db6fffe04121bc73ac0363d741e/src/array/shuffle.ts
      const indices = range(allQuestions.length);
      let i = 0;
      while (options.length < settings.numOptions - 1 && i < indices.length) {
        const j = randomInt(i, indices.length);
        [indices[i], indices[j]] = [indices[j], indices[i]];
        const idx = indices[i];
        const word = allQuestions[idx];
        i++;

        // filter out answers from other same-looking questions
        if (isEqual(word.questionEntries, question.questionEntries)) continue;

        // filter out same-looking options
        const answerEntriesStr = entriesToStr(word.answerEntries);
        if (optionStrs.has(answerEntriesStr)) continue;

        // filter out pinned/unpinned depending on settings
        if (settings.onlyPinned && !questionsQueue.isPinned(idx)) continue;
        if (settings.onlyUnpinned && questionsQueue.isPinned(idx)) continue;

        options.push(word.answerEntries);
        optionStrs.add(answerEntriesStr);
      }

      // add the real answer
      options.push(question.answerEntries);
    }
    options = sortBy(options, [(entries) => entriesToStr(entries).toLowerCase()]);
    isWrongOptions = Array(options.length).fill(false);
  }

  function nextQuestion() {
    question = questionsQueue.next({
      onlyPinned: settings.onlyPinned,
      onlyUnpinned: settings.onlyUnpinned,
    });
    genOptions();
  }

  $effect.pre(() => {
    questionsQueue = new QuestionsQueue(allQuestions);
    untrack(() => nextQuestion());
  });
  $effect.pre(() => {
    question;

    showRomanization = false;
    if (untrack(() => settings.autoReadQuestion)) {
      tick().then(() => questionRef?.click());
    }
  });

  $effect.pre(() => {
    if (
      (settings.onlyPinned && untrack(() => questionsQueue.numPinned)) ||
      (settings.onlyUnpinned && untrack(() => questionsQueue.numPinned < allQuestions.length))
    )
      untrack(() => nextQuestion());
  });
  $effect.pre(() => {
    settings.numOptions;

    untrack(() => genOptions());
  });
</script>

<svelte:window
  onkeydown={onkeydown(({ key }) => {
    if (key === "r") {
      questionRef?.click();
    }
  })}
/>

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
    <NumericInput bind:value={settings.numOptions} label="Number of Options" min={2} />
  </div>

  {#snippet entries(entries: Entry[])}
    <div class="flex flex-col items-start">
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
    </div>
  {/snippet}

  {#if !isQuestionSettingsEmpty && !isOptionSettingsEmpty}
    <hr class="mt-6 opacity-50" />

    <!-- question -->
    <div class="mt-9 flex items-center-safe">
      <span class="underline">Question:</span>

      {#if question}
        <Highlighted
          bind:this={questionRef}
          class="ml-6"
          onclick={() => {
            showRomanization = true;
            speech.speak(question!.pronunciation);
          }}
        >
          <div class={["relative", speech.voice && "pr-3", speech.isSpeaking && "cursor-wait"]}>
            {@render entries(question.questionEntries)}

            <!-- pronunciation indicator -->
            {#if question.pronunciation && speech.voice}
              <span class="absolute top-0 -right-1.5 icon-[heroicons--speaker-wave-solid] text-xs"
              ></span>
            {/if}
          </div>

          {#snippet customTooltip()}
            <KBD label="r" /> to read the question.
          {/snippet}
        </Highlighted>

        {#if showRomanization}
          <span class="ml-3">{question.romanization}</span>
        {/if}

        <div class="group/list relative ml-6 cursor-default p-3">
          <button
            title="Pin this question."
            class="grid size-10 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
            onclick={() => {
              if (questionsQueue.isPinned(question!.idx)) {
                questionsQueue.unpin(question!.idx);
              } else {
                questionsQueue.pin(question!.idx);
              }
            }}
          >
            {#if questionsQueue.isPinned(question!.idx)}
              <span class="icon-[icon-park-solid--pin]"></span>
            {:else}
              <span class="icon-[icon-park-outline--pin] opacity-75"></span>
            {/if}
          </button>

          {#if questionsQueue.numPinned}
            <div
              class="invisible absolute top-0 right-0 z-10 flex translate-x-full translate-y-2 flex-col divide-y rounded bg-primary whitespace-nowrap ring group-hover/list:visible"
            >
              {#each questionsQueue.pinnedItems as { questionEntries, answerEntries, romanization, idx }}
                <button
                  class="group/item flex cursor-pointer items-center-safe gap-1.5 px-2 py-1.5"
                  onclick={() => {
                    questionsQueue.unpin(idx);
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

    <div class="mt-9">Select the most appropriate one:</div>

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
                questionsQueue.pin(question.idx);
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
