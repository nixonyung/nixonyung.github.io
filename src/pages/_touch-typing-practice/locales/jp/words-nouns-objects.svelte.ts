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
      { kanjis: ["駅"], hiragana: "えき", romanization: "eki", meaning: "train station" },

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
      { kanjis: ["野菜"], hiragana: "やさい", romanization: "yasai", meaning: "vegetables", derivedMeanings: ["marijuana"] },
      { katakana: "カレー", romanization: "karii", meaning: "curry" },

      { kanjis: ["綿菓子"], hiragana: "わたがし", romanization: "watagashi", meaning: "cotton candy" },
      { katakana: "ケーキ", romanization: "keeki", meaning: "cake" },
      { katakana: "プリン", romanization: "purin", meaning: "pudding" },

      // TODO: drinks
      { kanjis: ["茶"], hiragana: "ちゃ", romanization: "cha", meaning: "tea" },
      { kanjis: ["お茶"], hiragana: "おちゃ", romanization: "ocha", meaning: "tea (polite)" },
      { katakana: "コーヒー", romanization: "koohii", meaning: "coffee" },
      { katakana: "コーラ", romanization: "coola", meaning: "coke" },

      // TODO: sports
      { katakana: "サッカー", romanization: "sakkaa", meaning: "soccer" },

      // TODO: household objects
      { kanjis: ["服"], hiragana: "ふく", romanization: "fuku", meaning: "clothes" },
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

      // TODO: nature
      { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },
      { kanjis: ["雲"], hiragana: "くも", romanization: "kumo", meaning: "cloud" },
      { kanjis: ["花", "華"], hiragana: "はな", romanization: "hana", meaning: "flower" },
      { kanjis: ["海"], hiragana: "うみ", romanization: "umi", meaning: "sea" },

      // miscellaneous
      { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },
      { kanjis: ["金"], hiragana: "かね", romanization: "kane", meaning: "money" },
      { kanjis: ["お金", "御金"], hiragana: "おかね", romanization: "okane", meaning: "money (polite)" },
      { kanjis: ["切符"], hiragana: "きっぷ", romanization: "kippu", meaning: "ticket" },
      { katakana: "チケット", romanization: "chiketto", meaning: "ticket" },
    );
  }
}
