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
    enablePronounsPeople: { paramKey: "peoplePronouns", defaultValue: true },
    enablePronounsThings: { paramKey: "thingsPronouns", defaultValue: true },
    enablePronounsGeneral: { paramKey: "generalPronouns", defaultValue: true },
    enablePronounsQuestionWords: { paramKey: "questionWords", defaultValue: true },
    enableNounsPeopleGeneric: { paramKey: "genericPeople", defaultValue: true },
    enableNounsPeopleFamily: { paramKey: "family", defaultValue: true },
    enableNounsPeopleFellows: { paramKey: "fellows", defaultValue: true },
    enableNounsPlacesGeneric: { paramKey: "genericPlaces", defaultValue: true },
    enableNounsNavigation: { paramKey: "navigation", defaultValue: true },
    enableNounsTime: { paramKey: "time", defaultValue: true },
    enableNounsIntangible: { paramKey: "intangible", defaultValue: true },
    enableNounsMiscellaneous: { paramKey: "miscellaneousNouns", defaultValue: true },
    enableVerbsActions: { paramKey: "actions", defaultValue: true },
    enableVerbsIntransitive: { paramKey: "intransitiveVerbs", defaultValue: true },
    enableAdjectives: { paramKey: "adjectives", defaultValue: true },
    enableAdverbs: { paramKey: "adverbs", defaultValue: true },
    enablePhrasesParticles: { paramKey: "particles", defaultValue: true },
    enablePhrasesInterjections: { paramKey: "interjections", defaultValue: true },
    enablePhrasesGreetings: { paramKey: "greetings", defaultValue: true },
    enablePhrasesMiscellaneous: { paramKey: "miscellaneousPhrases", defaultValue: true },

    enableGodanVerbs: { paramKey: "godan", defaultValue: true },
    enableIchidanVerbs: { paramKey: "ichidan", defaultValue: true },
    enableIrregularVerbs: { paramKey: "irregular", defaultValue: true },
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

    if (this.flashcardSettings.enablePronounsPeople) {
      words.splice(
        words.length,
        0, //
        // I:
        { kanjis: ["私"], hiragana: "わたし", romanization: "watashi", meaning: "I" },
        { kanjis: ["私"], hiragana: "わたくし", romanization: "watakushi", meaning: "I (very formal)" },
        { kanjis: ["私"], hiragana: "あたし", romanization: "atashi", meaning: "I (female)" },
        { kanjis: ["私"], hiragana: "あたくし", romanization: "atakushi", meaning: "I (female, politely)" },
        { kanjis: ["僕"], hiragana: "ぼく", katakana: "ボク", romanization: "boku", meaning: "I (young male, playfully)" },
        { kanjis: ["俺"], hiragana: "おれ", katakana: "オレ", romanization: "ore", meaning: "I (male, masculinely)" },
        { kanjis: ["俺様", "オレ様"], rareKanjis: ["己様"], hiragana: "おれさま", romanization: "oresama", meaning: "the one and only me (male, arrogantly)" },
        { kanjis: ["我", "吾"], hiragana: "われ", romanization: "ware", meaning: "I (very formal, old-fashioned)" },
        { hiragana: "わし", preferredForm: "hiragana", kanjis: ["儂"], rareKanjis: ["私"], katakana: "ワシ", romanization: "washi", meaning: "I (old male, literarily)" },
        { kanjis: ["拙者"], hiragana: "せっしゃ", romanization: "sessha", meaning: "I (male, humbly, used by samurais)" },

        // you:
        // TODO: https://nihonshock.com/2012/07/saying-you-in-japanese/
        { hiragana: "さん", romanization: "san", meaning: "Mr/Mrs/Miss/Ms xxx" },
        { kanjis: ["xx 様"], rareKanjis: ["方", "状"], hiragana: "さま", romanization: "sama", meaning: "Mr/Mrs/Miss/Ms xxx (highly formal, speaking to higher status people / customers)" },
        { kanjis: ["xx 君"], hiragana: "くん", romanization: "kun", meaning: "xxx (speaking to younger males)" },
        { hiragana: "ちゃん", romanization: "chan", meaning: "xxx (cutely, speaking to girls / children / pets)" },
        { kanjis: ["君"], rareKanjis: ["公"], hiragana: "きみ", romanization: "kimi", meaning: "you (male to female / among close friends)" },
        { kanjis: ["お前"], rareKanjis: ["御前"], hiragana: "おまえ", romanization: "omae", meaning: "you (male speaking to lovers or close friends / arrogantly)" },
        { kanjis: ["貴方", "貴女", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "you (politely, a bit impersonal)" },
        { kanjis: ["貴方", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "my dear husband" },
        { kanjis: ["貴様"], hiragana: "きさま", romanization: "kisama", meaning: "you bastard" },
        { kanjis: ["貴公"], hiragana: "きこう", romanization: "kikou", meaning: "you (very formal, male to lower status male)" },

        // we:
        { kanjis: ["私たち", "私達"], hiragana: "わたしたち", romanization: "watashitachi", meaning: "we" },
        { kanjis: ["我々", "吾々", "我我", "吾吾"], hiragana: "われわれ", romanization: "wareware", meaning: "we (formal, speaking on behalf of an organization)" },
        { kanjis: ["皆"], hiragana: "みんな", romanization: "minna", meaning: "everyone (informal)" },
        { kanjis: ["皆さん"], hiragana: "みなさん", romanization: "minasan", meaning: "everyone (formal)" },
        { kanjis: ["皆様"], hiragana: "みなさま", romanization: "minasama", meaning: "everyone (very formal)" },

        // he / she:
        { kanjis: ["彼"], hiragana: "かれ", romanization: "kare", meaning: "he" },
        { kanjis: ["彼氏"], hiragana: "かれし", romanization: "kareshi", meaning: "he / boyfriend" },
        { kanjis: ["彼女"], hiragana: "かのじょ", romanization: "kanojo", meaning: "she / girlfriend" },

        { kanjis: ["この人"], rareKanjis: ["此の人"], hiragana: "このひと", romanization: "konohito", meaning: "this person" },
        { kanjis: ["この方"], rareKanjis: ["此の方"], hiragana: "このひと", romanization: "このかた", meaning: "this gentleman / lady (politely)" },
        { hiragana: "こいつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koitsu", meaning: "this bastard" },
        { hiragana: "こやつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koyatsu", meaning: "this bastard" },
        { kanjis: ["その人", "其の人"], hiragana: "そのひと", romanization: "sonohito", meaning: "that person / the person" },
        { kanjis: ["その方"], rareKanjis: ["其の方"], hiragana: "そのかた", romanization: "sonokata", meaning: "that gentleman / lady (politely)" },
        { hiragana: "そいつ", preferredForm: "hiragana", rareKanjis: ["其奴"], romanization: "soitsu", meaning: "that bastard" },
        { hiragana: "そやつ", preferredForm: "hiragana", rareKanjis: ["其奴"], romanization: "soyatsu", meaning: "that bastard" },
        { kanjis: ["あの人", "彼の人"], hiragana: "あのひと", romanization: "anohito", meaning: "that person" },
        { kanjis: ["あの方", "彼の方"], hiragana: "あのかた", romanization: "anokata", meaning: "that gentleman / lady (politely)" },
        { hiragana: "あいつ", preferredForm: "hiragana", rareKanjis: ["彼奴"], romanization: "aitsu", meaning: "that bastard" },

        // they:
        { kanjis: ["彼ら", "彼等"], hiragana: "かれら", romanization: "karera", meaning: "they" },
        { kanjis: ["彼女ら", "彼女等"], hiragana: "かのじょら", romanization: "kanojora", meaning: "they (females)" },
        { hiragana: "こいつら", preferredForm: "hiragana", kanjis: ["こいつ等"], rareKanjis: ["此奴ら", "此奴等"], romanization: "koitsura", meaning: "these bastards" },

        // oneself:
        { kanjis: ["自分"], hiragana: "じぶん", romanization: "jibun", meaning: "myself / yourself / oneself / himself / herself" },
        { kanjis: ["自分たち", "自分達"], hiragana: "じぶんたち", romanization: "jibuntachi", meaning: "ourselves / themselves" },
      );
    }

    if (this.flashcardSettings.enablePronounsThings) {
      words.splice(
        words.length,
        0, //
        // it / that
        { hiragana: "これ", preferredForm: "hiragana", rareKanjis: ["此れ", "是", "之", "維", "惟"], romanization: "kore", meaning: "this (close to speaker)" },
        { hiragana: "それ", preferredForm: "hiragana", rareKanjis: ["其れ"], romanization: "sore", meaning: "that (distant from speaker, close to listener)" },
        { hiragana: "あれ", preferredForm: "hiragana", rareKanjis: ["彼", "彼れ"], romanization: "are", meaning: "that (distant from both speaker and listener)" },
        { hiragana: "どれ", preferredForm: "hiragana", rareKanjis: ["何れ"], romanization: "dore", meaning: "which" },

        // here / there
        { hiragana: "ここ", preferredForm: "hiragana", kanjis: ["此処"], rareKanjis: ["此所", "是", "茲", "爰"], romanization: "koko", meaning: "here / this place (close to speaker)" },
        { hiragana: "そこ", preferredForm: "hiragana", kanjis: ["其処"], rareKanjis: ["其所"], romanization: "soko", meaning: "there / that place (distant from speaker, close to listener)" },
        { hiragana: "あそこ", preferredForm: "hiragana", kanjis: ["彼処"], rareKanjis: ["彼所"], katakana: "アソコ", romanization: "asoko", meaning: "there / that place (distant from both speaker and listener)" },

        // this way / that way
        { hiragana: "こっち", preferredForm: "hiragana", kanjis: ["此方"], romanization: "kocchi", meaning: "here / this way (close to speaker)" },
        { hiragana: "こちら", preferredForm: "hiragana", kanjis: ["此方"], romanization: "kochira", meaning: "here / this way (close to speaker) (politely)" },
        { hiragana: "そっち", preferredForm: "hiragana", kanjis: ["其方"], romanization: "socchi", meaning: "that way (distant from speaker, close to listener)" },
        { hiragana: "そちら", preferredForm: "hiragana", kanjis: ["其方"], romanization: "sochira", meaning: "that way (distant from speaker, close to listener) (politely)" },
        { hiragana: "かなた", preferredForm: "hiragana", kanjis: ["彼方"], romanization: "kanata", meaning: "that other side (distant from both speaker and listener)" },
        { hiragana: "あちら", preferredForm: "hiragana", kanjis: ["彼方"], romanization: "achira", meaning: "that other side (distant from both speaker and listener) (politely)" },
      );
    }

    if (this.flashcardSettings.enablePronounsGeneral) {
      words.splice(
        words.length,
        0, //
        { exampleUsage: "この xx", hiragana: "この", rareKanjis: ["此の", "斯の"], romanization: "kono", meaning: "this xxx (close to listener) / 呢個" },
        { exampleUsage: "その xx", hiragana: "その", rareKanjis: ["其の"], romanization: "sono", meaning: "that xxx (distant from speaker, close to listener) / 嗰個" },
        { exampleUsage: "かの xx", hiragana: "かの", kanjis: ["彼の", "彼"], romanization: "kano", meaning: "that xxx (distant from both speaker and listener) / 啊邊個" },
        { exampleUsage: "どの xx", hiragana: "どの", kanjis: ["何の"], romanization: "dono", meaning: "which xxx / 邊個" },
      );
    }

    if (this.flashcardSettings.enablePronounsQuestionWords) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["誰"], hiragana: "だれ", romanization: "dare", meaning: "who" },
        { kanjis: ["何者", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "who / what kind of person" },

        { hiragana: "なに", preferredForm: "hiragana", kanjis: ["何"], katakana: "ナニ", romanization: "nani", meaning: "what" },
        { kanjis: ["何物", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "what kind of thing" },
        { kanjis: ["何事", "何ごと"], hiragana: "なにごと", romanization: "nanigoto", meaning: "what event" },
        { kanjis: ["何か"], hiragana: "なにか", romanization: "nanika", meaning: "if anything (used in questions) / 有咩嘢" },
        { kanjis: ["何か"], hiragana: "なんか", romanization: "nanka", meaning: "if anything (used in questions) / 有咩嘢" },
        { hiragana: "どこ", preferredForm: "hiragana", kanjis: ["何処"], rareKanjis: ["何所"], romanization: "doko", meaning: "where / what place" },
        { hiragana: "いずこ", preferredForm: "hiragana", kanjis: ["何処"], romanization: "izuko", meaning: "where / what place" },
        { hiragana: "どちら", preferredForm: "hiragana", kanjis: ["何方"], romanization: "dochira", meaning: "which direction (politely)" },
        { hiragana: "どっち", preferredForm: "hiragana", kanjis: ["何方"], romanization: "docchi", meaning: "which direction" },

        { kanjis: ["何で"], hiragana: "なんで", romanization: "nande", meaning: "why / how" },
        { kanjis: ["何度"], hiragana: "なんど", romanization: "nando", meaning: "how many times / how many degrees" },
      );
    }

    if (this.flashcardSettings.enableNounsPeopleGeneric) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["人"], hiragana: "ひと", katakana: "ヒト", romanization: "hito", meaning: "person" },
        { kanjis: ["人々", "人びと", "人人"], hiragana: "ひとびと", romanization: "hitobito", meaning: "people" },
        { kanjis: ["他人"], hiragana: "たにん", romanization: "tanin", meaning: "others" },
        { katakana: "グループ", romanization: "guruupu", meaning: "group" },

        { kanjis: ["成人"], hiragana: "せいじん", romanization: "seijin", meaning: "adult" },
        { kanjis: ["大人"], hiragana: "おとな", romanization: "otona", meaning: "grown-up" },
        { kanjis: ["子供", "子ども"], hiragana: "こども", romanization: "kodomo", meaning: "child / children" },

        { kanjis: ["男性"], hiragana: "だんせい", romanization: "dansei", meaning: "male" },
        { kanjis: ["男"], hiragana: "おとこ", romanization: "otoko", meaning: "man" },
        { kanjis: ["少年"], hiragana: "しょうねん", romanization: "shounen", meaning: "young man" },
        { kanjis: ["公子"], hiragana: "こうし", romanization: "koushi", meaning: "young nobleman" },
        { kanjis: ["殿方"], hiragana: "とのがた", romanization: "tonogata", meaning: "gentlemen" },

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
        { kanjis: ["夫", "良人"], hiragana: "おっと", romanization: "otto", meaning: "husband" },
        { kanjis: ["良人"], hiragana: "りょうじん", romanization: "ryoujin", meaning: "husband" },
        { kanjis: ["妻"], hiragana: "つま", romanization: "tsuma", meaning: "wife" },
        { kanjis: ["夫人"], hiragana: "ふじん", romanization: "fujin", meaning: "Mrs xxx" },

        { kanjis: ["友"], hiragana: "とも", romanization: "tomo", meaning: "friend" },
        { kanjis: ["友達"], hiragana: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
        { kanjis: ["友人"], hiragana: "ゆうじん", romanization: "yuujin", meaning: "friend (formal)" },
        { kanjis: ["朋友"], hiragana: "ほうゆう", romanization: "houyuu", meaning: "friend (literarily)" },
        { kanjis: ["相棒"], hiragana: "あいぼう", romanization: "aibou", meaning: "pal (informal)" },
        // TODO: aniki

        { kanjis: ["先輩"], hiragana: "せんぱい", romanization: "senpai", meaning: "senior" },

        { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master" },
        { kanjis: ["大家"], hiragana: "たいか", romanization: "taika", meaning: "authority" },

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
    if (this.flashcardSettings.enableNounsNavigation) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["方"], hiragana: "ほう", romanization: "hou", meaning: "direction" },
        { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "direction" },
        { kanjis: ["方向"], hiragana: "ほうこう", romanization: "houkou", meaning: "direction" },

        { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "front" },
        { kanjis: ["後"], hiragana: "あと", romanization: "ato", meaning: "back" },
        { kanjis: ["左"], hiragana: "あと", romanization: "hidari", meaning: "left" },
        { kanjis: ["右"], hiragana: "みぎ", romanization: "migi", meaning: "right" },
        { kanjis: ["真ん中"], hiragana: "まんなか", romanization: "mannaka", meaning: "center" },
        { kanjis: ["向こう"], hiragana: "むこう", romanization: "mukou", meaning: "beyond / the other side / 嗰度" },
        { kanjis: ["向こう側", "向う側"], hiragana: "むこうがわ", romanization: "mukougawa", meaning: "the other side / 嗰邊" },

        { kanjis: ["間"], hiragana: "あいだ", romanization: "aida", meaning: "gap / distance" },
        { kanjis: ["距離"], hiragana: "きょり", romanization: "kyori", meaning: "distance" },

        { kanjis: ["近く"], hiragana: "ちかく", romanization: "chikaku", meaning: "nearby" },
        { kanjis: ["遠く"], hiragana: "とおく", romanization: "tooku", meaning: "afar" },
        { kanjis: ["隣"], hiragana: "となり", romanization: "tonari", meaning: "immediate neighbor" },
        { kanjis: ["側", "傍"], hiragana: "そば", romanization: "soba", meaning: "nearby" },
        { kanjis: ["側"], hiragana: "そく", romanization: "soku", meaning: "nearby" },

        { kanjis: ["地方"], hiragana: "ちほう", romanization: "chihou", meaning: "area / region" },
        { kanjis: ["場所"], hiragana: "ばしょ", romanization: "basho", meaning: "place" },
        { kanjis: ["名所"], hiragana: "などころ", romanization: "nadokoro", meaning: "famous place" },

        { kanjis: ["見晴らし"], hiragana: "みはらし", romanization: "miharashi", meaning: "view" },
      );
    }

    // TODO: places
    if (this.flashcardSettings.enableNounsPlacesGeneric) {
      words.splice(
        words.length,
        0, //
      );
    }

    // TODO: countries

    // TODO: numbers

    // TODO: colors

    // TODO: datetime
    if (this.flashcardSettings.enableNounsTime) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
        { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
        { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
      );
    }

    // linguistics

    if (this.flashcardSettings.enableNounsIntangible) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["名前"], hiragana: "なまえ", romanization: "namae", meaning: "name" },

        { kanjis: ["家族"], hiragana: "かぞく", romanization: "kazoku", meaning: "extended family" },

        { kanjis: ["方法"], hiragana: "ほうほう", romanization: "houhou", meaning: "method / procedures" },
        { kanjis: ["方式"], hiragana: "ほうしき", romanization: "houshiki", meaning: "method / way of doing" },
        { kanjis: ["見方"], hiragana: "みかた", romanization: "mikata", meaning: "point of view" },

        { kanjis: ["関連"], rareKanjis: ["関聯"], hiragana: "かんれん", romanization: "kanren", meaning: "relevance" },

        { kanjis: ["真面目"], hiragana: "まじめ", katakana: "マジメ", romanization: "majime", meaning: "truthfulness" },

        { kanjis: ["難度"], hiragana: "なんど", romanization: "nando", meaning: "difficulty" },
      );
    }

    if (this.flashcardSettings.enableNounsMiscellaneous) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["食通"], hiragana: "しょくつう", romanization: "shokutsuu", meaning: "gourmet" },
        { katakana: "グルメ", romanization: "gurume", meaning: "gourmet / fine food" },

        { kanjis: ["道", "途", "路", "径"], hiragana: "みち", romanization: "michi", meaning: "road / path" },
        { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },
      );
    }

    if (this.flashcardSettings.enableVerbsActions && this.flashcardSettings.enableGodanVerbs) {
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
        { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", meaning: "occur" },
        { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", meaning: "become / attain" },

        { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", meaning: "calm down" },

        // TODO: use
        // TODO: come
      );
    }

    if (this.flashcardSettings.enableVerbsActions && this.flashcardSettings.enableIchidanVerbs) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
        { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },

        { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", meaning: "mix" },
      );
    }

    if (this.flashcardSettings.enableVerbsIntransitive && this.flashcardSettings.enableIrregularVerbs) {
      words.splice(
        words.length,
        0, //
        // TODO: kuru (to come), suru (to do)
        { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", meaning: "relate" },
      );
    }

    // TODO: verbs - Irregular verbs

    // TODO: adjectives
    if (this.flashcardSettings.enableAdjectives) {
      words.splice(
        words.length,
        0, //
        { hiragana: "いい", romanization: "ii", meaning: "fine / decent" },
        { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "fine / decent (formal)" },

        { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical" },

        { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
        { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },
      );
    }

    // TODO: adverbs
    if (this.flashcardSettings.enableAdverbs) {
      words.splice(
        words.length,
        0, //
        { hiragana: "もう", romanization: "mou", meaning: "not any more / again" },
        { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if" },
        { hiragana: "なんて", romanization: "nande", meaning: "xxx or something like that" },
        { hiragana: "なんでも", preferredForm: "hiragana", kanjis: ["何でも"], romanization: "nandemo", meaning: "anything (in positive sentence)" },

        { kanjis: ["何にも"], hiragana: "なににも", romanization: "naninimo", meaning: "everything (in negative sentence)" },
        { kanjis: ["何やら"], hiragana: "なにやら", romanization: "naniyara", meaning: "something" },
        { kanjis: ["何かと", "何彼と"], hiragana: "なにかと", romanization: "nanikato", meaning: "in many ways" },
        { kanjis: ["何しろ"], hiragana: "なにしろ", romanization: "nanishiro", meaning: "anyhow" },
        { kanjis: ["何せ"], hiragana: "なにせ", romanization: "nanise", meaning: "anyhow" },
        { kanjis: ["何せ"], hiragana: "なんせ", romanization: "nanse", meaning: "anyhow" },
        { kanjis: ["何事も", "何ごとも"], hiragana: "なにごとも", romanization: "nanigotomo", meaning: "everything" },
        { kanjis: ["何より"], hiragana: "なにより", romanization: "naniyori", meaning: "above anything else" },
        { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "not at all" },
        { kanjis: ["何も"], hiragana: "なんも", romanization: "nanmo", meaning: "not at all" },

        { kanjis: ["内", "中"], hiragana: "うち", romanization: "uchi", meaning: "inside / between" },
        { kanjis: ["同じく"], hiragana: "おなじく", romanization: "onajiku", meaning: "likewise" },
      );
    }

    // TODO: example usage for sentence structures
    if (this.flashcardSettings.enablePhrasesParticles) {
      words.splice(
        words.length,
        0, //
        { hiragana: "は", romanization: "wa", meaning: "(topic marker) / 的話" },
        { hiragana: "が", romanization: "ga", meaning: "(subject marker)" },
        { hiragana: "を", romanization: "o", meaning: "(direct object marker)" },
        { hiragana: "に", romanization: "ni", meaning: "(time / place marker)" },
        { hiragana: "で", romanization: "de", meaning: "(time / place marker)" },
        { hiragana: "へ", romanization: "e", meaning: "(target marker)" },
        { hiragana: "の", rareKanjis: ["乃"], romanization: "no", meaning: "(possession marker) / xxx's / 的 / 嘅" },
        { hiragana: "か", romanization: "ka", meaning: "(question marker)" },
        { hiragana: "よ", romanization: "yo", meaning: "(exclamation marker) / 啊" },

        { hiragana: "ね", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },
        { hiragana: "ねー", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },
        { hiragana: "ねえ", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },
        { hiragana: "ねぇ", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },

        { hiragana: "も", romanization: "mo", meaning: "and" },
        { hiragana: "と", romanization: "to", meaning: "and" },
        { hiragana: "より", romanization: "yori", meaning: "than / instead of" },
        { hiragana: "から", romanization: "kara", meaning: "from / since" },
        { hiragana: "まで", rareKanjis: ["迄"], romanization: "made", meaning: "up to / until" },
        { hiragana: "たら", romanization: "tara", meaning: "if" },
        { hiragana: "とも", romanization: "tomo", meaning: "even if" },
        { hiragana: "とか", romanization: "toka", meaning: "or something like that" },
        { hiragana: "ばかり", preferredForm: "hiragana", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "only / 只" },
        { hiragana: "ともなく", preferredForm: "hiragana", romanization: "tomonaku", meaning: "unknowingly" },
        { hiragana: "だけ", preferredForm: "hiragana", kanjis: ["丈"], romanization: "dake", meaning: "merely" },
        { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc." },
      );
    }

    if (this.flashcardSettings.enablePhrasesInterjections) {
      words.splice(
        words.length,
        0, //
        { hiragana: "あれっ？", romanization: "are", meaning: "eh?" },
        { hiragana: "その…", romanization: "sono", meaning: "um..." },
        { hiragana: "ほら", romanization: "hora", meaning: "look!" },
      );
    }

    // TODO: greetings
    if (this.flashcardSettings.enablePhrasesGreetings) {
      words.splice(
        words.length,
        0, //
      );
    }

    if (this.flashcardSettings.enablePhrasesMiscellaneous) {
      words.splice(
        words.length,
        0, //
        // TODO: nani?
        { hiragana: "いい", romanization: "ii", meaning: "that's good (informal)" },
        { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "that's good (formal)" },

        { hiragana: "まじ？", romanization: "maji", meaning: "seriously? (informal)" },
        { kanjis: ["何なのか？"], hiragana: "なんなのか？", romanization: "nannanoka", meaning: "what is this about?" },
        { kanjis: ["何なのか？"], hiragana: "なになのか？", romanization: "naninanoka", meaning: "what is this about?" },

        { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera" },
      );
    }

    return words;
  });
})();
