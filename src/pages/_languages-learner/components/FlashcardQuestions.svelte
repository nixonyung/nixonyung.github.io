<script lang="ts" module>
  type Entry = string | string[];
</script>

<script lang="ts" generics="TWord extends object">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import FlashcardsList from "@/components/FlashcardsList.svelte";
  import Highlighted from "@/components/Highlighted.svelte";
  import Icon from "@/components/Icon.svelte";
  import KBD from "@/components/KBD.svelte";
  import NumericInput from "@/components/NumericInput.svelte";
  import SearchBar from "@/components/SearchBar.svelte";
  import SettingsRowsBordered from "@/components/SettingsRowsBordered.svelte";
  import { onkeydown } from "@/lib/keyboard";
  import { QuestionsQueue } from "@/lib/questions-queue.svelte.ts";
  import { speech } from "@/lib/speech.svelte";
  import { clamp, isEqual, range } from "es-toolkit";
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
  // settings are valid only if BOTH pinned/unpinned element exists
  const onlyPinned = $derived(
    settings.onlyPinned.value && !!questionsQueue.numPinned && !!questionsQueue.numUnpinned,
  );
  const onlyUnpinned = $derived(
    settings.onlyUnpinned.value && !!questionsQueue.numPinned && !!questionsQueue.numUnpinned,
  );
  let prevPinningSettings = $state({ onlyPinned, onlyUnpinned });
  $effect.pre(() => {
    settings.onlyPinned.value;
    settings.onlyUnpinned.value;

    untrack(() => {
      if (
        prevPinningSettings.onlyPinned === onlyPinned &&
        prevPinningSettings.onlyUnpinned === onlyUnpinned
      )
        return;

      if (!prevPinningSettings.onlyPinned && !prevPinningSettings.onlyUnpinned) {
        questionsQueue.filter({ onlyPinned, onlyUnpinned });
      } else {
        questionsQueue.newQueue({ onlyPinned, onlyUnpinned });
      }
      nextQuestion();

      prevPinningSettings = { onlyPinned, onlyUnpinned };
    });
  });

  let isPinningModified = $state(false);
  function togglePin(idx: number, val?: boolean) {
    if (val === true) {
      questionsQueue.pin(idx);
    } else if (val === false) {
      questionsQueue.unpin(idx);
    } else if (questionsQueue.isPinned(idx)) {
      questionsQueue.unpin(idx);
    } else {
      questionsQueue.pin(idx);
    }

    isPinningModified = true;
  }

  let question: ReturnType<(typeof questionsQueue)["nextQuestion"]> = $state();
  let options: ReturnType<(typeof questionsQueue)["genOptions"]> = $state([]);
  function entriesToStr(entries: Entry[]) {
    return entries
      .flat()
      .map((entry) => entry.toLowerCase())
      .join("|");
  }
  function genOptions() {
    options = questionsQueue.genOptions({
      question,
      numOptions: settings.numOptions.value,
      // filter out answers from other same-looking or same-sounding questions
      filterFn: (question, option) =>
        !isEqual(option.questionEntries, question.questionEntries) &&
        !isEqual(option.romanization, question.romanization),
      // make options unique in looks
      keyFn: (option) => entriesToStr(option.answerEntries),
    });
  }
  function nextQuestion() {
    if (isPinningModified) {
      questionsQueue.filter({ onlyPinned, onlyUnpinned });
    }

    if (
      prevPinningSettings.onlyPinned !== onlyPinned ||
      prevPinningSettings.onlyUnpinned !== onlyUnpinned
    ) {
      if (!prevPinningSettings.onlyPinned && !prevPinningSettings.onlyUnpinned) {
        questionsQueue.filter({ onlyPinned, onlyUnpinned });
      } else {
        questionsQueue.newQueue({ onlyPinned, onlyUnpinned });
      }
      prevPinningSettings = { onlyPinned, onlyUnpinned };
    }

    question = questionsQueue.nextQuestion();
    genOptions();
  }
  const questionsQueueItems = $derived.by(() => {
    question;

    return questionsQueue.items();
  });
  $effect.pre(() => {
    questionsQueue;

    untrack(() => nextQuestion());
  });
  $effect.pre(() => {
    settings.numOptions.value;

    untrack(() => genOptions());
  });

  let questionRef: Highlighted | undefined = $state();
  let optionRefs: Highlighted[] = $state([]);
  let pinButtonRef: Highlighted | undefined = $state();
  let showRomanization = $state(false);
  let areWrongOption: boolean[] = $state([]);

  // the option idx selected by arrow motions
  let optionSelectedIdx: number | undefined = $state();
  function moveOptionSelectedIdx(motion: "up" | "down") {
    const offset = motion === "down" ? 1 : -1;

    optionSelectedIdx =
      optionSelectedIdx !== undefined
        ? clamp(optionSelectedIdx + offset, 0, settings.numOptions.value - 1)
        : 0;
    optionRefs[optionSelectedIdx!]?.scrollIntoView();
  }

  let isSearchMode = $state(false);
  let searchInput = $state("");
  const areOptionMatchingCommand = $derived.by(() => {
    question;
    searchInput;

    return untrack(() => {
      const result = Array.from({ length: options.length }, () => false);
      if (!searchInput.trim()) return result;

      for (const [optionIdx, option] of options.entries()) {
        if (areWrongOption[optionIdx]) continue;

        const optionVal = entriesToStr(option.answerEntries); // entriesToStr should return in all lowercase

        // check if optionVal includes all characters from command while preserving ordering
        // e.g.
        //   optionVal=1234,   command=124  => return true
        //            (12 4)
        //   optionVal=1234,   command=421  => return false
        //            (   421)
        //   optionVal=123421, command=421  => return true
        //            (   421)

        let optionValIdx = 0;
        let ok = true;
        let isFullMatchingPrefix = true;
        for (let i = 0; i < searchInput.length; i++) {
          const ch = searchInput[i].toLowerCase();

          isFullMatchingPrefix &&= optionVal[i] === ch;

          // ignore whitespaces in searchInput
          if (ch === " ") continue;
          while (
            optionValIdx < optionVal.length &&
            optionVal[optionValIdx].toLowerCase() !== ch.toLowerCase()
          )
            optionValIdx++;

          if (optionValIdx >= optionVal.length) {
            ok = false;
            break;
          }
          optionValIdx++;
        }
        // if there is a full match, only select the element
        if (isFullMatchingPrefix && optionValIdx === optionVal.length)
          return Array.from({ length: options.length }, (_, i) => i === optionIdx);
        result[optionIdx] = ok;
      }

      return result;
    });
  });
  const onlyMatchingOptionIdx = $derived.by(() => {
    let onlyIdx: number | undefined = undefined;

    for (const [i, is] of areOptionMatchingCommand.entries()) {
      if (!is) continue;
      if (onlyIdx !== undefined) return undefined;
      onlyIdx = i;
    }

    return onlyIdx;
  });

  $effect.pre(() => {
    question;

    untrack(() => {
      isPinningModified = false;
      showRomanization = false;
      optionSelectedIdx = undefined;
      areWrongOption = Array.from({ length: options.length }, () => false);
      isSearchMode = false;
      if (settings.autoReadQuestion.value) {
        tick().then(() => questionRef?.click());
      }
    });
  });
  $effect.pre(() => {
    settings.numOptions.value;

    untrack(() => {
      areWrongOption = Array.from({ length: options.length }, () => false);
    });
  });
