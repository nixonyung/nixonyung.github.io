import { initSettings } from "../../../../lib/settings.svelte";
import type { JapaneseWord } from "../../types";
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
    // pronouns
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

    // nouns
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
    enableNounsMomentsMisc: { paramKey: "miscMoments", defaultValue: true },

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

    // verbs
    enableVerbsActionsBodily: { paramKey: "bodily", defaultValue: true },
    enableVerbsActionsIntellectual: { paramKey: "intellectual", defaultValue: true },
    enableVerbsActionsOwnership: { paramKey: "ownership", defaultValue: true },
    enableVerbsActionsTranspositional: { paramKey: "transpositional", defaultValue: true },
    enableVerbsActionsManeuvers: { paramKey: "maneuvers", defaultValue: true },
    enableVerbsActionsActivities: { paramKey: "activities", defaultValue: true },
    enableVerbsDescriptiveBeing: { paramKey: "being", defaultValue: true },
    enableVerbsDescriptiveExistence: { paramKey: "existence", defaultValue: true },
    enableVerbsDescriptiveProcesses: { paramKey: "processes", defaultValue: true },
    enableVerbsChangesEnvironmenal: { paramKey: "environ", defaultValue: true },
    enableVerbsChangesQuantitative: { paramKey: "quant", defaultValue: true },
    enableVerbsChangesResultative: { paramKey: "resultative", defaultValue: true },

    // TODO: move to functional and also include auxiliary adjs.?
    enableAuxiliaryVerbs: { paramKey: "auxiliary", defaultValue: true },

    enableTransitiveVerbs: { paramKey: "transitiveVerbs", defaultValue: true },
    enableIntransitiveVerbs: { paramKey: "intransitiveVerbs", defaultValue: true },

    enableGodanVerbs: { paramKey: "godanVerbs", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidanVerbs", defaultValue: true },
    enableIrregularVerbs: { paramKey: "irregularVerbs", defaultValue: true },

    // adjectives
    // TODO: need to categorize?
    // The Royal Order of Adjectives (OSASCOMP)
    // When using multiple adjectives, they follow this specific order:
    // Opinion: Expresses subjective judgments or attitudes (e.g., beautiful, ugly, wonderful, difficult, delicious).
    // Size: Describes physical dimensions (e.g., large, small, tiny, tall, short).
    // Age: Describes how old something is (e.g., old, new, ancient, young, six-year-old).
    // Shape/Physical Quality: Describes form or other physical attributes (e.g., round, square, thin, rough, untidy).
    // Color: Describes the color or pattern (e.g., red, blue, pale, black-haired).
    // Origin: Describes where something is from (e.g., Italian, American, Chinese, Southern).
    // Material: Describes what something is made of (e.g., wooden, silk, metal, plastic).
    // Purpose: Describes what the noun is used for, often a noun functioning as an adjective (e.g., cooking in "cooking pot", running in "running shoes", tennis in "tennis shoes").
    enableAdjectives: { paramKey: "adjs", defaultValue: true },

    enableIAdjectives: { paramKey: "iAdjs", defaultValue: true },
    enableNaAdjectives: { paramKey: "naAdjs", defaultValue: true },

    // functional
    enableFunctionalAdpositions: { paramKey: "adpositions", defaultValue: true },
    enableFunctionalChronological: { paramKey: "chronological", defaultValue: true },
    enableFunctionalLocational: { paramKey: "locational", defaultValue: true },
    enableFunctionalLogical: { paramKey: "logical", defaultValue: true },
    enableFunctionalEnumerative: { paramKey: "enumerative", defaultValue: true },
    enableFunctionalDegree: { paramKey: "comparative", defaultValue: true },
    enableFunctionalManner: { paramKey: "manner", defaultValue: true },

    // grammar rules
    enableRulesConjugationsStemForm: { paramKey: "stemForm", defaultValue: true },
    enableRulesConjugationsNaiForm: { paramKey: "naiForm", defaultValue: true },
    enableRulesConjugationsPassiveForm: { paramKey: "passiveForm", defaultValue: true },
    enableRulesConjugationsCausativeForm: { paramKey: "causativeForm", defaultValue: true },
    enableRulesConjugationsImperativeForm: { paramKey: "imperativeForm", defaultValue: true },
    enableRulesConjugationsConditionalForm: { paramKey: "conditionalForm", defaultValue: true },
    enableRulesConjugationsPotentialForm: { paramKey: "potentialForm", defaultValue: true },
    enableRulesConjugationsTaForm: { paramKey: "taForm", defaultValue: true },
    enableRulesConjugationsTeForm: { paramKey: "teForm", defaultValue: true },
    enableRulesConjugationsVolitionalForm: { paramKey: "volitionalForm", defaultValue: true },
    enableRulesConjugationsMisc: { paramKey: "miscConjugations", defaultValue: true },

    // expressions
    enableExpressionsSoftening: { paramKey: "softening", defaultValue: true },
    enableExpressionsEmphasis: { paramKey: "emphasis", defaultValue: true },
    enableExpressionsAgreeing: { paramKey: "agreeing", defaultValue: true },
    enableExpressionsRequests: { paramKey: "requests", defaultValue: true },
    enableExpressionsSurprised: { paramKey: "surprised", defaultValue: true },
    enableExpressionsGreetingsAndClosings: { paramKey: "greetNClose", defaultValue: true },
    enableExpressionsMisc: { paramKey: "miscExpr", defaultValue: true },
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
})();
