import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendAdjectives(words: JapaneseWord[]) {
  // TODO: adjectives
  if (jp.flashcardSettings.enableAdjectives) {
    words.splice(
      words.length,
      0, //
      { hiragana: "いい", romanization: "ii", meaning: "fine / decent" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "fine / decent (formal)" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },

      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", meaning: "considerate" },

      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical" },

      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },

      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", meaning: "magnificent" },
      { kanjis: ["凄い"], hiragana: "すごい", romanization: "sugoi", meaning: "impressive" },

      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", meaning: "cute" },

      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", meaning: "delicious" },

      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
    );
  }
}
