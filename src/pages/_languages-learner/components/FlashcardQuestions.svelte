<script lang="ts">
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
      onlySpeech: { paramKey: "onlySpeech", defaultValue: false },
      pinWhenWrong: { paramKey: "pinWhenWrong", defaultValue: true },
      onlyPinned: { paramKey: "onlyPinned", defaultValue: false },
      onlyUnpinned: { paramKey: "onlyUnpinned", defaultValue: false },
      numOptions: { paramKey: "numOptions", defaultValue: 6 },
    }),
  );
  useSyncSettings(settings);
  $effect.pre(() => {
    if (!speech.voice) untrack(() => (settings.onlySpeech.value = false));
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
      isSearchMode = false;
      if (settings.onlySpeech.value) {
        tick().then(() => speechBtnRef?.click());
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

    const { key, ctrlKey, altKey } = ev;

    switch (true) {
      // search input
      case !!key.match(/^[a-z0-9/()\[\]]$/):
        searchInput += key;

        break;
      case key === " ":
        const lastChar = searchInput.at(-1);
        if (lastChar === undefined || lastChar !== " ") {
          searchInput += " ";
        }

        break;
      case key === "Backspace" && !ctrlKey:
        searchInput = searchInput.slice(0, -1);

        break;
      case (key === "Backspace" && ctrlKey) || key === "Escape":
        searchInput = "";

        break;

      // manually select option
      case key === "ArrowDown":
        ev.preventDefault();
        ev.stopPropagation();

        moveOptionSelectedIdx("down");

        break;
      case key === "ArrowUp":
        ev.preventDefault();
        ev.stopPropagation();

        moveOptionSelectedIdx("up");

        break;

      // submit
      case key === "Enter":
        ev.preventDefault();
        ev.stopPropagation();

        if (!!searchInput && onlyMatchingOptionIdx !== undefined) {
          optionRefs[onlyMatchingOptionIdx].click();
          searchInput = "";
        } else if (optionSelectedIdx !== undefined) {
          optionRefs[optionSelectedIdx]?.click();
        }

        break;

      // speech
      case key === "R":
        ev.preventDefault();
        ev.stopPropagation();

        speechBtnRef?.click();

        break;
      // pin
      case key === "P":
        ev.preventDefault();
        ev.stopPropagation();

        pinBtnRef?.click();

        break;
    }
  })}
/>

<div>
  <hr class="mt-3 opacity-50" />

  <!-- settings -->
  <SettingsRowsBordered class="mt-6 gap-1.5 py-1.5">
    <span class="underline underline-offset-2">Keybindings:</span>

    <span class="mt-3">Selecting an option:</span>
    <span class="ml-3">
      <KBD icon="icon-[icon-park-outline--arrow-up]" />
      <span>+</span>
      <KBD icon="icon-[icon-park-outline--arrow-down]" />
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
      to submit.
    </span>

    <span class="mt-3">
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
  </SettingsRowsBordered>

  <div class="mt-6 flex flex-col gap-1.5">
    {#if speech.voice}
      <CheckboxInput
        bind:checked={settings.onlySpeech.value}
        label="only use speech and hide question"
      />
    {/if}
    <CheckboxInput bind:checked={settings.pinWhenWrong.value} label="auto pin when wrong" />
    <div class="flex gap-9">
      <CheckboxInput bind:checked={settings.onlyPinned.value} label="only use pinned (if any)" />
      <CheckboxInput
        bind:checked={settings.onlyUnpinned.value}
        label="only use unpinned (if any)"
      />
    </div>
    <NumericInput bind:value={settings.numOptions.value} label="number of options" min={2} />
  </div>

  <hr class="mt-6 opacity-50" />

  <!-- question -->
  <div class="mt-6 flex items-center-safe">
    <span class="underline underline-offset-2">Question:</span>

    {#if question}
      {#if !settings.onlySpeech.value}
        <Highlighted class="ml-6">
          {question.question}
        </Highlighted>
      {/if}

      <!-- speech button -->
      {#if speech.voice}
        <button
          bind:this={speechBtnRef}
          class="ml-6 grid size-8 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
          onclick={() => {
            showPronunciation = true;
            speech.speak(question!.utterance);
          }}
        >
          <Icon icon="icon-[heroicons--speaker-wave-solid]" />
        </button>
      {/if}
      {#if !settings.onlySpeech.value && showPronunciation}
        <span class="ml-1 text-sm">{question.pronunciation}</span>
      {/if}

      <!-- pin button -->
      <div class="group/list relative ml-3 p-3">
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
              class="group/item flex w-full cursor-pointer items-center-safe gap-1.5 px-2 py-1.5"
              onclick={() => togglePin(idx)}
            >
              <span>{i + 1}.</span>

              <div class="ml-1.5 flex items-center-safe">
                <span>{question}</span>
                <span class="ml-3 text-sm">---</span>
                <span class="ml-3 text-sm">{pronunciation}</span>
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
    {#each options as option, i (option.answer)}
      <div class="flex items-center-safe">
        <Highlighted
          bind:this={optionRefs[i]}
          vertical
          variant={areWrongOption[i] ? "error" : "primary-lighter"}
          class={[
            "scroll-m-60",
            (!!searchInput ? areOptionMatchingCommand[i] : i === optionSelectedIdx) &&
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
          <div class="ml-3 flex items-center-safe text-sm">
            <span>{option.question}</span>
            <span class="ml-3">---</span>

            {#if speech.voice}
              <button
                class="ml-3 grid size-8 cursor-pointer place-items-center-safe rounded-full text-primary-content hover:bg-primary-lighter"
                onclick={() => speech.speak(option.utterance)}
              >
                <Icon icon="icon-[heroicons--speaker-wave-solid]" />
              </button>
            {/if}
            <span class="ml-1">{option.pronunciation}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>

<SearchBar bind:searchInput isInvalid={onlyMatchingOptionIdx === undefined} />
