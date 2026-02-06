import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalManner(words: JapaneseWord[]) {
  if (flashcardSettings.words.functional.manner.value) {
    words.push(
      { kanjis: ["一緒に"], hiragana: "いっしょに", romanization: "isshoni", meaning: "together {with xxx}", exampleUsages: ["一緒に [Verb]", "[Noun] と 一緒に [Verb]。"] },

      { kanjis: ["真っ直ぐ"], hiragana: "まっすぐ", romanization: "massugu", meaning: "straightly" },

      { kanjis: ["一生懸命"], hiragana: "いっしょうけんめい", romanization: "isshoukenmei", meaning: "with utmost effort", exampleUsages: ["一生懸命勉強します"] },
      { hiragana: "せっせと", romanization: "setseto", meaning: "diligently / industriously", exampleUsages: ["せっせと勉強します"] },

      // onomatopoeias
      { hiragana: "すやすや", romanization: "suyasuya", meaning: "(sleeping sound, quietly)" },
      { hiragana: "ぷるぷる", katakana: "プルプル", romanization: "purupuru", meaning: "(trembling sound)" },
    );
  }
}
