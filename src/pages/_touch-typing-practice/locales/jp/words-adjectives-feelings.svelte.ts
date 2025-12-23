import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

export function appendAdjectivesFeelings(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableAdjectivesFeelings && jp.flashcardSettings.enableIAdjectives) {
    words.splice(
      words.length,
      0, //
      { hiragana: "いい", romanization: "ii", meaning: "fine / decent" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "fine / decent (formal)" },

      { hiragana: "いけない", romanization: "ikenai", meaning: "wrong" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },

      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", meaning: "delicious" },
      { kanjis: ["美味い", "旨い", "甘い"], hiragana: "うまい", romanization: "umai", meaning: "delicious" },

      { hiragana: "したい", romanization: "shitai", meaning: "wanted to do" },
      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
      { kanjis: ["難しい"], hiragana: "むずかしい", romanization: "muzukashii", meaning: "difficult" },
      { kanjis: ["易しい"], hiragana: "やさしい", romanization: "yasashii", meaning: "easy" },

      { kanjis: ["優しい"], hiragana: "やさしい", romanization: "yasashii", meaning: "kind / gentle" },
      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", meaning: "cute" },

      { kanjis: ["怖い", "恐い"], hiragana: "こわい", romanization: "kowai", meaning: "scary" },

      { kanjis: ["面白い"], hiragana: "おもしろい", romanization: "omoshiroi", meaning: "interesting" },
      { kanjis: ["頭いい", "頭良い", "頭よい"], hiragana: "あたまいい", romanization: "atamaii", meaning: "smart" },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", meaning: "magnificent" },
      { kanjis: ["凄い"], hiragana: "すごい", romanization: "sugoi", meaning: "impressive" },

      { kanjis: ["仲がいい", "仲が良い"], hiragana: "なかがいい", romanization: "nakagaii", meaning: "on good terms" },
    );
  }

  if (jp.flashcardSettings.enableAdjectivesFeelings && jp.flashcardSettings.enableNaAdjectives) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["好き"], hiragana: "すき", romanization: "suki", meaning: "liked" },
      { kanjis: ["嫌い"], hiragana: "きらい", romanization: "kirai", meaning: "disliked" },

      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },

      { kanjis: ["無理"], hiragana: "むり", katakana: "ムリ", romanization: "muri", meaning: "unreasonable" },
    );
  }
}
