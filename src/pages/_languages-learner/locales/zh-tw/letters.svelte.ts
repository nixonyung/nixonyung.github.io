import { letterSettings, type Letter } from "./LettersSettings.svelte";

export function getLetters() {
  const letters: Letter[] = [];

  if (letterSettings.enableRows.consonants.bpmf.value) {
    letters.push(
      //
      { letter: "ㄅ", pingyin: "b", input: "1" },
      { letter: "ㄆ", pingyin: "p", input: "q" },
      { letter: "ㄇ", pingyin: "m", input: "a" },
      { letter: "ㄈ", pingyin: "f", input: "z" },
    );
  }
  if (letterSettings.enableRows.consonants.dtnl.value) {
    letters.push(
      //
      { letter: "ㄉ", pingyin: "d", input: "2" },
      { letter: "ㄊ", pingyin: "t", input: "w" },
      { letter: "ㄋ", pingyin: "n", input: "s" },
      { letter: "ㄌ", pingyin: "l", input: "x" },
    );
  }
  if (letterSettings.enableRows.consonants.gkh.value) {
    letters.push(
      //
      { letter: "ㄍ", pingyin: "g", input: "e" },
      { letter: "ㄎ", pingyin: "k", input: "d" },
      { letter: "ㄏ", pingyin: "h", input: "c" },
    );
  }
  if (letterSettings.enableRows.consonants.jqx.value) {
    letters.push(
      //
      { letter: "ㄐ", pingyin: "j", input: "r" },
      { letter: "ㄑ", pingyin: "q", input: "f" },
      { letter: "ㄒ", pingyin: "x", input: "v" },
    );
  }
  if (letterSettings.enableRows.consonants.zhChShR.value) {
    letters.push(
      //
      { letter: "ㄓ", pingyin: "zh", input: "5" },
      { letter: "ㄔ", pingyin: "ch", input: "t" },
      { letter: "ㄕ", pingyin: "sh", input: "g" },
      { letter: "ㄖ", pingyin: "r", input: "b" },
    );
  }
  if (letterSettings.enableRows.consonants.zcs.value) {
    letters.push(
      //
      { letter: "ㄗ", pingyin: "z", input: "y" },
      { letter: "ㄘ", pingyin: "c", input: "h" },
      { letter: "ㄙ", pingyin: "s", input: "n" },
    );
  }

  if (letterSettings.enableRows.vowels.iUYu.value) {
    letters.push(
      //
      { letter: "ㄧ", pingyin: "i", input: "u" },
      { letter: "ㄨ", pingyin: "u", input: "j" },
      { letter: "ㄩ", pingyin: "yu", input: "m" },
    );
  }

  if (letterSettings.enableRows.vowels.aOEE.value) {
    letters.push(
      //
      { letter: "ㄚ", pingyin: "a", input: "8" },
      { letter: "ㄛ", pingyin: "o", input: "i" },
      { letter: "ㄜ", pingyin: "e", input: "k" },
      { letter: "ㄝ", pingyin: "ê", input: "," },
    );
  }
  if (letterSettings.enableRows.vowels.aiEiAoOu.value) {
    letters.push(
      //
      { letter: "ㄞ", pingyin: "ai", input: "9" },
      { letter: "ㄟ", pingyin: "ei", input: "o" },
      { letter: "ㄠ", pingyin: "ao", input: "l" },
      { letter: "ㄡ", pingyin: "ou", input: "." },
    );
  }
  if (letterSettings.enableRows.vowels.anEnAngEng.value) {
    letters.push(
      //
      { letter: "ㄢ", pingyin: "an", input: "0" },
      { letter: "ㄣ", pingyin: "en", input: "p" },
      { letter: "ㄤ", pingyin: "ang", input: ";" },
      { letter: "ㄥ", pingyin: "eng", input: "/" },
    );
  }
  if (letterSettings.enableRows.vowels.er.value) {
    letters.push(
      //
      { letter: "ㄦ", pingyin: "er", input: "-" },
    );
  }

  if (letterSettings.enableRows.vowels.compound.value) {
    letters.push(
      //
      { letter: "ㄧㄚ", pingyin: "ya", input: "u8" },
      { letter: "ㄧㄛ", pingyin: "yo", input: "ui" },
      { letter: "ㄧㄝ", pingyin: "ye", input: "u," },
      { letter: "ㄧㄞ", pingyin: "yai", input: "u9" },
      { letter: "ㄧㄠ", pingyin: "yao", input: "ul" },
      { letter: "ㄧㄡ", pingyin: "you", input: "u." },
      { letter: "ㄧㄢ", pingyin: "yan", input: "u0" },
      { letter: "ㄧㄣ", pingyin: "yin", input: "up" },
      { letter: "ㄧㄤ", pingyin: "yang", input: "u;" },
      { letter: "ㄧㄥ", pingyin: "ying", input: "u/" },

      { letter: "ㄨㄚ", pingyin: "wa", input: "j8" },
      { letter: "ㄨㄛ", pingyin: "wo", input: "ji" },
      { letter: "ㄨㄞ", pingyin: "wai", input: "j9" },
      { letter: "ㄨㄟ", pingyin: "wei", input: "jo" },
      { letter: "ㄨㄢ", pingyin: "wan", input: "j0" },
      { letter: "ㄨㄣ", pingyin: "wen", input: "jp" },
      { letter: "ㄨㄤ", pingyin: "wang", input: "j;" },
      { letter: "ㄨㄥ", pingyin: "weng", input: "j/" },

      { letter: "ㄩㄝ", pingyin: "yue", input: "m," },
      { letter: "ㄩㄢ", pingyin: "yuan", input: "m0" },
      { letter: "ㄩㄣ", pingyin: "yun", input: "mp" },
      { letter: "ㄩㄥ", pingyin: "yong", input: "m/" },
    );
  }

  if (letterSettings.enableRows.voices.value) {
    letters.push(
      //
      { letter: "ˇ", input: "3" },
      { letter: "ˋ", input: "4" },
      { letter: "ˊ", input: "6" },
      { letter: "˙", input: "7" },
    );
  }

  return letters;
}
