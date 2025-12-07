import { cloneDeep } from "es-toolkit";
import { initSettings } from "../../../../lib/settings.svelte";
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
  FLASHCARD_SETTINGS_SCHEMA = {
    enablePronouns: { paramKey: "pronouns", defaultValue: true },
    enableNounsPeopleGeneric: { paramKey: "genericPeople", defaultValue: true },
    enableNounsPeopleFamily: { paramKey: "family", defaultValue: true },
    enableNounsPeopleFellows: { paramKey: "fellows", defaultValue: true },
    enableNounsTime: { paramKey: "time", defaultValue: true },
    enableNounsIntangible: { paramKey: "intangible", defaultValue: true },
    enableVerbsActions: { paramKey: "actions", defaultValue: true },
    enableInterjections: { paramKey: "interjections", defaultValue: true },

    enableGodanVerbs: { paramKey: "godan", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidan", defaultValue: true },
  };
  settings = $state(initSettings(this.SETTINGS_SCHEMA));
  gojuonSettings = $state(initSettings(this.GOJUON_SETTINGS_SCHEMA));
  flashcardSettings = $state(initSettings(this.FLASHCARD_SETTINGS_SCHEMA));

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
    // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)

    const gojuons: Gojuon[] = [];

    // 平假名 Hiragana
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowA) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "あ", romanization: "a", gojuonPosition: { row: 0, col: 0 } },
        { letter: "い", romanization: "i", gojuonPosition: { row: 0, col: 1 } },
        { letter: "う", romanization: "u", gojuonPosition: { row: 0, col: 2 } },
        { letter: "え", romanization: "e", gojuonPosition: { row: 0, col: 3 } },
        { letter: "お", romanization: "o", gojuonPosition: { row: 0, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowKa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "か", romanization: "ka", gojuonPosition: { row: 1, col: 0 } },
        { letter: "き", romanization: "ki", gojuonPosition: { row: 1, col: 1 } },
        { letter: "く", romanization: "ku", gojuonPosition: { row: 1, col: 2 } },
        { letter: "け", romanization: "ke", gojuonPosition: { row: 1, col: 3 } },
        { letter: "こ", romanization: "ko", gojuonPosition: { row: 1, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowSa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "さ", romanization: "sa", gojuonPosition: { row: 2, col: 0 } },
        { letter: "し", romanization: "shi", gojuonPosition: { row: 2, col: 1 } },
        { letter: "す", romanization: "su", gojuonPosition: { row: 2, col: 2 } },
        { letter: "せ", romanization: "se", gojuonPosition: { row: 2, col: 3 } },
        { letter: "そ", romanization: "so", gojuonPosition: { row: 2, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowTa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "た", romanization: "ta", gojuonPosition: { row: 3, col: 0 } },
        { letter: "ち", romanization: "chi", gojuonPosition: { row: 3, col: 1 } },
        { letter: "つ", romanization: "tsu", gojuonPosition: { row: 3, col: 2 } },
        { letter: "て", romanization: "te", gojuonPosition: { row: 3, col: 3 } },
        { letter: "と", romanization: "to", gojuonPosition: { row: 3, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowNa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "な", romanization: "na", gojuonPosition: { row: 4, col: 0 } },
        { letter: "に", romanization: "ni", gojuonPosition: { row: 4, col: 1 } },
        { letter: "ぬ", romanization: "nu", gojuonPosition: { row: 4, col: 2 } },
        { letter: "ね", romanization: "ne", gojuonPosition: { row: 4, col: 3 } },
        { letter: "の", romanization: "no", gojuonPosition: { row: 4, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowHa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "は", romanization: "ha", gojuonPosition: { row: 5, col: 0 } },
        { letter: "ひ", romanization: "hi", gojuonPosition: { row: 5, col: 1 } },
        { letter: "ふ", romanization: "fu", gojuonPosition: { row: 5, col: 2 } },
        { letter: "へ", romanization: "he", gojuonPosition: { row: 5, col: 3 } },
        { letter: "ほ", romanization: "ho", gojuonPosition: { row: 5, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowMa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ま", romanization: "ma", gojuonPosition: { row: 6, col: 0 } },
        { letter: "み", romanization: "mi", gojuonPosition: { row: 6, col: 1 } },
        { letter: "む", romanization: "mu", gojuonPosition: { row: 6, col: 2 } },
        { letter: "め", romanization: "me", gojuonPosition: { row: 6, col: 3 } },
        { letter: "も", romanization: "mo", gojuonPosition: { row: 6, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowYa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "や", romanization: "ya", gojuonPosition: { row: 7, col: 0 } },
        { letter: "ゆ", romanization: "yu", gojuonPosition: { row: 7, col: 2 } },
        { letter: "よ", romanization: "yo", gojuonPosition: { row: 7, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowRa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ら", romanization: "ra", gojuonPosition: { row: 8, col: 0 } },
        { letter: "り", romanization: "ri", gojuonPosition: { row: 8, col: 1 } },
        { letter: "る", romanization: "ru", gojuonPosition: { row: 8, col: 2 } },
        { letter: "れ", romanization: "re", gojuonPosition: { row: 8, col: 3 } },
        { letter: "ろ", romanization: "ro", gojuonPosition: { row: 8, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowWa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "わ", romanization: "wa", gojuonPosition: { row: 9, col: 0 } },
        { letter: "を", romanization: "o", gojuonPosition: { row: 9, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowN) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ん", romanization: "n", gojuonPosition: { row: 10, col: 0 } },
      );
    }

    // 片假名 Katakana
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowA) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ア", romanization: "a", gojuonPosition: { row: 0, col: 0 } },
        { letter: "イ", romanization: "i", gojuonPosition: { row: 0, col: 1 } },
        { letter: "ウ", romanization: "u", gojuonPosition: { row: 0, col: 2 } },
        { letter: "エ", romanization: "e", gojuonPosition: { row: 0, col: 3 } },
        { letter: "オ", romanization: "o", gojuonPosition: { row: 0, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowKa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "カ", romanization: "ka", gojuonPosition: { row: 1, col: 0 } },
        { letter: "キ", romanization: "ki", gojuonPosition: { row: 1, col: 1 } },
        { letter: "ク", romanization: "ku", gojuonPosition: { row: 1, col: 2 } },
        { letter: "ケ", romanization: "ke", gojuonPosition: { row: 1, col: 3 } },
        { letter: "コ", romanization: "ko", gojuonPosition: { row: 1, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowSa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "サ", romanization: "sa", gojuonPosition: { row: 2, col: 0 } },
        { letter: "シ", romanization: "shi", gojuonPosition: { row: 2, col: 1 } },
        { letter: "ス", romanization: "su", gojuonPosition: { row: 2, col: 2 } },
        { letter: "セ", romanization: "se", gojuonPosition: { row: 2, col: 3 } },
        { letter: "ソ", romanization: "so", gojuonPosition: { row: 2, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowTa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "タ", romanization: "ta", gojuonPosition: { row: 3, col: 0 } },
        { letter: "チ", romanization: "chi", gojuonPosition: { row: 3, col: 1 } },
        { letter: "ツ", romanization: "tsu", gojuonPosition: { row: 3, col: 2 } },
        { letter: "テ", romanization: "te", gojuonPosition: { row: 3, col: 3 } },
        { letter: "ト", romanization: "to", gojuonPosition: { row: 3, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowNa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ナ", romanization: "na", gojuonPosition: { row: 4, col: 0 } },
        { letter: "ニ", romanization: "ni", gojuonPosition: { row: 4, col: 1 } },
        { letter: "ヌ", romanization: "nu", gojuonPosition: { row: 4, col: 2 } },
        { letter: "ネ", romanization: "ne", gojuonPosition: { row: 4, col: 3 } },
        { letter: "ノ", romanization: "no", gojuonPosition: { row: 4, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowHa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ハ", romanization: "ha", gojuonPosition: { row: 5, col: 0 } },
        { letter: "ヒ", romanization: "hi", gojuonPosition: { row: 5, col: 1 } },
        { letter: "フ", romanization: "fu", gojuonPosition: { row: 5, col: 2 } },
        { letter: "ヘ", romanization: "he", gojuonPosition: { row: 5, col: 3 } },
        { letter: "ホ", romanization: "ho", gojuonPosition: { row: 5, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowMa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "マ", romanization: "ma", gojuonPosition: { row: 6, col: 0 } },
        { letter: "ミ", romanization: "mi", gojuonPosition: { row: 6, col: 1 } },
        { letter: "ム", romanization: "mu", gojuonPosition: { row: 6, col: 2 } },
        { letter: "メ", romanization: "me", gojuonPosition: { row: 6, col: 3 } },
        { letter: "モ", romanization: "mo", gojuonPosition: { row: 6, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowYa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ヤ", romanization: "ya", gojuonPosition: { row: 7, col: 0 } },
        { letter: "ユ", romanization: "yu", gojuonPosition: { row: 7, col: 2 } },
        { letter: "ヨ", romanization: "yo", gojuonPosition: { row: 7, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowRa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ラ", romanization: "ra", gojuonPosition: { row: 8, col: 0 } },
        { letter: "リ", romanization: "ri", gojuonPosition: { row: 8, col: 1 } },
        { letter: "ル", romanization: "ru", gojuonPosition: { row: 8, col: 2 } },
        { letter: "レ", romanization: "re", gojuonPosition: { row: 8, col: 3 } },
        { letter: "ロ", romanization: "ro", gojuonPosition: { row: 8, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowWa) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ワ", romanization: "wa", gojuonPosition: { row: 9, col: 0 } },
        { letter: "ヲ", romanization: "o", gojuonPosition: { row: 9, col: 4 } },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowN) {
      gojuons.splice(
        gojuons.length,
        0, //
        { letter: "ン", romanization: "n", gojuonPosition: { row: 10, col: 0 } },
      );
    }

    return gojuons;
  });

  letters = $derived.by(() => {
    // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)

    const letters: Letter[] = cloneDeep(this.gojuons);

    // Hiragana - 濁音 Dakuten and 半濁音 Handakuten
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowKa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "が", romanization: "ga" },
        { letter: "ぎ", romanization: "gi" },
        { letter: "ぐ", romanization: "gu" },
        { letter: "げ", romanization: "ge" },
        { letter: "ご", romanization: "go" },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowSa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "ざ", romanization: "za" },
        { letter: "じ", romanization: "ji" },
        { letter: "ず", romanization: "zu" },
        { letter: "ぜ", romanization: "ze" },
        { letter: "ぞ", romanization: "zo" },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowTa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "だ", romanization: "da" },
        { letter: "ぢ", romanization: "ji" },
        { letter: "づ", romanization: "zu" },
        { letter: "で", romanization: "de" },
        { letter: "ど", romanization: "do" },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "ば", romanization: "ba" },
        { letter: "び", romanization: "bi" },
        { letter: "ぶ", romanization: "bu" },
        { letter: "べ", romanization: "be" },
        { letter: "ぼ", romanization: "bo" },
      );
    }
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "ぱ", romanization: "pa" },
        { letter: "ぴ", romanization: "pi" },
        { letter: "ぷ", romanization: "pu" },
        { letter: "ぺ", romanization: "pe" },
        { letter: "ぽ", romanization: "po" },
      );
    }

    // Hiragana - 拗音 Yoon
    if (this.gojuonSettings.enableHiragana && this.gojuonSettings.enableRowYa && this.gojuonSettings.enableYoon) {
      letters.splice(
        letters.length,
        0, //
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
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowKa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "ガ", romanization: "ga" },
        { letter: "ギ", romanization: "gi" },
        { letter: "グ", romanization: "gu" },
        { letter: "ゲ", romanization: "ge" },
        { letter: "ゴ", romanization: "go" },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowSa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "ザ", romanization: "za" },
        { letter: "ジ", romanization: "ji" },
        { letter: "ズ", romanization: "zu" },
        { letter: "ゼ", romanization: "ze" },
        { letter: "ゾ", romanization: "zo" },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowTa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "ダ", romanization: "da" },
        { letter: "ヂ", romanization: "ji" },
        { letter: "ヅ", romanization: "zu" },
        { letter: "デ", romanization: "de" },
        { letter: "ド", romanization: "do" },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "バ", romanization: "ba" },
        { letter: "ビ", romanization: "bi" },
        { letter: "ブ", romanization: "bu" },
        { letter: "ベ", romanization: "be" },
        { letter: "ボ", romanization: "bo" },
      );
    }
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableDiacritics && this.gojuonSettings.enableRowHa) {
      letters.splice(
        letters.length,
        0, //
        { letter: "パ", romanization: "pa" },
        { letter: "ピ", romanization: "pi" },
        { letter: "プ", romanization: "pu" },
        { letter: "ペ", romanization: "pe" },
        { letter: "ポ", romanization: "po" },
      );
    }

    // Katakana - 拗音 Yoon
    if (this.gojuonSettings.enableKatakana && this.gojuonSettings.enableRowYa && this.gojuonSettings.enableYoon) {
      letters.splice(
        letters.length,
        0, //
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
  });

  words = $derived.by(() => {
    const words: JapaneseWord[] = [];

    if (this.flashcardSettings.enablePronouns) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["私"], hiragana: "わたし", romanization: "watashi", meaning: "I" },
        { kanjis: ["僕"], hiragana: "ぼく", katakana: "ボク", romanization: "boku", meaning: "I (male)" },
        { kanjis: ["俺"], hiragana: "おれ", katakana: "オレ", romanization: "ore", meaning: "I (male, arrogantly)" },

        { kanjis: ["君"], hiragana: "きみ", romanization: "kimi", meaning: "you (similar status)" },
        { kanjis: ["貴方", "貴女", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "you (similar status, informal)" },

        { kanjis: ["彼"], hiragana: "かれ", romanization: "kare", meaning: "he" },
        { kanjis: ["彼氏"], hiragana: "かれし", romanization: "kareshi", meaning: "he / boyfriend" },
        { kanjis: ["彼女"], hiragana: "かのじょ", romanization: "kanojo", meaning: "she / girlfriend" },
        { kanjis: ["彼ら", "彼等"], hiragana: "かれら", romanization: "karera", meaning: "they" },
        { kanjis: ["彼方"], hiragana: "かなた", romanization: "kanata", meaning: "that other side" },
        { kanjis: ["彼の", "彼"], hiragana: "かの", romanization: "kano", meaning: "the / that person / that thing" },
        { kanjis: ["此方"], hiragana: "こちら", preferredForm: "hiragana", romanization: "kochira", meaning: "this way" },
        { kanjis: ["此奴"], hiragana: "こいつ", preferredForm: "hiragana", romanization: "koitsu", meaning: "this bastard" },
        { hiragana: "こっち", romanization: "kocchi", meaning: "this way (informal)" },
        { kanjis: ["此れ"], hiragana: "これ", preferredForm: "hiragana", romanization: "kono", meaning: "this" },
        { kanjis: ["此処", "此所"], hiragana: "ここ", preferredForm: "hiragana", romanization: "koko", meaning: "here" },
        { kanjis: ["其処", "其所"], hiragana: "そこ", preferredForm: "hiragana", romanization: "soko", meaning: "there / that place" },
        { kanjis: ["其れ"], hiragana: "それ", preferredForm: "hiragana", romanization: "sore", meaning: "there" },
        { kanjis: ["あの人", "彼の人"], hiragana: "あのひと", romanization: "anohito", meaning: "that person" },
        { kanjis: ["あの方", "彼の方"], hiragana: "あのかた", romanization: "anokata", meaning: "that person (politely)" },
        // TODO: he, she, it, we, they, what

        { kanjis: ["何"], hiragana: "なに", katakana: "ナニ", romanization: "nani", meaning: "what / that thing" },

        { kanjis: ["自分"], hiragana: "じぶん", romanization: "jibun", meaning: "myself, yourself, oneself, himself, herself" },
      );
    }

    if (this.flashcardSettings.enableNounsPeopleGeneric) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["成人"], hiragana: "せいじん", romanization: "seijin", meaning: "adult" },
        { kanjis: ["大人"], hiragana: "おとな", romanization: "otona", meaning: "grown-up" },
        { kanjis: ["子供", "子ども"], hiragana: "こども", romanization: "kodomo", meaning: "child / children" },

        { kanjis: ["男性"], hiragana: "だんせい", romanization: "dansei", meaning: "male" },
        { kanjis: ["男"], hiragana: "おとこ", romanization: "otoko", meaning: "man" },
        { kanjis: ["少年"], hiragana: "しょうねん", romanization: "shounen", meaning: "young man" },

        { kanjis: ["女性"], hiragana: "じょせい", romanization: "josei", meaning: "female" },
        { kanjis: ["女子"], hiragana: "じょし", romanization: "joshi", meaning: "woman" },
        { kanjis: ["乙女", "少女"], hiragana: "おとめ", romanization: "otome", meaning: "young lady" },
      );
    }

    if (this.flashcardSettings.enableNounsPeopleFamily) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["父さん"], hiragana: "とうさん", romanization: "tousan", meaning: "father (calling him)" },
        { kanjis: ["お父さん"], hiragana: "おとうさん", romanization: "otousan", meaning: "father (referring to him or someone else's)" },
        { kanjis: ["父"], hiragana: "ちち", romanization: "chichi", meaning: "my father (referring to him)" },
        { kanjis: ["老爺"], hiragana: "おやじ", romanization: "oyaji", meaning: "father (calling him, used by old-fashioned men)" },

        { kanjis: ["母さん"], hiragana: "かあさん", romanization: "kaasan", meaning: "mother (calling her)" },
        { kanjis: ["お母さん"], hiragana: "おかあさん", romanization: "okaasan", meaning: "mother (referring to her or someone else's)" },
        { kanjis: ["母"], hiragana: "はは", romanization: "haha", meaning: "my mother (referring to her)" },
        { kanjis: ["お袋"], hiragana: "おふくろ", romanization: "ofukuro", meaning: "mother (calling her, used by old-fashioned men)" },

        { kanjis: ["兄さん"], hiragana: "にいさん", romanization: "niisan", meaning: "elder brother (calling him)" },
        { kanjis: ["お兄さん"], hiragana: "おにいさん", romanization: "oniisan", meaning: "elder brother (referring to him or someone else's)" },
        { kanjis: ["兄"], hiragana: "あに", romanization: "ani", meaning: "my elder brother (referring to him)" },

        { kanjis: ["姉さん"], hiragana: "ねえさん", romanization: "neesan", meaning: "elder sister (calling her)" },
        { kanjis: ["お姉さん"], hiragana: "おねえさん", romanization: "oneesan", meaning: "elder sister (referring to her or someone else's" },
        { kanjis: ["姉"], hiragana: "あね", romanization: "ane", meaning: "my elder sister (referring to her)" },

        { kanjis: ["弟さん"], hiragana: "おとうとさん", romanization: "otoutosan", meaning: "younger brother (referring to him or someone else's" },
        { kanjis: ["弟"], hiragana: "おとうと", romanization: "otouto", meaning: "my younger brother (referring to him)" },

        { kanjis: ["妹さん"], hiragana: "いもうとさん", romanization: "imoutosan", meaning: "younger sister (referring to her or someone else's)" },
        { kanjis: ["妹"], hiragana: "いもうと", romanization: "imouto", meaning: "my younger sister (referring to her)" },

        // TODO: child, son, daughter
      );
    }

    if (this.flashcardSettings.enableNounsPeopleFellows) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["友人"], hiragana: "ゆうじん", romanization: "yuujin", meaning: "friend" },
        { kanjis: ["朋友"], hiragana: "ほうゆう", romanization: "houyuu", meaning: "friend" },
        { kanjis: ["友達"], hiragana: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
        // TODO: aniki

        { kanjis: ["仲間"], hiragana: "なかま", romanization: "nakama", meaning: "fellow / companion (informal)" },
        { kanjis: ["同僚"], hiragana: "どうりょう", romanization: "douryou", meaning: "colleague (in similar gojuonPosition with you)" },
        { kanjis: ["主管"], hiragana: "しゅかん", romanization: "shukan", meaning: "manager" },
        { kanjis: ["主任"], hiragana: "しゅにん", romanization: "shunin", meaning: "director" },
        { kanjis: ["監督"], hiragana: "かんとく", romanization: "kantoku", meaning: "supervisor" },
        { kanjis: ["部長"], hiragana: "ぶちょう", romanization: "buchou", meaning: "boss" },
        { kanjis: ["社長"], hiragana: "しゃちょう", romanization: "shachou", meaning: "president" },
      );
    }

    // TODO: directions

    // TODO: places

    // TODO: colors

    // TODO: numbers

    if (this.flashcardSettings.enableNounsTime) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
        { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
        { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
      );
    }

    if (this.flashcardSettings.enableNounsIntangible) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", meaning: "hear / listen" },
        { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", meaning: "drink / swallow" },
        { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", meaning: "say" },
        { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", meaning: "go" },
        { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", meaning: "smell" },
        { kanjis: ["取る"], hiragana: "とる", romanization: "toru", meaning: "take / grab" },
        { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", meaning: "hold / carry" },
        { kanjis: ["歩く"], hiragana: "あるく", romanization: "aruku", meaning: "walk" },
        { kanjis: ["走る", "奔る", "疾る", "趨る"], hiragana: "はしる", romanization: "hashiru", meaning: "run / rush" },

        { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", meaning: "use / employ / utilize" },
        { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", meaning: "move / act / shift" },
      );
    }

    if (this.flashcardSettings.enableVerbsActions && this.flashcardSettings.enableIchidanVerbs) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
        { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },
      );
    }

    // verbs - Irregular verbs
    // TODO

    if (this.flashcardSettings.enableInterjections) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["此の"], hiragana: "この", preferredForm: "hiragana", romanization: "kono", meaning: "you are such a xxx" },
        { hiragana: "ほら", romanization: "hora", meaning: "look!" },
      );
    }

    return words;
  });
})();
