import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalLocational(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableFunctionalLocational) {
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

      { kanjis: ["内"], hiragana: "うち", romanization: "uchi", meaning: "inside / between" },

      // interrogative
      { hiragana: "どこ", preferredForm: "hiragana", kanjis: ["何処", "何所"], romanization: "doko", meaning: "where" },
      { hiragana: "どこら", preferredForm: "hiragana", kanjis: ["何処ら"], romanization: "dokora", meaning: "whereabouts (casual)" },
      { hiragana: "いずこ", preferredForm: "hiragana", kanjis: ["何処"], romanization: "izuko", meaning: "where / what place (very polite)" },
      { hiragana: "どっち", preferredForm: "hiragana", kanjis: ["何方"], romanization: "docchi", meaning: "which direction" },
      { hiragana: "どちら", preferredForm: "hiragana", kanjis: ["何方"], romanization: "dochira", meaning: "which direction (polite)" },
    );
  }
}
