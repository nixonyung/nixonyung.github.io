import { cloneDeep } from "es-toolkit";
import { initSettings } from "../../app.svelte";
import type { Gojuon, JapaneseWord, Keymap, Letter } from "../../types";

export const jp = new (class {
  SETTINGS_SCHEMA = {
    mode: { paramKey: "mode", defaultValue: <"Typing" | "Gojuon Table" | "Flashcards">"Typing" },
  };
  GOJUON_SETTINGS_SCHEMA = {
    enableHiragana: { paramKey: "hiragana", defaultValue: true },
    enableKatakana: { paramKey: "katakana", defaultValue: true },
    enableDiacritics: { paramKey: "diacritics", defaultValue: true },
    enableYoon: { paramKey: "yoon", defaultValue: true },

    enableRowA: { paramKey: "rowA", defaultValue: true },
    enableRowKa: { paramKey: "rowKa", defaultValue: true },
    enableRowSa: { paramKey: "rowSa", defaultValue: true },
    enableRowTa: { paramKey: "rowTa", defaultValue: true },
    enableRowNa: { paramKey: "rowNa", defaultValue: true },
    enableRowHa: { paramKey: "rowHa", defaultValue: true },
    enableRowMa: { paramKey: "rowMa", defaultValue: true },
    enableRowYa: { paramKey: "rowYa", defaultValue: true },
    enableRowRa: { paramKey: "rowRa", defaultValue: true },
    enableRowWa: { paramKey: "rowWa", defaultValue: true },
    enableRowN: { paramKey: "rowN", defaultValue: true },

    showOrigins: { paramKey: "gojuonOrigins", defaultValue: false },
  };
  settings = $state(initSettings(this.SETTINGS_SCHEMA));
  gojuonSettings = $state(initSettings(this.GOJUON_SETTINGS_SCHEMA));

  keymap: Keymap = {
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

  gojuons = $derived.by(() => {
    const letters: Gojuon[] = [];

    // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)

    // 平假名 Hiragana
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowA) {
      letters.push(
        ...[
          { letter: "あ", romanization: "a", gojuonPosition: { row: 0, col: 0 } },
          { letter: "い", romanization: "i", gojuonPosition: { row: 0, col: 1 } },
          { letter: "う", romanization: "u", gojuonPosition: { row: 0, col: 2 } },
          { letter: "え", romanization: "e", gojuonPosition: { row: 0, col: 3 } },
          { letter: "お", romanization: "o", gojuonPosition: { row: 0, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowKa) {
      letters.push(
        ...[
          { letter: "か", romanization: "ka", gojuonPosition: { row: 1, col: 0 } },
          { letter: "き", romanization: "ki", gojuonPosition: { row: 1, col: 1 } },
          { letter: "く", romanization: "ku", gojuonPosition: { row: 1, col: 2 } },
          { letter: "け", romanization: "ke", gojuonPosition: { row: 1, col: 3 } },
          { letter: "こ", romanization: "ko", gojuonPosition: { row: 1, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowSa) {
      letters.push(
        ...[
          { letter: "さ", romanization: "sa", gojuonPosition: { row: 2, col: 0 } },
          { letter: "し", romanization: "shi", gojuonPosition: { row: 2, col: 1 } },
          { letter: "す", romanization: "su", gojuonPosition: { row: 2, col: 2 } },
          { letter: "せ", romanization: "se", gojuonPosition: { row: 2, col: 3 } },
          { letter: "そ", romanization: "so", gojuonPosition: { row: 2, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowTa) {
      letters.push(
        ...[
          { letter: "た", romanization: "ta", gojuonPosition: { row: 3, col: 0 } },
          { letter: "ち", romanization: "chi", gojuonPosition: { row: 3, col: 1 } },
          { letter: "つ", romanization: "tsu", gojuonPosition: { row: 3, col: 2 } },
          { letter: "て", romanization: "te", gojuonPosition: { row: 3, col: 3 } },
          { letter: "と", romanization: "to", gojuonPosition: { row: 3, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowNa) {
      letters.push(
        ...[
          { letter: "な", romanization: "na", gojuonPosition: { row: 4, col: 0 } },
          { letter: "に", romanization: "ni", gojuonPosition: { row: 4, col: 1 } },
          { letter: "ぬ", romanization: "nu", gojuonPosition: { row: 4, col: 2 } },
          { letter: "ね", romanization: "ne", gojuonPosition: { row: 4, col: 3 } },
          { letter: "の", romanization: "no", gojuonPosition: { row: 4, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowHa) {
      letters.push(
        ...[
          { letter: "は", romanization: "ha", gojuonPosition: { row: 5, col: 0 } },
          { letter: "ひ", romanization: "hi", gojuonPosition: { row: 5, col: 1 } },
          { letter: "ふ", romanization: "fu", gojuonPosition: { row: 5, col: 2 } },
          { letter: "へ", romanization: "he", gojuonPosition: { row: 5, col: 3 } },
          { letter: "ほ", romanization: "ho", gojuonPosition: { row: 5, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowMa) {
      letters.push(
        ...[
          { letter: "ま", romanization: "ma", gojuonPosition: { row: 6, col: 0 } },
          { letter: "み", romanization: "mi", gojuonPosition: { row: 6, col: 1 } },
          { letter: "む", romanization: "mu", gojuonPosition: { row: 6, col: 2 } },
          { letter: "め", romanization: "me", gojuonPosition: { row: 6, col: 3 } },
          { letter: "も", romanization: "mo", gojuonPosition: { row: 6, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowYa) {
      letters.push(
        ...[
          { letter: "や", romanization: "ya", gojuonPosition: { row: 7, col: 0 } },
          { letter: "ゆ", romanization: "yu", gojuonPosition: { row: 7, col: 2 } },
          { letter: "よ", romanization: "yo", gojuonPosition: { row: 7, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowRa) {
      letters.push(
        ...[
          { letter: "ら", romanization: "ra", gojuonPosition: { row: 8, col: 0 } },
          { letter: "り", romanization: "ri", gojuonPosition: { row: 8, col: 1 } },
          { letter: "る", romanization: "ru", gojuonPosition: { row: 8, col: 2 } },
          { letter: "れ", romanization: "re", gojuonPosition: { row: 8, col: 3 } },
          { letter: "ろ", romanization: "ro", gojuonPosition: { row: 8, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowWa) {
      letters.push(
        ...[
          { letter: "わ", romanization: "wa", gojuonPosition: { row: 9, col: 0 } },
          { letter: "を", romanization: "o", gojuonPosition: { row: 9, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowN) {
      letters.push(...[{ letter: "ん", romanization: "n", gojuonPosition: { row: 10, col: 0 } }]);
    }

    // 片假名 Katakana
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowA) {
      letters.push(
        ...[
          { letter: "ア", romanization: "a", gojuonPosition: { row: 0, col: 0 } },
          { letter: "イ", romanization: "i", gojuonPosition: { row: 0, col: 1 } },
          { letter: "ウ", romanization: "u", gojuonPosition: { row: 0, col: 2 } },
          { letter: "エ", romanization: "e", gojuonPosition: { row: 0, col: 3 } },
          { letter: "オ", romanization: "o", gojuonPosition: { row: 0, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowKa) {
      letters.push(
        ...[
          { letter: "カ", romanization: "ka", gojuonPosition: { row: 1, col: 0 } },
          { letter: "キ", romanization: "ki", gojuonPosition: { row: 1, col: 1 } },
          { letter: "ク", romanization: "ku", gojuonPosition: { row: 1, col: 2 } },
          { letter: "ケ", romanization: "ke", gojuonPosition: { row: 1, col: 3 } },
          { letter: "コ", romanization: "ko", gojuonPosition: { row: 1, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowSa) {
      letters.push(
        ...[
          { letter: "サ", romanization: "sa", gojuonPosition: { row: 2, col: 0 } },
          { letter: "シ", romanization: "shi", gojuonPosition: { row: 2, col: 1 } },
          { letter: "ス", romanization: "su", gojuonPosition: { row: 2, col: 2 } },
          { letter: "セ", romanization: "se", gojuonPosition: { row: 2, col: 3 } },
          { letter: "ソ", romanization: "so", gojuonPosition: { row: 2, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowTa) {
      letters.push(
        ...[
          { letter: "タ", romanization: "ta", gojuonPosition: { row: 3, col: 0 } },
          { letter: "チ", romanization: "chi", gojuonPosition: { row: 3, col: 1 } },
          { letter: "ツ", romanization: "tsu", gojuonPosition: { row: 3, col: 2 } },
          { letter: "テ", romanization: "te", gojuonPosition: { row: 3, col: 3 } },
          { letter: "ト", romanization: "to", gojuonPosition: { row: 3, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowNa) {
      letters.push(
        ...[
          { letter: "ナ", romanization: "na", gojuonPosition: { row: 4, col: 0 } },
          { letter: "ニ", romanization: "ni", gojuonPosition: { row: 4, col: 1 } },
          { letter: "ヌ", romanization: "nu", gojuonPosition: { row: 4, col: 2 } },
          { letter: "ネ", romanization: "ne", gojuonPosition: { row: 4, col: 3 } },
          { letter: "ノ", romanization: "no", gojuonPosition: { row: 4, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowHa) {
      letters.push(
        ...[
          { letter: "ハ", romanization: "ha", gojuonPosition: { row: 5, col: 0 } },
          { letter: "ヒ", romanization: "hi", gojuonPosition: { row: 5, col: 1 } },
          { letter: "フ", romanization: "fu", gojuonPosition: { row: 5, col: 2 } },
          { letter: "ヘ", romanization: "he", gojuonPosition: { row: 5, col: 3 } },
          { letter: "ホ", romanization: "ho", gojuonPosition: { row: 5, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowMa) {
      letters.push(
        ...[
          { letter: "マ", romanization: "ma", gojuonPosition: { row: 6, col: 0 } },
          { letter: "ミ", romanization: "mi", gojuonPosition: { row: 6, col: 1 } },
          { letter: "ム", romanization: "mu", gojuonPosition: { row: 6, col: 2 } },
          { letter: "メ", romanization: "me", gojuonPosition: { row: 6, col: 3 } },
          { letter: "モ", romanization: "mo", gojuonPosition: { row: 6, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowYa) {
      letters.push(
        ...[
          { letter: "ヤ", romanization: "ya", gojuonPosition: { row: 7, col: 0 } },
          { letter: "ユ", romanization: "yu", gojuonPosition: { row: 7, col: 2 } },
          { letter: "ヨ", romanization: "yo", gojuonPosition: { row: 7, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowRa) {
      letters.push(
        ...[
          { letter: "ラ", romanization: "ra", gojuonPosition: { row: 8, col: 0 } },
          { letter: "リ", romanization: "ri", gojuonPosition: { row: 8, col: 1 } },
          { letter: "ル", romanization: "ru", gojuonPosition: { row: 8, col: 2 } },
          { letter: "レ", romanization: "re", gojuonPosition: { row: 8, col: 3 } },
          { letter: "ロ", romanization: "ro", gojuonPosition: { row: 8, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowWa) {
      letters.push(
        ...[
          { letter: "ワ", romanization: "wa", gojuonPosition: { row: 9, col: 0 } },
          { letter: "ヲ", romanization: "o", gojuonPosition: { row: 9, col: 4 } },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowN) {
      letters.push(...[{ letter: "ン", romanization: "n", gojuonPosition: { row: 10, col: 0 } }]);
    }

    return letters;
  });

  letters = $derived.by(() => {
    // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)

    // extend from Gojuon
    const letters: Letter[] = cloneDeep(this.gojuons);

    // Hiragana - 濁音 Dakuten and 半濁音 Handakuten
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowKa) {
      letters.push(
        ...[
          { letter: "が", romanization: "ga" },
          { letter: "ぎ", romanization: "gi" },
          { letter: "ぐ", romanization: "gu" },
          { letter: "げ", romanization: "ge" },
          { letter: "ご", romanization: "go" },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowSa) {
      letters.push(
        ...[
          { letter: "ざ", romanization: "za" },
          { letter: "じ", romanization: "ji" },
          { letter: "ず", romanization: "zu" },
          { letter: "ぜ", romanization: "ze" },
          { letter: "ぞ", romanization: "zo" },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowTa) {
      letters.push(
        ...[
          { letter: "だ", romanization: "da" },
          { letter: "ぢ", romanization: "ji" },
          { letter: "づ", romanization: "zu" },
          { letter: "で", romanization: "de" },
          { letter: "ど", romanization: "do" },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.push(
        ...[
          { letter: "ば", romanization: "ba" },
          { letter: "び", romanization: "bi" },
          { letter: "ぶ", romanization: "bu" },
          { letter: "べ", romanization: "be" },
          { letter: "ぼ", romanization: "bo" },
        ],
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.push(
        ...[
          { letter: "ぱ", romanization: "pa" },
          { letter: "ぴ", romanization: "pi" },
          { letter: "ぷ", romanization: "pu" },
          { letter: "ぺ", romanization: "pe" },
          { letter: "ぽ", romanization: "po" },
        ],
      );
    }

    // Hiragana - 拗音 Yoon
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowYa && this.gojuonSettings.enableYoon) {
      letters.push(
        ...[
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
        ],
      );
    }

    // Katakana - 濁音 Dakuten and 半濁音 Handakuten
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowKa) {
      letters.push(
        ...[
          { letter: "ガ", romanization: "ga" },
          { letter: "ギ", romanization: "gi" },
          { letter: "グ", romanization: "gu" },
          { letter: "ゲ", romanization: "ge" },
          { letter: "ゴ", romanization: "go" },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowSa) {
      letters.push(
        ...[
          { letter: "ザ", romanization: "za" },
          { letter: "ジ", romanization: "ji" },
          { letter: "ズ", romanization: "zu" },
          { letter: "ゼ", romanization: "ze" },
          { letter: "ゾ", romanization: "zo" },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowTa) {
      letters.push(
        ...[
          { letter: "ダ", romanization: "da" },
          { letter: "ヂ", romanization: "ji" },
          { letter: "ヅ", romanization: "zu" },
          { letter: "デ", romanization: "de" },
          { letter: "ド", romanization: "do" },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.push(
        ...[
          { letter: "バ", romanization: "ba" },
          { letter: "ビ", romanization: "bi" },
          { letter: "ブ", romanization: "bu" },
          { letter: "ベ", romanization: "be" },
          { letter: "ボ", romanization: "bo" },
        ],
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.push(
        ...[
          { letter: "パ", romanization: "pa" },
          { letter: "ピ", romanization: "pi" },
          { letter: "プ", romanization: "pu" },
          { letter: "ペ", romanization: "pe" },
          { letter: "ポ", romanization: "po" },
        ],
      );
    }

    // Katakana - 拗音 Yoon
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowYa && this.gojuonSettings.enableYoon) {
      letters.push(
        ...[
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
        ],
      );
    }

    return letters;
  });

  words: JapaneseWord[] = $derived.by(() => {
    return [
      // pronouns

      { word: "私", hiraganaForm: "わたし", romanization: "watashi", meaning: "I" },
      { word: "僕", hiraganaForm: "ぼく", katakanaForm: "ボク", romanization: "boku", meaning: "I (male)" },
      { word: "俺", hiraganaForm: "おれ", katakanaForm: "オレ", romanization: "ore", meaning: "I (male, arrogantly)" },

      { word: "君", hiraganaForm: "きみ", romanization: "kimi", meaning: "you (similar status)" },
      { word: "貴方", aliases: ["貴女", "貴男"], hiraganaForm: "あなた", romanization: "anata", meaning: "you (similar status, informal)" },

      { word: "彼氏", hiraganaForm: "かれし", romanization: "kareshi", meaning: "he / boyfriend" },
      { word: "彼女", hiraganaForm: "かのじょ", romanization: "kanojo", meaning: "she / girlfriend" },
      // TODO: he, she, it, we, they, what

      { word: "何", hiraganaForm: "なに", katakanaForm: "ナニ", romanization: "nani", meaning: "what / that thing" },

      { word: "自分", hiraganaForm: "じぶん", romanization: "jibun", meaning: "myself, yourself, oneself, himself, herself" },

      // nouns - people - generic

      { word: "成人", hiraganaForm: "せいじん", romanization: "seijin", meaning: "adult" },
      { word: "大人", hiraganaForm: "おとな", romanization: "otona", meaning: "grown-up" },
      { word: "子供", aliases: ["子ども"], hiraganaForm: "こども", romanization: "kodomo", meaning: "child / children" },

      { word: "男性", hiraganaForm: "だんせい", romanization: "dansei", meaning: "male" },
      { word: "男", hiraganaForm: "おとこ", romanization: "otoko", meaning: "man" },
      { word: "少年", hiraganaForm: "しょうねん", romanization: "shounen", meaning: "young man" },

      { word: "女性", hiraganaForm: "じょせい", romanization: "josei", meaning: "female" },
      { word: "女子", hiraganaForm: "じょし", romanization: "joshi", meaning: "woman" },
      { word: "乙女", aliases: ["少女"], hiraganaForm: "おとめ", romanization: "otome", meaning: "young lady" },

      // nouns - people - family members

      { word: "父さん", hiraganaForm: "とうさん", romanization: "tousan", meaning: "father (calling him)" },
      { word: "お父さん", hiraganaForm: "おとうさん", romanization: "otousan", meaning: "father (referring to him or someone else's)" },
      { word: "父", hiraganaForm: "ちち", romanization: "chichi", meaning: "my father (referring to him)" },
      { word: "老爺", hiraganaForm: "おやじ", romanization: "oyaji", meaning: "father (calling him, used by old-fashioned men)" },

      { word: "母さん", hiraganaForm: "かあさん", romanization: "kaasan", meaning: "mother (calling her)" },
      { word: "お母さん", hiraganaForm: "おかあさん", romanization: "okaasan", meaning: "mother (referring to her or someone else's)" },
      { word: "母", hiraganaForm: "はは", romanization: "haha", meaning: "my mother (referring to her)" },
      { word: "お袋", hiraganaForm: "おふくろ", romanization: "ofukuro", meaning: "mother (calling her, used by old-fashioned men)" },

      { word: "兄さん", hiraganaForm: "にいさん", romanization: "niisan", meaning: "elder brother (calling him)" },
      { word: "お兄さん", hiraganaForm: "おにいさん", romanization: "oniisan", meaning: "elder brother (referring to him or someone else's)" },
      { word: "兄", hiraganaForm: "あに", romanization: "ani", meaning: "my elder brother (referring to him)" },

      { word: "姉さん", hiraganaForm: "ねえさん", romanization: "neesan", meaning: "elder sister (calling her)" },
      { word: "お姉さん", hiraganaForm: "おねえさん", romanization: "oneesan", meaning: "elder sister (referring to her or someone else's" },
      { word: "姉", hiraganaForm: "あね", romanization: "ane", meaning: "my elder sister (referring to her)" },

      { word: "弟さん", hiraganaForm: "おとうとさん", romanization: "otoutosan", meaning: "younger brother (referring to him or someone else's" },
      { word: "弟", hiraganaForm: "おとうと", romanization: "otouto", meaning: "my younger brother (referring to him)" },

      { word: "妹さん", hiraganaForm: "いもうとさん", romanization: "imoutosan", meaning: "younger sister (referring to her or someone else's)" },
      { word: "妹", hiraganaForm: "いもうと", romanization: "imouto", meaning: "my younger sister (referring to her)" },

      // TODO: child, son, daughter

      // nouns - people - close ones

      { word: "友人", hiraganaForm: "ゆうじん", romanization: "yuujin", meaning: "friend" },
      { word: "朋友", hiraganaForm: "ほうゆう", romanization: "houyuu", meaning: "friend" },
      { word: "友達", hiraganaForm: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
      // TODO: aniki

      // nouns - people - fellows

      { word: "仲間", hiraganaForm: "なかま", romanization: "nakama", meaning: "fellow / companion (informal)" },
      { word: "同僚", hiraganaForm: "どうりょう", romanization: "douryou", meaning: "colleague (in similar gojuonPosition with you)" },
      { word: "主管", hiraganaForm: "しゅかん", romanization: "shukan", meaning: "manager" },
      { word: "主任", hiraganaForm: "しゅにん", romanization: "shunin", meaning: "director" },
      { word: "監督", hiraganaForm: "かんとく", romanization: "kantoku", meaning: "supervisor" },
      { word: "部長", hiraganaForm: "ぶちょう", romanization: "buchou", meaning: "boss" },
      { word: "社長", hiraganaForm: "しゃちょう", romanization: "shachou", meaning: "president" },

      // TODO: directions

      // TODO: places

      // TODO: colors

      // TODO: numbers

      // TODO: time

      // intangible nouns

      { word: "名前", hiraganaForm: "なまえ", romanization: "namae", meaning: "name" },
      { word: "家族", hiraganaForm: "かぞく", romanization: "kazoku", meaning: "extended family" },

      // verbs
      // TODO: godan vs ichidan

      { word: "食", hiraganaForm: "たべる", romanization: "taberu", meaning: "eat" },
      { word: "飲", aliases: ["呑む"], hiraganaForm: "のむ", romanization: "nomu", meaning: "drink" },
      { word: "行", hiraganaForm: "いく", romanization: "iku", meaning: "go" },
    ];
  });
})();
