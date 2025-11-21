<script lang="ts">
  import { untrack } from "svelte";
  import CheckboxInput from "../../CheckboxInput.svelte";
  import { globals } from "../../globals.svelte";
  import GojuonHeader from "./GojuonHeader.svelte";
  import GojuonRow from "./GojuonRow.svelte";
  import { dictionary, keymap } from "./locale";

  let rowA: GojuonHeader | undefined = $state();
  let rowKa: GojuonHeader | undefined = $state();
  let rowSa: GojuonHeader | undefined = $state();
  let rowTa: GojuonHeader | undefined = $state();
  let rowNa: GojuonHeader | undefined = $state();
  let rowHa: GojuonHeader | undefined = $state();
  let rowMa: GojuonHeader | undefined = $state();
  let rowYa: GojuonHeader | undefined = $state();
  let rowRa: GojuonHeader | undefined = $state();
  let rowWa: GojuonHeader | undefined = $state();
  let rowN: GojuonHeader | undefined = $state();

  let enableHiragana = $state(!globals.searchParams.has("hiragana", "false"));
  let enableKatakana = $state(!globals.searchParams.has("katakana", "false"));
  let enableMarks = $state(!globals.searchParams.has("marks", "false"));
  let enableYoon = $state(!globals.searchParams.has("yoon", "false"));
  let enableRowA = $state(!globals.searchParams.has("rowA", "false"));
  let enableRowKa = $state(!globals.searchParams.has("rowKa", "false"));
  let enableRowSa = $state(!globals.searchParams.has("rowSa", "false"));
  let enableRowTa = $state(!globals.searchParams.has("rowTa", "false"));
  let enableRowNa = $state(!globals.searchParams.has("rowNa", "false"));
  let enableRowHa = $state(!globals.searchParams.has("rowHa", "false"));
  let enableRowMa = $state(!globals.searchParams.has("rowMa", "false"));
  let enableRowYa = $state(!globals.searchParams.has("rowYa", "false"));
  let enableRowRa = $state(!globals.searchParams.has("rowRa", "false"));
  let enableRowWa = $state(!globals.searchParams.has("rowWa", "false"));
  let enableRowN = $state(!globals.searchParams.has("rowN", "false"));
  let showOrigins = $state(globals.searchParams.has("showOrigins", "true"));
  $effect(() => {
    enableHiragana;
    untrack(() => globals.saveSetting("hiragana", enableHiragana, true));
  });
  $effect(() => {
    enableKatakana;
    untrack(() => globals.saveSetting("katakana", enableKatakana, true));
  });
  $effect(() => {
    enableMarks;
    untrack(() => globals.saveSetting("marks", enableMarks, true));
  });
  $effect(() => {
    enableYoon;
    untrack(() => globals.saveSetting("yoon", enableYoon, true));
  });
  $effect(() => {
    enableRowA;
    untrack(() => globals.saveSetting("rowA", enableRowA, true));
  });
  $effect(() => {
    enableRowKa;
    untrack(() => globals.saveSetting("rowKa", enableRowKa, true));
  });
  $effect(() => {
    enableRowSa;
    untrack(() => globals.saveSetting("rowSa", enableRowSa, true));
  });
  $effect(() => {
    enableRowTa;
    untrack(() => globals.saveSetting("rowTa", enableRowTa, true));
  });
  $effect(() => {
    enableRowNa;
    untrack(() => globals.saveSetting("rowNa", enableRowNa, true));
  });
  $effect(() => {
    enableRowHa;
    untrack(() => globals.saveSetting("rowHa", enableRowHa, true));
  });
  $effect(() => {
    enableRowMa;
    untrack(() => globals.saveSetting("rowMa", enableRowMa, true));
  });
  $effect(() => {
    enableRowYa;
    untrack(() => globals.saveSetting("rowYa", enableRowYa, true));
  });
  $effect(() => {
    enableRowRa;
    untrack(() => globals.saveSetting("rowRa", enableRowRa, true));
  });
  $effect(() => {
    enableRowWa;
    untrack(() => globals.saveSetting("rowWa", enableRowWa, true));
  });
  $effect(() => {
    enableRowN;
    untrack(() => globals.saveSetting("rowN", enableRowN, true));
  });
  $effect(() => {
    showOrigins;
    untrack(() => globals.saveSetting("showOrigins", showOrigins, false));
  });

  let isSelecting = $state(false);
  $effect(() => {
    if (isSelecting) {
      enableRowA = false;
      enableRowKa = false;
      enableRowSa = false;
      enableRowTa = false;
      enableRowNa = false;
      enableRowHa = false;
      enableRowMa = false;
      enableRowYa = false;
      enableRowRa = false;
      enableRowWa = false;
      enableRowN = false;
    }
  });

  globals.localeKeymap = keymap;
  $effect(() => {
    globals.localeDictionary = dictionary({
      enableHiragana,
      enableKatakana,
      enableMarks,
      enableYoon,
      enableRowA,
      enableRowKa,
      enableRowSa,
      enableRowTa,
      enableRowNa,
      enableRowHa,
      enableRowMa,
      enableRowYa,
      enableRowRa,
      enableRowWa,
      enableRowN,
    });
  });
