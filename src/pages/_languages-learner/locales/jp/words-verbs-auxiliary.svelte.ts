import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

// TODO: rename to verb phrases
export function appendAuxiliaryVerbs(words: JapaneseWord[]) {
  // TODO: https://www.mlcjapanese.co.jp/n3_01_01.html

  if (flashcardSettings.words.verbs.auxiliary.value) {
    words.push(
      // (dictionary)
      { hiragana: "です", romanization: "desu", meaning: "be / is", exampleUsages: ["なんですよね (surely is, spoken)"] },
      { hiragana: "だ", romanization: "da", meaning: "be / is (spoken, casual)" },
      { hiragana: "である", romanization: "dearu", meaning: "be / is (written, formal)" },

      { hiragana: "たい", romanization: "tai", meaning: "wanted to", exampleUsages: ["[Verb-stem] たい", "したい"] },

      { kanjis: ["方がいい", "方が良い", "ほうが良い"], hiragana: "ほうがいい", romanization: "hougaii (spoken/written)", meaning: "should xxx", exampleUsages: ["[Verb] 方がいい ..."] },
      { kanjis: ["方が良い", "ほうが良い", "方がよい"], hiragana: "ほうがよい", romanization: "hougayoi (slightly more written)", meaning: "should xxx", exampleUsages: ["[Verb] 方が良い ..."] },

      { hiragana: "つもりです", romanization: "tsumori desu", meaning: "planning to", exampleUsages: ["[Verb] つもりです。"] },
      { hiragana: "つもりはない", romanization: "tsumori wa nai", meaning: "planning not to (spoken, casual)", exampleUsages: ["[Verb-ない (dropped)] つもりはない"] },
      // TODO: dasu

      // -nai
      { hiragana: "ないで", romanization: "naide", meaning: "do not", exampleUsages: ["[Verb-ない (dropped)] ないで [Verb]", "[Verb-ない] でください。"] },

      { hiragana: "(ない) なくちゃいけない", romanization: "naku cha ikenai", meaning: "have to (spoken)", exampleUsages: ["[Verb-ない (dropped)] なくちゃいけない。"] },
      { hiragana: "(ない) なくちゃならない", romanization: "naku cha naranai", meaning: "have to (written)", exampleUsages: ["[Verb-ない (dropped)] なくちゃならない。"] },
      { hiragana: "(ない) なくていい", romanization: "naku te ii", meaning: "don't have to", exampleUsages: ["[Verb-ない (dropped)] なくていいです。", "[Verb-ない (dropped)] なくてもいいです。"] },

      { hiragana: "ないといけない", romanization: "nai to ikenai", meaning: "must (spoken)", exampleUsages: ["[Verb-ない] といけない。"] },
      { hiragana: "(ない) なければいけない", romanization: "nakereba ikenai", meaning: "must (written)", exampleUsages: ["[Verb-ない (dropped)] なければいけない。"] },

      // -masu / stem
      { hiragana: "(ます) すぎる", preferredForm: "hiragana", kanjis: ["過ぎる"], romanization: "sugiru", meaning: "too much", exampleUsages: ["[Verb-ます (dropped()] すぎる。", "[i-Adj. (dropped)] すぎる。", "[na-Adj.] すぎる。"] },
      { hiragana: "(ます) たくない", romanization: "takunai", meaning: "I don't want to xxx (casual)", exampleUsages: ["[Verb--ます (dropped)] たくない。"] },
      { hiragana: "たがる", romanization: "tagaru", meaning: "(appearring wanted to)", exampleUsages: ["[Verb-stem] たがる"] },
      { hiragana: "[Verb-stem] ながら", rareKanjis: ["乍ら"], romanization: "nagara", meaning: "while doing xxx", exampleUsages: ["[Verb-stem / i-Adj. / na-Adj.] ながら", "["] },
      { hiragana: "なさい", preferredForm: "hiragana", kanjis: ["為さい"], romanization: "nasai", meaning: "(imperative, polite)", exampleUsages: ["[Verb-stem] なさい"] },
      { kanjis: ["(ます) に行く"], hiragana: "(ます) にいく", romanization: "ni iku", meaning: "I am going to xxx (casual)", exampleUsages: ["[Verb-ます (dropped)] に行く。"] },
      { kanjis: ["(ます) に行きます"], hiragana: "(ます) にいきません", romanization: "ni ikimasen", meaning: "I am going to xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] に行きます。"] },
      { hiragana: "(ます) ましょう！", romanization: "mashou", meaning: "let's xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] ましょう！", "[Noun] しましょう！"] },
      { hiragana: "(ます) ませんか？", romanization: "masen ka", meaning: "will you?", exampleUsages: ["[Verb-ます (dropped)] ませんか？"] },
      { hiragana: "(ます) ましょうか？", romanization: "mashou ka", meaning: "shall I? (assuming yes)", exampleUsages: ["[Verb-ます (dropped)] ましょうか？"] },

      // -ou (casual)
      { hiragana: "よう", romanization: "you", meaning: "let's", exampleUsages: ["... [Verb-よう]。"] },

      // -ta
      { hiragana: "たら", romanization: "tara", meaning: "and after that", derivedMeanings: ["back when", "if so (uncertain / imaginary)"], exampleUsages: ["暇になったら (if/when free)"] },
      { hiragana: "たり", romanization: "tari", meaning: "and meanwhile", exampleUsages: ["[Verb-た] たり、[Verb-た] たりするのが好きなんです"] },
      { hiragana: "ためしがない", preferredForm: "hiragana", kanjis: ["例がない"], romanization: "tameshiganai", meaning: "never accomplished", exampleUsages: ["[Verb-ta] ためしがないですよ"] },
      { hiragana: "たことがある", romanization: "-ta koto ga aru", meaning: "has been done", exampleUsages: ["[Verb-ta] ことがある ..."] },

      // -te
      { hiragana: "[Verb-て]", romanization: "-te", meaning: "please (spoken, casual)", exampleUsages: ["[Verb-て]！"] },
      { hiragana: "[Adj-て]", romanization: "-te", meaning: "and (so)", exampleUsages: ["[Adj-て] [Adj]", "[Adj-て] [Clause] (and therefore)"] },
      { hiragana: "[Verb-て] ください", romanization: "-te kudasai", meaning: "please do xxx (polite)" },
      { hiragana: "てはいけない", romanization: "-te wa ikenai", meaning: "must not (written, casual)", exampleUsages: ["[Verb-て] はいけない。"] },
      { hiragana: "てはいけません", romanization: "-te wa ikemasen", meaning: "must not (written, polite)", exampleUsages: ["[Verb-て] はいけません。"] },
      { hiragana: "(て) ちゃだめ", romanization: "cha dame", meaning: "should not / must not xxx! (spoken, casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)だめ"] },
      { hiragana: "(て) ちゃいけない", romanization: "cha ikenai", meaning: "should not / must not xxx (spoken, casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけない"] },
      { hiragana: "(て) ちゃいけません", romanization: "cha ikemasen", meaning: "should not / must not xxx (spoken, polite)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけません"] },
      { hiragana: "てもらいたい", romanization: "-te moraitai", meaning: "want to" },
      { hiragana: "[Verb-て] くれる", romanization: "-te kureru", meaning: "give to me", exampleUsages: ["譲ってくれた"] },
      // TODO: https://colanekojp.com.tw/classroom_detail/210
      // TODO: https://jlptsensei.com/learn-japanese-grammar/%E3%81%A6%E3%82%82%E3%82%89%E3%81%86-te-morau-%E3%81%A6%E3%82%82%E3%82%89%E3%81%84%E3%81%9F%E3%81%84-te-moraitai-meaning/
      { hiragana: "[Verb-て] もらう", romanization: "-te morau", meaning: "xxx to me", exampleUsages: ["聞いてもう (kindly listen to me)"] },
      { hiragana: "[Verb-て] もらえる", romanization: "-te moraeru", meaning: "xxx for me", exampleUsages: ["すみません、もう少しゆっくり話してもらえますか？(Sorry, would you please speak a bit slower?)"] },

      { hiragana: "[Verb-て] いる", romanization: "-te iru", meaning: "(continuous tense)" },
      { hiragana: "[Verb-て] いたら", romanization: "-te itara", meaning: "and meanwhile", derivedMeanings: ["while it was happening", "if happening (uncertain / imaginary)"] },

      { hiragana: "[Verb-て] ある", romanization: "-te aru", meaning: "(perfect tense)" },
      { hiragana: "(て) ちゃった", romanization: "chatta", meaning: "completely done", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)だめ"] },

      { hiragana: "ておく", romanization: "-te oku", meaning: "(I am going to)" },

      { hiragana: "[Verb-て] も", romanization: "-te mo", meaning: "even if" },

      { hiragana: "[Verb-て] もいい", romanization: "-te mo ii", meaning: "is okay / acceptable", exampleUsages: ["[Verb-て] もいいです", "[Verb-て] もいいですか？"] },
      { hiragana: "[Verb-て] ほしい", preferredForm: "hiragana", kanjis: ["[Verb-て] 欲しい"], romanization: "-te hoshii", meaning: "wanting to" },

      { kanjis: ["[Verb-て] 意味ですか"], hiragana: "[Verb-て] いみですか", romanization: "-te imi desuka", meaning: "does it mean" },
      { kanjis: ["[Verb-て] 感じですか"], hiragana: "[Verb-て] かんじですか", romanization: "-te kanji desuka", meaning: "does it mean" },

      { hiragana: "てから", romanization: "-te kara", meaning: "(introducing precedent:) xxx and immediately after", exampleUsages: ["[Verb-て] から ..."] },
      { hiragana: "てくる", romanization: "-te kiru", meaning: "(continuous, towards a moment)" },

      // TODO: -te shimau

      // TODO: -たい (-tai): desire
      // TODO: たがる
      // TODO: imperative form
    );
  }
}
