import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

// TODO: rename to verb phrases
export function appendAuxiliaryVerbs(words: JapaneseWord[]) {
  // TODO: https://www.mlcjapanese.co.jp/n3_01_01.html

  if (flashcardSettings.words.verbs.auxiliary.value) {
    words.push(
      // (dictionary)
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
      { hiragana: "(ます) すぎる", preferredForm: "hiragana", kanjis: ["過ぎる"], romanization: "sugiru", meaning: "too much (present tense, casual)", exampleUsages: ["[Verb-ます (dropped()] すぎる。", "[i-Adj. (dropped)] すぎる。", "[na-Adj.] すぎる。"] },
      { hiragana: "(ます) すぎます", preferredForm: "hiragana", kanjis: ["過ぎます"], romanization: "sugimasu", meaning: "too much (present tense, casual)", exampleUsages: ["[Verb-ます (dropped)] すぎます。", "[i-Adj. (dropped)] すぎます。", "[na-Adj.] すぎます。"] },
      { hiragana: "(ます) すぎた", preferredForm: "hiragana", kanjis: ["過ぎた"], romanization: "sugita", meaning: "too much (past tense, casual)", exampleUsages: ["[Verb-ます (dropped)] すぎた。", "[i-Adj. (dropped)] すぎた。", "[na-Adj.] すぎた。"] },
      { hiragana: "(ます) すぎました", preferredForm: "hiragana", kanjis: ["過ぎました"], romanization: "sugimashita", meaning: "too much (past tense, polite)", exampleUsages: ["[Verb-ます (dropped)] すぎました。", "[i-Adj. (dropped)] すぎました。", "[na-Adj.] すぎました。"] },
      { hiragana: "(ます) たくない", romanization: "takunai", meaning: "I don't want to xxx (casual)", exampleUsages: ["[Verb--ます (dropped)] たくない。"] },
      { hiragana: "たがる", romanization: "tagaru", meaning: "(appearring wanted to)", exampleUsages: ["[Verb-stem] たがる"] },
      { hiragana: "ながら", rareKanjis: ["乍ら"], romanization: "nagara", meaning: "while", exampleUsages: ["[Verb-stem] ながら"] },
      { hiragana: "なさい", preferredForm: "hiragana", kanjis: ["為さい"], romanization: "nasai", meaning: "(imperative, polite)", exampleUsages: ["[Verb-stem] なさい"] },
      { kanjis: ["(ます) に行く"], hiragana: "(ます) にいく", romanization: "ni iku", meaning: "I am going to xxx (casual)", exampleUsages: ["[Verb-ます (dropped)] に行く。"] },
      { kanjis: ["(ます) に行きます"], hiragana: "(ます) にいきません", romanization: "ni ikimasen", meaning: "I am going to xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] に行きます。"] },
      { hiragana: "(ます) ましょう！", romanization: "mashou", meaning: "let's xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] ましょう！", "[Noun] しましょう！"] },

      // -ou (casual)
      { hiragana: "よう", romanization: "you", meaning: "let's", exampleUsages: ["... [Verb-よう]。"] },

      // -ta
      { hiragana: "ためしがない", preferredForm: "hiragana", kanjis: ["例がない"], romanization: "tameshiganai", meaning: "never accomplished", exampleUsages: ["[Verb-ta] ためしがないですよ"] },
      { hiragana: "たことがある", romanization: "-ta koto ga aru", meaning: "has been done", exampleUsages: ["[Verb-ta] ことがある ..."] },

      // -te (-te [Verb])
      { hiragana: "-て", romanization: "-te", meaning: "please (spoken, casual)", exampleUsages: ["[Verb-て]！"] },
      { hiragana: "ている", romanization: "-te iru", meaning: "is doing xxx / xxx is still ongoing (active voice, casual)", exampleUsages: ["[Verb-て] いる ..."] },
      { hiragana: "ています", romanization: "-te imasu", meaning: "is doing xxx / xxx is still ongoing (active voice, polite)", exampleUsages: ["[Verb-て] います ..."] },
      { hiragana: "ていない", romanization: "-te inai", meaning: "is not doing / xxx is still ongoing (active voice, casual)", exampleUsages: ["[Verb-て] いない ..."] },
      { hiragana: "ていません", romanization: "-te imasen", meaning: "is not doing / xxx is still ongoing (active voice, polite)", exampleUsages: ["[Verb-て] いません ..."] },
      { hiragana: "てある", romanization: "-te aru", meaning: "xxx has been done (passive voice, casual)", exampleUsages: ["[Verb-て] ある ..."] },
      { hiragana: "てあります", romanization: "-te arimasu", meaning: "xxx has been done (passive voice, polite)", exampleUsages: ["[Verb-て] あります ..."] },
      { hiragana: "てない", romanization: "-te nai", meaning: "xxx has not been done (passive voice, casual)", exampleUsages: ["[Verb-て] ない ..."] },
      { hiragana: "てありません", romanization: "-te arimasen", meaning: "xxx has not been done (passive voice, polite)", exampleUsages: ["[Verb-て] ありません ..."] },
      { hiragana: "ても", romanization: "-temo", meaning: "even if", exampleUsages: ["[Verb]-ても [Clause]"] },
      { hiragana: "てもいいです", romanization: "-temo ii desu", meaning: "you can xxx", exampleUsages: ["[Verb-て] もいいです", "[Verb-て] もいいですか？", "[Noun] てもいいです", "[i-Adj. (dropped)] もいいです", "[na-Adj.] てもいいです"] },
      { hiragana: "てください", romanization: "-te kudasai", meaning: "please do xxx", exampleUsages: ["[Verb-て] ください ..."] },
      { hiragana: "てはいけない", romanization: "-te wa ikenai", meaning: "must not (written, casual)", exampleUsages: ["[Verb-て] はいけない。"] },
      { hiragana: "ではいけません", romanization: "-te wa ikemasen", meaning: "must not (written, polite)", exampleUsages: ["[Verb-て] はいけません。"] },
      { hiragana: "(て) ちゃだめ", romanization: "cha dame", meaning: "should not / must not xxx! (spoken, casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)だめ"] },
      { hiragana: "(て) ちゃいけない", romanization: "cha ikenai", meaning: "should not / must not xxx (spoken, casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけない"] },
      { hiragana: "(て) ちゃいけません", romanization: "cha ikemasen", meaning: "should not / must not xxx (spoken, polite)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけません"] },
      { hiragana: "(て) ちゃった", romanization: "chatta", meaning: "completely done", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)だめ"] },
      { hiragana: "てから", romanization: "-te kara", meaning: "(introducing precedent:) xxx and immediately after", exampleUsages: ["[Verb-て] から ..."] },
      { hiragana: "てくる", romanization: "-te kiru", meaning: "(continuous, towards a moment)" },
      { hiragana: "ておく", romanization: "-te oku", meaning: "(I am going to)" },
      { hiragana: "てもいい", preferredForm: "hiragana", kanjis: ["ても良い"], romanization: "-te moii", meaning: "you can / can I?" },
      { hiragana: "てくれる", romanization: "-te kureru", meaning: "give to me", exampleUsages: ["譲ってくれた"] },
      // TODO: -te shimau

      // TODO: -たい (-tai): desire
      // TODO: たがる
      // TODO: imperative form
    );
  }
}
