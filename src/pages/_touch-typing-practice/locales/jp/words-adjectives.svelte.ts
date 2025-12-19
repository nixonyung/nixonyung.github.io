import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendAdjectives(words: JapaneseWord[]) {
  // TODO: adjectives
  if (jp.flashcardSettings.enableAdjectives) {
    words.splice(
      words.length,
      0, //
      // TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

      // TODO: i-Adj. vs na-Adj.

      { hiragana: "いい", romanization: "ii", meaning: "fine / decent" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "fine / decent (formal)" },
      { hiragana: "いけない", romanization: "ikenai", meaning: "wrong" },
      { hiragana: "いけません", preferredForm: "hiragana", kanjis: ["行けません"], romanization: "ikemasen", meaning: "wrong (polite)" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },
      { hiragana: "だめ", preferredForm: "hiragana", katakana: "ダメ", kanjis: ["駄目"], romanization: "dame", meaning: "no good" },

      { hiragana: "したい", romanization: "shitai", meaning: "wanted to do" },

      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
      { kanjis: ["仲がいい", "仲が良い"], hiragana: "なかがいい", romanization: "nakagaii", meaning: "on good terms" },
      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", meaning: "considerate" },

      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical" },

      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },

      { kanjis: ["暑い"], hiragana: "あつい", romanization: "atsui", meaning: "hot" },

      { kanjis: ["早い", "速い"], rareKanjis: ["疾い", "捷い"], hiragana: "はやい", romanization: "hayai", meaning: "quick" },

      { kanjis: ["一杯", "１杯"], hiragana: "いっぱい", romanization: "ippai", meaning: "full / many / much" },
      { kanjis: ["多く"], hiragana: "おおく", romanization: "ooku", meaning: "many / much" },
      { kanjis: ["多い"], hiragana: "おおい", romanization: "ooi", meaning: "a lot" },

      { kanjis: ["上手"], hiragana: "じょうず", romanization: "jouzu", meaning: "skilled" },
      { kanjis: ["下手"], hiragana: "へた", romanization: "heta", meaning: "unskilled" },
      { kanjis: ["上手い", "巧い"], rareKanjis: ["美い"], hiragana: "うまい", romanization: "umai", meaning: "skillful" },
      { kanjis: ["面白い"], hiragana: "おもしろい", romanization: "omoshiroi", meaning: "interesting" },
      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },
      { kanjis: ["頭いい", "頭良い", "頭よい"], hiragana: "あたまいい", romanization: "atamaii", meaning: "smart" },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", meaning: "magnificent" },
      { kanjis: ["凄い"], hiragana: "すごい", romanization: "sugoi", meaning: "impressive" },
      { kanjis: ["無理"], hiragana: "むり", katakana: "ムリ", romanization: "muri", meaning: "unreasonable" },
      { kanjis: ["難しい"], hiragana: "むずかしい", romanization: "muzukashii", meaning: "difficult" },
      { kanjis: ["不可能"], hiragana: "ふかのう", romanization: "fukanou", meaning: "impossible" },

      { kanjis: ["綺麗", "奇麗"], hiragana: "きれい", katakana: "キレイ", romanization: "kirei", meaning: "pretty" },
      { kanjis: ["優しい"], hiragana: "やさしい", romanization: "yasashii", meaning: "kind / gentle" },
      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", meaning: "cute" },
      { kanjis: ["怖い", "恐い"], hiragana: "こわい", romanization: "kowai", meaning: "scary" },

      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", meaning: "delicious" },
      { kanjis: ["美味い", "旨い", "甘い"], hiragana: "うまい", romanization: "umai", meaning: "delicious" },

      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
    );
  }
}
