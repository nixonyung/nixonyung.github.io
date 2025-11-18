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
}: {
  enableHiragana: boolean;
  enableKatakana: boolean;
  enableMarks: boolean;
  enableYoon: boolean;
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
  // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)
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
      enableMarks &&
      enableRowKa && {
        が: { input: "ga", romanization: "ga", pronunciation: "が" },
        ぎ: { input: "gi", romanization: "gi", pronunciation: "ぎ" },
        ぐ: { input: "gu", romanization: "gu", pronunciation: "ぐ" },
        げ: { input: "ge", romanization: "ge", pronunciation: "げ" },
        ご: { input: "go", romanization: "go", pronunciation: "ご" },
      }),
    ...(enableHiragana &&
      enableRowSa && {
        さ: { input: "sa", romanization: "sa", pronunciation: "さ" },
        し: { input: "shi", romanization: "shi", pronunciation: "し" },
        す: { input: "su", romanization: "su", pronunciation: "す" },
        せ: { input: "se", romanization: "se", pronunciation: "せ" },
        そ: { input: "so", romanization: "so", pronunciation: "そ" },
      }),
    ...(enableHiragana &&
      enableMarks &&
      enableRowSa && {
        ざ: { input: "za", romanization: "za", pronunciation: "ざ" },
        じ: { input: "ji", romanization: "ji", pronunciation: "じ" },
        ず: { input: "zu", romanization: "zu", pronunciation: "ず" },
        ぜ: { input: "ze", romanization: "ze", pronunciation: "ぜ" },
        ぞ: { input: "zo", romanization: "zo", pronunciation: "ぞ" },
      }),
    ...(enableHiragana &&
      enableRowTa && {
        た: { input: "ta", romanization: "ta", pronunciation: "た" },
        ち: { input: "chi", romanization: "chi", pronunciation: "ち" },
        つ: { input: "tsu", romanization: "tsu", pronunciation: "つ" },
        て: { input: "te", romanization: "te", pronunciation: "て" },
        と: { input: "to", romanization: "to", pronunciation: "と" },
      }),
    ...(enableHiragana &&
      enableMarks &&
      enableRowTa && {
        だ: { input: "da", romanization: "da", pronunciation: "だ" },
        ぢ: { input: "ji", romanization: "ji", pronunciation: "ぢ" },
        づ: { input: "zu", romanization: "zu", pronunciation: "づ" },
        で: { input: "de", romanization: "de", pronunciation: "で" },
        ど: { input: "do", romanization: "do", pronunciation: "ど" },
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
      enableMarks &&
      enableRowHa && {
        ば: { input: "ba", romanization: "ba", pronunciation: "ば" },
        び: { input: "bi", romanization: "bi", pronunciation: "び" },
        ぶ: { input: "bu", romanization: "bu", pronunciation: "ぶ" },
        べ: { input: "be", romanization: "be", pronunciation: "べ" },
        ぼ: { input: "bo", romanization: "bo", pronunciation: "ぼ" },
      }),
    ...(enableHiragana &&
      enableMarks &&
      enableRowHa && {
        ぱ: { input: "pa", romanization: "pa", pronunciation: "ぱ" },
        ぴ: { input: "pi", romanization: "pi", pronunciation: "ぴ" },
        ぷ: { input: "pu", romanization: "pu", pronunciation: "ぷ" },
        ぺ: { input: "pe", romanization: "pe", pronunciation: "ぺ" },
        ぽ: { input: "po", romanization: "po", pronunciation: "ぽ" },
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
        を: { input: "o", romanization: "wo", pronunciation: "を" },
      }),
    ...(enableHiragana &&
      enableRowN && {
        ん: { input: "n", romanization: "n", pronunciation: "ん" },
      }),
    ...(enableHiragana &&
      enableRowYa &&
      enableYoon && {
        きゃ: { input: "kya", romanization: "kya", pronunciation: "きゃ" },
        きゅ: { input: "kyu", romanization: "kyu", pronunciation: "きゅ" },
        きょ: { input: "kyo", romanization: "kyo", pronunciation: "きょ" },
        しゃ: { input: "sha", romanization: "sha", pronunciation: "しゃ" },
        しゅ: { input: "shu", romanization: "shu", pronunciation: "しゅ" },
        しょ: { input: "sho", romanization: "sho", pronunciation: "しょ" },
        ちゃ: { input: "cha", romanization: "cha", pronunciation: "ちゃ" },
        ちゅ: { input: "chu", romanization: "chu", pronunciation: "ちゅ" },
        ちょ: { input: "cho", romanization: "cho", pronunciation: "ちょ" },
        にゃ: { input: "nya", romanization: "nya", pronunciation: "にゃ" },
        にゅ: { input: "nyu", romanization: "nyu", pronunciation: "にゅ" },
        にょ: { input: "nyo", romanization: "nyo", pronunciation: "にょ" },
        ひゃ: { input: "hya", romanization: "hya", pronunciation: "ひゃ" },
        ひゅ: { input: "hyu", romanization: "hyu", pronunciation: "ひゅ" },
        ひょ: { input: "hyo", romanization: "hyo", pronunciation: "ひょ" },
        みゃ: { input: "mya", romanization: "mya", pronunciation: "みゃ" },
        みゅ: { input: "myu", romanization: "myu", pronunciation: "みゅ" },
        みょ: { input: "myo", romanization: "myo", pronunciation: "みょ" },
        りゃ: { input: "rya", romanization: "rya", pronunciation: "りゃ" },
        りゅ: { input: "ryu", romanization: "ryu", pronunciation: "りゅ" },
        りょ: { input: "ryo", romanization: "ryo", pronunciation: "りょ" },
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
      enableMarks &&
      enableRowKa && {
        ガ: { input: "ga", romanization: "ga", pronunciation: "ガ" },
        ギ: { input: "gi", romanization: "gi", pronunciation: "ギ" },
        グ: { input: "gu", romanization: "gu", pronunciation: "グ" },
        ゲ: { input: "ge", romanization: "ge", pronunciation: "ゲ" },
        ゴ: { input: "go", romanization: "go", pronunciation: "ゴ" },
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
      enableMarks &&
      enableRowSa && {
        ザ: { input: "za", romanization: "za", pronunciation: "ザ" },
        ジ: { input: "ji", romanization: "ji", pronunciation: "ジ" },
        ズ: { input: "zu", romanization: "zu", pronunciation: "ズ" },
        ゼ: { input: "ze", romanization: "ze", pronunciation: "ゼ" },
        ゾ: { input: "zo", romanization: "zo", pronunciation: "ゾ" },
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
      enableMarks &&
      enableRowTa && {
        ダ: { input: "da", romanization: "da", pronunciation: "ダ" },
        ヂ: { input: "ji", romanization: "ji", pronunciation: "ヂ" },
        ヅ: { input: "zu", romanization: "zu", pronunciation: "ヅ" },
        デ: { input: "de", romanization: "de", pronunciation: "デ" },
        ド: { input: "do", romanization: "do", pronunciation: "ド" },
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
      enableMarks &&
      enableRowHa && {
        バ: { input: "ba", romanization: "ba", pronunciation: "バ" },
        ビ: { input: "bi", romanization: "bi", pronunciation: "ビ" },
        ブ: { input: "bu", romanization: "bu", pronunciation: "ブ" },
        ベ: { input: "be", romanization: "be", pronunciation: "ベ" },
        ボ: { input: "bo", romanization: "bo", pronunciation: "ボ" },
      }),
    ...(enableKatakana &&
      enableMarks &&
      enableRowHa && {
        パ: { input: "pa", romanization: "pa", pronunciation: "パ" },
        ピ: { input: "pi", romanization: "pi", pronunciation: "ピ" },
        プ: { input: "pu", romanization: "pu", pronunciation: "プ" },
        ペ: { input: "pe", romanization: "pe", pronunciation: "ペ" },
        ポ: { input: "po", romanization: "po", pronunciation: "ポ" },
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
        ヲ: { input: "o", romanization: "wo", pronunciation: "ヲ" },
      }),
    ...(enableKatakana &&
      enableRowN && {
        ン: { input: "n", romanization: "n", pronunciation: "ン" },
      }),
    ...(enableHiragana &&
      enableRowYa &&
      enableYoon && {
        キャ: { input: "kya", romanization: "kya", pronunciation: "キャ" },
        キュ: { input: "kyu", romanization: "kyu", pronunciation: "キュ" },
        キョ: { input: "kyo", romanization: "kyo", pronunciation: "キョ" },
        シャ: { input: "sha", romanization: "sha", pronunciation: "シャ" },
        シュ: { input: "shu", romanization: "shu", pronunciation: "シュ" },
        ショ: { input: "sho", romanization: "sho", pronunciation: "ショ" },
        チャ: { input: "cha", romanization: "cha", pronunciation: "チャ" },
        チュ: { input: "chu", romanization: "chu", pronunciation: "チュ" },
        チョ: { input: "cho", romanization: "cho", pronunciation: "チョ" },
        ニャ: { input: "nya", romanization: "nya", pronunciation: "ニャ" },
        ニュ: { input: "nyu", romanization: "nyu", pronunciation: "ニュ" },
        ニョ: { input: "nyo", romanization: "nyo", pronunciation: "ニョ" },
        ヒャ: { input: "hya", romanization: "hya", pronunciation: "ヒャ" },
        ヒュ: { input: "hyu", romanization: "hyu", pronunciation: "ヒュ" },
        ヒョ: { input: "hyo", romanization: "hyo", pronunciation: "ヒョ" },
        ミャ: { input: "mya", romanization: "mya", pronunciation: "ミャ" },
        ミュ: { input: "myu", romanization: "myu", pronunciation: "ミュ" },
        ミョ: { input: "myo", romanization: "myo", pronunciation: "ミョ" },
        リャ: { input: "rya", romanization: "rya", pronunciation: "リャ" },
        リュ: { input: "ryu", romanization: "ryu", pronunciation: "リュ" },
        リョ: { input: "ryo", romanization: "ryo", pronunciation: "リョ" },
      }),
  };
}