</script>

<svelte:window
  onmousemove={(ev) => {
    if (isSelecting) {
      let rect;

      rect = rowA?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowA = true;
        return;
      }
      rect = rowKa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowKa = true;
        return;
      }
      rect = rowSa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowSa = true;
        return;
      }
      rect = rowTa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowTa = true;
        return;
      }
      rect = rowNa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowNa = true;
        return;
      }
      rect = rowHa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowHa = true;
        return;
      }
      rect = rowMa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowMa = true;
        return;
      }
      rect = rowYa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowYa = true;
        return;
      }
      rect = rowRa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowRa = true;
        return;
      }
      rect = rowWa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowWa = true;
        return;
      }
      rect = rowN?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        enableRowN = true;
        return;
      }
    }
  }}
  onmouseup={() => (isSelecting = false)}
/>

<!-- settings -->
<div>
  <div class="flex gap-9">
    <CheckboxInput bind:checked={enableHiragana} label="enable Hiragana 平假名" />
    <CheckboxInput bind:checked={enableKatakana} label="enable Katakana 片假名" />
    <CheckboxInput bind:checked={showOrigins} label="show origins:" />
  </div>
  <div class="flex gap-9">
    <CheckboxInput bind:checked={enableMarks} label="enable Dakuten 濁音 and Handakuten 半濁音" />
    <CheckboxInput bind:checked={enableYoon} label="enable Yoon 拗音" />
  </div>
  <div>
    <a
      href="https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表"
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
    >
      (ref.) 平文式羅馬字
    </a>
  </div>
</div>

