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
  }: {
    letters: Letter[];
    keymap?: Keymap;
  } = $props();

  const settings = $state(
    initSettings({
      speakOnCorrect: { paramKey: "speakOnCorrect", defaultValue: false },
    }),
  );
  useSyncSettings(settings);

  const questionsQueue = $derived(
    new QuestionsQueue(
      letters.map(({ letter, actualPronunciation, romanization, actualInput }) => ({
        letter,
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
    prevQuestion = questions.push(questionsQueue.nextQuestion());
    input = "";
  }
  $effect.pre(() => {
    questionsQueue;

    untrack(() => {
      for (let i = 0; i < NUM_QUESTIONS; i++) {
        nextQuestion();
      }
      prevQuestion = undefined;
    });
  });
</script>

<svelte:window
  onkeydown={onkeydown(({ key, ctrlKey, metaKey }) => {
    if (key.match(/^[a-zA-Z]$/)) {
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
  <hr class="mt-3 opacity-50" />

  <!-- settings -->
  <div class="mt-6 flex items-center-safe gap-9">
    <CheckboxInput bind:checked={settings.speakOnCorrect.value} label="Auto speak on correct" />
  </div>

  <hr class="mt-6 opacity-50" />

  <div class="mt-6 flex items-center-safe gap-3">
    <span class="underline underline-offset-2">Questions:</span>

    {#snippet question({
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
            "relative flex w-16 flex-col items-center-safe rounded ring",
            isPrev ? "ring-green-400" : isCurr && !!input && "ring-red-400",
            isCurr ? "opacity-100" : "opacity-50",
            question.pronunciation && speech.voice && "cursor-pointer",
          ]}
          onclick={() => speech.speak(question.pronunciation)}
        >
          <!-- letter -->
          <div class="grid h-12 place-items-center-safe">
            <span class="text-xl">{question.letter}</span>
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

    {@render question({
      question: prevQuestion,
      isPrev: true,
    })}
    {#each questions
      .items()
      .slice(0, prevQuestion !== undefined ? NUM_QUESTIONS - 1 : NUM_QUESTIONS) as q, i}
      {@render question({
        question: q,
        isCurr: i === 0,
      })}
    {/each}
  </div>

  <TypingKeyboard {keymap} class="mt-9" />
</div>
