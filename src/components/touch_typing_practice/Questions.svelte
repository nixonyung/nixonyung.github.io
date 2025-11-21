<script lang="ts">
  import shuffle from "lodash/shuffle";
  import { untrack } from "svelte";
  import CheckboxInput from "./CheckboxInput.svelte";
  import { globals } from "./globals.svelte";
  import type { Dictionary } from "./locales/locale";

  let questionLength = $state(parseInt(globals.searchParams.get("questionLength") ?? "3"));
  let showRomanizations = $state(globals.searchParams.has("showRomanizations", "true"));

  let lettersPool: string[] = $state([]);
  let lettersPoolIdx = $state(0);

  let questions: ({ letter: string } & Dictionary[string])[] = $state([]);
  let inputs = $state([""]);
  const isCorrects = $derived(questions.map(({ input }, i) => input && inputs[i] === input));
  const allCorrect = $derived(isCorrects.every((is) => is));

  function genQuestion(force: boolean = false) {
    untrack(() => {
      questions = Array.from({ length: questionLength }, () => {
        lettersPoolIdx += 1;
        if (force || lettersPoolIdx >= lettersPool.length) {
          lettersPool = shuffle(globals.localeDictionaryKeys);
          lettersPoolIdx = 0;
        }

        const letter = lettersPool[lettersPoolIdx];
        return {
          letter,
          ...globals.localeDictionary[letter],
        };
      });
      inputs = [""];
    });
  }

  $effect(() => {
    globals.localeDictionary;
    questionLength;

    genQuestion(true);
  });
</script>

<svelte:window
  onkeydown={(ev) => {
    const { key, ctrlKey } = ev;

    if (
      // ignore refresh (Ctrl-r)
      (ctrlKey && (key === "r" || key === "R")) ||
      // use default behaviour when modifying settings
      document.activeElement instanceof HTMLInputElement
    ) {
      return;
    }

    if (globals.DEV) {
      console.log("onInput", key, "ctrl", ctrlKey);
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    if (key === " ") {
      // prevent scrolling with Space
      ev.preventDefault();
    }

    if (allCorrect) {
      switch (key) {
        case "r":
        case "R":
          globals.speak(questions.map(({ pronunciation }) => pronunciation));
          break;
        case "Enter":
          genQuestion();
          break;
      }
    } else {
      if (key.match(/^[a-zA-Z]$/)) {
        inputs[inputs.length - 1] += key;
      } else {
        switch (key) {
          case " ":
            if (inputs[inputs.length - 1] !== "" && inputs.length < questionLength) {
              inputs.push("");
            }
            break;
          case "Backspace":
            if (ctrlKey) {
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
  }}
/>

<!-- settings -->
<div class="flex items-center-safe gap-9">
  <div class="flex gap-1">
    <span class="min-w-[16ch]">
      question length: {questionLength}
    </span>
    <button
      title="decrement questionLength"
      class="cursor-pointer"
      onclick={() => {
        if (questionLength > 1) questionLength -= 1;
        globals.saveSetting("questionLength", questionLength, 3);
      }}
    >
      <span class="icon-[heroicons--minus-circle] align-middle text-2xl"></span>
    </button>
    <button
      title="increment questionLength"
      class="cursor-pointer"
      onclick={() => {
        questionLength += 1;
        globals.saveSetting("questionLength", questionLength, 3);
      }}
    >
      <span class="icon-[heroicons--plus-circle] align-middle text-2xl"></span>
    </button>
  </div>

  <CheckboxInput
    bind:checked={showRomanizations}
    label="show romanizations:"
    onchange={() => globals.saveSetting("showRomanizations", showRomanizations, false)}
  />
</div>

<!-- SpeechSynthesis indicator -->
<div class="flex items-center-safe gap-9">
  <div
    class={[
      "flex items-center-safe gap-1 bg-primary-lighter/50 px-2",
      globals.voice === undefined ? "text-red-700" : "text-green-700",
    ]}
  >
    <span>SpeechSynthesis:</span>
    <span
      class={globals.voice === undefined ? "icon-[heroicons--x-mark]" : "icon-[heroicons--check]"}
    ></span>
  </div>
  {#if globals.speechSynthesisErr}
    <span class="text-red-700">
      SpeechSynthesis: ({globals.speechSynthesisErr.error}) {globals.speechSynthesisErr}
    </span>
  {/if}
</div>

<!-- questions -->
<div class="flex items-center-safe gap-2">
  <span>question: </span>

  {#snippet question(index: number)}
    <button
      class={[
        "relative flex w-16 flex-col items-center-safe rounded ring",
        isCorrects[index] ? "ring-green-600" : !!inputs[index] && "ring-red-600",
        allCorrect || index + 1 === inputs.length ? "opacity-100" : "opacity-50",
        !questions[index].pronunciation
          ? ""
          : globals.isSpeaking
            ? "cursor-wait"
            : "cursor-pointer",
      ]}
      onclick={() => globals.speak(questions[index].pronunciation)}
    >
      <!-- letter -->
      <div class="grid h-12 place-items-center-safe">
        <span class="text-xl">{questions[index].letter}</span>
      </div>
      <!-- romanization -->
      <div class="h-6">
        {#if questions[index].romanization && showRomanizations}
          ({questions[index].romanization})
        {/if}
      </div>
      <!-- input -->
      <div class="h-6 w-full border-t border-primary-lighter">{inputs[index]}</div>

      <!-- pronunciation indicator -->
      {#if questions[index].pronunciation && globals.voice}
        <span class="absolute top-0.5 right-0.5 icon-[heroicons--speaker-wave-solid] text-xs"
        ></span>
      {/if}
    </button>
  {/snippet}
  {#each questions, index}
    <!-- <Question {index} /> -->
    {@render question(index)}
  {/each}
</div>

<div class={!allCorrect ? "invisible" : ""}>
  <div>All correct!</div>

  {#snippet kbd(text: string)}
    <kbd class="rounded px-1 ring">{text}</kbd>
  {/snippet}

  {#if globals.voice}
    <button class="block" onclick={() => globals.emitKeydown({ key: "r" })}>
      {@render kbd("r")} to read all words
    </button>
  {/if}
  <button class="block" onclick={() => globals.emitKeydown({ key: "Enter" })}>
    {@render kbd("Enter")} to continue ...
  </button>
</div>
