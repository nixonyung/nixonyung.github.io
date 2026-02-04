import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalDegree(words: JapaneseWord[]) {
  // TODO: https://www.nihongomaster.com/japanese/dictionary/word/68426/nanraka-%E4%BD%95%E3%82%89%E3%81%8B-%E4%BD%95%E7%AD%89%E3%81%8B-%E3%81%AA%E3%82%93%E3%82%89%E3%81%8B

  if (flashcardSettings.words.functional.degree.value) {
    words.push(
      // comparative
      { hiragana: "とても", rareKanjis: ["迚も"], romanization: "totemo", meaning: "very", exampleUsages: ["とても [Adj.]", "とても [Verb]"] },
      { hiragana: "めっちゃ", rareKanjis: ["滅茶"], romanization: "meccha", meaning: "very (casual, slang)" },
      { kanjis: ["非常に"], hiragana: "ひじょうに", romanization: "hijouni", meaning: "very (formal)" },
      { kanjis: ["大変", "大へん"], hiragana: "たいへん", romanization: "taihen", meaning: "very (formal, negative / sorry)" },
      { kanjis: ["大-"], hiragana: "だい", romanization: "dai-", meaning: "big / greatly", exampleUsages: ["大歓迎", "大家族"] },
      { kanjis: ["超-"], hiragana: "ちょう", romanization: "chou-", meaning: "super", exampleUsages: ["超xx"] },
      { kanjis: ["極めて"], hiragana: "きわめて", romanization: "kiwamete", meaning: "extremely (formal)" },
      { kanjis: ["大いに"], hiragana: "おおいに", romanization: "ooini", meaning: "extremely (written, exaggerated)" },

      // comparative - with expectations
      { hiragana: "かなり", rareKanjis: ["可也", "可成り", "可なり", "可成"], romanization: "kanari", meaning: "quite (better than expected)" },
      { hiragana: "なかなか", preferredForm: "hiragana", kanjis: ["中々", "中中"], rareKanjis: ["仲々", "仲仲", "却々", "却却"], romanization: "nakanaka", meaning: "decently (better than expected)" },
      { hiragana: "すごく", preferredForm: "hiragana", kanjis: ["凄く"], romanization: "sugoku", meaning: "very (casual, better than expected)" },
      { hiragana: "ずいぶん", preferredForm: "hiragana", kanjis: ["随分", "ずい分"], romanization: "zuibun", meaning: "very (better than expected)" },

      { hiragana: "しか", romanization: "shika", meaning: "only (unsatisfied)" },
      { hiragana: "ばかり", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "only (nothing else)", derivedMeanings: ["just / freshly (emphasizing the feeling)"], exampleUsages: ["2025年に設立されたばかり"] },

      // superlative
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
      { kanjis: ["一番", "１番"], hiragana: "いちばん", romanization: "ichiban", meaning: "xxx is the most xxx", exampleUsages: ["[Noun] は(が) 一番 [Verb / Adj.] です。"] },
      { kanjis: ["何より"], hiragana: "なにより", romanization: "naniyori", meaning: "above anything else" },

      // indefinite quantities (proportions)
      { kanjis: ["何らか", "何等か"], hiragana: "なんらか", romanization: "nanraka", meaning: "somewhat" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "not at all" },
      { kanjis: ["何も"], hiragana: "なんも", romanization: "nanmo", meaning: "not at all (spoken)" },
      { kanjis: ["丁度"], hiragana: "ちょうど", romanization: "choudo", meaning: "exactly" },
      { hiragana: "だけ", preferredForm: "hiragana", kanjis: ["丈"], romanization: "dake", meaning: "only (in its entirety)" },
      { kanjis: ["全部"], hiragana: "ぜんぶ", romanization: "zenbu", meaning: "all (concrete items)" },
      { hiragana: "すべて", kanjis: ["全て"], rareKanjis: ["総て", "凡て", "惣て", "渾て"], romanization: "subete", meaning: "all (formal, for abstract concepts)" },
      { kanjis: ["全体"], hiragana: "ぜんたい", romanization: "zentai", meaning: "the whole thing (written, for abstract concepts)", exampleUsages: ["[Noun] 全体"] },
      { kanjis: ["半分"], hiragana: "はんぶん", romanization: "hanbun", meaning: "half" },
      { hiragana: "ほとんど", preferredForm: "hiragana", kanjis: ["殆ど"], romanization: "hotondo", meaning: "most of" },
      { hiragana: "だんだん", preferredForm: "hiragana", kanjis: ["段々", "段段"], romanization: "dandan", meaning: "gradually" },
      { kanjis: ["少し"], rareKanjis: ["寡し", "些し"], hiragana: "すこし", romanization: "sukoshi", meaning: "a little (amount)" },
      { hiragana: "もっと", romanization: "motto", meaning: "even more" },
      { kanjis: ["多く"], hiragana: "おおく", romanization: "ooku", meaning: "many / much" },
      { kanjis: ["大分"], hiragana: "だいぶ", romanization: "daibu", meaning: "a lot" },
      { hiragana: "たくさん", preferredForm: "hiragana", kanjis: ["沢山"], romanization: "takusan", meaning: "a lot / much", exampleUsages: ["たくさん勉強します"] },
      { hiragana: "まだまだ", preferredForm: "hiragana", kanjis: ["未だ未だ"], romanization: "madamada", meaning: "not done yet" },
      { hiragana: "いくつか", preferredForm: "hiragana", kanjis: ["幾つか"], romanization: "ikutsuka", meaning: "some / a few" },
      { hiragana: "いくつも", preferredForm: "hiragana", kanjis: ["幾つも"], romanization: "ikutsumo", meaning: "many / much" },
      { hiragana: "いくらか", preferredForm: "hiragana", kanjis: ["幾らか"], romanization: "ikuraka", meaning: "some / a little" },
      { hiragana: "いくらも", preferredForm: "hiragana", kanjis: ["幾らも"], romanization: "ikuramo", meaning: "many" },
      { hiragana: "うんと", romanization: "unto", meaning: "much (spoken, used by women)" },
      { hiragana: "ほとんど", preferredForm: "hiragana", kanjis: ["殆ど"], rareKanjis: ["幾ど"], romanization: "hotondo", meaning: "nearly all" },
      // TODO: each

      // definite quantities
      // TODO: numbers
      { kanjis: ["二つ"], hiragana: "ふたつ", romanization: "futatsu", meaning: "two", exampleUsages: ["二つの [Noun]"] },
      { kanjis: ["１００円"], hiragana: "ひゃくえん", romanization: "hyakuen", meaning: "100 yen" },
      { kanjis: ["就き"], hiragana: "つき", romanization: "tsuki", meaning: "per" },
      // TODO: counters
      { kanjis: ["一杯", "１杯"], hiragana: "いっぱい", romanization: "ippai", meaning: "one cup", derivedMeanings: ["full / many / much"] },
      { kanjis: ["一周"], hiragana: "いっしゅう", romanization: "isshuu", meaning: "one lap" },
      { katakana: "グラム", rareKanjis: ["瓦"], romanization: "guramu", meaning: "gram" },

      // interrogative
      { kanjis: ["何人"], hiragana: "なんにん", romanization: "nannin", meaning: "how many people" },
      { hiragana: "いくつ", preferredForm: "hiragana", kanjis: ["幾つ"], romanization: "ikutsu", meaning: "how many" },
      { hiragana: "いくら", preferredForm: "hiragana", kanjis: ["幾ら"], romanization: "ikura", meaning: "how much" },
      { kanjis: ["何度"], hiragana: "なんど", romanization: "nando", meaning: "how many times / how many degrees" },
    );
  }
}
