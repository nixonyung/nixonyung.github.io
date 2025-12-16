import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendAdverbs(words: JapaneseWord[]) {
  // TODO: [JLPT N5 Grammar List](https://jlptsensei.com/jlpt-n5-grammar-list/)
  if (jp.flashcardSettings.enableAdverbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "もし", preferredForm: "hiragana", kanjis: ["若し"], romanization: "moshi", meaning: "if" },
      { hiragana: "もっと", romanization: "motto", meaning: "even more" },
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
      { hiragana: "もっとも", preferredForm: "hiragana", rareKanjis: ["尤も"], romanization: "mottomo", meaning: "but then" },
      { hiragana: "なんて", romanization: "nande", meaning: "xxx or something like that" },
      { hiragana: "なんでも", preferredForm: "hiragana", kanjis: ["何でも"], romanization: "nandemo", meaning: "anything (in positive sentence)" },
      { hiragana: "なぜ", preferredForm: "hiragana", kanjis: ["何故"], romanization: "naze", meaning: "for what reason" },
      { hiragana: "なぜか", preferredForm: "hiragana", kanjis: ["何故か"], romanization: "nazeka", meaning: "for some reason / somehow" },

      { hiragana: "そう", preferredForm: "hiragana", rareKanjis: ["然う"], romanization: "sou", meaning: "likewise" },
      { hiragana: "すでに", preferredForm: "hiragana", kanjis: ["既に"], rareKanjis: ["已に"], romanization: "sudeni", meaning: "already" },
      { kanjis: ["先に"], rareKanjis: ["曩に"], hiragana: "さきに", romanization: "sakini", meaning: "previously" },
      { kanjis: ["この前"], rareKanjis: ["此の前"], hiragana: "このまえ", romanization: "konomae", meaning: "last time" },
      { kanjis: ["前もって"], rareKanjis: ["前以て"], hiragana: "まえもって", romanization: "maemotte", meaning: "in advance" },
      { kanjis: ["予め"], hiragana: "あらかじめ", romanization: "arakajime", meaning: "in advance" },
      { kanjis: ["予て", "兼ねて"], hiragana: "かねて", romanization: "kanete", meaning: "for quite a while" },

      { kanjis: ["何の"], hiragana: "なんの", romanization: "nanno", meaning: "what kind of" },
      { kanjis: ["何と"], hiragana: "なんと", romanization: "nanto", meaning: "how" },
      { kanjis: ["何らか", "何等か"], hiragana: "なんらか", romanization: "nanraka", meaning: "somewhat" },
      { kanjis: ["何にも"], hiragana: "なににも", romanization: "naninimo", meaning: "everything (in negative sentence)" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "nothing" },
      { kanjis: ["何やら"], hiragana: "なにやら", romanization: "naniyara", meaning: "something" },
      { kanjis: ["何かと", "何彼と"], hiragana: "なにかと", romanization: "nanikato", meaning: "in many ways" },
      { kanjis: ["何しろ"], hiragana: "なにしろ", romanization: "nanishiro", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なにせ", romanization: "nanise", meaning: "anyhow" },
      { kanjis: ["何せ"], hiragana: "なんせ", romanization: "nanse", meaning: "anyhow" },
      { kanjis: ["何事も", "何ごとも"], hiragana: "なにごとも", romanization: "nanigotomo", meaning: "everything" },
      { kanjis: ["何より"], hiragana: "なにより", romanization: "naniyori", meaning: "above anything else" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "not at all" },
      { kanjis: ["何も"], hiragana: "なんも", romanization: "nanmo", meaning: "not at all" },

      { kanjis: ["内", "中"], hiragana: "うち", romanization: "uchi", meaning: "inside / between" },
      { kanjis: ["同じく"], hiragana: "おなじく", romanization: "onajiku", meaning: "likewise" },

      { exampleUsages: ["超xx"], kanjis: ["超"], hiragana: "ちょう", romanization: "chou", meaning: "super-" },
      { kanjis: ["大層", "大そう"], hiragana: "たいそう", romanization: "taisou", meaning: "greatly" },
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
      { kanjis: ["極めて"], hiragana: "きわめて", romanization: "kiwamete", meaning: "extremely" },
      { kanjis: ["随分", "ずい分"], hiragana: "ずいぶん", romanization: "zuibun", meaning: "extremely" },
      { kanjis: ["全然"], hiragana: "ぜんぜん", romanization: "zenzen", meaning: "completely" },

      { kanjis: ["早く"], hiragana: "はやく", romanization: "hayaku", meaning: "quickly" },
      { hiragana: "そろそろ", katakana: "ソロソロ", romanization: "sorosoro", meaning: "soon" },
      { kanjis: ["少し"], rareKanjis: ["寡し", "些し"], hiragana: "すこし", romanization: "sukoshi", meaning: "a little bit" },
    );
  }
}
