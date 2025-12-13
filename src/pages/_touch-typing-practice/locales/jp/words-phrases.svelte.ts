import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendPhrases(words: JapaneseWord[]) {
  // TODO: example usage for sentence structures
  if (jp.flashcardSettings.enablePhrasesParticles) {
    words.splice(
      words.length,
      0, //
      { hiragana: "は", romanization: "wa", meaning: "(topic marker) / 的話" },
      { hiragana: "が", romanization: "ga", meaning: "(subject marker)" },
      { hiragana: "を", romanization: "o", meaning: "(direct object marker)" },
      { hiragana: "に", romanization: "ni", meaning: "(time / place marker)" },
      { hiragana: "で", romanization: "de", meaning: "(time / place marker)" },
      { hiragana: "へ", romanization: "e", meaning: "(target marker)" },
      { hiragana: "の", rareKanjis: ["乃"], romanization: "no", meaning: "(possession marker) / xxx's / 的 / 嘅" },
      { hiragana: "か", romanization: "ka", meaning: "(question marker)" },
      { hiragana: "よ", romanization: "yo", meaning: "(exclamation marker) / 啊" },

      { hiragana: "ね", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },
      { hiragana: "ねー", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },
      { hiragana: "ねえ", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },
      { hiragana: "ねぇ", preferredForm: "hiragana", romanization: "ne", meaning: "right?" },

      { hiragana: "も", romanization: "mo", meaning: "and" },
      { hiragana: "と", romanization: "to", meaning: "and" },
      { hiragana: "より", romanization: "yori", meaning: "than / instead of" },
      { hiragana: "から", romanization: "kara", meaning: "from / since" },
      { hiragana: "まで", rareKanjis: ["迄"], romanization: "made", meaning: "up to / until" },
      { hiragana: "たら", romanization: "tara", meaning: "if" },
      { hiragana: "とも", romanization: "tomo", meaning: "even if" },
      { hiragana: "とか", romanization: "toka", meaning: "or something like that" },
      { hiragana: "ばかり", preferredForm: "hiragana", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "only / 只" },
      { hiragana: "ともなく", preferredForm: "hiragana", romanization: "tomonaku", meaning: "unknowingly" },
      { hiragana: "だけ", preferredForm: "hiragana", kanjis: ["丈"], romanization: "dake", meaning: "merely" },
      { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case" },
      { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case" },
      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc." },
      { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because" },
      { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because" },
    );
  }

  if (jp.flashcardSettings.enablePhrasesInterjections) {
    words.splice(
      words.length,
      0, //
      { hiragana: "いい", romanization: "ii", meaning: "that's good (informal)" },
      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "(agree)" },
      { kanjis: ["良い", "好い", "善い"], rareKanjis: ["佳い", "吉い", "宜い"], hiragana: "よい", romanization: "yoi", meaning: "that's good (formal)" },
      { hiragana: "まじ？", romanization: "maji", meaning: "seriously? (informal)" },

      { hiragana: "いや", preferredForm: "hiragana", kanjis: ["否"], romanization: "iya", meaning: "no" },
      { hiragana: "いいえ", romanization: "iie", meaning: "no (formal) / don't mention it" },
      { hiragana: "あれっ？", romanization: "are", meaning: "eh?" },
      { hiragana: "その…", romanization: "sono", meaning: "um... / 那個吧..." },

      { hiragana: "ほら", romanization: "hora", meaning: "look!" },
      { hiragana: "すげー", romanization: "sugee", meaning: "incredible" },
    );
  }

  // TODO: greetings
  if (jp.flashcardSettings.enablePhrasesGreetings) {
    words.splice(
      words.length,
      0, //
    );
  }

  if (jp.flashcardSettings.enablePhrasesMiscellaneous) {
    words.splice(
      words.length,
      0, //
      // TODO: nani?
      { kanjis: ["何？"], hiragana: "なに？", romanization: "nani", meaning: "what?" },
      { kanjis: ["何ですか？"], hiragana: "なんですか？", romanization: "nandesuka", meaning: "what is it? (polite)" },
      { kanjis: ["何なのか？"], hiragana: "なんなのか？", romanization: "nannanoka", meaning: "what is jp about?" },
      { kanjis: ["何なのか？"], hiragana: "なになのか？", romanization: "naninanoka", meaning: "what is jp about?" },
      { hiragana: "どうして？", preferredForm: "hiragana", rareKanjis: ["如何して？"], romanization: "doushite", meaning: "why? / how?" },
      { hiragana: "どうして！", preferredForm: "hiragana", rareKanjis: ["如何して！"], romanization: "doushite", meaning: "no way!" },

      { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera" },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "it can't be helped" },
    );
  }

  if (jp.flashcardSettings.enableSentenceStructures) {
    words.splice(
      words.length,
      0, //
      // is / is not / was / was not
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] だ"], hiragana: "〇〇は〇〇だ", romanization: "da", meaning: "{xxx / it} is xxx (informal)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] です"], hiragana: "〇〇は〇〇です", romanization: "desu", meaning: "{xxx / it} is xxx (formal)" },

      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃない"], hiragana: "〇〇は〇〇じゃない", romanization: "janai", meaning: "{xxx / it} is not xxx (informal)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃありません"], hiragana: "〇〇は〇〇じゃありません", romanization: "ja arimasen", meaning: "{xxx / it} is not xxx (informal, polite)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではない"], hiragana: "〇〇は〇〇ではない", romanization: "dewanai", meaning: "{xxx / it} is not xxx (formal)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではない"], hiragana: "〇〇は〇〇ではありません", romanization: "dewa arimasen", meaning: "{xxx / it} is not xxx (formal, polite)" },

      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] だった"], hiragana: "〇〇は〇〇だった", romanization: "datta", meaning: "{xxx / it} was xxx (informal)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] でした"], hiragana: "〇〇は〇〇でした", romanization: "deshita", meaning: "{xxx / it} was xxx (formal)" },

      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃなかった"], hiragana: "〇〇は〇〇じゃなかった", romanization: "ja nakatta", meaning: "{xxx / it} was not xxx (informal)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃありませんでした"], hiragana: "〇〇は〇〇じゃありませんでした", romanization: "ja arimasen deshita", meaning: "{xxx / it} is was not xxx (informal, polite)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではなかった"], hiragana: "〇〇は〇〇ではなかった", romanization: "dewa nakatta", meaning: "{xxx / it} is was not xxx (formal)" },
      { exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではありませんでした"], hiragana: "〇〇は〇〇ではありませんでした", romanization: "dewa arimasen deshita", meaning: "{xxx / it} was not xxx (formal, polite)" },

      // ---

      { exampleUsages: ["[Noun] で ..."], hiragana: "〇〇で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action" },
      { exampleUsages: ["どんな [Noun]"], hiragana: "どんな〇〇", romanization: "donna", meaning: "what kind of" },
      { exampleUsages: ["どうして [Clause]", "[Noun] は どうして [Verb]"], hiragana: "どうして", romanization: "doshite", meaning: "why / how 怎麼" },
      { exampleUsages: ["どうやって [Clause]", "[Noun] は/で どうやって [Verb]"], hiragana: "どうやって", romanization: "douyatte", meaning: "how 點樣" },

      { exampleUsages: ["...。 でも [Clause]"], hiragana: "でも", romanization: "demo", meaning: "however" },
      { exampleUsages: ["[Clause] が [Clause]"], hiragana: "が", romanization: "ga", meaning: "but" },

      { exampleUsages: ["[Noun] だけ", "[Verb] だけ", "[Adj.] だけ", "[Clause] だけ"], hiragana: "〇〇だけ", romanization: "dake", meaning: "xxx (in its entirety)" },
      // TODO: Shika, Bakari, Nomi

      { exampleUsages: ["だろう", "[Noun] だろう", "[Verb] だろう", "[Adj.] だろう"], hiragana: "〇〇だろう", romanization: "darou", meaning: "right? (informal, masculine)" },
      { exampleUsages: ["でしょう", "[Noun] でしょう", "[Verb] でしょう", "[Adj.] でしょう"], hiragana: "〇〇でしょう", romanization: "deshou", meaning: "right? (informal, polite)" },

      { exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)ダメ"], hiragana: "ちゃダメ", romanization: "cha dame", meaning: "should not / must not xxx! (informal)" },
      { exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけない"], hiragana: "ちゃいけない", romanization: "cha ikenai", meaning: "should not / must not xxx (informal)" },
      { exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけません"], hiragana: "ちゃいけません", romanization: "cha ikemasen", meaning: "should not / must not xxx (formal)" },

      { exampleUsages: ["[Verb]-ta + 後で", "[Noun]-の + 後で"], kanjis: ["後で"], hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal) / xx 左之後" },
      { exampleUsages: ["[Verb]-ta + 後に", "[Noun]-の + 後に"], kanjis: ["後に"], hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal) / xx 左之後" },
      { exampleUsages: ["[Verb]-te + から"], hiragana: "から", romanization: "kara", meaning: "xxx and immediately then / since xxx / xx (完)之後" },
    );
  }
}
