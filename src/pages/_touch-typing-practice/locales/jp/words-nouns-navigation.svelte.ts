import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsNavigation(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsNavigation) {
    words.splice(
      words.length,
      0, //
      // directions
      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "front" },
      { kanjis: ["後"], hiragana: "あと", romanization: "ato", meaning: "back" },
      // TODO: up, down
      { kanjis: ["左"], hiragana: "あと", romanization: "hidari", meaning: "left" },
      { kanjis: ["右"], hiragana: "みぎ", romanization: "migi", meaning: "right" },

      { kanjis: ["真ん中"], hiragana: "まんなか", romanization: "mannaka", meaning: "center" },
      { kanjis: ["向こう"], hiragana: "むこう", romanization: "mukou", meaning: "beyond / the other side / 嗰度" },
      { kanjis: ["向こう側", "向う側"], hiragana: "むこうがわ", romanization: "mukougawa", meaning: "the other side / 嗰邊" },
      { kanjis: ["東"], hiragana: "ひがし", romanization: "higashi", meaning: "east" },
      { kanjis: ["南"], hiragana: "みなみ", romanization: "minami", meaning: "south" },
      { kanjis: ["西"], hiragana: "にし", romanization: "nishi", meaning: "west" },
      { kanjis: ["北"], hiragana: "きた", romanization: "kita", meaning: "north" },

      // relative positions
      { kanjis: ["側", "傍"], hiragana: "そば", romanization: "soba", meaning: "nearby" },
      { kanjis: ["側"], hiragana: "そく", romanization: "soku", meaning: "nearby" },
      { kanjis: ["隣"], hiragana: "となり", romanization: "tonari", meaning: "immediate neighbor" },

      { kanjis: ["近く"], hiragana: "ちかく", romanization: "chikaku", meaning: "nearby" },
      { kanjis: ["遠く"], hiragana: "とおく", romanization: "tooku", meaning: "afar" },

      // TODO: venues
      { katakana: "トイレ", romanization: "toire", meaning: "toilet" },
      { katakana: "トイレット", romanization: "toiretto", meaning: "toilet" },

      { kanjis: ["学校"], hiragana: "がっこう", romanization: "gakkou", meaning: "school" },
      { kanjis: ["事務所"], hiragana: "じむしょ", romanization: "jimusho", meaning: "office" },
      { kanjis: ["空港"], hiragana: "くうこう", romanization: "kuukou", meaning: "airport" },
      { katakana: "コンビニ", romanization: "konbini", meaning: "convenience store" },
    );
  }
}
