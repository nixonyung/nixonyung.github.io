import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalEnumerative(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableFunctionalEnumerative) {
    words.splice(
      words.length,
      0, //
      // and
      { hiragana: "も", romanization: "mo", meaning: "also", exampleUsages: ["[Noun] も [Verb]", "[Noun] も [Noun] も [Verb]", "[Noun] も [Noun] も [Noun] も [Verb]"] },
      { hiragana: "と", romanization: "to", meaning: "and (exhausive) / with me", exampleUsages: ["[Noun] と [Noun] ...", "[Noun] と ..."] },
      { hiragana: "とか", romanization: "toka", meaning: "and (non-exhausive, spoken)" },
      { hiragana: "や", romanization: "ya", meaning: "and (non-exhausive, written)", exampleUsages: ["[Noun] や [Noun] ..."] },
      { hiragana: "たり", romanization: "tari", meaning: "and (listing actions / targets)", exampleUsages: ["[Verb-た] り ...", "[Noun] だったり ...", "[i-Adj. (dropped)] だったり ...", "[na-Adj.] だったり ..."] },

      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc." },

      // or
      { hiragana: "か", romanization: "ka", meaning: "or (listing options)", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ..."] },

      // with contrast
      { hiragana: "より", romanization: "yori", meaning: "compared to", exampleUsages: ["[Noun] は [Noun] より [Adj.] です。"] },
      { kanjis: ["〇〇より〇〇方が"], hiragana: "〇〇より〇〇ほうが", romanization: "yori ~ hou ga", meaning: "compared to xxx, xxx is even more xxx", exampleUsages: ["[Noun] より、 [Noun] のほうが [Adj.] です。", "[Verb] より、 [Verb] のほうが [Adj.] です。", "[Adj.] より、 [Adj.] のほうが [Adj.] です。"] },

      { kanjis: ["〇〇の中で〇〇が一番〇〇"], hiragana: "〇〇のなかで〇〇がいちばん〇〇", romanization: "-no naka de 〇〇 ga ichiban", meaning: "in xxx, xxx is the most xxx", exampleUsages: ["[Noun] の中で [Noun] が 一番 ..."] },

      { hiragana: "でも", romanization: "demo", meaning: "however (casual)", exampleUsages: ["...。 でも、[Clause]"] },
      { hiragana: "しかし", rareKanjis: ["然し", "併し"], romanization: "shikashi", meaning: "however (polite)", exampleUsages: ["...。 しかし、[Clause]"] },
      { kanjis: ["但し"], hiragana: "ただし", romanization: "tadashi", meaning: "except that (written, polite)", exampleUsages: ["...。 しかし、[Clause]"] },
      { hiragana: "もっとも", preferredForm: "hiragana", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "but then" },

      { hiragana: "が", romanization: "ga", meaning: "even though", exampleUsages: ["[Clause] が、 [Clause]。"] },
      { hiragana: "けど", romanization: "kedo", meaning: "but (casual)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。", "...。 けれど、 [Clause]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。", "...。 けれども、 [Clause]。"] },
    );
  }
}
