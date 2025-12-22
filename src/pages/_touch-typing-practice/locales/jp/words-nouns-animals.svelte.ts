import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsAnimals(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsAnimals) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["猫"], hiragana: "ねこ", katakana: "ネコ", romanization: "neko", meaning: "cat" },
    );
  }
}
