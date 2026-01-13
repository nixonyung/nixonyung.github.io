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

  const USE_PINNED_PROB = 0.4;

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
    onlyPinned: {
      paramKey: "onlyPinned",
      defaultValue: false,
    },
    autoReadQuestion: {
      paramKey: "autoReadQuestion",
      defaultValue: false,
    },
    pinWhenWrong: {
      paramKey: "pinWhenWrong",
      defaultValue: true,
    },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

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
  let isWrongOptions: boolean[] = $state([]);
  let showRomanization = $state(false);
  $effect.pre(() => {
    validWords;

    pinnedIdxs = new SvelteSet<number>();
  });
  $effect.pre(() => {
    if (!question) return;

    if (pinnedIdxs.has(question.idx)) {
      isQuestionPinned = true;
    } else {
      isQuestionPinned = false;
    }
  });

  function nextQuestion() {
    untrack(() => {
      question = (
        pinnedIdxs.size && (settings.onlyPinned || random(1) < USE_PINNED_PROB)
          ? pinnedQuestionsQueue
          : questionsQueue
      ).next();
      isQuestionPinned = false;
      showRomanization = false;

      options = [];
      if (question !== undefined) {
        isQuestionPinned = pinnedIdxs.has(question.idx);
        if (settings.autoReadQuestion) {
          speech.speak(question?.pronunciation);
        }

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
      isWrongOptions = Array(options.length).fill(false);
    });
  }
  $effect.pre(() => {
    validWords;
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
    <CheckboxInput bind:checked={settings.onlyPinned} label="Only Use Pinned (if any)" />
    <NumericInput bind:value={settings.numOptions} label="Number of Options" min={1} />
  </div>

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
          {@render item(question.questionKey)}

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
              {#each pinnedQuestions as { questionKey, answerKey, romanization, idx }}
                <button
                  class="group/item flex cursor-pointer items-center-safe gap-1.5 px-2 py-1.5"
                  onclick={() => {
                    pinnedIdxs.delete(idx);
                  }}
                >
                  <div class="flex flex-col items-start">
                    <div class="flex gap-4.5">
                      {@render item(questionKey)}
                      {@render item(answerKey)}
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

            if (isEqual(option, question.answerKey)) {
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
          {@render item(option)}
        </Highlighted>
      {/each}
    </div>
  {/if}

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>
