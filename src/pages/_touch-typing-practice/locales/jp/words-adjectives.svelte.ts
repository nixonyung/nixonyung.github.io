import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

export function appendAdjectives(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableAdjectives && jp.flashcardSettings.enableIAdjectives) {
    words.push(
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
      { kanjis: ["上手い", "巧い"], rareKanjis: ["美い"], hiragana: "うまい", romanization: "umai", meaning: "skillful" },
      { kanjis: ["暑い"], hiragana: "あつい", romanization: "atsui", meaning: "hot" },
      { kanjis: ["寒い"], hiragana: "さむい", romanization: "samui", meaning: "cold" },
      { kanjis: ["近しい"], hiragana: "ちかしい", romanization: "chikashii", meaning: "intimate" },
      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", meaning: "intimate" },
      { kanjis: ["強い"], hiragana: "つよい", romanization: "tsuyoi", meaning: "strong / tough" },

      // negative
      { hiragana: "いけない", romanization: "ikenai", meaning: "wrong" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", meaning: "bad" },
      { kanjis: ["怖い", "恐い"], hiragana: "こわい", romanization: "kowai", meaning: "scary" },

      // neutral / it depends
      { kanjis: ["甘い"], hiragana: "あまい", romanization: "amai", meaning: "sweet (taste)", derivedMeanings: ["sweet (music)"] },

      { hiragana: "こわい", preferredForm: "hiragana", kanjis: ["強い"], romanization: "kowai", meaning: "stiff / hard" },

      { kanjis: ["男らしい"], hiragana: "おとこらしい", romanization: "otokorashii", meaning: "manly" },
      { kanjis: ["女らしい"], hiragana: "おんならしい", romanization: "onnarashii", meaning: "womanly" },

      { kanjis: ["若い"], hiragana: "わかい", romanization: "wakai", meaning: "youthful" },

      { kanjis: ["易しい"], hiragana: "やさしい", romanization: "yasashii", meaning: "easy" },
      { kanjis: ["難しい"], hiragana: "むずかしい", romanization: "muzukashii", meaning: "difficult" },

      { kanjis: ["多い"], hiragana: "おおい", romanization: "ooi", meaning: "a lot" },

      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", meaning: "far" },

      { kanjis: ["早い", "速い"], rareKanjis: ["疾い", "捷い"], hiragana: "はやい", romanization: "hayai", meaning: "quick" },
      { kanjis: ["遅い"], hiragana: "おそい", romanization: "osoi", meaning: "slow" },

      { kanjis: ["安い", "廉い"], hiragana: "やすい", romanization: "yasui", meaning: "cheap" },

      { hiragana: "したい", romanization: "shitai", meaning: "wanted to do" },
      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", meaning: "plausible" },
      { kanjis: ["暇がない", "暇が無い"], hiragana: "ひまがない", romanization: "himaganai", meaning: "busy" },

      { hiragana: "-らしい", romanization: "-rashii", meaning: "(appearing like, by characteristic)", exampleUsages: ["あなたらしいね", "[Noun] らしい"] },
      { hiragana: "-たい", romanization: "-tai", meaning: "wanted to", exampleUsages: ["[Verb-stem] たい", "したい"] },
      { kanjis: ["-易い"], hiragana: "-やすい", romanization: "-yasui", meaning: "easy to (in terms of any kind of effort)", exampleUsages: ["[Verb-stem] 易い", "話しやすい (easy to talk with / easy to find and talk)", "酔いやすい (get drunk easily)"] },
      { kanjis: ["-難い", "-悪い"], hiragana: "-にくい", romanization: "-nikui", meaning: "hard to (in terms of any kind of effort)", exampleUsages: ["[Verb-stem] 難い", "使いにくい (hard to use)", "車酔いしにくい (doesn't get car sick easily)"] },
    );
  }

  if (jp.flashcardSettings.enableAdjectives && jp.flashcardSettings.enableNaAdjectives) {
    words.push(
      // positive
      { kanjis: ["好き"], hiragana: "すき", romanization: "suki", meaning: "liked" },
      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", meaning: "amazing" },
      { kanjis: ["結構"], hiragana: "けっこう", romanization: "kekkou", meaning: "excellent (formal)", derivedMeanings: ["politely decline (fine with myself)"] },

      { kanjis: ["綺麗", "奇麗"], hiragana: "きれい", katakana: "キレイ", romanization: "kirei", meaning: "pretty" },
      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", meaning: "considerate" },

      { kanjis: ["便利"], hiragana: "べんり", romanization: "benri", meaning: "convenient", derivedMeanings: ["useful / handy"] },

      // negative
      { kanjis: ["嫌い"], hiragana: "きらい", romanization: "kirai", meaning: "disliked" },
      { hiragana: "だめ", preferredForm: "hiragana", katakana: "ダメ", kanjis: ["駄目"], romanization: "dame", meaning: "no good" },

      // neutral / it depends
      { kanjis: ["眠そう"], hiragana: "ねむそう", romanization: "nemusou", meaning: "sleepy-looking" },

      { kanjis: ["暇"], rareKanjis: ["閑"], hiragana: "ひま", romanization: "hima", meaning: "free / unoccupied" },

      { kanjis: ["上手"], hiragana: "じょうず", romanization: "jouzu", meaning: "skilled", exampleUsages: ["日本語が上手"] },
      { kanjis: ["下手"], hiragana: "へた", romanization: "heta", meaning: "unskilled" },

      { kanjis: ["無理"], hiragana: "むり", katakana: "ムリ", romanization: "muri", meaning: "unreasonable" },
      { kanjis: ["不可能"], hiragana: "ふかのう", romanization: "fukanou", meaning: "impossible" },

      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", meaning: "identical", exampleUsages: ["[Noun] は [Noun] におなじ [Verb]"] },

      { hiragana: "-そう", romanization: "-sou", meaning: "(appearing like, by feeling)", exampleUsages: ["あなたは眠そうだね", "[Noun] は [Adj. (feeling)] そう"] },
      { hiragana: "-みたい", romanization: "-midai", meaning: "(appearing like, by appearance)", exampleUsages: ["本物みたい", "[Noun] みたい", "[Verb] みたい", "[Verb-ta] みたい", "[Verb-te] いるみたい"] },
    );
  }
}
