<script lang="ts" module>
  export const letterSettings = $state(
    initSettings({
      enableSubsets: {
        lowercase: {
          qwer: { paramKey: "qwer", defaultValue: true },
          asdf: { paramKey: "asdf", defaultValue: true },
          zxcv: { paramKey: "zxcv", defaultValue: true },
        },
        uppercase: {
          QWER: { paramKey: "QWER", defaultValue: true },
          ASDF: { paramKey: "ASDF", defaultValue: true },
          ZXCV: { paramKey: "ZXCV", defaultValue: true },
        },
        symbols: {
          "1234": { paramKey: "1234", defaultValue: false },
          shift1234: { paramKey: "shift1234", defaultValue: false },
          miscSymbols: { paramKey: "miscSymbols", defaultValue: false },
          shiftMiscSymbols: { paramKey: "shiftMiscSymbols", defaultValue: false },
        },
      },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import Highlighted from "@/components/svelte/Highlighted.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import SettingsVSplit from "@/components/svelte/SettingsVSplit.svelte";
  import { initSettings, toggleSettings, useSyncSettings } from "@/lib/settings.svelte";

  useSyncSettings(letterSettings);
</script>

<SettingsVSplit>
  {#snippet lhs()}
    <SettingsRow matchHighlightedHeight>Select subsets:</SettingsRow>
  {/snippet}

  {#snippet rhs()}
    <SettingsRows>
      <SettingsVSplit>
        {#snippet lhs()}
          <Highlighted onclick={() => toggleSettings(letterSettings.enableSubsets.lowercase)}>
            lowercase:
          </Highlighted>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.lowercase.qwer.value}
              label="qwer..."
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.lowercase.asdf.value}
              label="asdf..."
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.lowercase.zxcv.value}
              label="zxcv..."
            />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>

      <SettingsVSplit>
        {#snippet lhs()}
          <SettingsRow matchHighlightedHeight>
            <Highlighted onclick={() => toggleSettings(letterSettings.enableSubsets.uppercase)}>
              uppercase:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.uppercase.QWER.value}
              label="QWER..."
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.uppercase.ASDF.value}
              label="ASDF..."
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.uppercase.ZXCV.value}
              label="ZXCV..."
            />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>

      <SettingsVSplit>
        {#snippet lhs()}
          <SettingsRow matchHighlightedHeight>
            <Highlighted onclick={() => toggleSettings(letterSettings.enableSubsets.symbols)}>
              symbols:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.symbols["1234"].value}
              label="1234..."
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.symbols.shift1234.value}
              label="!@#$..."
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.symbols.miscSymbols.value}
              label="misc. symbols"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableSubsets.symbols.shiftMiscSymbols.value}
              label="(+shift) misc. symbols"
            />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>
    </SettingsRows>
  {/snippet}
</SettingsVSplit>
