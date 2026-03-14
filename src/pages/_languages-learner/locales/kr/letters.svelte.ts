import type { Keymap, Letter } from "../../types";
import { letterSettings } from "./KR.svelte";

export function getLettersAndKeymap() {
  const letters: Letter[] = [];
  const keymap: Keymap = {};

  if (letterSettings.enableRows.consonants.plain.value) {
    for (const letter of [
      { letter: "ㄱ", utterance: "개", romanization: "g", actualInput: "r" },
      { letter: "ㄷ", utterance: "돈", romanization: "d", actualInput: "e" },
      { letter: "ㅂ", utterance: "불", romanization: "b", actualInput: "q" },
      { letter: "ㅅ", utterance: "사", romanization: "s", actualInput: "t" },
      { letter: "ㅈ", utterance: "집", romanization: "j", actualInput: "w" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.tense.value) {
    for (const letter of [
      { letter: "ㄲ", utterance: "꽃", romanization: "kk", actualInput: "R" },
      { letter: "ㄸ", utterance: "땅", romanization: "tt", actualInput: "E" },
      { letter: "ㅃ", utterance: "뼈", romanization: "pp", actualInput: "Q" },
      { letter: "ㅆ", utterance: "씨", romanization: "ss", actualInput: "T" },
      { letter: "ㅉ", utterance: "쪽", romanization: "jj", actualInput: "W" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.aspirated.value) {
    for (const letter of [
      { letter: "ㅋ", utterance: "키", romanization: "k", actualInput: "z" },
      { letter: "ㅌ", utterance: "토", romanization: "t", actualInput: "x" },
      { letter: "ㅍ", utterance: "파", romanization: "p", actualInput: "v" },
      { letter: "ㅊ", utterance: "참", romanization: "ch", actualInput: "c" },
      { letter: "ㅎ", utterance: "한", romanization: "h", actualInput: "g" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.miscellaneous.value) {
    for (const letter of [
      { letter: "ㄴ", utterance: "눈", romanization: "n", actualInput: "s" },
      { letter: "ㅁ", utterance: "못", romanization: "m", actualInput: "a" },
      { letter: "ㄹ", utterance: "름", romanization: "r", actualInput: "f" },
      { letter: "ㅇ", utterance: "", romanization: undefined, actualInput: "d" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  for (const letter of [
    { letter: "ㅏ", romanization: "a", actualInput: "k" },
    { letter: "ㅓ", romanization: "eo", actualInput: "j" },
    { letter: "ㅗ", romanization: "o", actualInput: "h" },
    { letter: "ㅜ", romanization: "u", actualInput: "n" },
    { letter: "ㅡ", romanization: "eu", actualInput: "m" },
    { letter: "ㅣ", romanization: "i", actualInput: "l" },
  ]) {
    if (letterSettings.enableRows.vowels.basic.value) {
      letters.push(letter);
    }
    if (letterSettings.enableRows.vowels.basic.value || letterSettings.enableRows.vowels.complex.value) {
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.vowels.basic.value) {
    for (const letter of [
      { letter: "ㅑ", romanization: "ya", actualInput: "i" },
      { letter: "ㅕ", romanization: "yeo", actualInput: "u" },
      { letter: "ㅛ", romanization: "yo", actualInput: "y" },
      { letter: "ㅠ", romanization: "yu", actualInput: "b" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.vowels.complex.value) {
    for (const letter of [
      { letter: "ㅐ", romanization: "ae", actualInput: "o" },
      { letter: "ㅒ", romanization: "yae", actualInput: "O" },
      { letter: "ㅔ", romanization: "e", actualInput: "p" },
      { letter: "ㅖ", romanization: "ye", actualInput: "P" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }

    for (const letter of [
      { letter: "ㅘ", romanization: "wa", actualInput: "hk" },
      { letter: "ㅙ", romanization: "wae", actualInput: "ho" },
      { letter: "ㅚ", romanization: "oe", actualInput: "hl" },
      { letter: "ㅝ", romanization: "wo", actualInput: "nj" },
      { letter: "ㅞ", romanization: "we", actualInput: "np" },
      { letter: "ㅟ", romanization: "wi", actualInput: "nl" },
      { letter: "ㅢ", romanization: "ui", actualInput: "ml" },
    ]) {
      letters.push(letter);
    }
  }

  return { letters, keymap };
}