<!-- Gojuon 五十音 -->
<!-- (ref.) [平假名](https://www.wikiwand.com/zh-hk/articles/平假名) -->
<!-- (ref.) [片假名](https://www.wikiwand.com/zh-hk/articles/片假名) -->
<div>
  <div class="flex">
    <GojuonHeader bind:this={rowN} bind:enabled={enableRowN} bind:isSelecting label="n" />
    <GojuonHeader bind:this={rowWa} bind:enabled={enableRowWa} bind:isSelecting label="w" />
    <GojuonHeader bind:this={rowRa} bind:enabled={enableRowRa} bind:isSelecting label="r" />
    <GojuonHeader bind:this={rowYa} bind:enabled={enableRowYa} bind:isSelecting label="y" />
    <GojuonHeader bind:this={rowMa} bind:enabled={enableRowMa} bind:isSelecting label="m" />
    <GojuonHeader
      bind:this={rowHa}
      bind:enabled={enableRowHa}
      bind:isSelecting
      label={enableMarks ? "h/b/p" : "h"}
    />
    <GojuonHeader bind:this={rowNa} bind:enabled={enableRowNa} bind:isSelecting label="n" />
    <GojuonHeader
      bind:this={rowTa}
      bind:enabled={enableRowTa}
      bind:isSelecting
      label={enableMarks ? "t/d" : "t"}
    />
    <GojuonHeader
      bind:this={rowSa}
      bind:enabled={enableRowSa}
      bind:isSelecting
      label={enableMarks ? "s/z" : "s"}
    />
    <GojuonHeader
      bind:this={rowKa}
      bind:enabled={enableRowKa}
      bind:isSelecting
      label={enableMarks ? "k/g" : "k"}
    />
    <GojuonHeader bind:this={rowA} bind:enabled={enableRowA} bind:isSelecting label="" />
  </div>

  <div class="flex">
    {#snippet cell(props?: {
      hiragana: string;
      hiraganaOrigin: string;
      katakana: string;
      katakanaOrigin: string;
    })}
      <div class="flex h-12 w-18 cursor-pointer gap-2 px-2 ring">
        <div
          class={[
            "inline-flex w-6 flex-col items-center-safe",
            enableHiragana ? "visible" : "invisible",
          ]}
        >
          <span>{props?.hiragana}</span>
          {#if props?.hiraganaOrigin && showOrigins}
            <span>({props?.hiraganaOrigin})</span>
          {/if}
        </div>

        <div
          class={[
            "inline-flex w-6 flex-col items-center-safe",
            enableKatakana ? "visible" : "invisible",
          ]}
        >
          <span>{props?.katakana}</span>
          {#if props?.katakanaOrigin && showOrigins}
            <span>({props?.katakanaOrigin})</span>
          {/if}
        </div>
      </div>
    {/snippet}

    <GojuonRow bind:enabled={enableRowN}>
      {@render cell({ hiragana: "ん", hiraganaOrigin: "无", katakana: "ン", katakanaOrigin: "尓" })}
      {@render cell()}
      {@render cell()}
      {@render cell()}
      {@render cell()}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowWa}>
      {@render cell({ hiragana: "わ", hiraganaOrigin: "和", katakana: "ワ", katakanaOrigin: "和" })}
      {@render cell()}
      {@render cell()}
      {@render cell()}
      {@render cell({ hiragana: "を", hiraganaOrigin: "遠", katakana: "ヲ", katakanaOrigin: "乎" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowRa}>
      {@render cell({ hiragana: "ら", hiraganaOrigin: "良", katakana: "ラ", katakanaOrigin: "良" })}
      {@render cell({ hiragana: "り", hiraganaOrigin: "利", katakana: "リ", katakanaOrigin: "利" })}
      {@render cell({ hiragana: "る", hiraganaOrigin: "留", katakana: "ル", katakanaOrigin: "流" })}
      {@render cell({ hiragana: "れ", hiraganaOrigin: "礼", katakana: "レ", katakanaOrigin: "礼" })}
      {@render cell({ hiragana: "ろ", hiraganaOrigin: "呂", katakana: "ロ", katakanaOrigin: "呂" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowYa}>
      {@render cell({ hiragana: "や", hiraganaOrigin: "也", katakana: "ヤ", katakanaOrigin: "也" })}
      {@render cell()}
      {@render cell({ hiragana: "ゆ", hiraganaOrigin: "由", katakana: "ユ", katakanaOrigin: "由" })}
      {@render cell()}
      {@render cell({ hiragana: "よ", hiraganaOrigin: "与", katakana: "ヨ", katakanaOrigin: "与" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowMa}>
      {@render cell({ hiragana: "ま", hiraganaOrigin: "末", katakana: "マ", katakanaOrigin: "末" })}
      {@render cell({ hiragana: "み", hiraganaOrigin: "美", katakana: "ミ", katakanaOrigin: "三" })}
      {@render cell({ hiragana: "む", hiraganaOrigin: "武", katakana: "ム", katakanaOrigin: "牟" })}
      {@render cell({ hiragana: "め", hiraganaOrigin: "女", katakana: "メ", katakanaOrigin: "女" })}
      {@render cell({ hiragana: "も", hiraganaOrigin: "毛", katakana: "モ", katakanaOrigin: "毛" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowHa}>
      {@render cell({ hiragana: "は", hiraganaOrigin: "波", katakana: "ハ", katakanaOrigin: "八" })}
      {@render cell({ hiragana: "ひ", hiraganaOrigin: "比", katakana: "ヒ", katakanaOrigin: "比" })}
      {@render cell({ hiragana: "ふ", hiraganaOrigin: "不", katakana: "フ", katakanaOrigin: "不" })}
      {@render cell({ hiragana: "へ", hiraganaOrigin: "部", katakana: "ヘ", katakanaOrigin: "部" })}
      {@render cell({ hiragana: "ほ", hiraganaOrigin: "保", katakana: "ホ", katakanaOrigin: "保" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowNa}>
      {@render cell({ hiragana: "な", hiraganaOrigin: "奈", katakana: "ナ", katakanaOrigin: "奈" })}
      {@render cell({ hiragana: "に", hiraganaOrigin: "仁", katakana: "ニ", katakanaOrigin: "仁" })}
      {@render cell({ hiragana: "ぬ", hiraganaOrigin: "奴", katakana: "ヌ", katakanaOrigin: "奴" })}
      {@render cell({ hiragana: "ね", hiraganaOrigin: "祢", katakana: "ネ", katakanaOrigin: "祢" })}
      {@render cell({ hiragana: "の", hiraganaOrigin: "乃", katakana: "ノ", katakanaOrigin: "乃" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowTa}>
      {@render cell({ hiragana: "た", hiraganaOrigin: "太", katakana: "タ", katakanaOrigin: "多" })}
      {@render cell({ hiragana: "ち", hiraganaOrigin: "知", katakana: "チ", katakanaOrigin: "千" })}
      {@render cell({ hiragana: "つ", hiraganaOrigin: "川", katakana: "ツ", katakanaOrigin: "川" })}
      {@render cell({ hiragana: "て", hiraganaOrigin: "天", katakana: "テ", katakanaOrigin: "天" })}
      {@render cell({ hiragana: "と", hiraganaOrigin: "止", katakana: "ト", katakanaOrigin: "止" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowSa}>
      {@render cell({ hiragana: "さ", hiraganaOrigin: "左", katakana: "サ", katakanaOrigin: "散" })}
      {@render cell({ hiragana: "し", hiraganaOrigin: "之", katakana: "シ", katakanaOrigin: "之" })}
      {@render cell({ hiragana: "す", hiraganaOrigin: "寸", katakana: "ス", katakanaOrigin: "須" })}
      {@render cell({ hiragana: "せ", hiraganaOrigin: "世", katakana: "セ", katakanaOrigin: "世" })}
      {@render cell({ hiragana: "そ", hiraganaOrigin: "曽", katakana: "ソ", katakanaOrigin: "曽" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowKa}>
      {@render cell({ hiragana: "か", hiraganaOrigin: "加", katakana: "カ", katakanaOrigin: "加" })}
      {@render cell({ hiragana: "き", hiraganaOrigin: "幾", katakana: "キ", katakanaOrigin: "幾" })}
      {@render cell({ hiragana: "く", hiraganaOrigin: "久", katakana: "ク", katakanaOrigin: "久" })}
      {@render cell({ hiragana: "け", hiraganaOrigin: "計", katakana: "ケ", katakanaOrigin: "介" })}
      {@render cell({ hiragana: "こ", hiraganaOrigin: "己", katakana: "コ", katakanaOrigin: "己" })}
    </GojuonRow>
    <GojuonRow bind:enabled={enableRowA}>
      {@render cell({ hiragana: "あ", hiraganaOrigin: "安", katakana: "ア", katakanaOrigin: "阿" })}
      {@render cell({ hiragana: "い", hiraganaOrigin: "以", katakana: "イ", katakanaOrigin: "伊" })}
      {@render cell({ hiragana: "う", hiraganaOrigin: "宇", katakana: "ウ", katakanaOrigin: "宇" })}
      {@render cell({ hiragana: "え", hiraganaOrigin: "衣", katakana: "エ", katakanaOrigin: "江" })}
      {@render cell({ hiragana: "お", hiraganaOrigin: "於", katakana: "オ", katakanaOrigin: "於" })}
    </GojuonRow>

    <div class="flex flex-col">
      {#each ["a", "i", "u", "e", "o"] as colLabel (colLabel)}
        <div class="h-12 pl-2">{colLabel}</div>
      {/each}
    </div>
  </div>
</div>
