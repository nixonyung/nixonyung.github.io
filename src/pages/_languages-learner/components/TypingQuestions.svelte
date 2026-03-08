<script lang="ts" module>
  const NUM_QUESTIONS = 7;
</script>

<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
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
    includeNumbers = false,
  }: {
    letters: Letter[];
    keymap: Keymap;
    includeNumbers?: boolean;
  } = $props();

  const settings = $state(
    initSettings({
      hideLayout: { paramKey: "hideLayout", defaultValue: false },
      showCorrectKey: { paramKey: "showCorrectKey", defaultValue: false },
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
    if (key.match(/^[0-9a-zA-Z]$/)) {
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
  <div class="flex items-center-safe gap-4.5">
    <CheckboxInput bind:checked={settings.hideLayout.value} label="hide keyboard layout" />
    <CheckboxInput bind:checked={settings.showCorrectKey.value} label="show correct key" />
    <CheckboxInput bind:checked={settings.ignoreTypos.value} label="ignore typos" />
    <CheckboxInput bind:checked={settings.speakOnCorrect.value} label="auto speak on correct" />
  </div>

  <hr class="mt-6 opacity-50" />

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
    {includeNumbers}
    hideLayout={settings.hideLayout.value}
    showCorrectKey={settings.showCorrectKey.value}
    correctKey={questions.top?.input[input.length]}
  />
</div>
