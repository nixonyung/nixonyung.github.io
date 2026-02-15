import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalEnumerative(words: JapaneseWord[]) {
  // TODO: https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AB
  // TODO: https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AF

  if (flashcardSettings.words.functional.enumerative.value) {
    words.push(
      // listing
      // TODO: move words that can replace は to adpositions?

      { hiragana: "と", romanization: "to", meaning: "and (exhausive)", derivedMeanings: ["with me", "and then (facts/habits)", "when (what also happened)"], exampleUsages: ["[Noun] と [Noun] [Verb] ... (and)", "[Noun] と [Verb] ... (with me)", "[Clause] と [Clause] (and then / when)"] },
      { hiragana: "とか", romanization: "toka", meaning: "and (non-exhausive, spoken)" },
      { hiragana: "といった", preferredForm: "hiragana", kanjis: ["と言った"], romanization: "toitta", meaning: "etc." },

      { hiragana: "たり", romanization: "tari", meaning: "and (listing actions / targets)", exampleUsages: ["[Verb-た] り ...", "[Noun] だったり ...", "[i-Adj. (dropped)] だったり ...", "[na-Adj.] だったり ..."] },

      { hiragana: "か", romanization: "ka", meaning: "or (listing options)", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ..."] },

      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc. (written)", exampleUsages: ["A、B、C など ..."] },
      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc. (written)", exampleUsages: ["A、B、C など ..."] },
      { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera (written, formal)" },

      { kanjis: ["例えば"], hiragana: "たとえば", romanization: "tatoeba", meaning: "for example" },

      { hiragana: "も", romanization: "mo", meaning: "and (non-exhausive)", exampleUsages: ["[Noun] も [Verb] (xx and me do ...)", "[Noun] も [Noun] も [Verb]", "[Noun] も [Noun] も [Noun] も [Verb]"] },
      { hiragana: "や", romanization: "ya", meaning: "and (non-exhausive, written)", exampleUsages: ["[Noun] や [Noun] ..."] },
      { hiragana: "し", romanization: "shi", meaning: "and (non-exhausive, spoken)", exampleUsages: ["[Clause] し、 [Clause]"] },

      // with contrast
      { hiragana: "けど", romanization: "kedo", meaning: "but (spoken, casual)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けども", romanization: "kedomo", meaning: "but (spoken, slightly polite)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (spoken, polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。", "...。 けれど、 [Clause]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (written, very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。", "...。 けれども、 [Clause]。"] },

      { hiragana: "でも", romanization: "demo", meaning: "however (casual)", exampleUsages: ["...。 でも、[Clause]"] },
      { hiragana: "しかし", rareKanjis: ["然し", "併し"], romanization: "shikashi", meaning: "however (polite)", exampleUsages: ["...。 しかし、[Clause]"] },
      { kanjis: ["但し"], hiragana: "ただし", romanization: "tadashi", meaning: 'however ("except that", written, polite)', exampleUsages: ["...。 しかし、[Clause]"] },

      { hiragana: "のに", romanization: "noni", meaning: "even though (... something still happen unexpectedly)", exampleUsages: ["[Clause] のに、 [Clause]。"] },
      { hiragana: "もっとも", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "most importantly" },

      { hiragana: "より", romanization: "yori", meaning: "compared to", exampleUsages: ["[Noun] は [Noun] より [Adj.] です。"] },
      { kanjis: ["〇〇より〇〇方が"], hiragana: "〇〇より〇〇ほうが", romanization: "yori ~ hou ga", meaning: "compared to xxx, xxx is even more xxx", exampleUsages: ["[Noun] より、 [Noun] のほうが [Adj.] です。", "[Verb] より、 [Verb] のほうが [Adj.] です。", "[Adj.] より、 [Adj.] のほうが [Adj.] です。"] },

      { kanjis: ["〇〇の中で〇〇が一番〇〇"], hiragana: "〇〇のなかで〇〇がいちばん〇〇", romanization: "-no naka de 〇〇 ga ichiban", meaning: "in xxx, xxx is the most xxx", exampleUsages: ["[Noun] の中で [Noun] が 一番 ..."] },

      // ordering
      { kanjis: ["次いで"], hiragana: "ついで", romanization: "tsuide", meaning: "secondly" },
    );
  }
}
