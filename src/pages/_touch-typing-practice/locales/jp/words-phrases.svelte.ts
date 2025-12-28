import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendPhrases(words: JapaneseWord[]) {
  // TODO: "nai desu ka" vs "arimasen ka": "nai desu ka" is modern / spoken
  // TODO: ずっと zutto
  // TODO: wake dewanai
  // TODO: beki dewanai
  // TODO: mono dewanai
  // TODO: noni
  // TODO: Shika, Bakari, Nomi
  // TODO: [Clause] ということ です (it is said?)
  // TODO: proverbs

  if (jp.flashcardSettings.enablePhrasesInterjections) {
    words.splice(
      words.length,
      0, //
      // TODO: politeness / softening
      // TODO: da ne, desu ne

      { hiragana: "お", preferredForm: "hiragana", kanjis: ["御"], romanization: "o", meaning: "(honorific, with native Japanese words)", exampleUsages: ["お[Noun]"] },
      { hiragana: "ご", preferredForm: "hiragana", kanjis: ["御"], romanization: "go", meaning: "(honorific, with Chinese-derived words)", exampleUsages: ["ご[Noun]"] },

      { hiragana: "ね", romanization: "ne", meaning: "isn't it? (expressing feelings, casual)", exampleUsages: ["... ですね。", "... だね。"] },

      { kanjis: ["多分"], hiragana: "たぶん", romanization: "tabun", meaning: "probably" },
      { kanjis: ["少し"], rareKanjis: ["寡し", "些し"], hiragana: "すこし", romanization: "sukoshi", meaning: "a little bit" },
      { hiragana: "ちょっと", rareKanjis: ["一寸"], katakana: "チョット", romanization: "chotto", meaning: "a little bit" },
      { hiragana: "もっと", romanization: "motto", meaning: "even more" },

      { hiragana: "と思う。", romanization: "to omou", meaning: "I think (casual)", exampleUsages: ["[Clause] と思う。", "[Clause] と思います。", "[Clause] と思っている。"] },

      { kanjis: ["全然"], hiragana: "ぜんぜん", romanization: "zenzen", meaning: "not really" },

      { hiragana: "ほしい", preferredForm: "hiragana", kanjis: ["欲しい"], romanization: "hoshii", meaning: "I want xxx (casual)", exampleUsages: ["[Noun] がほしいです。"] },
      { hiragana: "ください", preferredForm: "hiragana", kanjis: ["下さい"], romanization: "kudasai", meaning: "please give me (polite)", exampleUsages: ["お [Noun] をください。", "[Noun] を {(counter)} ください。"] },

      // TODO: emphasizing
      { kanjis: ["と言う"], hiragana: "という", romanization: "to iu", meaning: "xxx is called/said", exampleUsages: ["(name) という [Pronoun] ..."] },
      { kanjis: ["本当に"], hiragana: "ほんとうに", romanization: "hontouni", meaning: "for real" },
      // TODO: について

      // TODO: leading questions
      { hiragana: "だろう", romanization: "darou", meaning: "right? (stating facts, casual)", exampleUsages: ["[Clause] だろう？"] },
      { hiragana: "でしょう", romanization: "deshou", meaning: "right? (stating facts, polite)", exampleUsages: ["[Clause] でしょう？"] },

      { hiragana: "〇〇んです", romanization: "-n desu", meaning: "it is because (spoken, polite)", exampleUsages: ["[Clause] んです。"] },
      { hiragana: "〇〇のです", romanization: "-no desu", meaning: "it is because (written, polite)", exampleUsages: ["[Clause] のです。"] },

      { hiragana: "と思わない？", romanization: "to omowanai", meaning: "don't you think? (casual)", exampleUsages: ["[Verb] と思わない？", "[Noun] だと思わない？", "[i-Adj.] と思わない？", "[na-Adj.] だと思わない？"] },

      { hiragana: "ませんか？", romanization: "masen ka", meaning: "will you?", exampleUsages: ["[Verb-ます (dropped)] ませんか？"] },
      { hiragana: "ましょうか？", romanization: "mashou ka", meaning: "shall I? (assuming yes)", exampleUsages: ["[Verb-ます (dropped)] ましょうか？"] },

      // TODO: exclamational
      { hiragana: "よ", romanization: "yo", meaning: "(exclamation, spoken)", exampleUsages: ["[Clause] よ。", "[Clause] よね。"] },
      { hiragana: "なあ", romanization: "naa", meaning: '("I think") - wow / I wonder (casual)', exampleUsages: ["[Clause] なあ。"] },

      // miscellaneous
      // TODO: agreement / yes or no
      // TODO: wow

      { hiragana: "はい", romanization: "sou", meaning: "yes / I see" },
      { hiragana: "ええ", romanization: "ee", meaning: "yes (casual)" },
      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "(agree)" },
      { hiragana: "そうですね", romanization: "soudesune", meaning: "that's correct (polite)" },
      { hiragana: "わかりました", romanization: "wakarimashita", meaning: "understood" },
      { hiragana: "それでは", romanization: "soredewa", meaning: "well then (spoken, formal)" },
      { hiragana: "じゃあ", romanization: "zyaa", meaning: "well then (spoken, casual)" },

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

      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "way of doing", exampleUsages: ["[Noun] の [Verb-ます (dropped)] 方"] },

      { hiragana: "にする", romanization: "ni suru", meaning: "I am going for xxx (casual)", exampleUsages: ["[Noun] にする。"] },
      { hiragana: "にします", romanization: "ni shimasu", meaning: "I am going for xxx (polite)", exampleUsages: ["[Noun] にします。"] },
    );
  }

  // TODO: greetings
  if (jp.flashcardSettings.enablePhrasesGreetings) {
    words.splice(
      words.length,
      0, //
      { hiragana: "みなさん、こんにちは", romanization: "minasan konnichiwa", meaning: "Hello everyone (spoken, casual)" },
      { hiragana: "すみません", romanization: "sumimasen", meaning: "sorry / excuse me (polite)" },
    );
  }

  if (jp.flashcardSettings.enablePhrasesMiscellaneous) {
    words.splice(
      words.length,
      0, //
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

      { hiragana: "〇〇のが〇〇", romanization: "no ga", meaning: "xxx is xxx", exampleUsages: ["... [Verb] のが [Adj.] です。", "... [Verb] のが上手/下手 です。", "... [Verb] のが好き/嫌い です。", "... [Verb] のが速い/遅い です。", "... [Verb] のが難しい/易しい です。"] },

      { kanjis: ["何とおっしゃいましたか？"], romanization: "nani to osshaimashita ka", meaning: "What did you say? (very polite)" },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "It can't be helped" },
      { kanjis: ["失礼します"], hiragana: "しつれいします", romanization: "shitsureishimasu", meaning: "excuse me / pardon me", exampleUsages: ["失礼しました"] },

      { kanjis: ["日本へようこそ！"], hiragana: "にほんへようこそ！", romanization: "nihon e youkoso", meaning: "Welcome to Japan!" },

      { kanjis: ["見てくれて、ありがとう"], hiragana: "みてくれて、ありがとう", romanization: "mite kurete, arigatou", meaning: "Thanks for watching" },
      { hiragana: "またね", preferredForm: "hiragana", kanjis: ["又ね"], romanization: "matane", meaning: "see you later" },
    );
  }
}
