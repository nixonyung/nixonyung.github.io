<script lang="ts" module>
  export interface Gojuon {
    hiragana: string;
    hiraganaOrigin: string;
    katakana: string;
    katakanaOrigin: string;
    romanization: string;
  }

  export const gojuonSettings = $state(
    initSettings({
      enableRows: {
        rowA: { paramKey: "rowA", defaultValue: true },
        rowKa: { paramKey: "rowKa", defaultValue: true },
        rowSa: { paramKey: "rowSa", defaultValue: true },
        rowTa: { paramKey: "rowTa", defaultValue: true },
        rowNa: { paramKey: "rowNa", defaultValue: true },
        rowHa: { paramKey: "rowHa", defaultValue: true },
        rowMa: { paramKey: "rowMa", defaultValue: true },
        rowYa: { paramKey: "rowYa", defaultValue: true },
        rowRa: { paramKey: "rowRa", defaultValue: true },
        rowWa: { paramKey: "rowWa", defaultValue: true },
        rowN: { paramKey: "rowN", defaultValue: true },
      },
      enableSubsets: {
        hiragana: { paramKey: "hiragana", defaultValue: true },
        katakana: { paramKey: "katakana", defaultValue: true },
        diacritics: { paramKey: "diacritics", defaultValue: true },
        yoons: { paramKey: "yoons", defaultValue: true },
      },
      showOrigins: { paramKey: "gojuonOrigins", defaultValue: false },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import ReferencesList from "@/components/svelte/ReferencesList.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import WithTooltip from "@/components/svelte/WithTooltip.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte";
  import GojuonRow from "./GojuonRow.svelte";
  import { gojuons } from "./letters.svelte";

  useSyncSettings(gojuonSettings);

  let isMousedown = $state(false);
  let isSelectingRowA = $state(gojuonSettings.enableRows.rowA.value);
  let isSelectingRowKa = $state(gojuonSettings.enableRows.rowKa.value);
  let isSelectingRowSa = $state(gojuonSettings.enableRows.rowSa.value);
  let isSelectingRowTa = $state(gojuonSettings.enableRows.rowTa.value);
  let isSelectingRowNa = $state(gojuonSettings.enableRows.rowNa.value);
  let isSelectingRowHa = $state(gojuonSettings.enableRows.rowHa.value);
  let isSelectingRowMa = $state(gojuonSettings.enableRows.rowMa.value);
  let isSelectingRowYa = $state(gojuonSettings.enableRows.rowYa.value);
  let isSelectingRowRa = $state(gojuonSettings.enableRows.rowRa.value);
  let isSelectingRowWa = $state(gojuonSettings.enableRows.rowWa.value);
  let isSelectingRowN = $state(gojuonSettings.enableRows.rowN.value);

  $effect.pre(() => {
    if (isMousedown) {
      isSelectingRowA = false;
      isSelectingRowKa = false;
      isSelectingRowSa = false;
      isSelectingRowTa = false;
      isSelectingRowNa = false;
      isSelectingRowHa = false;
      isSelectingRowMa = false;
      isSelectingRowYa = false;
      isSelectingRowRa = false;
      isSelectingRowWa = false;
      isSelectingRowN = false;
    } else {
      gojuonSettings.enableRows.rowA.value = isSelectingRowA;
      gojuonSettings.enableRows.rowKa.value = isSelectingRowKa;
      gojuonSettings.enableRows.rowSa.value = isSelectingRowSa;
      gojuonSettings.enableRows.rowTa.value = isSelectingRowTa;
      gojuonSettings.enableRows.rowNa.value = isSelectingRowNa;
      gojuonSettings.enableRows.rowHa.value = isSelectingRowHa;
      gojuonSettings.enableRows.rowMa.value = isSelectingRowMa;
      gojuonSettings.enableRows.rowYa.value = isSelectingRowYa;
      gojuonSettings.enableRows.rowRa.value = isSelectingRowRa;
      gojuonSettings.enableRows.rowWa.value = isSelectingRowWa;
      gojuonSettings.enableRows.rowN.value = isSelectingRowN;
    }
  });
</script>

<svelte:window onmouseup={() => (isMousedown = false)} />

<WithTooltip>
  <div>Select rows:</div>

  {#snippet customTooltip()}
    <ReferencesList
      references={{
        "平文式羅馬字 - Wikipedia":
          "https://zh.wikipedia.org/zh-hk/%E5%B9%B3%E6%96%87%E5%BC%8F%E7%BD%97%E9%A9%AC%E5%AD%97#%E7%BD%97%E9%A9%AC%E5%AD%97%E8%A1%A8",
        "平假名 - 由來 - Wikipedia":
          "https://zh.wikipedia.org/zh-hk/%E5%B9%B3%E5%81%87%E5%90%8D#%E5%B9%B3%E5%81%87%E5%90%8D%E4%B8%80%E8%A7%88",
        "片假名 - 由來 - Wikipedia":
          "https://zh.wikipedia.org/zh-hk/%E7%89%87%E5%81%87%E5%90%8D#%E7%89%87%E5%81%87%E5%90%8D%E4%B8%80%E8%A7%88",
      }}
    />
  {/snippet}
</WithTooltip>

<div class="mt-4 flex">
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowN.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowN}
    label="n"
    gojuons={gojuons.rowN}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowWa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowWa}
    label="w"
    gojuons={gojuons.rowWa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowRa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowRa}
    label="r"
    gojuons={gojuons.rowRa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowYa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowYa}
    label="y"
    gojuons={gojuons.rowYa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowMa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowMa}
    label="m"
    gojuons={gojuons.rowMa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowHa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowHa}
    label={gojuonSettings.enableSubsets.diacritics ? "h/b/p" : "h"}
    gojuons={gojuons.rowHa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowNa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowNa}
    label="n"
    gojuons={gojuons.rowNa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowTa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowTa}
    label={gojuonSettings.enableSubsets.diacritics ? "t/d" : "t"}
    gojuons={gojuons.rowTa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowSa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowSa}
    label={gojuonSettings.enableSubsets.diacritics ? "s/z" : "s"}
    gojuons={gojuons.rowSa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowKa.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowKa}
    label={gojuonSettings.enableSubsets.diacritics ? "k/g" : "k"}
    gojuons={gojuons.rowKa}
  />
  <GojuonRow
    bind:enabled={gojuonSettings.enableRows.rowA.value}
    bind:isMousedown
    bind:isSelected={isSelectingRowA}
    label=""
    gojuons={gojuons.rowA}
  />

  <div class="flex flex-col pl-1">
    <div class="h-6"></div>
    {#each ["a", "i", "u", "e", "o"] as colLabel (colLabel)}
      <span class="h-12 pl-2">{colLabel}</span>
    {/each}
  </div>
</div>

<SettingsRows class="mt-8">
  <SettingsRow>
    <CheckboxInput
      bind:checked={gojuonSettings.enableSubsets.hiragana.value}
      label="enable Hiragana 平假名"
    />
    <CheckboxInput
      bind:checked={gojuonSettings.enableSubsets.katakana.value}
      label="enable Katakana 片假名"
    />
  </SettingsRow>
  <SettingsRow>
    <CheckboxInput
      bind:checked={gojuonSettings.enableSubsets.diacritics.value}
      label="enable Dakuten 濁音 and Handakuten 半濁音"
    />
    <CheckboxInput
      bind:checked={gojuonSettings.enableSubsets.yoons.value}
      label="enable Yoon 拗音"
    />
  </SettingsRow>
  <SettingsRow>
    <CheckboxInput
      bind:checked={gojuonSettings.showOrigins.value}
      label="show Gojuon 五十音 origins"
    />
  </SettingsRow>
</SettingsRows>
