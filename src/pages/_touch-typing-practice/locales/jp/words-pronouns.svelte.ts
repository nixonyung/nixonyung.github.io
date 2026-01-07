import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendPronouns(words: JapaneseWord[]) {
  // TODO: rename to "references"

  if (jp.flashcardSettings.enablePronounsMe) {
    words.push(
      { kanjis: ["私"], hiragana: "わたし", romanization: "watashi", meaning: "I" },
      { kanjis: ["私"], hiragana: "わたくし", romanization: "watakushi", meaning: "I (very formal)" },
      { kanjis: ["私"], hiragana: "あたし", romanization: "atashi", meaning: "I (women)" },
      { kanjis: ["私"], hiragana: "あたくし", romanization: "atakushi", meaning: "I (women, polite)" },

      { kanjis: ["僕"], hiragana: "ぼく", katakana: "ボク", romanization: "boku", meaning: "I (young men, playful)" },
      { kanjis: ["俺"], hiragana: "おれ", katakana: "オレ", romanization: "ore", meaning: "I (men, masculine)" },
      { kanjis: ["俺様", "オレ様"], rareKanjis: ["己様"], hiragana: "おれさま", romanization: "oresama", meaning: "the one and only me (men, arrogant)" },
      { kanjis: ["我", "吾"], hiragana: "われ", romanization: "ware", meaning: "I (men, very formal, old-fashioned)" },
      { hiragana: "わし", preferredForm: "hiragana", kanjis: ["儂"], rareKanjis: ["私"], katakana: "ワシ", romanization: "washi", meaning: "I (old men, literary)" },
      { kanjis: ["拙者"], hiragana: "せっしゃ", romanization: "sessha", meaning: "I (men / samurais, humble)" },

      { hiragana: "うち", romanization: "uchi", meaning: "I (young women, casual)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsYou) {
    // TODO: https://nihonshock.com/2012/07/saying-you-in-japanese/
    words.push(
      { hiragana: "〇〇さん", romanization: "san", meaning: "Mr/Mrs/Miss/Ms xxx" },
      { kanjis: ["〇〇様"], rareKanjis: ["〇〇方", "〇〇状"], hiragana: "〇〇さま", romanization: "sama", meaning: "Mr/Mrs/Miss/Ms xxx (very formal, to higher status / customer" },
      { kanjis: ["〇〇君"], hiragana: "〇〇くん", romanization: "kun", meaning: "(addressing younger males)" },
      { hiragana: "〇〇ちゃん", romanization: "chan", meaning: "(addressing girls / children / pets, cute)" },
      { kanjis: ["君"], rareKanjis: ["公"], hiragana: "きみ", romanization: "kimi", meaning: "you (for male to female / among close friends)" },
      { kanjis: ["お前"], rareKanjis: ["御前"], hiragana: "おまえ", romanization: "omae", meaning: "you (for man to lovers / close friends / arrogant)" },
      { kanjis: ["貴方", "貴女", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "you (polite, maybe impersonal)" },
      { kanjis: ["貴方", "貴男"], hiragana: "あなた", romanization: "anata", meaning: "my dear husband" },
      { kanjis: ["貴様"], hiragana: "きさま", romanization: "kisama", meaning: "you bastard" },
      { kanjis: ["貴公"], hiragana: "きこう", romanization: "kikou", meaning: "you (very formal, for male to lower status male)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsUs) {
    words.push(
      //
      { kanjis: ["私たち", "私達"], hiragana: "わたしたち", romanization: "watashitachi", meaning: "we" },
      { kanjis: ["我々", "吾々", "我我", "吾吾"], hiragana: "われわれ", romanization: "wareware", meaning: "we (formal, on behalf of an organization)" },
      { kanjis: ["皆"], hiragana: "みんな", romanization: "minna", meaning: "everyone (informal)" },
      { kanjis: ["皆さん"], hiragana: "みなさん", romanization: "minasan", meaning: "everyone (formal)" },
      { kanjis: ["皆様"], hiragana: "みなさま", romanization: "minasama", meaning: "everyone (very formal)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsThatPerson) {
    words.push(
      { kanjis: ["彼"], hiragana: "かれ", romanization: "kare", meaning: "he" },
      { kanjis: ["彼氏"], hiragana: "かれし", romanization: "kareshi", meaning: "he / boyfriend" },
      { kanjis: ["彼女"], hiragana: "かのじょ", romanization: "kanojo", meaning: "she / girlfriend" },

      { kanjis: ["この人"], rareKanjis: ["此の人"], hiragana: "このひと", romanization: "konohito", meaning: "this person" },
      { kanjis: ["その人", "其の人"], hiragana: "そのひと", romanization: "sonohito", meaning: "that person / the person" },
      { kanjis: ["あの人", "彼の人"], hiragana: "あのひと", romanization: "anohito", meaning: "that person" },

      { kanjis: ["この方"], rareKanjis: ["此の方"], hiragana: "このひと", romanization: "konokata", meaning: "this gentleman / lady (polite)" },
      { kanjis: ["その方"], rareKanjis: ["其の方"], hiragana: "そのかた", romanization: "sonokata", meaning: "that gentleman / lady (polite)" },
      { kanjis: ["あの方", "彼の方"], hiragana: "あのかた", romanization: "anokata", meaning: "that gentleman / lady (polite)" },

      { hiragana: "こいつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koitsu", meaning: "this bastard" },
      { hiragana: "こやつ", preferredForm: "hiragana", kanjis: ["此奴"], romanization: "koyatsu", meaning: "this bastard" },
      { hiragana: "そいつ", rareKanjis: ["其奴"], romanization: "soitsu", meaning: "that bastard" },
      { hiragana: "そやつ", rareKanjis: ["其奴"], romanization: "soyatsu", meaning: "that bastard" },
      { hiragana: "あいつ", rareKanjis: ["彼奴"], romanization: "aitsu", meaning: "that bastard" },

      // TODO: placeholders
      // (ref.) [Are there placeholders in spoken Japanese?](https://japanese.stackexchange.com/questions/80870/are-there-placeholders-in-spoken-japanese)
      { kanjis: ["〇〇"], hiragana: "まるまる", romanization: "marumaru", meaning: "(placeholder)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsThosePeople) {
    words.push(
      { kanjis: ["彼ら", "彼等"], hiragana: "かれら", romanization: "karera", meaning: "they" },
      { kanjis: ["彼女ら", "彼女等"], hiragana: "かのじょら", romanization: "kanojora", meaning: "they (to females)" },

      { kanjis: ["何人か"], hiragana: "なんにんか", romanization: "nanninka", meaning: "some people" },

      { hiragana: "こいつら", preferredForm: "hiragana", kanjis: ["こいつ等"], rareKanjis: ["此奴ら", "此奴等"], romanization: "koitsura", meaning: "these bastards" },
    );
  }

  if (jp.flashcardSettings.enablePronounsThatThing) {
    words.push(
      { hiragana: "これ", rareKanjis: ["此れ", "是", "之", "維", "惟"], romanization: "kore", meaning: "this (close to speaker)" },
      { hiragana: "それ", rareKanjis: ["其れ"], romanization: "sore", meaning: "that (distant from speaker, close to listener)" },
      { hiragana: "あれ", rareKanjis: ["彼", "彼れ"], romanization: "are", meaning: "that (distant from both speaker and listener)" },

      { hiragana: "の", romanization: "no", meaning: "(possession marker)", exampleUsages: ["[Noun] の [Noun] ...", "だれの [Noun] ですか？"] },

      { exampleUsages: ["この [Noun]"], hiragana: "この", rareKanjis: ["此の", "斯の"], romanization: "kono", meaning: "this xxx (close to listener)" },
      { exampleUsages: ["その [Noun]"], hiragana: "その", rareKanjis: ["其の"], romanization: "sono", meaning: "that xxx (distant from speaker, close to listener)" },
      { exampleUsages: ["かの [Noun]"], hiragana: "かの", kanjis: ["彼の", "彼"], romanization: "kano", meaning: "that xxx (distant from both speaker and listener)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsThoseThings) {
    words.push(
      //
      { hiragana: "これら", preferredForm: "hiragana", kanjis: ["これ等"], rareKanjis: ["此等", "是等", "之等", "此れ等"], romanization: "korera", meaning: "these (close to speaker)" },
      { hiragana: "それら", rareKanjis: ["それ等", "其れ等"], romanization: "sorera", meaning: "those (distant from speaker, close to listener)" },
      { hiragana: "あれら", rareKanjis: ["彼等", "彼ら"], romanization: "arera", meaning: "those (distant from both speaker and listener)" },
    );
  }

  if (jp.flashcardSettings.enablePronounsReflective) {
    words.push(
      ///
      { kanjis: ["自分"], hiragana: "じぶん", romanization: "jibun", meaning: "myself / yourself / oneself / himself / herself" },
      { kanjis: ["自分たち", "自分達"], hiragana: "じぶんたち", romanization: "jibuntachi", meaning: "ourselves / themselves" },
    );
  }

  if (jp.flashcardSettings.enablePronounsIndefinite) {
    words.push(
      { kanjis: ["誰か"], hiragana: "だれか", romanization: "dareka", meaning: "someone" },
      { kanjis: ["誰も"], hiragana: "だれも", romanization: "daremo", meaning: "everyone / no one" },
      { kanjis: ["何人", "何びと"], hiragana: "なにびと", romanization: "nanibito", meaning: "whoever" },

      { kanjis: ["何か"], hiragana: "なにか", romanization: "nanika", meaning: "anything" },
      { kanjis: ["何か"], hiragana: "なんか", romanization: "nanka", meaning: "anything (casual)" },
      { hiragana: "なんでも", preferredForm: "hiragana", kanjis: ["何でも"], romanization: "nandemo", meaning: "anything (in positive sentence)" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "nothing" },
      { kanjis: ["何やら"], hiragana: "なにやら", romanization: "naniyara", meaning: "something" },
      { kanjis: ["何にも"], hiragana: "なににも", romanization: "naninimo", meaning: "everything (in negative sentence)" },
      { kanjis: ["何事も", "何ごとも"], hiragana: "なにごとも", romanization: "nanigotomo", meaning: "everything" },
      { kanjis: ["全て"], rareKanjis: ["総て", "凡て", "惣て", "渾て"], hiragana: "すべて", romanization: "subete", meaning: "everything / all" },
    );
  }

  if (jp.flashcardSettings.enablePronounsInterrogativeWho) {
    words.push(
      //
      { kanjis: ["誰"], hiragana: "だれ", romanization: "dare", meaning: "who" },
      { kanjis: ["何者", "何もの"], hiragana: "なにもの", romanization: "nanimono", meaning: "what kind of person" },
    );
  }

  if (jp.flashcardSettings.enablePronounsInterrogativeWhat) {
    words.push(
      { hiragana: "なに", preferredForm: "hiragana", kanjis: ["何"], katakana: "ナニ", romanization: "nani", meaning: "what" },
      { kanjis: ["何の"], hiragana: "なんの", romanization: "nanno", meaning: "what kind of" },
      { kanjis: ["何事", "何ごと"], hiragana: "なにごと", romanization: "nanigoto", meaning: "what situation" },
      { hiragana: "どれ", rareKanjis: ["何れ"], romanization: "dore", meaning: "which" },
      { hiragana: "どの", rareKanjis: ["何の"], romanization: "dono", meaning: "which of", exampleUsages: ["どの [Noun]"] },
      { hiragana: "どんな", romanization: "nna", meaning: "what kind of", exampleUsages: ["どんな [Noun] ..."] },

      { hiragana: "どうする", romanization: "dousuru", meaning: "what to do" },
    );
  }
}
