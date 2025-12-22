import { initSettings } from "../../../../lib/settings.svelte";
import type { JapaneseWord } from "../../types";
import { getKeymap } from "./keymap.svelte";
import { getGojuons, getLetters } from "./letters.svelte";
import { appendAdjectivesDesriptors } from "./words-adjectives-descriptors.svelte";
import { appendAdjectivesFeelings } from "./words-adjectives-feelings.svelte";
import { appendAdverbs } from "./words-adverbs.svelte";
import { appendNounsAbstract } from "./words-nouns-abstract.svelte";
import { appendNounsAnimals } from "./words-nouns-animals.svelte";
import { appendNounsNavigation } from "./words-nouns-navigation.svelte";
import { appendNounsObjects } from "./words-nouns-objects.svelte";
import { appendNounsPeopleByCharacteristics } from "./words-nouns-people-characteristics.svelte";
import { appendNounsPeopleByRelationships } from "./words-nouns-people-relationships.svelte";
import { appendNounsTime } from "./words-nouns-time.svelte";
import { appendPhrases } from "./words-phrases.svelte";
import { appendPronouns } from "./words-pronouns.svelte";
import { appendIntransitiveVerbs } from "./words-verbs-intransitive.svelte";
import { appendTransitiveVerbs } from "./words-verbs-transitive.svelte";

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
    // pronouns:
    enablePronounsPeople: { paramKey: "peoplePronouns", defaultValue: true },
    enablePronounsThings: { paramKey: "thingsPronouns", defaultValue: true },
    enablePronounsGeneral: { paramKey: "generalPronouns", defaultValue: true },
    enablePronounsQuestionWords: { paramKey: "questionWords", defaultValue: true },

    // nouns:
    enableNounsPeopleCharacteristicsGeneric: { paramKey: "genericPeople", defaultValue: true },
    enableNounsPeopleCharacteristicsGender: { paramKey: "gender", defaultValue: true },
    enableNounsPeopleCharacteristicsAge: { paramKey: "age", defaultValue: true },
    enableNounsPeopleCharacteristicsProfessions: { paramKey: "professions", defaultValue: true },
    enableNounsPeopleCharacteristicsSocialStatus: { paramKey: "socialStatus", defaultValue: true },

    enableNounsPeopleRelationshipsImmediateFamily: { paramKey: "immFamily", defaultValue: true },
    enableNounsPeopleRelationshipsExtendedFamily: { paramKey: "extFamily", defaultValue: true },
    enableNounsPeopleRelationshipsChosenFamily: {
      paramKey: "nonBioFamily",
      defaultValue: true,
    },
    enableNounsPeopleRelationshipsFriends: { paramKey: "friends", defaultValue: true },
    enableNounsPeopleRelationshipsCoworkers: { paramKey: "coworkers", defaultValue: true },

    enableNounsAnimals: { paramKey: "animals", defaultValue: true },
    enableNounsObjects: { paramKey: "objects", defaultValue: true },
    enableNounsTime: { paramKey: "time", defaultValue: true },
    enableNounsNavigation: { paramKey: "navigation", defaultValue: true },
    enableNounsAbstract: { paramKey: "abstract", defaultValue: true },

    // verbs:
    enableVerbs: { paramKey: "verbs", defaultValue: true },

    enableTransitiveVerbs: { paramKey: "transitiveVerbs", defaultValue: true },
    enableIntransitiveVerbs: { paramKey: "intransitiveVerbs", defaultValue: true },

    enableGodanVerbs: { paramKey: "godanVerbs", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidanVerbs", defaultValue: true },
    enableIrregularVerbs: { paramKey: "irregularVerbs", defaultValue: true },

    // adjectives:
    enableAdjectivesFeelings: { paramKey: "feelings", defaultValue: true },
    enableAdjectivesDescriptors: { paramKey: "descriptors", defaultValue: true },

    enableIAdjectives: { paramKey: "iAdjs", defaultValue: true },
    enableNaAdjectives: { paramKey: "naAdjs", defaultValue: true },

    // adverbs:
    // TODO: move to sentence structures
    enableAdverbs: { paramKey: "adverbs", defaultValue: true },

    // phrases / expressions:
    enablePhrasesParticles: { paramKey: "particles", defaultValue: true },
    enablePhrasesInterjections: { paramKey: "interjections", defaultValue: true },
    enablePhrasesGreetings: { paramKey: "greetings", defaultValue: true },
    enablePhrasesMiscellaneous: { paramKey: "miscellaneousPhrases", defaultValue: true },

    // sentences structures:
    // TODO: need refine
    enableSentenceStructuresDesu: { paramKey: "desu", defaultValue: true },
    enableSentenceStructuresIAdjectives: { paramKey: "iAdj", defaultValue: true },
    enableSentenceStructuresNaAdjectives: { paramKey: "naAdj", defaultValue: true },
    enableSentenceStructuresIru: { paramKey: "iru", defaultValue: true },
    enableSentenceStructuresAru: { paramKey: "aru", defaultValue: true },
    enableSentenceStructuresIkenai: { paramKey: "ikenai", defaultValue: true },
    enableSentenceStructuresMicellaneous: {
      paramKey: "miscellaneousSentenceStructures",
      defaultValue: true,
    },
  };
  flashcardSettings = $state(initSettings(this.FLASHCARD_SETTINGS_SCHEMA));

  keymap = $derived(getKeymap());
  gojuons = $derived(getGojuons());
  letters = $derived(getLetters());

  words = $derived.by(() => {
    const words: JapaneseWord[] = [];

    appendPronouns(words);
    appendNounsPeopleByCharacteristics(words);
    appendNounsPeopleByRelationships(words);
    appendNounsAnimals(words);
    appendNounsObjects(words);
    appendNounsTime(words);
    appendNounsNavigation(words);
    appendNounsAbstract(words);
    appendTransitiveVerbs(words);
    appendIntransitiveVerbs(words);
    appendAdjectivesFeelings(words);
    appendAdjectivesDesriptors(words);
    appendAdverbs(words);
    appendPhrases(words);

    return words;
  });
})();
