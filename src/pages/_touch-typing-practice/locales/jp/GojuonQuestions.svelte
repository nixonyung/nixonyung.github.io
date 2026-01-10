<script lang="ts">
  import Highlighted from "@/components/Highlighted.svelte";
  import NumericInput from "@/components/NumericInput.svelte";
  import { QuestionQueue } from "@/lib/question-queue";
  import { randomInt, sampleSize } from "es-toolkit";
  import { untrack } from "svelte";
  import { initSettings, useSyncSettings } from "../../../../lib/settings.svelte";
  import type { Gojuon } from "../../types";

  const {
    gojuons,
  }: {
    gojuons: Gojuon[];
  } = $props();

  const SETTINGS_SCHEMA = {
    numOptions: { paramKey: "numOptions", defaultValue: 4 },
  };
  const settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

  const questionsQueue = $derived(new QuestionQueue(gojuons));
  let question: Gojuon | undefined = $state();
  let options: string[] = $state([]);

  function nextQuestion() {
    untrack(() => {
      question = questionsQueue.next();

      if (question === undefined) {
        options = [];
      } else {
        const candidates = gojuons
          .filter(
            ({ gojuonPosition: { row, col } }) =>
              row !== question?.gojuonPosition.row || col !== question?.gojuonPosition.col,
          )
          .map(({ letter }) => letter);
        options = sampleSize(candidates, Math.min(candidates.length, settings.numOptions - 1));
        options.splice(randomInt(options.length + 1), 0, question.letter);
      }
    });
  }

  $effect(() => {
    gojuons;
    settings.numOptions;

    nextQuestion();
  });
</script>

<div class="flex flex-col gap-6">
  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numOptions} label="number of options:" min={1} />
  </div>

  <!-- question -->
  <div class="flex flex-col">
    {#each { length: 5 }, colIdx}
      <div class="flex">
        {#each { length: 11 }, rowIdx}
          <div
            class={[
              "relative size-12 ring",
              10 - rowIdx === question?.gojuonPosition.row &&
                colIdx === question?.gojuonPosition.col &&
                "bg-primary-lighter",
            ]}
          >
            {#if 10 - rowIdx === question?.gojuonPosition.row && colIdx === question?.gojuonPosition.col}
              <span
                class="absolute -right-1 -bottom-3 icon-[heroicons--arrow-up-16-solid] -scale-x-75 scale-y-150 -rotate-30 text-3xl text-red-600"
              ></span>
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>

  <span>What is here?</span>

  <!-- options -->
  <div class="flex flex-wrap items-center-safe gap-3">
    {#each options as option}
      <Highlighted
        onclick={() => {
          if (option === question?.letter) {
            nextQuestion();
          }
        }}
      >
        {option}
      </Highlighted>
    {/each}
  </div>

  <!-- padding -->
  <div class="h-dvh"></div>
</div>
