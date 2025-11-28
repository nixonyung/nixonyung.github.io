<script lang="ts">
  import GojuonHeader from "./GojuonHeader.svelte";
  import GojuonRow from "./GojuonRow.svelte";
  import { jp } from "./jp.svelte";

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

  let isSelecting = $state(false);
  $effect(() => {
    if (isSelecting) {
      jp.settings.enableRowA = false;
      jp.settings.enableRowKa = false;
      jp.settings.enableRowSa = false;
      jp.settings.enableRowTa = false;
      jp.settings.enableRowNa = false;
      jp.settings.enableRowHa = false;
      jp.settings.enableRowMa = false;
      jp.settings.enableRowYa = false;
      jp.settings.enableRowRa = false;
      jp.settings.enableRowWa = false;
      jp.settings.enableRowN = false;
    }
  });
</script>

<svelte:window
  onmousemove={(ev) => {
    if (isSelecting) {
      let rect;

      rect = rowA?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowA = true;
        return;
      }
      rect = rowKa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowKa = true;
        return;
      }
      rect = rowSa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowSa = true;
        return;
      }
      rect = rowTa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowTa = true;
        return;
      }
      rect = rowNa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowNa = true;
        return;
      }
      rect = rowHa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowHa = true;
        return;
      }
      rect = rowMa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowMa = true;
        return;
      }
      rect = rowYa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowYa = true;
        return;
      }
      rect = rowRa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowRa = true;
        return;
      }
      rect = rowWa?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowWa = true;
        return;
      }
      rect = rowN?.rect();
      if (rect && rect.x <= ev.x && ev.x < rect.x + rect.width) {
        jp.settings.enableRowN = true;
        return;
      }
    }
  }}
  onmouseup={() => (isSelecting = false)}
/>

