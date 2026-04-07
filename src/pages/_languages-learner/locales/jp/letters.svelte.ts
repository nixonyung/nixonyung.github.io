import { gojuonSettings, type Gojuon } from "./GojuonSettings.svelte";

export const gojuons: Record<string, (Gojuon | null)[]> = {
  rowA: [
    { hiragana: "あ", hiraganaOrigin: "安", katakana: "ア", katakanaOrigin: "阿", romanization: "a" },
    { hiragana: "い", hiraganaOrigin: "以", katakana: "イ", katakanaOrigin: "伊", romanization: "i" },
    { hiragana: "う", hiraganaOrigin: "宇", katakana: "ウ", katakanaOrigin: "宇", romanization: "u" },
    { hiragana: "え", hiraganaOrigin: "衣", katakana: "エ", katakanaOrigin: "江", romanization: "e" },
    { hiragana: "お", hiraganaOrigin: "於", katakana: "オ", katakanaOrigin: "於", romanization: "o" },
  ],
  rowKa: [
    { hiragana: "か", hiraganaOrigin: "加", katakana: "カ", katakanaOrigin: "加", romanization: "ka" },
    { hiragana: "き", hiraganaOrigin: "幾", katakana: "キ", katakanaOrigin: "幾", romanization: "ki" },
    { hiragana: "く", hiraganaOrigin: "久", katakana: "ク", katakanaOrigin: "久", romanization: "ku" },
    { hiragana: "け", hiraganaOrigin: "計", katakana: "ケ", katakanaOrigin: "介", romanization: "ke" },
    { hiragana: "こ", hiraganaOrigin: "己", katakana: "コ", katakanaOrigin: "己", romanization: "ko" },
  ],
  rowSa: [
    { hiragana: "さ", hiraganaOrigin: "左", katakana: "サ", katakanaOrigin: "散", romanization: "sa" },
    { hiragana: "し", hiraganaOrigin: "之", katakana: "シ", katakanaOrigin: "之", romanization: "shi" },
    { hiragana: "す", hiraganaOrigin: "寸", katakana: "ス", katakanaOrigin: "須", romanization: "su" },
    { hiragana: "せ", hiraganaOrigin: "世", katakana: "セ", katakanaOrigin: "世", romanization: "se" },
    { hiragana: "そ", hiraganaOrigin: "曽", katakana: "ソ", katakanaOrigin: "曽", romanization: "so" },
  ],
  rowTa: [
    { hiragana: "た", hiraganaOrigin: "太", katakana: "タ", katakanaOrigin: "多", romanization: "ta" },
    { hiragana: "ち", hiraganaOrigin: "知", katakana: "チ", katakanaOrigin: "千", romanization: "chi" },
    { hiragana: "つ", hiraganaOrigin: "川", katakana: "ツ", katakanaOrigin: "川", romanization: "tsu" },
    { hiragana: "て", hiraganaOrigin: "天", katakana: "テ", katakanaOrigin: "天", romanization: "te" },
    { hiragana: "と", hiraganaOrigin: "止", katakana: "ト", katakanaOrigin: "止", romanization: "to" },
  ],
  rowNa: [
    { hiragana: "な", hiraganaOrigin: "奈", katakana: "ナ", katakanaOrigin: "奈", romanization: "na" },
    { hiragana: "に", hiraganaOrigin: "仁", katakana: "ニ", katakanaOrigin: "仁", romanization: "ni" },
    { hiragana: "ぬ", hiraganaOrigin: "奴", katakana: "ヌ", katakanaOrigin: "奴", romanization: "nu" },
    { hiragana: "ね", hiraganaOrigin: "祢", katakana: "ネ", katakanaOrigin: "祢", romanization: "ne" },
    { hiragana: "の", hiraganaOrigin: "乃", katakana: "ノ", katakanaOrigin: "乃", romanization: "no" },
  ],
  rowHa: [
    { hiragana: "は", hiraganaOrigin: "波", katakana: "ハ", katakanaOrigin: "八", romanization: "ha" },
    { hiragana: "ひ", hiraganaOrigin: "比", katakana: "ヒ", katakanaOrigin: "比", romanization: "hi" },
    { hiragana: "ふ", hiraganaOrigin: "不", katakana: "フ", katakanaOrigin: "不", romanization: "fu" },
    { hiragana: "へ", hiraganaOrigin: "部", katakana: "ヘ", katakanaOrigin: "部", romanization: "he" },
    { hiragana: "ほ", hiraganaOrigin: "保", katakana: "ホ", katakanaOrigin: "保", romanization: "ho" },
  ],
  rowMa: [
    { hiragana: "ま", hiraganaOrigin: "末", katakana: "マ", katakanaOrigin: "末", romanization: "ma" },
    { hiragana: "み", hiraganaOrigin: "美", katakana: "ミ", katakanaOrigin: "三", romanization: "mi" },
    { hiragana: "む", hiraganaOrigin: "武", katakana: "ム", katakanaOrigin: "牟", romanization: "mu" },
    { hiragana: "め", hiraganaOrigin: "女", katakana: "メ", katakanaOrigin: "女", romanization: "me" },
    { hiragana: "も", hiraganaOrigin: "毛", katakana: "モ", katakanaOrigin: "毛", romanization: "mo" },
  ],
  rowYa: [
    { hiragana: "や", hiraganaOrigin: "也", katakana: "ヤ", katakanaOrigin: "也", romanization: "ya" },
    null,
    { hiragana: "ゆ", hiraganaOrigin: "由", katakana: "ユ", katakanaOrigin: "由", romanization: "yu" },
    null,
    { hiragana: "よ", hiraganaOrigin: "与", katakana: "ヨ", katakanaOrigin: "与", romanization: "yo" },
  ],
  rowRa: [
    { hiragana: "ら", hiraganaOrigin: "良", katakana: "ラ", katakanaOrigin: "良", romanization: "ra" },
    { hiragana: "り", hiraganaOrigin: "利", katakana: "リ", katakanaOrigin: "利", romanization: "ri" },
    { hiragana: "る", hiraganaOrigin: "留", katakana: "ル", katakanaOrigin: "流", romanization: "ru" },
    { hiragana: "れ", hiraganaOrigin: "礼", katakana: "レ", katakanaOrigin: "礼", romanization: "re" },
    { hiragana: "ろ", hiraganaOrigin: "呂", katakana: "ロ", katakanaOrigin: "呂", romanization: "ro" },
  ],
  rowWa: [
    { hiragana: "わ", hiraganaOrigin: "和", katakana: "ワ", katakanaOrigin: "和", romanization: "wa" },
    null,
    null,
    null,
    { hiragana: "を", hiraganaOrigin: "遠", katakana: "ヲ", katakanaOrigin: "乎", romanization: "o" },
  ],
  rowN: [
    { hiragana: "ん", hiraganaOrigin: "无", katakana: "ン", katakanaOrigin: "尓", romanization: "n" },
    null,
    null,
    null,
    null,
  ],
};

