<script lang="ts">
  import sampleSize from "lodash/sampleSize";
  import shuffle from "lodash/shuffle";
  import { untrack } from "svelte";
  import { app, initSettings, useSyncSettings } from "../../app.svelte";
  import CheckboxInput from "../../inputs/CheckboxInput.svelte";
  import NumericInput from "../../inputs/NumericInput.svelte";
  import type { WordsDict } from "../../types";
  import FlashCard from "./FlashCard.svelte";

  let SETTINGS_SCHEMA = {
    numOptions: { paramKey: "numOptions", defaultValue: 6 },

    wordInQuestion: { paramKey: "wordInQuestion", defaultValue: false },
    wordInOptions: { paramKey: "wordInOptions", defaultValue: false },
    aliasesInQuestion: { paramKey: "aliasesInQuestion", defaultValue: false },
    aliasesInOptions: { paramKey: "aliasesInOptions", defaultValue: false },
    romanizationInQuestion: { paramKey: "romanizationInQuestion", defaultValue: false },
    romanizationInOptions: { paramKey: "romanizationInOptions", defaultValue: false },
    meaningInQuestion: { paramKey: "meaningInQuestion", defaultValue: false },
    meaningInOptions: { paramKey: "meaningInOptions", defaultValue: false },
  };
  let settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);
  $effect(() => {
    if (settings.wordInQuestion) settings.wordInOptions = false;
  });
  $effect(() => {
    if (settings.aliasesInQuestion) settings.aliasesInOptions = false;
  });
  $effect(() => {
    if (settings.romanizationInQuestion) settings.romanizationInOptions = false;
  });
  $effect(() => {
    if (settings.meaningInQuestion) settings.meaningInOptions = false;
  });
  const isSettingsReady = $derived(
    (settings.wordInQuestion ||
      settings.aliasesInQuestion ||
      settings.romanizationInQuestion ||
      settings.meaningInQuestion) &&
      (settings.wordInOptions ||
        settings.aliasesInOptions ||
        settings.romanizationInOptions ||
        settings.meaningInOptions),
  );

  let wordsPool: string[] = $state([]);
  let wordsPoolIdx = $state(0);
  let question: ({ word: string } & WordsDict[string]) | undefined = $state();
  let options: ({ word: string } & WordsDict[string])[] = $state([]);

  function genQuestion(force: boolean = false) {
    untrack(() => {
      wordsPoolIdx += 1;
      if (force || wordsPoolIdx >= wordsPool.length) {
        wordsPool = shuffle(app.localeWords);
        wordsPoolIdx = 0;
      }

      const questionWord = wordsPool[wordsPoolIdx];

      question = {
        word: questionWord,
        ...app.localeWordsDict[questionWord],
      };

      options = shuffle([
        questionWord,
        ...sampleSize(
          app.localeWords.filter((word) => word !== questionWord),
          settings.numOptions - 1,
        ),
      ]).map((word) => ({
        word,
        ...app.localeWordsDict[word],
      }));
    });
  }

  $effect(() => {
    app.localeWordsDict;
    settings.numOptions;

    genQuestion(true);
  });
</script>

<div class="flex flex-col gap-6">
  <!-- settings -->
  <div class="flex gap-9">
    <NumericInput bind:value={settings.numOptions} label="number of options:" />
  </div>

  <div class="flex items-center-safe gap-9">
    <div class="flex flex-col">
      <CheckboxInput bind:checked={settings.wordInQuestion} label="wordInQuestion" />
      <CheckboxInput
        bind:checked={settings.wordInOptions}
        label="wordInOptions"
        disabled={settings.wordInQuestion}
      />
    </div>
    <div class="flex flex-col">
      <CheckboxInput bind:checked={settings.aliasesInQuestion} label="aliasesInQuestion" />
      <CheckboxInput
        bind:checked={settings.aliasesInOptions}
        label="aliasesInOptions"
        disabled={settings.aliasesInQuestion}
      />
    </div>
    <div class="flex flex-col">
      <CheckboxInput
        bind:checked={settings.romanizationInQuestion}
        label="romanizationInQuestion"
      />
      <CheckboxInput
        bind:checked={settings.romanizationInOptions}
        label="romanizationInOptions"
        disabled={settings.romanizationInQuestion}
      />
    </div>
    <div class="flex flex-col">
      <CheckboxInput bind:checked={settings.meaningInQuestion} label="meaningInQuestion" />
      <CheckboxInput
        bind:checked={settings.meaningInOptions}
        label="meaningInOptions"
        disabled={settings.meaningInQuestion}
      />
    </div>

    {#if !isSettingsReady}
      <span class="bg-primary-lighter/50 px-3 py-1 text-red-700">
        please choose at least 1 option in each row
      </span>
    {/if}
  </div>

  <!-- question and options -->
  {#if isSettingsReady}
    <div class="flex flex-col items-start gap-6">
      <FlashCard>
        {#if settings.wordInQuestion}
          <span>{question?.word}</span>
        {/if}
        {#if settings.aliasesInQuestion}
          <span>{question?.aliases}</span>
        {/if}
        {#if settings.romanizationInQuestion}
          <span>{question?.romanization}</span>
        {/if}
        {#if settings.meaningInQuestion}
          <span>{question?.meaning}</span>
        {/if}
      </FlashCard>

      <div>Select the matching one:</div>

      <div class="flex flex-wrap gap-4">
        {#each options as option}
          <FlashCard
            onclick={() => {
              if (option.word === question?.word) genQuestion();
            }}
          >
            {#if settings.wordInOptions}
              <span>{option.word}</span>
            {/if}
            {#if settings.aliasesInOptions}
              <span>{option.aliases}</span>
            {/if}
            {#if settings.romanizationInOptions}
              <span>{option.romanization}</span>
            {/if}
            {#if settings.meaningInOptions}
              <span>{option.meaning}</span>
            {/if}
          </FlashCard>
        {/each}
      </div>
    </div>
  {/if}

  <!-- padding -->
  <div class="h-96"></div>
</div>
