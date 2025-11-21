import type { Dictionary, Keymap } from "../locale";

// (ref.) [Dubeolsik](https://www.wikiwand.com/en/articles/Keyboard_layout#Dubeolsik)
export const keymap: Keymap = {
  // row 1
  q: "ㅂ",
  w: "ㅈ",
  e: "ㄷ",
  r: "ㄱ",
  t: "ㅅ",
  y: "ㅛ",
  u: "ㅕ",
  i: "ㅑ",
  o: "ㅐ",
  p: "ㅔ",

  // row 2
  a: "ㅁ",
  s: "ㄴ",
  d: "ㅇ",
  f: "ㄹ",
  g: "ㅎ",
  h: "ㅗ",
  j: "ㅓ",
  k: "ㅏ",
  l: "ㅣ",

  // row 3
  z: "ㅋ",
  x: "ㅌ",
  c: "ㅊ",
  v: "ㅍ",
  b: "ㅠ",
  n: "ㅜ",
  m: "ㅡ",

  // shift row 1
  Q: "ㅃ",
  W: "ㅉ",
  E: "ㄸ",
  R: "ㄲ",
  T: "ㅆ",
  O: "ㅒ",
  P: "ㅖ",
};

// (ref.) [Hangul - Letters](https://www.wikiwand.com/en/articles/Hangul#Letters)
export const dictionary: Dictionary = {
  // consonants
  ㄱ: { input: "r", romanization: "g", pronunciation: "가" },
  ㄲ: { input: "R", romanization: "kk", pronunciation: "까" },
  ㄴ: { input: "s", romanization: "n", pronunciation: "나" },
  ㄷ: { input: "e", romanization: "d", pronunciation: "다" },
  ㄸ: { input: "E", romanization: "tt", pronunciation: "따" },
  ㄹ: { input: "f", romanization: "r", pronunciation: "라" },
  ㅁ: { input: "a", romanization: "m", pronunciation: "마" },
  ㅂ: { input: "q", romanization: "b", pronunciation: "바" },
  ㅃ: { input: "Q", romanization: "pp", pronunciation: "빠" },
  ㅅ: { input: "t", romanization: "s", pronunciation: "사" },
  ㅆ: { input: "T", romanization: "ss", pronunciation: "싸" },
  ㅇ: { input: "d", romanization: undefined, pronunciation: undefined },
  ㅈ: { input: "w", romanization: "j", pronunciation: "자" },
  ㅉ: { input: "W", romanization: "jj", pronunciation: "짜" },
  ㅊ: { input: "c", romanization: "ch", pronunciation: "차" },
  ㅋ: { input: "z", romanization: "k", pronunciation: "카" },
  ㅌ: { input: "x", romanization: "t", pronunciation: "타" },
  ㅍ: { input: "v", romanization: "p", pronunciation: "파" },
  ㅎ: { input: "g", romanization: "h", pronunciation: "하" },

  // vowels
  ㅏ: { input: "k", romanization: "a", pronunciation: "ㅏ" },
  ㅐ: { input: "o", romanization: "ae", pronunciation: "ㅐ" },
  ㅑ: { input: "i", romanization: "ya", pronunciation: "ㅑ" },
  ㅒ: { input: "O", romanization: "yae", pronunciation: "ㅒ" },
  ㅓ: { input: "j", romanization: "eo", pronunciation: "ㅓ" },
  ㅔ: { input: "p", romanization: "e", pronunciation: "ㅔ" },
  ㅕ: { input: "u", romanization: "yeo", pronunciation: "ㅕ" },
  ㅖ: { input: "P", romanization: "ye", pronunciation: "ㅖ" },
  ㅗ: { input: "h", romanization: "o", pronunciation: "ㅗ" },
  ㅘ: { input: "hk", romanization: "wa", pronunciation: "ㅘ" },
  ㅙ: { input: "ho", romanization: "wae", pronunciation: "ㅙ" },
  ㅚ: { input: "hl", romanization: "oe", pronunciation: "ㅚ" },
  ㅛ: { input: "y", romanization: "yo", pronunciation: "ㅛ" },
  ㅜ: { input: "n", romanization: "u", pronunciation: "ㅜ" },
  ㅝ: { input: "nj", romanization: "wo", pronunciation: "ㅝ" },
  ㅞ: { input: "np", romanization: "we", pronunciation: "ㅞ" },
  ㅟ: { input: "nl", romanization: "wi", pronunciation: "ㅟ" },
  ㅠ: { input: "b", romanization: "yu", pronunciation: "ㅠ" },
  ㅡ: { input: "m", romanization: "eu", pronunciation: "ㅡ" },
  ㅢ: { input: "ml", romanization: "ui", pronunciation: "ㅢ" },
  ㅣ: { input: "l", romanization: "i", pronunciation: "ㅣ" },
};
