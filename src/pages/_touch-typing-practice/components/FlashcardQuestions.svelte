<script lang="ts" generics="TWord extends Word">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import NumericInput from "@/components/svelte/NumericInput.svelte";
  import { ShufflingCircularQueue } from "@/lib/shuffling-circular-queue";
  import { randomInt, sampleSize } from "es-toolkit";
  import { untrack } from "svelte";
  import { app, initSettings, speak, useSyncSettings } from "../app.svelte";
  import type { Word } from "../types";

  const {
    words,
    schema,
  }: {
    words: TWord[];
    schema: {
      label: string;
      valueFn: (word: TWord) => string | number | boolean | undefined;
    }[];
  } = $props();

  const SETTINGS_SCHEMA = {
    numOptions: { paramKey: "numOptions", defaultValue: 4 },
  };
  const settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

  let questionSettings: boolean[] = $state(new Array(schema.length).fill(false));
  let optionSettings: boolean[] = $state(new Array(schema.length).fill(false));
  const questionHasSomething = $derived(questionSettings.some((is) => is));
  const optionHasSomething = $derived(optionSettings.some((is) => is));
  $effect(() => {
    for (const [i, is] of questionSettings.entries()) {
      if (is) untrack(() => (optionSettings[i] = false));
    }
  });
  $effect(() => {
    for (const [i, is] of optionSettings.entries()) {
      if (is) untrack(() => (questionSettings[i] = false));
    }
  });

  let questionsQueue = $derived(new ShufflingCircularQueue(words));
  let question: TWord | undefined = $state();
  const questionPronunciation = $derived(question?.actualPronunciation ?? question?.word);
  let options: TWord[] = $state([]);

  function nextQuestion() {
    untrack(() => {
      question = questionsQueue.next();

      if (question === undefined) {
        options = [];
      } else {
        const candidates = words.filter(({ word }) => word !== question?.word);
        options = sampleSize(candidates, Math.min(candidates.length, settings.numOptions - 1));
        options.splice(randomInt(options.length + 1), 0, question);
      }
    });
  }

  $effect(() => {
    words;
    settings.numOptions;

    nextQuestion();
  });
</script>

<div class="flex flex-col gap-6">
  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <div class="flex flex-col">
      <span>show in question:</span>
      <span>show in options:</span>
    </div>

    {#each schema as { label }, i}
      <div class="flex flex-col">
        <CheckboxInput bind:checked={questionSettings[i]} {label} />
        <CheckboxInput bind:checked={optionSettings[i]} {label} />
      </div>
    {/each}

    <div class="flex flex-col">
      <span class={["text-red-700", questionHasSomething && "invisible"]}>
        please choose at least one
      </span>
      <span class={["text-red-700", optionHasSomething && "invisible"]}>
        please choose at least one
      </span>
    </div>
  </div>
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numOptions} label="number of options:" min={1} />
  </div>

  <!-- question and options -->
  {#if questionHasSomething && optionHasSomething}
    <div class="flex flex-col gap-6">
      <!-- question -->
      <div class="flex items-center-safe gap-3">
        <span class="underline">Question:</span>
        {#if question}
          <Highlighted
            vertical
            class={[app.voice && "pr-6", app.isSpeaking && "cursor-wait"]}
            onclick={questionPronunciation && app.voice
              ? () => speak(questionPronunciation)
              : undefined}
          >
            {#each schema as { valueFn }, i}
              {#if questionSettings[i]}
                <span>{valueFn(question)}</span>
              {/if}
            {/each}

            <!-- pronunciation indicator -->
            {#if questionPronunciation && app.voice}
              <span
                class="absolute top-1 right-1 icon-[heroicons--speaker-wave-solid] text-xs opacity-80"
              ></span>
            {/if}
          </Highlighted>
        {/if}
      </div>

      <span>Select the matching one:</span>

      <!-- options -->
      <div class="flex flex-wrap items-center-safe gap-4">
        {#each options as option}
          <Highlighted
            vertical
            onclick={() => {
              if (option.word === question?.word) nextQuestion();
            }}
          >
            {#each schema as { valueFn }, i}
              {#if optionSettings[i]}
                <span>{valueFn(option)}</span>
              {/if}
            {/each}
          </Highlighted>
        {/each}
      </div>
    </div>
  {/if}
</div>
