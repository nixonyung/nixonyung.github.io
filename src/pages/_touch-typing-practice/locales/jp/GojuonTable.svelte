<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import ReferencesList from "@/components/ReferencesList.svelte";
  import { useSyncSettings } from "../../../../lib/settings.svelte";
  import GojuonRow from "./GojuonRow.svelte";
  import { jp } from "./jp.svelte";

  useSyncSettings(jp.GOJUON_SETTINGS_SCHEMA, jp.gojuonSettings);

  let isMousedown = $state(false);
  let isSelectingRowA = $state(jp.gojuonSettings.enableRowA);
  let isSelectingRowKa = $state(jp.gojuonSettings.enableRowKa);
  let isSelectingRowSa = $state(jp.gojuonSettings.enableRowSa);
  let isSelectingRowTa = $state(jp.gojuonSettings.enableRowTa);
  let isSelectingRowNa = $state(jp.gojuonSettings.enableRowNa);
  let isSelectingRowHa = $state(jp.gojuonSettings.enableRowHa);
  let isSelectingRowMa = $state(jp.gojuonSettings.enableRowMa);
  let isSelectingRowYa = $state(jp.gojuonSettings.enableRowYa);
  let isSelectingRowRa = $state(jp.gojuonSettings.enableRowRa);
  let isSelectingRowWa = $state(jp.gojuonSettings.enableRowWa);
  let isSelectingRowN = $state(jp.gojuonSettings.enableRowN);
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
      jp.gojuonSettings.enableRowA = isSelectingRowA;
      jp.gojuonSettings.enableRowKa = isSelectingRowKa;
      jp.gojuonSettings.enableRowSa = isSelectingRowSa;
      jp.gojuonSettings.enableRowTa = isSelectingRowTa;
      jp.gojuonSettings.enableRowNa = isSelectingRowNa;
      jp.gojuonSettings.enableRowHa = isSelectingRowHa;
      jp.gojuonSettings.enableRowMa = isSelectingRowMa;
      jp.gojuonSettings.enableRowYa = isSelectingRowYa;
      jp.gojuonSettings.enableRowRa = isSelectingRowRa;
      jp.gojuonSettings.enableRowWa = isSelectingRowWa;
      jp.gojuonSettings.enableRowN = isSelectingRowN;
    }
  });
</script>

<svelte:window onmouseup={() => (isMousedown = false)} />

<ReferencesList
  references={{
    平文式羅馬字: "https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表",
  }}
/>

