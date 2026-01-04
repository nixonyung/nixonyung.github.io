<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import Highlighted from "@/components/Highlighted.svelte";
  import ReferencesList from "@/components/ReferencesList.svelte";
  import { useSyncSettings } from "../../../../lib/settings.svelte";
  import { jp } from "./jp.svelte";

  useSyncSettings(jp.FLASHCARD_SETTINGS_SCHEMA, jp.flashcardSettings);

  const allVerbsDisabled = $derived(!jp.flashcardSettings.enableVerbs && !jp.flashcardSettings.enableAuxiliaryVerbs);
  const allAdjsDisabled = $derived(!jp.flashcardSettings.enableAdjectives);
</script>

<ReferencesList
  references={{
    Dictionaries: {
      "TAKOBOTO (English dictionary)": "https://takoboto.jp/",
      "Weblio (native dictionary)": "https://www.weblio.jp/",
    },
    "Verb Conjugations": {
      "Verb Conjugation - Tofugu": "https://www.tofugu.com/japanese-grammar/verb-conjugation-groups/",
      "Japanese conjugation - revision sheet":
        "https://www.wikiwand.com/en/articles/Japanese_conjugation#/media/File:AMB_Japanese_Verbs.pdf",
    },
    "Google Search with AI Overview": undefined,
  }}
