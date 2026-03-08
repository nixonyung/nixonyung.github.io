import type { Letter } from "../../types";
import { letterSettings } from "./KR.svelte";

export function getLetters() {
  const letters: Letter[] = [];

  if (letterSettings.enableRows.consonants.plain.value) {
    letters.push(
      //
      { letter: "ㄱ", actualPronunciation: "가", romanization: "g", actualInput: "r" },
      { letter: "ㄷ", actualPronunciation: "다", romanization: "d", actualInput: "e" },
      { letter: "ㅂ", actualPronunciation: "바", romanization: "b", actualInput: "q" },
      { letter: "ㅅ", actualPronunciation: "사", romanization: "s", actualInput: "t" },
      { letter: "ㅈ", actualPronunciation: "자", romanization: "j", actualInput: "w" },
    );
  }

  if (letterSettings.enableRows.consonants.aspirated.value) {
    letters.push(
      //
      { letter: "ㅋ", actualPronunciation: "카", romanization: "k", actualInput: "z" },
      { letter: "ㅌ", actualPronunciation: "타", romanization: "t", actualInput: "x" },
      { letter: "ㅍ", actualPronunciation: "파", romanization: "p", actualInput: "v" },
      { letter: "ㅊ", actualPronunciation: "차", romanization: "ch", actualInput: "c" },

      { letter: "ㅎ", actualPronunciation: "하", romanization: "h", actualInput: "g" },
    );
  }

  if (letterSettings.enableRows.consonants.tense.value) {
    letters.push(
      //
      { letter: "ㄲ", actualPronunciation: "까", romanization: "kk", actualInput: "R" },
      { letter: "ㄸ", actualPronunciation: "따", romanization: "tt", actualInput: "E" },
      { letter: "ㅃ", actualPronunciation: "빠", romanization: "pp", actualInput: "Q" },
      { letter: "ㅆ", actualPronunciation: "싸", romanization: "ss", actualInput: "T" },
      { letter: "ㅉ", actualPronunciation: "짜", romanization: "jj", actualInput: "W" },
    );
  }

  if (letterSettings.enableRows.consonants.miscellaneous.value) {
    letters.push(
      //
      { letter: "ㄴ", actualPronunciation: "나", romanization: "n", actualInput: "s" },
      { letter: "ㅁ", actualPronunciation: "마", romanization: "m", actualInput: "a" },
      { letter: "ㄹ", actualPronunciation: "라", romanization: "r", actualInput: "f" },
      { letter: "ㅇ", actualPronunciation: undefined, romanization: undefined, actualInput: "d" },
    );
  }

  if (letterSettings.enableRows.vowels.basic.value) {
    letters.push(
      //
      { letter: "ㅏ", actualPronunciation: "ㅏ", romanization: "a", actualInput: "k" },
      { letter: "ㅑ", actualPronunciation: "ㅑ", romanization: "ya", actualInput: "i" },
      { letter: "ㅓ", actualPronunciation: "ㅓ", romanization: "eo", actualInput: "j" },
      { letter: "ㅕ", actualPronunciation: "ㅕ", romanization: "yeo", actualInput: "u" },
      { letter: "ㅗ", actualPronunciation: "ㅗ", romanization: "o", actualInput: "h" },
      { letter: "ㅛ", actualPronunciation: "ㅛ", romanization: "yo", actualInput: "y" },
      { letter: "ㅜ", actualPronunciation: "ㅜ", romanization: "u", actualInput: "n" },
      { letter: "ㅠ", actualPronunciation: "ㅠ", romanization: "yu", actualInput: "b" },
      { letter: "ㅡ", actualPronunciation: "ㅡ", romanization: "eu", actualInput: "m" },
      { letter: "ㅣ", actualPronunciation: "ㅣ", romanization: "i", actualInput: "l" },
    );
  }

  if (letterSettings.enableRows.vowels.complex.value) {
    letters.push(
      //
      { letter: "ㅐ", actualPronunciation: "ㅐ", romanization: "ae", actualInput: "o" },
      { letter: "ㅒ", actualPronunciation: "ㅒ", romanization: "yae", actualInput: "O" },
      { letter: "ㅔ", actualPronunciation: "ㅔ", romanization: "e", actualInput: "p" },
      { letter: "ㅖ", actualPronunciation: "ㅖ", romanization: "ye", actualInput: "P" },

      { letter: "ㅚ", actualPronunciation: "ㅚ", romanization: "oe", actualInput: "hl" },
      { letter: "ㅟ", actualPronunciation: "ㅟ", romanization: "wi", actualInput: "nl" },
      { letter: "ㅢ", actualPronunciation: "ㅢ", romanization: "ui", actualInput: "ml" },
      { letter: "ㅘ", actualPronunciation: "ㅘ", romanization: "wa", actualInput: "hk" },
      { letter: "ㅝ", actualPronunciation: "ㅝ", romanization: "wo", actualInput: "nj" },
      { letter: "ㅙ", actualPronunciation: "ㅙ", romanization: "wae", actualInput: "ho" },
      { letter: "ㅞ", actualPronunciation: "ㅞ", romanization: "we", actualInput: "np" },
    );
  }

  return letters;
}
