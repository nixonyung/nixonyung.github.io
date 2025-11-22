<script lang="ts">
  import sampleSize from "lodash/sampleSize";
  import shuffle from "lodash/shuffle";
  import { untrack } from "svelte";
  import { globals } from "../../globals.svelte";
  import NumericInput from "../../inputs/NumericInput.svelte";

  let numOptions = $state(parseInt(globals.searchParams.get("numOptions") ?? "4"));

  let lettersWithGojuonPosition = $derived(
    globals.localeDictionaryKeys.filter(
      (key) => globals.localeDictionary[key].gojuonPosition !== undefined,
    ),
  );
  let lettersPool: string[] = $state([]);
  let lettersPoolIdx = $state(0);

  let question: { letter: string; gojuonPosition?: { row: number; col: number } } | undefined =
    $state();
  let options: string[] = $state([]);

  function genQuestion(force: boolean = false) {
    untrack(() => {
      lettersPoolIdx += 1;
      if (force || lettersPoolIdx >= lettersPool.length) {
        lettersPool = shuffle(lettersWithGojuonPosition);
        lettersPoolIdx = 0;
      }

      const letter = lettersPool[lettersPoolIdx];
      const gojuonPosition = globals.localeDictionary[letter]?.gojuonPosition;
      question = { letter, gojuonPosition };
      options = shuffle([
        letter,
        ...sampleSize(
          lettersWithGojuonPosition.filter((letter) => {
            const { row, col } = globals.localeDictionary[letter].gojuonPosition!;
            return row !== gojuonPosition?.row || col !== gojuonPosition?.col;
          }),
          numOptions - 1,
        ),
      ]);
    });
  }

  $effect(() => {
    globals.localeDictionary;
    numOptions;

    genQuestion(true);
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
            10 - rowIdx === question?.gojuonPosition?.row &&
              colIdx === question?.gojuonPosition.col &&
              "bg-primary-lighter",
          ]}
        >
          {#if 10 - rowIdx === question?.gojuonPosition?.row && colIdx === question?.gojuonPosition?.col}
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
