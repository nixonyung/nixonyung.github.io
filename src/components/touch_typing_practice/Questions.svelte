<script lang="ts">
  import shuffle from "lodash/shuffle";
  import { untrack } from "svelte";
  import { app, emitKeydown, initSettings, speak, useSyncSettings } from "./app.svelte";
  import CheckboxInput from "./inputs/CheckboxInput.svelte";
  import NumericInput from "./inputs/NumericInput.svelte";
  import type { Dictionary } from "./types";

  let SETTINGS_SCHEMA = {
    questionLength: { paramKey: "length", defaultValue: 3 },
    showRomanizations: { paramKey: "romanizations", defaultValue: false },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

  let lettersPool: string[] = $state([]);
  let lettersPoolIdx = $state(0);

  let questions: ({ letter: string } & Dictionary[string])[] = $state([]);
  let inputs = $state([""]);
  const isCorrects = $derived(questions.map(({ input }, i) => input && inputs[i] === input));
  const allCorrect = $derived(isCorrects.every((is) => is));

  function genQuestion(force: boolean = false) {
    untrack(() => {
      questions = Array.from({ length: settings.questionLength }, () => {
        lettersPoolIdx += 1;
        if (force || lettersPoolIdx >= lettersPool.length) {
          lettersPool = shuffle(app.localeDictionaryKeys);
          lettersPoolIdx = 0;
        }

        const letter = lettersPool[lettersPoolIdx];
        return {
          letter,
          ...app.localeDictionary[letter],
        };
      });
      inputs = [""];
    });
  }

  $effect(() => {
    app.localeDictionary;
    settings.questionLength;

    genQuestion(true);
  });
</script>

<svelte:window
  onkeydown={(ev) => {
    const { key, ctrlKey, metaKey } = ev;

    if (
      // ignore refresh (Ctrl-r / Cmd-r)
      ((ctrlKey || metaKey) && (key === "r" || key === "R")) ||
      // use default behaviour when modifying settings
      document.activeElement instanceof HTMLInputElement
    ) {
      return;
    }

    if (app.DEV) {
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
          speak(questions.map(({ pronunciation }) => pronunciation));
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
            if (inputs[inputs.length - 1] !== "" && inputs.length < settings.questionLength) {
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
  <NumericInput bind:value={settings.questionLength} label="question length:" min={1} />
  <CheckboxInput bind:checked={settings.showRomanizations} label="show romanizations:" />
</div>

<!-- SpeechSynthesis indicator -->
<div class="flex items-center-safe gap-9">
  <div
    class={[
      "flex items-center-safe gap-1 bg-primary-lighter/50 px-2",
      app.voice === undefined ? "text-red-700" : "text-green-700",
    ]}
  >
    <span>SpeechSynthesis:</span>
    <span class={app.voice === undefined ? "icon-[heroicons--x-mark]" : "icon-[heroicons--check]"}
    ></span>
  </div>
  {#if app.speechSynthesisErr}
    <span class="text-red-700">
      SpeechSynthesis: ({app.speechSynthesisErr.error}) {app.speechSynthesisErr}
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
        !questions[index].pronunciation ? "" : app.isSpeaking ? "cursor-wait" : "cursor-pointer",
      ]}
      onclick={() => speak(questions[index].pronunciation)}
    >
      <!-- letter -->
      <div class="grid h-12 place-items-center-safe">
        <span class="text-xl">{questions[index].letter}</span>
      </div>
      <!-- romanization -->
      <div class="h-6">
        {#if questions[index].romanization && settings.showRomanizations}
          ({questions[index].romanization})
        {/if}
      </div>
      <!-- input -->
      <div class="h-6 w-full border-t border-primary-lighter">{inputs[index]}</div>

      <!-- pronunciation indicator -->
      {#if questions[index].pronunciation && app.voice}
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

  {#if app.voice}
    <button class="block" onclick={() => emitKeydown({ key: "r" })}>
      {@render kbd("r")} to read all words
    </button>
  {/if}
  <button class="block" onclick={() => emitKeydown({ key: "Enter" })}>
    {@render kbd("Enter")} to continue ...
  </button>
</div>
