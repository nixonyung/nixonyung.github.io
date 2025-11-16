<script lang="ts">
  import CheckboxInput from "./CheckboxInput.svelte";
  import { globals } from "./globals.svelte";
  import GojuonCell from "./GojuonCell.svelte";
  import GojuonHeader from "./GojuonHeader.svelte";
</script>

<div class="flex gap-9">
  <CheckboxInput
    bind:checked={globals.jpUseHiragana}
    label="use Hiragana 平假名"
    onchange={() => {
      if (globals.jpUseHiragana) {
        globals.searchParams.append("jpSystem", "hiragana");
      } else {
        globals.searchParams.delete("jpSystem", "hiragana");
      }
      globals.saveSearchParams();
      globals.nextQuestion();
    }}
  />
  <CheckboxInput
    bind:checked={globals.jpUseKatakana}
    label="use Katakana 片假名"
    onchange={() => {
      if (globals.jpUseKatakana) {
        globals.searchParams.append("jpSystem", "katakana");
      } else {
        globals.searchParams.delete("jpSystem", "katakana");
      }
      globals.saveSearchParams();
      globals.nextQuestion();
    }}
  />
  <CheckboxInput bind:checked={globals.jpShowOrigins} label="show origins:" />
</div>

<!-- (ref.) [平假名](https://www.wikiwand.com/zh-hk/articles/平假名) -->
<!-- (ref.) [片假名](https://www.wikiwand.com/zh-hk/articles/片假名) -->

<table dir="rtl" class="text-right divide-y mb-3 whitespace-nowrap">
  <thead>
    <tr>
      <th></th>
      <GojuonHeader bind:checked={globals.jpUseRowA} label="" rowName="a" />
      <GojuonHeader bind:checked={globals.jpUseRowKa} label="k" rowName="ka" />
      <GojuonHeader bind:checked={globals.jpUseRowSa} label="s" rowName="sa" />
      <GojuonHeader bind:checked={globals.jpUseRowTa} label="t" rowName="ta" />
      <GojuonHeader bind:checked={globals.jpUseRowNa} label="n" rowName="na" />
      <GojuonHeader bind:checked={globals.jpUseRowHa} label="h" rowName="ha" />
      <GojuonHeader bind:checked={globals.jpUseRowMa} label="m" rowName="ma" />
      <GojuonHeader bind:checked={globals.jpUseRowYa} label="y" rowName="ya" />
      <GojuonHeader bind:checked={globals.jpUseRowRa} label="r" rowName="ra" />
      <GojuonHeader bind:checked={globals.jpUseRowWa} label="w" rowName="wa" />
      <GojuonHeader bind:checked={globals.jpUseRowN} label="" rowName="n" />
    </tr>
  </thead>
  <tbody class="divide-y">
    <tr class="divide-x">
      <th class="px-2">a</th>
      <GojuonCell hiragana="あ" hiraganaOrigin="安" katakana="ア" katakanaOrigin="阿" />
      <GojuonCell hiragana="か" hiraganaOrigin="加" katakana="カ" katakanaOrigin="加" />
      <GojuonCell hiragana="さ" hiraganaOrigin="左" katakana="サ" katakanaOrigin="散" />
      <GojuonCell hiragana="た" hiraganaOrigin="太" katakana="タ" katakanaOrigin="多" />
      <GojuonCell hiragana="な" hiraganaOrigin="奈" katakana="ナ" katakanaOrigin="奈" />
      <GojuonCell hiragana="は" hiraganaOrigin="波" katakana="ハ" katakanaOrigin="八" />
      <GojuonCell hiragana="ま" hiraganaOrigin="末" katakana="マ" katakanaOrigin="末" />
      <GojuonCell hiragana="や" hiraganaOrigin="也" katakana="ヤ" katakanaOrigin="也" />
      <GojuonCell hiragana="ら" hiraganaOrigin="良" katakana="ラ" katakanaOrigin="良" />
      <GojuonCell hiragana="わ" hiraganaOrigin="和" katakana="ワ" katakanaOrigin="和" />
      <GojuonCell hiragana="ん" hiraganaOrigin="无" katakana="ン" katakanaOrigin="尓" />
    </tr>
    <tr class="divide-x">
      <th class="px-2">i</th>
      <GojuonCell hiragana="い" hiraganaOrigin="以" katakana="イ" katakanaOrigin="伊" />
      <GojuonCell hiragana="き" hiraganaOrigin="幾" katakana="キ" katakanaOrigin="幾" />
      <GojuonCell hiragana="し" hiraganaOrigin="之" katakana="シ" katakanaOrigin="之" />
      <GojuonCell hiragana="ち" hiraganaOrigin="知" katakana="チ" katakanaOrigin="千" />
      <GojuonCell hiragana="に" hiraganaOrigin="仁" katakana="ニ" katakanaOrigin="仁" />
      <GojuonCell hiragana="ひ" hiraganaOrigin="比" katakana="ヒ" katakanaOrigin="比" />
      <GojuonCell hiragana="み" hiraganaOrigin="美" katakana="ミ" katakanaOrigin="三" />
      <GojuonCell />
      <GojuonCell hiragana="り" hiraganaOrigin="利" katakana="リ" katakanaOrigin="利" />
      <GojuonCell />
      <GojuonCell />
    </tr>
    <tr class="divide-x">
      <th class="px-2">u</th>
      <GojuonCell hiragana="う" hiraganaOrigin="宇" katakana="ウ" katakanaOrigin="宇" />
      <GojuonCell hiragana="く" hiraganaOrigin="久" katakana="ク" katakanaOrigin="久" />
      <GojuonCell hiragana="す" hiraganaOrigin="寸" katakana="ス" katakanaOrigin="須" />
      <GojuonCell hiragana="つ" hiraganaOrigin="川" katakana="ツ" katakanaOrigin="川" />
      <GojuonCell hiragana="ぬ" hiraganaOrigin="奴" katakana="ヌ" katakanaOrigin="奴" />
      <GojuonCell hiragana="ふ" hiraganaOrigin="不" katakana="フ" katakanaOrigin="不" />
      <GojuonCell hiragana="む" hiraganaOrigin="武" katakana="ム" katakanaOrigin="牟" />
      <GojuonCell hiragana="ゆ" hiraganaOrigin="由" katakana="ユ" katakanaOrigin="由" />
      <GojuonCell hiragana="る" hiraganaOrigin="留" katakana="ル" katakanaOrigin="流" />
      <GojuonCell />
      <GojuonCell />
    </tr>
    <tr class="divide-x">
      <th class="px-2">e</th>
      <GojuonCell hiragana="え" hiraganaOrigin="衣" katakana="エ" katakanaOrigin="江" />
      <GojuonCell hiragana="け" hiraganaOrigin="計" katakana="ケ" katakanaOrigin="介" />
      <GojuonCell hiragana="せ" hiraganaOrigin="世" katakana="セ" katakanaOrigin="世" />
      <GojuonCell hiragana="て" hiraganaOrigin="天" katakana="テ" katakanaOrigin="天" />
      <GojuonCell hiragana="ね" hiraganaOrigin="祢" katakana="ネ" katakanaOrigin="祢" />
      <GojuonCell hiragana="へ" hiraganaOrigin="部" katakana="ヘ" katakanaOrigin="部" />
      <GojuonCell hiragana="め" hiraganaOrigin="女" katakana="メ" katakanaOrigin="女" />
      <GojuonCell />
      <GojuonCell hiragana="れ" hiraganaOrigin="礼" katakana="レ" katakanaOrigin="礼" />
      <GojuonCell />
      <GojuonCell />
    </tr>
    <tr class="divide-x">
      <th class="px-2">o</th>
      <GojuonCell hiragana="お" hiraganaOrigin="於" katakana="オ" katakanaOrigin="於" />
      <GojuonCell hiragana="こ" hiraganaOrigin="己" katakana="コ" katakanaOrigin="己" />
      <GojuonCell hiragana="そ" hiraganaOrigin="曽" katakana="ソ" katakanaOrigin="曽" />
      <GojuonCell hiragana="と" hiraganaOrigin="止" katakana="ト" katakanaOrigin="止" />
      <GojuonCell hiragana="の" hiraganaOrigin="乃" katakana="ノ" katakanaOrigin="乃" />
      <GojuonCell hiragana="ほ" hiraganaOrigin="保" katakana="ホ" katakanaOrigin="保" />
      <GojuonCell hiragana="も" hiraganaOrigin="毛" katakana="モ" katakanaOrigin="毛" />
      <GojuonCell hiragana="よ" hiraganaOrigin="与" katakana="ヨ" katakanaOrigin="与" />
      <GojuonCell hiragana="ろ" hiraganaOrigin="呂" katakana="ロ" katakanaOrigin="呂" />
      <GojuonCell hiragana="を" hiraganaOrigin="遠" katakana="ヲ" katakanaOrigin="乎" />
      <GojuonCell />
    </tr>
  </tbody>
</table>
