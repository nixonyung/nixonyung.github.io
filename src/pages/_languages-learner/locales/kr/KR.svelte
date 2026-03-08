<script lang="ts" module>
  export const letterSettings = $state(
    initSettings({
      enableRows: {
        consonants: {
          plain: { paramKey: "plainCons", defaultValue: true },
          tense: { paramKey: "tenseCons", defaultValue: true },
          aspirated: { paramKey: "aspiratedCons", defaultValue: true },
          miscellaneous: { paramKey: "miscCons", defaultValue: true },
        },
        vowels: {
          basic: { paramKey: "basicVowels", defaultValue: true },
          complex: { paramKey: "complexVowels", defaultValue: true },
        },
      },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import ReferencesList from "@/components/ReferencesList.svelte";
  import { initSettings } from "@/lib/settings.svelte.ts";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { keymap } from "./keymap.svelte.ts";
  import { getLetters } from "./letters.svelte.ts";

  const letters = $derived(getLetters());
</script>

<div>
  <ReferencesList
    references={{
      "Hangul - Letters": "https://en.wikipedia.org/wiki/Hangul#Letters",
      Dubeolsik: "https://en.wikipedia.org/wiki/Keyboard_layout#Dubeolsik",
    }}
  />

  <div class="mt-3 mb-1.5 flex flex-col gap-1.5">
    <div class="flex gap-4.5">
      <div>Select consonants:</div>

      <CheckboxInput
        bind:checked={letterSettings.enableRows.consonants.plain.value}
        label="plain"
      />
      <CheckboxInput
        bind:checked={letterSettings.enableRows.consonants.tense.value}
        label="tense"
      />
      <CheckboxInput
        bind:checked={letterSettings.enableRows.consonants.aspirated.value}
        label="aspirated"
      />
      <CheckboxInput
        bind:checked={letterSettings.enableRows.consonants.miscellaneous.value}
        label="miscellaneous"
      />
    </div>

    <div class="flex gap-4.5">
      <span>Select vowels:</span>

      <CheckboxInput bind:checked={letterSettings.enableRows.vowels.basic.value} label="basic" />
      <CheckboxInput
        bind:checked={letterSettings.enableRows.vowels.complex.value}
        label="complex"
      />
    </div>
  </div>

  <TypingQuestions {letters} {keymap} />
</div>
