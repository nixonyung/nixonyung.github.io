export const keymap = {
  // row 1
  q: "q",
  w: "w",
  e: "e",
  r: "r",
  t: "t",
  y: "y",
  u: "u",
  i: "i",
  o: "o",
  p: "p",

  // row 2
  a: "a",
  s: "s",
  d: "d",
  f: "f",
  g: "g",
  h: "h",
  j: "j",
  k: "k",
  l: "l",

  // row 3
  z: "z",
  x: "x",
  c: "c",
  v: "v",
  b: "b",
  n: "n",
  m: "m",
};

export function dictionary({
  enableHiragana,
  enableKatakana,
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
}: {
  enableHiragana: boolean;
  enableKatakana: boolean;
  enableRowA: boolean;
  enableRowKa: boolean;
  enableRowSa: boolean;
  enableRowTa: boolean;
  enableRowNa: boolean;
  enableRowHa: boolean;
  enableRowMa: boolean;
  enableRowYa: boolean;
  enableRowRa: boolean;
  enableRowWa: boolean;
  enableRowN: boolean;
}) {
  // (ref.) [五十音](https://www.wikiwand.com/zh-hk/articles/五十音#五十音)
  return {
    // 平假名 Hiragana
    ...(enableHiragana &&
      enableRowA && {
        あ: { input: "a", romanization: "a", pronunciation: "あ" },
        い: { input: "i", romanization: "i", pronunciation: "い" },
        う: { input: "u", romanization: "u", pronunciation: "う" },
        え: { input: "e", romanization: "e", pronunciation: "え" },
        お: { input: "o", romanization: "o", pronunciation: "お" },
      }),
    ...(enableHiragana &&
      enableRowKa && {
        か: { input: "ka", romanization: "ka", pronunciation: "か" },
        き: { input: "ki", romanization: "ki", pronunciation: "き" },
        く: { input: "ku", romanization: "ku", pronunciation: "く" },
        け: { input: "ke", romanization: "ke", pronunciation: "け" },
        こ: { input: "ko", romanization: "ko", pronunciation: "こ" },
      }),
    ...(enableHiragana &&
      enableRowSa && {
        さ: { input: "sa", romanization: "sa", pronunciation: "さ" },
        し: { input: "si", romanization: "si", pronunciation: "し" },
        す: { input: "su", romanization: "su", pronunciation: "す" },
        せ: { input: "se", romanization: "se", pronunciation: "せ" },
        そ: { input: "so", romanization: "so", pronunciation: "そ" },
      }),
    ...(enableHiragana &&
      enableRowTa && {
        た: { input: "ta", romanization: "ta", pronunciation: "た" },
        ち: { input: "ti", romanization: "ti", pronunciation: "ち" },
        つ: { input: "tu", romanization: "tu", pronunciation: "つ" },
        て: { input: "te", romanization: "te", pronunciation: "て" },
        と: { input: "to", romanization: "to", pronunciation: "と" },
      }),
    ...(enableHiragana &&
      enableRowNa && {
        な: { input: "na", romanization: "na", pronunciation: "な" },
        に: { input: "ni", romanization: "ni", pronunciation: "に" },
        ぬ: { input: "nu", romanization: "nu", pronunciation: "ぬ" },
        ね: { input: "ne", romanization: "ne", pronunciation: "ね" },
        の: { input: "no", romanization: "no", pronunciation: "の" },
      }),
    ...(enableHiragana &&
      enableRowHa && {
        は: { input: "ha", romanization: "ha", pronunciation: "は" },
        ひ: { input: "hi", romanization: "hi", pronunciation: "ひ" },
        ふ: { input: "hu", romanization: "hu", pronunciation: "ふ" },
        へ: { input: "he", romanization: "he", pronunciation: "へ" },
        ほ: { input: "ho", romanization: "ho", pronunciation: "ほ" },
      }),
    ...(enableHiragana &&
      enableRowMa && {
        ま: { input: "ma", romanization: "ma", pronunciation: "ま" },
        み: { input: "mi", romanization: "mi", pronunciation: "み" },
        む: { input: "mu", romanization: "mu", pronunciation: "む" },
        め: { input: "me", romanization: "me", pronunciation: "め" },
        も: { input: "mo", romanization: "mo", pronunciation: "も" },
      }),
    ...(enableHiragana &&
      enableRowYa && {
        や: { input: "ya", romanization: "ya", pronunciation: "や" },
        ゆ: { input: "yu", romanization: "yu", pronunciation: "ゆ" },
        よ: { input: "yo", romanization: "yo", pronunciation: "よ" },
      }),
    ...(enableHiragana &&
      enableRowRa && {
        ら: { input: "ra", romanization: "ra", pronunciation: "ら" },
        り: { input: "ri", romanization: "ri", pronunciation: "り" },
        る: { input: "ru", romanization: "ru", pronunciation: "る" },
        れ: { input: "re", romanization: "re", pronunciation: "れ" },
        ろ: { input: "ro", romanization: "ro", pronunciation: "ろ" },
      }),
    ...(enableHiragana &&
      enableRowWa && {
        わ: { input: "wa", romanization: "wa", pronunciation: "わ" },
        を: { input: "wo", romanization: "wo", pronunciation: "を" },
      }),
    ...(enableHiragana &&
      enableRowN && {
        ん: { input: "n", romanization: "n", pronunciation: "ん" },
      }),

    // 片假名 Katakana
    ...(enableKatakana &&
      enableRowA && {
        ア: { input: "a", romanization: "a", pronunciation: "ア" },
        イ: { input: "i", romanization: "i", pronunciation: "イ" },
        ウ: { input: "u", romanization: "u", pronunciation: "ウ" },
        エ: { input: "e", romanization: "e", pronunciation: "エ" },
        オ: { input: "o", romanization: "o", pronunciation: "オ" },
      }),
    ...(enableKatakana &&
      enableRowKa && {
        カ: { input: "ka", romanization: "ka", pronunciation: "カ" },
        キ: { input: "ki", romanization: "ki", pronunciation: "キ" },
        ク: { input: "ku", romanization: "ku", pronunciation: "ク" },
        ケ: { input: "ke", romanization: "ke", pronunciation: "ケ" },
        コ: { input: "ko", romanization: "ko", pronunciation: "コ" },
      }),
    ...(enableKatakana &&
      enableRowSa && {
        サ: { input: "sa", romanization: "sa", pronunciation: "サ" },
        シ: { input: "shi", romanization: "shi", pronunciation: "シ" },
        ス: { input: "su", romanization: "su", pronunciation: "ス" },
        セ: { input: "se", romanization: "se", pronunciation: "セ" },
        ソ: { input: "so", romanization: "so", pronunciation: "ソ" },
      }),
    ...(enableKatakana &&
      enableRowTa && {
        タ: { input: "ta", romanization: "ta", pronunciation: "タ" },
        チ: { input: "chi", romanization: "chi", pronunciation: "チ" },
        ツ: { input: "tsu", romanization: "tsu", pronunciation: "ツ" },
        テ: { input: "te", romanization: "te", pronunciation: "テ" },
        ト: { input: "to", romanization: "to", pronunciation: "ト" },
      }),
    ...(enableKatakana &&
      enableRowNa && {
        ナ: { input: "na", romanization: "na", pronunciation: "ナ" },
        ニ: { input: "ni", romanization: "ni", pronunciation: "ニ" },
        ヌ: { input: "nu", romanization: "nu", pronunciation: "ヌ" },
        ネ: { input: "ne", romanization: "ne", pronunciation: "ネ" },
        ノ: { input: "no", romanization: "no", pronunciation: "ノ" },
      }),
    ...(enableKatakana &&
      enableRowHa && {
        ハ: { input: "ha", romanization: "ha", pronunciation: "ハ" },
        ヒ: { input: "hi", romanization: "hi", pronunciation: "ヒ" },
        フ: { input: "fu", romanization: "fu", pronunciation: "フ" },
        ヘ: { input: "he", romanization: "he", pronunciation: "ヘ" },
        ホ: { input: "ho", romanization: "ho", pronunciation: "ホ" },
      }),
    ...(enableKatakana &&
      enableRowMa && {
        マ: { input: "ma", romanization: "ma", pronunciation: "マ" },
        ミ: { input: "mi", romanization: "mi", pronunciation: "ミ" },
        ム: { input: "mu", romanization: "mu", pronunciation: "ム" },
        メ: { input: "me", romanization: "me", pronunciation: "メ" },
        モ: { input: "mo", romanization: "mo", pronunciation: "モ" },
      }),
    ...(enableKatakana &&
      enableRowYa && {
        ヤ: { input: "ya", romanization: "ya", pronunciation: "ヤ" },
        ユ: { input: "yu", romanization: "yu", pronunciation: "ユ" },
        ヨ: { input: "yo", romanization: "yo", pronunciation: "ヨ" },
      }),
    ...(enableKatakana &&
      enableRowRa && {
        ラ: { input: "ra", romanization: "ra", pronunciation: "ラ" },
        リ: { input: "ri", romanization: "ri", pronunciation: "リ" },
        ル: { input: "ru", romanization: "ru", pronunciation: "ル" },
        レ: { input: "re", romanization: "re", pronunciation: "レ" },
        ロ: { input: "ro", romanization: "ro", pronunciation: "ロ" },
      }),
    ...(enableKatakana &&
      enableRowWa && {
        ワ: { input: "wa", romanization: "wa", pronunciation: "ワ" },
        ヲ: { input: "wo", romanization: "wo", pronunciation: "ヲ" },
      }),
    ...(enableKatakana &&
      enableRowN && {
        ン: { input: "n", romanization: "n", pronunciation: "ン" },
      }),
  };
}
