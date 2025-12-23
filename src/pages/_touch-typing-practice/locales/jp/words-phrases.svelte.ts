import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: by intents
//
// greetings
//
// questions
// - what is x / is x y?
// - how many?
// - making requests
//
// making statements
// - descriptions, e.g. what I did/saw/felt / what I am doing/seeing/feeling
// - plans, e.g. what I want / what I will do
// - conditionals
// - answering questions

// ---

// TODO: desu ne: answer questions

export function appendPhrases(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enablePhrasesInterjections) {
    words.splice(
      words.length,
      0, //
      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "(agree)" },

      { hiragana: "いいえ", romanization: "iie", meaning: "no (formal) / don't mention it" },
      { hiragana: "いや", preferredForm: "hiragana", kanjis: ["否"], romanization: "iya", meaning: "no" },

      { hiragana: "まじ？", romanization: "maji", meaning: "seriously? (informal)" },
      { hiragana: "まだまだ", preferredForm: "hiragana", kanjis: ["未だ未だ"], romanization: "madamada", meaning: "not done yet" },
      { hiragana: "まだですか？", preferredForm: "hiragana", kanjis: ["未だですか？"], romanization: "madadesuka", meaning: "not done yet?" },

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

      { hiragana: "どれにする?", romanization: "dore ni suru", meaning: "Which one are you going for?" },
      { hiragana: "これにします。", romanization: "kore ni shimasu", meaning: "I am going for this." },

      { hiragana: "などなど", preferredForm: "hiragana", kanjis: ["等など"], romanization: "nadonado", meaning: "et cetera" },

      { hiragana: "だから", romanization: "dakara", meaning: "Told you already!" },
      { hiragana: "しかしなぜ？", romanization: "shikashi naze?", meaning: "But why?" },

      { hiragana: "もうありません", romanization: "mou arimasen", meaning: "aren't any left" },

      { kanjis: ["〇〇のが上手"], hiragana: "〇〇のが〇〇", romanization: "no ga jouzu", meaning: "xxx is xxx", exampleUsages: ["... [Verb] のが [Adj.] です。", "... [Verb] のが上手/下手 です。", "... [Verb] のが好き/嫌い です。", "... [Verb] のが速い/遅い です。", "... [Verb] のが難しい/易しい です。"] },

      { kanjis: ["最後まで"], hiragana: "さいごまで", romanization: "saigomade", meaning: "till the end", exampleUsages: ["最後まで [Verb]"] },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "It can't be helped" },
      { kanjis: ["失礼しました"], hiragana: "しつれいしました", romanization: "shitsureishimashita", meaning: "Excuse me." },

      { kanjis: ["日本へようこそ！"], hiragana: "にほんへようこそ！", romanization: "nihon e youkoso", meaning: "Welcome to Japan!" },
    );
  }

  /*
  TODO:
  [Noun] desu: is

  [Noun] dewa: is not xxx
    -> ja (spoken)
  [Verb] tewa: if not xxx
    -> cha (spoken)
  [Clause] dewa: in that case

  aru / iru: (exist)
  */
}

// TODO:
// In Japanese, "must" or "have to" is expressed using verb forms like V-なければならない (nakereba naranai) or V-なくてはいけない (nakute wa ikenai) for formal/written speech,
// while casual speech uses shortened versions like V-なくちゃ (nakucha) or V-なきゃ (nakya),
// all meaning something is necessary or required.
// These structures attach to the nai-form (negative) of a verb, essentially meaning "if [verb] doesn't happen, it's not good".