</script>

<svelte:window
  onkeydown={onkeydown((ev) => {
    if (!question) return;

    const { key, ctrlKey } = ev;

    if (isSearchMode) {
      if (key.match(/^[ a-zA-Z0-9]$/)) {
        searchInput += key;
      } else {
        switch (key) {
          case " ":
            const lastChar = searchInput.at(-1);
            if (lastChar === undefined || lastChar !== " ") {
              searchInput += " ";
            }
            break;

          case "Backspace":
            if (ctrlKey) {
              searchInput = "";
            } else {
              searchInput = searchInput.slice(0, -1);
            }
            break;

          case "Enter":
            if (onlyMatchingOptionIdx !== undefined) {
              optionRefs[onlyMatchingOptionIdx].click();
              searchInput = "";
            }
            break;

          case "Escape":
            isSearchMode = false;
            searchInput = "";
        }
      }
    } else {
      switch (key) {
        case "ArrowDown":
          ev.preventDefault();
        case "j":
          moveOptionSelectedIdx("down");
          break;

        case "ArrowUp":
          ev.preventDefault();
        case "k":
          moveOptionSelectedIdx("up");
          break;

        case " ":
        case "Enter":
          if (optionSelectedIdx !== undefined) {
            optionRefs[optionSelectedIdx]?.click();
          }
          break;

        case "p":
          pinButtonRef?.click();
          break;

        case "r":
          questionRef?.click();
          break;

        case "f":
          if (!ctrlKey) break;
          ev.preventDefault();
        case "/":
          isSearchMode = true;
          break;
      }
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

  <hr class="mt-6 opacity-50" />

  <SettingsRowsBordered class="mt-6 gap-1.5 py-1.5">
    <span class="underline underline-offset-2">Keybindings:</span>
    <span>
      <KBD>r</KBD>
      to read the question.
    </span>
    <span>
      <KBD>p</KBD>
      to pin/unpin the question.
    </span>
    <span>
      <KBD noPadding><Icon icon="icon-[icon-park-outline--arrow-up]" /></KBD>
      <span>+</span>
      <KBD noPadding><Icon icon="icon-[icon-park-outline--arrow-down]" /></KBD>
      <span class="mx-1">/</span>
      <KBD>j</KBD>
      <span>+</span>
      <KBD>k</KBD>
      to select an option.
    </span>
    <span>
      <KBD>Ctrl</KBD>
      <span>+</span>
      <KBD>f</KBD>
      <span class="mx-1">/</span>
      <KBD>/</KBD>
      to start Search mode (type to select an option,
      <KBD>Esc</KBD> to exit).
    </span>
    <span>
      <KBD>Enter</KBD>
      to submit.
    </span>
  </SettingsRowsBordered>

  {#if !isQuestionSettingsEmpty && !isOptionSettingsEmpty}
    <!-- question -->
    <div class="mt-12 flex items-center-safe">
      <span class="underline underline-offset-2">Question:</span>

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
              <Icon
                icon="icon-[heroicons--speaker-wave-solid]"
                class="absolute top-0 -right-1.5 text-xs"
              />
            {/if}
          </div>
        </Highlighted>

        {#if showRomanization}
          <span class="ml-3">{question.romanization}</span>
        {/if}

        <div class="group/list relative ml-6 p-3">
          <button
            bind:this={pinButtonRef}
            class="grid size-10 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
            onclick={() => togglePin(question!.idx)}
          >
            {#if questionsQueue.isPinned(question!.idx)}
              <Icon icon="icon-[icon-park-solid--pin]" />
            {:else}
              <Icon icon="icon-[icon-park-outline--pin]" class="opacity-75" />
            {/if}
          </button>

          <FlashcardsList
            length={questionsQueueItems.length}
            focusedIdx={question!.queueIdx}
            class="invisible absolute top-0 right-0 z-10 translate-x-full translate-y-2 rounded bg-primary whitespace-nowrap opacity-0 ring transition-all duration-300 ease-out group-hover/list:visible group-hover/list:opacity-100"
          >
            {#snippet row(i)}
              {@const { questionEntries, romanization, idx } = questionsQueueItems[i]}

              <button
                class="group/item flex w-full cursor-pointer items-center-safe gap-1.5 px-2 py-1.5"
                onclick={() => togglePin(idx)}
              >
                <span>{i + 1}.</span>

                <div class="ml-1.5 flex flex-col items-start">
                  {@render entries(questionEntries)}

                  {#if romanization}
                    <span>{romanization}</span>
                  {/if}
                </div>

                <div class="min-w-6 grow"></div>

                {#if questionsQueue.isPinned(idx)}
                  <Icon icon="icon-[icon-park-solid--pin]" class="mr-1.5" />
                {:else}
                  <Icon
                    icon="icon-[icon-park-outline--pin]"
                    class="mr-1.5 opacity-25 group-hover/item:opacity-75"
                  />
                {/if}
              </button>
            {/snippet}
          </FlashcardsList>
        </div>
      {/if}
    </div>

    <div class="mt-9">Select the most appropriate one:</div>

    <!-- options -->
    <div class="mt-6 flex flex-col items-start gap-3">
      {#each options as option, i (entriesToStr(option.answerEntries))}
        <div class="flex items-center-safe gap-3">
          <Highlighted
            bind:this={optionRefs[i]}
            vertical
            variant={areWrongOption[i] ? "error" : "primary-lighter"}
            class={[
              "scroll-m-60",
              (isSearchMode ? areOptionMatchingCommand[i] : i === optionSelectedIdx) &&
                "outline-2 outline-primary-content/75",
            ]}
            onclick={() => {
              if (!question) return;

              if (isEqual(option.answerEntries, question.answerEntries)) {
                nextQuestion();
              } else if (areWrongOption[i]) {
                speech.speak(option.pronunciation);
              } else {
                areWrongOption[i] = true;
                if (settings.pinWhenWrong.value) togglePin(question.idx, true);
              }
            }}
          >
            {@render entries(option.answerEntries)}
          </Highlighted>

          {#if areWrongOption[i]}
            {option.romanization}
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>

<SearchBar
  bind:searchInput
  bind:enabled={isSearchMode}
  isInvalid={onlyMatchingOptionIdx === undefined}
/>
