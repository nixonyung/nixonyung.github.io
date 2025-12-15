import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendAdjectives(words: JapaneseWord[]) {
  // TODO: adjectives
  if (jp.flashcardSettings.enableAdjectives) {
    words.splice(
      words.length,
      0, //
      // TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

      { hiragana: "いい", romanization: "ii", meaning: "fine / decent" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "fine / decent (formal)" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },

      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", meaning: "considerate" },

      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical" },

      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },

      { kanjis: ["早い", "速い"], rareKanjis: ["疾い", "捷い"], hiragana: "はやい", romanization: "hayai", meaning: "quick" },

      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", meaning: "magnificent" },
      { kanjis: ["凄い"], hiragana: "すごい", romanization: "sugoi", meaning: "impressive" },

      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", meaning: "cute" },

      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", meaning: "delicious" },

      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
    );
  }
}
