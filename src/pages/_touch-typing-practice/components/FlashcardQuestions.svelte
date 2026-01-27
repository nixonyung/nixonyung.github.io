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
  import { isEqual, range } from "es-toolkit";
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

  const settings = $state(
    initSettings({
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
    }),
  );
  useSyncSettings(settings);
  $effect.pre(() => {
    if (settings.onlyPinned.value) untrack(() => (settings.onlyUnpinned.value = false));
  });
  $effect.pre(() => {
    if (settings.onlyUnpinned.value) untrack(() => (settings.onlyPinned.value = false));
  });

  const isQuestionSettingsEmpty = $derived(!settings.questionSettings.value.some((is) => is));
  const isOptionSettingsEmpty = $derived(!settings.optionSettings.value.some((is) => is));
  $effect.pre(() => {
    for (const [i, enabled] of settings.questionSettings.value.entries()) {
      if (enabled) untrack(() => (settings.optionSettings.value[i] = false));
    }
  });
  $effect.pre(() => {
    for (const [i, enabled] of settings.optionSettings.value.entries()) {
      if (enabled) untrack(() => (settings.questionSettings.value[i] = false));
    }
  });

  function wordToEntries(word: TWord, settings: boolean[]) {
    const entries = range(settings.length)
      .filter((i) => settings[i])
      .map((i) => schema[i].valueFn(word));
    return entries.includes(undefined)
      ? undefined
      : (entries as Exclude<ReturnType<(typeof schema)[number]["valueFn"]>, undefined>[]);
  }

  const questionsQueue = $derived.by(() => {
    const questions: {
      word: TWord;
      questionEntries: Entry[];
      answerEntries: Entry[];
      pronunciation?: string;
      romanization?: string;
    }[] = [];

    for (const word of words) {
      const questionEntries = wordToEntries(word, settings.questionSettings.value);
      const answerEntries = wordToEntries(word, settings.optionSettings.value);
      if (questionEntries === undefined || answerEntries === undefined) continue;

      questions.push({
        word,
        questionEntries,
        answerEntries,
        pronunciation: wordToPronunciationFn?.(word),
        romanization: wordToRomanizationFn?.(word),
      });
    }

    return new QuestionsQueue(questions);
  });
  let question: ReturnType<(typeof questionsQueue)["nextQuestion"]> = $state();
  let options: ReturnType<(typeof questionsQueue)["genOptions"]> = $state([]);
  function entriesToStr(entries: Entry[]) {
    return entries.flat().join("|");
  }
  function genOptions() {
    options = questionsQueue.genOptions(
      question,
      settings.numOptions.value,
      {
        onlyPinned: settings.onlyPinned.value,
        onlyUnpinned: settings.onlyUnpinned.value,
      },
      // filter out answers from other same-looking questions
      (question, option) => !isEqual(option.questionEntries, question.questionEntries),
      // filter out same-looking options
      (option) => entriesToStr(option.answerEntries),
    );
  }
  function nextQuestion() {
    question = questionsQueue.nextQuestion({
      onlyPinned: settings.onlyPinned.value,
      onlyUnpinned: settings.onlyUnpinned.value,
    });
    genOptions();
  }
  $effect.pre(() => {
    questionsQueue;

    untrack(() => nextQuestion());
  });

  let questionRef: Highlighted | undefined = $state();
  let showRomanization = $state(false);
  let isWrongOptions: boolean[] = $state([]);
  $effect.pre(() => {
    question;

    showRomanization = false;
    isWrongOptions = Array(options.length).fill(false);
    if (untrack(() => settings.autoReadQuestion.value)) {
      tick().then(() => questionRef?.click());
    }
  });

  $effect.pre(() => {
    if (
      (settings.onlyPinned.value && untrack(() => questionsQueue.numPinned)) ||
      (settings.onlyUnpinned.value && untrack(() => questionsQueue.numUnpinned))
    )
      untrack(() => nextQuestion());
  });
  $effect.pre(() => {
    settings.numOptions.value;

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

    {#each schema as { label }, i (label)}
      <div class="flex flex-col">
        <CheckboxInput bind:checked={settings.questionSettings.value[i]} {label} />
        <CheckboxInput bind:checked={settings.optionSettings.value[i]} {label} />
      </div>
    {/each}

    <div class="flex flex-col text-red-700">
      <span class={[!isQuestionSettingsEmpty && "invisible"]}>Please choose at least one!</span>
      <span class={[!isOptionSettingsEmpty && "invisible"]}>Please choose at least one!</span>
    </div>
  </div>
  <div class="mt-3 flex flex-col gap-1.5">
    <CheckboxInput bind:checked={settings.autoReadQuestion.value} label="Auto Read Question" />
    <CheckboxInput bind:checked={settings.pinWhenWrong.value} label="Auto Pin When Wrong" />
    <div class="flex gap-9">
      <CheckboxInput bind:checked={settings.onlyPinned.value} label="Only Use Pinned (if any)" />
      <CheckboxInput
        bind:checked={settings.onlyUnpinned.value}
        label="Only Use Unpinned (if any)"
      />
    </div>
    <NumericInput bind:value={settings.numOptions.value} label="Number of Options" min={2} />
  </div>

  {#snippet entries(entries: Entry[])}
    <div class="flex flex-col items-start">
      {#each entries as entry (entry)}
        {#if typeof entry === "string"}
          <span>{entry}</span>
        {:else if Array.isArray(entry) && entry.length}
          <div class="flex flex-col items-start text-xs">
            {#each entry as text (text)}
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
              {#each questionsQueue.items( { onlyPinned: true }, ) as { questionEntries, answerEntries, romanization, idx } (idx)}
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
      {#each options as option, i (entriesToStr(option.answerEntries))}
        <Highlighted
          vertical
          variant={isWrongOptions[i] ? "error" : "primary-lighter"}
          onclick={() => {
            if (!question) return;

            if (isEqual(option.answerEntries, question.answerEntries)) {
              nextQuestion();
            } else {
              isWrongOptions[i] = true;
              if (settings.pinWhenWrong.value) {
                questionsQueue.pin(question.idx);
              }
            }
          }}
          disabled={isWrongOptions[i]}
        >
          {@render entries(option.answerEntries)}
        </Highlighted>
      {/each}
    </div>
  {/if}

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>
