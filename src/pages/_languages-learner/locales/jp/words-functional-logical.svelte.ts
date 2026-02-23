import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalLogical(words: JapaneseWord[]) {
  // TODO: ように
  // https://colanekojp.com.tw/blog_detail/66
  // https://www.sigure.tw/learn-japanese/grammar/n3/123

  if (flashcardSettings.words.functional.logical.value) {
    words.push(
      // because
      { hiragana: "ので", romanization: "node", meaning: "because", exampleUsages: ["(reason) ので/なので [Clause]"] },
      { hiragana: "だって", romanization: "datte", meaning: "because (spoken, casual)" },
      { hiragana: "から", romanization: "kara", meaning: "since / so (casual)", derivedMeanings: ["thanks to (someone)"] },
      { hiragana: "ため", preferredForm: "hiragana", kanjis: ["為"], romanization: "tame", meaning: "because", exampleUsages: ["(reason) ため [Clause]", "[Noun] のための [Noun]"] },
      { hiragana: "のせいで", rareKanjis: ["の所為で"], romanization: "noseide", meaning: "due to", exampleUsages: ["[Noun] のせいで [Clause]"] },
      { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because (formal)" },
      { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because (formal)" },

      { hiragana: "ために", preferredForm: "hiragana", kanjis: ["為に"], romanization: "tameni", meaning: "for the sake of (purpose)", exampleUsages: ["(action)[Verb-dictionary] ために (goal)[Clause]", "テストに合格するために ...", "家族のために ...", "この日のために ..."] },
      { hiragana: "ように", preferredForm: "hiragana", kanjis: ["様に"], romanization: "youni", meaning: "for the sake of (hope)", exampleUsages: ["(action)[Verb-potential] ように (hope)[Clause]", "日本語て漫画が読めるように ..."] },

      // conditional
      { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case (explicitly echoing what is just spoken)", derivedMeanings: ["if that's true (making assumption by observation)"], exampleUsages: ["[Clause] なら / のなら / んなら [Clause]"] },
      { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case (formal)" },
      { hiragana: "なければ", preferredForm: "hiragana", kanjis: ["無ければ"], romanization: "nakereba", meaning: "if not" },
      { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if (hypothetical)", exampleUsages: ["もし [Clause]", "もし [Clause] たら"] },
      { hiragana: "とも", romanization: "tomo", meaning: "even if" },

      // how (indefinite)
      { kanjis: ["何しろ"], hiragana: "なにしろ", romanization: "nanishiro", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なにせ", romanization: "nanise", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なんせ", romanization: "nanse", meaning: "anyhow" },
      { kanjis: ["何かと", "何彼と"], hiragana: "なにかと", romanization: "nanikato", meaning: "in many ways" },
      { hiragana: "なぜか", preferredForm: "hiragana", kanjis: ["何故か"], romanization: "nazeka", meaning: "for some reason / somehow" },
      { hiragana: "ともなく", preferredForm: "hiragana", romanization: "tomonaku", meaning: "unknowingly" },

      { hiragana: "そう", rareKanjis: ["然う"], romanization: "sou", meaning: "like what is just said" },
      { kanjis: ["同じく"], hiragana: "おなじく", romanization: "onajiku", meaning: "likewise" },
      { kanjis: ["通り"], hiragana: "とおり", romanization: "toori", meaning: "in accordance with", exampleUsages: ["その通り (exactly like what you said)", "憲法の通り (according to the constitution)"] },

      // interrogative
      { hiragana: "どうして", rareKanjis: ["如何して"], romanization: "doushite", meaning: "why / how / what happened", exampleUsages: ["どうして [Clause]？", "[Noun] はどうして [Verb]？"] },

      { hiragana: "なんで", preferredForm: "hiragana", kanjis: ["何で"], romanization: "nande", meaning: "why / how (casual)" },
      { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "why (logically)" },

      { kanjis: ["何と"], hiragana: "なんと", romanization: "nanto", meaning: "how (surprised)" },
      { hiragana: "どうやって", romanization: "douyatte", meaning: "how to xxx?", exampleUsages: ["どうやって [Clause]？", "[Noun] はどうやって [Verb]？"] },
    );
  }
}
