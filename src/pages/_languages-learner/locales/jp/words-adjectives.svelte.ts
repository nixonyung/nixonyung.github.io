import type { JapaneseAdjective, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

// TODO: https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/

export function appendAdjectives(words: JapaneseWord[]) {
  const adjs: JapaneseAdjective[] = [];

  if (flashcardSettings.words.adjectives.affections.value) {
    adjs.push(
      // positive
      { hiragana: "いい", romanization: "ii", adjGroup: "I", meaning: "good (casual)" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", adjGroup: "I", meaning: "good (formal)" },
      { hiragana: "なかなか", preferredForm: "hiragana", kanjis: ["中々", "中中"], rareKanjis: ["仲々", "仲仲", "却々", "却却"], adjGroup: "Na", romanization: "nakanaka", meaning: "quite / decently (surprisingly)" },
      { kanjis: ["絶好調"], hiragana: "ぜっこうちょう", romanization: "zekkouchou", adjGroup: "Na", meaning: "feeling great" },
      { kanjis: ["好き"], hiragana: "すき", romanization: "suki", adjGroup: "Na", meaning: "liked" },

      { kanjis: ["大切"], hiragana: "たいせつ", romanization: "taisetsu", adjGroup: "Na", meaning: "important / significant" },
      { kanjis: ["楽しい"], rareKanjis: ["愉しい"], hiragana: "たのしい", romanization: "tanoshii", adjGroup: "I", meaning: "enjoyable / fun", derivedMeanings: ["useful / handy"] },
      { kanjis: ["便利"], hiragana: "べんり", romanization: "benri", adjGroup: "Na", meaning: "convenient", derivedMeanings: ["useful / handy"] },

      // negative
      { kanjis: ["悪い"], hiragana: "わるい", romanization: "warui", adjGroup: "I", meaning: "bad" },
      { hiragana: "だめ", preferredForm: "hiragana", katakana: "ダメ", kanjis: ["駄目"], romanization: "dame", adjGroup: "Na", meaning: "no good", derivedMeanings: ["not allowed"] },
      { hiragana: "やばい", romanization: "yabai", adjGroup: "I", meaning: "terrible / crap" },
      { hiragana: "まあまあ", romanization: "maamaa", adjGroup: "Na", meaning: "so-so" },
      { kanjis: ["嫌い"], hiragana: "きらい", romanization: "kirai", adjGroup: "Na", meaning: "disliked / hated" },
      { kanjis: ["嫌"], hiragana: "いや", romanization: "iya", adjGroup: "Na", meaning: "don't want (temporary feeling)" },

      { hiragana: "うるさい", preferredForm: "hiragana", kanjis: ["煩い"], romanization: "urusai", adjGroup: "I", meaning: "annoying / noisy" },
      { kanjis: ["煩わしい"], hiragana: "わずらわしい", romanization: "wazurawashii", adjGroup: "I", meaning: "annoying / troublesome" },
      { hiragana: "つまらない", preferredForm: "hiragana", kanjis: ["詰らない", "詰まらない"], romanization: "tsumaranai", adjGroup: "I", meaning: "boring" },
      { kanjis: ["怖い", "恐い"], hiragana: "こわい", romanization: "kowai", adjGroup: "I", meaning: "scary" },
      { kanjis: ["危ない"], hiragana: "あぶない", romanization: "abunai", adjGroup: "I", meaning: "dangerous" },

      // neutral
      { kanjis: ["大丈夫"], hiragana: "だいじょうぶ", romanization: "daijoubu", adjGroup: "Na", meaning: "fine / alright", derivedMeanings: ["safe"] },

      { hiragana: "-たい", romanization: "-tai", adjGroup: "I", meaning: "wanted to", exampleUsages: ["[Verb-stem] たい", "したい"] },
    );
  }

  if (flashcardSettings.words.adjectives.sensations.value) {
    adjs.push(
      { kanjis: ["痛い"], rareKanjis: ["甚い"], hiragana: "いたい", romanization: "itai", adjGroup: "I", meaning: "painful" },

      { kanjis: ["静か"], rareKanjis: ["閑か"], hiragana: "しずか", romanization: "shizuka", adjGroup: "Na", meaning: "quiet" },
      { hiragana: "やかましい", kanjis: ["喧しい"], romanization: "yakamashii", adjGroup: "I", meaning: "noisy / loud" },

      // tastes
      { kanjis: ["甘い"], hiragana: "あまい", romanization: "amai", adjGroup: "I", meaning: "sweet (taste)", derivedMeanings: ["sweet (music)"] },
      { kanjis: ["辛い"], hiragana: "からい", romanization: "karai", adjGroup: "I", meaning: "spicy" },
      { kanjis: ["美味しい"], hiragana: "おいしい", romanization: "oishii", adjGroup: "I", meaning: "delicious" },
      { kanjis: ["美味い", "旨い"], hiragana: "うまい", romanization: "umai", adjGroup: "I", meaning: "delicious (masculine)" },

      { kanjis: ["不味い"], hiragana: "まずい", romanization: "mazui", adjGroup: "I", meaning: "bad tasting", derivedMeanings: ["unskillful", "unattractive"] },
      { kanjis: ["臭い"], hiragana: "くさい", romanization: "kusai", adjGroup: "I", meaning: "smelly" },

      // temperatures
      { kanjis: ["暑い"], hiragana: "あつい", romanization: "atsui", adjGroup: "I", meaning: "hot (weather)" },
      { kanjis: ["熱い"], hiragana: "あつい", romanization: "atsui", adjGroup: "I", meaning: "hot (objects)", derivedMeanings: ["passionate"] },
      { kanjis: ["暖かい", "温かい"], hiragana: "あたたかい", romanization: "atatakai", adjGroup: "I", meaning: "warm" },
      { hiragana: "ぬるい", preferredForm: "hiragana", kanjis: ["温い"], romanization: "nurui", adjGroup: "I", meaning: "lukewarm" },
      { kanjis: ["涼しい"], rareKanjis: ["凉しい"], hiragana: "すずしい", romanization: "suzushii", adjGroup: "I", meaning: "cool", derivedMeanings: ["refreshing"] },
      { kanjis: ["寒い"], hiragana: "さむい", romanization: "samui", adjGroup: "I", meaning: "cold (weather)" },
      { kanjis: ["冷たい"], hiragana: "つめたい", romanization: "tsumetai", adjGroup: "I", meaning: "cold (objects)", derivedMeanings: ["cold (feeling) / unfeeling"] },
    );
  }

  if (flashcardSettings.words.adjectives.appearances.value) {
    adjs.push(
      { kanjis: ["綺麗", "奇麗"], hiragana: "きれい", katakana: "キレイ", romanization: "kirei", adjGroup: "Na", meaning: "beautiful / pretty" },
      { kanjis: ["美しい"], rareKanjis: ["愛しい"], hiragana: "うつくしい", romanization: "utsukushii", adjGroup: "I", meaning: "beautiful / pretty" },
      { hiragana: "かわいい", preferredForm: "hiragana", kanjis: ["可愛い"], romanization: "kawaii", adjGroup: "I", meaning: "cute" },
      { kanjis: ["眠そう"], hiragana: "ねむそう", romanization: "nemusou", adjGroup: "Na", meaning: "sleepy-looking" },
      { kanjis: ["汚い"], rareKanjis: ["穢い"], hiragana: "きたない", romanization: "kitanai", adjGroup: "I", meaning: "dirty" },

      { kanjis: ["明るい"], hiragana: "あかるい", romanization: "akarui", adjGroup: "I", meaning: "bright" },
      { kanjis: ["暗い"], rareKanjis: ["昏い", "冥い", "闇い"], hiragana: "くらい", romanization: "kurai", adjGroup: "I", meaning: "dark / gloomy" },

      { kanjis: ["黒い"], hiragana: "くろい", romanization: "kuroi", adjGroup: "I", meaning: "black" },
      { kanjis: ["白い"], hiragana: "しろい", romanization: "shiroi", adjGroup: "I", meaning: "white" },
      { kanjis: ["赤い", "紅い"], rareKanjis: ["朱い"], hiragana: "あかい", romanization: "akai", adjGroup: "I", meaning: "red" },
      { kanjis: ["青い", "蒼い"], rareKanjis: ["碧い"], hiragana: "あおい", romanization: "aoi", adjGroup: "I", meaning: "blue" },
      { kanjis: ["黄色い"], hiragana: "きいろい", romanization: "kiiroi", adjGroup: "I", meaning: "yellow" },

      { hiragana: "-そう", romanization: "-sou", adjGroup: "Na", meaning: "(appearing like, by feeling)", exampleUsages: ["あなたは眠そうだね", "[Noun] は [Adj. (feeling)] そう"] },
      { hiragana: "-みたい", romanization: "-midai", adjGroup: "Na", meaning: "(appearing like, by appearance)", exampleUsages: ["本物みたい", "[Noun] みたい", "[Verb] みたい", "[Verb-ta] みたい", "[Verb-te] いるみたい"] },
      { hiragana: "-らしい", romanization: "-rashii", adjGroup: "I", meaning: "(appearing like, by characteristic)", exampleUsages: ["あなたらしいね", "[Noun] らしい"] },
    );
  }

  if (flashcardSettings.words.adjectives.skillfulness.value) {
    adjs.push(
      { kanjis: ["上手い", "巧い"], rareKanjis: ["美い"], hiragana: "うまい", romanization: "umai", adjGroup: "I", meaning: "skillful" },
      { kanjis: ["上手"], hiragana: "じょうず", romanization: "jouzu", adjGroup: "Na", meaning: "skilled", exampleUsages: ["日本語が上手"] },
      { kanjis: ["下手"], hiragana: "へた", romanization: "heta", adjGroup: "Na", meaning: "unskilled" },

      { kanjis: ["正しい"], hiragana: "ただしい", romanization: "tadashii", adjGroup: "I", meaning: "correct" },
      { hiragana: "いけない", romanization: "ikenai", adjGroup: "I", meaning: "wrong" },
      { hiragana: "つたない", preferredForm: "hiragana", kanjis: ["拙い"], romanization: "tsutanai", adjGroup: "I", meaning: "poor quality" },

      { kanjis: ["強い"], hiragana: "つよい", romanization: "tsuyoi", adjGroup: "I", meaning: "strong / tough" },
      { kanjis: ["弱い"], hiragana: "よわい", romanization: "yowai", adjGroup: "I", meaning: "weak / fragile" },
      { hiragana: "すごい", preferredForm: "hiragana", kanjis: ["凄い"], katakana: "スゴイ", romanization: "sugoi", adjGroup: "I", meaning: "amazing / terrible" },
      { kanjis: ["面白い"], hiragana: "おもしろい", romanization: "omoshiroi", adjGroup: "I", meaning: "interesting" },
      { kanjis: ["不思議"], hiragana: "ふしぎ", romanization: "fushigi", adjGroup: "Na", meaning: "amazing" },
      { kanjis: ["立派"], hiragana: "りっぱ", romanization: "rippa", adjGroup: "Na", meaning: "splendid / elegant" },
      { kanjis: ["結構"], hiragana: "けっこう", romanization: "kekkou", adjGroup: "Na", meaning: "excellent (formal)", derivedMeanings: ["politely decline (fine with myself)"] },
      { kanjis: ["素晴らしい"], hiragana: "すばらしい", romanization: "subarashii", adjGroup: "I", meaning: "magnificent" },

      { kanjis: ["易しい"], hiragana: "やさしい", romanization: "yasashii", adjGroup: "I", meaning: "easy" },
      { kanjis: ["-易い"], hiragana: "-やすい", romanization: "-yasui", adjGroup: "I", meaning: "easy to (in terms of any kind of effort)", exampleUsages: ["[Verb-stem] 易い", "話しやすい (easy to talk with / easy to find and talk)", "酔いやすい (get drunk easily)"] },
      { kanjis: ["難しい"], hiragana: "むずかしい", romanization: "muzukashii", adjGroup: "I", meaning: "difficult" },
      { kanjis: ["-難い", "-悪い"], hiragana: "-にくい", romanization: "-nikui", adjGroup: "I", meaning: "hard to (in terms of any kind of effort)", exampleUsages: ["[Verb-stem] 難い", "使いにくい (hard to use)", "車酔いしにくい (doesn't get car sick easily)"] },
      { hiragana: "もっともらしい", preferredForm: "hiragana", kanjis: ["尤もらしい"], romanization: "mottomorashii", adjGroup: "I", meaning: "plausible" },
      { kanjis: ["無理"], hiragana: "むり", katakana: "ムリ", romanization: "muri", adjGroup: "Na", meaning: "unreasonable" },
      { kanjis: ["不可能"], hiragana: "ふかのう", romanization: "fukanou", adjGroup: "Na", meaning: "impossible" },
    );
  }

  if (flashcardSettings.words.adjectives.personalities.value) {
    adjs.push(
      { kanjis: ["頭がいい", "頭が良い"], hiragana: "あたまがいい", romanization: "atamagaii", adjGroup: "I", meaning: "smart" },
      { kanjis: ["頭が良い", "頭がよい"], hiragana: "あたまがよい", romanization: "atamagayoi", adjGroup: "I", meaning: "smart" },

      { kanjis: ["優しい"], hiragana: "やさしい", romanization: "yasashii", adjGroup: "I", meaning: "kind / gentle" },
      { kanjis: ["親切"], rareKanjis: ["深切"], hiragana: "しんせつ", romanization: "shinsetsu", adjGroup: "Na", meaning: "considerate" },
      { kanjis: ["近しい"], hiragana: "ちかしい", romanization: "chikashii", adjGroup: "I", meaning: "intimate" },
      { kanjis: ["親しい"], hiragana: "したしい", romanization: "shitashii", adjGroup: "I", meaning: "intimate" },
      { kanjis: ["仲がいい", "仲が良い"], hiragana: "なかがいい", romanization: "nakagaii", adjGroup: "I", meaning: "being close / on good terms" },

      { kanjis: ["男らしい"], hiragana: "おとこらしい", romanization: "otokorashii", adjGroup: "I", meaning: "manly" },
      { kanjis: ["女らしい"], hiragana: "おんならしい", romanization: "onnarashii", adjGroup: "I", meaning: "womanly" },

      { kanjis: ["若い"], hiragana: "わかい", romanization: "wakai", adjGroup: "I", meaning: "youthful" },
    );
  }

  if (flashcardSettings.words.adjectives.descriptive.value) {
    adjs.push(
      //
      { kanjis: ["自然"], hiragana: "しぜん", romanization: "shizen", adjGroup: "Na", meaning: "natural" },
      { katakana: "リアル", romanization: "riaru", adjGroup: "Na", meaning: "real" },

      { kanjis: ["同じ"], hiragana: "おなじ", romanization: "onaji", adjGroup: "Na", meaning: "identical", exampleUsages: ["[Noun] は [Noun] におなじ [Verb]"] },

      { kanjis: ["活発"], rareKanjis: ["活溌", "活潑"], hiragana: "かっぱつ", romanization: "kappatsu", adjGroup: "Na", meaning: "lively / actively", exampleUsages: ["[Noun] は [Noun] におなじ [Verb]"] },
      { kanjis: ["眠い", "睡い"], hiragana: "ねむい", romanization: "nemui", adjGroup: "I", meaning: "sleepy" },

      { kanjis: ["暇"], rareKanjis: ["閑"], hiragana: "ひま", romanization: "hima", adjGroup: "Na", meaning: "free / unoccupied" },
      { kanjis: ["暇がない", "暇が無い"], hiragana: "ひまがない", romanization: "himaganai", adjGroup: "I", meaning: "busy" },
      { kanjis: ["忙しい"], hiragana: "いそがしい", romanization: "isogashii", adjGroup: "I", meaning: "busy" },
      { kanjis: ["賑やか"], hiragana: "にぎやか", romanization: "nigiyaka", adjGroup: "Na", meaning: "bustling" },
      { kanjis: ["騒がしい"], hiragana: "さわがしい", romanization: "sawagashii", adjGroup: "I", meaning: "noisy / boisterous" },
      { kanjis: ["有名"], hiragana: "ゆうめい", romanization: "yuumei", adjGroup: "Na", meaning: "famous / well-known" },
    );
  }

  if (flashcardSettings.words.adjectives.chronological.value) {
    adjs.push(
      { kanjis: ["新しい"], hiragana: "あたらしい", romanization: "atarashii", adjGroup: "I", meaning: "new / novel" },
      { kanjis: ["古い"], rareKanjis: ["旧い", "故い"], hiragana: "ふるい", romanization: "furui", adjGroup: "I", meaning: "old / aged (things)" },

      { kanjis: ["早い", "速い"], rareKanjis: ["疾い", "捷い"], hiragana: "はやい", romanization: "hayai", adjGroup: "I", meaning: "quick" },
      { kanjis: ["遅い"], hiragana: "おそい", romanization: "osoi", adjGroup: "I", meaning: "slow" },

      { kanjis: ["久しぶり", "久し振り"], hiragana: "ひさしぶり", romanization: "hisashiburi", adjGroup: "Na", meaning: "has been a long time" },
    );
  }

  if (flashcardSettings.words.adjectives.locational.value) {
    adjs.push(
      //
      { kanjis: ["近い"], hiragana: "ちかい", romanization: "chikai", adjGroup: "I", meaning: "near" },
      { kanjis: ["遠い"], hiragana: "とおい", romanization: "tooi", adjGroup: "I", meaning: "far" },
    );
  }

  if (flashcardSettings.words.adjectives.measurements.value) {
    adjs.push(
      { kanjis: ["多い"], hiragana: "おおい", romanization: "ooi", adjGroup: "I", meaning: "many / much" },
      { kanjis: ["少ない"], rareKanjis: ["尠い", "寡い"], hiragana: "すくない", romanization: "sukunai", adjGroup: "I", meaning: "few / little / rare" },

      { kanjis: ["大きい"], hiragana: "おおきい", romanization: "ookii", adjGroup: "I", meaning: "big / large" },
      { kanjis: ["小さい"], hiragana: "ちいさい", romanization: "chiisai", adjGroup: "I", meaning: "small / tiny" },

      { kanjis: ["長い", "永い"], hiragana: "ながい", romanization: "nagai", adjGroup: "I", meaning: "long (length)", derivedMeanings: ["long (duration)"] },
      { kanjis: ["短い"], hiragana: "みじかい", romanization: "mijikai", adjGroup: "I", meaning: "short (length)", derivedMeanings: ["short (duration)"] },

      { kanjis: ["重い"], hiragana: "おもい", romanization: "omoi", adjGroup: "I", meaning: "heavy" },
      { kanjis: ["軽い"], hiragana: "かるい", romanization: "karui", adjGroup: "I", meaning: "light" },

      { kanjis: ["厚い", "篤い"], hiragana: "あつい", romanization: "atsui", adjGroup: "I", meaning: "thick", derivedMeanings: ["deep", "heavy"] },
      { kanjis: ["太い"], hiragana: "ふとい", romanization: "futoi", adjGroup: "I", meaning: "fat", derivedMeanings: ["thick", "deep voice"] },
      { kanjis: ["薄い"], hiragana: "うすい", romanization: "usui", adjGroup: "I", meaning: "thin", derivedMeanings: ["low density", "weak intensity"] },
      { kanjis: ["細い"], hiragana: "ほそい", romanization: "hosoi", adjGroup: "I", meaning: "thin / slender (cylindrical)" },

      { kanjis: ["高い"], hiragana: "たかい", romanization: "takai", adjGroup: "I", meaning: "high (position/value/status/...)", derivedMeanings: ["tall"] },
      { kanjis: ["低い"], hiragana: "ひくい", romanization: "hikui", adjGroup: "I", meaning: "low (position/value/status/...)" },

      { kanjis: ["広い"], hiragana: "ひろい", romanization: "hiroi", adjGroup: "I", meaning: "wide" },
      { kanjis: ["狭い"], hiragana: "せまい", romanization: "semai", adjGroup: "I", meaning: "narrow" },

      { kanjis: ["丸い", "円い"], hiragana: "まるい", romanization: "marui", adjGroup: "I", meaning: "circular / ball shape" },

      { kanjis: ["安い", "廉い"], hiragana: "やすい", romanization: "yasui", adjGroup: "I", meaning: "cheap" },

      { hiragana: "こわい", preferredForm: "hiragana", kanjis: ["強い"], romanization: "kowai", adjGroup: "I", meaning: "stiff / hard" },
    );
  }

  if (flashcardSettings.words.adjectives.miscellaneous.value) {
    adjs.push(
      // TODO: used like -suru?
      { hiragana: "-したい", romanization: "shitai", adjGroup: "I", meaning: "wanted to do" },

      { hiragana: "-ような", preferredForm: "hiragana", kanjis: ["様な"], romanization: "youna", adjGroup: "Na", meaning: "similarly (conceptually)" },

      { hiragana: "いろいろ", preferredForm: "hiragana", kanjis: ["色々", "色色"], romanization: "iroiro", adjGroup: "Na", meaning: "various" },
    );
  }

  for (const adj of adjs) {
    if (adj.adjGroup === "I" && !flashcardSettings.enableIAdjectives.value) continue;
    if (adj.adjGroup === "Na" && !flashcardSettings.enableNaAdjectives.value) continue;

    words.push(adj);
  }
}
