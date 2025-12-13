<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import { useSyncSettings } from "../../../../lib/settings.svelte";
  import { jp } from "./jp.svelte";

  useSyncSettings(jp.FLASHCARD_SETTINGS_SCHEMA, jp.flashcardSettings);
</script>

<div class="flex flex-col flex-wrap gap-2">
  <div class="flex items-center-safe gap-9">
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
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePronounsGeneral} label="generic" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enablePronounsQuestionWords}
      label="question words"
    />
  </div>
  <div class="flex items-center-safe gap-9">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableNounsPeopleGeneric ||
          !jp.flashcardSettings.enableNounsPeopleFamily ||
          !jp.flashcardSettings.enableNounsPeopleFellows ||
          !jp.flashcardSettings.enableNounsNavigation ||
          !jp.flashcardSettings.enableNounsPlacesGeneric ||
          !jp.flashcardSettings.enableNounsTime ||
          !jp.flashcardSettings.enableNounsIntangible ||
          !jp.flashcardSettings.enableNounsMiscellaneous
        ) {
          jp.flashcardSettings.enableNounsPeopleGeneric = true;
          jp.flashcardSettings.enableNounsPeopleFamily = true;
          jp.flashcardSettings.enableNounsPeopleFellows = true;
          jp.flashcardSettings.enableNounsNavigation = true;
          jp.flashcardSettings.enableNounsPlacesGeneric = true;
          jp.flashcardSettings.enableNounsTime = true;
          jp.flashcardSettings.enableNounsIntangible = true;
          jp.flashcardSettings.enableNounsMiscellaneous = true;
        } else {
          jp.flashcardSettings.enableNounsPeopleGeneric = false;
          jp.flashcardSettings.enableNounsPeopleFamily = false;
          jp.flashcardSettings.enableNounsPeopleFellows = false;
          jp.flashcardSettings.enableNounsNavigation = false;
          jp.flashcardSettings.enableNounsPlacesGeneric = false;
          jp.flashcardSettings.enableNounsTime = false;
          jp.flashcardSettings.enableNounsIntangible = false;
          jp.flashcardSettings.enableNounsMiscellaneous = false;
        }
      }}
    >
      nouns:
    </Highlighted>
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableNounsPeopleGeneric}
      label="generic people"
    />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleFamily} label="family" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsPeopleFellows} label="fellows" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsNavigation} label="navigation" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableNounsPlacesGeneric}
      label="generic places"
    />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsTime} label="time" />
    <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIntangible} label="intangible" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableNounsMiscellaneous}
      label="miscellaneous"
    />
  </div>
  <div class="flex items-center-safe gap-9">
    <Highlighted
      vertical
      onclick={(ev) => {
        if (ev.target !== ev.currentTarget) return;

        if (
          !jp.flashcardSettings.enableVerbsActions ||
          !jp.flashcardSettings.enableVerbsIntransitive
        ) {
          jp.flashcardSettings.enableVerbsActions = true;
          jp.flashcardSettings.enableVerbsIntransitive = true;
        } else {
          jp.flashcardSettings.enableVerbsActions = false;
          jp.flashcardSettings.enableVerbsIntransitive = false;
        }
      }}
    >
      <span>verbs:</span>
      <CheckboxInput bind:checked={jp.flashcardSettings.enableGodanVerbs} label="Godan verbs" />
      <CheckboxInput bind:checked={jp.flashcardSettings.enableIchidanVerbs} label="Ichidan verbs" />
      <CheckboxInput
        bind:checked={jp.flashcardSettings.enableIrregularVerbs}
        label="Irregular verbs"
      />
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableVerbsActions} label="actions" />
    <CheckboxInput
      bind:checked={jp.flashcardSettings.enableVerbsIntransitive}
      label="intransitive"
    />
  </div>
  <div class="flex items-center-safe gap-9">
    <Highlighted
      onclick={() => {
        if (!jp.flashcardSettings.enableAdjectives) {
          jp.flashcardSettings.enableAdjectives = true;
        } else {
          jp.flashcardSettings.enableAdjectives = false;
        }
      }}
    >
      adjectives:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableAdjectives} label="adjectives" />
  </div>
  <div class="flex items-center-safe gap-9">
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
  <div class="flex items-center-safe gap-9">
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
      phrases:
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
  <div class="flex items-center-safe gap-9">
    <Highlighted
      onclick={() => {
        if (!jp.flashcardSettings.enableSentenceStructures) {
          jp.flashcardSettings.enableSentenceStructures = true;
        } else {
          jp.flashcardSettings.enableSentenceStructures = false;
        }
      }}
    >
      sentence structures:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableSentenceStructures} label="all" />
  </div>
</div>
