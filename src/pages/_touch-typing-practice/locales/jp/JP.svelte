<script lang="ts">
  import TabsInput from "@/components/TabsInput.svelte";
  import { initSettings, useSyncSettings } from "../../../../lib/settings.svelte";
  import FlashcardQuestions from "../../components/FlashcardQuestions.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import type { JapaneseWord } from "../../types";
  import FlashcardSettingsJP from "./FlashcardSettingsJP.svelte";
  import GojuonQuestions from "./GojuonQuestions.svelte";
  import GojuonTable from "./GojuonTable.svelte";
  import { getKeymap } from "./keymap.svelte";
  import { getGojuons, getLetters } from "./letters.svelte";
  import { appendAdjectives } from "./words-adjectives.svelte";
  import { appendExpressions } from "./words-expressions.svelte";
  import { appendFunctionalAdpositions } from "./words-functional-adpositions.svelte";
  import { appendFunctionalChronological } from "./words-functional-chronological.svelte";
  import { appendFunctionalDegree } from "./words-functional-degree.svelte";
  import { appendFunctionalEnumerative } from "./words-functional-enumerative.svelte";
  import { appendFunctionalLocational } from "./words-functional-locational.svelte";
  import { appendFunctionalLogical } from "./words-functional-logical.svelte";
  import { appendFunctionalManner } from "./words-functional-manner.svelte";
  import { appendNounsAnimals } from "./words-nouns-animals.svelte";
  import { appendNounsIdeas } from "./words-nouns-ideas.svelte";
  import { appendNounsMoments } from "./words-nouns-moments.svelte";
  import { appendNounsObjects } from "./words-nouns-objects.svelte";
  import { appendNounsPeopleByCharacteristics } from "./words-nouns-people-characteristics.svelte";
  import { appendNounsPeopleByRelationships } from "./words-nouns-people-relationships.svelte";
  import { appendNounsVenues } from "./words-nouns-venues.svelte";
  import { appendPronouns } from "./words-pronouns.svelte";
  import { appendRulesConjugations } from "./words-rules-conjugations.svelte";
  import { appendVerbsActions } from "./words-verbs-actions.svelte";
  import { appendAuxiliaryVerbs } from "./words-verbs-auxiliary.svelte";
  import { appendVerbsChanges } from "./words-verbs-changes.svelte";
  import { appendVerbsDescriptive } from "./words-verbs-descriptive.svelte";

  const settings = $state(
    initSettings({
      mode: { paramKey: "mode", defaultValue: <"typing" | "gojuonTable" | "flashcards">"typing" },
    }),
  );
  useSyncSettings(settings);

  const keymap = $derived(getKeymap());
  const letters = $derived(getLetters());
  const gojuons = $derived(getGojuons());
  const words = $derived.by(() => {
    const words: JapaneseWord[] = [];

    appendPronouns(words);
    appendNounsPeopleByCharacteristics(words);
    appendNounsPeopleByRelationships(words);
    appendNounsAnimals(words);
    appendNounsObjects(words);
    appendNounsMoments(words);
    appendNounsVenues(words);
    appendNounsIdeas(words);
    appendVerbsActions(words);
    appendVerbsDescriptive(words);
    appendVerbsChanges(words);
    appendAuxiliaryVerbs(words);
    appendAdjectives(words);
    appendFunctionalAdpositions(words);
    appendFunctionalChronological(words);
    appendFunctionalLocational(words);
    appendFunctionalLogical(words);
    appendFunctionalEnumerative(words);
    appendFunctionalDegree(words);
    appendFunctionalManner(words);
    appendRulesConjugations(words);
    appendExpressions(words);

    return words;
  });
</script>

<div class="flex flex-col gap-9">
  <TabsInput
    bind:value={settings.mode.value}
    label="Select Mode"
    valueToLabel={{
      typing: "Typing",
      gojuonTable: "Gojuon Table",
      flashcards: "Flashcards",
    }}
  />

  {#if settings.mode.value === "typing"}
    <GojuonTable />
    <TypingQuestions {letters} {keymap} />
  {:else if settings.mode.value === "gojuonTable"}
    <GojuonTable />
    <GojuonQuestions {gojuons} />
  {:else if settings.mode.value === "flashcards"}
    <FlashcardSettingsJP />
    <FlashcardQuestions
      {words}
      wordToPronunciationFn={({ hiragana, katakana, kanjis, romanization }) =>
        hiragana ?? katakana ?? kanjis?.[0] ?? romanization}
      wordToRomanizationFn={({ romanization }) => romanization}
      schema={[
        {
          label: "kanji",
          valueFn: ({ kanjis, rareKanjis }) => {
            const values = [...(kanjis ?? []), ...(rareKanjis ?? [])];
            return values.length ? values.join(" / ") : undefined;
          },
        },
        {
          label: "kana",
          valueFn: ({ hiragana, katakana }) => {
            const values = [hiragana, katakana].filter((kana) => kana !== undefined);
            return values.length ? values.join(" / ") : undefined;
          },
        },
        {
          label: "preferred written form",
          valueFn: ({ kanjis, hiragana, katakana, preferredForm }) => {
            switch (preferredForm) {
              case "kanji":
                return kanjis?.join(" / ");
              case "hiragana":
                return hiragana;
              case "katakana":
                return katakana;
              case undefined:
                return kanjis?.join(" / ") ?? hiragana ?? katakana ?? "";
            }
          },
          defaultPosition: "question",
        },
        {
          label: "example usages",
          valueFn: ({ exampleUsages }) => exampleUsages ?? [],
          defaultPosition: "question",
        },
        {
          label: "meaning",
          valueFn: ({ meaning }) => meaning,
          defaultPosition: "option",
        },
        {
          label: "derived meanings",
          valueFn: ({ derivedMeanings }) => derivedMeanings ?? [],
          defaultPosition: "option",
        },
        {
          label: "grammar question",
          valueFn: ({ question }) => question,
        },
        {
          label: "grammar answer",
          valueFn: ({ answer }) => answer,
        },
      ]}
    />
  {/if}
</div>
