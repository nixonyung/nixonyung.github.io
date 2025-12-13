import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendPronouns(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enablePronounsPeople) {
    words.splice(
      words.length,
      0, //
      // I:
      { kanjis: ["私"], hiragana: "わたし", romanization: "watashi", meaning: "I" },
      { kanjis: ["私"], hiragana: "わたくし", romanization: "watakushi", meaning: "I (very formal)" },
      { kanjis: ["私"], hiragana: "あたし", romanization: "atashi", meaning: "I (for female)" },
      { kanjis: ["私"], hiragana: "あたくし", romanization: "atakushi", meaning: "I (for female, polite)" },
      { kanjis: ["僕"], hiragana: "ぼく", katakana: "ボク", romanization: "boku", meaning: "I (for young male, playful)" },
      { kanjis: ["俺"], hiragana: "おれ", katakana: "オレ", romanization: "ore", meaning: "I (for male, masculine)" },
      { kanjis: ["俺様", "オレ様"], rareKanjis: ["己様"], hiragana: "おれさま", romanization: "oresama", meaning: "the one and only me (for male, arrogant)" },
      { kanjis: ["我", "吾"], hiragana: "われ", romanization: "ware", meaning: "I (very formal, old-fashioned)" },
      { hiragana: "わし", preferredForm: "hiragana", kanjis: ["儂"], rareKanjis: ["私"], katakana: "ワシ", romanization: "washi", meaning: "I (for old male, literary)" },
      { kanjis: ["拙者"], hiragana: "せっしゃ", romanization: "sessha", meaning: "I (for male (samurais), humble)" },

      // you:
      // TODO: https://nihonshock.com/2012/07/saying-you-in-japanese/
      { hiragana: "さん", romanization: "san", meaning: "Mr/Mrs/Miss/Ms xxx" },
      { kanjis: ["xx 様"], rareKanjis: ["方", "状"], hiragana: "さま", romanization: "sama", meaning: "Mr/Mrs/Miss/Ms xxx (very formal, to higher status / customer" },
      { kanjis: ["xx 君"], hiragana: "くん", romanization: "kun", meaning: "xxx (to younger males)" },
      { hiragana: "ちゃん", romanization: "chan", meaning: "xxx (to girls / children / pets, cute)" },
      { kanjis: ["君"], rareKanjis: ["公"], hiragana: "きみ", romanization: "kimi", meaning: "you (for male to female / among close friends)" },
      { kanjis: ["お前"], rareKanjis: ["御前"], hiragana: "おまえ", romanization: "omae", meaning: "you (for man to lovers / close friends / arrogant)" },
      { kanjis: ["貴方", "貴女", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "you (polite, maybe impersonal)" },
      { kanjis: ["貴方", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "my dear husband" },
      { kanjis: ["貴様"], hiragana: "きさま", romanization: "kisama", meaning: "you bastard" },
      { kanjis: ["貴公"], hiragana: "きこう", romanization: "kikou", meaning: "you (very formal, for male to lower status male)" },

      // we:
      { kanjis: ["私たち", "私達"], hiragana: "わたしたち", romanization: "watashitachi", meaning: "we" },
      { kanjis: ["我々", "吾々", "我我", "吾吾"], hiragana: "われわれ", romanization: "wareware", meaning: "we (formal, on behalf of an organization)" },
      { kanjis: ["皆"], hiragana: "みんな", romanization: "minna", meaning: "everyone (informal)" },
      { kanjis: ["皆さん"], hiragana: "みなさん", romanization: "minasan", meaning: "everyone (formal)" },
      { kanjis: ["皆様"], hiragana: "みなさま", romanization: "minasama", meaning: "everyone (very formal)" },

      // he / she:
      { kanjis: ["彼"], hiragana: "かれ", romanization: "kare", meaning: "he" },
      { kanjis: ["彼氏"], hiragana: "かれし", romanization: "kareshi", meaning: "he / boyfriend" },
      { kanjis: ["彼女"], hiragana: "かのじょ", romanization: "kanojo", meaning: "she / girlfriend" },

      { kanjis: ["この人"], rareKanjis: ["此の人"], hiragana: "このひと", romanization: "konohito", meaning: "jp person" },
      { kanjis: ["この方"], rareKanjis: ["此の方"], hiragana: "このひと", romanization: "このかた", meaning: "jp gentleman / lady (polite)" },
      { hiragana: "こいつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koitsu", meaning: "jp bastard" },
      { hiragana: "こやつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koyatsu", meaning: "jp bastard" },
      { kanjis: ["その人", "其の人"], hiragana: "そのひと", romanization: "sonohito", meaning: "that person / the person" },
      { kanjis: ["その方"], rareKanjis: ["其の方"], hiragana: "そのかた", romanization: "sonokata", meaning: "that gentleman / lady (polite)" },
      { hiragana: "そいつ", preferredForm: "hiragana", rareKanjis: ["其奴"], romanization: "soitsu", meaning: "that bastard" },
      { hiragana: "そやつ", preferredForm: "hiragana", rareKanjis: ["其奴"], romanization: "soyatsu", meaning: "that bastard" },
      { kanjis: ["あの人", "彼の人"], hiragana: "あのひと", romanization: "anohito", meaning: "that person" },
      { kanjis: ["あの方", "彼の方"], hiragana: "あのかた", romanization: "anokata", meaning: "that gentleman / lady (polite)" },
      { hiragana: "あいつ", preferredForm: "hiragana", rareKanjis: ["彼奴"], romanization: "aitsu", meaning: "that bastard" },

      { kanjis: ["何人", "何びと"], hiragana: "なにびと", romanization: "nanibito", meaning: "whoever" },

      // they:
      { kanjis: ["彼ら", "彼等"], hiragana: "かれら", romanization: "karera", meaning: "they" },
      { kanjis: ["彼女ら", "彼女等"], hiragana: "かのじょら", romanization: "kanojora", meaning: "they (to females)" },
      { hiragana: "こいつら", preferredForm: "hiragana", kanjis: ["こいつ等"], rareKanjis: ["此奴ら", "此奴等"], romanization: "koitsura", meaning: "these bastards" },

      { kanjis: ["何人か"], hiragana: "なんにんか", romanization: "nanninka", meaning: "some people" },

      // oneself:
      { kanjis: ["自分"], hiragana: "じぶん", romanization: "jibun", meaning: "myself / yourself / oneself / himself / herself" },
      { kanjis: ["自分たち", "自分達"], hiragana: "じぶんたち", romanization: "jibuntachi", meaning: "ourselves / themselves" },

      // TODO: placeholders
      // (ref.) [Are there placeholders in spoken Japanese?](https://japanese.stackexchange.com/questions/80870/are-there-placeholders-in-spoken-japanese)
    );
  }

  if (jp.flashcardSettings.enablePronounsThings) {
    words.splice(
      words.length,
      0, //
      // it / that
      { hiragana: "これ", preferredForm: "hiragana", rareKanjis: ["此れ", "是", "之", "維", "惟"], romanization: "kore", meaning: "jp (close to speaker)" },
      { hiragana: "それ", preferredForm: "hiragana", rareKanjis: ["其れ"], romanization: "sore", meaning: "that (distant from speaker, close to listener)" },
      { hiragana: "あれ", preferredForm: "hiragana", rareKanjis: ["彼", "彼れ"], romanization: "are", meaning: "that (distant from both speaker and listener)" },

      // here / there
      { hiragana: "ここ", preferredForm: "hiragana", kanjis: ["此処"], rareKanjis: ["此所", "是", "茲", "爰"], romanization: "koko", meaning: "here / jp place (close to speaker)" },
      { hiragana: "そこ", preferredForm: "hiragana", kanjis: ["其処"], rareKanjis: ["其所"], romanization: "soko", meaning: "there / that place (distant from speaker, close to listener)" },
      { hiragana: "あそこ", preferredForm: "hiragana", kanjis: ["彼処"], rareKanjis: ["彼所"], katakana: "アソコ", romanization: "asoko", meaning: "there / that place (distant from both speaker and listener)" },

      // jp way / that way
      { hiragana: "こっち", preferredForm: "hiragana", kanjis: ["此方"], romanization: "kocchi", meaning: "here / jp way (close to speaker)" },
      { hiragana: "こちら", preferredForm: "hiragana", kanjis: ["此方"], romanization: "kochira", meaning: "here / jp way (close to speaker) (politely)" },
      { hiragana: "そっち", preferredForm: "hiragana", kanjis: ["其方"], romanization: "socchi", meaning: "that way (distant from speaker, close to listener)" },
      { hiragana: "そちら", preferredForm: "hiragana", kanjis: ["其方"], romanization: "sochira", meaning: "that way (distant from speaker, close to listener) (politely)" },
      { hiragana: "かなた", preferredForm: "hiragana", kanjis: ["彼方"], romanization: "kanata", meaning: "that other side (distant from both speaker and listener)" },
      { hiragana: "あちら", preferredForm: "hiragana", kanjis: ["彼方"], romanization: "achira", meaning: "that other side (distant from both speaker and listener) (politely)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsGeneral) {
    words.splice(
      words.length,
      0, //
      { exampleUsages: ["この [Noun]"], hiragana: "この", rareKanjis: ["此の", "斯の"], romanization: "kono", meaning: "jp xxx (close to listener) / 呢個" },
      { exampleUsages: ["その [Noun]"], hiragana: "その", rareKanjis: ["其の"], romanization: "sono", meaning: "that xxx (distant from speaker, close to listener) / 嗰個" },
      { exampleUsages: ["かの [Noun]"], hiragana: "かの", kanjis: ["彼の", "彼"], romanization: "kano", meaning: "that xxx (distant from both speaker and listener) / 啊邊個" },
      { exampleUsages: ["どの [Noun]"], hiragana: "どの", kanjis: ["何の"], romanization: "dono", meaning: "which xxx / 邊個" },
    );
  }

  if (jp.flashcardSettings.enablePronounsQuestionWords) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["何"], hiragana: "なん", romanization: "nan", meaning: "what xxx" },

      { kanjis: ["誰"], hiragana: "だれ", romanization: "dare", meaning: "who / 邊位" },
      { kanjis: ["何者", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "what kind of person / 乜水" },
      { kanjis: ["何人"], hiragana: "なんにん", romanization: "nannin", meaning: "how many people" },

      { hiragana: "なに", preferredForm: "hiragana", kanjis: ["何"], katakana: "ナニ", romanization: "nani", meaning: "what / 咩" },
      { kanjis: ["何物", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "what kind of thing / 咩料" },
      { kanjis: ["何事", "何ごと"], hiragana: "なにごと", romanization: "nanigoto", meaning: "what event / 咩事" },
      { kanjis: ["何か"], hiragana: "なにか", romanization: "nanika", meaning: "if anything (used in questions) / 有冇野" },
      { kanjis: ["何か"], hiragana: "なんか", romanization: "nanka", meaning: "if anything (used in questions, casually) / 有冇野" },
      { hiragana: "どれ", preferredForm: "hiragana", rareKanjis: ["何れ"], romanization: "dore", meaning: "which" },

      { hiragana: "どこ", preferredForm: "hiragana", kanjis: ["何処", "何所"], romanization: "doko", meaning: "where" },
      { hiragana: "どこら", preferredForm: "hiragana", kanjis: ["何処ら"], romanization: "dokora", meaning: "whereabouts (informal)" },
      { hiragana: "いずこ", preferredForm: "hiragana", kanjis: ["何処"], romanization: "izuko", meaning: "where / what place (very polite)" },
      { hiragana: "どっち", preferredForm: "hiragana", kanjis: ["何方"], romanization: "docchi", meaning: "which direction" },
      { hiragana: "どちら", preferredForm: "hiragana", kanjis: ["何方"], romanization: "dochira", meaning: "which direction (polite)" },

      { hiragana: "いつ", preferredForm: "hiragana", kanjis: ["何時"], romanization: "itsu", meaning: "when" },
      { kanjis: ["何時"], hiragana: "なんじ", romanization: "nanji", meaning: "which hour" },

      { hiragana: "なんで", preferredForm: "hiragana", kanjis: ["何で"], romanization: "nande", meaning: "why / how (informal) / 點解" },
      { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "why (logically) / 何解" },
      { hiragana: "どうして", preferredForm: "hiragana", rareKanjis: ["如何して"], romanization: "doushite", meaning: "why (purpose) / how / 點解會咁" },

      // TODO: counters
      { kanjis: ["何度"], hiragana: "なんど", romanization: "nando", meaning: "how many times / how many degrees" },
    );
  }
}
