<script lang="ts">
  import sampleSize from "lodash/sampleSize";
  import shuffle from "lodash/shuffle";
  import { untrack } from "svelte";
  import { app, initSettings, useSyncSettings } from "../../app.svelte";
  import NumericInput from "../../inputs/NumericInput.svelte";

  let SETTINGS_SCHEMA = {
    numOptions: { paramKey: "numOptions", defaultValue: 4 },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

  let lettersWithGojuonPosition = $derived(
    app.localeLetters.filter((key) => app.localeLettersDict[key].gojuonPosition !== undefined),
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
      const gojuonPosition = app.localeLettersDict[letter]?.gojuonPosition;
      question = { letter, gojuonPosition };
      options = shuffle([
        letter,
        ...sampleSize(
          lettersWithGojuonPosition.filter((letter) => {
            const { row, col } = app.localeLettersDict[letter].gojuonPosition!;
            return row !== gojuonPosition?.row || col !== gojuonPosition?.col;
          }),
          settings.numOptions - 1,
        ),
      ]);
    });
  }

  $effect(() => {
    app.localeLettersDict;
    settings.numOptions;

    genQuestion(true);
  });
</script>

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

  {#each options as option (option)}
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

<!-- padding -->
<div class="h-dvh"></div>