<!-- (ref.) [平假名](https://www.wikiwand.com/zh-hk/articles/平假名) -->
<!-- (ref.) [片假名](https://www.wikiwand.com/zh-hk/articles/片假名) -->
<div>
  <div class="flex">
    <GojuonHeader
      bind:this={rowN}
      bind:enabled={jp.settings.enableRowN}
      bind:isSelecting
      label="n"
    />
    <GojuonHeader
      bind:this={rowWa}
      bind:enabled={jp.settings.enableRowWa}
      bind:isSelecting
      label="w"
    />
    <GojuonHeader
      bind:this={rowRa}
      bind:enabled={jp.settings.enableRowRa}
      bind:isSelecting
      label="r"
    />
    <GojuonHeader
      bind:this={rowYa}
      bind:enabled={jp.settings.enableRowYa}
      bind:isSelecting
      label="y"
    />
    <GojuonHeader
      bind:this={rowMa}
      bind:enabled={jp.settings.enableRowMa}
      bind:isSelecting
      label="m"
    />
    <GojuonHeader
      bind:this={rowHa}
      bind:enabled={jp.settings.enableRowHa}
      bind:isSelecting
      label={jp.settings.enableDiacritics ? "h/b/p" : "h"}
    />
    <GojuonHeader
      bind:this={rowNa}
      bind:enabled={jp.settings.enableRowNa}
      bind:isSelecting
      label="n"
    />
    <GojuonHeader
      bind:this={rowTa}
      bind:enabled={jp.settings.enableRowTa}
      bind:isSelecting
      label={jp.settings.enableDiacritics ? "t/d" : "t"}
    />
    <GojuonHeader
      bind:this={rowSa}
      bind:enabled={jp.settings.enableRowSa}
      bind:isSelecting
      label={jp.settings.enableDiacritics ? "s/z" : "s"}
    />
    <GojuonHeader
      bind:this={rowKa}
      bind:enabled={jp.settings.enableRowKa}
      bind:isSelecting
      label={jp.settings.enableDiacritics ? "k/g" : "k"}
    />
    <GojuonHeader
      bind:this={rowA}
      bind:enabled={jp.settings.enableRowA}
      bind:isSelecting
      label=""
    />
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
            jp.settings.enableHiragana ? "visible" : "invisible",
          ]}
        >
          <span>{props?.hiragana}</span>
          {#if props?.hiraganaOrigin && jp.settings.showOrigins}
            <span>({props?.hiraganaOrigin})</span>
          {/if}
        </div>

        <div
          class={[
            "inline-flex w-6 flex-col items-center-safe",
            jp.settings.enableKatakana ? "visible" : "invisible",
          ]}
        >
          <span>{props?.katakana}</span>
          {#if props?.katakanaOrigin && jp.settings.showOrigins}
            <span>({props?.katakanaOrigin})</span>
          {/if}
        </div>
      </div>
    {/snippet}

    <GojuonRow bind:enabled={jp.settings.enableRowN}>
      {@render cell({ hiragana: "ん", hiraganaOrigin: "无", katakana: "ン", katakanaOrigin: "尓" })}
      {@render cell()}
      {@render cell()}
      {@render cell()}
      {@render cell()}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowWa}>
      {@render cell({ hiragana: "わ", hiraganaOrigin: "和", katakana: "ワ", katakanaOrigin: "和" })}
      {@render cell()}
      {@render cell()}
      {@render cell()}
      {@render cell({ hiragana: "を", hiraganaOrigin: "遠", katakana: "ヲ", katakanaOrigin: "乎" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowRa}>
      {@render cell({ hiragana: "ら", hiraganaOrigin: "良", katakana: "ラ", katakanaOrigin: "良" })}
      {@render cell({ hiragana: "り", hiraganaOrigin: "利", katakana: "リ", katakanaOrigin: "利" })}
      {@render cell({ hiragana: "る", hiraganaOrigin: "留", katakana: "ル", katakanaOrigin: "流" })}
      {@render cell({ hiragana: "れ", hiraganaOrigin: "礼", katakana: "レ", katakanaOrigin: "礼" })}
      {@render cell({ hiragana: "ろ", hiraganaOrigin: "呂", katakana: "ロ", katakanaOrigin: "呂" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowYa}>
      {@render cell({ hiragana: "や", hiraganaOrigin: "也", katakana: "ヤ", katakanaOrigin: "也" })}
      {@render cell()}
      {@render cell({ hiragana: "ゆ", hiraganaOrigin: "由", katakana: "ユ", katakanaOrigin: "由" })}
      {@render cell()}
      {@render cell({ hiragana: "よ", hiraganaOrigin: "与", katakana: "ヨ", katakanaOrigin: "与" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowMa}>
      {@render cell({ hiragana: "ま", hiraganaOrigin: "末", katakana: "マ", katakanaOrigin: "末" })}
      {@render cell({ hiragana: "み", hiraganaOrigin: "美", katakana: "ミ", katakanaOrigin: "三" })}
      {@render cell({ hiragana: "む", hiraganaOrigin: "武", katakana: "ム", katakanaOrigin: "牟" })}
      {@render cell({ hiragana: "め", hiraganaOrigin: "女", katakana: "メ", katakanaOrigin: "女" })}
      {@render cell({ hiragana: "も", hiraganaOrigin: "毛", katakana: "モ", katakanaOrigin: "毛" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowHa}>
      {@render cell({ hiragana: "は", hiraganaOrigin: "波", katakana: "ハ", katakanaOrigin: "八" })}
      {@render cell({ hiragana: "ひ", hiraganaOrigin: "比", katakana: "ヒ", katakanaOrigin: "比" })}
      {@render cell({ hiragana: "ふ", hiraganaOrigin: "不", katakana: "フ", katakanaOrigin: "不" })}
      {@render cell({ hiragana: "へ", hiraganaOrigin: "部", katakana: "ヘ", katakanaOrigin: "部" })}
      {@render cell({ hiragana: "ほ", hiraganaOrigin: "保", katakana: "ホ", katakanaOrigin: "保" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowNa}>
      {@render cell({ hiragana: "な", hiraganaOrigin: "奈", katakana: "ナ", katakanaOrigin: "奈" })}
      {@render cell({ hiragana: "に", hiraganaOrigin: "仁", katakana: "ニ", katakanaOrigin: "仁" })}
      {@render cell({ hiragana: "ぬ", hiraganaOrigin: "奴", katakana: "ヌ", katakanaOrigin: "奴" })}
      {@render cell({ hiragana: "ね", hiraganaOrigin: "祢", katakana: "ネ", katakanaOrigin: "祢" })}
      {@render cell({ hiragana: "の", hiraganaOrigin: "乃", katakana: "ノ", katakanaOrigin: "乃" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowTa}>
      {@render cell({ hiragana: "た", hiraganaOrigin: "太", katakana: "タ", katakanaOrigin: "多" })}
      {@render cell({ hiragana: "ち", hiraganaOrigin: "知", katakana: "チ", katakanaOrigin: "千" })}
      {@render cell({ hiragana: "つ", hiraganaOrigin: "川", katakana: "ツ", katakanaOrigin: "川" })}
      {@render cell({ hiragana: "て", hiraganaOrigin: "天", katakana: "テ", katakanaOrigin: "天" })}
      {@render cell({ hiragana: "と", hiraganaOrigin: "止", katakana: "ト", katakanaOrigin: "止" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowSa}>
      {@render cell({ hiragana: "さ", hiraganaOrigin: "左", katakana: "サ", katakanaOrigin: "散" })}
      {@render cell({ hiragana: "し", hiraganaOrigin: "之", katakana: "シ", katakanaOrigin: "之" })}
      {@render cell({ hiragana: "す", hiraganaOrigin: "寸", katakana: "ス", katakanaOrigin: "須" })}
      {@render cell({ hiragana: "せ", hiraganaOrigin: "世", katakana: "セ", katakanaOrigin: "世" })}
      {@render cell({ hiragana: "そ", hiraganaOrigin: "曽", katakana: "ソ", katakanaOrigin: "曽" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowKa}>
      {@render cell({ hiragana: "か", hiraganaOrigin: "加", katakana: "カ", katakanaOrigin: "加" })}
      {@render cell({ hiragana: "き", hiraganaOrigin: "幾", katakana: "キ", katakanaOrigin: "幾" })}
      {@render cell({ hiragana: "く", hiraganaOrigin: "久", katakana: "ク", katakanaOrigin: "久" })}
      {@render cell({ hiragana: "け", hiraganaOrigin: "計", katakana: "ケ", katakanaOrigin: "介" })}
      {@render cell({ hiragana: "こ", hiraganaOrigin: "己", katakana: "コ", katakanaOrigin: "己" })}
    </GojuonRow>
    <GojuonRow bind:enabled={jp.settings.enableRowA}>
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
