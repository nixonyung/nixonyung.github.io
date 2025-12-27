import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsObjects(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsObjects) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["者"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (person)" },
      { kanjis: ["物"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (object)" },
      { hiragana: "こと", preferredForm: "hiragana", kanjis: ["事"], romanization: "koto", meaning: "matter / business" },

      // TODO: body parts
      { kanjis: ["手"], hiragana: "て", romanization: "te", meaning: "hand / arm" },
      { kanjis: ["お腹"], rareKanjis: ["お中"], hiragana: "おなか", romanization: "onaka", meaning: "belly / stomach" },
      { katakana: "ティアー", romanization: "tiaa", meaning: "tear" },

      // TODO: transportations
      { katakana: "バス", romanization: "basu", meaning: "bus" },
      { kanjis: ["電車"], hiragana: "でんしゃ", romanization: "densha", meaning: "train" },

      // meals
      // TODO: kinds of restaurants / cuisine
      { kanjis: ["食事"], hiragana: "しょくじ", romanization: "shokuji", meaning: "meal" },
      { kanjis: ["ご飯", "御飯"], hiragana: "ごはん", romanization: "gohan", meaning: "meal / cooked rice" },
      { kanjis: ["朝ご飯", "朝ごはん", "朝御飯"], hiragana: "あさごはん", romanization: "asagohan", meaning: "breakfast" },
      { kanjis: ["昼ご飯", "昼ごはん", "昼御飯"], hiragana: "ひるごはん", romanization: "hirugohan", meaning: "lunch" },
      { kanjis: ["晩ご飯", "晩ごはん", "晩御飯"], hiragana: "ばんごはん", romanization: "bangohan", meaning: "dinner" },

      { kanjis: ["料理"], hiragana: "りょうり", romanization: "ryouri", meaning: "dish" },
      { kanjis: ["和食"], hiragana: "わしょく", romanization: "washoku", meaning: "Japanese cuisine" },
      { kanjis: ["洋食"], hiragana: "ようしょく", romanization: "youshoku", meaning: "Western cuisine" },

      // TODO: food / ingredients / dishes
      { kanjis: ["食べ物"], hiragana: "たべもの", romanization: "tabemono", meaning: "food" },
      { kanjis: ["外食"], hiragana: "がいしょく", romanization: "gaishoku", meaning: "eating out" },

      { kanjis: ["寿司", "鮨"], rareKanjis: ["鮓"], hiragana: "すし", romanization: "sushi", meaning: "sushi" },
      { katakana: "カレー", romanization: "karii", meaning: "curry" },

      // TODO: drinks
      { kanjis: ["茶"], hiragana: "ちゃ", romanization: "cha", meaning: "tea" },
      { kanjis: ["お茶"], hiragana: "おちゃ", romanization: "ocha", meaning: "tea (polite)" },
      { katakana: "コーヒー", romanization: "koohii", meaning: "coffee" },

      // TODO: sports
      { katakana: "サッカー", romanization: "sakkaa", meaning: "soccer" },

      // TODO: household objects
      { kanjis: ["衣類"], hiragana: "いるい", romanization: "irui", meaning: "clothes" },
      { katakana: "シャツ", romanization: "shatsu", meaning: "shirt" },
      { kanjis: ["傘"], hiragana: "かさ", romanization: "kasa", meaning: "umbrella" },
      { kanjis: ["箱"], rareKanjis: ["函", "匣", "筥", "筐", "凾"], hiragana: "はこ", katakana: "ハコ", romanization: "hako", meaning: "box" },

      // TODO: equipments
      { kanjis: ["袋"], rareKanjis: ["嚢"], hiragana: "ふくろ", romanization: "fukuro", meaning: "bag" },
      { hiragana: "かばん", preferredForm: "hiragana", katakana: "カバン", kanjis: ["鞄"], romanization: "kaban", meaning: "bag / basket" },
      { kanjis: ["本"], hiragana: "ほん", romanization: "hon", meaning: "book" },
      { katakana: "カメラ", romanization: "kamera", meaning: "camera" },
      { katakana: "キャメラ", romanization: "kyamera", meaning: "camera" },
      { katakana: "スマホ", romanization: "sumaho", meaning: "smartphone" },

      // miscellaneous
      { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },
      { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },
    );
  }
}
