import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsVenues(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsVenuesGeneric) {
    words.push(
      { kanjis: ["場所"], hiragana: "ばしょ", romanization: "basho", meaning: "place" },
      { kanjis: ["地方"], hiragana: "ちほう", romanization: "chihou", meaning: "area / region" },

      { kanjis: ["名所"], hiragana: "などころ", romanization: "nadokoro", meaning: "famous place" },
      { kanjis: ["地元"], hiragana: "じもと", romanization: "jimoto", meaning: "home area", exampleUsages: ["地元の"] },

      { kanjis: ["道", "途", "路", "径"], hiragana: "みち", romanization: "michi", meaning: "road / path" },
      { kanjis: ["村"], hiragana: "むら", romanization: "mura", meaning: "village" },
      { kanjis: ["都市"], hiragana: "とし", romanization: "toshi", meaning: "city" },
      { kanjis: ["国", "邦"], hiragana: "くに", romanization: "kuni", meaning: "country" },
    );
  }

  if (jp.flashcardSettings.enableNounsVenuesFacilities) {
    words.push(
      { kanjis: ["家"], hiragana: "いえ", romanization: "ie", meaning: "home" },
      { hiragana: "うち", preferredForm: "hiragana", kanjis: ["家"], romanization: "uchi", meaning: "house" },
      { kanjis: ["居室"], hiragana: "きょしつ", romanization: "kyoshitsu", meaning: "living room" },
      { katakana: "トイレ", romanization: "toire", meaning: "toilet" },
      { katakana: "トイレット", romanization: "toiretto", meaning: "toilet" },

      { kanjis: ["学校"], hiragana: "がっこう", romanization: "gakkou", meaning: "school" },
      { kanjis: ["教室"], hiragana: "きょうしつ", romanization: "kyoushitsu", meaning: "classroom" },

      { kanjis: ["遊び場"], hiragana: "あそびば", romanization: "asobiba", meaning: "playground" },

      { kanjis: ["事務所"], hiragana: "じむしょ", romanization: "jimusho", meaning: "office" },

      { kanjis: ["空港"], hiragana: "くうこう", romanization: "kuukou", meaning: "airport" },
      { kanjis: ["駅"], hiragana: "えき", romanization: "eki", meaning: "train station" },
    );
  }

  if (jp.flashcardSettings.enableNounsVenuesShops) {
    words.push(
      { kanjis: ["店"], hiragana: "みせ", romanization: "mise", meaning: "shop" },
      { kanjis: ["商店"], hiragana: "しょうてん", romanization: "shouten", meaning: "shop" },
      { kanjis: ["屋", "家"], hiragana: "や", romanization: "ya", meaning: "house", derivedMeanings: ["shop"], exampleUsages: ["砂利屋"] },

      { katakana: "コンビニ", romanization: "konbini", meaning: "convenience store" },

      { katakana: "ホテル", romanization: "hoteru", meaning: "hotel" },
    );
  }

  if (jp.flashcardSettings.enableNounsVenuesRegions) {
    words.push(
      //
      { kanjis: ["東京"], hiragana: "とうきょう", romanization: "toukyou", meaning: "tokyo" },
    );
  }

  if (jp.flashcardSettings.enableNounsVenuesImaginary) {
    words.push(
      //
      { kanjis: ["天国"], hiragana: "てんごく", romanization: "tengoku", meaning: "heaven" },
      { katakana: "ヘブン", romanization: "hebun", meaning: "heaven" },
    );
  }
}
