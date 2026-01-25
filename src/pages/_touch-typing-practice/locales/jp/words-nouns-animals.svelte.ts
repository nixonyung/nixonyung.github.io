import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendNounsAnimals(words: JapaneseWord[]) {
  if (flashcardSettings.words.nouns.animals.value) {
    words.push(
      //
      { kanjis: ["猫"], hiragana: "ねこ", katakana: "ネコ", romanization: "neko", meaning: "cat" },
    );
  }
}
