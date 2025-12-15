import { initSettings } from "../../../../lib/settings.svelte";
import type { JapaneseWord } from "../../types";
import { getKeymap } from "./keymap.svelte";
import { getGojuons, getLetters } from "./letters.svelte";
import { appendAdjectives } from "./words-adjectives.svelte";
import { appendAdverbs } from "./words-adverbs.svelte";
import { appendNouns } from "./words-nouns.svelte";
import { appendPhrases } from "./words-phrases.svelte";
import { appendPronouns } from "./words-pronouns.svelte";
import { appendVerbs } from "./words-verbs.svelte";

export const jp = new (class {
  SETTINGS_SCHEMA = {
    mode: { paramKey: "mode", defaultValue: <"Typing" | "Gojuon Table" | "Flashcards">"Typing" },
  };
  settings = $state(initSettings(this.SETTINGS_SCHEMA));

  GOJUON_SETTINGS_SCHEMA = {
    enableHiragana: { paramKey: "hiragana", defaultValue: true },
    enableKatakana: { paramKey: "katakana", defaultValue: true },
    enableDiacritics: { paramKey: "diacritics", defaultValue: true },
    enableYoon: { paramKey: "yoon", defaultValue: true },

    enableRowA: { paramKey: "rowA", defaultValue: true },
    enableRowKa: { paramKey: "rowKa", defaultValue: true },
    enableRowSa: { paramKey: "rowSa", defaultValue: true },
    enableRowTa: { paramKey: "rowTa", defaultValue: true },
    enableRowNa: { paramKey: "rowNa", defaultValue: true },
    enableRowHa: { paramKey: "rowHa", defaultValue: true },
    enableRowMa: { paramKey: "rowMa", defaultValue: true },
    enableRowYa: { paramKey: "rowYa", defaultValue: true },
    enableRowRa: { paramKey: "rowRa", defaultValue: true },
    enableRowWa: { paramKey: "rowWa", defaultValue: true },
    enableRowN: { paramKey: "rowN", defaultValue: true },

    showOrigins: { paramKey: "gojuonOrigins", defaultValue: false },
  };
  gojuonSettings = $state(initSettings(this.GOJUON_SETTINGS_SCHEMA));

  FLASHCARD_SETTINGS_SCHEMA = {
    enablePronounsPeople: { paramKey: "peoplePronouns", defaultValue: true },
    enablePronounsThings: { paramKey: "thingsPronouns", defaultValue: true },
    enablePronounsGeneral: { paramKey: "generalPronouns", defaultValue: true },
    enablePronounsQuestionWords: { paramKey: "questionWords", defaultValue: true },
    enableNounsPeopleGeneric: { paramKey: "genericPeople", defaultValue: true },
    enableNounsPeopleFamily: { paramKey: "family", defaultValue: true },
    enableNounsPeopleFellows: { paramKey: "fellows", defaultValue: true },
    enableNounsPlacesGeneric: { paramKey: "genericPlaces", defaultValue: true },
    enableNounsNavigation: { paramKey: "navigation", defaultValue: true },
    enableNounsTime: { paramKey: "time", defaultValue: true },
    enableNounsIntangible: { paramKey: "intangible", defaultValue: true },
    enableNounsMiscellaneous: { paramKey: "miscellaneousNouns", defaultValue: true },
    enableVerbsTransitive: { paramKey: "transitiveVerbs", defaultValue: true },
    enableVerbsIntransitive: { paramKey: "intransitiveVerbs", defaultValue: true },
    enableAdjectives: { paramKey: "adjectives", defaultValue: true },
    enableAdverbs: { paramKey: "adverbs", defaultValue: true },
    enablePhrasesParticles: { paramKey: "particles", defaultValue: true },
    enablePhrasesInterjections: { paramKey: "interjections", defaultValue: true },
    enablePhrasesGreetings: { paramKey: "greetings", defaultValue: true },
    enablePhrasesMiscellaneous: { paramKey: "miscellaneousPhrases", defaultValue: true },
    enableSentenceStructuresDesu: { paramKey: "desu", defaultValue: true },
    enableSentenceStructuresAdjectives: { paramKey: "adj", defaultValue: true },
    enableSentenceStructuresIru: { paramKey: "iru", defaultValue: true },
    enableSentenceStructuresAru: { paramKey: "aru", defaultValue: true },
    enableSentenceStructuresIkenai: { paramKey: "ikenai", defaultValue: true },
    enableSentenceStructuresMicellaneous: { paramKey: "miscellaneousSentenceStructures", defaultValue: true },

    enableGodanVerbs: { paramKey: "godan", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidan", defaultValue: true },
    enableIrregularVerbs: { paramKey: "irregular", defaultValue: true },
  };
  flashcardSettings = $state(initSettings(this.FLASHCARD_SETTINGS_SCHEMA));

  keymap = $derived(getKeymap());
  gojuons = $derived(getGojuons());
  letters = $derived(getLetters());

  words = $derived.by(() => {
    const words: JapaneseWord[] = [];

    appendPronouns(words);
    appendNouns(words);
    appendVerbs(words);
    appendAdjectives(words);
    appendAdverbs(words);
    appendPhrases(words);

    return words;
  });
})();
