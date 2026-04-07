<script lang="ts">
  import Divider from "@/components/svelte/Divider.svelte";
  import TabsInput from "@/components/svelte/TabsInput.svelte";
  import { initSettings, useSyncSettings } from "../../../../lib/settings.svelte";
  import FlashcardQuestions from "../../components/FlashcardQuestions.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import type { JapaneseWord } from "./FlashcardSettings.svelte";
  import FlashcardSettings from "./FlashcardSettings.svelte";
  import GojuonSettings from "./GojuonSettings.svelte";
  import { getKeymap } from "./keymap.svelte";
  import { getLetters } from "./letters.svelte";
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
      mode: { paramKey: "mode", defaultValue: "typing" as "typing" | "flashcards" },
    }),
  );
  useSyncSettings(settings);

  const keymap = $derived.by(getKeymap);
  const letters = $derived.by(getLetters);
  const words = $derived.by(() => {
    const words: JapaneseWord[] = [];

    // TODO: compound words (e.g. prefixes and suffixes)

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

<TabsInput
  bind:value={settings.mode.value}
  label="Mode"
  valueToLabel={{
    typing: "Typing",
    flashcards: "Flashcards",
  }}
  class="mt-4"
/>
<Divider />

{#if settings.mode.value === "typing"}
  <GojuonSettings />
  <Divider />
  <TypingQuestions
    questions={letters.map(({ letter, romanization }) => ({
      letter,
      input: romanization,
      romanization,
      utterance: letter,
    }))}
    {keymap}
  />
{:else if settings.mode.value === "flashcards"}
  <FlashcardSettings />
  <Divider />
  <FlashcardQuestions
    flashcards={words.map(
      ({
        preferredForm,
        kanjis,
        rareKanjis,
        hiragana,
        katakana,
        romanization,
        meaning,
        derivedMeanings,
        exampleUsages,
      }) => {
        let question = "";
        let pronunciation = "";
        if ((preferredForm === "kanji" || preferredForm === undefined) && !!kanjis?.length) {
          question = [...kanjis, ...(rareKanjis ?? [])].join(" / ");
          pronunciation = [`${hiragana ?? katakana}`, `(${romanization})`].join(" ");
        } else if ((preferredForm === "hiragana" || preferredForm === undefined) && !!hiragana) {
          question = [hiragana, ...(kanjis ?? []), ...(rareKanjis ?? [])].join(" / ");
          pronunciation = `(${romanization})`;
        } else if ((preferredForm === "katakana" || preferredForm === undefined) && !!katakana) {
          question = [katakana!, ...(kanjis ?? []), ...(rareKanjis ?? [])].join(" / ");
          pronunciation = `(${romanization})`;
        }

        return {
          question,
          answer: [meaning, ...(derivedMeanings ?? [])].join(" / "),
          notes: exampleUsages ?? [],
          utterance: hiragana ?? katakana ?? kanjis?.[0] ?? rareKanjis?.[0] ?? romanization,
          pronunciation,
        };
      },
    )}
  />
{/if}
