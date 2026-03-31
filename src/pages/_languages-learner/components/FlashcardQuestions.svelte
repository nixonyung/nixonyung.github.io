<script lang="ts">
  import Bordered from "@/components/svelte/Bordered.svelte";
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import FlashcardsList from "@/components/svelte/FlashcardsList.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import Icon from "@/components/svelte/Icon.svelte";
  import KBD from "@/components/svelte/KBD.svelte";
  import NumericInput from "@/components/svelte/NumericInput.svelte";
  import SearchBar from "@/components/svelte/SearchBar.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import { onkeydown } from "@/lib/keyboard";
  import { QuestionsQueue } from "@/lib/questions-queue.svelte.ts";
  import { speech } from "@/lib/speech.svelte";
  import { clamp, isEqual } from "es-toolkit";
  import { tick, untrack } from "svelte";
  import { initSettings, useSyncSettings } from "../../../lib/settings.svelte";

  const {
    flashcards,
  }: {
    flashcards: {
      question: string;
      answer: string;
      notes: string[];
      utterance: string;
      pronunciation: string;
    }[];
  } = $props();

  const settings = $state(
    initSettings({
      autoSpeak: { paramKey: "autoSpeak", defaultValue: false },
      hideQuestion: { paramKey: "hideQuestion", defaultValue: false },
      pinWhenWrong: { paramKey: "pinWhenWrong", defaultValue: true },
      onlyPinned: { paramKey: "onlyPinned", defaultValue: false },
      onlyUnpinned: { paramKey: "onlyUnpinned", defaultValue: false },
      numOptions: { paramKey: "numOptions", defaultValue: 6 },
    }),
  );
  useSyncSettings(settings);
  $effect.pre(() => {
    if (!speech.voice) untrack(() => (settings.autoSpeak.value = false));
  });
  $effect.pre(() => {
    if (settings.onlyPinned.value) untrack(() => (settings.onlyUnpinned.value = false));
  });
  $effect.pre(() => {
    if (settings.onlyUnpinned.value) untrack(() => (settings.onlyPinned.value = false));
  });

  const questionsQueue = $derived(
    new QuestionsQueue(flashcards.filter(({ question, answer }) => !!question && !!answer)),
  );
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
  function genOptions() {
    options = questionsQueue.genOptions({
      question,
      numOptions: settings.numOptions.value,
      keyFns: [
        // filter out options with the same look or pronunciation as the answer
        ({ answer }) => answer,
        ({ utterance }) => utterance,
        // filter out options from other same-looking questions
        ({ question }) => question,
      ],
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

  let optionRefs: Highlighted[] = $state([]);
  let speechBtnRef: HTMLButtonElement | undefined = $state();
  let pinBtnRef: HTMLButtonElement | undefined = $state();
  let showPronunciation = $state(false);
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

  let searchInput = $state("");
  const areOptionMatchingCommand = $derived.by(() => {
    question;
    searchInput;

    return untrack(() => {
      const result = Array.from({ length: options.length }, () => false);
      if (!searchInput.trim()) return result;

      for (const [optionIdx, option] of options.entries()) {
        if (areWrongOption[optionIdx]) continue;

        const optionVal = option.answer.toLowerCase();

        // check if optionVal includes all characters from search input while preserving ordering
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
      showPronunciation = false;
      optionSelectedIdx = undefined;
      areWrongOption = Array.from({ length: options.length }, () => false);
    });
  });
  $effect.pre(() => {
    question;
    if (settings.autoSpeak.value) tick().then(() => speechBtnRef?.click());
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

    const { key, ctrlKey, altKey, metaKey } = ev;

    // search input
    if (!!key.match(/^[a-z0-9/()[\]]$/) && !ctrlKey && !altKey && !metaKey) {
      searchInput += key;
    } else if (key === " " && searchInput.length !== 0) {
      if (searchInput.at(-1) !== " ") searchInput += " ";
    } else if (key === "Backspace" && !ctrlKey) {
      searchInput = searchInput.slice(0, -1);
    } else if ((key === "Backspace" && ctrlKey) || key === "Escape") {
      searchInput = "";
    }
    // manually select option
    else if (key === "ArrowDown" || key === "J") {
      ev.preventDefault();
      ev.stopPropagation();

      moveOptionSelectedIdx("down");
    } else if (key === "ArrowUp" || key === "K") {
      ev.preventDefault();
      ev.stopPropagation();

      moveOptionSelectedIdx("up");
    }
    // submit
    else if (key === "Enter" || (key === " " && searchInput.length === 0)) {
      ev.preventDefault();
      ev.stopPropagation();

      if (!!searchInput && onlyMatchingOptionIdx !== undefined) {
        optionRefs[onlyMatchingOptionIdx].click();
        searchInput = "";
      } else if (optionSelectedIdx !== undefined) {
        optionRefs[optionSelectedIdx]?.click();
      }
    }
    // hide question
    else if (key === "H") {
      settings.hideQuestion.value = !settings.hideQuestion.value;
    }
    // speak
    else if (key === "R") {
      speechBtnRef?.click();
    }
    // pin
    else if (key === "P") {
      pinBtnRef?.click();
    }
  })}
/>

<Bordered class="mt-6 flex flex-col gap-1.5 py-1.5">
  <span class="underline underline-offset-2">Keybindings:</span>

  <span class="mt-3">Selecting an option:</span>
  <span class="ml-3">
    <KBD icon="icon-[icon-park-outline--arrow-up]" />
    <span>,</span>
    <KBD icon="icon-[icon-park-outline--arrow-down]" />
    <span class="mx-1">/</span>
    <KBD text="Shift" />
    <span>+</span>
    <KBD text="j" />
    <span>,</span>
    <KBD text="Shift" />
    <span>+</span>
    <KBD text="k" />
    to select an option, ...
  </span>
  <span class="ml-3">
    or type anything to start searching (
    <KBD text="Esc" />
    <span class="mx-1">/</span>
    <KBD text="Ctrl" />
    <span>+</span>
    <KBD text="Backspace" />
    to exit)
  </span>
  <span>
    <KBD text="Enter" />
    <span class="mx-1">/</span>
    <KBD text="Space" />
    (only when not searching) to submit.
  </span>

  <span class="mt-3">
    <KBD text="Shift" />
    <span>+</span>
    <KBD text="h" />
    to toggle show/hide question.
  </span>
  <span>
    <KBD text="Shift" />
    <span>+</span>
    <KBD text="r" />
    to read the question.
  </span>
  <span>
    <KBD text="Shift" />
    <span>+</span>
    <KBD text="p" />
    to pin/unpin the question.
  </span>
</Bordered>

<!-- settings -->
<SettingsRows class="mt-8">
  <SettingsRow>
    <CheckboxInput
      bind:checked={settings.autoSpeak.value}
      icon="icon-[icon-park-solid--people-speak]"
      label="auto read question"
      disabled={!speech.voice}
    />
    <CheckboxInput
      bind:checked={settings.hideQuestion.value}
      icon="icon-[heroicons--eye-slash-solid]"
      label="hide question"
    />
  </SettingsRow>

  <SettingsRow>
    <CheckboxInput
      bind:checked={settings.pinWhenWrong.value}
      icon="icon-[ix--tag-plus-filled]"
      label="auto pin when wrong"
    />
    <CheckboxInput
      bind:checked={settings.onlyPinned.value}
      icon="icon-[icon-park-solid--pin]"
      label="only use pinned (if any)"
    />
    <CheckboxInput
      bind:checked={settings.onlyUnpinned.value}
      icon="icon-[icon-park-outline--pin]"
      label="only use unpinned (if any)"
    />
  </SettingsRow>

  <SettingsRow>
    <NumericInput
      bind:value={settings.numOptions.value}
      icon="icon-[heroicons--square-3-stack-3d-solid]"
      label="number of options"
      min={2}
    />
  </SettingsRow>
</SettingsRows>

<!-- question -->
<div class="mt-8 flex items-center-safe">
  <span class="underline underline-offset-2">Question:</span>

  {#if question}
    {#if !settings.hideQuestion.value}
      <Highlighted class="ml-6">
        {question.question}
      </Highlighted>
    {/if}

    <!-- speech button -->
    {#if speech.voice}
      <button
        bind:this={speechBtnRef}
        class="ml-4 grid size-8 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
        onclick={() => {
          showPronunciation = true;
          speech.speak(question!.utterance);
        }}
      >
        <Icon icon="icon-[heroicons--speaker-wave-solid]" />
      </button>
    {/if}
    {#if showPronunciation}
      <span class="ml-1 text-sm">{question.pronunciation}</span>
    {/if}

    <!-- pin button -->
    <div class="group/list relative ml-4 p-4">
      <button
        bind:this={pinBtnRef}
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
          {@const { question, pronunciation, idx } = questionsQueueItems[i]}

          <button
            class="group/item flex w-full cursor-pointer items-center-safe gap-2 px-2 py-1"
            onclick={() => togglePin(idx)}
          >
            <span>{i + 1}.</span>

            <div class="ml-2 flex items-center-safe gap-2">
              <span>{question}</span>
              <span class="text-sm">---</span>
              <span class="text-sm">{pronunciation}</span>
            </div>

            <div class="min-w-4 grow"></div>

            {#if questionsQueue.isPinned(idx)}
              <Icon icon="icon-[icon-park-solid--pin]" class="mr-1" />
            {:else}
              <Icon
                icon="icon-[icon-park-outline--pin]"
                class="mr-1 opacity-25 group-hover/item:opacity-75"
              />
            {/if}
          </button>
        {/snippet}
      </FlashcardsList>
    </div>
  {/if}
</div>

<div class="mt-8">Select the most appropriate one:</div>

<!-- options -->
<div class="mt-4 flex flex-col items-start gap-3">
  {#each options as option, i (option.answer)}
    <div class="flex items-center-safe">
      <Highlighted
        bind:this={optionRefs[i]}
        vertical
        variant={areWrongOption[i] ? "error" : "primary-lighter"}
        class={[
          "scroll-m-60",
          (searchInput ? areOptionMatchingCommand[i] : i === optionSelectedIdx) &&
            "outline-2 outline-primary-content/75",
        ]}
        onclick={() => {
          if (!question) return;

          if (isEqual(option.answer, question.answer)) {
            nextQuestion();
          } else if (areWrongOption[i]) {
            speech.speak(option.utterance);
          } else {
            areWrongOption[i] = true;
            if (settings.pinWhenWrong.value) togglePin(question.idx, true);
          }
        }}
      >
        <span>{option.answer}</span>
      </Highlighted>

      {#if areWrongOption[i]}
        <div class="ml-4 flex items-center-safe">
          <span class="text-sm">{option.question}</span>
          <span class="ml-4 text-xs">---</span>

          {#if speech.voice}
            <button
              class="ml-2 grid size-8 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
              onclick={() => speech.speak(option.utterance)}
            >
              <Icon icon="icon-[heroicons--speaker-wave-solid]" />
            </button>
          {/if}
          <span class="ml-1 text-xs">{option.pronunciation}</span>
        </div>
      {/if}
    </div>
  {/each}
</div>

<!-- padding -->
<div class="h-[75dvh]"></div>

<SearchBar bind:searchInput isInvalid={onlyMatchingOptionIdx === undefined} />
