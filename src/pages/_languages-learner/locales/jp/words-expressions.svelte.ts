import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

// TODO: separate into files
export function appendExpressions(words: JapaneseWord[]) {
  // TODO: "nai desu ka" vs "arimasen ka": "nai desu ka" is modern / spoken
  // TODO: ずっと zutto
  // TODO: wake dewanai
  // TODO: beki dewanai
  // TODO: mono dewanai
  // TODO: noni
  // TODO: Shika, Bakari, Nomi
  // TODO: proverbs

  if (flashcardSettings.words.expressions.appellations.value) {
    words.push(
      { hiragana: "〇〇さん", romanization: "san", meaning: "Mr/Mrs/Miss/Ms xxx" },
      { kanjis: ["〇〇様"], rareKanjis: ["〇〇方", "〇〇状"], hiragana: "〇〇さま", romanization: "sama", meaning: "Mr/Mrs/Miss/Ms xxx (very formal)", exampleUsages: ["(addressing higher status people / customers)"] },
      { kanjis: ["〇〇君"], hiragana: "〇〇くん", romanization: "kun", meaning: "(addressing younger males)" },
      { hiragana: "〇〇ちゃん", romanization: "chan", meaning: "(addressing girls / children / pets, cute)" },

      { hiragana: "お〇〇", preferredForm: "hiragana", kanjis: ["御-"], romanization: "o", meaning: "(honorific for native Japanese words)", exampleUsages: ["お[Noun]", "(addressing family members polite)", "(talking about others' family members)"] },
      { hiragana: "ご〇〇", preferredForm: "hiragana", kanjis: ["御-"], romanization: "go", meaning: "(honorific for Chinese-derived words)", exampleUsages: ["ご[Noun]"] },

      { hiragana: "という", romanization: "toiu", meaning: "called", exampleUsages: ["[Name] と言う [Thing] (the [Thing] named [Name])"] },
      // TODO: について
    );
  }

  if (flashcardSettings.words.expressions.greetingsAndClosings.value) {
    words.push(
      // TODO: good morning, good afternoon, good evening
      { hiragana: "おはこんばんちは", romanization: "ohakonbanchiwa", meaning: "(good morning/afternoon/evening)", derivedMeanings: ["good day (spoken, casual)"] },
      { hiragana: "みなさん、こんにちは", romanization: "minasan konnichiwa", meaning: "Hello everyone (spoken, casual)" },
      { hiragana: "すみません", romanization: "sumimasen", meaning: "Sorry / Excuse me. (polite)" },
      { kanjis: ["失礼します"], hiragana: "しつれいします", romanization: "shitsureishimasu", meaning: "Excuse me / Pardon me.", exampleUsages: ["失礼しました"] },
      { kanjis: ["お帰りなさい"], hiragana: "おかえりなさい", romanization: "okaerinasai", meaning: "Welcome home." },

      { hiragana: "ありがとう", preferredForm: "hiragana", kanjis: ["有難う", "有り難う"], romanization: "arigatou", meaning: "Thank you." },
      { hiragana: "ありがとうございます", preferredForm: "hiragana", kanjis: ["有難うございます", "有り難うございます", "有難う御座います", "ありがとう御座います", "有り難う御座います"], romanization: "arigatougozaimasu", meaning: "Thank you very much. (formal)", exampleUsages: ["ありがとうございました"] },
      { kanjis: ["お疲れ様です"], hiragana: "おつかれさまです", romanization: "otsukaresama desu", meaning: "Good work! / You are working hard!", exampleUsages: ["お疲れ様でした"] },
      { kanjis: ["ご苦労様", "ご苦労さま", "御苦労様", "御苦労さま"], hiragana: "ごくろうさま", romanization: "gokurousama", meaning: "That's great work! (to lower-status)" },
      { hiragana: "おやすみなさい", preferredForm: "hiragana", kanjis: ["お休みなさい"], romanization: "oyasumi", meaning: "Good night." },
      { hiragana: "またね", preferredForm: "hiragana", kanjis: ["又ね"], romanization: "matane", meaning: "See you later!" },
      { kanjis: ["見てくれて、ありがとう"], hiragana: "みてくれて、ありがとう", romanization: "mite kurete, arigatou", meaning: "Thanks for watching" },
      { hiragana: "ごちそうさまでした", preferredForm: "hiragana", kanjis: ["ご馳走様でした", "ご馳走さまでした", "御馳走様でした"], romanization: "gochisousamadeshita", meaning: "Thank you for the meal." },
    );
  }

  if (flashcardSettings.words.expressions.softening.value) {
    words.push(
      { hiragana: "よ", romanization: "yo", meaning: "don't you know? (spoken, casual)", exampleUsages: ["[Clause] よ。", "[Clause] だよ。", "[Clause] よね。"] },
      { hiragana: "ね", romanization: "ne", meaning: "isn't it? (expressing feelings, spoken, casual)", exampleUsages: ["... ですね。", "[Adj.] ね。"] },
      // TODO: yone

      { hiragana: "なあ", romanization: "naa", meaning: '("I think") - wow / I wonder (casual)', exampleUsages: ["[Clause] なあ。"] },

      { hiragana: "ちょっと", rareKanjis: ["一寸"], katakana: "チョット", romanization: "chotto", meaning: "a bit (casual, intensity)", exampleUsages: ["ちょっと難し", "あとちょっと (just a bit more)"] },
      { kanjis: ["多分"], hiragana: "たぶん", romanization: "tabun", meaning: "probably" },

      { hiragana: "と思う。", romanization: "to omou", meaning: "I think (casual)", exampleUsages: ["[Clause] と思う。", "[Clause] と思います。", "[Clause] と思っている。"] },
      { hiragana: "と思わない？", romanization: "to omowanai", meaning: "don't you think? (casual)", exampleUsages: ["[Verb] と思わない？", "[Noun] だと思わない？", "[i-Adj.] と思わない？", "[na-Adj.] だと思わない？"] },
      { hiragana: "ということだ", preferredForm: "hiragana", kanjis: ["と言うことだ"], romanization: "toiukotoda", meaning: "as rumoured" },
      { hiragana: "って", romanization: "tte", meaning: "as someone said / as I heard", derivedMeanings: ["you really mean it?"], exampleUsages: ["すごいって (I heard it is amazing)", "って言っていた (it is said that)"] },
    );
  }

  if (flashcardSettings.words.expressions.emphasis.value) {
    words.push(
      //
      { hiragana: "だろう", romanization: "darou", meaning: "right? (stating facts, casual)", exampleUsages: ["[Clause] だろう？"] },
      { hiragana: "でしょう", romanization: "deshou", meaning: "right? (stating facts, polite)", exampleUsages: ["[Clause] でしょう？"] },
      // TODO: leading questions

      { hiragana: "だから", romanization: "dakara", meaning: "Told you already!" },

      { hiragana: "どうも", romanization: "doumo", meaning: "very", derivedMeanings: ["thanks"], exampleUsages: ["どうもありがとうございます (thank you very much)"] },
      { hiragana: "もちろん", preferredForm: "hiragana", kanjis: ["勿論"], romanization: "mochiron", meaning: "of course", exampleUsages: ["もちろん！", "A はもちろん B も ... (B ..., not to mention A)"] },
      { kanjis: ["本当に"], hiragana: "ほんとうに", romanization: "hontouni", meaning: "really" },

      { hiragana: "〇〇んです", romanization: "-n desu", meaning: "it is because (spoken, polite)", exampleUsages: ["[Clause] んです。"] },
      { hiragana: "〇〇のです", romanization: "-no desu", meaning: "it is because (written, polite)", exampleUsages: ["[Clause] のです。"] },

      { kanjis: ["と言うことは", "と言う事は"], hiragana: "ということは", romanization: "toiukotowa", meaning: "if that's true" },
      { hiragana: "それでは", romanization: "soredewa", meaning: "well then (spoken, formal)" },
      { hiragana: "じゃあ", romanization: "zyaa", meaning: "well then (spoken, casual)" },
    );
  }

  if (flashcardSettings.words.expressions.agreeing.value) {
    words.push(
      //
      { hiragana: "はい", romanization: "sou", meaning: "yes / I see", derivedMeanings: ["(I am listening)"] },
      { hiragana: "ええ", romanization: "ee", meaning: "yes (casual)" },
      { hiragana: "そう", rareKanjis: ["然う"], romanization: "sou", meaning: "(agree)" },
      { hiragana: "そうか", romanization: "souka", meaning: "I see" },
      { hiragana: "そうですね", romanization: "soudesune", meaning: "you're right (polite)", derivedMeanings: ["isn't it"] },
      { hiragana: "いいな", romanization: "iina", meaning: "that's nice" },
      { hiragana: "わかりました", romanization: "wakarimashita", meaning: "understood" },

      { hiragana: "いいえ", romanization: "iie", meaning: "no (formal) / don't mention it" },
      { hiragana: "いや", preferredForm: "hiragana", kanjis: ["否"], romanization: "iya", meaning: "no" },
      { kanjis: ["全然"], hiragana: "ぜんぜん", romanization: "zenzen", meaning: "not really" },

      { hiragana: "えっと", romanization: "etto", meaning: "let me see ..." },
      { hiragana: "その", romanization: "sono", meaning: "um ..." },
    );
  }

  if (flashcardSettings.words.expressions.requests.value) {
    words.push(
      //
      { hiragana: "ください", preferredForm: "hiragana", kanjis: ["下さい"], romanization: "kudasai", meaning: "please give me (polite)", exampleUsages: ["お [Noun] をください。", "[Noun] を {(counter)} ください。"] },
      { hiragana: "どうぞ", romanization: "douso", meaning: "please / kindly" },
      { hiragana: "ほしい", preferredForm: "hiragana", kanjis: ["欲しい"], romanization: "hoshii", meaning: "I want xxx (casual)", exampleUsages: ["[Noun] がほしいです。"] },
      { hiragana: "ませんか？", romanization: "masen ka", meaning: "will you?", exampleUsages: ["[Verb-ます (dropped)] ませんか？"] },
      { hiragana: "ましょうか？", romanization: "mashou ka", meaning: "shall I? (assuming yes)", exampleUsages: ["[Verb-ます (dropped)] ましょうか？"] },
      { kanjis: ["急いで"], hiragana: "いそいで", romanization: "isoide", meaning: "hurry up!" },
      { hiragana: "まだですか？", preferredForm: "hiragana", kanjis: ["未だですか？"], romanization: "madadesuka", meaning: "not done yet?" },
    );
  }

  if (flashcardSettings.words.expressions.surprised.value) {
    words.push(
      //
      { hiragana: "うわ", romanization: "uwa", meaning: "wow" },
      { hiragana: "すげー", romanization: "sugee", meaning: "incredible" },
      { hiragana: "ほら！", romanization: "hora", meaning: "look!" },
      { hiragana: "みでみで！", romanization: "midemide", meaning: "look!" },

      { hiragana: "あれ？", romanization: "are", meaning: "eh?" },
      { hiragana: "え？", romanization: "e", meaning: "oh? / eh?" },
      { hiragana: "まじ？", romanization: "maji", meaning: "seriously? (informal)" },
      { kanjis: ["何？"], hiragana: "なに？", romanization: "nani", meaning: "what?" },
      { kanjis: ["何それ？"], hiragana: "なにそれ", romanization: "nanisore", meaning: "what the?!" },
      { kanjis: ["何ですか？"], hiragana: "なんですか？", romanization: "nandesuka", meaning: "what is it? (polite)" },
      { kanjis: ["何なのか？"], hiragana: "なんなのか？", romanization: "nannanoka", meaning: "what is this about?" },
      { kanjis: ["何なのか？"], hiragana: "なになのか？", romanization: "naninanoka", meaning: "what is this about?" },
      { hiragana: "しかしなぜ？", romanization: "shikashi naze?", meaning: "But why?" },
    );
  }

  if (flashcardSettings.words.expressions.misc.value) {
    words.push(
      { hiragana: "どう", romanization: "dou", meaning: "how is xxx? (casual)", exampleUsages: ["[Noun] はどうですか？"] },
      { hiragana: "いかが", preferredForm: "hiragana", kanjis: ["如何"], romanization: "ikaga", meaning: "how is xxx? (formal)" },

      { hiragana: "こんな-", romanization: "konna-", meaning: "like this" },

      { hiragana: "さあ", romanization: "saa", meaning: "come on" },

      { hiragana: "もうありません", romanization: "mou arimasen", meaning: "aren't any left" },
      { hiragana: "あと", romanization: "ato", meaning: "still have", exampleUsages: ["あと5秒"] },

      { hiragana: "どれにする?", romanization: "dore ni suru", meaning: "Which one are you going for?" },

      { hiragana: "〇〇のが〇〇", romanization: "no ga", meaning: "xxx is doing it xxx-ly", exampleUsages: ["... [Verb] のが [Adj.] です。", "... [Verb] のが上手/下手 です。", "... [Verb] のが好き/嫌い です。", "... [Verb] のが速い/遅い です。", "... [Verb] のが難しい/易しい です。"] },

      { hiragana: "おめでとう", preferredForm: "hiragana", kanjis: ["おめでとう"], rareKanjis: ["御目出度う"], romanization: "omedetou", meaning: "congratulations", exampleUsages: ["おめでとう御座います"] },

      { kanjis: ["何とおっしゃいましたか？"], romanization: "nani to osshaimashita ka", meaning: "What did you say? (very polite)" },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "It can't be helped" },

      { kanjis: ["日本へようこそ！"], hiragana: "にほんへようこそ！", romanization: "nihon e youkoso", meaning: "Welcome to Japan!" },
    );
  }
}