/>

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
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsThatPerson} label="That Person" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsThosePeople} label="Those People" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsThatThing} label="That Thing" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsThoseThings} label="Those Things" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsReflective} label="Reflective" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsIndefinite} label="Indefinite" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsInterrogativeWho} label="Who?" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsInterrogativeWhat} label="What?" />
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
          !jp.flashcardSettings.enableNounsPeopleRelationshipsParents ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsFriends ||
          !jp.flashcardSettings.enableNounsPeopleRelationshipsFellows ||
          !jp.flashcardSettings.enableNounsAnimals ||
          !jp.flashcardSettings.enableNounsObjectsGeneric ||
          !jp.flashcardSettings.enableNounsObjectsBiological ||
          !jp.flashcardSettings.enableNounsObjectsNature ||
          !jp.flashcardSettings.enableNounsObjectsFoodCuisine ||
          !jp.flashcardSettings.enableNounsObjectsFoodDishes ||
          !jp.flashcardSettings.enableNounsObjectsFoodDrinks ||
          !jp.flashcardSettings.enableNounsObjectsEquipments ||
          !jp.flashcardSettings.enableNounsObjectsTransportation ||
          !jp.flashcardSettings.enableNounsMomentsTimesOfDay ||
          !jp.flashcardSettings.enableNounsMomentsDaysOfWeek ||
          !jp.flashcardSettings.enableNounsMomentsMonths ||
          !jp.flashcardSettings.enableNounsMomentsSeasons ||
          !jp.flashcardSettings.enableNounsMomentsFestivals ||
          !jp.flashcardSettings.enableNounsMomentsMisc ||
          !jp.flashcardSettings.enableNounsVenuesGeneric ||
          !jp.flashcardSettings.enableNounsVenuesFacilities ||
          !jp.flashcardSettings.enableNounsVenuesShops ||
          !jp.flashcardSettings.enableNounsVenuesRegions ||
          !jp.flashcardSettings.enableNounsVenuesImaginary ||
          !jp.flashcardSettings.enableNounsIdeasLife ||
          !jp.flashcardSettings.enableNounsIdeasSocialConstructs ||
          !jp.flashcardSettings.enableNounsIdeasLeadership ||
          !jp.flashcardSettings.enableNounsIdeasNarration ||
          !jp.flashcardSettings.enableNounsIdeasMath ||
          !jp.flashcardSettings.enableNounsIdeasScience ||
          !jp.flashcardSettings.enableNounsIdeasArts ||
          !jp.flashcardSettings.enableNounsIdeasRPG ||
          !jp.flashcardSettings.enableNounsIdeasActivities
        ) {
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGender = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsAge = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions = true;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsParents = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsFriends = true;
          jp.flashcardSettings.enableNounsPeopleRelationshipsFellows = true;
          jp.flashcardSettings.enableNounsAnimals = true;
          jp.flashcardSettings.enableNounsObjectsGeneric = true;
          jp.flashcardSettings.enableNounsObjectsBiological = true;
          jp.flashcardSettings.enableNounsObjectsNature = true;
          jp.flashcardSettings.enableNounsObjectsFoodCuisine = true;
          jp.flashcardSettings.enableNounsObjectsFoodDishes = true;
          jp.flashcardSettings.enableNounsObjectsFoodDrinks = true;
          jp.flashcardSettings.enableNounsObjectsEquipments = true;
          jp.flashcardSettings.enableNounsObjectsTransportation = true;
          jp.flashcardSettings.enableNounsMomentsTimesOfDay = true;
          jp.flashcardSettings.enableNounsMomentsDaysOfWeek = true;
          jp.flashcardSettings.enableNounsMomentsMonths = true;
          jp.flashcardSettings.enableNounsMomentsSeasons = true;
          jp.flashcardSettings.enableNounsMomentsFestivals = true;
          jp.flashcardSettings.enableNounsMomentsMisc = true;
          jp.flashcardSettings.enableNounsVenuesGeneric = true;
          jp.flashcardSettings.enableNounsVenuesFacilities = true;
          jp.flashcardSettings.enableNounsVenuesShops = true;
          jp.flashcardSettings.enableNounsVenuesRegions = true;
          jp.flashcardSettings.enableNounsVenuesImaginary = true;
          jp.flashcardSettings.enableNounsIdeasLife = true;
          jp.flashcardSettings.enableNounsIdeasSocialConstructs = true;
          jp.flashcardSettings.enableNounsIdeasLeadership = true;
          jp.flashcardSettings.enableNounsIdeasNarration = true;
          jp.flashcardSettings.enableNounsIdeasMath = true;
          jp.flashcardSettings.enableNounsIdeasScience = true;
          jp.flashcardSettings.enableNounsIdeasArts = true;
          jp.flashcardSettings.enableNounsIdeasRPG = true;
          jp.flashcardSettings.enableNounsIdeasActivities = true;
        } else {
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsGender = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsAge = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions = false;
          jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsParents = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsFriends = false;
          jp.flashcardSettings.enableNounsPeopleRelationshipsFellows = false;
          jp.flashcardSettings.enableNounsAnimals = false;
          jp.flashcardSettings.enableNounsObjectsGeneric = false;
          jp.flashcardSettings.enableNounsObjectsBiological = false;
          jp.flashcardSettings.enableNounsObjectsNature = false;
          jp.flashcardSettings.enableNounsObjectsFoodCuisine = false;
          jp.flashcardSettings.enableNounsObjectsFoodDishes = false;
          jp.flashcardSettings.enableNounsObjectsFoodDrinks = false;
          jp.flashcardSettings.enableNounsObjectsEquipments = false;
          jp.flashcardSettings.enableNounsObjectsTransportation = false;
          jp.flashcardSettings.enableNounsMomentsTimesOfDay = false;
          jp.flashcardSettings.enableNounsMomentsDaysOfWeek = false;
          jp.flashcardSettings.enableNounsMomentsMonths = false;
          jp.flashcardSettings.enableNounsMomentsSeasons = false;
          jp.flashcardSettings.enableNounsMomentsFestivals = false;
          jp.flashcardSettings.enableNounsMomentsMisc = false;
          jp.flashcardSettings.enableNounsVenuesGeneric = false;
          jp.flashcardSettings.enableNounsVenuesFacilities = false;
          jp.flashcardSettings.enableNounsVenuesShops = false;
          jp.flashcardSettings.enableNounsVenuesRegions = false;
          jp.flashcardSettings.enableNounsVenuesImaginary = false;
          jp.flashcardSettings.enableNounsIdeasLife = false;
          jp.flashcardSettings.enableNounsIdeasSocialConstructs = false;
          jp.flashcardSettings.enableNounsIdeasLeadership = false;
          jp.flashcardSettings.enableNounsIdeasNarration = false;
          jp.flashcardSettings.enableNounsIdeasMath = false;
          jp.flashcardSettings.enableNounsIdeasScience = false;
          jp.flashcardSettings.enableNounsIdeasArts = false;
          jp.flashcardSettings.enableNounsIdeasRPG = false;
          jp.flashcardSettings.enableNounsIdeasActivities = false;
        }
      }}
    >
      Nouns:
    </Highlighted>

    <div class="flex flex-col gap-y-1.5">
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric ||
              !jp.flashcardSettings.enableNounsPeopleCharacteristicsGender ||
              !jp.flashcardSettings.enableNounsPeopleCharacteristicsAge ||
              !jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions ||
              !jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus
            ) {
              jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric = true;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsGender = true;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsAge = true;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions = true;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus = true;
            } else {
              jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric = false;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsGender = false;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsAge = false;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions = false;
              jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus = false;
            }
          }}>People (by Characteristics):</Highlighted
        >
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric} label="(generic)" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsGender} label="Gender" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsAge} label="Age" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions} label="Professions" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus} label="Social Status" />
      </div>
      <div class="flex items-start gap-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableNounsPeopleRelationshipsParents ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsFriends ||
              !jp.flashcardSettings.enableNounsPeopleRelationshipsFellows
            ) {
              jp.flashcardSettings.enableNounsPeopleRelationshipsParents = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsFriends = true;
              jp.flashcardSettings.enableNounsPeopleRelationshipsFellows = true;
            } else {
              jp.flashcardSettings.enableNounsPeopleRelationshipsParents = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsFriends = false;
              jp.flashcardSettings.enableNounsPeopleRelationshipsFellows = false;
            }
          }}>People (by Relationships):</Highlighted
        >
        <div class="flex flex-col gap-y-1.5">
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <Highlighted
              onclick={() => {
                if (
                  !jp.flashcardSettings.enableNounsPeopleRelationshipsParents ||
                  !jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings ||
                  !jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses ||
                  !jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings ||
                  !jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents
                ) {
                  jp.flashcardSettings.enableNounsPeopleRelationshipsParents = true;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings = true;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses = true;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings = true;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents = true;
                } else {
                  jp.flashcardSettings.enableNounsPeopleRelationshipsParents = false;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings = false;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses = false;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings = false;
                  jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents = false;
                }
              }}>Immediate Family:</Highlighted
            >
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsParents} label="Parents" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings} label="Siblings" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses} label="Spouses" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings} label="Offsprings" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents} label="Grandparents" />
          </div>
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily} label="Extended Family" />
          </div>
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily} label="Chosen Family" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsFriends} label="Friends" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleRelationshipsFellows} label="Fellows" />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsAnimals} label="Animals" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableNounsObjectsGeneric ||
              !jp.flashcardSettings.enableNounsObjectsBiological ||
              !jp.flashcardSettings.enableNounsObjectsNature ||
              !jp.flashcardSettings.enableNounsObjectsFoodCuisine ||
              !jp.flashcardSettings.enableNounsObjectsFoodDishes ||
              !jp.flashcardSettings.enableNounsObjectsFoodDrinks ||
              !jp.flashcardSettings.enableNounsObjectsEquipments ||
              !jp.flashcardSettings.enableNounsObjectsTransportation
            ) {
              jp.flashcardSettings.enableNounsObjectsGeneric = true;
              jp.flashcardSettings.enableNounsObjectsBiological = true;
              jp.flashcardSettings.enableNounsObjectsNature = true;
              jp.flashcardSettings.enableNounsObjectsFoodCuisine = true;
              jp.flashcardSettings.enableNounsObjectsFoodDishes = true;
              jp.flashcardSettings.enableNounsObjectsFoodDrinks = true;
              jp.flashcardSettings.enableNounsObjectsEquipments = true;
              jp.flashcardSettings.enableNounsObjectsTransportation = true;
            } else {
              jp.flashcardSettings.enableNounsObjectsGeneric = false;
              jp.flashcardSettings.enableNounsObjectsBiological = false;
              jp.flashcardSettings.enableNounsObjectsNature = false;
              jp.flashcardSettings.enableNounsObjectsFoodCuisine = false;
              jp.flashcardSettings.enableNounsObjectsFoodDishes = false;
              jp.flashcardSettings.enableNounsObjectsFoodDrinks = false;
              jp.flashcardSettings.enableNounsObjectsEquipments = false;
              jp.flashcardSettings.enableNounsObjectsTransportation = false;
            }
          }}>Objects:</Highlighted
        >
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsGeneric} label="(generic)" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsBiological} label="Biological Parts" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsNature} label="Nature" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsFoodCuisine} label="Cuisine" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsFoodDishes} label="Dishes" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsFoodDrinks} label="Drinks" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsEquipments} label="Equipments" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsObjectsTransportation} label="Transportation" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableNounsMomentsTimesOfDay ||
              !jp.flashcardSettings.enableNounsMomentsDaysOfWeek ||
              !jp.flashcardSettings.enableNounsMomentsMonths ||
              !jp.flashcardSettings.enableNounsMomentsSeasons ||
              !jp.flashcardSettings.enableNounsMomentsFestivals ||
              !jp.flashcardSettings.enableNounsMomentsMisc
            ) {
              jp.flashcardSettings.enableNounsMomentsTimesOfDay = true;
              jp.flashcardSettings.enableNounsMomentsDaysOfWeek = true;
              jp.flashcardSettings.enableNounsMomentsMonths = true;
              jp.flashcardSettings.enableNounsMomentsSeasons = true;
              jp.flashcardSettings.enableNounsMomentsFestivals = true;
              jp.flashcardSettings.enableNounsMomentsMisc = true;
            } else {
              jp.flashcardSettings.enableNounsMomentsTimesOfDay = false;
              jp.flashcardSettings.enableNounsMomentsDaysOfWeek = false;
              jp.flashcardSettings.enableNounsMomentsMonths = false;
              jp.flashcardSettings.enableNounsMomentsSeasons = false;
              jp.flashcardSettings.enableNounsMomentsFestivals = false;
              jp.flashcardSettings.enableNounsMomentsMisc = false;
            }
          }}>Moments:</Highlighted
        >
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsMomentsTimesOfDay} label="Times Of Day" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsMomentsDaysOfWeek} label="Days Of Week" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsMomentsMonths} label="Months" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsMomentsSeasons} label="Seasons" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsMomentsFestivals} label="Festivals" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsMomentsMisc} label="(misc.)" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableNounsVenuesGeneric ||
              !jp.flashcardSettings.enableNounsVenuesFacilities ||
              !jp.flashcardSettings.enableNounsVenuesShops ||
              !jp.flashcardSettings.enableNounsVenuesRegions ||
              !jp.flashcardSettings.enableNounsVenuesImaginary
            ) {
              jp.flashcardSettings.enableNounsVenuesGeneric = true;
              jp.flashcardSettings.enableNounsVenuesFacilities = true;
              jp.flashcardSettings.enableNounsVenuesShops = true;
              jp.flashcardSettings.enableNounsVenuesRegions = true;
              jp.flashcardSettings.enableNounsVenuesImaginary = true;
            } else {
              jp.flashcardSettings.enableNounsVenuesGeneric = false;
              jp.flashcardSettings.enableNounsVenuesFacilities = false;
              jp.flashcardSettings.enableNounsVenuesShops = false;
              jp.flashcardSettings.enableNounsVenuesRegions = false;
              jp.flashcardSettings.enableNounsVenuesImaginary = false;
            }
          }}>Venues:</Highlighted
        >
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsVenuesGeneric} label="(Generic)" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsVenuesFacilities} label="Facilities" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsVenuesShops} label="Shops" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsVenuesRegions} label="Regions" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsVenuesImaginary} label="Imaginary" />
      </div>
      <div class="flex flex-wrap items-center-safe gap-x-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableNounsIdeasLife ||
              !jp.flashcardSettings.enableNounsIdeasSocialConstructs ||
              !jp.flashcardSettings.enableNounsIdeasLeadership ||
              !jp.flashcardSettings.enableNounsIdeasNarration ||
              !jp.flashcardSettings.enableNounsIdeasMath ||
              !jp.flashcardSettings.enableNounsIdeasScience ||
              !jp.flashcardSettings.enableNounsIdeasArts ||
              !jp.flashcardSettings.enableNounsIdeasRPG ||
              !jp.flashcardSettings.enableNounsIdeasActivities
            ) {
              jp.flashcardSettings.enableNounsIdeasLife = true;
              jp.flashcardSettings.enableNounsIdeasSocialConstructs = true;
              jp.flashcardSettings.enableNounsIdeasLeadership = true;
              jp.flashcardSettings.enableNounsIdeasNarration = true;
              jp.flashcardSettings.enableNounsIdeasMath = true;
              jp.flashcardSettings.enableNounsIdeasScience = true;
              jp.flashcardSettings.enableNounsIdeasArts = true;
              jp.flashcardSettings.enableNounsIdeasRPG = true;
              jp.flashcardSettings.enableNounsIdeasActivities = true;
            } else {
              jp.flashcardSettings.enableNounsIdeasLife = false;
              jp.flashcardSettings.enableNounsIdeasSocialConstructs = false;
              jp.flashcardSettings.enableNounsIdeasLeadership = false;
              jp.flashcardSettings.enableNounsIdeasNarration = false;
              jp.flashcardSettings.enableNounsIdeasMath = false;
              jp.flashcardSettings.enableNounsIdeasScience = false;
              jp.flashcardSettings.enableNounsIdeasArts = false;
              jp.flashcardSettings.enableNounsIdeasRPG = false;
              jp.flashcardSettings.enableNounsIdeasActivities = false;
            }
          }}>Ideas:</Highlighted
        >
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasLife} label="Life" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasSocialConstructs} label="Social Constructs" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasLeadership} label="Leadership" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasNarration} label="Narration" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasMath} label="Math" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasScience} label="Science" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasArts} label="Arts" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasRPG} label="RPG Terminology" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIdeasActivities} label="Activities" />
      </div>
    </div>
  </div>
  <div class="flex items-center-safe gap-6">
    <Highlighted
      vertical
      onclick={(ev) => {
        if (ev.target !== ev.currentTarget) return;

        if (!jp.flashcardSettings.enableVerbs || !jp.flashcardSettings.enableAuxiliaryVerbs) {
          jp.flashcardSettings.enableVerbs = true;
          jp.flashcardSettings.enableAuxiliaryVerbs = true;
        } else {
          jp.flashcardSettings.enableVerbs = false;
          jp.flashcardSettings.enableAuxiliaryVerbs = false;
        }
      }}
    >
      Verbs:
      <div class="flex items-center-safe gap-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enableTransitiveVerbs} label="Transitive 他動詞" disabled={allVerbsDisabled} />
        <CheckboxInput
          bind:checked={jp.flashcardSettings.enableIntransitiveVerbs}
          label="Intransitive 自動詞"
          disabled={allVerbsDisabled}
        />
      </div>
      <div class="flex items-center-safe gap-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enableGodanVerbs} label="Godan" disabled={allVerbsDisabled} />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableIchidanVerbs} label="Ichidan" disabled={allVerbsDisabled} />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableIrregularVerbs} label="Irregular" disabled={allVerbsDisabled} />
      </div>
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableVerbs} label="Verbs" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableAuxiliaryVerbs} label="Auxiliary Verbs" />
  </div>
  <div class="flex items-center-safe gap-6">
    <Highlighted
      vertical
      onclick={(ev) => {
        if (ev.target !== ev.currentTarget) return;

        if (!jp.flashcardSettings.enableAdjectives) {
          jp.flashcardSettings.enableAdjectives = true;
        } else {
          jp.flashcardSettings.enableAdjectives = false;
        }
      }}
    >
      Adjectives:
      <div class="flex items-center-safe gap-3">
        <CheckboxInput bind:checked={jp.flashcardSettings.enableIAdjectives} label="い-adj." disabled={allAdjsDisabled} />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableNaAdjectives} label="な-adj." disabled={allAdjsDisabled} />
      </div>
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableAdjectives} label="(all)" />
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
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalChronological} label="Chronological" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalLocational} label="Locational" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalLogical} label="Logical" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalEnumerative} label="Enumerative" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalDegree} label="Comparative" />
        <CheckboxInput bind:checked={jp.flashcardSettings.enableFunctionalManner} label="Manner" />
      </div>
    </div>
  </div>

  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableExpressionsSoftening ||
          !jp.flashcardSettings.enableExpressionsEmphasis ||
          !jp.flashcardSettings.enableExpressionsAgreeing ||
          !jp.flashcardSettings.enableExpressionsRequests ||
          !jp.flashcardSettings.enableExpressionsSurprised ||
          !jp.flashcardSettings.enableExpressionsGreetingsAndClosings ||
          !jp.flashcardSettings.enableExpressionsMisc
        ) {
          jp.flashcardSettings.enableExpressionsSoftening = true;
          jp.flashcardSettings.enableExpressionsEmphasis = true;
          jp.flashcardSettings.enableExpressionsAgreeing = true;
          jp.flashcardSettings.enableExpressionsRequests = true;
          jp.flashcardSettings.enableExpressionsSurprised = true;
          jp.flashcardSettings.enableExpressionsGreetingsAndClosings = true;
          jp.flashcardSettings.enableExpressionsMisc = true;
        } else {
          jp.flashcardSettings.enableExpressionsSoftening = false;
          jp.flashcardSettings.enableExpressionsEmphasis = false;
          jp.flashcardSettings.enableExpressionsAgreeing = false;
          jp.flashcardSettings.enableExpressionsRequests = false;
          jp.flashcardSettings.enableExpressionsSurprised = false;
          jp.flashcardSettings.enableExpressionsGreetingsAndClosings = false;
          jp.flashcardSettings.enableExpressionsMisc = false;
        }
      }}
    >
      Expressions:
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsSoftening} label="Softening" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsEmphasis} label="Emphasis" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsAgreeing} label="Agreeing" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsRequests} label="Requests" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsSurprised} label="Surprised" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsGreetingsAndClosings} label="Greetings and Closings" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableExpressionsMisc} label="(misc.)" />
  </div>

  <div class="flex items-center-safe gap-6">
    <Highlighted
      onclick={() => {
        if (!jp.flashcardSettings.enableAdpositions) {
          jp.flashcardSettings.enableAdpositions = true;
        } else {
          jp.flashcardSettings.enableAdpositions = false;
        }
      }}
    >
      Adpositions:
    </Highlighted>

    <CheckboxInput bind:checked={jp.flashcardSettings.enableAdpositions} label="(all)" />
  </div>

  <div class="flex items-start gap-6">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableRulesConjugationsStemForm ||
          !jp.flashcardSettings.enableRulesConjugationsNaiForm ||
          !jp.flashcardSettings.enableRulesConjugationsPassiveForm ||
          !jp.flashcardSettings.enableRulesConjugationsCausativeForm ||
          !jp.flashcardSettings.enableRulesConjugationsImperativeForm ||
          !jp.flashcardSettings.enableRulesConjugationsConditionalForm ||
          !jp.flashcardSettings.enableRulesConjugationsPotentialForm ||
          !jp.flashcardSettings.enableRulesConjugationsTaForm ||
          !jp.flashcardSettings.enableRulesConjugationsTeForm ||
          !jp.flashcardSettings.enableRulesConjugationsVolitionalForm ||
          !jp.flashcardSettings.enableRulesConjugationsMisc
        ) {
          jp.flashcardSettings.enableRulesConjugationsStemForm = true;
          jp.flashcardSettings.enableRulesConjugationsNaiForm = true;
          jp.flashcardSettings.enableRulesConjugationsPassiveForm = true;
          jp.flashcardSettings.enableRulesConjugationsCausativeForm = true;
          jp.flashcardSettings.enableRulesConjugationsImperativeForm = true;
          jp.flashcardSettings.enableRulesConjugationsConditionalForm = true;
          jp.flashcardSettings.enableRulesConjugationsPotentialForm = true;
          jp.flashcardSettings.enableRulesConjugationsTaForm = true;
          jp.flashcardSettings.enableRulesConjugationsTeForm = true;
          jp.flashcardSettings.enableRulesConjugationsVolitionalForm = true;
          jp.flashcardSettings.enableRulesConjugationsMisc = true;
        } else {
          jp.flashcardSettings.enableRulesConjugationsStemForm = false;
          jp.flashcardSettings.enableRulesConjugationsNaiForm = false;
          jp.flashcardSettings.enableRulesConjugationsPassiveForm = false;
          jp.flashcardSettings.enableRulesConjugationsCausativeForm = false;
          jp.flashcardSettings.enableRulesConjugationsImperativeForm = false;
          jp.flashcardSettings.enableRulesConjugationsConditionalForm = false;
          jp.flashcardSettings.enableRulesConjugationsPotentialForm = false;
          jp.flashcardSettings.enableRulesConjugationsTaForm = false;
          jp.flashcardSettings.enableRulesConjugationsTeForm = false;
          jp.flashcardSettings.enableRulesConjugationsVolitionalForm = false;
          jp.flashcardSettings.enableRulesConjugationsMisc = false;
        }
      }}
    >
      Grammar Rules:
    </Highlighted>

    <div class="flex flex-col gap-y-1.5">
      <div class="flex items-start gap-3">
        <Highlighted
          onclick={() => {
            if (
              !jp.flashcardSettings.enableRulesConjugationsStemForm ||
              !jp.flashcardSettings.enableRulesConjugationsNaiForm ||
              !jp.flashcardSettings.enableRulesConjugationsPassiveForm ||
              !jp.flashcardSettings.enableRulesConjugationsCausativeForm ||
              !jp.flashcardSettings.enableRulesConjugationsImperativeForm ||
              !jp.flashcardSettings.enableRulesConjugationsConditionalForm ||
              !jp.flashcardSettings.enableRulesConjugationsPotentialForm ||
              !jp.flashcardSettings.enableRulesConjugationsTaForm ||
              !jp.flashcardSettings.enableRulesConjugationsTeForm ||
              !jp.flashcardSettings.enableRulesConjugationsVolitionalForm
            ) {
              jp.flashcardSettings.enableRulesConjugationsStemForm = true;
              jp.flashcardSettings.enableRulesConjugationsNaiForm = true;
              jp.flashcardSettings.enableRulesConjugationsPassiveForm = true;
              jp.flashcardSettings.enableRulesConjugationsCausativeForm = true;
              jp.flashcardSettings.enableRulesConjugationsImperativeForm = true;
              jp.flashcardSettings.enableRulesConjugationsConditionalForm = true;
              jp.flashcardSettings.enableRulesConjugationsPotentialForm = true;
              jp.flashcardSettings.enableRulesConjugationsTaForm = true;
              jp.flashcardSettings.enableRulesConjugationsTeForm = true;
              jp.flashcardSettings.enableRulesConjugationsVolitionalForm = true;
            } else {
              jp.flashcardSettings.enableRulesConjugationsStemForm = false;
              jp.flashcardSettings.enableRulesConjugationsNaiForm = false;
              jp.flashcardSettings.enableRulesConjugationsPassiveForm = false;
              jp.flashcardSettings.enableRulesConjugationsCausativeForm = false;
              jp.flashcardSettings.enableRulesConjugationsImperativeForm = false;
              jp.flashcardSettings.enableRulesConjugationsConditionalForm = false;
              jp.flashcardSettings.enableRulesConjugationsPotentialForm = false;
              jp.flashcardSettings.enableRulesConjugationsTaForm = false;
              jp.flashcardSettings.enableRulesConjugationsTeForm = false;
              jp.flashcardSettings.enableRulesConjugationsVolitionalForm = false;
            }
          }}
        >
          Verb Conjugations:
        </Highlighted>

        <div class="flex flex-col gap-y-1.5">
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsStemForm} label="Stem" />
          </div>
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsNaiForm} label="ない" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsPassiveForm} label="Passive" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsCausativeForm} label="Causative" />
          </div>
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsImperativeForm} label="Imperative" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsConditionalForm} label="Conditional" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsPotentialForm} label="Potential" />
          </div>
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsTaForm} label="た" />
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsTeForm} label="て" />
          </div>
          <div class="flex flex-wrap items-center-safe gap-x-3">
            <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsVolitionalForm} label="Volitional" />
          </div>
        </div>
      </div>

      <CheckboxInput bind:checked={jp.flashcardSettings.enableRulesConjugationsMisc} label="(misc.)" />
    </div>
  </div>
</div>
