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
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import ReferencesList from "@/components/svelte/ReferencesList.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import SettingsVSplit from "@/components/svelte/SettingsVSplit.svelte";
  import WithTooltip from "@/components/svelte/WithTooltip.svelte";
  import { initSettings, toggleSettings, useSyncSettings } from "@/lib/settings.svelte.ts";

  useSyncSettings(letterSettings);
</script>

<SettingsVSplit>
  {#snippet lhs()}
    <SettingsRow matchHighlightedHeight>
      <WithTooltip>
        <div>Select subsets:</div>

        {#snippet customTooltip()}
          <ReferencesList
            references={{
              "Hangul - Letters": "https://en.wikipedia.org/wiki/Hangul#Letters",
              Dubeolsik: "https://en.wikipedia.org/wiki/Keyboard_layout#Dubeolsik",
            }}
          />
        {/snippet}
      </WithTooltip>
    </SettingsRow>
  {/snippet}

  {#snippet rhs()}
    <SettingsRows>
      <SettingsVSplit>
        {#snippet lhs()}
          <SettingsRow>
            <Highlighted onclick={() => toggleSettings(letterSettings.enableRows.consonants)}>
              consonants:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.plain.value}
              label="plain (ㄱ ㄷ ㅂ ㅅ ㅈ)"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.tense.value}
              label="tense (ㄲ ㄸ ㅃ ㅆ ㅉ)"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.aspirated.value}
              label="aspirated (ㅋ ㅌ ㅍ ㅊ ㅎ)"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.miscellaneous.value}
              label="miscellaneous (ㄴ ㅁ ㄹ ㅇ)"
            />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>

      <SettingsVSplit>
        {#snippet lhs()}
          <SettingsRow>
            <Highlighted onclick={() => toggleSettings(letterSettings.enableRows.vowels)}>
              vowels:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput
              bind:checked={letterSettings.enableRows.vowels.basic.value}
              label="basic (ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ)"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.vowels.complex.value}
              label="complex (ㅐ ㅒ ㅔ ㅖ ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ)"
            />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>
    </SettingsRows>
  {/snippet}
</SettingsVSplit>