<!-- settings -->
<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-1.5">
    <div class="flex items-center-safe gap-3">
      <CheckboxInput
        bind:checked={jp.gojuonSettings.enableHiragana}
        label="Enable Hiragana 平假名"
      />
      <CheckboxInput
        bind:checked={jp.gojuonSettings.enableKatakana}
        label="Enable Katakana 片假名"
      />
    </div>
    <div class="flex items-center-safe gap-3">
      <CheckboxInput
        bind:checked={jp.gojuonSettings.enableDiacritics}
        label="Enable Dakuten 濁音 and Handakuten 半濁音"
      />
      <CheckboxInput bind:checked={jp.gojuonSettings.enableYoon} label="Enable Yoon 拗音" />
    </div>
    <div class="flex items-center-safe gap-3">
      <CheckboxInput
        bind:checked={jp.gojuonSettings.showOrigins}
        label="Show Gojuon 五十音 Origins"
      />
    </div>
  </div>

  <!-- (ref.) [平假名](https://www.wikiwand.com/zh-hk/articles/平假名) -->
  <!-- (ref.) [片假名](https://www.wikiwand.com/zh-hk/articles/片假名) -->
  <div class="flex">
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowN}
      bind:isMousedown
      bind:isSelected={isSelectingRowN}
      label="n"
      gojuons={[
        { hiragana: "ん", hiraganaOrigin: "无", katakana: "ン", katakanaOrigin: "尓" },
        null,
        null,
        null,
        null,
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowWa}
      bind:isMousedown
      bind:isSelected={isSelectingRowWa}
      label="w"
      gojuons={[
        { hiragana: "わ", hiraganaOrigin: "和", katakana: "ワ", katakanaOrigin: "和" },
        null,
        null,
        null,
        { hiragana: "を", hiraganaOrigin: "遠", katakana: "ヲ", katakanaOrigin: "乎" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowRa}
      bind:isMousedown
      bind:isSelected={isSelectingRowRa}
      label="r"
      gojuons={[
        { hiragana: "ら", hiraganaOrigin: "良", katakana: "ラ", katakanaOrigin: "良" },
        { hiragana: "り", hiraganaOrigin: "利", katakana: "リ", katakanaOrigin: "利" },
        { hiragana: "る", hiraganaOrigin: "留", katakana: "ル", katakanaOrigin: "流" },
        { hiragana: "れ", hiraganaOrigin: "礼", katakana: "レ", katakanaOrigin: "礼" },
        { hiragana: "ろ", hiraganaOrigin: "呂", katakana: "ロ", katakanaOrigin: "呂" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowYa}
      bind:isMousedown
      bind:isSelected={isSelectingRowYa}
      label="y"
      gojuons={[
        { hiragana: "や", hiraganaOrigin: "也", katakana: "ヤ", katakanaOrigin: "也" },
        null,
        { hiragana: "ゆ", hiraganaOrigin: "由", katakana: "ユ", katakanaOrigin: "由" },
        null,
        { hiragana: "よ", hiraganaOrigin: "与", katakana: "ヨ", katakanaOrigin: "与" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowMa}
      bind:isMousedown
      bind:isSelected={isSelectingRowMa}
      label="m"
      gojuons={[
        { hiragana: "ま", hiraganaOrigin: "末", katakana: "マ", katakanaOrigin: "末" },
        { hiragana: "み", hiraganaOrigin: "美", katakana: "ミ", katakanaOrigin: "三" },
        { hiragana: "む", hiraganaOrigin: "武", katakana: "ム", katakanaOrigin: "牟" },
        { hiragana: "め", hiraganaOrigin: "女", katakana: "メ", katakanaOrigin: "女" },
        { hiragana: "も", hiraganaOrigin: "毛", katakana: "モ", katakanaOrigin: "毛" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowHa}
      bind:isMousedown
      bind:isSelected={isSelectingRowHa}
      label={jp.gojuonSettings.enableDiacritics ? "h/b/p" : "h"}
      gojuons={[
        { hiragana: "は", hiraganaOrigin: "波", katakana: "ハ", katakanaOrigin: "八" },
        { hiragana: "ひ", hiraganaOrigin: "比", katakana: "ヒ", katakanaOrigin: "比" },
        { hiragana: "ふ", hiraganaOrigin: "不", katakana: "フ", katakanaOrigin: "不" },
        { hiragana: "へ", hiraganaOrigin: "部", katakana: "ヘ", katakanaOrigin: "部" },
        { hiragana: "ほ", hiraganaOrigin: "保", katakana: "ホ", katakanaOrigin: "保" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowNa}
      bind:isMousedown
      bind:isSelected={isSelectingRowNa}
      label="n"
      gojuons={[
        { hiragana: "な", hiraganaOrigin: "奈", katakana: "ナ", katakanaOrigin: "奈" },
        { hiragana: "に", hiraganaOrigin: "仁", katakana: "ニ", katakanaOrigin: "仁" },
        { hiragana: "ぬ", hiraganaOrigin: "奴", katakana: "ヌ", katakanaOrigin: "奴" },
        { hiragana: "ね", hiraganaOrigin: "祢", katakana: "ネ", katakanaOrigin: "祢" },
        { hiragana: "の", hiraganaOrigin: "乃", katakana: "ノ", katakanaOrigin: "乃" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowTa}
      bind:isMousedown
      bind:isSelected={isSelectingRowTa}
      label={jp.gojuonSettings.enableDiacritics ? "t/d" : "t"}
      gojuons={[
        { hiragana: "た", hiraganaOrigin: "太", katakana: "タ", katakanaOrigin: "多" },
        { hiragana: "ち", hiraganaOrigin: "知", katakana: "チ", katakanaOrigin: "千" },
        { hiragana: "つ", hiraganaOrigin: "川", katakana: "ツ", katakanaOrigin: "川" },
        { hiragana: "て", hiraganaOrigin: "天", katakana: "テ", katakanaOrigin: "天" },
        { hiragana: "と", hiraganaOrigin: "止", katakana: "ト", katakanaOrigin: "止" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowSa}
      bind:isMousedown
      bind:isSelected={isSelectingRowSa}
      label={jp.gojuonSettings.enableDiacritics ? "s/z" : "s"}
      gojuons={[
        { hiragana: "さ", hiraganaOrigin: "左", katakana: "サ", katakanaOrigin: "散" },
        { hiragana: "し", hiraganaOrigin: "之", katakana: "シ", katakanaOrigin: "之" },
        { hiragana: "す", hiraganaOrigin: "寸", katakana: "ス", katakanaOrigin: "須" },
        { hiragana: "せ", hiraganaOrigin: "世", katakana: "セ", katakanaOrigin: "世" },
        { hiragana: "そ", hiraganaOrigin: "曽", katakana: "ソ", katakanaOrigin: "曽" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowKa}
      bind:isMousedown
      bind:isSelected={isSelectingRowKa}
      label={jp.gojuonSettings.enableDiacritics ? "k/g" : "k"}
      gojuons={[
        { hiragana: "か", hiraganaOrigin: "加", katakana: "カ", katakanaOrigin: "加" },
        { hiragana: "き", hiraganaOrigin: "幾", katakana: "キ", katakanaOrigin: "幾" },
        { hiragana: "く", hiraganaOrigin: "久", katakana: "ク", katakanaOrigin: "久" },
        { hiragana: "け", hiraganaOrigin: "計", katakana: "ケ", katakanaOrigin: "介" },
        { hiragana: "こ", hiraganaOrigin: "己", katakana: "コ", katakanaOrigin: "己" },
      ]}
    />
    <GojuonRow
      bind:enabled={jp.gojuonSettings.enableRowA}
      bind:isMousedown
      bind:isSelected={isSelectingRowA}
      label=""
      gojuons={[
        { hiragana: "あ", hiraganaOrigin: "安", katakana: "ア", katakanaOrigin: "阿" },
        { hiragana: "い", hiraganaOrigin: "以", katakana: "イ", katakanaOrigin: "伊" },
        { hiragana: "う", hiraganaOrigin: "宇", katakana: "ウ", katakanaOrigin: "宇" },
        { hiragana: "え", hiraganaOrigin: "衣", katakana: "エ", katakanaOrigin: "江" },
        { hiragana: "お", hiraganaOrigin: "於", katakana: "オ", katakanaOrigin: "於" },
      ]}
    />

    <div class="flex flex-col pl-1">
      <div class="h-6"></div>
      {#each ["a", "i", "u", "e", "o"] as colLabel (colLabel)}
        <span class="h-12 pl-2">{colLabel}</span>
      {/each}
    </div>
  </div>
</div>
