<script lang="ts">
  import sampleSize from "lodash/sampleSize";
  import { untrack } from "svelte";
  import { globals } from "../../globals.svelte";
  import NumericInput from "../../NumericInput.svelte";

  let numOptions = $state(parseInt(globals.searchParams.get("numOptions") ?? "4"));

  let lettersPool = $derived(
    globals.localeDictionaryKeys.filter((key) => !!globals.localeDictionary[key].gojuonPosition),
  );

  let question: { letter: string; gojuonPosition: { row: number; col: number } } | undefined =
    $state();
  let options: string[] = $state([]);
  let isCorrect = $state(false);

  function genQuestion() {
    untrack(() => {
      question = undefined;
      options = [];

      if (!lettersPool.length) return;
      while (true) {
        const letter = lettersPool[Math.floor(Math.random() * lettersPool.length)];
        const { gojuonPosition } = globals.localeDictionary[letter];
        if (!gojuonPosition) continue;

        question = { letter, gojuonPosition };
        break;
      }

      options = [
        question.letter,
        ...sampleSize(
          lettersPool.filter((letter) => {
            const pos = globals.localeDictionary[letter].gojuonPosition;
            if (!pos) return false;

            const { row, col } = pos;
            return row !== question?.gojuonPosition.row || col !== question?.gojuonPosition.col;
          }),
          numOptions - 1,
        ),
      ];
      isCorrect = false;
    });
  }

  $effect(() => {
    globals.localeDictionary;
    numOptions;

    genQuestion();
  });
</script>

<!-- settings -->
<div class="flex items-center-safe gap-9">
  <NumericInput
    bind:value={numOptions}
    label="number of options:"
    min={1}
    onchange={() => globals.saveSetting("numOptions", numOptions, 4)}
  />
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

<!-- options -->
<div class="flex items-center-safe gap-3">
  <span>What is here?</span>

  {#each options as option}
    <button
      class="cursor-pointer p-2 ring hover:bg-primary-lighter"
      onclick={() => {
        if (option === question?.letter) {
          genQuestion();
        }
      }}
    >
      {option}
    </button>
  {/each}
</div>
