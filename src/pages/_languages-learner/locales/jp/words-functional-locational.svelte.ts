import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalLocational(words: JapaneseWord[]) {
  // TODO: treat as nouns?
  if (flashcardSettings.words.functional.locational.value) {
    words.push(
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

      // directions
      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "front" },
      { kanjis: ["後"], hiragana: "あと", romanization: "ato", meaning: "back" },
      { kanjis: ["前後"], hiragana: "ぜんご", romanization: "zengo", meaning: "front and back" },
      // TODO: up, down
      { kanjis: ["左"], hiragana: "ひだり", romanization: "hidari", meaning: "left" },
      { kanjis: ["右"], hiragana: "みぎ", romanization: "migi", meaning: "right" },

      { kanjis: ["真ん中"], hiragana: "まんなか", romanization: "mannaka", meaning: "center" },
      { kanjis: ["向こう"], hiragana: "むこう", romanization: "mukou", meaning: "over there / the other side" },
      { kanjis: ["向こう側", "向う側"], hiragana: "むこうがわ", romanization: "mukougawa", meaning: "over there / the other side" },
      { kanjis: ["東"], hiragana: "ひがし", romanization: "higashi", meaning: "east" },
      { kanjis: ["南"], hiragana: "みなみ", romanization: "minami", meaning: "south" },
      { kanjis: ["西"], hiragana: "にし", romanization: "nishi", meaning: "west" },
      { kanjis: ["北"], hiragana: "きた", romanization: "kita", meaning: "north" },

      // relative positions
      { kanjis: ["側", "傍"], hiragana: "そば", romanization: "soba", meaning: "nearby" },
      { kanjis: ["隣"], hiragana: "となり", romanization: "tonari", meaning: "immediate neighbor" },
      { kanjis: ["末"], hiragana: "すえ", romanization: "sue", meaning: "end / tip / last part" },

      { katakana: "トップ", romanization: "toppu", meaning: "top" },

      { kanjis: ["近く"], hiragana: "ちかく", romanization: "chikaku", meaning: "nearby" },
      { kanjis: ["遠く"], hiragana: "とおく", romanization: "tooku", meaning: "afar" },
      { kanjis: ["内"], hiragana: "うち", romanization: "uchi", meaning: "inside" },
      { kanjis: ["中"], hiragana: "なか", romanization: "naka", meaning: "middle / centre", derivedMeanings: ["inside"] },

      { hiragana: "ところ", preferredForm: "hiragana", kanjis: ["所"], romanization: "tokoro", meaning: "nearby", derivedMeanings: ["recently"], exampleUsages: ["家を出たところ"] },

      // interrogative
      { hiragana: "どこ", preferredForm: "hiragana", kanjis: ["何処", "何所"], romanization: "doko", meaning: "where", exampleUsages: ["[Noun] はどこですか？", "どこが [Noun] ですか？"] },
      { hiragana: "どこら", preferredForm: "hiragana", kanjis: ["何処ら"], romanization: "dokora", meaning: "whereabouts (casual)" },
      { hiragana: "いずこ", preferredForm: "hiragana", kanjis: ["何処"], romanization: "izuko", meaning: "where / what place (very polite)" },
      { hiragana: "どっち", preferredForm: "hiragana", kanjis: ["何方"], romanization: "docchi", meaning: "which direction" },
      { hiragana: "どちら", preferredForm: "hiragana", kanjis: ["何方"], romanization: "dochira", meaning: "which direction (polite)" },
    );
  }
}
