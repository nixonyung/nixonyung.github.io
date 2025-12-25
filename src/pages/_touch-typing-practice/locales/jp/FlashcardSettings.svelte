<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import { useSyncSettings } from "../../../../lib/settings.svelte";
  import { jp } from "./jp.svelte";

  useSyncSettings(jp.FLASHCARD_SETTINGS_SCHEMA, jp.flashcardSettings);

  const allVerbsDisabled = $derived(!jp.flashcardSettings.enableVerbs);
  const allAdjsDisabled = $derived(
    !jp.flashcardSettings.enableAdjectivesFeelings &&
      !jp.flashcardSettings.enableAdjectivesDescriptors,
  );
</script>

<div class="flex flex-col flex-wrap gap-3">
  <div class="flex items-start gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enablePronounsMe ||
          !jp.flashcardSettings.enablePronounsYou ||
          !jp.flashcardSettings.enablePronounsUs ||
          !jp.flashcardSettings.enablePronounsThatPerson ||
          !jp.flashcardSettings.enablePronounsThosePeople ||
          !jp.flashcardSettings.enablePronounsThatThing ||
          !jp.flashcardSettings.enablePronounsThoseThings ||
          !jp.flashcardSettings.enablePronounsReflective ||
          !jp.flashcardSettings.enablePronounsIndefinite ||
          !jp.flashcardSettings.enablePronounsInterrogativeWho ||
          !jp.flashcardSettings.enablePronounsInterrogativeWhat
        ) {
          jp.flashcardSettings.enablePronounsMe = true;
          jp.flashcardSettings.enablePronounsYou = true;
          jp.flashcardSettings.enablePronounsUs = true;
          jp.flashcardSettings.enablePronounsThatPerson = true;
          jp.flashcardSettings.enablePronounsThosePeople = true;
          jp.flashcardSettings.enablePronounsThatThing = true;
          jp.flashcardSettings.enablePronounsThoseThings = true;
          jp.flashcardSettings.enablePronounsReflective = true;
          jp.flashcardSettings.enablePronounsIndefinite = true;
          jp.flashcardSettings.enablePronounsInterrogativeWho = true;
          jp.flashcardSettings.enablePronounsInterrogativeWhat = true;
        } else {
          jp.flashcardSettings.enablePronounsMe = false;
          jp.flashcardSettings.enablePronounsYou = false;
          jp.flashcardSettings.enablePronounsUs = false;
          jp.flashcardSettings.enablePronounsThatPerson = false;
          jp.flashcardSettings.enablePronounsThosePeople = false;
          jp.flashcardSettings.enablePronounsThatThing = false;
          jp.flashcardSettings.enablePronounsThoseThings = false;
          jp.flashcardSettings.enablePronounsReflective = false;
          jp.flashcardSettings.enablePronounsIndefinite = false;
          jp.flashcardSettings.enablePronounsInterrogativeWho = false;
          jp.flashcardSettings.enablePronounsInterrogativeWhat = false;
        }
      }}
    >
      Pronouns:
    </Highlighted>

    <div class="flex flex-col gap-y-1.5">
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsMe} label="I" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsYou} label="You" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsUs} label="We" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsThatPerson}
          label="That Person"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsThosePeople}
          label="Those People"
        />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsThatThing}
          label="That Thing"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsThoseThings}
          label="Those Things"
        />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsReflective}
          label="Reflective"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsIndefinite}
          label="Indefinite"
        />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsInterrogativeWho}
          label="Who?"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enablePronounsInterrogativeWhat}
          label="What?"
        />
      </div>
    </div>
  </div>

  <div class="flex items-start gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric ||
          !jp.flashcardSettings.enableNounsPeopleCharacteristicsGender ||
          !jp.flashcardSettings.enableNounsPeopleCharacteristicsAge ||
          !jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions ||
          !jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsImmediateFamily ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsFriends ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsCoworkers ||
          !jp.flashcardSettings.enableNounsAnimals ||
          !jp.flashcardSettings.enableNounsObjects ||
          !jp.flashcardSettings.enableNounsTime ||
          !jp.flashcardSettings.enableNounsNavigation ||
          !jp.flashcardSettings.enableNounsAbstract
        ) {
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGender = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsAge = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsImmediateFamily = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsFriends = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsCoworkers = true;
          jp.flashcardSettings.enableNounsAnimals = true;
          jp.flashcardSettings.enableNounsObjects = true;
          jp.flashcardSettings.enableNounsTime = true;
          jp.flashcardSettings.enableNounsNavigation = true;
          jp.flashcardSettings.enableNounsAbstract = true;
        } else {
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGender = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsAge = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsImmediateFamily = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsFriends = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsCoworkers = false;
          jp.flashcardSettings.enableNounsAnimals = false;
          jp.flashcardSettings.enableNounsObjects = false;
          jp.flashcardSettings.enableNounsTime = false;
          jp.flashcardSettings.enableNounsNavigation = false;
          jp.flashcardSettings.enableNounsAbstract = false;
        }
      }}
    >
      Nouns:
    </Highlighted>

    <div class="flex flex-col gap-y-1.5">
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric}
          label="Generic People"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsGender}
          label="People By Gender"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsAge}
          label="People By Age"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions}
          label="People By Professions"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus}
          label="People By Social Status"
        />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsImmediateFamily}
          label="Immediate Family"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily}
          label="Extended Family"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily}
          label="Chosen Family"
        />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsFriends}
          label="Friends"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsCoworkers}
          label="Coworkers"
        />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsAnimals} label="Animals" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjects} label="Objects" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsTime} label="Time" />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsNavigation}
          label="Navigation"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNounsAbstract}
          label="Abstract Concepts"
        />
      </div>
    </div>
  </div>
  <div class="flex items-center-safe gap-6">
    <Highlighted
      vertical
      onclick={(ev) => {
        if (ev.target !== ev.currentTarget) return;

        if (!jp.flashcardSettings.enableVerbs) {
          jp.flashcardSettings.enableVerbs = true;
        } else {
          jp.flashcardSettings.enableVerbs = false;
        }
      }}
    >
      Verbs:
      <div class="flex items-center-safe gap-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableTransitiveVerbs}
          label="Transitive"
          disabled={allVerbsDisabled}
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableIntransitiveVerbs}
          label="Intransitive"
          disabled={allVerbsDisabled}
        />
      </div>
      <div class="flex items-center-safe gap-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableGodanVerbs}
          label="Godan"
          disabled={allVerbsDisabled}
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableIchidanVerbs}
          label="Ichidan"
          disabled={allVerbsDisabled}
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableIrregularVerbs}
          label="Irregular"
          disabled={allVerbsDisabled}
        />
      </div>
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableVerbs} label="all" />
  </div>
  <div class="flex items-center-safe gap-6">
    <Highlighted
      vertical
      onclick={(ev) => {
        if (ev.target !== ev.currentTarget) return;

        if (
          !jp.flashcardSettings.enableAdjectivesFeelings ||
          !jp.flashcardSettings.enableAdjectivesDescriptors
        ) {
          jp.flashcardSettings.enableAdjectivesFeelings = true;
          jp.flashcardSettings.enableAdjectivesDescriptors = true;
        } else {
          jp.flashcardSettings.enableAdjectivesFeelings = false;
          jp.flashcardSettings.enableAdjectivesDescriptors = false;
        }
      }}
    >
      Adjectives:
      <div class="flex items-center-safe gap-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableIAdjectives}
          label="い-adj."
          disabled={allAdjsDisabled}
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableNaAdjectives}
          label="な-adj."
          disabled={allAdjsDisabled}
        />
      </div>
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableAdjectivesFeelings} label="Feelings" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableAdjectivesDescriptors}
      label="Descriptors"
    />
  </div>

  <div class="flex items-start gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableFunctionalChronological ||
          !jp.flashcardSettings.enableFunctionalLocational ||
          !jp.flashcardSettings.enableFunctionalLogical ||
          !jp.flashcardSettings.enableFunctionalEnumerative ||
          !jp.flashcardSettings.enableFunctionalDegree ||
          !jp.flashcardSettings.enableFunctionalManner
        ) {
          jp.flashcardSettings.enableFunctionalChronological = true;
          jp.flashcardSettings.enableFunctionalLocational = true;
          jp.flashcardSettings.enableFunctionalLogical = true;
          jp.flashcardSettings.enableFunctionalEnumerative = true;
          jp.flashcardSettings.enableFunctionalDegree = true;
          jp.flashcardSettings.enableFunctionalManner = true;
        } else {
          jp.flashcardSettings.enableFunctionalChronological = false;
          jp.flashcardSettings.enableFunctionalLocational = false;
          jp.flashcardSettings.enableFunctionalLogical = false;
          jp.flashcardSettings.enableFunctionalEnumerative = false;
          jp.flashcardSettings.enableFunctionalDegree = false;
          jp.flashcardSettings.enableFunctionalManner = false;
        }
      }}
    >
      Functional Words:
    </Highlighted>

    <div class="flex flex-col gap-y-1.5">
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableFunctionalChronological}
          label="Chronological"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableFunctionalLocational}
          label="Locational"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableFunctionalLogical}
          label="Logical"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableFunctionalEnumerative}
          label="Enumerative"
        />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableFunctionalDegree}
          label="Comparative"
        />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalManner} label="Manner" />
      </div>
    </div>
  </div>

  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enablePhrasesInterjections ||
          !jp.flashcardSettings.enablePhrasesGreetings ||
          !jp.flashcardSettings.enablePhrasesMiscellaneous
        ) {
          jp.flashcardSettings.enablePhrasesInterjections = true;
          jp.flashcardSettings.enablePhrasesGreetings = true;
          jp.flashcardSettings.enablePhrasesMiscellaneous = true;
        } else {
          jp.flashcardSettings.enablePhrasesInterjections = false;
          jp.flashcardSettings.enablePhrasesGreetings = false;
          jp.flashcardSettings.enablePhrasesMiscellaneous = false;
        }
      }}
    >
      Phrases:
    </Highlighted>

    <CheckboxInput
      bind:checked={jp.flashcardSettings.enablePhrasesInterjections}
      label="interjections"
    />
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePhrasesGreetings} label="greetings" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enablePhrasesMiscellaneous}
      label="miscellaneous"
    />
  </div>

  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableRulesAdpositions ||
          !jp.flashcardSettings.enableRulesConjugations
        ) {
          jp.flashcardSettings.enableRulesAdpositions = true;
          jp.flashcardSettings.enableRulesConjugations = true;
        } else {
          jp.flashcardSettings.enableRulesAdpositions = false;
          jp.flashcardSettings.enableRulesConjugations = false;
        }
      }}
    >
      Grammar Rules:
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesAdpositions} label="Adpositions" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableRulesConjugations}
      label="Conjugations"
    />
  </div>
</div>
