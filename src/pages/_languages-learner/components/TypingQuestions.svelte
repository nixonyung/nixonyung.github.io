<script lang="ts" module>
  const NUM_QUESTIONS = 7;
</script>

<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import SettingsContainer from "@/components/svelte/SettingsContainer.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import { CircularQueue } from "@/lib/circular-queue";
  import { onkeydown } from "@/lib/keyboard";
  import { QuestionsQueue } from "@/lib/questions-queue.svelte.ts";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte";
  import { speech } from "@/lib/speech.svelte";
  import { untrack } from "svelte";
  import type { Keymap, Letter } from "../types";
  import TypingKeyboard from "./TypingKeyboard.svelte";

  const {
    letters,
    keymap,
    showNumberRow = false,
    showTilde = false,
    showSymbols = false,
  }: {
    letters: Letter[];
    keymap: Keymap;
    showNumberRow?: boolean;
    showTilde?: boolean;
    showSymbols?: boolean;
  } = $props();

  const settings = $state(
    initSettings({
      hideKeys: { paramKey: "hideKeys", defaultValue: false },
      highlightCorrectKey: { paramKey: "showCorrectKey", defaultValue: false },
      ignoreTypos: { paramKey: "ignoreTypos", defaultValue: false },
      speakOnCorrect: { paramKey: "speakOnCorrect", defaultValue: false },
    }),
  );
  useSyncSettings(settings);

  const questionsQueue = $derived(
    new QuestionsQueue(
      letters.map(({ letter, svgPath: svg, actualPronunciation, romanization, actualInput }) => ({
        letter,
        svgPath: svg,
        pronunciation: actualPronunciation ?? letter,
        romanization: romanization,
        input: actualInput ?? romanization ?? letter,
      })),
    ),
  );
  type Question = ReturnType<(typeof questionsQueue)["nextQuestion"]>;
  let questions = $state(new CircularQueue<Question>(NUM_QUESTIONS));
  let prevQuestion: Question | undefined = $state();
  let input = $state("");

  function nextQuestion() {
    prevQuestion = questions.top;
    questions.push(questionsQueue.nextQuestion());
    input = "";
  }
  $effect.pre(() => {
    questionsQueue;

    untrack(() => {
      questions = new CircularQueue<Question>(NUM_QUESTIONS);
      for (let i = 0; i < NUM_QUESTIONS; i++) nextQuestion();
      prevQuestion = undefined;
    });
  });
</script>

<svelte:window
  onkeydown={onkeydown(({ key, ctrlKey, metaKey }) => {
    if (key.match(/^[a-zA-Z]$/) || key in keymap) {
      if (settings.ignoreTypos.value && key !== questions.top?.input[input.length]) return;

      input += key;
      if (input === questions.top?.input) {
        if (settings.speakOnCorrect.value) {
          speech.speak(questions.top?.pronunciation);
        }
        nextQuestion();
      }
    } else {
      switch (key) {
        case "Backspace":
          if (ctrlKey || metaKey) {
            input = "";
          } else {
            input = input.slice(0, -1);
          }
          break;
      }
    }
  })}
/>

<div>
  <!-- settings -->
  <SettingsContainer>
    <SettingsRows>
      <SettingsRow>
        <CheckboxInput
          bind:checked={settings.hideKeys.value}
          icon="icon-[heroicons--eye-slash-solid]"
          label="hide keys"
        />
        <CheckboxInput
          bind:checked={settings.highlightCorrectKey.value}
          icon="icon-[ix--highlight-filled]"
          label="highlight the correct key"
        />
        <CheckboxInput
          bind:checked={settings.ignoreTypos.value}
          icon="icon-[heroicons--shield-check-solid]"
          label="ignore typos"
        />
        <CheckboxInput
          bind:checked={settings.speakOnCorrect.value}
          icon="icon-[icon-park-solid--people-speak]"
          label="auto speak on correct"
        />
      </SettingsRow>
    </SettingsRows>
  </SettingsContainer>

  <div class="mt-6 flex items-center-safe gap-3">
    <span class="underline underline-offset-2">Questions:</span>

    {#snippet questionView({
      question,
      isCurr = false,
      isPrev = false,
    }: {
      question: Question;
      isCurr?: boolean;
      isPrev?: boolean;
    })}
      {#if question}
        <button
          class={[
            "relative flex w-fit min-w-16 flex-col items-center-safe rounded px-1 ring",
            isPrev ? "scale-75 opacity-50 ring-green-400" : isCurr && !!input && "ring-red-400",
            question.pronunciation && speech.voice && "cursor-pointer",
          ]}
          onclick={() => speech.speak(question.pronunciation)}
        >
          <!-- letter -->
          <div class="grid h-12 place-items-center-safe">
            {#if question.svgPath}
              <img
                src={question.svgPath}
                alt={question.letter}
                class="h-10 brightness-125 contrast-200 dark:hue-rotate-180 dark:invert-100"
              />
            {:else}
              <span class="text-3xl">{question.letter}</span>
            {/if}
          </div>
          <!-- romanization -->
          <div class="h-6">
            {#if isPrev && question.romanization && question.romanization !== question.input}
              ({question.romanization})
            {/if}
          </div>
          <!-- input -->
          <div class="h-6 w-full border-t border-primary-lighter">
            {isCurr ? input : isPrev ? question.input : ""}
          </div>

          <!-- pronunciation indicator -->
          {#if question.pronunciation && speech.voice}
            <span class="absolute top-0.5 right-0.5 icon-[heroicons--speaker-wave-solid] text-xs"
            ></span>
          {/if}
        </button>
      {/if}
    {/snippet}

    {@render questionView({
      question: prevQuestion,
      isPrev: true,
    })}
    {#each questions
      .items()
      .slice(0, prevQuestion !== undefined ? NUM_QUESTIONS - 1 : NUM_QUESTIONS) as question, i (i)}
      {@render questionView({
        question,
        isCurr: i === 0,
      })}
    {/each}
  </div>

  <div class="h-9"></div>
  <TypingKeyboard
    {keymap}
    correctCh={questions.top?.input[input.length]}
    {showNumberRow}
    {showTilde}
    {showSymbols}
    hideDisplayKey={settings.hideKeys.value}
    showCorrectKey={settings.highlightCorrectKey.value}
  />
</div>
