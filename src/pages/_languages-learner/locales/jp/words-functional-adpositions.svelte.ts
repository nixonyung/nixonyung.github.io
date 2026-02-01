import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalAdpositions(words: JapaneseWord[]) {
  if (flashcardSettings.words.functional.adpositions.value) {
    words.push(
      { hiragana: "は", romanization: "wa", meaning: "(known subject marker)", exampleUsages: ["[Noun] は ..."] },
      { hiragana: "が", romanization: "ga", meaning: "(new subject marker)", derivedMeanings: ["(signaling contrasting info, written)"], exampleUsages: ["[Noun] が ...", "[Clause] が、 [Clause]"] },
      { hiragana: "を", romanization: "o", meaning: "(object marker)", exampleUsages: ["[Noun (object)] を [Verb (transitive)] ..."] },
      { hiragana: "の", romanization: "no", meaning: "(nominalization)", derivedMeanings: ["(forming noun clause)", "(possession marker)"], exampleUsages: ["[Verb] の ...", "[Adj.] の ...", "[Noun] の [Noun] ...", "だれの [Noun] ですか？ (which of xxx do you want?)", "絵コンテ作業の最終調整"] },

      { hiragana: "に", romanization: "ni", meaning: "(time/location marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ...", "[Noun (time)] に [Noun (location)] に [Verb] ..."] },
      { hiragana: "へ", romanization: "e", meaning: "(direction marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ..."] },
      { hiragana: "で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action", exampleUsages: ["[Noun] で [Verb] ...", "二週間で [Clause]"] },
      { hiragana: "のに", romanization: "noni", meaning: "(purpose marker)", exampleUsages: ["[Verb] のに [Verb] ..."] },
      { hiragana: "として", romanization: "toshite", meaning: "as", exampleUsages: ["[Noun] として [Verb]"] },

      { hiragana: "か", romanization: "ka", meaning: "(question marker)", exampleUsages: ["[Clause] か？"] },
      { hiragana: "の", romanization: "no", meaning: "how? / really? (spoken)", exampleUsages: ["学生なの？"] },
      { hiragana: "し", romanization: "shi", meaning: "because of that (spoken)", exampleUsages: ["だって、子供だし。"] },

      // TODO: changing word forms
      // (move to auxiliary?)
      // TODO: だっ
      // TODO: の: noun to adj.
      { hiragana: "-さ", romanization: "-sa", meaning: "-ness (adj. to noun)", exampleUsages: ["-らしさ (xxx-like-ness)"] },

      { hiragana: "-ら", romanization: "-ra", meaning: "(plural, informal)" },
      { hiragana: "-たち", preferredForm: "hiragana", kanjis: ["-達"], romanization: "-tachi", meaning: "(plural, formal)" },

      // TODO: English particles / common short words in Katakana
    );
  }
}
