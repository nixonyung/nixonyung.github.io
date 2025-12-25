import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalLogical(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableFunctionalLogical) {
    words.splice(
      words.length,
      0, //
      // because
      { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because" },
      { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because" },
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) because of ...", exampleUsages: ["[Clause ending with Verb] から ...", "[Clause ending with Noun] だから ...", "[Clause ending with i-Adj.] から ...", "[Clause ending with na-Adj.] だから ..."] },
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) (who the action is from)", exampleUsages: ["... [Noun (people/things)] から [Verb]"] },
      { hiragana: "てから", romanization: "kara", meaning: "(introducing precedent:) xxx and immediately after", exampleUsages: ["[Verb-て] から ..."] },
      { hiragana: "ので", romanization: "node", meaning: "because ...", exampleUsages: ["[Clause ending with Verb] ので ...", "[Clause ending with Noun] なので ...", "[Clause ending with i-Adj.] ので ...", "[Clause ending with na-Adj.] なので ..."] },
      { hiragana: "のせいで", preferredForm: "hiragana", rareKanjis: ["の所為で"], romanization: "noseide", meaning: "due to", exampleUsages: ["[Noun] のせいで [Clause]"] },

      // conditional
      { hiragana: "たら", romanization: "tara", meaning: "if" },
      { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if" },
      { hiragana: "とも", romanization: "tomo", meaning: "even if" },
      { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case" },
      { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case" },
      { hiragana: "なければ", preferredForm: "hiragana", kanjis: ["無ければ"], romanization: "nakereba", meaning: "if not" },

      // how (indefinite)
      { kanjis: ["何しろ"], hiragana: "なにしろ", romanization: "nanishiro", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なにせ", romanization: "nanise", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なんせ", romanization: "nanse", meaning: "anyhow" },
      { kanjis: ["何かと", "何彼と"], hiragana: "なにかと", romanization: "nanikato", meaning: "in many ways" },
      { hiragana: "なぜか", preferredForm: "hiragana", kanjis: ["何故か"], romanization: "nazeka", meaning: "for some reason / somehow" },
      { hiragana: "ともなく", preferredForm: "hiragana", romanization: "tomonaku", meaning: "unknowingly" },

      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "likewise" },
      { kanjis: ["同じく"], hiragana: "おなじく", romanization: "onajiku", meaning: "likewise" },

      // interrogative
      { hiragana: "どう", romanization: "dou", meaning: "how is xxx?", exampleUsages: ["[Noun] はどうですか？"] },
      { hiragana: "どうして", romanization: "doushite", meaning: "why does that happen?", exampleUsages: ["どうして [Clause]？", "[Noun] はどうして [Verb]？"] },
      { hiragana: "どうやって", romanization: "douyatte", meaning: "how to xxx?", exampleUsages: ["どうやって [Clause]？", "[Noun] はどうやって [Verb]？"] },
      { kanjis: ["何と"], hiragana: "なんと", romanization: "nanto", meaning: "how" },
      { hiragana: "どうして", preferredForm: "hiragana", rareKanjis: ["如何して"], romanization: "doushite", meaning: "why / how" },
      { hiragana: "なんで", preferredForm: "hiragana", kanjis: ["何で"], romanization: "nande", meaning: "why / how (casual)" },
      { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "why (logically)" },
    );
  }
}
