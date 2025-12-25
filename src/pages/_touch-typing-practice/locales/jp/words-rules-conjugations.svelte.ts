import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendRulesConjugations(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableRulesConjugations) {
    words.splice(
      words.length,
      0, //
      // TODO: verb conjugations

      // i-Adjs.
      { hiragana: "い", romanization: "i", meaning: "(i-adj. in present tense)", exampleUsages: ["[i-Adj.]-い"] },
      { hiragana: "かった", romanization: "katta", meaning: "(i-adj. in past tense)", exampleUsages: ["[i-Adj.]-かった"] },
      { hiragana: "くない", romanization: "ku nai", meaning: "(i-adj. in present negative tense, casual)", exampleUsages: ["[i-Adj.]-くない"] },
      { hiragana: "くありません", romanization: "ku arimasen", meaning: "(i-adj. in present negative tense, polite)", exampleUsages: ["[i-Adj.]-くありません"] },
      { hiragana: "くなかった", romanization: "ku nakatta", meaning: "(i-adj. in past negative tense, casual)", exampleUsages: ["[i-Adj.]-くなかった"] },
      { hiragana: "くありませんでした", romanization: "ku arimasen deshita", meaning: "(i-adj. in past negative tense, polite)", exampleUsages: ["[i-Adj.]-くありませんでした"] },
      // TODO: -ku to change to adverb

      // na-Adjs.
      { hiragana: "な", romanization: "na", meaning: "(na-adj. in present tense, middle-of-sentence)", exampleUsages: ["[na-Adj.] な"] },
      { hiragana: "だ", romanization: "da", meaning: "(na-adj. in present tense, end-of-sentence, casual)", exampleUsages: ["[na-Adj.] だ。"] },
      { hiragana: "です", romanization: "desu", meaning: "(na-adj. in present tense, end-of-sentence, polite)", exampleUsages: ["[na-Adj.] です。"] },
      { hiragana: "だった", romanization: "datta", meaning: "(na-adj. in past tense, casual)", exampleUsages: ["[na-Adj.] だった"] },
      { hiragana: "でした", romanization: "deshita", meaning: "(na-adj. in past tense, polite)", exampleUsages: ["[na-Adj.] でした"] },
      { hiragana: "ない", romanization: "nai", meaning: "(na-adj. in present negative tense, casual)", exampleUsages: ["[na-Adj.] ない"] },
      { hiragana: "ではない", romanization: "dewa nai", meaning: "(na-adj. in present negative tense, polite)", exampleUsages: ["[na-Adj.] ではない"] },
      { hiragana: "じゃなかった", romanization: "ja nakatta", meaning: "(na-adj. in past negative tense, casual)", exampleUsages: ["[na-Adj.] じゃなかった"] },
      { hiragana: "ではありませんでした", romanization: "dewa arimasen deshita", meaning: "(na-adj. in past negative tense, polite)", exampleUsages: ["[na-Adj.] ではありませんでした"] },
      // TODO: -ni to change to adverb
    );
  }
}
