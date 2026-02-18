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
  // TODO: Teineigo, Sonkeigo, and Kenjougo

  if (flashcardSettings.words.expressions.appellations.value) {
    words.push(
      // TODO: https://www.tofugu.com/japanese-grammar/honorific-prefix-o-go/
      // TODO: https://www.wikiwand.com/en/articles/Japanese_honorifics
      { hiragana: "〇〇さん", romanization: "san", meaning: "Mr/Mrs/Miss/Ms xxx" },
      { kanjis: ["〇〇様"], rareKanjis: ["〇〇方", "〇〇状"], hiragana: "〇〇さま", romanization: "sama", meaning: "Mr/Mrs/Miss/Ms xxx (very formal)", exampleUsages: ["(addressing higher status people / customers)"] },
      { kanjis: ["〇〇君"], hiragana: "〇〇くん", romanization: "kun", meaning: "(addressing younger males)" },
      { hiragana: "〇〇ちゃん", romanization: "chan", meaning: "(addressing girls / children / pets, cute)" },
      { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master / teacher (addressing them)" },

      { hiragana: "お〇〇", preferredForm: "hiragana", kanjis: ["御-"], romanization: "o", meaning: "(honorific for native Japanese words)", exampleUsages: ["お[Noun]", "(addressing family members polite)", "(talking about others' family members)"] },
      { hiragana: "ご〇〇", preferredForm: "hiragana", kanjis: ["御-"], romanization: "go", meaning: "(honorific for Chinese-derived words)", exampleUsages: ["ご[Noun]"] },

      { hiragana: "という", preferredForm: "hiragana", kanjis: ["と言う"], romanization: "to iu", meaning: "called", exampleUsages: ["[Name] という [Thing] (the [Thing] named [Name])", "... という思い"] },
      { hiragana: "っていう", romanization: "tte iu", meaning: "called (spoken)", exampleUsages: ["この [Name] っていうのは ..."] },
      // TODO: について
    );
  }

  if (flashcardSettings.words.expressions.greetingsAndClosings.value) {
    words.push(
      { hiragana: "おはよう", preferredForm: "hiragana", kanjis: ["お早う"], romanization: "ohayou", meaning: "good morning." },
      { hiragana: "おはようございます", preferredForm: "hiragana", kanjis: ["お早うございます"], romanization: "ohayougozaimasu", meaning: "good morning (polite)" },
      { hiragana: "こんにちは", preferredForm: "hiragana", kanjis: ["今日は"], romanization: "konnichiha", meaning: "good afternoon", exampleUsages: ["みなさん、こんにちは (Hello everyone!)"] },
      { hiragana: "こんばんは", preferredForm: "hiragana", kanjis: ["今晩は"], romanization: "konbanha", meaning: "good evening" },
      { hiragana: "おはこんばんちは", romanization: "ohakonbanchiwa", meaning: "hello (spoken, casual)" },
      { hiragana: "もしもし", romanization: "moshimoshi", meaning: "hello (on a phone)" },

      { hiragana: "ようこそ", romanization: "youkoso", meaning: "welcome" },
      { kanjis: ["お帰りなさい"], hiragana: "おかえりなさい", romanization: "okaerinasai", meaning: "welcome home" },
      { hiragana: "いらっしゃいませ", romanization: "irasshaimase", meaning: "welcome (to a shop / restaurant)" },

      { hiragana: "はじめまして", preferredForm: "hiragana", kanjis: ["初めまして", "始めまして"], romanization: "hajimemashite", meaning: "nice to meet you (for the first time)" },

      { hiragana: "じゃあね", romanization: "jaane", meaning: "bye (casual)" },
      { hiragana: "またね", preferredForm: "hiragana", kanjis: ["又ね"], romanization: "matane", meaning: "see you later (casual)" },
      { kanjis: ["また次回お会いしましょう"], hiragana: "またじかいおあいしましょう", romanization: "matajikai oaishimashou", meaning: "see you next time (polite)" },
      { hiragana: "さよなら", romanization: "sayonara", meaning: "farewell" },
      { hiragana: "おやすみ", preferredForm: "hiragana", kanjis: ["お休み"], romanization: "oyasumi", meaning: "good night (going to sleep)", exampleUsages: ["お休みなさい"] },
    );
  }

  if (flashcardSettings.words.expressions.thanksAndApologies.value) {
    words.push(
      //
      { hiragana: "ありがとう", preferredForm: "hiragana", kanjis: ["有難う", "有り難う"], romanization: "arigatou", meaning: "thank you" },
      { hiragana: "ありがとうございます", preferredForm: "hiragana", kanjis: ["有難うございます", "有り難うございます", "有難う御座います", "ありがとう御座います", "有り難う御座います"], romanization: "arigatougozaimasu", meaning: "thank you very much (formal)", exampleUsages: ["ありがとうございました"] },
      { hiragana: "おかげさま", preferredForm: "hiragana", kanjis: ["お陰様", "お蔭様", "おかげ様", "お陰さま"], romanization: "okagesama", meaning: "thanks to you" },
      { kanjis: ["お疲れ様です"], hiragana: "おつかれさまです", romanization: "otsukaresama desu", meaning: "good work! / you are working hard!", exampleUsages: ["お疲れ様でした"] },
      { kanjis: ["ご苦労様", "ご苦労さま", "御苦労様", "御苦労さま"], hiragana: "ごくろうさま", romanization: "gokurousama", meaning: "that's great work! (to lower-status)" },
      { kanjis: ["見てくれて、ありがとう"], hiragana: "みてくれて、ありがとう", romanization: "mite kurete, arigatou", meaning: "thanks for watching" },
      { hiragana: "ごちそうさまでした", preferredForm: "hiragana", kanjis: ["ご馳走様でした", "ご馳走さまでした", "御馳走様でした"], romanization: "gochisousamadeshita", meaning: "thank you for the meal" },

      { hiragana: "すみません", romanization: "sumimasen", meaning: "sorry", derivedMeanings: ["excuse me"], exampleUsages: ["あの、すみません。"] },
      { kanjis: ["申し訳ございません"], hiragana: "もうしわけございません", romanization: "moushiwakegozaimasen", meaning: "sorry (very polite)" },
      { kanjis: ["失礼します"], hiragana: "しつれいします", romanization: "shitsureishimasu", meaning: "excuse me / pardon me" },
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

      { hiragana: "ということだ", preferredForm: "hiragana", kanjis: ["と言うことだ"], romanization: "toiukotoda", meaning: "as rumoured" },
      { hiragana: "って", romanization: "tte", meaning: "as someone said / as I heard", derivedMeanings: ["you really mean it?"], exampleUsages: ["すごいって (I heard it is amazing)", "って言っていた (it is said that)"] },
      { hiragana: "よれば", romanization: "yoreba", meaning: "as heard from", exampleUsages: ["憲法によれば"] },
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

      { hiragana: "それでは", romanization: "soredewa", meaning: "well then (spoken, formal)" },
      { hiragana: "じゃあ", romanization: "zyaa", meaning: "well then (spoken, casual)" },
      { kanjis: ["と言うことは", "と言う事は"], hiragana: "ということは", romanization: "toiukotowa", meaning: "if that's true" },
    );
  }

  if (flashcardSettings.words.expressions.agreeing.value) {
    words.push(
      //
      { hiragana: "はい", romanization: "sou", meaning: "yes / I see", derivedMeanings: ["(I am listening)"] },
      { hiragana: "ええ", romanization: "ee", meaning: "yes (casual)" },
      { hiragana: "そう", rareKanjis: ["然う"], romanization: "sou", meaning: "(agree)", exampleUsages: ["はい、そうです。"] },
      { hiragana: "そうか", romanization: "souka", meaning: "I see" },
      { hiragana: "そうですね", romanization: "soudesune", meaning: "you're right (polite)", derivedMeanings: ["isn't it"] },
      { hiragana: "いいな", romanization: "iina", meaning: "that's nice (casual)" },
      { hiragana: "そういうことか", preferredForm: "hiragana", kanjis: ["そういう事か"], romanization: "souiukotoka", meaning: "I get it now (casual)" },
      { hiragana: "わかりました", romanization: "wakarimashita", meaning: "understood (polite)" },

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
      { kanjis: ["お願いします"], hiragana: "おねがいします", romanization: "onegaishimasu", meaning: "please! (very polite)" },

      { kanjis: ["是非"], hiragana: "ぜひ", romanization: "zehi", meaning: "please by all means (polite)", exampleUsages: ["ぜひ、(request) たら嬉しいです"] },

      { kanjis: ["急いで"], hiragana: "いそいで", romanization: "isoide", meaning: "hurry up!" },
      { hiragana: "まだですか？", preferredForm: "hiragana", kanjis: ["未だですか？"], romanization: "madadesuka", meaning: "not done yet?" },
    );
  }

  if (flashcardSettings.words.expressions.offerings.value) {
    words.push(
      //
      { hiragana: "さあ", romanization: "saa", meaning: "come on (casual)" },
      { hiragana: "どうぞ", romanization: "douzo", meaning: "please go ahead (polite)" },

      { hiragana: "どれにする？", romanization: "dore ni suru", meaning: "Which one are you going for?" },
      { hiragana: "何ができますか？", romanization: "naniga dekimasuka", meaning: "What can I do?" },

      { kanjis: ["と思う"], hiragana: "とおもう", romanization: "to omou", meaning: "I think (casual)", exampleUsages: ["[Clause] と思う (xxx, I think)", "[Clause] と思います (xxx, I am thinking about that right now)", "[Clause] お話したいと思います (I would like to talk about)", "[Clause] と思っています (I am going/planning to)"] },
      { kanjis: ["と思わない？"], hiragana: "とおもわない", romanization: "to omowanai", meaning: "don't you think? (casual)", exampleUsages: ["[Verb] と思わない？", "[Noun] だと思わない？", "[i-Adj.] と思わない？", "[na-Adj.] だと思わない？"] },
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
      { kanjis: ["何してるの？"], hiragana: "なにしてるの？", romanization: "nani shiteruno", meaning: "what are you doing?" },
      { kanjis: ["何それ？"], hiragana: "なにそれ", romanization: "nanisore", meaning: "what the?!" },
      { kanjis: ["何ですか？"], hiragana: "なんですか？", romanization: "nandesuka", meaning: "what is it? (polite)" },
      { kanjis: ["何なのか？"], hiragana: "なんなのか？", romanization: "nannanoka", meaning: "what is this about?" },
      { kanjis: ["何なのか？"], hiragana: "なになのか？", romanization: "naninanoka", meaning: "what is this about?" },
      { hiragana: "しかしなぜ？", romanization: "shikashi naze?", meaning: "But why?" },
    );
  }

  if (flashcardSettings.words.expressions.misc.value) {
    words.push(
      { kanjis: ["どういう意味ですか？"], hiragana: "どういういみですか", romanization: "douiu imi desuka", meaning: "what does it mean?" },
      { kanjis: ["これはなんて言いますか？"], hiragana: "なんていいますか", romanization: "nande iimasuka", meaning: "how do you say this?", exampleUsages: ["[Noun] はどうですか？"] },

      { hiragana: "どう", romanization: "dou", meaning: "how is xxx? (casual)", exampleUsages: ["[Noun] はどうですか？"] },
      { hiragana: "いかが", preferredForm: "hiragana", kanjis: ["如何"], romanization: "ikaga", meaning: "how is xxx? (formal)" },

      { hiragana: "こんな-", romanization: "konna-", meaning: "like this" },

      { hiragana: "〇〇のが〇〇", romanization: "no ga", meaning: "xxx is doing it xxx-ly", exampleUsages: ["... [Verb] のが [Adj.] です。", "... [Verb] のが上手/下手 です。", "... [Verb] のが好き/嫌い です。", "... [Verb] のが速い/遅い です。", "... [Verb] のが難しい/易しい です。"] },

      { hiragana: "おめでとう", preferredForm: "hiragana", kanjis: ["おめでとう"], rareKanjis: ["御目出度う"], romanization: "omedetou", meaning: "congratulations", exampleUsages: ["おめでとう御座います"] },

      { kanjis: ["何とおっしゃいましたか？"], romanization: "nani to osshaimashita ka", meaning: "What did you say? (very polite)" },

      { kanjis: ["仕方がない"], hiragana: "しかたがない", romanization: "shikataganai", meaning: "It can't be helped" },

      { kanjis: ["日本へようこそ！"], hiragana: "にほんへようこそ！", romanization: "nihon e youkoso", meaning: "Welcome to Japan!" },

      // quoting
      { kanjis: ["と書いてある"], hiragana: "とかいてある", romanization: "tokaitearu", meaning: "written like that (in dictionary/...)" },
    );
  }
}
