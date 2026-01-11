import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsPeopleByCharacteristics(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric) {
    words.push(
      { kanjis: ["人"], hiragana: "ひと", katakana: "ヒト", romanization: "hito", meaning: "person" },
      { kanjis: ["人々", "人びと"], hiragana: "ひとびと", romanization: "hitobito", meaning: "people" },
      { kanjis: ["他人"], hiragana: "たにん", romanization: "tanin", meaning: "others" },
      { kanjis: ["人物"], hiragana: "じんぶつ", romanization: "jinbutsu", meaning: "character / a notable person" },

      { kanjis: ["一人", "１人", "独り"], hiragana: "ひとり", romanization: "hitori", meaning: "one person" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsGender) {
    words.push(
      { kanjis: ["男"], hiragana: "おとこ", romanization: "otoko", meaning: "man" },
      { kanjis: ["男子"], hiragana: "だんし", romanization: "danshi", meaning: "man (formal)" },
      { kanjis: ["少年"], hiragana: "しょうねん", romanization: "shounen", meaning: "young man" },
      { kanjis: ["公子"], hiragana: "こうし", romanization: "koushi", meaning: "young nobleman" },
      { kanjis: ["紳士"], hiragana: "しんし", romanization: "shinshi", meaning: "gentleman" },
      { kanjis: ["殿方"], hiragana: "とのがた", romanization: "tonogata", meaning: "gentlemen (used by women)" },
      { hiragana: "おっちゃん", romanization: "otchan", meaning: "uncle (casual)" },

      { kanjis: ["女"], hiragana: "おんな", romanization: "onna", meaning: "woman" },
      { kanjis: ["女子"], hiragana: "じょし", romanization: "joshi", meaning: "woman (formal)" },
      { kanjis: ["少女"], rareKanjis: ["小女"], hiragana: "しょうじょ", romanization: "shoujo", meaning: "young girl" },
      { kanjis: ["乙女", "少女"], hiragana: "おとめ", romanization: "otome", meaning: "maiden" },
      { kanjis: ["淑女"], hiragana: "しゅくじょ", romanization: "shukujo", meaning: "lady", derivedMeanings: ["female pervert (internet slang)"] },
      { kanjis: ["婦人"], hiragana: "ふじん", romanization: "fujin", meaning: "married / middle-aged lady" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsAge) {
    words.push(
      { kanjis: ["成人"], hiragana: "せいじん", romanization: "seijin", meaning: "adult" },
      { kanjis: ["大人"], hiragana: "おとな", romanization: "otona", meaning: "grown-up" },

      { kanjis: ["赤ちゃん"], hiragana: "あかちゃん", romanization: "akachan", meaning: "infant (casual)" },
      { kanjis: ["幼童"], hiragana: "ようどう", romanization: "youdou", meaning: "young child (written)" },
      { kanjis: ["子", "児"], hiragana: "こ", romanization: "ko", meaning: "child (spoken)" },
      { kanjis: ["子供", "子ども"], hiragana: "こども", romanization: "kodomo", meaning: "children (in general)" },
      { kanjis: ["１０代", "十代"], hiragana: "じゅうだい", romanization: "juudai", meaning: "teenagers" },
      { kanjis: ["若年", "弱年"], hiragana: "じゃくねん", romanization: "jakunen", meaning: "youth (formal)" },
      { kanjis: ["若者"], hiragana: "わかもの", romanization: "wakamono (formal)", meaning: "young person" },
      { kanjis: ["青年"], hiragana: "せいねん", romanization: "seinen", meaning: "young adulthood (age-wise)" },
      { kanjis: ["中年"], hiragana: "ちゅうねん", romanization: "chuunen", meaning: "middle-aged" },
      { kanjis: ["高齢者"], hiragana: "こうれいしゃ", romanization: "koureisha", meaning: "elderly" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions) {
    words.push(
      { kanjis: ["食通"], hiragana: "しょくつう", romanization: "shokutsuu", meaning: "gourmet / foodie" },
      { katakana: "グルメ", romanization: "gurume", meaning: "gourmet" },

      { katakana: "カメラマン", romanization: "kameraman", meaning: "cameraman" },

      { katakana: "メーカー", romanization: "meekaa", meaning: "maker" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus) {
    words.push(
      //
      { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master" },
      { kanjis: ["大家"], hiragana: "たいか", romanization: "taika", meaning: "authority (known for expertise)" },
    );
  }
}
