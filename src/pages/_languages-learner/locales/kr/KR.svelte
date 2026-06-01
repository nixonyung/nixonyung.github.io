<script lang="ts">
  import Divider from "@/components/svelte/Divider.svelte";
  import TabsInput from "@/components/svelte/TabsInput.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte.ts";
  import FlashcardQuestions from "../../components/FlashcardQuestions.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import type { KoreanWord } from "./FlashcardSettings.svelte";
  import FlashcardSettings from "./FlashcardSettings.svelte";
  import { getLettersAndKeymap } from "./letters.svelte.ts";
  import LettersSettings from "./LettersSettings.svelte";
  import { appendNounsPeopleByRelationships } from "./words-nouns-people-relationships.svelte.ts";

  const settings = $state(
    initSettings({
      mode: { paramKey: "mode", defaultValue: "typing" as "typing" | "flashcards" },
    }),
  );
  useSyncSettings(settings);

  const { keymap, letters } = $derived.by(getLettersAndKeymap);
  const words = $derived.by(() => {
    const words: KoreanWord[] = [];

    // TODO: compound words (e.g. prefixes and suffixes)

    // appendPronouns(words);
    // appendNounsPeopleByCharacteristics(words);
    appendNounsPeopleByRelationships(words);
    // appendNounsAnimals(words);
    // appendNounsObjects(words);
    // appendNounsMoments(words);
    // appendNounsVenues(words);
    // appendNounsIdeas(words);
    // appendVerbsActions(words);
    // appendVerbsDescriptive(words);
    // appendVerbsChanges(words);
    // appendAuxiliaryVerbs(words);
    // appendAdjectives(words);
    // appendFunctionalAdpositions(words);
    // appendFunctionalChronological(words);
    // appendFunctionalLocational(words);
    // appendFunctionalLogical(words);
    // appendFunctionalEnumerative(words);
    // appendFunctionalDegree(words);
    // appendFunctionalManner(words);
    // appendRulesConjugations(words);
    // appendExpressions(words);

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

{#if settings.mode.value === "typing"}
  <Divider />
  <LettersSettings />
  <Divider />
  <TypingQuestions questions={letters} {keymap} />
{:else if settings.mode.value === "flashcards"}
  <Divider />
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
