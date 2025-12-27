import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

export function appendAdjectivesFeelings(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableAdjectivesFeelings && jp.flashcardSettings.enableIAdjectives) {
    words.splice(
      words.length,
      0, //
      // positive
      { hiragana: "いい", romanization: "ii", meaning: "good (casual)" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "good (formal)" },
      { kanjis: ["面白い"], hiragana: "おもしろい", romanization: "omoshiroi", meaning: "interesting" },
      { hiragana: "すごい", preferredForm: "hiragana", kanjis: ["凄い"], katakana: "スゴイ", romanization: "sugoi", meaning: "amazing / terrible" },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", meaning: "magnificent" },
      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", meaning: "cute" },
      { kanjis: ["優しい"], hiragana: "やさしい", romanization: "yasashii", meaning: "kind / gentle" },
      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
      { kanjis: ["仲がいい", "仲が良い"], hiragana: "なかがいい", romanization: "nakagaii", meaning: "on good terms" },
      { kanjis: ["頭がいい", "頭が良い"], hiragana: "あたまがいい", romanization: "atamagaii", meaning: "smart" },
      { kanjis: ["頭が良い", "頭がよい"], hiragana: "あたまがよい", romanization: "atamagayoi", meaning: "smart" },
      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", meaning: "delicious" },
      { kanjis: ["美味い", "旨い"], hiragana: "うまい", romanization: "umai", meaning: "delicious (masculine)" },
      { kanjis: ["若い"], hiragana: "わかい", romanization: "wakai", meaning: "youthful" },

      // negative
      { hiragana: "いけない", romanization: "ikenai", meaning: "wrong" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },
      { kanjis: ["怖い", "恐い"], hiragana: "こわい", romanization: "kowai", meaning: "scary" },

      // neutral
      { kanjis: ["甘い"], hiragana: "あまい", romanization: "amai", meaning: "sweet (taste)", derivedMeanings: ["sweet (music)"] },

      { kanjis: ["男らしい"], hiragana: "おとこらしい", romanization: "otokorashii", meaning: "manly" },
      { kanjis: ["女らしい"], hiragana: "おんならしい", romanization: "onnarashii", meaning: "womanly" },

      { hiragana: "したい", romanization: "shitai", meaning: "wanted to do" },
      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
      { kanjis: ["易しい"], hiragana: "やさしい", romanization: "yasashii", meaning: "easy" },
      { kanjis: ["難しい"], hiragana: "むずかしい", romanization: "muzukashii", meaning: "difficult" },
    );
  }

  if (jp.flashcardSettings.enableAdjectivesFeelings && jp.flashcardSettings.enableNaAdjectives) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["好き"], hiragana: "すき", romanization: "suki", meaning: "liked" },
      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },
      { kanjis: ["結構"], hiragana: "けっこう", romanization: "kekkou", meaning: "excellent (formal)", derivedMeanings: ["politely decline (fine with myself)"] },

      { kanjis: ["嫌い"], hiragana: "きらい", romanization: "kirai", meaning: "disliked" },
      { kanjis: ["無理"], hiragana: "むり", katakana: "ムリ", romanization: "muri", meaning: "unreasonable" },
    );
  }
}
