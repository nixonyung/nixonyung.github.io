<script lang="ts">
  import Highlighted from "@/components/Highlighted.svelte";
  import Icon from "@/components/Icon.svelte";
  import NumericInput from "@/components/NumericInput.svelte";
  import { QuestionsQueue } from "@/lib/questions-queue.svelte.ts";
  import { untrack } from "svelte";
  import { initSettings, useSyncSettings } from "../../../../lib/settings.svelte";
  import type { Gojuon } from "../../types";

  const {
    gojuons,
  }: {
    gojuons: Gojuon[];
  } = $props();

  const settings = $state(
    initSettings({
      numOptions: { paramKey: "numOptions", defaultValue: 6 },
    }),
  );
  useSyncSettings(settings);

  const questionsQueue = $derived(new QuestionsQueue(gojuons));
  let question: ReturnType<(typeof questionsQueue)["nextQuestion"]> = $state();
  let options: ReturnType<(typeof questionsQueue)["genOptions"]> = $state([]);

  function genOptions() {
    options = questionsQueue.genOptions({
      question,
      numOptions: settings.numOptions.value,
      filterFn: (question, { gojuonPosition: { row, col } }) =>
        row !== question.gojuonPosition.row || col !== question.gojuonPosition.col,
    });
  }
  function nextQuestion() {
    question = questionsQueue.nextQuestion();
    genOptions();
  }
  $effect.pre(() => {
    questionsQueue;

    untrack(() => nextQuestion());
  });

  $effect.pre(() => {
    settings.numOptions.value;

    untrack(() => genOptions());
  });
</script>

<div class="flex flex-col gap-6">
  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <NumericInput bind:value={settings.numOptions.value} label="Number of Options" min={1} />
  </div>

  <!-- question -->
  <div class="flex w-fit flex-col border">
    {#each { length: 5 }, colIdx}
      <div class="flex">
        {#each { length: 11 }, rowIdx}
          <div
            class={[
              "relative size-12 border",
              10 - rowIdx === question?.gojuonPosition.row &&
                colIdx === question?.gojuonPosition.col &&
                "bg-primary-lighter",
            ]}
          >
            {#if 10 - rowIdx === question?.gojuonPosition.row && colIdx === question?.gojuonPosition.col}
              <Icon
                icon="icon-[heroicons--arrow-up-16-solid]"
                class="absolute -right-1 -bottom-3 -scale-x-75 scale-y-150 -rotate-30 text-3xl text-red-600"
              />
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>

  {#if question}
    <span>What is here?</span>

    <!-- options -->
    <div class="flex flex-wrap items-center-safe gap-3">
      {#each options as option (option)}
        <Highlighted
          onclick={() => {
            if (option.letter === question!.letter) {
              nextQuestion();
            }
          }}
        >
          {option.letter}
        </Highlighted>
      {/each}
    </div>
  {/if}

  <!-- padding -->
  <div class="h-[75dvh]"></div>
</div>
