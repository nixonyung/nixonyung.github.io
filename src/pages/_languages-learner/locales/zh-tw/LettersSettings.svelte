<script lang="ts" module>
  export interface Letter {
    letter: string;
    pingyin?: string;
    input: string;
  }

  export const letterSettings = $state(
    initSettings({
      enableRows: {
        consonants: {
          bpmf: { paramKey: "consBPMF", defaultValue: true },
          dtnl: { paramKey: "consDTNL", defaultValue: true },
          gkh: { paramKey: "consGKH", defaultValue: true },
          jqx: { paramKey: "consJQX", defaultValue: true },
          zhChShR: { paramKey: "consZhChShR", defaultValue: true },
          zcs: { paramKey: "consZCS", defaultValue: true },
        },
        vowels: {
          aOEE: { paramKey: "vowelsAOEE", defaultValue: true },
          iUYu: { paramKey: "vowelsIUYu", defaultValue: true },
          aiEiAoOu: { paramKey: "vowelsAiEiAoOu", defaultValue: true },
          anEnAngEng: { paramKey: "vowelsAnEnAngEng", defaultValue: true },
          er: { paramKey: "vowelsEr", defaultValue: true },
          compound: { paramKey: "vowelsCompound", defaultValue: true },
        },
        voices: { paramKey: "voices", defaultValue: true },
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
              注音符號系統:
                "https://zh.wikipedia.org/wiki/%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F#%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F%E7%B3%BB%E7%B5%B1",
              大千注音鍵盤排列:
                "https://zh.wikipedia.org/wiki/%E6%B3%A8%E9%9F%B3%E8%BC%B8%E5%85%A5%E6%B3%95#%E5%A4%A7%E5%8D%83%E6%B3%A8%E9%9F%B3%E9%8D%B5%E7%9B%A4%E6%8E%92%E5%88%97",
              拼音查詢: "https://crptransfer.moe.gov.tw/",
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
              consonants 聲母:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.bpmf.value}
              label="b p m f"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.dtnl.value}
              label="d t n l"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.gkh.value}
              label="g k h"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.jqx.value}
              label="j q x"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.zhChShR.value}
              label="zh ch sh r"
            />
            <CheckboxInput
              bind:checked={letterSettings.enableRows.consonants.zcs.value}
              label="z c s"
            />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>

      <SettingsVSplit>
        {#snippet lhs()}
          <SettingsRow>
            <Highlighted onclick={() => toggleSettings(letterSettings.enableRows.vowels)}>
              vowels 韻母:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRows>
            <SettingsRow matchHighlightedHeight>
              <CheckboxInput
                bind:checked={letterSettings.enableRows.vowels.iUYu.value}
                label="i u yu"
              />
              <CheckboxInput
                bind:checked={letterSettings.enableRows.vowels.aOEE.value}
                label="a o e ê"
              />
              <CheckboxInput
                bind:checked={letterSettings.enableRows.vowels.aiEiAoOu.value}
                label="ai ei ao ou"
              />
              <CheckboxInput
                bind:checked={letterSettings.enableRows.vowels.anEnAngEng.value}
                label="an en ang eng"
              />
              <CheckboxInput bind:checked={letterSettings.enableRows.vowels.er.value} label="er" />
            </SettingsRow>
            <SettingsRow>
              <CheckboxInput
                bind:checked={letterSettings.enableRows.vowels.compound.value}
                label="compound 結合韻"
              />
            </SettingsRow>
          </SettingsRows>
        {/snippet}
      </SettingsVSplit>

      <SettingsVSplit>
        {#snippet lhs()}
          <SettingsRow>
            <Highlighted onclick={() => toggleSettings(letterSettings.enableRows.voices)}>
              voices 聲調:
            </Highlighted>
          </SettingsRow>
        {/snippet}

        {#snippet rhs()}
          <SettingsRow matchHighlightedHeight>
            <CheckboxInput bind:checked={letterSettings.enableRows.voices.value} label="(all)" />
          </SettingsRow>
        {/snippet}
      </SettingsVSplit>
    </SettingsRows>
  {/snippet}
</SettingsVSplit>
