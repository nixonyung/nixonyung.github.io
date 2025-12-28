import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalLogical(words: JapaneseWord[]) {
  // TODO: ように
  // https://colanekojp.com.tw/blog_detail/66
  // https://www.sigure.tw/learn-japanese/grammar/n3/123

  if (jp.flashcardSettings.enableFunctionalLogical) {
    words.splice(
      words.length,
      0, //
      // because
      { hiragana: "から", romanization: "kara", meaning: "because of (casual)", derivedMeanings: ["(who did the action)"], exampleUsages: ["[Clause ending with Verb] から [Clause]", "[Clause ending with Noun] だから [Clause]", "[Clause ending with i-Adj.] から [Clause]", "[Clause ending with na-Adj.] だから [Clause]"] },
      // TODO: only use with volitional verbs
      { hiragana: "ために", preferredForm: "hiragana", kanjis: ["為に"], romanization: "tameni", meaning: "so (explaining volitional reason)", exampleUsages: ["テストに合格するために ...", "家族のために ...", "この日のために ..."] },
      { hiragana: "ように", preferredForm: "hiragana", kanjis: ["様に"], romanization: "youni", meaning: "so (explaining non-volitional goal)", exampleUsages: ["日本語て漫画が読めるように ..."] },
      { hiragana: "ので", romanization: "node", meaning: "because of (what cause, written)", exampleUsages: ["[Clause ending with Verb] ので ...", "[Clause ending with Noun] なので ...", "[Clause ending with i-Adj.] ので ...", "[Clause ending with na-Adj.] なので ..."] },
      { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because (formal)" },
      { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because (formal)" },
      { hiragana: "のせいで", preferredForm: "hiragana", rareKanjis: ["の所為で"], romanization: "noseide", meaning: "due to", exampleUsages: ["[Noun] のせいで [Clause]"] },

      // conditional
      { hiragana: "たら", romanization: "tara", meaning: "if" },
      { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if (hypothetical)" },
      { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case" },
      { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case (formal)" },
      { hiragana: "なければ", preferredForm: "hiragana", kanjis: ["無ければ"], romanization: "nakereba", meaning: "if not" },
      { hiragana: "とも", romanization: "tomo", meaning: "even if" },

      // how (indefinite)
      { kanjis: ["何しろ"], hiragana: "なにしろ", romanization: "nanishiro", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なにせ", romanization: "nanise", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なんせ", romanization: "nanse", meaning: "anyhow" },
      { kanjis: ["何かと", "何彼と"], hiragana: "なにかと", romanization: "nanikato", meaning: "in many ways" },
      { hiragana: "なぜか", preferredForm: "hiragana", kanjis: ["何故か"], romanization: "nazeka", meaning: "for some reason / somehow" },
      { hiragana: "ともなく", preferredForm: "hiragana", romanization: "tomonaku", meaning: "unknowingly" },

      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "like what is just said" },
      { kanjis: ["同じく"], hiragana: "おなじく", romanization: "onajiku", meaning: "likewise" },

      // interrogative
      { hiragana: "どうして", rareKanjis: ["如何して"], romanization: "doushite", meaning: "why / how / what happened", exampleUsages: ["どうして [Clause]？", "[Noun] はどうして [Verb]？"] },

      { hiragana: "なんで", preferredForm: "hiragana", kanjis: ["何で"], romanization: "nande", meaning: "why / how (casual)" },
      { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "why (logically)" },

      { hiragana: "どう", romanization: "dou", meaning: "how is xxx?", exampleUsages: ["[Noun] はどうですか？"] },
      { kanjis: ["何と"], hiragana: "なんと", romanization: "nanto", meaning: "how (surprised)" },
      { hiragana: "どうやって", romanization: "douyatte", meaning: "how to xxx?", exampleUsages: ["どうやって [Clause]？", "[Noun] はどうやって [Verb]？"] },
    );
  }
}
