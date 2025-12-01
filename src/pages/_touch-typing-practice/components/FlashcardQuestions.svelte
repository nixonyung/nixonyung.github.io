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
  let optionsSettings: boolean[] = $state(new Array(schema.length).fill(false));
  const isSettingsReady = $derived(
    questionSettings.some((is) => is) && optionsSettings.some((is) => is),
  );
  $effect(() => {
    for (const [i, is] of questionSettings.entries()) {
      if (is) untrack(() => (optionsSettings[i] = false));
    }
  });
  $effect(() => {
    for (const [i, is] of optionsSettings.entries()) {
      if (is) untrack(() => (questionSettings[i] = false));
    }
  });

  let questionsQueue = $derived(new ShufflingCircularQueue(words));
  let question: TWord | undefined = $state();
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
        <CheckboxInput bind:checked={optionsSettings[i]} {label} />
      </div>
    {/each}
  </div>
  {#if !isSettingsReady}
    <Highlighted class="text-red-700">
      Please choose at least 1 item to show for both question and option.
    </Highlighted>
  {/if}
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numOptions} label="number of options:" min={1} />
  </div>

  <!-- question and options -->
  {#if isSettingsReady && question}
    <div class="flex flex-col gap-6">
      <!-- question -->
      <div class="flex items-center-safe gap-3">
        <span class="underline">Question:</span>
        <Highlighted
          class={["flex-col", question ? app.isSpeaking && "cursor-wait" : "cursor-default"]}
          onclick={() => speak(question?.word)}
        >
          {#each schema as { valueFn }, i}
            {#if questionSettings[i]}
              <span>{valueFn(question)}</span>
            {/if}
          {/each}
        </Highlighted>
      </div>

      <span>Select the matching one:</span>

      <!-- options -->
      <div class="flex flex-wrap items-center-safe gap-4">
        {#each options as option}
          <Highlighted
            class="flex-col hover:bg-primary-lighter"
            onclick={() => {
              if (option.word === question?.word) nextQuestion();
            }}
          >
            {#each schema as { valueFn }, i}
              {#if optionsSettings[i]}
                <span>{valueFn(option)}</span>
              {/if}
            {/each}
          </Highlighted>
        {/each}
      </div>
    </div>
  {/if}
</div>
