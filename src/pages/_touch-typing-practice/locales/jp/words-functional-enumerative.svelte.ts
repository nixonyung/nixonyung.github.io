import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalEnumerative(words: JapaneseWord[]) {
  // TODO: https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AB
  // TODO: https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AF

  if (jp.flashcardSettings.enableFunctionalEnumerative) {
    words.splice(
      words.length,
      0, //
      // and
      { hiragana: "と", romanization: "to", meaning: "and (exhausive)", derivedMeanings: ["with me"], exampleUsages: ["[Noun] と [Noun] ...", "[Noun] と ..."] },
      { hiragana: "も", romanization: "mo", meaning: "also", exampleUsages: ["[Noun] も [Verb]", "[Noun] も [Noun] も [Verb]", "[Noun] も [Noun] も [Noun] も [Verb]"] },
      { hiragana: "とか", romanization: "toka", meaning: "and (non-exhausive, spoken)" },
      { hiragana: "や", romanization: "ya", meaning: "and (non-exhausive, written)", exampleUsages: ["[Noun] や [Noun] ..."] },
      { hiragana: "たり", romanization: "tari", meaning: "and (listing actions / targets)", exampleUsages: ["[Verb-た] り ...", "[Noun] だったり ...", "[i-Adj. (dropped)] だったり ...", "[na-Adj.] だったり ..."] },

      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc. (written)" },

      // or
      { hiragana: "か", romanization: "ka", meaning: "or (listing options)", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ..."] },

      // with contrast
      { hiragana: "より", romanization: "yori", meaning: "compared to", exampleUsages: ["[Noun] は [Noun] より [Adj.] です。"] },
      { kanjis: ["〇〇より〇〇方が"], hiragana: "〇〇より〇〇ほうが", romanization: "yori ~ hou ga", meaning: "compared to xxx, xxx is even more xxx", exampleUsages: ["[Noun] より、 [Noun] のほうが [Adj.] です。", "[Verb] より、 [Verb] のほうが [Adj.] です。", "[Adj.] より、 [Adj.] のほうが [Adj.] です。"] },

      { kanjis: ["〇〇の中で〇〇が一番〇〇"], hiragana: "〇〇のなかで〇〇がいちばん〇〇", romanization: "-no naka de 〇〇 ga ichiban", meaning: "in xxx, xxx is the most xxx", exampleUsages: ["[Noun] の中で [Noun] が 一番 ..."] },

      { hiragana: "けど", romanization: "kedo", meaning: "but (spoken, casual)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けども", romanization: "kedomo", meaning: "but (spoken, slightly polite)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (spoken, polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。", "...。 けれど、 [Clause]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (written, very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。", "...。 けれども、 [Clause]。"] },

      { hiragana: "でも", romanization: "demo", meaning: "however (casual)", exampleUsages: ["...。 でも、[Clause]"] },
      { hiragana: "しかし", rareKanjis: ["然し", "併し"], romanization: "shikashi", meaning: "however (polite)", exampleUsages: ["...。 しかし、[Clause]"] },
      { kanjis: ["但し"], hiragana: "ただし", romanization: "tadashi", meaning: 'however ("except that", written, polite)', exampleUsages: ["...。 しかし、[Clause]"] },

      { hiragana: "のに", romanization: "noni", meaning: "even though (... something still happen unexpectedly)", exampleUsages: ["[Clause] のに、 [Clause]。"] },
      { hiragana: "もっとも", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "most importantly" },
    );
  }
}
