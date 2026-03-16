<script lang="ts" module>
  const NUM_QUESTIONS = 7;
</script>

<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import WithTooltip from "@/components/svelte/WithTooltip.svelte";
  import { CircularQueue } from "@/lib/circular-queue.svelte";
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
      autoReadQuestion: { paramKey: "autoReadQ", defaultValue: false },
      autoReadAnswer: { paramKey: "autoReadA", defaultValue: false },
      hideKeys: { paramKey: "hideKeys", defaultValue: false },
      highlightCorrectKey: { paramKey: "showCorrectKey", defaultValue: false },
      ignoreTypos: { paramKey: "ignoreTypos", defaultValue: false },
    }),
  );
  useSyncSettings(settings);
  $effect.pre(() => {
    if (settings.autoReadQuestion.value) settings.autoReadAnswer.value = false;
  });
  $effect.pre(() => {
    if (settings.autoReadAnswer.value) settings.autoReadQuestion.value = false;
  });

  const questionsQueue = $derived(
    new QuestionsQueue(
      letters.map(({ letter, svgPath, utterance, romanization, actualInput }) => ({
        letter,
        svgPath,
        utterance: utterance ?? letter,
        romanization,
        exampleWord: utterance,
        input: actualInput ?? romanization ?? letter,
      })),
    ),
  );
  type Question = ReturnType<(typeof questionsQueue)["nextQuestion"]>;
  let questions = $state(new CircularQueue<Question>(NUM_QUESTIONS));
  let prevQuestion: Question | undefined = $state();
  let input = $state("");
  let showRomanization = $state(false);

  function nextQuestion() {
    prevQuestion = questions.top;
    questions.push(questionsQueue.nextQuestion());
    input = "";
    showRomanization = false;

    if (settings.autoReadQuestion.value) {
      speech.speak(questions.top?.utterance);
      showRomanization = true;
    }
  }
  $effect.pre(() => {
    questionsQueue;

    untrack(() => {
      questions = new CircularQueue<Question>(NUM_QUESTIONS);
      for (let i = 0; i < NUM_QUESTIONS; i++) nextQuestion();
      prevQuestion = undefined;
    });
  });
  $effect.pre(() => {
    if (settings.autoReadQuestion.value) showRomanization = true;
  });
</script>

<svelte:window
  onkeydown={onkeydown(({ key, ctrlKey, metaKey }) => {
    if (key.match(/^[a-zA-Z]$/) || key in keymap) {
      if (settings.ignoreTypos.value && key !== questions.top?.input[input.length]) return;

      input += key;
      if (input === questions.top?.input) {
        if (settings.autoReadAnswer.value) speech.speak(questions.top?.utterance);
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

<SettingsRows>
  <SettingsRow>
    <CheckboxInput
      bind:checked={settings.autoReadQuestion.value}
      icon="icon-[icon-park-solid--people-speak]"
      label="auto read question"
    />
    <span>-- OR --</span>
    <CheckboxInput
      bind:checked={settings.autoReadAnswer.value}
      icon="icon-[icon-park-solid--people-speak]"
      label="auto read answer"
    />
  </SettingsRow>

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
  </SettingsRow>
</SettingsRows>

<div class="mt-8 flex items-center-safe gap-3">
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
      <WithTooltip disabled={!question.exampleWord}>
        {#snippet customTooltip()}
          <div>example word: {question.exampleWord}</div>
        {/snippet}

        <button
          class={[
            "relative flex w-fit min-w-16 flex-col items-center-safe rounded px-1 ring",
            isPrev ? "scale-75 opacity-50 ring-green-400" : isCurr && !!input && "ring-red-400",
            question.utterance && speech.voice && "cursor-pointer",
          ]}
          onclick={() => {
            speech.speak(question.utterance);
            showRomanization = true;
          }}
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
            {#if (isPrev || (isCurr && showRomanization)) && question.romanization && question.romanization !== question.input}
              ({question.romanization})
            {/if}
          </div>
          <!-- input -->
          <div class="h-6 w-full border-t border-primary-lighter">
            {isCurr ? input : isPrev ? question.input : ""}
          </div>

          <!-- speech indicator -->
          {#if question.utterance && speech.voice}
            <span class="absolute top-0.5 right-0.5 icon-[heroicons--speaker-wave-solid] text-xs"
            ></span>
          {/if}
        </button>
      </WithTooltip>
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
