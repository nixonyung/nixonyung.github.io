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
    enableSentenceStructures: { paramKey: "sentenceStructures", defaultValue: true },

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
        { kanjis: ["私"], hiragana: "あたし", romanization: "atashi", meaning: "I (for female)" },
        { kanjis: ["私"], hiragana: "あたくし", romanization: "atakushi", meaning: "I (for female, polite)" },
        { kanjis: ["僕"], hiragana: "ぼく", katakana: "ボク", romanization: "boku", meaning: "I (for young male, playful)" },
        { kanjis: ["俺"], hiragana: "おれ", katakana: "オレ", romanization: "ore", meaning: "I (for male, masculine)" },
        { kanjis: ["俺様", "オレ様"], rareKanjis: ["己様"], hiragana: "おれさま", romanization: "oresama", meaning: "the one and only me (for male, arrogant)" },
        { kanjis: ["我", "吾"], hiragana: "われ", romanization: "ware", meaning: "I (very formal, old-fashioned)" },
        { hiragana: "わし", preferredForm: "hiragana", kanjis: ["儂"], rareKanjis: ["私"], katakana: "ワシ", romanization: "washi", meaning: "I (for old male, literary)" },
        { kanjis: ["拙者"], hiragana: "せっしゃ", romanization: "sessha", meaning: "I (for male (samurais), humble)" },

        // you:
        // TODO: https://nihonshock.com/2012/07/saying-you-in-japanese/
        { hiragana: "さん", romanization: "san", meaning: "Mr/Mrs/Miss/Ms xxx" },
        { kanjis: ["xx 様"], rareKanjis: ["方", "状"], hiragana: "さま", romanization: "sama", meaning: "Mr/Mrs/Miss/Ms xxx (very formal, to higher status / customer" },
        { kanjis: ["xx 君"], hiragana: "くん", romanization: "kun", meaning: "xxx (to younger males)" },
        { hiragana: "ちゃん", romanization: "chan", meaning: "xxx (to girls / children / pets, cute)" },
        { kanjis: ["君"], rareKanjis: ["公"], hiragana: "きみ", romanization: "kimi", meaning: "you (for male to female / among close friends)" },
        { kanjis: ["お前"], rareKanjis: ["御前"], hiragana: "おまえ", romanization: "omae", meaning: "you (for man to lovers / close friends / arrogant)" },
        { kanjis: ["貴方", "貴女", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "you (polite, maybe impersonal)" },
        { kanjis: ["貴方", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "my dear husband" },
        { kanjis: ["貴様"], hiragana: "きさま", romanization: "kisama", meaning: "you bastard" },
        { kanjis: ["貴公"], hiragana: "きこう", romanization: "kikou", meaning: "you (very formal, for male to lower status male)" },

        // we:
        { kanjis: ["私たち", "私達"], hiragana: "わたしたち", romanization: "watashitachi", meaning: "we" },
        { kanjis: ["我々", "吾々", "我我", "吾吾"], hiragana: "われわれ", romanization: "wareware", meaning: "we (formal, on behalf of an organization)" },
        { kanjis: ["皆"], hiragana: "みんな", romanization: "minna", meaning: "everyone (informal)" },
        { kanjis: ["皆さん"], hiragana: "みなさん", romanization: "minasan", meaning: "everyone (formal)" },
        { kanjis: ["皆様"], hiragana: "みなさま", romanization: "minasama", meaning: "everyone (very formal)" },

        // he / she:
        { kanjis: ["彼"], hiragana: "かれ", romanization: "kare", meaning: "he" },
        { kanjis: ["彼氏"], hiragana: "かれし", romanization: "kareshi", meaning: "he / boyfriend" },
        { kanjis: ["彼女"], hiragana: "かのじょ", romanization: "kanojo", meaning: "she / girlfriend" },

        { kanjis: ["この人"], rareKanjis: ["此の人"], hiragana: "このひと", romanization: "konohito", meaning: "this person" },
        { kanjis: ["この方"], rareKanjis: ["此の方"], hiragana: "このひと", romanization: "このかた", meaning: "this gentleman / lady (polite)" },
        { hiragana: "こいつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koitsu", meaning: "this bastard" },
        { hiragana: "こやつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koyatsu", meaning: "this bastard" },
        { kanjis: ["その人", "其の人"], hiragana: "そのひと", romanization: "sonohito", meaning: "that person / the person" },
        { kanjis: ["その方"], rareKanjis: ["其の方"], hiragana: "そのかた", romanization: "sonokata", meaning: "that gentleman / lady (polite)" },
        { hiragana: "そいつ", preferredForm: "hiragana", rareKanjis: ["其奴"], romanization: "soitsu", meaning: "that bastard" },
        { hiragana: "そやつ", preferredForm: "hiragana", rareKanjis: ["其奴"], romanization: "soyatsu", meaning: "that bastard" },
        { kanjis: ["あの人", "彼の人"], hiragana: "あのひと", romanization: "anohito", meaning: "that person" },
        { kanjis: ["あの方", "彼の方"], hiragana: "あのかた", romanization: "anokata", meaning: "that gentleman / lady (polite)" },
        { hiragana: "あいつ", preferredForm: "hiragana", rareKanjis: ["彼奴"], romanization: "aitsu", meaning: "that bastard" },

        { kanjis: ["何人", "何びと"], hiragana: "なにびと", romanization: "nanibito", meaning: "whoever" },

        // they:
        { kanjis: ["彼ら", "彼等"], hiragana: "かれら", romanization: "karera", meaning: "they" },
        { kanjis: ["彼女ら", "彼女等"], hiragana: "かのじょら", romanization: "kanojora", meaning: "they (to females)" },
        { hiragana: "こいつら", preferredForm: "hiragana", kanjis: ["こいつ等"], rareKanjis: ["此奴ら", "此奴等"], romanization: "koitsura", meaning: "these bastards" },

        { kanjis: ["何人か"], hiragana: "なんにんか", romanization: "nanninka", meaning: "some people" },

        // oneself:
        { kanjis: ["自分"], hiragana: "じぶん", romanization: "jibun", meaning: "myself / yourself / oneself / himself / herself" },
        { kanjis: ["自分たち", "自分達"], hiragana: "じぶんたち", romanization: "jibuntachi", meaning: "ourselves / themselves" },

        // TODO: placeholders
        // (ref.) [Are there placeholders in spoken Japanese?](https://japanese.stackexchange.com/questions/80870/are-there-placeholders-in-spoken-japanese)
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
        { exampleUsages: ["この [Noun]"], hiragana: "この", rareKanjis: ["此の", "斯の"], romanization: "kono", meaning: "this xxx (close to listener) / 呢個" },
        { exampleUsages: ["その [Noun]"], hiragana: "その", rareKanjis: ["其の"], romanization: "sono", meaning: "that xxx (distant from speaker, close to listener) / 嗰個" },
        { exampleUsages: ["かの [Noun]"], hiragana: "かの", kanjis: ["彼の", "彼"], romanization: "kano", meaning: "that xxx (distant from both speaker and listener) / 啊邊個" },
        { exampleUsages: ["どの [Noun]"], hiragana: "どの", kanjis: ["何の"], romanization: "dono", meaning: "which xxx / 邊個" },
      );
    }

    if (this.flashcardSettings.enablePronounsQuestionWords) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["何"], hiragana: "なん", romanization: "nan", meaning: "what xxx" },

        { kanjis: ["誰"], hiragana: "だれ", romanization: "dare", meaning: "who / 邊位" },
        { kanjis: ["何者", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "what kind of person / 乜水" },
        { kanjis: ["何人"], hiragana: "なんにん", romanization: "nannin", meaning: "how many people" },

        { hiragana: "なに", preferredForm: "hiragana", kanjis: ["何"], katakana: "ナニ", romanization: "nani", meaning: "what / 咩" },
        { kanjis: ["何物", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "what kind of thing / 咩料" },
        { kanjis: ["何事", "何ごと"], hiragana: "なにごと", romanization: "nanigoto", meaning: "what event / 咩事" },
        { kanjis: ["何か"], hiragana: "なにか", romanization: "nanika", meaning: "if anything (used in questions) / 有冇野" },
        { kanjis: ["何か"], hiragana: "なんか", romanization: "nanka", meaning: "if anything (used in questions, casually) / 有冇野" },
        { hiragana: "どれ", preferredForm: "hiragana", rareKanjis: ["何れ"], romanization: "dore", meaning: "which" },

        { hiragana: "どこ", preferredForm: "hiragana", kanjis: ["何処", "何所"], romanization: "doko", meaning: "where" },
        { hiragana: "どこら", preferredForm: "hiragana", kanjis: ["何処ら"], romanization: "dokora", meaning: "whereabouts (informal)" },
        { hiragana: "いずこ", preferredForm: "hiragana", kanjis: ["何処"], romanization: "izuko", meaning: "where / what place (very polite)" },
        { hiragana: "どっち", preferredForm: "hiragana", kanjis: ["何方"], romanization: "docchi", meaning: "which direction" },
        { hiragana: "どちら", preferredForm: "hiragana", kanjis: ["何方"], romanization: "dochira", meaning: "which direction (polite)" },

        { hiragana: "いつ", preferredForm: "hiragana", kanjis: ["何時"], romanization: "itsu", meaning: "when" },
        { kanjis: ["何時"], hiragana: "なんじ", romanization: "nanji", meaning: "which hour" },

        { hiragana: "なんで", preferredForm: "hiragana", kanjis: ["何で"], romanization: "nande", meaning: "why / how (informal) / 點解" },
        { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "why (logically) / 何解" },
        { hiragana: "どうして", preferredForm: "hiragana", rareKanjis: ["如何して"], romanization: "doushite", meaning: "why (purpose) / how / 點解會咁" },

        // TODO: counters
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
        { kanjis: ["人物"], hiragana: "じんぶつ", romanization: "jinbutsu", meaning: "character" },

        { kanjis: ["成人"], hiragana: "せいじん", romanization: "seijin", meaning: "adult" },
        { kanjis: ["大人"], hiragana: "おとな", romanization: "otona", meaning: "grown-up" },

        { kanjis: ["赤ちゃん"], hiragana: "あかちゃん", romanization: "akachan", meaning: "infant" },
        { kanjis: ["幼童"], hiragana: "ようどう", romanization: "youdou", meaning: "young child" },
        { kanjis: ["１０代", "十代"], hiragana: "じゅうだい", romanization: "juudai", meaning: "teenagers" },
        { kanjis: ["若年", "弱年"], hiragana: "じゃくねん", romanization: "jakunen", meaning: "youth (age-wise)" },
        { kanjis: ["若者"], hiragana: "わかもの", romanization: "wakamono", meaning: "young person / 年輕人 / 後生仔/女" },
        { kanjis: ["青年"], hiragana: "せいねん", romanization: "seinen", meaning: "young adulthood (age-wise)" },
        { kanjis: ["中年"], hiragana: "ちゅうねん", romanization: "chuunen", meaning: "middle-aged" },
        { kanjis: ["高齢者"], hiragana: "こうれいしゃ", romanization: "koureisha", meaning: "elderly" },

        { kanjis: ["男"], hiragana: "おとこ", romanization: "otoko", meaning: "man" },
        { kanjis: ["少年"], hiragana: "しょうねん", romanization: "shounen", meaning: "young man" },
        { kanjis: ["公子"], hiragana: "こうし", romanization: "koushi", meaning: "young nobleman" },
        { kanjis: ["紳士"], hiragana: "しんし", romanization: "shinshi", meaning: "gentleman" },
        { kanjis: ["殿方"], hiragana: "とのがた", romanization: "tonogata", meaning: "gentlemen (woman speaking to a group of men)" },

        { kanjis: ["女"], hiragana: "おんな", romanization: "onna", meaning: "woman (objectified)" },
        { kanjis: ["少女"], rareKanjis: ["小女"], hiragana: "しょうじょ", romanization: "shoujo", meaning: "young lady" },
        { kanjis: ["女子"], hiragana: "じょし", romanization: "joshi", meaning: "woman" },
        { kanjis: ["乙女", "少女"], hiragana: "おとめ", romanization: "otome", meaning: "young lady (idealized) / 淑女" },
        { kanjis: ["婦人"], hiragana: "ふじん", romanization: "fujin", meaning: "lady" },

        { kanjis: ["〇〇"], hiragana: "まるまる", romanization: "marumaru", meaning: "(placeholder)" },

        { kanjis: ["一人", "１人", "独り"], hiragana: "ひとり", romanization: "hitori", meaning: "one person" },
        { kanjis: ["一人", "１人"], hiragana: "いちにん", romanization: "ichinin", meaning: "one person" },
      );
    }

    if (this.flashcardSettings.enableNounsPeopleFamily) {
      words.splice(
        words.length,
        0, //
        // parents
        { kanjis: ["父母"], hiragana: "ふぼ", romanization: "fubo", meaning: "parents" },
        { kanjis: ["父母"], hiragana: "ちちはは", romanization: "chichihaha", meaning: "parents" },
        { kanjis: ["親"], hiragana: "おや", romanization: "oya", meaning: "parent / parents" },
        { kanjis: ["両親"], hiragana: "りょうしん", romanization: "ryoushin", meaning: "parents" },

        { kanjis: ["父さん"], hiragana: "とうさん", romanization: "tousan", meaning: "father (calling him)" },
        { kanjis: ["老爺"], hiragana: "おやじ", romanization: "oyaji", meaning: "father (calling him, used by old-fashioned men)" },
        { kanjis: ["お父さん"], hiragana: "おとうさん", romanization: "otousan", meaning: "father (referring to him or someone else's)" },
        { kanjis: ["父"], hiragana: "ちち", romanization: "chichi", meaning: "my father (referring to him)" },
        { kanjis: ["父親"], hiragana: "ちちおや", romanization: "chichioya", meaning: "father (objectified)" },

        { kanjis: ["母さん"], hiragana: "かあさん", romanization: "kaasan", meaning: "mother (calling her)" },
        { kanjis: ["お袋"], hiragana: "おふくろ", romanization: "ofukuro", meaning: "mother (calling her, used by old-fashioned men)" },
        { kanjis: ["お母さん"], hiragana: "おかあさん", romanization: "okaasan", meaning: "mother (referring to her or someone else's)" },
        { kanjis: ["母"], hiragana: "はは", romanization: "haha", meaning: "my mother (referring to her)" },
        { kanjis: ["母親"], hiragana: "ははおや", romanization: "hahaoya", meaning: "mother (objectified)" },

        // children
        { kanjis: ["子供", "子ども"], hiragana: "こども", romanization: "kodomo", meaning: "child / children" },
        { kanjis: ["子孫"], hiragana: "しそん", romanization: "shison", meaning: "descendants" },
        { kanjis: ["お子様", "お子さま"], hiragana: "おこさま", romanization: "okosama", meaning: "child (referring to someone else's)" },
        { kanjis: ["親子"], hiragana: "おやこ", romanization: "oyako", meaning: "parent and child" },
        { kanjis: ["親子"], hiragana: "しんし", romanization: "shinshi", meaning: "parent and child" },

        { kanjis: ["息子", "息"], hiragana: "むすこ", romanization: "musuko", meaning: "son" },
        { kanjis: ["お子さん"], hiragana: "おこさん", romanization: "okosan", meaning: "son" },
        { kanjis: ["男の子"], hiragana: "おとこのこ", romanization: "otokonoko", meaning: "baby boy" },

        { kanjis: ["娘"], hiragana: "むすめ", romanization: "musume", meaning: "daughter" },
        { kanjis: ["お嬢さん"], hiragana: "おじょうさん", romanization: "ojousan", meaning: "daughter" },
        { kanjis: ["女の子"], hiragana: "おんなのこ", romanization: "onnanoko", meaning: "baby girl" },
        // TODO: offspring

        // siblings
        { kanjis: ["兄弟姉妹"], hiragana: "きょうだいしまい", romanization: "kyoudaishimai", meaning: "siblings" },
        { kanjis: ["兄弟"], hiragana: "きょうだい", romanization: "kyoudai", meaning: "brothers" },
        { kanjis: ["姉妹"], hiragana: "しまい", romanization: "shimai", meaning: "sisters" },

        { kanjis: ["兄さん"], hiragana: "にいさん", romanization: "niisan", meaning: "elder brother (calling him)" },
        { kanjis: ["お兄さん"], hiragana: "おにいさん", romanization: "oniisan", meaning: "elder brother (referring to him or someone else's)" },
        { kanjis: ["兄"], hiragana: "あに", romanization: "ani", meaning: "my elder brother (referring to him)" },
        { kanjis: ["兄貴"], hiragana: "あにき", katakana: "アニキ", romanization: "aniki", meaning: "elder brother / senior (calling him / referring to him)" },

        { kanjis: ["姉さん"], hiragana: "ねえさん", romanization: "neesan", meaning: "elder sister (calling her)" },
        { kanjis: ["お姉さん"], hiragana: "おねえさん", romanization: "oneesan", meaning: "elder sister (referring to her or someone else's" },
        { kanjis: ["姉"], hiragana: "あね", romanization: "ane", meaning: "my elder sister (referring to her)" },

        { kanjis: ["弟さん"], hiragana: "おとうとさん", romanization: "otoutosan", meaning: "younger brother (referring to him or someone else's" },
        { kanjis: ["弟"], hiragana: "おとうと", romanization: "otouto", meaning: "my younger brother (referring to him)" },

        { kanjis: ["妹さん"], hiragana: "いもうとさん", romanization: "imoutosan", meaning: "younger sister (referring to her or someone else's)" },
        { kanjis: ["妹"], hiragana: "いもうと", romanization: "imouto", meaning: "my younger sister (referring to her)" },

        // grandparents
        { kanjis: ["祖父母"], hiragana: "そふぼ", romanization: "sofubo", meaning: "grandparents" },
        { hiragana: "じじばば", preferredForm: "hiragana", kanjis: ["祖父祖母", "爺婆"], katakana: "ジジババ", romanization: "jijibaba", meaning: "elderly" },

        { kanjis: ["爺さん"], rareKanjis: ["祖父さん"], hiragana: "じいさん", romanization: "jiisan", meaning: "grandfather (calling him)" },
        { kanjis: ["お祖父さん"], hiragana: "おじいさん", romanization: "ojiisan", meaning: "grandfather / old man (referring to him or someone else's)" },
        { kanjis: ["お爺ちゃま", "お祖父ちゃま"], hiragana: "おじいちゃま", romanization: "ojiichama", meaning: "grandfather (child referring to him or someone else's)" },
        { kanjis: ["祖父"], hiragana: "そふ", romanization: "sofu", meaning: "my grandfather (referring to her)" },
        { kanjis: ["祖父"], hiragana: "じじ", romanization: "jiji", meaning: "my grandfather (referring to her)" },
        { katakana: "グランパ", romanization: "gulanpa", meaning: "grandpa" },

        { kanjis: ["婆ちゃん"], rareKanjis: ["祖母ちゃん"], hiragana: "ばあちゃん", romanization: "baachan", meaning: "grandmother (calling her)" },
        { kanjis: ["お婆ちゃん"], rareKanjis: ["お祖母ちゃん"], hiragana: "おばあちゃん", romanization: "obaachan", meaning: "grandmother / old woman (referring to her or someone else's)" },
        { hiragana: "そぼ", romanization: "sobo", meaning: "my grandmother (referring to her)" },
        { hiragana: "ばば", romanization: "baba", meaning: "my grandmother (referring to her)" },
        { katakana: "グランマ", romanization: "gulanma", meaning: "grandma" },

        // miscellaneous relations
        { kanjis: ["曽祖父母"], hiragana: "そうそふぼ", romanization: "sousofubo", meaning: "great-grandparents" },
        { kanjis: ["義父母"], hiragana: "ぎふぼ", romanization: "gifubo", meaning: "parents-in-law" },
        { kanjis: ["継父母"], hiragana: "けいふぼ", romanization: "keifubo", meaning: "step-parents" },
        { kanjis: ["養父母"], hiragana: "ようふぼ", romanization: "youfubo", meaning: "adoptive parents" },

        { kanjis: ["養子"], hiragana: "ようし", romanization: "youshi", meaning: "adoptive son" },
        { kanjis: ["養女"], hiragana: "ようじょ", romanization: "youjo", meaning: "adoptive daughter" },

        { hiragana: "いとこ", preferredForm: "hiragana", kanjis: ["従兄弟"], romanization: "itoko", meaning: "cousins (male)" },
        { hiragana: "いとこ", preferredForm: "hiragana", kanjis: ["従姉妹"], romanization: "itoko", meaning: "cousins (female)" },

        // TODO: child, son, daughter
        // TODO: 叔父 uncle, 叔母 aunt
        // TODO: nieces and nephews
      );
    }

    if (this.flashcardSettings.enableNounsPeopleFellows) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["夫婦"], rareKanjis: ["妻夫", "女夫"], hiragana: "ふうふ", romanization: "fuufu", meaning: "spouses" },

        { kanjis: ["夫", "良人"], hiragana: "おっと", romanization: "otto", meaning: "husband" },
        { kanjis: ["良人"], hiragana: "りょうじん", romanization: "ryoujin", meaning: "husband" },
        { kanjis: ["妻"], hiragana: "つま", romanization: "tsuma", meaning: "wife" },
        { kanjis: ["夫人"], hiragana: "ふじん", romanization: "fujin", meaning: "Mrs xxx" },

        { kanjis: ["友"], hiragana: "とも", romanization: "tomo", meaning: "friend (root word)" },
        { kanjis: ["友達"], hiragana: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
        { kanjis: ["達"], hiragana: "だち", katakana: "ダチ", romanization: "dachi", meaning: "pal (slang)" },
        { kanjis: ["相棒"], hiragana: "あいぼう", romanization: "aibou", meaning: "partner (informal)" },
        { kanjis: ["友人"], hiragana: "ゆうじん", romanization: "yuujin", meaning: "friend (formal)" },
        { kanjis: ["朋友"], hiragana: "ほうゆう", romanization: "houyuu", meaning: "friend (literary)" },
        { kanjis: ["親友"], hiragana: "しんゆう", romanization: "shinyuu", meaning: "close friend (formal)" },

        { kanjis: ["知り合い"], hiragana: "しりあい", romanization: "shiriai", meaning: "acquaintance" },
        { kanjis: ["先輩"], hiragana: "せんぱい", romanization: "senpai", meaning: "senior" },
        { kanjis: ["後輩"], hiragana: "こうはい", romanization: "kouhai", meaning: "junior" },
        { katakana: "チーム", romanization: "chiimu", meaning: "team" },
        { katakana: "チームワーク", romanization: "chiimuwaaku", meaning: "teamwork" },
        { katakana: "グループ", romanization: "guruupu", meaning: "group" },
        { katakana: "メンバー", romanization: "menbaa", meaning: "member" },

        { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master" },
        { kanjis: ["大家"], hiragana: "たいか", romanization: "taika", meaning: "authority" },
        { kanjis: ["親方"], hiragana: "おやかた", romanization: "oyakata", meaning: "boss" },

        { kanjis: ["仲間"], hiragana: "なかま", romanization: "nakama", meaning: "fellow / companion (informal)" },
        { kanjis: ["同僚"], hiragana: "どうりょう", romanization: "douryou", meaning: "colleague (in similar position with you)" },
        { kanjis: ["上司"], hiragana: "じょうし", romanization: "joushi", meaning: "boss" },
        { kanjis: ["部下"], hiragana: "ぶか", romanization: "buka", meaning: "subordinate" },
        { kanjis: ["監督"], hiragana: "かんとく", romanization: "kantoku", meaning: "supervisor" },
        { kanjis: ["主管"], hiragana: "しゅかん", romanization: "shukan", meaning: "section head" },
        { kanjis: ["主任"], hiragana: "しゅにん", romanization: "shunin", meaning: "department head" },
        { kanjis: ["部長"], hiragana: "ぶちょう", romanization: "buchou", meaning: "department head" },
        { kanjis: ["係長"], rareKanjis: ["掛長"], hiragana: "かかりちょう", romanization: "kakarichou", meaning: "department head" },
        { kanjis: ["社長"], hiragana: "しゃちょう", romanization: "shachou", meaning: "president" },
      );
    }

    // TODO: directions
    if (this.flashcardSettings.enableNounsNavigation) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["方"], hiragana: "ほう", romanization: "hou", meaning: "direction (root word)" },
        { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "direction (root word)" },
        { kanjis: ["方向"], hiragana: "ほうこう", romanization: "houkou", meaning: "direction" },

        { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "front" },
        { kanjis: ["後"], hiragana: "あと", romanization: "ato", meaning: "back" },
        { kanjis: ["左"], hiragana: "あと", romanization: "hidari", meaning: "left" },
        { kanjis: ["右"], hiragana: "みぎ", romanization: "migi", meaning: "right" },
        { kanjis: ["真ん中"], hiragana: "まんなか", romanization: "mannaka", meaning: "center" },
        { kanjis: ["向こう"], hiragana: "むこう", romanization: "mukou", meaning: "beyond / the other side / 嗰度" },
        { kanjis: ["向こう側", "向う側"], hiragana: "むこうがわ", romanization: "mukougawa", meaning: "the other side / 嗰邊" },
        { kanjis: ["東"], hiragana: "ひがし", romanization: "higashi", meaning: "east" },
        { kanjis: ["南"], hiragana: "みなみ", romanization: "minami", meaning: "south" },
        { kanjis: ["西"], hiragana: "にし", romanization: "nishi", meaning: "west" },
        { kanjis: ["北"], hiragana: "きた", romanization: "kita", meaning: "north" },

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
        { kanjis: ["国", "邦"], hiragana: "くに", romanization: "kuni", meaning: "country" },
        { kanjis: ["都市"], hiragana: "とし", romanization: "toshi", meaning: "city" },
        { kanjis: ["村"], hiragana: "むら", romanization: "mura", meaning: "village" },

        { kanjis: ["見晴らし"], hiragana: "みはらし", romanization: "miharashi", meaning: "view" },
      );
    }

    // TODO: places
    if (this.flashcardSettings.enableNounsPlacesGeneric) {
      words.splice(
        words.length,
        0, //
        { katakana: "コンビニ", romanization: "konbini", meaning: "convenience store" },
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
        { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
        { kanjis: ["昨年"], hiragana: "さくねん", romanization: "sakunen", meaning: "last year (formal)" },
        { kanjis: ["来年"], hiragana: "らいねん", romanization: "rainen", meaning: "next year" },
        { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
        { kanjis: ["昨日"], hiragana: "きのう", romanization: "kinou", meaning: "yesterday" },
        { kanjis: ["明日"], hiragana: "あした", romanization: "ashita", meaning: "tomorrow" },

        { kanjis: ["午前中"], hiragana: "ごぜんちゅう", romanization: "gozenchuu", meaning: "in the morning" },

        { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
        { kanjis: ["次回"], hiragana: "じかい", romanization: "jikai", meaning: "next time" },
        { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "previously (root word)" },
        { kanjis: ["以前"], rareKanjis: ["已前"], hiragana: "いぜん", romanization: "izen", meaning: "the past" },
      );
    }

    // linguistics

    if (this.flashcardSettings.enableNounsIntangible) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["人間"], hiragana: "にんげん", romanization: "ningen", meaning: "mankind / human being" },
        { kanjis: ["人生"], hiragana: "じんせい", romanization: "jinsei", meaning: "life" },
        { kanjis: ["人生観"], hiragana: "じんせいかん", romanization: "jinseikan", meaning: "view of life" },

        { kanjis: ["男性"], hiragana: "だんせい", romanization: "dansei", meaning: "male" },
        { kanjis: ["男性性"], hiragana: "だんせいせい", romanization: "danseisei", meaning: "masculinity" },
        { kanjis: ["男装"], hiragana: "だんそう", romanization: "dansou", meaning: "men's clothing" },
        { kanjis: ["女性"], hiragana: "じょせい", romanization: "josei", meaning: "female" },
        { kanjis: ["女性性"], hiragana: "じょせいせい", romanization: "joseisei", meaning: "femininity" },
        { kanjis: ["女装"], hiragana: "じょそう", romanization: "josou", meaning: "women's clothing" },
        { kanjis: ["性"], hiragana: "せい", romanization: "sei", meaning: "sex / nature of a person" },
        { kanjis: ["性別"], hiragana: "せいべつ", romanization: "seibetsu", meaning: "gender" },
        { katakana: "ジェンダー", romanization: "jenda", meaning: "gender" },

        { kanjis: ["家"], hiragana: "いえ", romanization: "ie", meaning: "home" },
        { hiragana: "うち", preferredForm: "hiragana", kanjis: ["家"], romanization: "uchi", meaning: "house" },
        { kanjis: ["家族"], hiragana: "かぞく", romanization: "kazoku", meaning: "extended family" },
        { kanjis: ["親戚"], hiragana: "しんせき", romanization: "shinseki", meaning: "relatives" },
        { kanjis: ["親類"], hiragana: "しんるい", romanization: "shinrui", meaning: "relatives" },
        { kanjis: ["肉親"], hiragana: "にくしん", romanization: "nikushin", meaning: "blood relatives" },
        { kanjis: ["親族"], hiragana: "しんぞく", romanization: "shinzoku", meaning: "kin" },
        { kanjis: ["名前"], hiragana: "なまえ", romanization: "namae", meaning: "name" },
        { kanjis: ["姓名"], hiragana: "せいめい", romanization: "seimei", meaning: "full name" },
        { kanjis: ["氏名"], hiragana: "しめい", romanization: "shimei", meaning: "full name" },
        { kanjis: ["苗字", "名字"], hiragana: "みょうじ", romanization: "myouji", meaning: "surname" },

        { kanjis: ["親密"], hiragana: "しんみつ", romanization: "shinmitsu", meaning: "intimacy" },
        { kanjis: ["親しみ"], hiragana: "したしみ", romanization: "shitashimi", meaning: "familarity" },
        { kanjis: ["親善"], hiragana: "しんぜん", romanization: "shinzen", meaning: "goodwill" },
        { kanjis: ["離別"], hiragana: "りべつ", romanization: "ribetsu", meaning: "segregation" },
        { kanjis: ["分離"], hiragana: "ぶんり", romanization: "bunri", meaning: "detachment" },
        { kanjis: ["隔離"], hiragana: "かくり", romanization: "kakuri", meaning: "quarantine" },

        { kanjis: ["世代"], hiragana: "せだい", romanization: "sedai", meaning: "generation" },
        { kanjis: ["誕生日"], hiragana: "たんじょうび", romanization: "tanjoubi", meaning: "birthday" },
        { kanjis: ["長寿"], hiragana: "ちょうじゅ", romanization: "chouju", meaning: "longevity" },
        { kanjis: ["結婚"], hiragana: "けっこん", romanization: "kekkon", meaning: "marriage" },
        { kanjis: ["離婚"], hiragana: "りこん", romanization: "rikon", meaning: "divorce" },

        { kanjis: ["社会"], hiragana: "しゃかい", romanization: "shakai", meaning: "society" },
        { kanjis: ["教育"], hiragana: "きょういく", romanization: "kyouiku", meaning: "education" },
        { kanjis: ["育児"], hiragana: "いくじ", romanization: "ikuji", meaning: "childcare" },
        { kanjis: ["養成"], hiragana: "ようせい", romanization: "yousei", meaning: "development" },
        { kanjis: ["栄養", "営養"], hiragana: "えいよう", romanization: "eiyou", meaning: "nutrition" },
        { kanjis: ["教養"], hiragana: "きょうよう", romanization: "kyouyou", meaning: "manner" },
        { kanjis: ["療養"], hiragana: "りょうよう", romanization: "ryouyou", meaning: "convalescence" },
        { kanjis: ["休養"], hiragana: "きゅうよう", romanization: "kyuuyou", meaning: "recuperation / rest" },

        { kanjis: ["借金"], hiragana: "しゃっきん", romanization: "shakkin", meaning: "debt" },

        { kanjis: ["仕方"], hiragana: "しかた", romanization: "shikata", meaning: "way / method" },
        { kanjis: ["方法"], hiragana: "ほうほう", romanization: "houhou", meaning: "method / procedures" },
        { kanjis: ["方式"], hiragana: "ほうしき", romanization: "houshiki", meaning: "method / way of doing" },
        { kanjis: ["やり方", "遣り方"], hiragana: "やりかた", romanization: "yarikata", meaning: "way of doing" },
        { kanjis: ["手順"], hiragana: "てじゅん", romanization: "tejun", meaning: "procedures" },

        { kanjis: ["言葉"], rareKanjis: ["詞", "辞"], hiragana: "ことば", romanization: "kotoba", meaning: "language / word" },
        { kanjis: ["語"], hiragana: "ご", romanization: "go", meaning: "word" },
        { kanjis: ["言"], hiragana: "げん", romanization: "gen", meaning: "statement" },
        { katakana: "ワード", romanization: "woodo", meaning: "word" },
        { kanjis: ["見方"], hiragana: "みかた", romanization: "mikata", meaning: "point of view" },
        { kanjis: ["意見"], hiragana: "いけん", romanization: "iken", meaning: "opinion" },
        { kanjis: ["知らせ"], rareKanjis: ["報せ"], hiragana: "しらせ", romanization: "shirase", meaning: "news" },

        { kanjis: ["増加"], hiragana: "ぞうか", romanization: "zouka", meaning: "increase" },
        { kanjis: ["上昇"], hiragana: "じょうしょう", romanization: "joushou", meaning: "ascend" },
        { kanjis: ["末"], hiragana: "すえ", romanization: "sue", meaning: "end / tip" },
        { kanjis: ["関連"], rareKanjis: ["関聯"], hiragana: "かんれん", romanization: "kanren", meaning: "relevance" },

        { kanjis: ["真面目"], hiragana: "まじめ", katakana: "マジメ", romanization: "majime", meaning: "truthfulness" },

        { kanjis: ["難度"], hiragana: "なんど", romanization: "nando", meaning: "difficulty" },

        { kanjis: ["相続"], hiragana: "そうぞく", romanization: "souzoku", meaning: "succession" },
        { kanjis: ["相続人"], hiragana: "そうぞくにん", romanization: "souzokunin", meaning: "heir" },
        { kanjis: ["継承"], hiragana: "けいしょう", romanization: "keishou", meaning: "inheritance" },

        { kanjis: ["授業"], hiragana: "じゅぎょう", romanization: "jugyou", meaning: "class" },
        { kanjis: ["授業中"], hiragana: "じゅぎょうちゅう", romanization: "jugyouchuu", meaning: "in class" },
        { kanjis: ["学習"], hiragana: "がくしゅう", romanization: "gakushuu", meaning: "study" },
        { kanjis: ["勉強"], hiragana: "べんきょう", romanization: "benkyou", meaning: "study / hardwork" },
        { kanjis: ["習得", "修得"], hiragana: "しゅうとく", romanization: "shuutoku", meaning: "acquisition of a skill" },
        { kanjis: ["部活"], hiragana: "ぶかつ", romanization: "bukatsu", meaning: "club activities" },
        { kanjis: ["宿題"], hiragana: "しゅくだい", romanization: "shukudai", meaning: "homework" },

        { kanjis: ["参加"], hiragana: "さんか", romanization: "sanka", meaning: "participation" },
        { kanjis: ["遊び"], hiragana: "あそび", romanization: "asobi", meaning: "play" },
        { kanjis: ["遊び方"], hiragana: "あそびかた", romanization: "asobikata", meaning: "how to play" },
        { kanjis: ["遊び場"], hiragana: "あそびば", romanization: "asobiba", meaning: "playground" },

        { kanjis: ["訪れ"], hiragana: "おとずれ", romanization: "otozure", meaning: "rain" },

        { kanjis: ["雨"], hiragana: "あめ", romanization: "ame", meaning: "visit" },

        { katakana: "コンビニエンス", romanization: "konbiniensu", meaning: "convenience" },

        { katakana: "トイレ", romanization: "toire", meaning: "toilet" },
        { katakana: "トイレット", romanization: "toiretto", meaning: "toilet" },
        { katakana: "トイレットペーパー", romanization: "toirettopeepaa", meaning: "toilet paper" },

        { katakana: "ルール", romanization: "ruuru", meaning: "rule" },

        { kanjis: ["一人暮らし", "１人暮らし"], rareKanjis: ["独り暮らし"], hiragana: "ひとりぐらし", romanization: "hitorigurashi", meaning: "the state of living alone" },
      );
    }

    if (this.flashcardSettings.enableNounsMiscellaneous) {
      words.splice(
        words.length,
        0, //
        // TODO: body parts
        { kanjis: ["手"], hiragana: "て", romanization: "te", meaning: "hand / arm" },

        // TODO: animals
        { kanjis: ["猫"], hiragana: "ねこ", katakana: "ネコ", romanization: "neko", meaning: "cat" },

        // TODO: professions
        { kanjis: ["食通"], hiragana: "しょくつう", romanization: "shokutsuu", meaning: "gourmet: someone who is very knowledgeable about food and enjoys trying new things" },
        { katakana: "グルメ", romanization: "gurume", meaning: "gourmet / fine food" },

        // generic objects
        { kanjis: ["道", "途", "路", "径"], hiragana: "みち", romanization: "michi", meaning: "road / path" },
        { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },

        { kanjis: ["箱"], rareKanjis: ["函", "匣", "筥", "筐", "凾"], hiragana: "はこ", katakana: "ハコ", romanization: "hako", meaning: "box" },

        { katakana: "カメラ", romanization: "kamera", meaning: "camera" },
        { katakana: "キャメラ", romanization: "kiamera", meaning: "camera" },
        { katakana: "カメラマン", romanization: "kameraman", meaning: "cameraman" },

        { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },
      );
    }

    // TODO: https://www.japanesepod101.com/blog/2020/08/25/japanese-verbs/
    // TODO: https://preply.com/en/blog/basic-japanese-words/

    if (this.flashcardSettings.enableVerbsActions && this.flashcardSettings.enableGodanVerbs) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", meaning: "drink / swallow" },
        { kanjis: ["噛む", "咬む"], rareKanjis: ["嚙む", "嚼む"], hiragana: "かむ", romanization: "kamu", meaning: "bite / chew" },
        { hiragana: "かむ", preferredForm: "hiragana", rareKanjis: ["擤む"], romanization: "kamu", meaning: "blow" },
        { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", meaning: "hear / listen" },
        { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", meaning: "smell" },
        { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", meaning: "say" },
        { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", meaning: "go" },
        { kanjis: ["取る"], hiragana: "とる", romanization: "toru", meaning: "take / grab" },
        { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", meaning: "hold / carry" },
        { kanjis: ["歩く"], hiragana: "あるく", romanization: "aruku", meaning: "walk" },
        { kanjis: ["走る", "奔る", "疾る", "趨る"], hiragana: "はしる", romanization: "hashiru", meaning: "run / rush" },

        { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", meaning: "converse" },
        { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", meaning: "release" },
        { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", meaning: "depart" },

        { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", meaning: "read" },
        { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", meaning: "think / imagine / expect" },
        { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", meaning: "know" },
        { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", meaning: "learn" },
        { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", meaning: "teach" },

        { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", meaning: "use / employ / utilize" },
        { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", meaning: "move / act / shift" },
        { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", meaning: "occur" },
        { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", meaning: "inquire" },
        { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", meaning: "call / address" },
        { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", meaning: "become / attain" },

        { kanjis: ["親しむ"], hiragana: "したしむ", romanization: "shitashimu", meaning: "befriend" },
        { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", meaning: "play / have fun" },

        { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", meaning: "calm down" },
        { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", meaning: "raise" },
        { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", meaning: "vitalize" },
        { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", meaning: "foster" },

        // TODO: use
        // TODO: come
      );
    }

    if (this.flashcardSettings.enableVerbsIntransitive && this.flashcardSettings.enableGodanVerbs) {
      words.splice(
        words.length,
        0, //
        { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", meaning: "exist" },

        { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", meaning: "stand up" },
        { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", meaning: "rise" },
        { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", meaning: "rise" },

        { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", meaning: "finish" },
      );
    }

    if (this.flashcardSettings.enableVerbsActions && this.flashcardSettings.enableIchidanVerbs) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
        { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },

        { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", meaning: "consider / contemplate" },
        { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", meaning: "memorize" },

        { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", meaning: "mix" },

        { kanjis: ["離れる"], hiragana: "はなれる", romanization: "hanareru", meaning: "separate / leave" },
        { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", meaning: "cut apart" },
        { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", meaning: "pull apart" },
      );
    }

    if (this.flashcardSettings.enableVerbsIntransitive && this.flashcardSettings.enableIchidanVerbs) {
      words.splice(
        words.length,
        0, //
        { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", meaning: "wake up" },
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
        { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },

        { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
        { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", meaning: "considerate" },

        { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical" },

        { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
        { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },

        { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },
        { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", meaning: "magnificent" },
        { kanjis: ["凄い"], hiragana: "すごい", romanization: "sugoi", meaning: "impressive" },

        { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", meaning: "cute" },

        { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", meaning: "delicious" },

        { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
      );
    }

    // TODO: [JLPT N5 Grammar List](https://jlptsensei.com/jlpt-n5-grammar-list/)
    if (this.flashcardSettings.enableAdverbs) {
      words.splice(
        words.length,
        0, //
        { hiragana: "もう", romanization: "mou", meaning: "not any more / again" },
        { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if" },
        { hiragana: "もっと", romanization: "motto", meaning: "even more" },
        { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
        { hiragana: "もっとも", preferredForm: "hiragana", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "but then" },
        { hiragana: "なんて", romanization: "nande", meaning: "xxx or something like that" },
        { hiragana: "なんでも", preferredForm: "hiragana", kanjis: ["何でも"], romanization: "nandemo", meaning: "anything (in positive sentence)" },
        { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "for what reason" },
        { hiragana: "なぜか", preferredForm: "hiragana", kanjis: ["何故か"], romanization: "nazeka", meaning: "for some reason / somehow" },

        { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "likewise" },
        { hiragana: "すでに", preferredForm: "hiragana", kanjis: ["既に"], rareKanjis: ["已に"], romanization: "sudeni", meaning: "already" },
        { kanjis: ["先に"], rareKanjis: ["曩に"], hiragana: "さきに", romanization: "sakini", meaning: "previously" },
        { kanjis: ["この前"], rareKanjis: ["此の前"], hiragana: "このまえ", romanization: "konomae", meaning: "last time" },
        { kanjis: ["前もって"], rareKanjis: ["前以て"], hiragana: "まえもって", romanization: "maemotte", meaning: "in advance" },
        { kanjis: ["予め"], hiragana: "あらかじめ", romanization: "arakajime", meaning: "in advance" },
        { kanjis: ["予て", "兼ねて"], hiragana: "かねて", romanization: "kanete", meaning: "for quite a while" },

        { kanjis: ["何の"], hiragana: "なんの", romanization: "nanno", meaning: "what kind of" },
        { kanjis: ["何と"], hiragana: "なんと", romanization: "nanto", meaning: "how" },
        { kanjis: ["何らか", "何等か"], hiragana: "なんらか", romanization: "nanraka", meaning: "somewhat" },
        { kanjis: ["何にも"], hiragana: "なににも", romanization: "naninimo", meaning: "everything (in negative sentence)" },
        { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "nothing" },
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

        { exampleUsages: ["超xx"], kanjis: ["超"], hiragana: "ちょう", romanization: "chou", meaning: "super-" },
        { kanjis: ["大層", "大そう"], hiragana: "たいそう", romanization: "taisou", meaning: "greatly" },
        { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
        { kanjis: ["極めて"], hiragana: "きわめて", romanization: "kiwamete", meaning: "extremely" },
        { kanjis: ["随分", "ずい分"], hiragana: "ずいぶん", romanization: "zuibun", meaning: "extremely" },
        { kanjis: ["全然"], hiragana: "ぜんぜん", romanization: "zenzen", meaning: "completely" },
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
        { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case" },
        { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case" },
        { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc." },
        { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because" },
        { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because" },
      );
    }

    if (this.flashcardSettings.enablePhrasesInterjections) {
      words.splice(
        words.length,
        0, //
        { hiragana: "いい", romanization: "ii", meaning: "that's good (informal)" },
        { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "(agree)" },
        { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "that's good (formal)" },
        { hiragana: "まじ？", romanization: "maji", meaning: "seriously? (informal)" },

        { hiragana: "いや", preferredForm: "hiragana", kanjis: ["否"], romanization: "iya", meaning: "no" },
        { hiragana: "いいえ", romanization: "iie", meaning: "no (formal) / don't mention it" },
        { hiragana: "あれっ？", romanization: "are", meaning: "eh?" },
        { hiragana: "その…", romanization: "sono", meaning: "um... / 那個吧..." },

        { hiragana: "ほら", romanization: "hora", meaning: "look!" },
        { hiragana: "すげー", romanization: "sugee", meaning: "incredible" },
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
        { kanjis: ["何？"], hiragana: "なに？", romanization: "nani", meaning: "what?" },
        { kanjis: ["何ですか？"], hiragana: "なんですか？", romanization: "nandesuka", meaning: "what is it? (polite)" },
        { kanjis: ["何なのか？"], hiragana: "なんなのか？", romanization: "nannanoka", meaning: "what is this about?" },
        { kanjis: ["何なのか？"], hiragana: "なになのか？", romanization: "naninanoka", meaning: "what is this about?" },
        { hiragana: "どうして？", preferredForm: "hiragana", rareKanjis: ["如何して？"], romanization: "doushite", meaning: "why? / how?" },
        { hiragana: "どうして！", preferredForm: "hiragana", rareKanjis: ["如何して！"], romanization: "doushite", meaning: "no way!" },

        { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera" },

        { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "it can't be helped" },
      );
    }

    if (this.flashcardSettings.enableSentenceStructures) {
      words.splice(
        words.length,
        0, //
        // is / is not / was / was not
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] だ"], hiragana: "〇〇は〇〇だ", romanization: "da", meaning: "{xxx / it} is xxx (informal)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] です"], hiragana: "〇〇は〇〇です", romanization: "desu", meaning: "{xxx / it} is xxx (formal)" },

        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃない"], hiragana: "〇〇は〇〇じゃない", romanization: "janai", meaning: "{xxx / it} is not xxx (informal)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃありません"], hiragana: "〇〇は〇〇じゃありません", romanization: "ja arimasen", meaning: "{xxx / it} is not xxx (informal, polite)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではない"], hiragana: "〇〇は〇〇ではない", romanization: "dewanai", meaning: "{xxx / it} is not xxx (formal)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではない"], hiragana: "〇〇は〇〇ではありません", romanization: "dewa arimasen", meaning: "{xxx / it} is not xxx (formal, polite)" },

        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] だった"], hiragana: "〇〇は〇〇だった", romanization: "datta", meaning: "{xxx / it} was xxx (informal)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] でした"], hiragana: "〇〇は〇〇でした", romanization: "deshita", meaning: "{xxx / it} was xxx (formal)" },

        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃなかった"], hiragana: "〇〇は〇〇じゃなかった", romanization: "ja nakatta", meaning: "{xxx / it} was not xxx (informal)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃありませんでした"], hiragana: "〇〇は〇〇じゃありませんでした", romanization: "ja arimasen deshita", meaning: "{xxx / it} is was not xxx (informal, polite)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではなかった"], hiragana: "〇〇は〇〇ではなかった", romanization: "dewa nakatta", meaning: "{xxx / it} is was not xxx (formal)" },
        { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではありませんでした"], hiragana: "〇〇は〇〇ではありませんでした", romanization: "dewa arimasen deshita", meaning: "{xxx / it} was not xxx (formal, polite)" },

        // ---

        { exampleUsages: ["[Noun] で ..."], hiragana: "〇〇で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action" },
        { exampleUsages: ["どんな [Noun]"], hiragana: "どんな〇〇", romanization: "donna", meaning: "what kind of" },
        { exampleUsages: ["どうして [Clause]", "[Noun] は どうして [Verb]"], hiragana: "どうして", romanization: "doshite", meaning: "why / how 怎麼" },
        { exampleUsages: ["どうやって [Clause]", "[Noun] は/で どうやって [Verb]"], hiragana: "どうやって", romanization: "douyatte", meaning: "how 點樣" },

        { exampleUsages: ["...。 でも [Clause]"], hiragana: "でも", romanization: "demo", meaning: "however" },
        { exampleUsages: ["[Clause] が [Clause]"], hiragana: "が", romanization: "ga", meaning: "but" },

        { exampleUsages: ["[Noun] だけ", "[Verb] だけ", "[Adj.] だけ", "[Clause] だけ"], hiragana: "〇〇だけ", romanization: "dake", meaning: "xxx (in its entirety)" },
        // TODO: Shika, Bakari, Nomi

        { exampleUsages: ["だろう", "[Noun] だろう", "[Verb] だろう", "[Adj.] だろう"], hiragana: "〇〇だろう", romanization: "darou", meaning: "right? (informal, masculine)" },
        { exampleUsages: ["でしょう", "[Noun] でしょう", "[Verb] でしょう", "[Adj.] でしょう"], hiragana: "〇〇でしょう", romanization: "deshou", meaning: "right? (informal, polite)" },

        { exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)ダメ"], hiragana: "ちゃダメ", romanization: "cha dame", meaning: "should not / must not xxx! (informal)" },
        { exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけない"], hiragana: "ちゃいけない", romanization: "cha ikenai", meaning: "should not / must not xxx (informal)" },
        { exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけません"], hiragana: "ちゃいけません", romanization: "cha ikemasen", meaning: "should not / must not xxx (formal)" },

        { exampleUsages: ["[Verb]-ta + 後で", "[Noun]-の + 後で"], kanjis: ["後で"], hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal) / xx 左之後" },
        { exampleUsages: ["[Verb]-ta + 後に", "[Noun]-の + 後に"], kanjis: ["後に"], hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal) / xx 左之後" },
        { exampleUsages: ["[Verb]-te + から"], hiragana: "から", romanization: "kara", meaning: "xxx and immediately then / since xxx / xx (完)之後" },
      );
    }

    return words;
  });
})();
