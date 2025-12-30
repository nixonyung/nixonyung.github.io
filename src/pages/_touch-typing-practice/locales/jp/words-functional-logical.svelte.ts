import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalLogical(words: JapaneseWord[]) {
  // TODO: ように
  // https://colanekojp.com.tw/blog_detail/66
  // https://www.sigure.tw/learn-japanese/grammar/n3/123

  if (jp.flashcardSettings.enableFunctionalLogical) {
    words.push(
      // because
      { hiragana: "だって", romanization: "datte", meaning: "because (spoken, casual)" },
      { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because (formal)" },
      { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because (formal)" },
      { hiragana: "から", romanization: "kara", meaning: "because of (casual)", derivedMeanings: ["(who did the action)"], exampleUsages: ["[Clause ending with Verb] から [Clause]", "[Clause ending with Noun] だから [Clause]", "[Clause ending with i-Adj.] から [Clause]", "[Clause ending with na-Adj.] だから [Clause]"] },
      // TODO: only use with volitional verbs
      { hiragana: "ために", preferredForm: "hiragana", kanjis: ["為に"], romanization: "tameni", meaning: "so (purpose)", exampleUsages: ["[Clause] ために [Clause]", "テストに合格するために ...", "家族のために ...", "この日のために ..."] },
      { hiragana: "ように", preferredForm: "hiragana", kanjis: ["様に"], romanization: "youni", meaning: "so (desired state)", exampleUsages: ["[Clause] ように [Clause]", "日本語て漫画が読めるように ..."] },
      { hiragana: "ので", romanization: "node", meaning: "because of (what cause, written)", exampleUsages: ["[Clause ending with Verb] ので ...", "[Clause ending with Noun] なので ...", "[Clause ending with i-Adj.] ので ...", "[Clause ending with na-Adj.] なので ..."] },
      { hiragana: "のせいで", preferredForm: "hiragana", rareKanjis: ["の所為で"], romanization: "noseide", meaning: "due to", exampleUsages: ["[Noun] のせいで [Clause]"] },

      // conditional
      { hiragana: "たら", romanization: "tara", meaning: "if so (uncertain / imaginary)", derivedMeanings: ["and then (making request / what should be done)", "when (what also happened)"], exampleUsages: ["[Clause] たら [Clause]", "暇になったら"] },
      { hiragana: "ば", romanization: "ba", meaning: "if that's what you want", exampleUsages: ["[Clause] ば [Clause]", "どうすれば [Clause]"] },
      { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case (explicitly echoing what is just spoken)", derivedMeanings: ["if that's true (making assumption by observation)"], exampleUsages: ["[Clause] なら / のなら / んなら [Clause]"] },
      { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case (formal)" },
      { hiragana: "なければ", preferredForm: "hiragana", kanjis: ["無ければ"], romanization: "nakereba", meaning: "if not" },
      { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if (hypothetical)" },
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
