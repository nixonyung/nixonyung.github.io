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
  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enablePronounsPeople ||
          !jp.flashcardSettings.enablePronounsThings ||
          !jp.flashcardSettings.enablePronounsGeneral ||
          !jp.flashcardSettings.enablePronounsQuestionWords
        ) {
          jp.flashcardSettings.enablePronounsPeople = true;
          jp.flashcardSettings.enablePronounsThings = true;
          jp.flashcardSettings.enablePronounsGeneral = true;
          jp.flashcardSettings.enablePronounsQuestionWords = true;
        } else {
          jp.flashcardSettings.enablePronounsPeople = false;
          jp.flashcardSettings.enablePronounsThings = false;
          jp.flashcardSettings.enablePronounsGeneral = false;
          jp.flashcardSettings.enablePronounsQuestionWords = false;
        }
      }}
    >
      pronouns:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsPeople} label="people" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsThings} label="things" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsGeneral} label="general" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enablePronounsQuestionWords}
      label="question words"
    />
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
      nouns:
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
      verbs:

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
      adjectives:

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
  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (!jp.flashcardSettings.enableAdverbs) {
          jp.flashcardSettings.enableAdverbs = true;
        } else {
          jp.flashcardSettings.enableAdverbs = false;
        }
      }}
    >
      adverbs:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableAdverbs} label="adverbs" />
  </div>
  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enablePhrasesParticles ||
          !jp.flashcardSettings.enablePhrasesInterjections ||
          !jp.flashcardSettings.enablePhrasesGreetings ||
          !jp.flashcardSettings.enablePhrasesMiscellaneous
        ) {
          jp.flashcardSettings.enablePhrasesParticles = true;
          jp.flashcardSettings.enablePhrasesInterjections = true;
          jp.flashcardSettings.enablePhrasesGreetings = true;
          jp.flashcardSettings.enablePhrasesMiscellaneous = true;
        } else {
          jp.flashcardSettings.enablePhrasesParticles = false;
          jp.flashcardSettings.enablePhrasesInterjections = false;
          jp.flashcardSettings.enablePhrasesGreetings = false;
          jp.flashcardSettings.enablePhrasesMiscellaneous = false;
        }
      }}
    >
      phrases
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePhrasesParticles} label="particles" />
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
          !jp.flashcardSettings.enableSentenceStructuresDesu ||
          !jp.flashcardSettings.enableSentenceStructuresIAdjectives ||
          !jp.flashcardSettings.enableSentenceStructuresNaAdjectives ||
          !jp.flashcardSettings.enableSentenceStructuresIru ||
          !jp.flashcardSettings.enableSentenceStructuresAru ||
          !jp.flashcardSettings.enableSentenceStructuresIkenai ||
          !jp.flashcardSettings.enableSentenceStructuresMicellaneous
        ) {
          jp.flashcardSettings.enableSentenceStructuresDesu = true;
          jp.flashcardSettings.enableSentenceStructuresIAdjectives = true;
          jp.flashcardSettings.enableSentenceStructuresNaAdjectives = true;
          jp.flashcardSettings.enableSentenceStructuresIru = true;
          jp.flashcardSettings.enableSentenceStructuresAru = true;
          jp.flashcardSettings.enableSentenceStructuresIkenai = true;
          jp.flashcardSettings.enableSentenceStructuresMicellaneous = true;
        } else {
          jp.flashcardSettings.enableSentenceStructuresDesu = false;
          jp.flashcardSettings.enableSentenceStructuresIAdjectives = false;
          jp.flashcardSettings.enableSentenceStructuresNaAdjectives = false;
          jp.flashcardSettings.enableSentenceStructuresIru = false;
          jp.flashcardSettings.enableSentenceStructuresAru = false;
          jp.flashcardSettings.enableSentenceStructuresIkenai = false;
          jp.flashcardSettings.enableSentenceStructuresMicellaneous = false;
        }
      }}
    >
      sentence structures:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableSentenceStructuresDesu} label="です" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableSentenceStructuresIAdjectives}
      label="い-adj."
    />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableSentenceStructuresNaAdjectives}
      label="な-adj."
    />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableSentenceStructuresIru} label="いる" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableSentenceStructuresAru} label="ある" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableSentenceStructuresIkenai}
      label="いけない"
    />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableSentenceStructuresMicellaneous}
      label="miscellaneous"
    />
  </div>
</div>
