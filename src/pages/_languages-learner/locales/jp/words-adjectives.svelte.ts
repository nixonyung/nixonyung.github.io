import type { JapaneseAdjective, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

// TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

export function appendAdjectives(words: JapaneseWord[]) {
  const adjs: JapaneseAdjective[] = [];

  if (flashcardSettings.words.adjectives.value) {
    adjs.push(
      // affection
      { hiragana: "いい", romanization: "ii", adjGroup: "I", meaning: "good (casual)" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", adjGroup: "I", meaning: "good (formal)" },
      { kanjis: ["好き"], hiragana: "すき", romanization: "suki", adjGroup: "Na", meaning: "liked" },
      { kanjis: ["大丈夫"], hiragana: "だいじょうぶ", romanization: "daijoubu", adjGroup: "Na", meaning: "fine / alright", derivedMeanings: ["safe"] },
      { kanjis: ["便利"], hiragana: "べんり", romanization: "benri", adjGroup: "Na", meaning: "convenient", derivedMeanings: ["useful / handy"] },
      { hiragana: "したい", romanization: "shitai", adjGroup: "I", meaning: "wanted to do" },
      { hiragana: "-たい", romanization: "-tai", adjGroup: "I", meaning: "wanted to", exampleUsages: ["[Verb-stem] たい", "したい"] },

      { hiragana: "だめ", preferredForm: "hiragana", katakana: "ダメ", kanjis: ["駄目"], romanization: "dame", adjGroup: "Na", meaning: "no good" },
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", adjGroup: "I", meaning: "bad" },
      { kanjis: ["嫌い"], hiragana: "きらい", romanization: "kirai", adjGroup: "Na", meaning: "disliked" },
      { kanjis: ["怖い", "恐い"], hiragana: "こわい", romanization: "kowai", adjGroup: "I", meaning: "scary" },
      { kanjis: ["危ない"], hiragana: "あぶない", romanization: "abunai", adjGroup: "I", meaning: "dangerous" },

      // appearances
      { kanjis: ["綺麗", "奇麗"], hiragana: "きれい", katakana: "キレイ", romanization: "kirei", adjGroup: "Na", meaning: "pretty" },
      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", adjGroup: "I", meaning: "cute" },
      { kanjis: ["眠そう"], hiragana: "ねむそう", romanization: "nemusou", adjGroup: "Na", meaning: "sleepy-looking" },

      { hiragana: "-そう", romanization: "-sou", adjGroup: "Na", meaning: "(appearing like, by feeling)", exampleUsages: ["あなたは眠そうだね", "[Noun] は [Adj. (feeling)] そう"] },
      { hiragana: "-みたい", romanization: "-midai", adjGroup: "Na", meaning: "(appearing like, by appearance)", exampleUsages: ["本物みたい", "[Noun] みたい", "[Verb] みたい", "[Verb-ta] みたい", "[Verb-te] いるみたい"] },
      { hiragana: "-らしい", romanization: "-rashii", adjGroup: "I", meaning: "(appearing like, by characteristic)", exampleUsages: ["あなたらしいね", "[Noun] らしい"] },

      // skillfulness
      { kanjis: ["上手い", "巧い"], rareKanjis: ["美い"], hiragana: "うまい", romanization: "umai", adjGroup: "I", meaning: "skillful" },
      { kanjis: ["上手"], hiragana: "じょうず", romanization: "jouzu", adjGroup: "Na", meaning: "skilled", exampleUsages: ["日本語が上手"] },
      { kanjis: ["下手"], hiragana: "へた", romanization: "heta", adjGroup: "Na", meaning: "unskilled" },

      { kanjis: ["正しい"], hiragana: "ただしい", romanization: "tadashii", adjGroup: "I", meaning: "correct" },
      { hiragana: "いけない", romanization: "ikenai", adjGroup: "I", meaning: "wrong" },

      { kanjis: ["強い"], hiragana: "つよい", romanization: "tsuyoi", adjGroup: "I", meaning: "strong / tough" },
      { hiragana: "すごい", preferredForm: "hiragana", kanjis: ["凄い"], katakana: "スゴイ", romanization: "sugoi", adjGroup: "I", meaning: "amazing / terrible" },
      { kanjis: ["面白い"], hiragana: "おもしろい", romanization: "omoshiroi", adjGroup: "I", meaning: "interesting" },
      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", adjGroup: "Na", meaning: "amazing" },
      { kanjis: ["結構"], hiragana: "けっこう", romanization: "kekkou", adjGroup: "Na", meaning: "excellent (formal)", derivedMeanings: ["politely decline (fine with myself)"] },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", adjGroup: "I", meaning: "magnificent" },

      { kanjis: ["易しい"], hiragana: "やさしい", romanization: "yasashii", adjGroup: "I", meaning: "easy" },
      { kanjis: ["-易い"], hiragana: "-やすい", romanization: "-yasui", adjGroup: "I", meaning: "easy to (in terms of any kind of effort)", exampleUsages: ["[Verb-stem] 易い", "話しやすい (easy to talk with / easy to find and talk)", "酔いやすい (get drunk easily)"] },
      { kanjis: ["難しい"], hiragana: "むずかしい", romanization: "muzukashii", adjGroup: "I", meaning: "difficult" },
      { kanjis: ["-難い", "-悪い"], hiragana: "-にくい", romanization: "-nikui", adjGroup: "I", meaning: "hard to (in terms of any kind of effort)", exampleUsages: ["[Verb-stem] 難い", "使いにくい (hard to use)", "車酔いしにくい (doesn't get car sick easily)"] },
      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", adjGroup: "I", meaning: "plausible" },
      { kanjis: ["無理"], hiragana: "むり", katakana: "ムリ", romanization: "muri", adjGroup: "Na", meaning: "unreasonable" },
      { kanjis: ["不可能"], hiragana: "ふかのう", romanization: "fukanou", adjGroup: "Na", meaning: "impossible" },

      // bodily
      { kanjis: ["甘い"], hiragana: "あまい", romanization: "amai", adjGroup: "I", meaning: "sweet (taste)", derivedMeanings: ["sweet (music)"] },
      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", adjGroup: "I", meaning: "delicious" },
      { kanjis: ["美味い", "旨い"], hiragana: "うまい", romanization: "umai", adjGroup: "I", meaning: "delicious (masculine)" },

      { kanjis: ["暑い"], hiragana: "あつい", romanization: "atsui", adjGroup: "I", meaning: "hot (weather)" },
      { kanjis: ["熱い"], hiragana: "あつい", romanization: "atsui", adjGroup: "I", meaning: "hot (objects)", derivedMeanings: ["passionate"] },
      { kanjis: ["暖かい", "温かい"], hiragana: "あたたかい", romanization: "atatakai", adjGroup: "I", meaning: "warm" },
      { kanjis: ["寒い"], hiragana: "さむい", romanization: "samui", adjGroup: "I", meaning: "cold (weather)" },
      { kanjis: ["冷たい"], hiragana: "つめたい", romanization: "tsumetai", adjGroup: "I", meaning: "cold (objects)", derivedMeanings: ["cold (feeling) / unfeeling"] },

      // person - characteristics
      { kanjis: ["優しい"], hiragana: "やさしい", romanization: "yasashii", adjGroup: "I", meaning: "kind / gentle" },
      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", adjGroup: "Na", meaning: "considerate" },
      { kanjis: ["頭がいい", "頭が良い"], hiragana: "あたまがいい", romanization: "atamagaii", adjGroup: "I", meaning: "smart" },
      { kanjis: ["頭が良い", "頭がよい"], hiragana: "あたまがよい", romanization: "atamagayoi", adjGroup: "I", meaning: "smart" },

      { kanjis: ["男らしい"], hiragana: "おとこらしい", romanization: "otokorashii", adjGroup: "I", meaning: "manly" },
      { kanjis: ["女らしい"], hiragana: "おんならしい", romanization: "onnarashii", adjGroup: "I", meaning: "womanly" },

      // person - descriptions
      { kanjis: ["暇"], rareKanjis: ["閑"], hiragana: "ひま", romanization: "hima", adjGroup: "Na", meaning: "free / unoccupied" },
      { kanjis: ["暇がない", "暇が無い"], hiragana: "ひまがない", romanization: "himaganai", adjGroup: "I", meaning: "busy" },

      // social / relational
      { kanjis: ["近しい"], hiragana: "ちかしい", romanization: "chikashii", adjGroup: "I", meaning: "intimate" },
      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", adjGroup: "I", meaning: "intimate" },
      { kanjis: ["仲がいい", "仲が良い"], hiragana: "なかがいい", romanization: "nakagaii", adjGroup: "I", meaning: "being close / on good terms" },

      { kanjis: ["若い"], hiragana: "わかい", romanization: "wakai", adjGroup: "I", meaning: "youthful" },

      // chronological
      { kanjis: ["新しい"], hiragana: "あたらしい", romanization: "atarashii", adjGroup: "I", meaning: "new / novel" },
      { kanjis: ["古い"], rareKanjis: ["旧い", "故い"], hiragana: "ふるい", romanization: "furui", adjGroup: "I", meaning: "old / aged (things)" },

      { kanjis: ["早い", "速い"], rareKanjis: ["疾い", "捷い"], hiragana: "はやい", romanization: "hayai", adjGroup: "I", meaning: "quick" },
      { kanjis: ["遅い"], hiragana: "おそい", romanization: "osoi", adjGroup: "I", meaning: "slow" },

      // locational
      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", adjGroup: "I", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", adjGroup: "I", meaning: "far" },

      // quantitative
      { kanjis: ["多い"], hiragana: "おおい", romanization: "ooi", adjGroup: "I", meaning: "a lot" },

      { kanjis: ["安い", "廉い"], hiragana: "やすい", romanization: "yasui", adjGroup: "I", meaning: "cheap" },

      // materialistic
      { kanjis: ["小さい"], hiragana: "ちいさい", romanization: "chiisai", adjGroup: "I", meaning: "small / tiny" },

      { kanjis: ["厚い", "篤い"], hiragana: "あつい", romanization: "atsui", adjGroup: "I", meaning: "thick", derivedMeanings: ["deep", "heavy"] },
      { kanjis: ["太い"], hiragana: "ふとい", romanization: "futoi", adjGroup: "I", meaning: "fat", derivedMeanings: ["thick", "deep voice"] },
      { kanjis: ["薄い"], hiragana: "うすい", romanization: "usui", adjGroup: "I", meaning: "thin" },

      { hiragana: "こわい", preferredForm: "hiragana", kanjis: ["強い"], romanization: "kowai", adjGroup: "I", meaning: "stiff / hard" },

      // regional
      { kanjis: ["高い"], hiragana: "たかい", romanization: "takai", adjGroup: "I", meaning: "high (position/value/status/...)", derivedMeanings: ["tall"] },
      { kanjis: ["低い"], hiragana: "ひくい", romanization: "hikui", adjGroup: "I", meaning: "low (position/value/status/...)" },

      { kanjis: ["広い"], hiragana: "ひろい", romanization: "hiroi", adjGroup: "I", meaning: "wide" },
      { kanjis: ["狭い"], hiragana: "せまい", romanization: "semai", adjGroup: "I", meaning: "narrow" },

      // misc. - neutral
      { kanjis: ["直接"], hiragana: "ちょくせつ", romanization: "chokusetsu", adjGroup: "Na", meaning: "direct" },

      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", adjGroup: "Na", meaning: "identical", exampleUsages: ["[Noun] は [Noun] におなじ [Verb]"] },

      { kanjis: ["明るい"], hiragana: "あかるい", romanization: "akarui", adjGroup: "I", meaning: "bright" },

      { kanjis: ["赤い", "紅い"], rareKanjis: ["朱い"], hiragana: "あかい", romanization: "akai", adjGroup: "I", meaning: "red" },
      { kanjis: ["青い", "蒼い"], rareKanjis: ["碧い"], hiragana: "あおい", romanization: "aoi", adjGroup: "I", meaning: "blue" },
    );
  }

  for (const adj of adjs) {
    if (adj.adjGroup === "I" && !flashcardSettings.enableIAdjectives.value) continue;
    if (adj.adjGroup === "Na" && !flashcardSettings.enableNaAdjectives.value) continue;

    words.push(adj);
  }
}
