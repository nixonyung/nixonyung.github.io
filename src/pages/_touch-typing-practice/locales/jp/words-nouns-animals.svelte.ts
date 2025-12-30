import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsAnimals(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsAnimals) {
    words.push(
      //
      { kanjis: ["猫"], hiragana: "ねこ", katakana: "ネコ", romanization: "neko", meaning: "cat" },
    );
  }
}
