import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendNounsVenues(words: JapaneseWord[]) {
  if (flashcardSettings.words.nouns.venues.generic.value) {
    words.push(
      { kanjis: ["場所"], hiragana: "ばしょ", romanization: "basho", meaning: "place" },
      { kanjis: ["地方"], hiragana: "ちほう", romanization: "chihou", meaning: "area / region" },
      { kanjis: ["名所"], hiragana: "などころ", romanization: "nadokoro", meaning: "famous place" },

      { kanjis: ["周辺"], hiragana: "しゅうへん", romanization: "shuuhen", meaning: "neighboring area" },

      // shapes
      { kanjis: ["穴", "孔"], hiragana: "あな", romanization: "ana", meaning: "hole / pit" },
      { kanjis: ["壁"], hiragana: "かべ", romanization: "kabe", meaning: "wall" },
      { kanjis: ["角"], hiragana: "かど", romanization: "kado", meaning: "corner" },
    );
  }

  if (flashcardSettings.words.nouns.venues.facilities.value) {
    words.push(
      { kanjis: ["部屋"], hiragana: "へや", romanization: "heya", meaning: "room" },
      { kanjis: ["居室"], hiragana: "きょしつ", romanization: "kyoshitsu", meaning: "living room" },
      { katakana: "ベッド", romanization: "beddo", meaning: "bed" },
      { kanjis: ["台所"], hiragana: "だいどころ", romanization: "daidokoro", meaning: "kitchen" },
      { katakana: "キッチン", romanization: "kitchin", meaning: "kitchen" },
      { katakana: "トイレ", romanization: "toire", meaning: "toilet" },
      { katakana: "トイレット", romanization: "toiretto", meaning: "toilet" },

      { hiragana: "うち", preferredForm: "hiragana", kanjis: ["家"], romanization: "uchi", meaning: "home / my home" },
      { kanjis: ["家"], hiragana: "いえ", romanization: "ie", meaning: "home / house" },
      { katakana: "アパート", romanization: "apaato", meaning: "apartment" },

      { katakana: "ドア", romanization: "doa", meaning: "door" },
      { kanjis: ["玄関"], hiragana: "げんかん", romanization: "genkan", meaning: "entrance" },
      { kanjis: ["入り口", "入口"], hiragana: "いりぐち", romanization: "iriguchi", meaning: "entrance" },
      { kanjis: ["出口"], hiragana: "でぐち", romanization: "deguchi", meaning: "exit / way out" },

      { kanjis: ["階段"], hiragana: "かいだん", romanization: "kaidan", meaning: "stairs" },
      { kanjis: ["橋"], hiragana: "はし", romanization: "hashi", meaning: "bridge" },
      { kanjis: ["池"], hiragana: "いけ", romanization: "ike", meaning: "pond" },
      { hiragana: "ほとり", preferredForm: "hiragana", kanjis: ["辺", "畔"], romanization: "hotori", meaning: "shore" },

      { kanjis: ["学校"], hiragana: "がっこう", romanization: "gakkou", meaning: "school" },
      { kanjis: ["大学"], hiragana: "だいがく", romanization: "daigaku", meaning: "university" },
      { kanjis: ["教室"], hiragana: "きょうしつ", romanization: "kyoushitsu", meaning: "classroom" },

      { kanjis: ["遊び場"], hiragana: "あそびば", romanization: "asobiba", meaning: "playground" },

      { kanjis: ["銀行"], hiragana: "ぎんこう", romanization: "ginkou", meaning: "bank" },
      { kanjis: ["病院"], hiragana: "びょういん", romanization: "byouin", meaning: "hospital" },

      { kanjis: ["事務所"], hiragana: "じむしょ", romanization: "jimusho", meaning: "office" },

      { kanjis: ["空港"], hiragana: "くうこう", romanization: "kuukou", meaning: "airport" },
      { kanjis: ["駅"], hiragana: "えき", romanization: "eki", meaning: "train station" },
    );
  }

  if (flashcardSettings.words.nouns.venues.shops.value) {
    words.push(
      { kanjis: ["店"], hiragana: "みせ", romanization: "mise", meaning: "shop" },
      { kanjis: ["商店"], hiragana: "しょうてん", romanization: "shouten", meaning: "shop" },
      { kanjis: ["屋", "家"], hiragana: "や", romanization: "ya", meaning: "house", derivedMeanings: ["shop"], exampleUsages: ["砂利屋"] },
      { katakana: "デパート", romanization: "depaato", meaning: "department", derivedMeanings: ["department store"] },

      { katakana: "コンビニ", romanization: "konbini", meaning: "convenience store" },
      { katakana: "ホテル", romanization: "hoteru", meaning: "hotel" },
      { kanjis: ["映画館"], hiragana: "えいがかん", romanization: "eigakan", meaning: "movie theatre" },
    );
  }

  if (flashcardSettings.words.nouns.venues.communities.value) {
    words.push(
      //
      { kanjis: ["道", "途", "路", "径"], hiragana: "みち", romanization: "michi", meaning: "road / path" },
      { kanjis: ["村"], hiragana: "むら", romanization: "mura", meaning: "village" },
      { kanjis: ["都市"], hiragana: "とし", romanization: "toshi", meaning: "city" },
      { kanjis: ["国", "邦"], hiragana: "くに", romanization: "kuni", meaning: "country" },

      { kanjis: ["地元"], hiragana: "じもと", romanization: "jimoto", meaning: "home area", exampleUsages: ["地元の"] },
      { kanjis: ["外国"], hiragana: "がいこく", romanization: "gaikoku", meaning: "foreign country" },
    );
  }

  if (flashcardSettings.words.nouns.venues.regions.value) {
    words.push(
      //
      { kanjis: ["東京"], hiragana: "とうきょう", romanization: "toukyou", meaning: "tokyo" },
    );
  }

  if (flashcardSettings.words.nouns.venues.imaginary.value) {
    words.push(
      //
      { kanjis: ["天国"], hiragana: "てんごく", romanization: "tengoku", meaning: "heaven" },
      { katakana: "ヘブン", romanization: "hebun", meaning: "heaven" },
    );
  }
}
