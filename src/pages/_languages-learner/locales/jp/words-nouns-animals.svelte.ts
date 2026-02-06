import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendNounsAnimals(words: JapaneseWord[]) {
  if (flashcardSettings.words.nouns.animals.value) {
    words.push(
      //
      { kanjis: ["動物"], hiragana: "どうぶつ", romanization: "doubutsu", meaning: "animal" },
      { katakana: "ペット", romanization: "petto", meaning: "pet" },

      { kanjis: ["猫"], hiragana: "ねこ", katakana: "ネコ", romanization: "neko", meaning: "cat" },
      { kanjis: ["犬", "狗"], hiragana: "いぬ", katakana: "イヌ", romanization: "inu", meaning: "dog" },
      { kanjis: ["魚"], hiragana: "さかな", romanization: "sakana", meaning: "fish" },
    );
  }
}