export function getLetters() {
  const letters: { letter: string; romanization: string }[] = [];

  const gojuonss: (Gojuon | null)[][] = [];
  if (gojuonSettings.enableRows.rowA.value) gojuonss.push(gojuons.rowA);
  if (gojuonSettings.enableRows.rowKa.value) gojuonss.push(gojuons.rowKa);
  if (gojuonSettings.enableRows.rowSa.value) gojuonss.push(gojuons.rowSa);
  if (gojuonSettings.enableRows.rowTa.value) gojuonss.push(gojuons.rowTa);
  if (gojuonSettings.enableRows.rowNa.value) gojuonss.push(gojuons.rowNa);
  if (gojuonSettings.enableRows.rowHa.value) gojuonss.push(gojuons.rowHa);
  if (gojuonSettings.enableRows.rowMa.value) gojuonss.push(gojuons.rowMa);
  if (gojuonSettings.enableRows.rowYa.value) gojuonss.push(gojuons.rowYa);
  if (gojuonSettings.enableRows.rowRa.value) gojuonss.push(gojuons.rowRa);
  if (gojuonSettings.enableRows.rowWa.value) gojuonss.push(gojuons.rowWa);
  if (gojuonSettings.enableRows.rowN.value) gojuonss.push(gojuons.rowN);
  for (const { hiragana, katakana, romanization } of gojuonss.flat().filter((gojuon) => !!gojuon)) {
    if (gojuonSettings.enableSubsets.hiragana.value) letters.push({ letter: hiragana, romanization });
    if (gojuonSettings.enableSubsets.katakana.value) letters.push({ letter: katakana, romanization });
  }

  // Hiragana - 濁音 Dakuten and 半濁音 Handakuten
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowKa.value) {
    letters.push(
      //
      { letter: "が", romanization: "ga" },
      { letter: "ぎ", romanization: "gi" },
      { letter: "ぐ", romanization: "gu" },
      { letter: "げ", romanization: "ge" },
      { letter: "ご", romanization: "go" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowSa.value) {
    letters.push(
      //
      { letter: "ざ", romanization: "za" },
      { letter: "じ", romanization: "ji" },
      { letter: "ず", romanization: "zu" },
      { letter: "ぜ", romanization: "ze" },
      { letter: "ぞ", romanization: "zo" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowTa.value) {
    letters.push(
      //
      { letter: "だ", romanization: "da" },
      { letter: "ぢ", romanization: "ji" },
      { letter: "づ", romanization: "zu" },
      { letter: "で", romanization: "de" },
      { letter: "ど", romanization: "do" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowHa.value) {
    letters.push(
      //
      { letter: "ば", romanization: "ba" },
      { letter: "び", romanization: "bi" },
      { letter: "ぶ", romanization: "bu" },
      { letter: "べ", romanization: "be" },
      { letter: "ぼ", romanization: "bo" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowHa.value) {
    letters.push(
      //
      { letter: "ぱ", romanization: "pa" },
      { letter: "ぴ", romanization: "pi" },
      { letter: "ぷ", romanization: "pu" },
      { letter: "ぺ", romanization: "pe" },
      { letter: "ぽ", romanization: "po" },
    );
  }

  // Hiragana - 拗音 Yoon
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowYa.value && gojuonSettings.enableSubsets.yoons.value) {
    letters.push(
      //
      { letter: "きゃ", romanization: "kya" },
      { letter: "きゅ", romanization: "kyu" },
      { letter: "きょ", romanization: "kyo" },
      { letter: "しゃ", romanization: "sha" },
      { letter: "しゅ", romanization: "shu" },
      { letter: "しょ", romanization: "sho" },
      { letter: "ちゃ", romanization: "cha" },
      { letter: "ちゅ", romanization: "chu" },
      { letter: "ちょ", romanization: "cho" },
      { letter: "にゃ", romanization: "nya" },
      { letter: "にゅ", romanization: "nyu" },
      { letter: "にょ", romanization: "nyo" },
      { letter: "ひゃ", romanization: "hya" },
      { letter: "ひゅ", romanization: "hyu" },
      { letter: "ひょ", romanization: "hyo" },
      { letter: "みゃ", romanization: "mya" },
      { letter: "みゅ", romanization: "myu" },
      { letter: "みょ", romanization: "myo" },
      { letter: "りゃ", romanization: "rya" },
      { letter: "りゅ", romanization: "ryu" },
      { letter: "りょ", romanization: "ryo" },
    );
  }

  // Katakana - 濁音 Dakuten and 半濁音 Handakuten
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowKa.value) {
    letters.push(
      //
      { letter: "ガ", romanization: "ga" },
      { letter: "ギ", romanization: "gi" },
      { letter: "グ", romanization: "gu" },
      { letter: "ゲ", romanization: "ge" },
      { letter: "ゴ", romanization: "go" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowSa.value) {
    letters.push(
      //
      { letter: "ザ", romanization: "za" },
      { letter: "ジ", romanization: "ji" },
      { letter: "ズ", romanization: "zu" },
      { letter: "ゼ", romanization: "ze" },
      { letter: "ゾ", romanization: "zo" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowTa.value) {
    letters.push(
      //
      { letter: "ダ", romanization: "da" },
      { letter: "ヂ", romanization: "ji" },
      { letter: "ヅ", romanization: "zu" },
      { letter: "デ", romanization: "de" },
      { letter: "ド", romanization: "do" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowHa.value) {
    letters.push(
      //
      { letter: "バ", romanization: "ba" },
      { letter: "ビ", romanization: "bi" },
      { letter: "ブ", romanization: "bu" },
      { letter: "ベ", romanization: "be" },
      { letter: "ボ", romanization: "bo" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableSubsets.diacritics.value && gojuonSettings.enableRows.rowHa.value) {
    letters.push(
      //
      { letter: "パ", romanization: "pa" },
      { letter: "ピ", romanization: "pi" },
      { letter: "プ", romanization: "pu" },
      { letter: "ペ", romanization: "pe" },
      { letter: "ポ", romanization: "po" },
    );
  }

  // Katakana - 拗音 Yoon
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowYa.value && gojuonSettings.enableSubsets.yoons.value) {
    letters.push(
      //
      { letter: "キャ", romanization: "kya" },
      { letter: "キュ", romanization: "kyu" },
      { letter: "キョ", romanization: "kyo" },
      { letter: "シャ", romanization: "sha" },
      { letter: "シュ", romanization: "shu" },
      { letter: "ショ", romanization: "sho" },
      { letter: "チャ", romanization: "cha" },
      { letter: "チュ", romanization: "chu" },
      { letter: "チョ", romanization: "cho" },
      { letter: "ニャ", romanization: "nya" },
      { letter: "ニュ", romanization: "nyu" },
      { letter: "ニョ", romanization: "nyo" },
      { letter: "ヒャ", romanization: "hya" },
      { letter: "ヒュ", romanization: "hyu" },
      { letter: "ヒョ", romanization: "hyo" },
      { letter: "ミャ", romanization: "mya" },
      { letter: "ミュ", romanization: "myu" },
      { letter: "ミョ", romanization: "myo" },
      { letter: "リャ", romanization: "rya" },
      { letter: "リュ", romanization: "ryu" },
      { letter: "リョ", romanization: "ryo" },
    );
  }

  return letters;
}
