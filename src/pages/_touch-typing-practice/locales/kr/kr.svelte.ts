import type { Keymap, Letter } from "../../types";

export const kr = new (class {
  // (ref.) [Dubeolsik](https://www.wikiwand.com/en/articles/Keyboard_layout#Dubeolsik)
  keymap: Keymap = {
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
  letters: Letter[] = [
    // consonants
    { letter: "ㄱ", actualPronunciation: "가", romanization: "g", actualInput: "r" },
    { letter: "ㄲ", actualPronunciation: "까", romanization: "kk", actualInput: "R" },
    { letter: "ㄴ", actualPronunciation: "나", romanization: "n", actualInput: "s" },
    { letter: "ㄷ", actualPronunciation: "다", romanization: "d", actualInput: "e" },
    { letter: "ㄸ", actualPronunciation: "따", romanization: "tt", actualInput: "E" },
    { letter: "ㄹ", actualPronunciation: "라", romanization: "r", actualInput: "f" },
    { letter: "ㅁ", actualPronunciation: "마", romanization: "m", actualInput: "a" },
    { letter: "ㅂ", actualPronunciation: "바", romanization: "b", actualInput: "q" },
    { letter: "ㅃ", actualPronunciation: "빠", romanization: "pp", actualInput: "Q" },
    { letter: "ㅅ", actualPronunciation: "사", romanization: "s", actualInput: "t" },
    { letter: "ㅆ", actualPronunciation: "싸", romanization: "ss", actualInput: "T" },
    { letter: "ㅇ", actualPronunciation: undefined, romanization: undefined, actualInput: "d" },
    { letter: "ㅈ", actualPronunciation: "자", romanization: "j", actualInput: "w" },
    { letter: "ㅉ", actualPronunciation: "짜", romanization: "jj", actualInput: "W" },
    { letter: "ㅊ", actualPronunciation: "차", romanization: "ch", actualInput: "c" },
    { letter: "ㅋ", actualPronunciation: "카", romanization: "k", actualInput: "z" },
    { letter: "ㅌ", actualPronunciation: "타", romanization: "t", actualInput: "x" },
    { letter: "ㅍ", actualPronunciation: "파", romanization: "p", actualInput: "v" },
    { letter: "ㅎ", actualPronunciation: "하", romanization: "h", actualInput: "g" },

    // vowels
    { letter: "ㅏ", actualPronunciation: "ㅏ", romanization: "a", actualInput: "k" },
    { letter: "ㅐ", actualPronunciation: "ㅐ", romanization: "ae", actualInput: "o" },
    { letter: "ㅑ", actualPronunciation: "ㅑ", romanization: "ya", actualInput: "i" },
    { letter: "ㅒ", actualPronunciation: "ㅒ", romanization: "yae", actualInput: "O" },
    { letter: "ㅓ", actualPronunciation: "ㅓ", romanization: "eo", actualInput: "j" },
    { letter: "ㅔ", actualPronunciation: "ㅔ", romanization: "e", actualInput: "p" },
    { letter: "ㅕ", actualPronunciation: "ㅕ", romanization: "yeo", actualInput: "u" },
    { letter: "ㅖ", actualPronunciation: "ㅖ", romanization: "ye", actualInput: "P" },
    { letter: "ㅗ", actualPronunciation: "ㅗ", romanization: "o", actualInput: "h" },
    { letter: "ㅘ", actualPronunciation: "ㅘ", romanization: "wa", actualInput: "hk" },
    { letter: "ㅙ", actualPronunciation: "ㅙ", romanization: "wae", actualInput: "ho" },
    { letter: "ㅚ", actualPronunciation: "ㅚ", romanization: "oe", actualInput: "hl" },
    { letter: "ㅛ", actualPronunciation: "ㅛ", romanization: "yo", actualInput: "y" },
    { letter: "ㅜ", actualPronunciation: "ㅜ", romanization: "u", actualInput: "n" },
    { letter: "ㅝ", actualPronunciation: "ㅝ", romanization: "wo", actualInput: "nj" },
    { letter: "ㅞ", actualPronunciation: "ㅞ", romanization: "we", actualInput: "np" },
    { letter: "ㅟ", actualPronunciation: "ㅟ", romanization: "wi", actualInput: "nl" },
    { letter: "ㅠ", actualPronunciation: "ㅠ", romanization: "yu", actualInput: "b" },
    { letter: "ㅡ", actualPronunciation: "ㅡ", romanization: "eu", actualInput: "m" },
    { letter: "ㅢ", actualPronunciation: "ㅢ", romanization: "ui", actualInput: "ml" },
    { letter: "ㅣ", actualPronunciation: "ㅣ", romanization: "i", actualInput: "l" },
  ];
})();
