import { flashcardSettings, type JapaneseWord } from "./FlashcardSettings.svelte";

export function appendFunctionalEnumerative(words: JapaneseWord[]) {
  // TODO: https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AB
  // TODO: https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AF

  if (flashcardSettings.words.functional.enumerative.value) {
    words.push(
      // listing
      // TODO: move words that can replace は to adpositions?

      { hiragana: "と", romanization: "to", meaning: "and (exhausive)", derivedMeanings: ["together with", "if/when (facts/habits/general truths)"], exampleUsages: ["[Noun] と [Noun] [Verb] ... (and)", "[Noun] と [Verb] ... (doing xxx with xxx)", "[Clause] と、[Clause] (and then / when)"] },
      { hiragana: "とか", romanization: "toka", meaning: "and (non-exhausive, spoken)", derivedMeanings: ["or something like"] },
      { hiragana: "で", romanization: "de", meaning: "and also (sharing subject)", exampleUsages: ["私は日本人で、東京に住んでいる"] },

      { hiragana: "か", romanization: "ka", meaning: "or (listing options)", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ..."] },

      { kanjis: ["例えば"], hiragana: "たとえば", romanization: "tatoeba", meaning: "for example" },

      { hiragana: "も", romanization: "mo", meaning: "and (non-exhausive)", exampleUsages: ["[Noun (person)] も ... (xxx and me ...)", "[Noun] も [Noun] も [Noun] も ...", "[Noun ]、[Noun] にも(place)/でも(means) ..."] },
      { hiragana: "や", romanization: "ya", meaning: "and (non-exhausive, written)", exampleUsages: ["[Noun] や [Noun] ..."] },

      { hiragana: "し", romanization: "shi", meaning: "not only, and also", exampleUsages: ["[Clause] し、 [Clause]"] },

      // ellipsis
      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc. (written)", exampleUsages: ["A、B、C など ..."] },
      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc. (written)", exampleUsages: ["A、B、C など ..."] },
      { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera (written, formal)" },

      { hiragana: "といった", preferredForm: "hiragana", kanjis: ["と言った"], romanization: "toitta", meaning: "etc." },
      { hiragana: "とにかく", romanization: "tonikaku", meaning: "anyway (omitting)" },

      // with contrast
      { hiragana: "けど", romanization: "kedo", meaning: "but (spoken, casual)", derivedMeanings: ["(soften a strong assertion)"], exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。"] },
      { hiragana: "けども", romanization: "kedomo", meaning: "but (spoken, slightly polite)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (spoken, polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (written, very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。"] },

      { hiragana: "ですが", romanization: "desu ga", meaning: "is xxx, but", exampleUsages: ["最初の壁は高いですが、..."] },

      { hiragana: "でも", romanization: "demo", meaning: "however (casual)", exampleUsages: ["...。 でも、[Clause]"] },
      { hiragana: "しかし", rareKanjis: ["然し", "併し"], romanization: "shikashi", meaning: "however (polite)", exampleUsages: ["...。 しかし、[Clause]"] },
      { kanjis: ["但し"], hiragana: "ただし", romanization: "tadashi", meaning: 'however ("except that", written, polite)', exampleUsages: ["...。 しかし、[Clause]"] },

      { hiragana: "のに", romanization: "noni", meaning: "even though (... something still happen unexpectedly)", exampleUsages: ["[Clause] のに、 [Clause]。"] },
      { hiragana: "もっとも", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "most importantly" },

      { hiragana: "より", romanization: "yori", meaning: "compared to", exampleUsages: ["[Noun] は/が [Noun] より [Adj.] です。"] },
      { kanjis: ["〇〇より〇〇方が"], hiragana: "〇〇より〇〇ほうが", romanization: "yori ~ hou ga", meaning: "compared to xxx, xxx is even more xxx", exampleUsages: ["[Noun] より、 [Noun] のほうが [Adj.] です。", "[Verb] より、 [Verb] のほうが [Adj.] です。", "[Adj.] より、 [Adj.] のほうが [Adj.] です。"] },

      { kanjis: ["〇〇の中で〇〇が一番〇〇"], hiragana: "〇〇のなかで〇〇がいちばん〇〇", romanization: "-no naka de 〇〇 ga ichiban", meaning: "in xxx, xxx is the most xxx", exampleUsages: ["[Noun] の中で [Noun] が 一番 ..."] },

      // ordering
      { hiragana: "あとは", romanization: "atowa", meaning: "next up" },
      { hiragana: "また", preferredForm: "hiragana", kanjis: ["又"], rareKanjis: ["亦", "復"], romanization: "mata", meaning: "moreover / once again" },

      { kanjis: ["次いで"], hiragana: "ついで", romanization: "tsuide", meaning: "second" },

      { kanjis: ["一つ目"], hiragana: "ひとつめ", romanization: "hitotsume", meaning: "first" },
      { kanjis: ["二つ目"], hiragana: "ふたつめ", romanization: "futatsume", meaning: "second" },
      { kanjis: ["三つ目"], hiragana: "みっつめ", romanization: "mittsume", meaning: "third" },
    );
  }
}
