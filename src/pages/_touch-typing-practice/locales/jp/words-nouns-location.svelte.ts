import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsLocation(words: JapaneseWord[]) {
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

      { katakana: "トップ", romanization: "toppu", meaning: "top" },

      { kanjis: ["近く"], hiragana: "ちかく", romanization: "chikaku", meaning: "nearby" },
      { kanjis: ["遠く"], hiragana: "とおく", romanization: "tooku", meaning: "afar" },

      { kanjis: ["地元"], hiragana: "じもと", romanization: "jimoto", meaning: "home area", exampleUsages: ["地元の"] },

      // generic
      { kanjis: ["地方"], hiragana: "ちほう", romanization: "chihou", meaning: "area / region" },
      { kanjis: ["場所"], hiragana: "ばしょ", romanization: "basho", meaning: "place" },
      { kanjis: ["名所"], hiragana: "などころ", romanization: "nadokoro", meaning: "famous place" },
      { kanjis: ["村"], hiragana: "むら", romanization: "mura", meaning: "village" },
      { kanjis: ["都市"], hiragana: "とし", romanization: "toshi", meaning: "city" },
      { kanjis: ["国", "邦"], hiragana: "くに", romanization: "kuni", meaning: "country" },

      // shops / restaurants
      { kanjis: ["空港"], hiragana: "くうこう", romanization: "kuukou", meaning: "airport" },
      { kanjis: ["屋", "家"], hiragana: "や", romanization: "ya", meaning: "shop", exampleUsages: ["砂利屋"] },
      { katakana: "コンビニ", romanization: "konbini", meaning: "convenience store" },

      // infrastructures
      { kanjis: ["学校"], hiragana: "がっこう", romanization: "gakkou", meaning: "school" },
      { kanjis: ["空港"], hiragana: "くうこう", romanization: "kuukou", meaning: "airport" },

      { katakana: "トイレ", romanization: "toire", meaning: "toilet" },
      { katakana: "トイレット", romanization: "toiretto", meaning: "toilet" },

      // TODO: miscellaneous venues
      { kanjis: ["事務所"], hiragana: "じむしょ", romanization: "jimusho", meaning: "office" },
      { katakana: "ヘブン", romanization: "hebun", meaning: "heaven" },
    );
  }
}
