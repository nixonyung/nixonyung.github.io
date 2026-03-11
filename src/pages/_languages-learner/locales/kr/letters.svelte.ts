import type { Keymap, Letter } from "../../types";
import { letterSettings } from "./KR.svelte";

export function getLettersAndKeymap() {
  const letters: Letter[] = [];
  const keymap: Keymap = {};

  if (letterSettings.enableRows.consonants.plain.value) {
    for (const letter of [
      { letter: "ㄱ", actualPronunciation: "개", romanization: "g", actualInput: "r" },
      { letter: "ㄷ", actualPronunciation: "돈", romanization: "d", actualInput: "e" },
      { letter: "ㅂ", actualPronunciation: "불", romanization: "b", actualInput: "q" },
      { letter: "ㅅ", actualPronunciation: "사", romanization: "s", actualInput: "t" },
      { letter: "ㅈ", actualPronunciation: "집", romanization: "j", actualInput: "w" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.tense.value) {
    for (const letter of [
      { letter: "ㄲ", actualPronunciation: "꽃", romanization: "kk", actualInput: "R" },
      { letter: "ㄸ", actualPronunciation: "땅", romanization: "tt", actualInput: "E" },
      { letter: "ㅃ", actualPronunciation: "뼈", romanization: "pp", actualInput: "Q" },
      { letter: "ㅆ", actualPronunciation: "씨", romanization: "ss", actualInput: "T" },
      { letter: "ㅉ", actualPronunciation: "쪽", romanization: "jj", actualInput: "W" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.aspirated.value) {
    for (const letter of [
      { letter: "ㅋ", actualPronunciation: "키", romanization: "k", actualInput: "z" },
      { letter: "ㅌ", actualPronunciation: "토", romanization: "t", actualInput: "x" },
      { letter: "ㅍ", actualPronunciation: "파", romanization: "p", actualInput: "v" },
      { letter: "ㅊ", actualPronunciation: "참", romanization: "ch", actualInput: "c" },
      { letter: "ㅎ", actualPronunciation: "한", romanization: "h", actualInput: "g" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.consonants.miscellaneous.value) {
    for (const letter of [
      { letter: "ㄴ", actualPronunciation: "눈", romanization: "n", actualInput: "s" },
      { letter: "ㅁ", actualPronunciation: "못", romanization: "m", actualInput: "a" },
      { letter: "ㄹ", actualPronunciation: "름", romanization: "r", actualInput: "f" },
      { letter: "ㅇ", actualPronunciation: "", romanization: undefined, actualInput: "d" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  for (const letter of [
    { letter: "ㅏ", actualPronunciation: "ㅏ", romanization: "a", actualInput: "k" },
    { letter: "ㅓ", actualPronunciation: "ㅓ", romanization: "eo", actualInput: "j" },
    { letter: "ㅗ", actualPronunciation: "ㅗ", romanization: "o", actualInput: "h" },
    { letter: "ㅜ", actualPronunciation: "ㅜ", romanization: "u", actualInput: "n" },
    { letter: "ㅡ", actualPronunciation: "ㅡ", romanization: "eu", actualInput: "m" },
    { letter: "ㅣ", actualPronunciation: "ㅣ", romanization: "i", actualInput: "l" },
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
      { letter: "ㅑ", actualPronunciation: "ㅑ", romanization: "ya", actualInput: "i" },
      { letter: "ㅕ", actualPronunciation: "ㅕ", romanization: "yeo", actualInput: "u" },
      { letter: "ㅛ", actualPronunciation: "ㅛ", romanization: "yo", actualInput: "y" },
      { letter: "ㅠ", actualPronunciation: "ㅠ", romanization: "yu", actualInput: "b" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }
  }

  if (letterSettings.enableRows.vowels.complex.value) {
    for (const letter of [
      { letter: "ㅐ", actualPronunciation: "ㅐ", romanization: "ae", actualInput: "o" },
      { letter: "ㅒ", actualPronunciation: "ㅒ", romanization: "yae", actualInput: "O" },
      { letter: "ㅔ", actualPronunciation: "ㅔ", romanization: "e", actualInput: "p" },
      { letter: "ㅖ", actualPronunciation: "ㅖ", romanization: "ye", actualInput: "P" },
    ]) {
      letters.push(letter);
      keymap[letter.actualInput] = letter.letter;
    }

    for (const letter of [
      { letter: "ㅘ", actualPronunciation: "ㅘ", romanization: "wa", actualInput: "hk" },
      { letter: "ㅙ", actualPronunciation: "ㅙ", romanization: "wae", actualInput: "ho" },
      { letter: "ㅚ", actualPronunciation: "ㅚ", romanization: "oe", actualInput: "hl" },
      { letter: "ㅝ", actualPronunciation: "ㅝ", romanization: "wo", actualInput: "nj" },
      { letter: "ㅞ", actualPronunciation: "ㅞ", romanization: "we", actualInput: "np" },
      { letter: "ㅟ", actualPronunciation: "ㅟ", romanization: "wi", actualInput: "nl" },
      { letter: "ㅢ", actualPronunciation: "ㅢ", romanization: "ui", actualInput: "ml" },
    ]) {
      letters.push(letter);
    }
  }

  return { letters, keymap };
}
