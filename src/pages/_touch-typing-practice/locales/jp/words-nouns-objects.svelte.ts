import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsObjects(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsObjectsGeneric) {
    words.push(
      //
      { kanjis: ["者"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (person)" },
      { kanjis: ["物"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (object)" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsBiological) {
    words.push(
      //
      { kanjis: ["手"], hiragana: "て", romanization: "te", meaning: "hand / arm" },
      { kanjis: ["お腹"], rareKanjis: ["お中"], hiragana: "おなか", romanization: "onaka", meaning: "belly / stomach" },
      { katakana: "ティアー", romanization: "tiaa", meaning: "tear" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsNature) {
    words.push(
      { kanjis: ["雲"], hiragana: "くも", romanization: "kumo", meaning: "cloud" },
      { kanjis: ["海"], hiragana: "うみ", romanization: "umi", meaning: "sea" },
      { kanjis: ["雨"], hiragana: "あめ", romanization: "ame", meaning: "rain" },

      { kanjis: ["花", "華"], hiragana: "はな", romanization: "hana", meaning: "flower" },
      { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },
      { kanjis: ["砂利"], hiragana: "じゃり", romanization: "jari", meaning: "gravel / pebbles" },

      { kanjis: ["暑さ"], hiragana: "あつさ", romanization: "atsusa", meaning: "hotness" },

      // colors
      // TODO: to adjective
      { kanjis: ["白"], hiragana: "しろ", romanization: "shiro", meaning: "white" },
      { kanjis: ["灰色"], hiragana: "はいいろ", romanization: "haiiro", meaning: "gray" },
      { kanjis: ["黒"], hiragana: "くろ", romanization: "kuro", meaning: "black" },

      { kanjis: ["赤"], hiragana: "あか", romanization: "aka", meaning: "red" },
      { kanjis: ["茶色"], hiragana: "ちゃいろ", romanization: "chairo", meaning: "brown" },
      { katakana: "オレンジ色", romanization: "orenjiiro", meaning: "orange (color)" },
      { kanjis: ["黄色"], hiragana: "きいろ", romanization: "kiiro", meaning: "yellow" },
      { kanjis: ["緑"], hiragana: "みどり", romanization: "midori", meaning: "green" },
      { kanjis: ["青"], hiragana: "あお", romanization: "ao", meaning: "blue" },
      { kanjis: ["紫"], hiragana: "むらさき", romanization: "murasaki", meaning: "purple" },
      { katakana: "ピンク", romanization: "pinku", meaning: "pink" },
      { kanjis: ["桃色"], hiragana: "ももいろ", romanization: "momoiro", meaning: "peach (color)" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsFoodCuisine) {
    words.push(
      { kanjis: ["食事"], hiragana: "しょくじ", romanization: "shokuji", meaning: "meal" },
      { kanjis: ["ご飯", "御飯"], hiragana: "ごはん", romanization: "gohan", meaning: "meal / cooked rice" },
      { kanjis: ["朝ご飯", "朝ごはん", "朝御飯"], hiragana: "あさごはん", romanization: "asagohan", meaning: "breakfast" },
      { kanjis: ["昼ご飯", "昼ごはん", "昼御飯"], hiragana: "ひるごはん", romanization: "hirugohan", meaning: "lunch" },
      { kanjis: ["晩ご飯", "晩ごはん", "晩御飯"], hiragana: "ばんごはん", romanization: "bangohan", meaning: "dinner" },

      { kanjis: ["料理"], hiragana: "りょうり", romanization: "ryouri", meaning: "dish" },
      { kanjis: ["和食"], hiragana: "わしょく", romanization: "washoku", meaning: "Japanese cuisine" },
      { kanjis: ["洋食"], hiragana: "ようしょく", romanization: "youshoku", meaning: "Western cuisine" },

      { kanjis: ["外食"], hiragana: "がいしょく", romanization: "gaishoku", meaning: "eating out" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsFoodDishes) {
    words.push(
      { kanjis: ["食べ物"], hiragana: "たべもの", romanization: "tabemono", meaning: "food" },

      { kanjis: ["寿司", "鮨"], rareKanjis: ["鮓"], hiragana: "すし", romanization: "sushi", meaning: "sushi" },

      { kanjis: ["野菜"], hiragana: "やさい", romanization: "yasai", meaning: "vegetables", derivedMeanings: ["marijuana"] },
      { katakana: "カレー", romanization: "karii", meaning: "curry" },

      // dessert
      { kanjis: ["綿菓子"], hiragana: "わたがし", romanization: "watagashi", meaning: "cotton candy" },
      { katakana: "ケーキ", romanization: "keeki", meaning: "cake" },
      { katakana: "プリン", romanization: "purin", meaning: "pudding" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsFoodDrinks) {
    words.push(
      //
      { kanjis: ["茶"], hiragana: "ちゃ", romanization: "cha", meaning: "tea" },
      { kanjis: ["お茶"], hiragana: "おちゃ", romanization: "ocha", meaning: "tea (polite)" },
      { katakana: "コーヒー", romanization: "koohii", meaning: "coffee" },
      { katakana: "コーラ", romanization: "coola", meaning: "coke" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsEquipments) {
    words.push(
      { kanjis: ["金"], hiragana: "かね", romanization: "kane", meaning: "money" },
      { kanjis: ["お金", "御金"], hiragana: "おかね", romanization: "okane", meaning: "money (polite)" },

      { kanjis: ["服"], hiragana: "ふく", romanization: "fuku", meaning: "clothes" },
      { kanjis: ["衣類"], hiragana: "いるい", romanization: "irui", meaning: "clothes" },
      { katakana: "シャツ", romanization: "shatsu", meaning: "shirt" },
      { katakana: "ボタン", romanization: "botan", meaning: "button (clothing / machinery)" },

      { katakana: "トイレットペーパー", romanization: "toirettopeepaa", meaning: "toilet paper" },

      { kanjis: ["箱"], rareKanjis: ["函", "匣", "筥", "筐", "凾"], hiragana: "はこ", katakana: "ハコ", romanization: "hako", meaning: "box" },
      { kanjis: ["袋"], rareKanjis: ["嚢"], hiragana: "ふくろ", romanization: "fukuro", meaning: "bag" },
      { hiragana: "かばん", preferredForm: "hiragana", katakana: "カバン", kanjis: ["鞄"], romanization: "kaban", meaning: "bag / basket" },

      { kanjis: ["傘"], hiragana: "かさ", romanization: "kasa", meaning: "umbrella" },

      { kanjis: ["本"], hiragana: "ほん", romanization: "hon", meaning: "book" },

      { katakana: "カメラ", romanization: "kamera", meaning: "camera" },
      { katakana: "キャメラ", romanization: "kyamera", meaning: "camera" },
      { katakana: "スマートフォン", romanization: "sumaatofon", meaning: "smartphone" },
      { katakana: "スマホ", romanization: "sumaho", meaning: "smartphone" },

      { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },

      { kanjis: ["切符"], hiragana: "きっぷ", romanization: "kippu", meaning: "ticket" },
      { katakana: "チケット", romanization: "chiketto", meaning: "ticket" },

      { katakana: "ロボット", romanization: "robotto", meaning: "robot" },
      { kanjis: ["電池"], hiragana: "でんち", romanization: "denchi", meaning: "battery" },
    );
  }

  if (jp.flashcardSettings.enableNounsObjectsTransportation) {
    words.push(
      //
      { katakana: "バス", romanization: "basu", meaning: "bus" },
      { kanjis: ["電車"], hiragana: "でんしゃ", romanization: "densha", meaning: "train" },
      // TODO: escalator, elevator
    );
  }
}
