import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalManner(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableFunctionalManner) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["一緒に"], hiragana: "いっしょに", romanization: "isshoni", meaning: "together {with xxx}", exampleUsages: ["一緒に [Verb]", "[Noun] と 一緒に [Verb]。"] },
      { kanjis: ["一生懸命"], hiragana: "いっしょうけんめい", romanization: "isshoukenmei", meaning: "with utmost effort", exampleUsages: ["一生懸命勉強する"] },
      { hiragana: "せっせと", romanization: "setseto", meaning: "diligently / industriously", exampleUsages: ["せっせと勉強する"] },
      { kanjis: ["早々", "早早"], hiragana: "はやばや", romanization: "hayabaya", meaning: "promptly" },
      { hiragana: "どんどん", katakana: "ドンドン", romanization: "dondon", meaning: "(drumming sound) / quickly" },
    );
  }
}
