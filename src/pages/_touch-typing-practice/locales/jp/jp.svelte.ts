import { initSettings } from "../../../../lib/settings.svelte";
import type { JapaneseWord } from "../../types";
import { getKeymap } from "./keymap.svelte";
import { getGojuons, getLetters } from "./letters.svelte";
import { appendAdjectives } from "./words-adjectives.svelte";
import { appendColloquial } from "./words-colloquial.svelte";
import { appendFunctionalChronological } from "./words-functional-chronological.svelte";
import { appendFunctionalDegree } from "./words-functional-degree.svelte";
import { appendFunctionalEnumerative } from "./words-functional-enumerative.svelte";
import { appendFunctionalLocational } from "./words-functional-locational.svelte";
import { appendFunctionalLogical } from "./words-functional-logical.svelte";
import { appendFunctionalManner } from "./words-functional-manner.svelte";
import { appendNounsAbstract } from "./words-nouns-abstract.svelte";
import { appendNounsAnimals } from "./words-nouns-animals.svelte";
import { appendNounsMoments } from "./words-nouns-moments.svelte";
import { appendNounsObjects } from "./words-nouns-objects.svelte";
import { appendNounsPeopleByCharacteristics } from "./words-nouns-people-characteristics.svelte";
import { appendNounsPeopleByRelationships } from "./words-nouns-people-relationships.svelte";
import { appendNounsVenues } from "./words-nouns-venues.svelte";
import { appendPronouns } from "./words-pronouns.svelte";
import { appendRulesAdpositions } from "./words-rules-adpositions.svelte";
import { appendRulesConjugations } from "./words-rules-conjugations.svelte";
import { appendAuxiliaryVerbs } from "./words-verbs-auxiliary.svelte";
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

    enableNounsPeopleRelationshipsParents: { paramKey: "parents", defaultValue: true },
    enableNounsPeopleRelationshipsSiblings: { paramKey: "siblings", defaultValue: true },
    enableNounsPeopleRelationshipsSpouses: { paramKey: "spouses", defaultValue: true },
    enableNounsPeopleRelationshipsOffsprings: { paramKey: "offspring", defaultValue: true },
    enableNounsPeopleRelationshipsGrandparents: { paramKey: "grandparents", defaultValue: true },
    enableNounsPeopleRelationshipsExtendedFamily: { paramKey: "extFamily", defaultValue: true },
    enableNounsPeopleRelationshipsChosenFamily: { paramKey: "chosenFamily", defaultValue: true },
    enableNounsPeopleRelationshipsFriends: { paramKey: "friends", defaultValue: true },
    enableNounsPeopleRelationshipsFellows: { paramKey: "coworkers", defaultValue: true },

    enableNounsAnimals: { paramKey: "animals", defaultValue: true },

    enableNounsObjectsGeneric: { paramKey: "genericObjs", defaultValue: true },
    enableNounsObjectsBiological: { paramKey: "biologicalParts", defaultValue: true },
    enableNounsObjectsNature: { paramKey: "nature", defaultValue: true },
    enableNounsObjectsFoodCuisine: { paramKey: "cuisine", defaultValue: true },
    enableNounsObjectsFoodDishes: { paramKey: "dishes", defaultValue: true },
    enableNounsObjectsFoodDrinks: { paramKey: "drinks", defaultValue: true },
    enableNounsObjectsEquipments: { paramKey: "equipments", defaultValue: true },
    enableNounsObjectsTransportation: { paramKey: "infrastructure", defaultValue: true },

    enableNounsMomentsTimesOfDay: { paramKey: "timesOfDay", defaultValue: true },
    enableNounsMomentsDaysOfWeek: { paramKey: "daysOfWeek", defaultValue: true },
    enableNounsMomentsMonths: { paramKey: "months", defaultValue: true },
    enableNounsMomentsSeasons: { paramKey: "seasons", defaultValue: true },
    enableNounsMomentsFestivals: { paramKey: "festivals", defaultValue: true },
    enableNounsMomentsMiscellaneous: { paramKey: "miscMoments", defaultValue: true },

    enableNounsVenuesGeneric: { paramKey: "genericVenues", defaultValue: true },
    enableNounsVenuesFacilities: { paramKey: "facilities", defaultValue: true },
    enableNounsVenuesShops: { paramKey: "shops", defaultValue: true },
    enableNounsVenuesRegions: { paramKey: "regions", defaultValue: true },
    enableNounsVenuesImaginary: { paramKey: "imagVenues", defaultValue: true },

    enableNounsIdeasLife: { paramKey: "life", defaultValue: true },
    enableNounsIdeasSocialConstructs: { paramKey: "socialConstructs", defaultValue: true },
    enableNounsIdeasLeadership: { paramKey: "leadership", defaultValue: true },
    enableNounsIdeasNarration: { paramKey: "narration", defaultValue: true },
    enableNounsIdeasMath: { paramKey: "math", defaultValue: true },
    enableNounsIdeasScience: { paramKey: "science", defaultValue: true },
    enableNounsIdeasArts: { paramKey: "arts", defaultValue: true },
    enableNounsIdeasRPG: { paramKey: "rpg", defaultValue: true },
    enableNounsIdeasActivities: { paramKey: "activities", defaultValue: true },

    // verbs:
    // TODO: need to categorize?
    // Existence/Being: be, exist, belong, represent.
    // Bodily Functions: breathe, cough, sleep.
    // Communication: say, tell, whisper, ask, inform.
    // Motion: go, walk, arrive, fly.
    // Creation/Production: make, build, form, create, compose.
    // Emotion/Sensation: feel, love, fear, surprise (often stative).
    enableVerbs: { paramKey: "verbs", defaultValue: true },

    enableAuxiliaryVerbs: { paramKey: "auxiliary", defaultValue: true },

    enableTransitiveVerbs: { paramKey: "transitiveVerbs", defaultValue: true },
    enableIntransitiveVerbs: { paramKey: "intransitiveVerbs", defaultValue: true },

    enableGodanVerbs: { paramKey: "godanVerbs", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidanVerbs", defaultValue: true },
    enableIrregularVerbs: { paramKey: "irregularVerbs", defaultValue: true },

    // adjectives:
    enableAdjectives: { paramKey: "adjs", defaultValue: true },

    enableIAdjectives: { paramKey: "iAdjs", defaultValue: true },
    enableNaAdjectives: { paramKey: "naAdjs", defaultValue: true },

    // functional words
    enableFunctionalChronological: { paramKey: "chronological", defaultValue: true },
    enableFunctionalLocational: { paramKey: "locational", defaultValue: true },
    enableFunctionalLogical: { paramKey: "logical", defaultValue: true },
    enableFunctionalEnumerative: { paramKey: "enumerative", defaultValue: true },
    enableFunctionalDegree: { paramKey: "comparative", defaultValue: true },
    enableFunctionalManner: { paramKey: "manner", defaultValue: true },

    // grammar rules:
    enableRulesAdpositions: { paramKey: "adpositions", defaultValue: true },
    enableRulesConjugations: { paramKey: "conjugations", defaultValue: true },

    // colloquial expressions:
    enableColloquialSoftening: { paramKey: "softening", defaultValue: true },
    enableColloquialEmphasis: { paramKey: "emphasis", defaultValue: true },
    enableColloquialAgreeing: { paramKey: "agreeing", defaultValue: true },
    enableColloquialRequests: { paramKey: "requests", defaultValue: true },
    enableColloquialSurprised: { paramKey: "surprised", defaultValue: true },
    enableColloquialGreetingsAndClosings: { paramKey: "greetNClose", defaultValue: true },
    enableColloquialMiscellaneous: { paramKey: "miscColloq", defaultValue: true },
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
    appendNounsMoments(words);
    appendNounsVenues(words);
    appendNounsAbstract(words);
    appendTransitiveVerbs(words);
    appendIntransitiveVerbs(words);
    appendAuxiliaryVerbs(words);
    appendAdjectives(words);
    appendFunctionalChronological(words);
    appendFunctionalLocational(words);
    appendFunctionalLogical(words);
    appendFunctionalEnumerative(words);
    appendFunctionalDegree(words);
    appendFunctionalManner(words);
    appendRulesAdpositions(words);
    appendRulesConjugations(words);
    appendColloquial(words);

    return words;
  });
})();
