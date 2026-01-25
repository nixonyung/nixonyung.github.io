<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import Highlighted from "@/components/Highlighted.svelte";
  import KBD from "@/components/KBD.svelte";
  import NumericInput from "@/components/NumericInput.svelte";
  import { emitKeydown, onkeydown } from "@/lib/keyboard";
  import { QuestionsQueue } from "@/lib/questions-queue.svelte.ts";
  import { speech } from "@/lib/speech.svelte";
  import { untrack } from "svelte";
  import { initSettings, useSyncSettings } from "../../../lib/settings.svelte";
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
      numQuestions: { paramKey: "numQuestions", defaultValue: 8 },
      showRomanizations: { paramKey: "romanizations", defaultValue: false },
    }),
  );
  useSyncSettings(settings);

  type Question = {
    letter: string;
    pronunciation: string;
    romanization?: string;
    input: string;
  };
  let questionsQueue = $derived(
    new QuestionsQueue(
      letters.map<Question>(({ letter, actualPronunciation, romanization, actualInput }) => ({
        letter,
        pronunciation: actualPronunciation ?? letter,
        romanization: romanization,
        input: actualInput ?? romanization ?? letter,
      })),
    ),
  );
  let questions: (Question | undefined)[] = $state([]);

  let inputs = $state([""]);
  const isCorrects = $derived(
    questions.map((question, i) => question && inputs[i] === question.input),
  );
  const allCorrect = $derived(isCorrects.every((is) => is));

  function nextQuestion() {
    untrack(() => {
      questions = Array.from({ length: settings.numQuestions.value }, () => questionsQueue.next());
      inputs = [""];
    });
  }

  $effect.pre(() => {
    letters;
    settings.numQuestions.value;

    nextQuestion();
  });
</script>

<svelte:window
  onkeydown={onkeydown(({ key, ctrlKey, metaKey }) => {
    if (allCorrect) {
      switch (key) {
        case "r":
        case "R":
          speech.speak(questions.map((question) => question?.pronunciation));
          break;
        case "Enter":
          nextQuestion();
          break;
      }
    } else {
      if (key.match(/^[a-zA-Z]$/)) {
        inputs[inputs.length - 1] += key;
      } else {
        switch (key) {
          case " ":
            if (inputs[inputs.length - 1] !== "" && inputs.length < settings.numQuestions.value) {
              inputs.push("");
            }
            break;
          case "Backspace":
            if (ctrlKey || metaKey) {
              inputs[inputs.length - 1] = "";
            } else {
              const lastInput = inputs[inputs.length - 1];

              if (lastInput === "" && inputs.length > 1) {
                inputs.pop();
              } else {
                inputs[inputs.length - 1] = lastInput.slice(0, -1);
              }

              break;
            }
        }
      }
    }
  })}
/>

<div class="flex flex-col gap-3">
  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numQuestions.value} min={1} label="Number of Questions" />
    <CheckboxInput bind:checked={settings.showRomanizations.value} label="Show Romanizations" />
  </div>

  <!-- SpeechSynthesis status -->
  <div class="flex items-center-safe gap-9">
    <Highlighted class={speech.voice === undefined ? "text-red-700" : "text-green-700"}>
      <span>SpeechSynthesis:</span>
      <span
        class={speech.voice === undefined ? "icon-[heroicons--x-mark]" : "icon-[heroicons--check]"}
      ></span>
    </Highlighted>

    {#if speech.err}
      <span class="text-red-700">
        SpeechSynthesis: ({speech.err.error}) {speech.err}
      </span>
    {/if}
  </div>

  <!-- questions -->
  <div class="flex items-center-safe gap-3">
    <span class="underline">Questions:</span>

    {#snippet question(index: number)}
      {@const question = questions[index]}
      {@const input = inputs[index]}
      {@const isCorrect = isCorrects[index]}

      <button
        class={[
          "relative flex w-16 flex-col items-center-safe rounded ring",
          isCorrect ? "ring-green-400" : !!input && "ring-red-400",
          allCorrect || index + 1 === inputs.length ? "opacity-100" : "opacity-50",
          question?.pronunciation &&
            speech.voice &&
            (speech.isSpeaking ? "cursor-wait" : "cursor-pointer"),
        ]}
        onclick={() => speech.speak(question?.pronunciation)}
      >
        <!-- letter -->
        <div class="grid h-12 place-items-center-safe">
          <span class="text-xl">{question?.letter}</span>
        </div>
        <!-- romanization -->
        <div class="h-6">
          {#if question?.romanization && settings.showRomanizations.value}
            ({question.romanization})
          {/if}
        </div>
        <!-- input -->
        <div class="h-6 w-full border-t border-primary-lighter">{input}</div>

        <!-- pronunciation indicator -->
        {#if question?.pronunciation && speech.voice}
          <span class="absolute top-0.5 right-0.5 icon-[heroicons--speaker-wave-solid] text-xs"
          ></span>
        {/if}
      </button>
    {/snippet}

    {#each questions, index}
      {@render question(index)}
    {/each}
  </div>

  <!-- congratulations -->
  <div class={!allCorrect ? "invisible" : ""}>
    <div>All correct!</div>

    {#if speech.voice}
      <button class="block" onclick={() => emitKeydown({ key: "r" })}>
        <KBD label="r" /> to read all words
      </button>
    {/if}

    <button class="block" onclick={() => emitKeydown({ key: "Enter" })}>
      <KBD label="Enter" /> to continue ...
    </button>
  </div>

  <TypingKeyboard {keymap} />
</div>
