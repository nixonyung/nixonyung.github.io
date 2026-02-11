import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalManner(words: JapaneseWord[]) {
  if (flashcardSettings.words.functional.manner.value) {
    words.push(
      { kanjis: ["良く", "善く", "能く", "好く", "克く"], hiragana: "よく", romanization: "yoku", meaning: "nicely / properly / skillfully" },

      { kanjis: ["一緒に"], hiragana: "いっしょに", romanization: "isshoni", meaning: "together {with xxx}", exampleUsages: ["一緒に [Verb]", "[Noun] と 一緒に [Verb]。"] },

      { kanjis: ["直に"], hiragana: "じきに", romanization: "jikini", meaning: "directly / straightforward" },
      { kanjis: ["直ぐ"], hiragana: "すぐ", romanization: "sugu", meaning: "direct / straightforward", exampleUsages: ["直ぐに"] },
      { kanjis: ["直接"], hiragana: "ちょくせつ", romanization: "chokusetsu", meaning: "direct / straightforward (formal)" },
      { kanjis: ["直ちに"], hiragana: "ただちに", romanization: "tadachini", meaning: "at once" },
      { kanjis: ["早々", "早早"], hiragana: "はやばや", romanization: "hayabaya", meaning: "promptly" },

      { hiragana: "ゆっくり", romanization: "yukkuri", meaning: "slowly / leisurely" },

      { kanjis: ["真っ直ぐ"], hiragana: "まっすぐ", romanization: "massugu", meaning: "straightly" },

      { kanjis: ["一生懸命"], hiragana: "いっしょうけんめい", romanization: "isshoukenmei", meaning: "with utmost effort", exampleUsages: ["一生懸命勉強します"] },
      { hiragana: "せっせと", romanization: "setseto", meaning: "diligently / industriously", exampleUsages: ["せっせと勉強します"] },

      // onomatopoeias
      { hiragana: "どんどん", katakana: "ドンドン", romanization: "dondon", meaning: "(drumming sound) / quickly" },
      { hiragana: "すやすや", romanization: "suyasuya", meaning: "(sleeping sound, quietly)" },
      { hiragana: "ぷるぷる", katakana: "プルプル", romanization: "purupuru", meaning: "(trembling sound)" },
    );
  }
}
