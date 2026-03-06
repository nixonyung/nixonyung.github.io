import type { Letter } from "../../types";
import { gojuonSettings } from "./GojuonTable.svelte";

export function getLetters() {
  const letters: Letter[] = [];

  // 平假名 Hiragana
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowA.value) {
    letters.push(
      //
      { letter: "あ", romanization: "a" },
      { letter: "い", romanization: "i" },
      { letter: "う", romanization: "u" },
      { letter: "え", romanization: "e" },
      { letter: "お", romanization: "o" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowKa.value) {
    letters.push(
      //
      { letter: "か", romanization: "ka" },
      { letter: "き", romanization: "ki" },
      { letter: "く", romanization: "ku" },
      { letter: "け", romanization: "ke" },
      { letter: "こ", romanization: "ko" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowSa.value) {
    letters.push(
      //
      { letter: "さ", romanization: "sa" },
      { letter: "し", romanization: "shi" },
      { letter: "す", romanization: "su" },
      { letter: "せ", romanization: "se" },
      { letter: "そ", romanization: "so" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowTa.value) {
    letters.push(
      //
      { letter: "た", romanization: "ta" },
      { letter: "ち", romanization: "chi" },
      { letter: "つ", romanization: "tsu" },
      { letter: "て", romanization: "te" },
      { letter: "と", romanization: "to" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowNa.value) {
    letters.push(
      //
      { letter: "な", romanization: "na" },
      { letter: "に", romanization: "ni" },
      { letter: "ぬ", romanization: "nu" },
      { letter: "ね", romanization: "ne" },
      { letter: "の", romanization: "no" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowHa.value) {
    letters.push(
      //
      { letter: "は", romanization: "ha" },
      { letter: "ひ", romanization: "hi" },
      { letter: "ふ", romanization: "fu" },
      { letter: "へ", romanization: "he" },
      { letter: "ほ", romanization: "ho" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowMa.value) {
    letters.push(
      //
      { letter: "ま", romanization: "ma" },
      { letter: "み", romanization: "mi" },
      { letter: "む", romanization: "mu" },
      { letter: "め", romanization: "me" },
      { letter: "も", romanization: "mo" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowYa.value) {
    letters.push(
      //
      { letter: "や", romanization: "ya" },
      { letter: "ゆ", romanization: "yu" },
      { letter: "よ", romanization: "yo" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowRa.value) {
    letters.push(
      //
      { letter: "ら", romanization: "ra" },
      { letter: "り", romanization: "ri" },
      { letter: "る", romanization: "ru" },
      { letter: "れ", romanization: "re" },
      { letter: "ろ", romanization: "ro" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowWa.value) {
    letters.push(
      //
      { letter: "わ", romanization: "wa" },
      { letter: "を", romanization: "o" },
    );
  }
  if (gojuonSettings.enableSubsets.hiragana.value && gojuonSettings.enableRows.rowN.value) {
    letters.push(
      //
      { letter: "ん", romanization: "n" },
    );
  }

  // 片假名 Katakana
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowA.value) {
    letters.push(
      //
      { letter: "ア", romanization: "a" },
      { letter: "イ", romanization: "i" },
      { letter: "ウ", romanization: "u" },
      { letter: "エ", romanization: "e" },
      { letter: "オ", romanization: "o" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowKa.value) {
    letters.push(
      //
      { letter: "カ", romanization: "ka" },
      { letter: "キ", romanization: "ki" },
      { letter: "ク", romanization: "ku" },
      { letter: "ケ", romanization: "ke" },
      { letter: "コ", romanization: "ko" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowSa.value) {
    letters.push(
      //
      { letter: "サ", romanization: "sa" },
      { letter: "シ", romanization: "shi" },
      { letter: "ス", romanization: "su" },
      { letter: "セ", romanization: "se" },
      { letter: "ソ", romanization: "so" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowTa.value) {
    letters.push(
      //
      { letter: "タ", romanization: "ta" },
      { letter: "チ", romanization: "chi" },
      { letter: "ツ", romanization: "tsu" },
      { letter: "テ", romanization: "te" },
      { letter: "ト", romanization: "to" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowNa.value) {
    letters.push(
      //
      { letter: "ナ", romanization: "na" },
      { letter: "ニ", romanization: "ni" },
      { letter: "ヌ", romanization: "nu" },
      { letter: "ネ", romanization: "ne" },
      { letter: "ノ", romanization: "no" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowHa.value) {
    letters.push(
      //
      { letter: "ハ", romanization: "ha" },
      { letter: "ヒ", romanization: "hi" },
      { letter: "フ", romanization: "fu" },
      { letter: "ヘ", romanization: "he" },
      { letter: "ホ", romanization: "ho" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowMa.value) {
    letters.push(
      //
      { letter: "マ", romanization: "ma" },
      { letter: "ミ", romanization: "mi" },
      { letter: "ム", romanization: "mu" },
      { letter: "メ", romanization: "me" },
      { letter: "モ", romanization: "mo" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowYa.value) {
    letters.push(
      //
      { letter: "ヤ", romanization: "ya" },
      { letter: "ユ", romanization: "yu" },
      { letter: "ヨ", romanization: "yo" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowRa.value) {
    letters.push(
      //
      { letter: "ラ", romanization: "ra" },
      { letter: "リ", romanization: "ri" },
      { letter: "ル", romanization: "ru" },
      { letter: "レ", romanization: "re" },
      { letter: "ロ", romanization: "ro" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowWa.value) {
    letters.push(
      //
      { letter: "ワ", romanization: "wa" },
      { letter: "ヲ", romanization: "o" },
    );
  }
  if (gojuonSettings.enableSubsets.katakana.value && gojuonSettings.enableRows.rowN.value) {
    letters.push(
      //
      { letter: "ン", romanization: "n" },
    );
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
