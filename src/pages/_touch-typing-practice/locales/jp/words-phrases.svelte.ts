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
      { hiragana: "を", romanization: "o", meaning: "(direct object marker / describe the object of a verb)" },
      { hiragana: "に", romanization: "ni", meaning: "(time / place marker)" },
      { hiragana: "で", romanization: "de", meaning: "(time / place marker)" },
      { hiragana: "へ", romanization: "e", meaning: "(target marker)" },
      { hiragana: "の", rareKanjis: ["乃"], romanization: "no", meaning: "(possession marker) / xxx's / 的 / 嘅" },
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
      { kanjis: ["何なのか？"], hiragana: "なんなのか？", romanization: "nannanoka", meaning: "what is this about?" },
      { kanjis: ["何なのか？"], hiragana: "なになのか？", romanization: "naninanoka", meaning: "what is this about?" },
      { hiragana: "どうして？", preferredForm: "hiragana", rareKanjis: ["如何して？"], romanization: "doushite", meaning: "why? / how?" },
      { hiragana: "どうして！", preferredForm: "hiragana", rareKanjis: ["如何して！"], romanization: "doushite", meaning: "no way!" },

      { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera" },

      { hiragana: "だから", romanization: "dakara", meaning: "told you already!" },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "it can't be helped" },
    );
  }

  if (jp.flashcardSettings.enableSentenceStructuresDesu) {
    words.splice(
      words.length,
      0, //
      // is:
      { hiragana: "だ", romanization: "da", meaning: "{xxx} is xxx (casual)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] だ"] },
      { hiragana: "です", romanization: "desu", meaning: "{xxx} is xxx", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] です"] },

      // was:
      { hiragana: "だった", romanization: "datta", meaning: "{xxx} was xxx (casual)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] だった"] },
      { hiragana: "でした", romanization: "deshita", meaning: "{xxx} was xxx (polite)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] でした"] },

      // is not:
      { hiragana: "じゃない", romanization: "janai", meaning: "{xxx} is not xxx (casual)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃない"] },
      { hiragana: "じゃありません", romanization: "ja arimasen", meaning: "{xxx} is not xxx (polite)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃありません"] },
      { hiragana: "ではない", romanization: "dewanai", meaning: "{xxx} is not xxx (polite)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではない"] },
      { hiragana: "ではありません", romanization: "dewa arimasen", meaning: "{xxx} is not xxx (very formal)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではありません"] },

      // was not:
      { hiragana: "じゃなかった", romanization: "ja nakatta", meaning: "{xxx} was not xxx (casual)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃなかった"] },
      { hiragana: "じゃありませんでした", romanization: "ja arimasen deshita", meaning: "{xxx} was not xxx (polite)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] じゃありませんでした"] },
      { hiragana: "ではなかった", romanization: "dewa nakatta", meaning: "{xxx} was not xxx (polite)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではなかった"] },
      { hiragana: "ではありませんでした", romanization: "dewa arimasen deshita", meaning: "{xxx} was not xxx (very formal)", exampleUsages: ["{ [Noun] は(が) } [Noun / Adj.] ではありませんでした"] },
    );
  }

  if (jp.flashcardSettings.enableSentenceStructuresAdjectives) {
    words.splice(
      words.length,
      0, //
      // i-adjectives usage:

      // present
      { exampleUsages: ["[i-Adj.]-い"], hiragana: "い", romanization: "-i", meaning: "(adjective in present tense)" },

      // past
      { exampleUsages: ["[i-Adj.]-かった"], hiragana: "かった", romanization: "-katta", meaning: "(adjective in past tense)" },

      // present negative
      { exampleUsages: ["[i-Adj.]-くない"], hiragana: "くない", romanization: "-ku nai", meaning: "(adjective in present negative tense)" },
      { exampleUsages: ["[i-Adj.]-くありません"], hiragana: "くありません", romanization: "-ku arimasen", meaning: "(adjective in present negative tense, polite)" },

      // past negative
      { exampleUsages: ["[i-Adj.]-くなかった"], hiragana: "くなかった", romanization: "-ku nakatta", meaning: "(adjective in past negative tense)" },
      { exampleUsages: ["[i-Adj.]-くありませんでした"], hiragana: "くありませんでした", romanization: "-ku arimasen deshita", meaning: "(adjective in past negative tense, polite)" },

      // TODO: na-adjectives usage
    );
  }

  // for living things:
  if (jp.flashcardSettings.enableSentenceStructuresIru) {
    words.splice(
      words.length,
      0, //
      // has:
      { hiragana: "いる", romanization: "iru", meaning: "there is {xxx} (for living things, casual)", exampleUsages: ["{ [Noun] } が(は) いる"] },
      { hiragana: "います", romanization: "imasu", meaning: "there is {xxx} (for living things, polite)", exampleUsages: ["{ [Noun] } が(は) います"] },

      // had:
      { hiragana: "いた", romanization: "ita", meaning: "there was {xxx} (for living things, casual)", exampleUsages: ["{ [Noun] } が(は) いた"] },
      { hiragana: "いました", romanization: "imashita", meaning: "there was {xxx} (for living things, polite)", exampleUsages: ["{ [Noun] } が(は) いました"] },

      // has not:
      { hiragana: "いない", romanization: "inai", meaning: "there is not {xxx} (for living things, casual)", exampleUsages: ["{ [Noun] } が(は) いない"] },
      { hiragana: "いません", romanization: "imasen", meaning: "there is not {xxx} (for living things, polite)", exampleUsages: ["{ [Noun] } が(は) いません"] },

      // had not:
      { hiragana: "いなかった", romanization: "inakatta", meaning: "there was not {xxx} (for living things, casual)", exampleUsages: ["{ [Noun] } が(は) いなかった "] },
      { hiragana: "いませんでした", romanization: "imasen deshita", meaning: "there was not {xxx} (for living things, polite)", exampleUsages: ["{ [Noun] } が(は) いませんでした"] },
    );
  }

  // for non-living things
  if (jp.flashcardSettings.enableSentenceStructuresAru) {
    words.splice(
      words.length,
      0, //
      // there is:
      { hiragana: "ある", romanization: "aru", meaning: "there is {xxx} (for non-living things, casual)", exampleUsages: ["{ [Noun] } が(は) ある"] },
      { hiragana: "あります", romanization: "arimasu", meaning: "there is {xxx} (for non-living things, polite)", exampleUsages: ["{ [Noun] } が(は) あります"] },

      // there was:
      { hiragana: "あった", romanization: "atta", meaning: "there was {xxx} (for non-living things, casual)", exampleUsages: ["{ [Noun] } が(は) あった"] },
      { hiragana: "ありました", romanization: "arimashita", meaning: "there was {xxx} (for non-living things, polite)", exampleUsages: ["{ [Noun] } が(は) ありました"] },

      // there is not:
      { hiragana: "ない", romanization: "nai", meaning: "there is not {xxx} (for non-living things, casual)", exampleUsages: ["{ [Noun] } が(は) ない"] },
      { hiragana: "ありません", romanization: "arimasen", meaning: "there is not {xxx} (for non-living things, polite)", exampleUsages: ["{ [Noun] } が(は) ありません"] },

      // there was not:
      { hiragana: "なかった", romanization: "nakatta", meaning: "there was not {xxx} (for non-living things, casual)", exampleUsages: ["{ [Noun] } が(は) なかった"] },
      { hiragana: "ありませんでした", romanization: "arimasen deshita", meaning: "there was not {xxx} (for non-living things, polite)", exampleUsages: ["{ [Noun] } が(は) ありませんでした"] },
    );
  }

  if (jp.flashcardSettings.enableSentenceStructuresIkenai) {
    words.splice(
      words.length,
      0, //
      // TODO: should

      // should not
      { hiragana: "ちゃだめ", romanization: "cha dame", meaning: "should not / must not xxx! (casual, annoyed)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)だめ"] },
      { hiragana: "ちゃいけない", romanization: "cha ikenai", meaning: "should not / must not xxx (casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけない"] },
      { hiragana: "ちゃいけません", romanization: "cha ikemasen", meaning: "should not / must not xxx (formal)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけません"] },

      // TODO: must?
    );
  }

  if (jp.flashcardSettings.enableSentenceStructuresMicellaneous) {
    words.splice(
      words.length,
      0, //
      // TODO: prefix vs suffix

      // miscellaneous simple sentences:
      { hiragana: "か", romanization: "ka", meaning: "(question marker)", exampleUsages: ["[Clause] か？"] },
      { hiragana: "だろう", romanization: "darou", meaning: "right? (casual)", exampleUsages: ["{[Clause]} だろう？"] },
      { hiragana: "でしょう", romanization: "deshou", meaning: "right? (polite)", exampleUsages: ["{[Clause]} でしょう？"] },

      { hiragana: "がほしい", kanjis: ["が欲しい"], romanization: "ga hoshii", meaning: "I want xxx", exampleUsages: ["[Noun] がほしいです。"] },

      { hiragana: "どうして", romanization: "doshite", meaning: "why 點解會係", exampleUsages: ["どうして [Clause]？", "[Noun] はどうして [Verb]？"] },
      { hiragana: "どうやって", romanization: "douyatte", meaning: "how 點樣", exampleUsages: ["どうやって [Clause]？", "[Noun] はどうやって [Verb]？"] },

      { hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal)", exampleUsages: ["[Verb-ta] 後で、 ...", "[Noun] の後で、 ..."], kanjis: ["後で"] },
      { hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal)", exampleUsages: ["[Verb-ta] 後に、 ...", "[Noun] の後に、 ..."], kanjis: ["後に"] },

      // connectives:
      { hiragana: "か", romanization: "ka", meaning: "or", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ？"] },
      { hiragana: "が", romanization: "ga", meaning: "even though", exampleUsages: ["[Clause] が、 [Clause]。"] },
      { hiragana: "から", romanization: "kara", meaning: "because of ...", exampleUsages: ["[Clause ending with Verb] から、 ...", "[Clause ending with Noun] だから、 ...", "[Clause ending with i-Adj.] から、 ...", "[Clause ending with na-Adj.] だから、 ..."] },
      { hiragana: "から", romanization: "kara", meaning: "(action is from)", exampleUsages: ["... [Noun (people/things)] から [Verb]"] },
      { hiragana: "から", romanization: "kara", meaning: "since", exampleUsages: ["[Noun (time)] から、 ..."] },
      { hiragana: "から", romanization: "kara", meaning: "immediately after xxx", exampleUsages: ["[Verb-te] から ..."] },
      { hiragana: "けど", romanization: "kedo", meaning: "but (casual)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。", "...。 けれど、 [Clause]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。", "...。 けれども、 [Clause]。"] },
      { hiragana: "でも", romanization: "demo", meaning: "however", exampleUsages: ["...。 でも、[Clause]"] },

      // decorators to nouns:
      { hiragana: "で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action", exampleUsages: ["[Noun] で ..."] },
      { hiragana: "だけ", romanization: "dake", meaning: "xxx (in its entirety)", exampleUsages: ["[Noun] だけ", "[Verb] だけ", "[Adj.] だけ", "[Clause] だけ"] },
      { hiragana: "どんな", romanization: "donna", meaning: "what kind of", exampleUsages: ["どんな [Noun] ..."] },
      { kanjis: ["一番", "１番"], hiragana: "いちばん", romanization: "ichiban", meaning: "xxx is the most xxx", exampleUsages: ["[Noun] は(が) 一番 [Verb / Adj.] です。"] },

      // decorators to verbs:
      { kanjis: ["一緒に"], hiragana: "いっしょに", romanization: "isshoni", meaning: "together {with xxx}", exampleUsages: ["一緒に [Verb]", "[Noun] と 一緒に [Verb]。"] },
      { hiragana: "いつも", preferredForm: "hiragana", kanjis: ["何時も"], romanization: "itsumo", meaning: "always", exampleUsages: ["{[Noun] は} いつも [Verb / Adj.]"] },
      { kanjis: ["方がいい", "方が良い", "ほうが良い"], hiragana: "ほうがいい", romanization: "hougaii", meaning: "is preferred", exampleUsages: ["[Verb] 方がいい ..."] },
      { kanjis: ["方が良い", "ほうが良い", "方がよい"], hiragana: "ほうがよい", romanization: "hougayoi", meaning: "is preferred", exampleUsages: ["[Verb] 方が良い ..."] },
      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "way of doing", exampleUsages: ["[Noun] の [Verb-masu (dropped)] 方"] },

      // miscellaneous decorators

      // TODO: wake dewanai
      // TODO: beki dewanai
      // TODO: mono dewanai

      // TODO: noni

      // TODO: Shika, Bakari, Nomi
    );
  }
}
