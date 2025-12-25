import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

export function appendAdjectivesDesriptors(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableAdjectivesDescriptors && jp.flashcardSettings.enableIAdjectives) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical", exampleUsages: ["[Noun] は [Noun] におなじ"] },

      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },

      { kanjis: ["多い"], hiragana: "おおい", romanization: "ooi", meaning: "a lot" },

      { kanjis: ["暑い"], hiragana: "あつい", romanization: "atsui", meaning: "hot" },

      { kanjis: ["強い"], hiragana: "つよい", romanization: "tsuyoi", meaning: "strong / tough" },
      { hiragana: "こわい", preferredForm: "hiragana", kanjis: ["強い"], romanization: "kowai", meaning: "stiff / hard" },

      { kanjis: ["早い", "速い"], rareKanjis: ["疾い", "捷い"], hiragana: "はやい", romanization: "hayai", meaning: "quick" },
      { kanjis: ["遅い"], hiragana: "おそい", romanization: "osoi", meaning: "slow" },

      { kanjis: ["安い", "廉い"], hiragana: "やすい", romanization: "yasui", meaning: "cheap" },

      { kanjis: ["上手い", "巧い"], rareKanjis: ["美い"], hiragana: "うまい", romanization: "umai", meaning: "skillful" },
    );
  }

  if (jp.flashcardSettings.enableAdjectivesDescriptors && jp.flashcardSettings.enableNaAdjectives) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["結構"], hiragana: "けっこう", romanization: "kekkou", meaning: "wonderful" },

      { hiragana: "だめ", preferredForm: "hiragana", katakana: "ダメ", kanjis: ["駄目"], romanization: "dame", meaning: "no good" },

      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", meaning: "considerate" },
      { kanjis: ["綺麗", "奇麗"], hiragana: "きれい", katakana: "キレイ", romanization: "kirei", meaning: "pretty" },

      { kanjis: ["上手"], hiragana: "じょうず", romanization: "jouzu", meaning: "skilled" },
      { kanjis: ["下手"], hiragana: "へた", romanization: "heta", meaning: "unskilled" },

      { kanjis: ["不可能"], hiragana: "ふかのう", romanization: "fukanou", meaning: "impossible" },

      { kanjis: ["一杯", "１杯"], hiragana: "いっぱい", romanization: "ippai", meaning: "full / many / much" },
    );
  }
}
