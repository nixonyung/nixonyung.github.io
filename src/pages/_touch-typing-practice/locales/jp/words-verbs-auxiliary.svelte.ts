import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendAuxiliaryVerbs(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableAuxiliaryVerbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "ないで。", romanization: "naide", meaning: "please don't xxx (casual)", exampleUsages: ["[Verb-ない] で。"] },
      { hiragana: "ないでください。", romanization: "naide kudasai", meaning: "please don't xxx (polite)", exampleUsages: ["[Verb-ない] でください。"] },
      { hiragana: "ないとだめです。", romanization: "naito damedesu", meaning: "have to (can't can't) xxx (casual, parental)", exampleUsages: ["[Verb-ない] とだめです。"] },
      { hiragana: "ないといけない。", romanization: "naito ikenai", meaning: "have to (can't can't) xxx (casual)", exampleUsages: ["[Verb-ない] といけない。"] },
      { hiragana: "ないといけません。", romanization: "naito ikemasen", meaning: "have to (can't can't) xxx (polite)", exampleUsages: ["[Verb-ない] といけません。"] },
      { hiragana: "(ない) なくていい", romanization: "nakute ii", meaning: "don't have to xxx", exampleUsages: ["[Verb-ない (dropped)] なくていいです。"] },
      { hiragana: "(ない) なくてもいい", romanization: "nakute moii", meaning: "doesn't matter if you xxx or not", exampleUsages: ["[Verb-ない (dropped)] なくてもいいです。"] },
      { hiragana: "(ない) なくちゃ", romanization: "nakucha", meaning: "must xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくちゃ。"] },
      { hiragana: "(ない) なくちゃだめ", romanization: "nakucha dame", meaning: "must xxx (parental)", exampleUsages: ["[Verb-ない (dropped)] なくちゃだめ。"] },
      { hiragana: "(ない) なくちゃいけない", romanization: "nakucha ikenai", meaning: "must xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくちゃいけない。"] },
      { hiragana: "(ない) なくちゃいけません", romanization: "nakucha ikemasen", meaning: "must xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくちゃいけません。"] },
      { hiragana: "(ない) なくちゃならない", romanization: "nakucha naranai", meaning: "have to xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくちゃならない。"] },
      { hiragana: "(ない) なくちゃなりません", romanization: "nakucha narimasen", meaning: "have to xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくちゃなりません。"] },
      { hiragana: "(ない) なくてはいけない", romanization: "nakutewa ikenai", meaning: "must xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくてはいけない。"] },
      { hiragana: "(ない) なくてはいけません", romanization: "nakutewa ikemasen", meaning: "must xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくてはいけません。"] },
      { hiragana: "(ない) なくてはならない", romanization: "nakutewa naranai", meaning: "have to xxx (casual)", exampleUsages: ["[Verb-ない (dropped)] なくてはならない。"] },
      { hiragana: "(ない) なくてはなりません", romanization: "nakutewa narimasen", meaning: "have to xxx (polite)", exampleUsages: ["[Verb-ない (dropped)] なくてはなりません。"] },

      { hiragana: "(ます) すぎる", preferredForm: "hiragana", kanjis: ["過ぎる"], romanization: "sugiru", meaning: "too much (present tense, casual)", exampleUsages: ["[Verb-ます (dropped] すぎる。", "[i-Adj. (dropped)] すぎる。", "[na-Adj.] すぎる。"] },
      { hiragana: "(ます) すぎます", preferredForm: "hiragana", kanjis: ["過ぎます"], romanization: "sugimasu", meaning: "too much (present tense, casual)", exampleUsages: ["[Verb-ます (dropped] すぎます。", "[i-Adj. (dropped)] すぎます。", "[na-Adj.] すぎます。"] },
      { hiragana: "(ます) すぎた", preferredForm: "hiragana", kanjis: ["過ぎた"], romanization: "sugita", meaning: "too much (past tense, casual)", exampleUsages: ["[Verb-ます (dropped] すぎた。", "[i-Adj. (dropped)] すぎた。", "[na-Adj.] すぎた。"] },
      { hiragana: "(ます) すぎました", preferredForm: "hiragana", kanjis: ["過ぎました"], romanization: "sugimashita", meaning: "too much (past tense, polite)", exampleUsages: ["[Verb-ます (dropped] すぎました。", "[i-Adj. (dropped)] すぎました。", "[na-Adj.] すぎました。"] },
      { hiragana: "(ます) たい", romanization: "tai", meaning: "I want to xxx (casual)", exampleUsages: ["[Verb--ます (dropped)] たいです。"] },
      { hiragana: "(ます) たくない", romanization: "takunai", meaning: "I don't want to xxx (casual)", exampleUsages: ["[Verb--ます (dropped)] たくない。"] },
      { hiragana: "(ます) たかった", romanization: "takatta", meaning: "I wanted to xxx (casual)", exampleUsages: ["[Verb--ます (dropped)] たかった。"] },
      { kanjis: ["(ます) に行く"], hiragana: "(ます) にいく", romanization: "ni iku", meaning: "I am going to xxx (casual)", exampleUsages: ["[Verb-ます (dropped)] に行く。"] },
      { kanjis: ["(ます) に行きます"], hiragana: "(ます) にいきません", romanization: "ni ikimasen", meaning: "I am going to xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] に行きます。"] },

      { hiragana: "てもいいです", romanization: "-temo ii desu", meaning: "you can xxx", exampleUsages: ["[Verb-て] もいいです", "[Verb-て] もいいですか？", "[Noun] てもいいです", "[i-Adj. (dropped)] もいいです", "[na-Adj.] てもいいです"] },
      { hiragana: "てください", romanization: "-te kudasai", meaning: "please do xxx", exampleUsages: ["[Verb-て] ください ..."] },
      { hiragana: "てはいけない", romanization: "-te wa ikenai", meaning: "must not (written, casual)", exampleUsages: ["[Verb-て] はいけない。"] },
      { hiragana: "ではいけません", romanization: "-te wa ikemasen", meaning: "must not (written, polite)", exampleUsages: ["[Verb-て] はいけません。"] },
      { hiragana: "(て) ちゃだめ", romanization: "cha dame", meaning: "should not / must not xxx! (spoken, casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)だめ"] },
      { hiragana: "(て) ちゃいけない", romanization: "cha ikenai", meaning: "should not / must not xxx (spoken, casual)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけない"] },
      { hiragana: "(て) ちゃいけません", romanization: "cha ikemasen", meaning: "should not / must not xxx (spoken, polite)", exampleUsages: ["[Verb]-te/ta (dropped) + ちゃ(じゃ)いけません"] },

      { kanjis: ["方がいい", "方が良い", "ほうが良い"], hiragana: "ほうがいい", romanization: "hougaii (spoken/written)", meaning: "should xxx", exampleUsages: ["[Verb] 方がいい ..."] },
      { kanjis: ["方が良い", "ほうが良い", "方がよい"], hiragana: "ほうがよい", romanization: "hougayoi (slightly more written)", meaning: "should xxx", exampleUsages: ["[Verb] 方が良い ..."] },
    );
  }
}
