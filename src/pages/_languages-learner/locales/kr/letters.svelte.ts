import type { Keymap } from "../../components/TypingKeyboard.svelte";
import { letterSettings } from "./LettersSettings.svelte";

export function getLettersAndKeymap() {
  const letters: {
    letter: string;
    input: string;
    romanization?: string;
    utterance?: string;
  }[] = [];
  const keymap: Keymap = {};

  if (letterSettings.enableRows.consonants.plain.value) {
    for (const letter of [
      { letter: "ㄱ", input: "r", utterance: "개", romanization: "g" },
      { letter: "ㄷ", input: "e", utterance: "돈", romanization: "d" },
      { letter: "ㅂ", input: "q", utterance: "불", romanization: "b" },
      { letter: "ㅅ", input: "t", utterance: "사", romanization: "s" },
      { letter: "ㅈ", input: "w", utterance: "집", romanization: "j" },
    ]) {
      letters.push(letter);
      keymap[letter.input] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.tense.value) {
    for (const letter of [
      { letter: "ㄲ", input: "R", utterance: "꽃", romanization: "kk" },
      { letter: "ㄸ", input: "E", utterance: "땅", romanization: "tt" },
      { letter: "ㅃ", input: "Q", utterance: "뼈", romanization: "pp" },
      { letter: "ㅆ", input: "T", utterance: "씨", romanization: "ss" },
      { letter: "ㅉ", input: "W", utterance: "쪽", romanization: "jj" },
    ]) {
      letters.push(letter);
      keymap[letter.input] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.aspirated.value) {
    for (const letter of [
      { letter: "ㅋ", input: "z", utterance: "키", romanization: "k" },
      { letter: "ㅌ", input: "x", utterance: "토", romanization: "t" },
      { letter: "ㅍ", input: "v", utterance: "파", romanization: "p" },
      { letter: "ㅊ", input: "c", utterance: "참", romanization: "ch" },
      { letter: "ㅎ", input: "g", utterance: "한", romanization: "h" },
    ]) {
      letters.push(letter);
      keymap[letter.input] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.miscellaneous.value) {
    for (const letter of [
      { letter: "ㄴ", input: "s", utterance: "눈", romanization: "n" },
      { letter: "ㅁ", input: "a", utterance: "못", romanization: "m" },
      { letter: "ㄹ", input: "f", utterance: "름", romanization: "r" },
      { letter: "ㅇ", input: "d" },
    ]) {
      letters.push(letter);
      keymap[letter.input] = letter.letter;
    }
  }

  for (const letter of [
    { letter: "ㅏ", input: "k", romanization: "a" },
    { letter: "ㅓ", input: "j", romanization: "eo" },
    { letter: "ㅗ", input: "h", romanization: "o" },
    { letter: "ㅜ", input: "n", romanization: "u" },
    { letter: "ㅡ", input: "m", romanization: "eu" },
    { letter: "ㅣ", input: "l", romanization: "i" },
  ]) {
    if (letterSettings.enableRows.vowels.basic.value) {
      letters.push(letter);
    }
    if (letterSettings.enableRows.vowels.basic.value || letterSettings.enableRows.vowels.complex.value) {
      keymap[letter.input] = letter.letter;
    }
  }

  if (letterSettings.enableRows.vowels.basic.value) {
    for (const letter of [
      { letter: "ㅑ", input: "i", romanization: "ya" },
      { letter: "ㅕ", input: "u", romanization: "yeo" },
      { letter: "ㅛ", input: "y", romanization: "yo" },
      { letter: "ㅠ", input: "b", romanization: "yu" },
    ]) {
      letters.push(letter);
      keymap[letter.input] = letter.letter;
    }
  }

  if (letterSettings.enableRows.vowels.complex.value) {
    for (const letter of [
      { letter: "ㅐ", input: "o", romanization: "ae" },
      { letter: "ㅒ", input: "O", romanization: "yae" },
      { letter: "ㅔ", input: "p", romanization: "e" },
      { letter: "ㅖ", input: "P", romanization: "ye" },
    ]) {
      letters.push(letter);
      keymap[letter.input] = letter.letter;
    }

    for (const letter of [
      { letter: "ㅘ", input: "hk", romanization: "wa" },
      { letter: "ㅙ", input: "ho", romanization: "wae" },
      { letter: "ㅚ", input: "hl", romanization: "oe" },
      { letter: "ㅝ", input: "nj", romanization: "wo" },
      { letter: "ㅞ", input: "np", romanization: "we" },
      { letter: "ㅟ", input: "nl", romanization: "wi" },
      { letter: "ㅢ", input: "ml", romanization: "ui" },
    ]) {
      letters.push(letter);
    }
  }

  return { letters, keymap };
}
