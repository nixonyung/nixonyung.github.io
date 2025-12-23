import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: "nai desu ka" vs "arimasen ka": "nai desu ka" is modern / spoken
// TODO: ずっと zutto
// TODO: wake dewanai
// TODO: beki dewanai
// TODO: mono dewanai
// TODO: noni
// TODO: Shika, Bakari, Nomi
// TODO: [Clause] ということ です (it is said?)
// TODO: chotto

export function appendAdverbs(words: JapaneseWord[]) {
  // TODO: [JLPT N5 Grammar List](https://jlptsensei.com/jlpt-n5-grammar-list/)
  if (jp.flashcardSettings.enableAdverbsTime) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["先に"], rareKanjis: ["曩に"], hiragana: "さきに", romanization: "sakini", meaning: "previously" },
      { kanjis: ["この前"], rareKanjis: ["此の前"], hiragana: "このまえ", romanization: "konomae", meaning: "last time" },
      { kanjis: ["前もって"], rareKanjis: ["前以て"], hiragana: "まえもって", romanization: "maemotte", meaning: "in advance" },
      { kanjis: ["予め"], hiragana: "あらかじめ", romanization: "arakajime", meaning: "in advance" },
      { kanjis: ["予て", "兼ねて"], hiragana: "かねて", romanization: "kanete", meaning: "for quite a while" },
      { hiragana: "すでに", preferredForm: "hiragana", kanjis: ["既に"], rareKanjis: ["已に"], romanization: "sudeni", meaning: "already" },
      { hiragana: "ずっと", romanization: "zutto", meaning: "(continuously)" },
      { hiragana: "そろそろ", katakana: "ソロソロ", romanization: "sorosoro", meaning: "soon" },
      { hiragana: "いつも", preferredForm: "hiragana", kanjis: ["何時も"], romanization: "itsumo", meaning: "always", exampleUsages: ["{[Noun] は} いつも [Verb / Adj.]"] },
    );
  }

  if (jp.flashcardSettings.enableAdverbsLocation) {
    words.splice(
      words.length,
      0, //
      // here / there
      { hiragana: "ここ", preferredForm: "hiragana", kanjis: ["此処"], rareKanjis: ["此所", "是", "茲", "爰"], romanization: "koko", meaning: "here / this place (close to speaker)" },
      { hiragana: "そこ", preferredForm: "hiragana", kanjis: ["其処"], rareKanjis: ["其所"], romanization: "soko", meaning: "there / that place (distant from speaker, close to listener)" },
      { hiragana: "あそこ", preferredForm: "hiragana", kanjis: ["彼処"], rareKanjis: ["彼所"], katakana: "アソコ", romanization: "asoko", meaning: "there / that place (distant from both speaker and listener)" },

      // this way / that way
      { hiragana: "こっち", preferredForm: "hiragana", kanjis: ["此方"], romanization: "kocchi", meaning: "here / this way (close to speaker)" },
      { hiragana: "こちら", preferredForm: "hiragana", kanjis: ["此方"], romanization: "kochira", meaning: "here / this way (close to speaker) (politely)" },
      { hiragana: "そっち", preferredForm: "hiragana", kanjis: ["其方"], romanization: "socchi", meaning: "that way (distant from speaker, close to listener)" },
      { hiragana: "そちら", preferredForm: "hiragana", kanjis: ["其方"], romanization: "sochira", meaning: "that way (distant from speaker, close to listener) (politely)" },
      { hiragana: "かなた", preferredForm: "hiragana", kanjis: ["彼方"], romanization: "kanata", meaning: "that other side (distant from both speaker and listener)" },
      { hiragana: "あちら", preferredForm: "hiragana", kanjis: ["彼方"], romanization: "achira", meaning: "that other side (distant from both speaker and listener) (politely)" },

      { kanjis: ["内", "中"], hiragana: "うち", romanization: "uchi", meaning: "inside / between" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsLogical) {
    words.splice(
      words.length,
      0, //
      { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if" },
      { hiragana: "もっとも", preferredForm: "hiragana", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "but then" },
      { hiragana: "なぜか", preferredForm: "hiragana", kanjis: ["何故か"], romanization: "nazeka", meaning: "for some reason / somehow" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsDegree) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["超"], hiragana: "ちょう", romanization: "chou", meaning: "super-", exampleUsages: ["超xx"] },
      { kanjis: ["大層", "大そう"], hiragana: "たいそう", romanization: "taisou", meaning: "greatly" },
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
      { kanjis: ["極めて"], hiragana: "きわめて", romanization: "kiwamete", meaning: "extremely" },
      { kanjis: ["随分", "ずい分"], hiragana: "ずいぶん", romanization: "zuibun", meaning: "extremely" },
      { hiragana: "めっちゃ", preferredForm: "hiragana", rareKanjis: ["滅茶"], romanization: "meccha", meaning: "extremely (slang)" },
      { hiragana: "とても", preferredForm: "hiragana", rareKanjis: ["迚も"], romanization: "totemo", meaning: "very" },
      { kanjis: ["全然"], hiragana: "ぜんぜん", romanization: "zenzen", meaning: "completely" },
      { hiragana: "もっと", romanization: "motto", meaning: "even more" },
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },

      { kanjis: ["本当に"], hiragana: "ほんとうに", romanization: "hontouni", meaning: "for real" },

      { kanjis: ["多分"], hiragana: "たぶん", romanization: "tabun", meaning: "probably" },
      { kanjis: ["何らか", "何等か"], hiragana: "なんらか", romanization: "nanraka", meaning: "somewhat" },

      { kanjis: ["少し"], rareKanjis: ["寡し", "些し"], hiragana: "すこし", romanization: "sukoshi", meaning: "a little bit" },

      { kanjis: ["何より"], hiragana: "なにより", romanization: "naniyori", meaning: "above anything else" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "not at all" },
      { kanjis: ["何も"], hiragana: "なんも", romanization: "nanmo", meaning: "not at all" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsManner) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["何かと", "何彼と"], hiragana: "なにかと", romanization: "nanikato", meaning: "in many ways" },
      { kanjis: ["何しろ"], hiragana: "なにしろ", romanization: "nanishiro", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なにせ", romanization: "nanise", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なんせ", romanization: "nanse", meaning: "anyhow" },

      { kanjis: ["一緒に"], hiragana: "いっしょに", romanization: "isshoni", meaning: "together {with xxx}", exampleUsages: ["一緒に [Verb]", "[Noun] と 一緒に [Verb]。"] },

      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "likewise" },
      { kanjis: ["同じく"], hiragana: "おなじく", romanization: "onajiku", meaning: "likewise" },

      { kanjis: ["早く"], hiragana: "はやく", romanization: "hayaku", meaning: "quickly" },
      { kanjis: ["早々", "早早"], hiragana: "はやばや", romanization: "hayabaya", meaning: "promptly" },
      { hiragana: "どんどん", katakana: "ドンドン", romanization: "dondon", meaning: "(drumming sound) / quickly" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsInterrogativeWhen) {
    words.splice(
      words.length,
      0, //
      { hiragana: "いつ", preferredForm: "hiragana", kanjis: ["何時"], romanization: "itsu", meaning: "when" },
      { kanjis: ["何時"], hiragana: "なんじ", romanization: "nanji", meaning: "which hour" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsInterrogativeWhere) {
    words.splice(
      words.length,
      0, //
      { hiragana: "どこ", preferredForm: "hiragana", kanjis: ["何処", "何所"], romanization: "doko", meaning: "where" },
      { hiragana: "どこら", preferredForm: "hiragana", kanjis: ["何処ら"], romanization: "dokora", meaning: "whereabouts (casual)" },
      { hiragana: "いずこ", preferredForm: "hiragana", kanjis: ["何処"], romanization: "izuko", meaning: "where / what place (very polite)" },
      { hiragana: "どっち", preferredForm: "hiragana", kanjis: ["何方"], romanization: "docchi", meaning: "which direction" },
      { hiragana: "どちら", preferredForm: "hiragana", kanjis: ["何方"], romanization: "dochira", meaning: "which direction (polite)" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsInterrogativeWhy) {
    words.splice(
      words.length,
      0, //
      { hiragana: "なんで", preferredForm: "hiragana", kanjis: ["何で"], romanization: "nande", meaning: "why / how (casual)" },
      { hiragana: "どうして", preferredForm: "hiragana", rareKanjis: ["如何して"], romanization: "doushite", meaning: "why / how" },
      { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "why (logically)" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsInterrogativeHowCome) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["何と"], hiragana: "なんと", romanization: "nanto", meaning: "how" },
    );
  }

  if (jp.flashcardSettings.enableAdverbsInterrogativeHowMany) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["何人"], hiragana: "なんにん", romanization: "nannin", meaning: "how many people" },
      { kanjis: ["何度"], hiragana: "なんど", romanization: "nando", meaning: "how many times / how many degrees" },
    );
  }

  // TODO: contrast
}
