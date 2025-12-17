import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendPhrases(words: JapaneseWord[]) {
  // TODO: example usage for sentence structures
  if (jp.flashcardSettings.enablePhrasesParticles) {
    words.splice(
      words.length,
      0, //
      { hiragana: "よ", romanization: "yo", meaning: "(exclamation marker) / 啊" },

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
      { hiragana: "まだまだ", preferredForm: "hiragana", kanjis: ["未だ未だ"], romanization: "madamada", meaning: "not done yet" },
      { hiragana: "まだですか？", preferredForm: "hiragana", kanjis: ["未だですか？"], romanization: "madadesuka", meaning: "not done yet?" },

      { hiragana: "いや", preferredForm: "hiragana", kanjis: ["否"], romanization: "iya", meaning: "no" },
      { hiragana: "いいえ", romanization: "iie", meaning: "no (formal) / don't mention it" },
      { hiragana: "あれっ？", romanization: "are", meaning: "eh?" },
      { hiragana: "その…", romanization: "sono", meaning: "um... / 那個吧..." },

      { hiragana: "ほら", romanization: "hora", meaning: "look!" },
      { kanjis: ["急いで"], hiragana: "いそいで", romanization: "isoide", meaning: "hurry up!" },
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

      { hiragana: "どれにする?", romanization: "dore ni suru", meaning: "Which one are you going for?" },
      { hiragana: "これにします。", romanization: "kore ni shimasu", meaning: "I am going for this." },

      { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera" },

      { hiragana: "だから", romanization: "dakara", meaning: "Told you already!" },

      { hiragana: "もうありません", romanization: "mou arimasen", meaning: "aren't any left" },

      { kanjis: ["最後まで"], hiragana: "さいごまで", romanization: "saigomade", meaning: "till the end", exampleUsages: ["最後まで [Verb]"] },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "It can't be helped" },

      { kanjis: ["日本へようこそ！"], hiragana: "にほんへようこそ！", romanization: "nihon e youkoso", meaning: "Welcome to Japan!" },
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

  if (jp.flashcardSettings.enableSentenceStructuresIAdjectives) {
    words.splice(
      words.length,
      0, //
      // present
      { hiragana: "い", romanization: "i", meaning: "(i-adj. in present tense)", exampleUsages: ["[i-Adj.]-い"] },

      // past
      { hiragana: "かった", romanization: "katta", meaning: "(i-adj. in past tense)", exampleUsages: ["[i-Adj.]-かった"] },

      // present negative
      { hiragana: "くない", romanization: "ku nai", meaning: "(i-adj. in present negative tense, casual)", exampleUsages: ["[i-Adj.]-くない"] },
      { hiragana: "くありません", romanization: "ku arimasen", meaning: "(i-adj. in present negative tense, polite)", exampleUsages: ["[i-Adj.]-くありません"] },

      // past negative
      { hiragana: "くなかった", romanization: "ku nakatta", meaning: "(i-adj. in past negative tense, casual)", exampleUsages: ["[i-Adj.]-くなかった"] },
      { hiragana: "くありませんでした", romanization: "ku arimasen deshita", meaning: "(i-adj. in past negative tense, polite)", exampleUsages: ["[i-Adj.]-くありませんでした"] },
    );
  }

  if (jp.flashcardSettings.enableSentenceStructuresNaAdjectives) {
    words.splice(
      words.length,
      0, //
      // TODO: vs "is"?

      // present
      { hiragana: "な", romanization: "na", meaning: "(na-adj. in present tense, middle-of-sentence)", exampleUsages: ["[na-Adj.] な"] },
      { hiragana: "だ", romanization: "da", meaning: "(na-adj. in present tense, end-of-sentence, casual)", exampleUsages: ["[na-Adj.] だ。"] },
      { hiragana: "です", romanization: "da", meaning: "(na-adj. in present tense, end-of-sentence, polite)", exampleUsages: ["[na-Adj.] です。"] },

      // past
      { hiragana: "だった", romanization: "datta", meaning: "(na-adj. in past tense, casual)", exampleUsages: ["[na-Adj.] だった"] },
      { hiragana: "でした", romanization: "deshita", meaning: "(na-adj. in past tense, polite)", exampleUsages: ["[na-Adj.] でした"] },

      // present negative
      { hiragana: "ない", romanization: "nai", meaning: "(na-adj. in present negative tense, casual)", exampleUsages: ["[na-Adj.] ない"] },
      { hiragana: "ではない", romanization: "dewa nai", meaning: "(na-adj. in present negative tense, polite)", exampleUsages: ["[na-Adj.] ではない"] },

      // past negative
      { hiragana: "じゃなかった", romanization: "ja nakatta", meaning: "(na-adj. in past negative tense, casual)", exampleUsages: ["[na-Adj.] じゃなかった"] },
      { hiragana: "ではありませんでした", romanization: "dewa arimasen deshita", meaning: "(na-adj. in past negative tense, polite)", exampleUsages: ["[na-Adj.] ではありませんでした"] },
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
      // TODO: to simple sentences?

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
      // connectives:
      { hiragana: "は", romanization: "wa", meaning: "(topic marker, e.g. time/place/person)", exampleUsages: ["[Noun] は [Clause]"] },
      { hiragana: "か", romanization: "ka", meaning: "or", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ？"] },
      { hiragana: "が", romanization: "ga", meaning: "even though", exampleUsages: ["[Clause] が、 [Clause]。"] },
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) because of ...", exampleUsages: ["[Clause ending with Verb] から、 ...", "[Clause ending with Noun] だから、 ...", "[Clause ending with i-Adj.] から、 ...", "[Clause ending with na-Adj.] だから、 ..."] },
      { hiragana: "けど", romanization: "kedo", meaning: "but (casual)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。", "...。 けれど、 [Clause]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。", "...。 けれども、 [Clause]。"] },
      { hiragana: "でも", romanization: "demo", meaning: "however", exampleUsages: ["...。 でも、[Clause]"] },
      { hiragana: "もう", romanization: "mou", meaning: '("not happening again") already', exampleUsages: ["[Noun] はもう [Clause]"] },

      // questions:
      { hiragana: "か？", romanization: "ka", meaning: "(question marker)", exampleUsages: ["[Clause] か？"] },
      { hiragana: "ね？", romanization: "ne", meaning: "isn't it? (expressing feelings, casual)", exampleUsages: ["[Clause] ね。"] },
      { hiragana: "ませんか？", romanization: "masen ka", meaning: "will you?", exampleUsages: ["[Verb-ます (dropped)] ませんか？"] },
      { hiragana: "ましょうか？", romanization: "mashou ka", meaning: "shall I? (assuming yes)", exampleUsages: ["[Verb-ます (dropped)] ましょうか？"] },

      { hiragana: "だろう", romanization: "darou", meaning: "right? (casual)", exampleUsages: ["[Clause] だろう？"] },
      { hiragana: "でしょう", romanization: "deshou", meaning: "right? (polite)", exampleUsages: ["[Clause] でしょう？"] },

      { hiragana: "どうして？", romanization: "doshite", meaning: "why 點解會係", exampleUsages: ["どうして [Clause]？", "[Noun] はどうして [Verb]？"] },
      { hiragana: "どうやって？", romanization: "douyatte", meaning: "how 點樣", exampleUsages: ["どうやって [Clause]？", "[Noun] はどうやって [Verb]？"] },

      // exclamations:
      { hiragana: "なあ。", romanization: "naa", meaning: '("I think") - wow / I wonder (casual)', exampleUsages: ["[Clause] なあ。"] },
      { hiragana: "ましょう！", romanization: "mashou", meaning: "let's xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] ましょう！"] },
      { hiragana: "しましょう！", romanization: "shimashou", meaning: "let's do xxx (polite)", exampleUsages: ["[Noun] しましょう！"] },

      // simple sentences:
      { hiragana: "〇〇んだ ", romanization: "-n da", meaning: "it is because (casual)", exampleUsages: ["[Clause] んだ。"] },
      { hiragana: "〇〇んです", romanization: "-n desu", meaning: "it is because (polite)", exampleUsages: ["[Clause] んです。"] },

      { kanjis: ["に行く"], hiragana: "にいく", romanization: "ni iku", meaning: "I am going to xxx (casual)", exampleUsages: ["[Verb-ます (dropped)] に行く。"] },
      { kanjis: ["に行きます"], hiragana: "にいきません", romanization: "ni ikimasen", meaning: "I am going to xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] に行きます。"] },
      { hiragana: "にする", romanization: "ni suru", meaning: "I am going for xxx (casual)", exampleUsages: ["[Noun] にする。"] },
      { hiragana: "にします", romanization: "ni shimasu", meaning: "I am going for xxx (polite)", exampleUsages: ["[Noun] にします。"] },

      { hiragana: "ほしい", preferredForm: "hiragana", kanjis: ["欲しい"], romanization: "hoshii", meaning: "I want xxx", exampleUsages: ["[Noun] がほしいです。"] },

      { hiragana: "なる", preferredForm: "hiragana", kanjis: ["成る"], romanization: "naru", meaning: "become xxx (casual)", exampleUsages: ["[i-Adj. (dropped)] くなる", "[na-Adj.] になる", "[Noun] になる"] },
      { hiragana: "なります", preferredForm: "hiragana", kanjis: ["成ります"], romanization: "narimasu", meaning: "become xxx (polite)", exampleUsages: ["[i-Adj. (dropped)] くなります", "[na-Adj.] になります", "[Noun] になります"] },
      { hiragana: "なっている", preferredForm: "hiragana", kanjis: ["成っている"], romanization: "natteiru", meaning: "becoming xxx (casual)", exampleUsages: ["[i-Adj. (dropped)] くなっている", "[na-Adj.] になっている", "[Noun] になっている"] },
      { hiragana: "なっています", preferredForm: "hiragana", kanjis: ["成っています"], romanization: "natteimasen", meaning: "becoming xxx (polite)", exampleUsages: ["[i-Adj. (dropped)] くなっています", "[na-Adj.] になっています", "[Noun] になっています"] },
      { hiragana: "なった", preferredForm: "hiragana", kanjis: ["成った"], romanization: "natta", meaning: "became xxx (casual)", exampleUsages: ["[i-Adj. (dropped)] くなった", "[na-Adj.] になった", "[Noun] になった"] },
      { hiragana: "なりました", preferredForm: "hiragana", kanjis: ["成りました"], romanization: "narimashita", meaning: "became xxx (polite)", exampleUsages: ["[i-Adj. (dropped)] くなりました", "[na-Adj.] になりました", "[Noun] になりました"] },
      { hiragana: "なりたい", preferredForm: "hiragana", kanjis: ["成りたい"], romanization: "naritai", meaning: "will become xxx", exampleUsages: ["[i-Adj. (dropped)] くなりたい", "[na-Adj.] になりたい", "[Noun] になりたい"] },

      { hiragana: "ないで。", romanization: "naide", meaning: "please don't xxx (casual)", exampleUsages: ["[Verb-ない] で。"] },
      { hiragana: "ないでください。", romanization: "naide kudasai", meaning: "please don't xxx (polite)", exampleUsages: ["[Verb-ない] でください。"] },
      { hiragana: "ないとだめです。", romanization: "naito damedesu", meaning: "have to (can't can't) xxx (casual, parental)", exampleUsages: ["[Verb-ない] とだめです。"] },
      { hiragana: "ないといけない。", romanization: "naito ikenai", meaning: "have to (can't can't) xxx (casual)", exampleUsages: ["[Verb-ない] といけない。"] },
      { hiragana: "ないといけません。", romanization: "naito ikemasen", meaning: "have to (can't can't) xxx (polite)", exampleUsages: ["[Verb-ない] といけません。"] },
      { hiragana: "なくていい", romanization: "nakute ii", meaning: "don't have to xxx", exampleUsages: ["[Verb-ない (dropped)] なくていいです。"] },
      { hiragana: "なくてもいい", romanization: "nakute moii", meaning: "doesn't matter if you xxx or not", exampleUsages: ["[Verb-ない (dropped)] なくてもいいです。"] },
      { hiragana: "なくちゃ", romanization: "nakucha", meaning: "must xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくちゃ。"] },
      { hiragana: "なくちゃだめ", romanization: "nakucha dame", meaning: "must xxx (parental)", exampleUsages: ["[Verb-ない (dropped)] なくちゃだめ。"] },
      { hiragana: "なくちゃいけない", romanization: "nakucha ikenai", meaning: "must xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくちゃいけない。"] },
      { hiragana: "なくちゃいけません", romanization: "nakucha ikemasen", meaning: "must xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくちゃいけません。"] },
      { hiragana: "なくちゃならない", romanization: "nakucha naranai", meaning: "have to xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくちゃならない。"] },
      { hiragana: "なくちゃなりません", romanization: "nakucha narimasen", meaning: "have to xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくちゃなりません。"] },
      { hiragana: "なくてはいけない", romanization: "nakutewa ikenai", meaning: "must xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくてはいけない。"] },
      { hiragana: "なくてはいけません", romanization: "nakutewa ikemasen", meaning: "must xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくてはいけません。"] },
      { hiragana: "なくてはならない", romanization: "nakutewa naranai", meaning: "have to xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくてはならない。"] },
      { hiragana: "なくてはなりません", romanization: "nakutewa narimasen", meaning: "have to xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくてはなりません。"] },

      // prefixes to nouns:
      { hiragana: "の", romanization: "no", meaning: "(possession marker)", exampleUsages: ["[Noun] の [Noun] ..."] },

      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) (who the action is from)", exampleUsages: ["... [Noun (people/things)] から [Verb]"] },
      { hiragana: "まだ", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "(emphasize continuity:) just", meaning: "still (continuing)", exampleUsages: ["まだ [Noun]"] },

      { hiragana: "どんな", romanization: "donna", meaning: "what kind of", exampleUsages: ["どんな [Noun] ..."] },

      // prefixes to verbs:
      { hiragana: "を", romanization: "o", meaning: "(object marker)", exampleUsages: ["[Noun (object)] を [Verb] ..."] },
      { hiragana: "に", romanization: "ni", meaning: "(time/location marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ...", "[Noun (time)] に [Noun (location)] に [Verb] ..."] },
      { hiragana: "へ", romanization: "e", meaning: "(obscure location marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ..."] },
      { hiragana: "で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action", exampleUsages: ["[Noun] で [Verb] ..."] },

      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) since", exampleUsages: ["[Noun (time/place)] から [Verb]"] },
      { hiragana: "まで", romanization: "made", meaning: "(introducing termination:) until", exampleUsages: ["[Noun (time/place)] まで [Verb]"] },
      { hiragana: "〇〇から〇〇まで", romanization: "kara, made", meaning: "from xxx to xxx", exampleUsages: ["[Noun (time/place)] から [Noun (time/place)] まで [Verb]"] },

      { hiragana: "まだ", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "(emphasize continuity:) still", exampleUsages: ["まだ [Verb-て] いる"] },
      { hiragana: "まだ", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "(emphasize continuity:) not yet", exampleUsages: ["まだ [Verb-て] いない", "まだ [Verb-て] いません"] },
      // TODO: ずっと zutto
      { hiragana: "もう", romanization: "mou", meaning: '("not happening again") not again', exampleUsages: ["もう [Verb]"] },

      { kanjis: ["一緒に"], hiragana: "いっしょに", romanization: "isshoni", meaning: "together {with xxx}", exampleUsages: ["一緒に [Verb]", "[Noun] と 一緒に [Verb]。"] },
      { hiragana: "いつも", preferredForm: "hiragana", kanjis: ["何時も"], romanization: "itsumo", meaning: "always", exampleUsages: ["{[Noun] は} いつも [Verb / Adj.]"] },

      // prefixes to adjs:
      { kanjis: ["一番", "１番"], hiragana: "いちばん", romanization: "ichiban", meaning: "xxx is the most xxx", exampleUsages: ["[Noun] は(が) 一番 [Verb / Adj.] です。"] },

      // suffixes to nouns:
      { hiragana: "も", romanization: "mo", meaning: "also", exampleUsages: ["[Noun] も [Verb]", "[Noun] も [Noun] も [Verb]", "[Noun] も [Noun] も [Noun] も [Verb]"] },
      { hiragana: "だけ", romanization: "dake", meaning: "xxx (in its entirety)", exampleUsages: ["[Noun] だけ", "[Verb] だけ", "[Adj.] だけ", "[Clause] だけ"] },
      // TODO: [Noun-の]: noun as verb
      { kanjis: ["前に"], hiragana: "まえに", romanization: "maeni", meaning: "before xxx", exampleUsages: ["[Noun] の前に ..."] },
      { kanjis: ["後で"], hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal)", exampleUsages: ["[Noun] の後で ..."] },
      { kanjis: ["後に"], hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal)", exampleUsages: ["[Noun] の後に ..."] },

      // suffixes to verbs:
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) xxx and immediately after", exampleUsages: ["[Verb-て] から ..."] },
      { hiragana: "ないで", romanization: "naide", meaning: "without xxx", exampleUsages: ["[Verb-ない] で [Verb]"] },
      { kanjis: ["前に"], hiragana: "まえに", romanization: "maeni", meaning: "before xxx", exampleUsages: ["[Verb-る] 前に ..."] },
      { kanjis: ["後で"], hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal)", exampleUsages: ["[Verb-た] 後で ..."] },
      { kanjis: ["後に"], hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal)", exampleUsages: ["[Verb-た] 後に ..."] },

      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "way of doing", exampleUsages: ["[Noun] の [Verb-ます (dropped)] 方"] },
      { kanjis: ["方がいい", "方が良い", "ほうが良い"], hiragana: "ほうがいい", romanization: "hougaii", meaning: "is preferred", exampleUsages: ["[Verb] 方がいい ..."] },
      { kanjis: ["方が良い", "ほうが良い", "方がよい"], hiragana: "ほうがよい", romanization: "hougayoi", meaning: "is preferred", exampleUsages: ["[Verb] 方が良い ..."] },

      // TODO: wake dewanai
      // TODO: beki dewanai
      // TODO: mono dewanai

      // TODO: noni

      // TODO: Shika, Bakari, Nomi
    );
  }
}
