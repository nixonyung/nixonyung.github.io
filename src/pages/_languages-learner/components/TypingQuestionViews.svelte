<script lang="ts" module>
  export interface Question {
    letter: string;
    input: string;
    romanization?: string;

    svgPath?: string;

    utterance?: string;
    exampleWord?: string;
  }
</script>

<script lang="ts" generics="TQuestion extends Question">
  import WithTooltip from "@/components/svelte/WithTooltip.svelte";
  import { CircularQueue } from "@/lib/circular-queue.svelte";
  import { onkeydown } from "@/lib/keyboard";
  import { speech } from "@/lib/speech.svelte";
  import { untrack } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import type { Keymap } from "./TypingKeyboard.svelte";

  const {
    getNextQuestion,
    keymap,
    numQuestions = 7,
    showMappedInput = false,
    autoReadQuestion = false,
    autoReadAnswer = false,
    ignoreTypos = false,
    class: classList,
  }: {
    getNextQuestion: () => TQuestion | undefined;

    keymap: Keymap;

    numQuestions?: number;

    showMappedInput?: boolean;
    autoReadQuestion?: boolean;
    autoReadAnswer?: boolean;
    ignoreTypos?: boolean;

    class?: ClassValue;
  } = $props();

  let currQuestions = $state(new CircularQueue<TQuestion | undefined>(numQuestions));
  let prevQuestion: TQuestion | undefined = $state();
  $effect.pre(() => {
    numQuestions;

    untrack(() => {
      currQuestions = new CircularQueue(numQuestions);
    });
  });
  export function getQuestion() {
    return currQuestions.top;
  }
  export function getCorrectKey() {
    return currQuestions.top?.input[input.length];
  }

  let input = $state("");
  let showRomanization = $state(false);
  $effect.pre(() => {
    autoReadQuestion;

    untrack(() => {
      if (autoReadQuestion) {
        speech.speak(currQuestions.top?.utterance);
        showRomanization = true;
      } else {
        showRomanization = false;
      }
    });
  });

  function nextQuestion() {
    prevQuestion = currQuestions.top;
    currQuestions.push(getNextQuestion());
    input = "";
    showRomanization = false;

    if (autoReadQuestion) {
      speech.speak(currQuestions.top?.utterance);
      showRomanization = true;
    }
  }
  export function reset() {
    for (let i = 0; i < numQuestions; i++) {
      const question = getNextQuestion();
      currQuestions.push(question);
    }
    prevQuestion = undefined;
    input = "";
    showRomanization = false;

    if (autoReadQuestion) {
      speech.speak(currQuestions.top?.utterance);
      showRomanization = true;
    }
  }
</script>

<svelte:window
  onkeydown={onkeydown(({ key, ctrlKey, metaKey }) => {
    if (keymap[key]) {
      if (ignoreTypos && key !== currQuestions.top?.input[input.length]) return;

      input += key;
      if (input === currQuestions.top?.input) {
        if (autoReadAnswer) speech.speak(currQuestions.top?.utterance);
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

<div class={["flex items-center-safe gap-3", classList]}>
  <span class="underline underline-offset-2">Questions:</span>

  {#snippet questionView({
    question,
    isCurr = false,
    isPrev = false,
  }: {
    question: Question | undefined;
    isCurr?: boolean;
    isPrev?: boolean;
  })}
    {#if question}
      {@const _input = isCurr ? input : isPrev ? question.input : ""}

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
            {showMappedInput ? [..._input].map((ch) => keymap[ch]).join("") : _input}
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
  {#each currQuestions
    .items()
    .slice(0, prevQuestion !== undefined ? numQuestions - 1 : numQuestions) as question, i (i)}
    {@render questionView({
      question,
      isCurr: i === 0,
    })}
  {/each}
</div>
