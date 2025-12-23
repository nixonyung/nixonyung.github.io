import { initSettings } from "../../../../lib/settings.svelte";
import type { JapaneseWord } from "../../types";
import { getKeymap } from "./keymap.svelte";
import { getGojuons, getLetters } from "./letters.svelte";
import { appendAdjectivesDesriptors } from "./words-adjectives-descriptors.svelte";
import { appendAdjectivesFeelings } from "./words-adjectives-feelings.svelte";
import { appendAdverbs } from "./words-adverbs.svelte";
import { appendConjunctions } from "./words-conjunctions.svelte";
import { appendNounsAbstract } from "./words-nouns-abstract.svelte";
import { appendNounsAnimals } from "./words-nouns-animals.svelte";
import { appendNounsLocation } from "./words-nouns-location.svelte";
import { appendNounsObjects } from "./words-nouns-objects.svelte";
import { appendNounsPeopleByCharacteristics } from "./words-nouns-people-characteristics.svelte";
import { appendNounsPeopleByRelationships } from "./words-nouns-people-relationships.svelte";
import { appendNounsTime } from "./words-nouns-time.svelte";
import { appendPhrases } from "./words-phrases.svelte";
import { appendPronouns } from "./words-pronouns.svelte";
import { appendRulesConjugations } from "./words-rules-conjugations.svelte";
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
    enablePronounsMe: { paramKey: "me", defaultValue: true },
    enablePronounsYou: { paramKey: "you", defaultValue: true },
    enablePronounsUs: { paramKey: "us", defaultValue: true },
    enablePronounsThatPerson: { paramKey: "thatPerson", defaultValue: true },
    enablePronounsThosePeople: { paramKey: "thosePeople", defaultValue: true },
    enablePronounsThatThing: { paramKey: "thatThing", defaultValue: true },
    enablePronounsThoseThings: { paramKey: "thoseThings", defaultValue: true },
    enablePronounsReflective: { paramKey: "reflectiveProns", defaultValue: true },
    enablePronounsIndefinite: { paramKey: "indefiniteProns", defaultValue: true },
    enablePronounsInterrogativeWho: { paramKey: "who", defaultValue: true },
    enablePronounsInterrogativeWhat: { paramKey: "what", defaultValue: true },

    // nouns:
    enableNounsPeopleCharacteristicsGeneric: { paramKey: "genericPeople", defaultValue: true },
    enableNounsPeopleCharacteristicsGender: { paramKey: "gender", defaultValue: true },
    enableNounsPeopleCharacteristicsAge: { paramKey: "age", defaultValue: true },
    enableNounsPeopleCharacteristicsProfessions: { paramKey: "professions", defaultValue: true },
    enableNounsPeopleCharacteristicsSocialStatus: { paramKey: "socialStatus", defaultValue: true },

    enableNounsPeopleRelationshipsImmediateFamily: { paramKey: "immFamily", defaultValue: true },
    enableNounsPeopleRelationshipsExtendedFamily: { paramKey: "extFamily", defaultValue: true },
    enableNounsPeopleRelationshipsChosenFamily: { paramKey: "chosenFamily", defaultValue: true },
    enableNounsPeopleRelationshipsFriends: { paramKey: "friends", defaultValue: true },
    enableNounsPeopleRelationshipsCoworkers: { paramKey: "coworkers", defaultValue: true },

    enableNounsAnimals: { paramKey: "animals", defaultValue: true },
    enableNounsObjects: { paramKey: "objects", defaultValue: true },
    enableNounsTime: { paramKey: "timeNouns", defaultValue: true },
    enableNounsNavigation: { paramKey: "locationNouns", defaultValue: true },
    enableNounsAbstract: { paramKey: "abstract", defaultValue: true },

    // verbs:
    // TODO: need to categorize?
    enableVerbs: { paramKey: "verbs", defaultValue: true },

    enableTransitiveVerbs: { paramKey: "transitiveVerbs", defaultValue: true },
    enableIntransitiveVerbs: { paramKey: "intransitiveVerbs", defaultValue: true },
    enableAuxiliaryVerbs: { paramKey: "auxiliary", defaultValue: true },

    enableGodanVerbs: { paramKey: "godanVerbs", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidanVerbs", defaultValue: true },
    enableIrregularVerbs: { paramKey: "irregularVerbs", defaultValue: true },

    // adjectives:
    enableAdjectivesFeelings: { paramKey: "feelings", defaultValue: true },
    enableAdjectivesDescriptors: { paramKey: "descriptors", defaultValue: true },

    enableIAdjectives: { paramKey: "iAdjs", defaultValue: true },
    enableNaAdjectives: { paramKey: "naAdjs", defaultValue: true },

    // adverbs:
    enableAdverbsTime: { paramKey: "timeAdvs", defaultValue: true },
    enableAdverbsLocation: { paramKey: "locationAdvs", defaultValue: true },
    enableAdverbsLogical: { paramKey: "logicalAdvs", defaultValue: true },
    enableAdverbsDegree: { paramKey: "degreeAdvs", defaultValue: true },
    enableAdverbsManner: { paramKey: "mannerAdvs", defaultValue: true },
    enableAdverbsInterrogativeWhen: { paramKey: "when", defaultValue: true },
    enableAdverbsInterrogativeWhere: { paramKey: "where", defaultValue: true },
    enableAdverbsInterrogativeWhy: { paramKey: "why", defaultValue: true },
    enableAdverbsInterrogativeHowCome: { paramKey: "howCome", defaultValue: true },
    enableAdverbsInterrogativeHowMany: { paramKey: "howMany", defaultValue: true },

    // syntax:
    enableConjunctions: { paramKey: "conjunctions", defaultValue: true },

    // phrases / expressions:
    enablePhrasesInterjections: { paramKey: "interjections", defaultValue: true },
    enablePhrasesGreetings: { paramKey: "greetings", defaultValue: true },
    enablePhrasesMiscellaneous: { paramKey: "miscellaneousPhrases", defaultValue: true },

    // grammar rules:
    enableRulesConjugations: { paramKey: "conjugations", defaultValue: true },
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
    appendNounsLocation(words);
    appendNounsAbstract(words);
    appendTransitiveVerbs(words);
    appendIntransitiveVerbs(words);
    appendAdjectivesFeelings(words);
    appendAdjectivesDesriptors(words);
    appendAdverbs(words);
    appendConjunctions(words);
    appendPhrases(words);
    appendRulesConjugations(words);

    return words;
  });
})();
