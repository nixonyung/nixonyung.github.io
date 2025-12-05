<script lang="ts" generics="TWord extends Word">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import { useSyncSettings } from "../../app.svelte";
  import type { Word } from "../../types";
  import { jp } from "./jp.svelte";

  useSyncSettings(jp.FLASHCARD_SETTINGS_SCHEMA, jp.flashcardSettings);
</script>

<div class="flex flex-col flex-wrap gap-2">
  <div class="flex items-center-safe gap-9">
    <Highlighted
      onclick={() => {
        if (!jp.flashcardSettings.enablePronouns) {
          jp.flashcardSettings.enablePronouns = true;
        } else {
          jp.flashcardSettings.enablePronouns = false;
        }
      }}
    >
      pronouns:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enablePronouns} label="all" />
  </div>
  <div class="flex items-center-safe gap-9">
    <Highlighted
      onclick={() => {
        if (
          !jp.flashcardSettings.enableNounsPeopleGeneric ||
          !jp.flashcardSettings.enableNounsPeopleFamily ||
          !jp.flashcardSettings.enableNounsPeopleFellows ||
          !jp.flashcardSettings.enableNounsIntangible
        ) {
          jp.flashcardSettings.enableNounsPeopleGeneric = true;
          jp.flashcardSettings.enableNounsPeopleFamily = true;
          jp.flashcardSettings.enableNounsPeopleFellows = true;
          jp.flashcardSettings.enableNounsIntangible = true;
        } else {
          jp.flashcardSettings.enableNounsPeopleGeneric = false;
          jp.flashcardSettings.enableNounsPeopleFamily = false;
          jp.flashcardSettings.enableNounsPeopleFellows = false;
          jp.flashcardSettings.enableNounsIntangible = false;
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
    <CheckboxInput bind:checked={jp.flashcardSettings.enableNounsIntangible} label="intangible" />
  </div>
  <div class="flex items-center-safe gap-9">
    <Highlighted
      vertical
      onclick={(ev) => {
        if (ev.target !== ev.currentTarget) return;

        if (!jp.flashcardSettings.enableVerbsActions) {
          jp.flashcardSettings.enableVerbsActions = true;
        } else {
          jp.flashcardSettings.enableVerbsActions = false;
        }
      }}
    >
      <span>verbs:</span>
      <CheckboxInput bind:checked={jp.flashcardSettings.enableGodanVerbs} label="Godan verbs" />
      <CheckboxInput bind:checked={jp.flashcardSettings.enableIchidanVerbs} label="Ichidan verbs" />
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableVerbsActions} label="actions" />
  </div>
  <div class="flex items-center-safe gap-9">
    <Highlighted
      onclick={() => {
        if (!jp.flashcardSettings.enableInterjections) {
          jp.flashcardSettings.enableInterjections = true;
        } else {
          jp.flashcardSettings.enableInterjections = false;
        }
      }}
    >
      interjections:
    </Highlighted>
    <CheckboxInput bind:checked={jp.flashcardSettings.enableInterjections} label="interjections" />
  </div>
</div>
