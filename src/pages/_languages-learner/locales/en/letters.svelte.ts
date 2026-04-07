import { letterSettings } from "./LettersSettings.svelte";

export function getLetters() {
  const letters: string[] = [];

  if (letterSettings.enableSubsets.lowercase.qwer.value) {
    for (const ch of ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]) {
      letters.push(ch);
    }
  }
  if (letterSettings.enableSubsets.uppercase.QWER.value) {
    for (const ch of ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]) {
      letters.push(ch);
    }
  }

  if (letterSettings.enableSubsets.lowercase.asdf.value) {
    for (const ch of ["a", "s", "d", "f", "g", "h", "j", "k", "l"]) {
      letters.push(ch);
    }
  }
  if (letterSettings.enableSubsets.uppercase.ASDF.value) {
    for (const ch of ["A", "S", "D", "F", "G", "H", "J", "K", "L"]) {
      letters.push(ch);
    }
  }

  if (letterSettings.enableSubsets.lowercase.zxcv.value) {
    for (const ch of ["z", "x", "c", "v", "b", "n", "m"]) {
      letters.push(ch);
    }
  }
  if (letterSettings.enableSubsets.uppercase.ZXCV.value) {
    for (const ch of ["Z", "X", "C", "V", "B", "N", "M"]) {
      letters.push(ch);
    }
  }

  if (letterSettings.enableSubsets.symbols["1234"].value) {
    for (const ch of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]) {
      letters.push(ch);
    }
  }
  if (letterSettings.enableSubsets.symbols.shift1234.value) {
    for (const ch of ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]) {
      letters.push(ch);
    }
  }
  if (letterSettings.enableSubsets.symbols.miscSymbols.value) {
    for (const ch of ["-", "=", "[", "]", "\\", ";", "'", ",", ".", "/"]) {
      letters.push(ch);
    }
  }
  if (letterSettings.enableSubsets.symbols.shiftMiscSymbols.value) {
    for (const ch of ["_", "+", "{", "}", "|", ":", '"', "<", ">", "?"]) {
      letters.push(ch);
    }
  }

  return letters;
}
