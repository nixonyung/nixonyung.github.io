import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalDegree(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableFunctionalDegree) {
    words.splice(
      words.length,
      0, //
      // comparative
      { hiragana: "とても", rareKanjis: ["迚も"], romanization: "totemo", meaning: "very", exampleUsages: ["とても [Adj.]", "とても [Verb]"] },
      { kanjis: ["大層", "大そう"], hiragana: "たいそう", romanization: "taisou", meaning: "greatly" },
      { kanjis: ["超"], hiragana: "ちょう", romanization: "chou", meaning: "super-", exampleUsages: ["超xx"] },
      { kanjis: ["極めて"], hiragana: "きわめて", romanization: "kiwamete", meaning: "extremely" },
      { kanjis: ["随分", "ずい分"], hiragana: "ずいぶん", romanization: "zuibun", meaning: "extremely" },
      { hiragana: "めっちゃ", preferredForm: "hiragana", rareKanjis: ["滅茶"], romanization: "meccha", meaning: "extremely (slang)" },
      { kanjis: ["全然"], hiragana: "ぜんぜん", romanization: "zenzen", meaning: "completely" },
      { hiragana: "もっと", romanization: "motto", meaning: "even more" },

      // superlative
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
      { kanjis: ["一番", "１番"], hiragana: "いちばん", romanization: "ichiban", meaning: "xxx is the most xxx", exampleUsages: ["[Noun] は(が) 一番 [Verb / Adj.] です。"] },

      // degree
      { kanjis: ["何らか", "何等か"], hiragana: "なんらか", romanization: "nanraka", meaning: "somewhat" },
      { kanjis: ["何より"], hiragana: "なにより", romanization: "naniyori", meaning: "above anything else" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "not at all" },
      { kanjis: ["何も"], hiragana: "なんも", romanization: "nanmo", meaning: "not at all" },

      // proportions
      { hiragana: "ばかり", preferredForm: "hiragana", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "only / 只" },
      { hiragana: "だけ", preferredForm: "hiragana", kanjis: ["丈"], romanization: "dake", meaning: "(in its entirety)" },

      // TODO: numbers
      // TODO: counters

      // interrogative
      { kanjis: ["何人"], hiragana: "なんにん", romanization: "nannin", meaning: "how many people" },
      { kanjis: ["何度"], hiragana: "なんど", romanization: "nando", meaning: "how many times / how many degrees" },
    );
  }
}
