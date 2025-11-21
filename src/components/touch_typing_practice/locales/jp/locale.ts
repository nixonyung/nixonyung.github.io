import type { Dictionary, Keymap } from "../locale";

export const keymap: Keymap = {
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
}): Dictionary {
  // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)
  return {
    // 平假名 Hiragana
    ...(enableHiragana &&
      enableRowA && {
        あ: { input: "a", romanization: "a", pronunciation: "あ", gojuonPosition: { row: 0, col: 0 } },
        い: { input: "i", romanization: "i", pronunciation: "い", gojuonPosition: { row: 0, col: 1 } },
        う: { input: "u", romanization: "u", pronunciation: "う", gojuonPosition: { row: 0, col: 2 } },
        え: { input: "e", romanization: "e", pronunciation: "え", gojuonPosition: { row: 0, col: 3 } },
        お: { input: "o", romanization: "o", pronunciation: "お", gojuonPosition: { row: 0, col: 4 } },
      }),
    ...(enableHiragana &&
      enableRowKa && {
        か: { input: "ka", romanization: "ka", pronunciation: "か", gojuonPosition: { row: 1, col: 0 } },
        き: { input: "ki", romanization: "ki", pronunciation: "き", gojuonPosition: { row: 1, col: 1 } },
        く: { input: "ku", romanization: "ku", pronunciation: "く", gojuonPosition: { row: 1, col: 2 } },
        け: { input: "ke", romanization: "ke", pronunciation: "け", gojuonPosition: { row: 1, col: 3 } },
        こ: { input: "ko", romanization: "ko", pronunciation: "こ", gojuonPosition: { row: 1, col: 4 } },
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
        さ: { input: "sa", romanization: "sa", pronunciation: "さ", gojuonPosition: { row: 2, col: 0 } },
        し: { input: "shi", romanization: "shi", pronunciation: "し", gojuonPosition: { row: 2, col: 1 } },
        す: { input: "su", romanization: "su", pronunciation: "す", gojuonPosition: { row: 2, col: 2 } },
        せ: { input: "se", romanization: "se", pronunciation: "せ", gojuonPosition: { row: 2, col: 3 } },
        そ: { input: "so", romanization: "so", pronunciation: "そ", gojuonPosition: { row: 2, col: 4 } },
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
        た: { input: "ta", romanization: "ta", pronunciation: "た", gojuonPosition: { row: 3, col: 0 } },
        ち: { input: "chi", romanization: "chi", pronunciation: "ち", gojuonPosition: { row: 3, col: 1 } },
        つ: { input: "tsu", romanization: "tsu", pronunciation: "つ", gojuonPosition: { row: 3, col: 2 } },
        て: { input: "te", romanization: "te", pronunciation: "て", gojuonPosition: { row: 3, col: 3 } },
        と: { input: "to", romanization: "to", pronunciation: "と", gojuonPosition: { row: 3, col: 4 } },
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
        な: { input: "na", romanization: "na", pronunciation: "な", gojuonPosition: { row: 4, col: 0 } },
        に: { input: "ni", romanization: "ni", pronunciation: "に", gojuonPosition: { row: 4, col: 1 } },
        ぬ: { input: "nu", romanization: "nu", pronunciation: "ぬ", gojuonPosition: { row: 4, col: 2 } },
        ね: { input: "ne", romanization: "ne", pronunciation: "ね", gojuonPosition: { row: 4, col: 3 } },
        の: { input: "no", romanization: "no", pronunciation: "の", gojuonPosition: { row: 4, col: 4 } },
      }),
    ...(enableHiragana &&
      enableRowHa && {
        は: { input: "ha", romanization: "ha", pronunciation: "は", gojuonPosition: { row: 5, col: 0 } },
        ひ: { input: "hi", romanization: "hi", pronunciation: "ひ", gojuonPosition: { row: 5, col: 1 } },
        ふ: { input: "fu", romanization: "fu", pronunciation: "ふ", gojuonPosition: { row: 5, col: 2 } },
        へ: { input: "he", romanization: "he", pronunciation: "へ", gojuonPosition: { row: 5, col: 3 } },
        ほ: { input: "ho", romanization: "ho", pronunciation: "ほ", gojuonPosition: { row: 5, col: 4 } },
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
        ま: { input: "ma", romanization: "ma", pronunciation: "ま", gojuonPosition: { row: 6, col: 0 } },
        み: { input: "mi", romanization: "mi", pronunciation: "み", gojuonPosition: { row: 6, col: 1 } },
        む: { input: "mu", romanization: "mu", pronunciation: "む", gojuonPosition: { row: 6, col: 2 } },
        め: { input: "me", romanization: "me", pronunciation: "め", gojuonPosition: { row: 6, col: 3 } },
        も: { input: "mo", romanization: "mo", pronunciation: "も", gojuonPosition: { row: 6, col: 4 } },
      }),
    ...(enableHiragana &&
      enableRowYa && {
        や: { input: "ya", romanization: "ya", pronunciation: "や", gojuonPosition: { row: 7, col: 0 } },
        ゆ: { input: "yu", romanization: "yu", pronunciation: "ゆ", gojuonPosition: { row: 7, col: 2 } },
        よ: { input: "yo", romanization: "yo", pronunciation: "よ", gojuonPosition: { row: 7, col: 4 } },
      }),
    ...(enableHiragana &&
      enableRowRa && {
        ら: { input: "ra", romanization: "ra", pronunciation: "ら", gojuonPosition: { row: 8, col: 0 } },
        り: { input: "ri", romanization: "ri", pronunciation: "り", gojuonPosition: { row: 8, col: 1 } },
        る: { input: "ru", romanization: "ru", pronunciation: "る", gojuonPosition: { row: 8, col: 2 } },
        れ: { input: "re", romanization: "re", pronunciation: "れ", gojuonPosition: { row: 8, col: 3 } },
        ろ: { input: "ro", romanization: "ro", pronunciation: "ろ", gojuonPosition: { row: 8, col: 4 } },
      }),
    ...(enableHiragana &&
      enableRowWa && {
        わ: { input: "wa", romanization: "wa", pronunciation: "わ", gojuonPosition: { row: 9, col: 0 } },
        を: { input: "o", romanization: "wo", pronunciation: "を", gojuonPosition: { row: 9, col: 4 } },
      }),
    ...(enableHiragana &&
      enableRowN && {
        ん: { input: "n", romanization: "n", pronunciation: "ん", gojuonPosition: { row: 10, col: 0 } },
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
        ア: { input: "a", romanization: "a", pronunciation: "ア", gojuonPosition: { row: 0, col: 0 } },
        イ: { input: "i", romanization: "i", pronunciation: "イ", gojuonPosition: { row: 0, col: 1 } },
        ウ: { input: "u", romanization: "u", pronunciation: "ウ", gojuonPosition: { row: 0, col: 2 } },
        エ: { input: "e", romanization: "e", pronunciation: "エ", gojuonPosition: { row: 0, col: 3 } },
        オ: { input: "o", romanization: "o", pronunciation: "オ", gojuonPosition: { row: 0, col: 4 } },
      }),
    ...(enableKatakana &&
      enableRowKa && {
        カ: { input: "ka", romanization: "ka", pronunciation: "カ", gojuonPosition: { row: 1, col: 0 } },
        キ: { input: "ki", romanization: "ki", pronunciation: "キ", gojuonPosition: { row: 1, col: 1 } },
        ク: { input: "ku", romanization: "ku", pronunciation: "ク", gojuonPosition: { row: 1, col: 2 } },
        ケ: { input: "ke", romanization: "ke", pronunciation: "ケ", gojuonPosition: { row: 1, col: 3 } },
        コ: { input: "ko", romanization: "ko", pronunciation: "コ", gojuonPosition: { row: 1, col: 4 } },
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
        サ: { input: "sa", romanization: "sa", pronunciation: "サ", gojuonPosition: { row: 2, col: 0 } },
        シ: { input: "shi", romanization: "shi", pronunciation: "シ", gojuonPosition: { row: 2, col: 1 } },
        ス: { input: "su", romanization: "su", pronunciation: "ス", gojuonPosition: { row: 2, col: 2 } },
        セ: { input: "se", romanization: "se", pronunciation: "セ", gojuonPosition: { row: 2, col: 3 } },
        ソ: { input: "so", romanization: "so", pronunciation: "ソ", gojuonPosition: { row: 2, col: 4 } },
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
        タ: { input: "ta", romanization: "ta", pronunciation: "タ", gojuonPosition: { row: 3, col: 0 } },
        チ: { input: "chi", romanization: "chi", pronunciation: "チ", gojuonPosition: { row: 3, col: 1 } },
        ツ: { input: "tsu", romanization: "tsu", pronunciation: "ツ", gojuonPosition: { row: 3, col: 2 } },
        テ: { input: "te", romanization: "te", pronunciation: "テ", gojuonPosition: { row: 3, col: 3 } },
        ト: { input: "to", romanization: "to", pronunciation: "ト", gojuonPosition: { row: 3, col: 4 } },
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
        ナ: { input: "na", romanization: "na", pronunciation: "ナ", gojuonPosition: { row: 4, col: 0 } },
        ニ: { input: "ni", romanization: "ni", pronunciation: "ニ", gojuonPosition: { row: 4, col: 1 } },
        ヌ: { input: "nu", romanization: "nu", pronunciation: "ヌ", gojuonPosition: { row: 4, col: 2 } },
        ネ: { input: "ne", romanization: "ne", pronunciation: "ネ", gojuonPosition: { row: 4, col: 3 } },
        ノ: { input: "no", romanization: "no", pronunciation: "ノ", gojuonPosition: { row: 4, col: 4 } },
      }),
    ...(enableKatakana &&
      enableRowHa && {
        ハ: { input: "ha", romanization: "ha", pronunciation: "ハ", gojuonPosition: { row: 5, col: 0 } },
        ヒ: { input: "hi", romanization: "hi", pronunciation: "ヒ", gojuonPosition: { row: 5, col: 1 } },
        フ: { input: "fu", romanization: "fu", pronunciation: "フ", gojuonPosition: { row: 5, col: 2 } },
        ヘ: { input: "he", romanization: "he", pronunciation: "ヘ", gojuonPosition: { row: 5, col: 3 } },
        ホ: { input: "ho", romanization: "ho", pronunciation: "ホ", gojuonPosition: { row: 5, col: 4 } },
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
        マ: { input: "ma", romanization: "ma", pronunciation: "マ", gojuonPosition: { row: 6, col: 0 } },
        ミ: { input: "mi", romanization: "mi", pronunciation: "ミ", gojuonPosition: { row: 6, col: 1 } },
        ム: { input: "mu", romanization: "mu", pronunciation: "ム", gojuonPosition: { row: 6, col: 2 } },
        メ: { input: "me", romanization: "me", pronunciation: "メ", gojuonPosition: { row: 6, col: 3 } },
        モ: { input: "mo", romanization: "mo", pronunciation: "モ", gojuonPosition: { row: 6, col: 4 } },
      }),
    ...(enableKatakana &&
      enableRowYa && {
        ヤ: { input: "ya", romanization: "ya", pronunciation: "ヤ", gojuonPosition: { row: 7, col: 0 } },
        ユ: { input: "yu", romanization: "yu", pronunciation: "ユ", gojuonPosition: { row: 7, col: 2 } },
        ヨ: { input: "yo", romanization: "yo", pronunciation: "ヨ", gojuonPosition: { row: 7, col: 4 } },
      }),
    ...(enableKatakana &&
      enableRowRa && {
        ラ: { input: "ra", romanization: "ra", pronunciation: "ラ", gojuonPosition: { row: 8, col: 0 } },
        リ: { input: "ri", romanization: "ri", pronunciation: "リ", gojuonPosition: { row: 8, col: 1 } },
        ル: { input: "ru", romanization: "ru", pronunciation: "ル", gojuonPosition: { row: 8, col: 2 } },
        レ: { input: "re", romanization: "re", pronunciation: "レ", gojuonPosition: { row: 8, col: 3 } },
        ロ: { input: "ro", romanization: "ro", pronunciation: "ロ", gojuonPosition: { row: 8, col: 4 } },
      }),
    ...(enableKatakana &&
      enableRowWa && {
        ワ: { input: "wa", romanization: "wa", pronunciation: "ワ", gojuonPosition: { row: 9, col: 0 } },
        ヲ: { input: "o", romanization: "wo", pronunciation: "ヲ", gojuonPosition: { row: 9, col: 4 } },
      }),
    ...(enableKatakana &&
      enableRowN && {
        ン: { input: "n", romanization: "n", pronunciation: "ン", gojuonPosition: { row: 10, col: 0 } },
      }),
    ...(enableKatakana &&
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
