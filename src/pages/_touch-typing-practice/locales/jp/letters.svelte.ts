import { cloneDeep } from "es-toolkit";
import type { Gojuon, Letter } from "../../types";
import { jp } from "./jp.svelte";

export function getGojuons(): Gojuon[] {
  // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)

  const gojuons: Gojuon[] = [];

  // 平假名 Hiragana
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowA) {
    gojuons.push(
      //
      { letter: "あ", romanization: "a", gojuonPosition: { row: 0, col: 0 } },
      { letter: "い", romanization: "i", gojuonPosition: { row: 0, col: 1 } },
      { letter: "う", romanization: "u", gojuonPosition: { row: 0, col: 2 } },
      { letter: "え", romanization: "e", gojuonPosition: { row: 0, col: 3 } },
      { letter: "お", romanization: "o", gojuonPosition: { row: 0, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowKa) {
    gojuons.push(
      //
      { letter: "か", romanization: "ka", gojuonPosition: { row: 1, col: 0 } },
      { letter: "き", romanization: "ki", gojuonPosition: { row: 1, col: 1 } },
      { letter: "く", romanization: "ku", gojuonPosition: { row: 1, col: 2 } },
      { letter: "け", romanization: "ke", gojuonPosition: { row: 1, col: 3 } },
      { letter: "こ", romanization: "ko", gojuonPosition: { row: 1, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowSa) {
    gojuons.push(
      //
      { letter: "さ", romanization: "sa", gojuonPosition: { row: 2, col: 0 } },
      { letter: "し", romanization: "shi", gojuonPosition: { row: 2, col: 1 } },
      { letter: "す", romanization: "su", gojuonPosition: { row: 2, col: 2 } },
      { letter: "せ", romanization: "se", gojuonPosition: { row: 2, col: 3 } },
      { letter: "そ", romanization: "so", gojuonPosition: { row: 2, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowTa) {
    gojuons.push(
      //
      { letter: "た", romanization: "ta", gojuonPosition: { row: 3, col: 0 } },
      { letter: "ち", romanization: "chi", gojuonPosition: { row: 3, col: 1 } },
      { letter: "つ", romanization: "tsu", gojuonPosition: { row: 3, col: 2 } },
      { letter: "て", romanization: "te", gojuonPosition: { row: 3, col: 3 } },
      { letter: "と", romanization: "to", gojuonPosition: { row: 3, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowNa) {
    gojuons.push(
      //
      { letter: "な", romanization: "na", gojuonPosition: { row: 4, col: 0 } },
      { letter: "に", romanization: "ni", gojuonPosition: { row: 4, col: 1 } },
      { letter: "ぬ", romanization: "nu", gojuonPosition: { row: 4, col: 2 } },
      { letter: "ね", romanization: "ne", gojuonPosition: { row: 4, col: 3 } },
      { letter: "の", romanization: "no", gojuonPosition: { row: 4, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowHa) {
    gojuons.push(
      //
      { letter: "は", romanization: "ha", gojuonPosition: { row: 5, col: 0 } },
      { letter: "ひ", romanization: "hi", gojuonPosition: { row: 5, col: 1 } },
      { letter: "ふ", romanization: "fu", gojuonPosition: { row: 5, col: 2 } },
      { letter: "へ", romanization: "he", gojuonPosition: { row: 5, col: 3 } },
      { letter: "ほ", romanization: "ho", gojuonPosition: { row: 5, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowMa) {
    gojuons.push(
      //
      { letter: "ま", romanization: "ma", gojuonPosition: { row: 6, col: 0 } },
      { letter: "み", romanization: "mi", gojuonPosition: { row: 6, col: 1 } },
      { letter: "む", romanization: "mu", gojuonPosition: { row: 6, col: 2 } },
      { letter: "め", romanization: "me", gojuonPosition: { row: 6, col: 3 } },
      { letter: "も", romanization: "mo", gojuonPosition: { row: 6, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowYa) {
    gojuons.push(
      //
      { letter: "や", romanization: "ya", gojuonPosition: { row: 7, col: 0 } },
      { letter: "ゆ", romanization: "yu", gojuonPosition: { row: 7, col: 2 } },
      { letter: "よ", romanization: "yo", gojuonPosition: { row: 7, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowRa) {
    gojuons.push(
      //
      { letter: "ら", romanization: "ra", gojuonPosition: { row: 8, col: 0 } },
      { letter: "り", romanization: "ri", gojuonPosition: { row: 8, col: 1 } },
      { letter: "る", romanization: "ru", gojuonPosition: { row: 8, col: 2 } },
      { letter: "れ", romanization: "re", gojuonPosition: { row: 8, col: 3 } },
      { letter: "ろ", romanization: "ro", gojuonPosition: { row: 8, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowWa) {
    gojuons.push(
      //
      { letter: "わ", romanization: "wa", gojuonPosition: { row: 9, col: 0 } },
      { letter: "を", romanization: "o", gojuonPosition: { row: 9, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowN) {
    gojuons.push(
      //
      { letter: "ん", romanization: "n", gojuonPosition: { row: 10, col: 0 } },
    );
  }

  // 片假名 Katakana
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowA) {
    gojuons.push(
      //
      { letter: "ア", romanization: "a", gojuonPosition: { row: 0, col: 0 } },
      { letter: "イ", romanization: "i", gojuonPosition: { row: 0, col: 1 } },
      { letter: "ウ", romanization: "u", gojuonPosition: { row: 0, col: 2 } },
      { letter: "エ", romanization: "e", gojuonPosition: { row: 0, col: 3 } },
      { letter: "オ", romanization: "o", gojuonPosition: { row: 0, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowKa) {
    gojuons.push(
      //
      { letter: "カ", romanization: "ka", gojuonPosition: { row: 1, col: 0 } },
      { letter: "キ", romanization: "ki", gojuonPosition: { row: 1, col: 1 } },
      { letter: "ク", romanization: "ku", gojuonPosition: { row: 1, col: 2 } },
      { letter: "ケ", romanization: "ke", gojuonPosition: { row: 1, col: 3 } },
      { letter: "コ", romanization: "ko", gojuonPosition: { row: 1, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowSa) {
    gojuons.push(
      //
      { letter: "サ", romanization: "sa", gojuonPosition: { row: 2, col: 0 } },
      { letter: "シ", romanization: "shi", gojuonPosition: { row: 2, col: 1 } },
      { letter: "ス", romanization: "su", gojuonPosition: { row: 2, col: 2 } },
      { letter: "セ", romanization: "se", gojuonPosition: { row: 2, col: 3 } },
      { letter: "ソ", romanization: "so", gojuonPosition: { row: 2, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowTa) {
    gojuons.push(
      //
      { letter: "タ", romanization: "ta", gojuonPosition: { row: 3, col: 0 } },
      { letter: "チ", romanization: "chi", gojuonPosition: { row: 3, col: 1 } },
      { letter: "ツ", romanization: "tsu", gojuonPosition: { row: 3, col: 2 } },
      { letter: "テ", romanization: "te", gojuonPosition: { row: 3, col: 3 } },
      { letter: "ト", romanization: "to", gojuonPosition: { row: 3, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowNa) {
    gojuons.push(
      //
      { letter: "ナ", romanization: "na", gojuonPosition: { row: 4, col: 0 } },
      { letter: "ニ", romanization: "ni", gojuonPosition: { row: 4, col: 1 } },
      { letter: "ヌ", romanization: "nu", gojuonPosition: { row: 4, col: 2 } },
      { letter: "ネ", romanization: "ne", gojuonPosition: { row: 4, col: 3 } },
      { letter: "ノ", romanization: "no", gojuonPosition: { row: 4, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowHa) {
    gojuons.push(
      //
      { letter: "ハ", romanization: "ha", gojuonPosition: { row: 5, col: 0 } },
      { letter: "ヒ", romanization: "hi", gojuonPosition: { row: 5, col: 1 } },
      { letter: "フ", romanization: "fu", gojuonPosition: { row: 5, col: 2 } },
      { letter: "ヘ", romanization: "he", gojuonPosition: { row: 5, col: 3 } },
      { letter: "ホ", romanization: "ho", gojuonPosition: { row: 5, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowMa) {
    gojuons.push(
      //
      { letter: "マ", romanization: "ma", gojuonPosition: { row: 6, col: 0 } },
      { letter: "ミ", romanization: "mi", gojuonPosition: { row: 6, col: 1 } },
      { letter: "ム", romanization: "mu", gojuonPosition: { row: 6, col: 2 } },
      { letter: "メ", romanization: "me", gojuonPosition: { row: 6, col: 3 } },
      { letter: "モ", romanization: "mo", gojuonPosition: { row: 6, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowYa) {
    gojuons.push(
      //
      { letter: "ヤ", romanization: "ya", gojuonPosition: { row: 7, col: 0 } },
      { letter: "ユ", romanization: "yu", gojuonPosition: { row: 7, col: 2 } },
      { letter: "ヨ", romanization: "yo", gojuonPosition: { row: 7, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowRa) {
    gojuons.push(
      //
      { letter: "ラ", romanization: "ra", gojuonPosition: { row: 8, col: 0 } },
      { letter: "リ", romanization: "ri", gojuonPosition: { row: 8, col: 1 } },
      { letter: "ル", romanization: "ru", gojuonPosition: { row: 8, col: 2 } },
      { letter: "レ", romanization: "re", gojuonPosition: { row: 8, col: 3 } },
      { letter: "ロ", romanization: "ro", gojuonPosition: { row: 8, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowWa) {
    gojuons.push(
      //
      { letter: "ワ", romanization: "wa", gojuonPosition: { row: 9, col: 0 } },
      { letter: "ヲ", romanization: "o", gojuonPosition: { row: 9, col: 4 } },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowN) {
    gojuons.push(
      //
      { letter: "ン", romanization: "n", gojuonPosition: { row: 10, col: 0 } },
    );
  }

  return gojuons;
}

export const getLetters = (): Letter[] => {
  // (ref.) [平文式羅馬字](https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表)

  const letters: Letter[] = cloneDeep(getGojuons());

  // Hiragana - 濁音 Dakuten and 半濁音 Handakuten
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowKa) {
    letters.push(
      //
      { letter: "が", romanization: "ga" },
      { letter: "ぎ", romanization: "gi" },
      { letter: "ぐ", romanization: "gu" },
      { letter: "げ", romanization: "ge" },
      { letter: "ご", romanization: "go" },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowSa) {
    letters.push(
      //
      { letter: "ざ", romanization: "za" },
      { letter: "じ", romanization: "ji" },
      { letter: "ず", romanization: "zu" },
      { letter: "ぜ", romanization: "ze" },
      { letter: "ぞ", romanization: "zo" },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowTa) {
    letters.push(
      //
      { letter: "だ", romanization: "da" },
      { letter: "ぢ", romanization: "ji" },
      { letter: "づ", romanization: "zu" },
      { letter: "で", romanization: "de" },
      { letter: "ど", romanization: "do" },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowHa) {
    letters.push(
      //
      { letter: "ば", romanization: "ba" },
      { letter: "び", romanization: "bi" },
      { letter: "ぶ", romanization: "bu" },
      { letter: "べ", romanization: "be" },
      { letter: "ぼ", romanization: "bo" },
    );
  }
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowHa) {
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
  if (jp.gojuonSettings.enableHiragana && jp.gojuonSettings.enableRowYa && jp.gojuonSettings.enableYoon) {
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
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowKa) {
    letters.push(
      //
      { letter: "ガ", romanization: "ga" },
      { letter: "ギ", romanization: "gi" },
      { letter: "グ", romanization: "gu" },
      { letter: "ゲ", romanization: "ge" },
      { letter: "ゴ", romanization: "go" },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowSa) {
    letters.push(
      //
      { letter: "ザ", romanization: "za" },
      { letter: "ジ", romanization: "ji" },
      { letter: "ズ", romanization: "zu" },
      { letter: "ゼ", romanization: "ze" },
      { letter: "ゾ", romanization: "zo" },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowTa) {
    letters.push(
      //
      { letter: "ダ", romanization: "da" },
      { letter: "ヂ", romanization: "ji" },
      { letter: "ヅ", romanization: "zu" },
      { letter: "デ", romanization: "de" },
      { letter: "ド", romanization: "do" },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowHa) {
    letters.push(
      //
      { letter: "バ", romanization: "ba" },
      { letter: "ビ", romanization: "bi" },
      { letter: "ブ", romanization: "bu" },
      { letter: "ベ", romanization: "be" },
      { letter: "ボ", romanization: "bo" },
    );
  }
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableDiacritics && jp.gojuonSettings.enableRowHa) {
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
  if (jp.gojuonSettings.enableKatakana && jp.gojuonSettings.enableRowYa && jp.gojuonSettings.enableYoon) {
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
};
