import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsPeopleByCharacteristics(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsGeneric) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["人"], hiragana: "ひと", katakana: "ヒト", romanization: "hito", meaning: "person" },
      { kanjis: ["人々", "人びと", "人人"], hiragana: "ひとびと", romanization: "hitobito", meaning: "people" },
      { kanjis: ["他人"], hiragana: "たにん", romanization: "tanin", meaning: "others" },
      { kanjis: ["人物"], hiragana: "じんぶつ", romanization: "jinbutsu", meaning: "character" },

      { kanjis: ["一人", "１人", "独り"], hiragana: "ひとり", romanization: "hitori", meaning: "one person" },
      { kanjis: ["一人", "１人"], hiragana: "いちにん", romanization: "ichinin", meaning: "one person" },

      { kanjis: ["〇〇"], hiragana: "まるまる", romanization: "marumaru", meaning: "(placeholder)" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsGender) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["男"], hiragana: "おとこ", romanization: "otoko", meaning: "man" },
      { kanjis: ["少年"], hiragana: "しょうねん", romanization: "shounen", meaning: "young man" },
      { kanjis: ["公子"], hiragana: "こうし", romanization: "koushi", meaning: "young nobleman" },
      { kanjis: ["紳士"], hiragana: "しんし", romanization: "shinshi", meaning: "gentleman" },
      { kanjis: ["殿方"], hiragana: "とのがた", romanization: "tonogata", meaning: "gentlemen (woman speaking to a group of men)" },

      { kanjis: ["女"], hiragana: "おんな", romanization: "onna", meaning: "woman (objectified)" },
      { kanjis: ["少女"], rareKanjis: ["小女"], hiragana: "しょうじょ", romanization: "shoujo", meaning: "young lady" },
      { kanjis: ["女子"], hiragana: "じょし", romanization: "joshi", meaning: "woman" },
      { kanjis: ["乙女", "少女"], hiragana: "おとめ", romanization: "otome", meaning: "young lady (idealized) / 淑女" },
      { kanjis: ["婦人"], hiragana: "ふじん", romanization: "fujin", meaning: "lady" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsAge) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["成人"], hiragana: "せいじん", romanization: "seijin", meaning: "adult" },
      { kanjis: ["大人"], hiragana: "おとな", romanization: "otona", meaning: "grown-up" },

      { kanjis: ["赤ちゃん"], hiragana: "あかちゃん", romanization: "akachan", meaning: "infant" },
      { kanjis: ["幼童"], hiragana: "ようどう", romanization: "youdou", meaning: "young child" },
      { kanjis: ["１０代", "十代"], hiragana: "じゅうだい", romanization: "juudai", meaning: "teenagers" },
      { kanjis: ["若年", "弱年"], hiragana: "じゃくねん", romanization: "jakunen", meaning: "youth (age-wise)" },
      { kanjis: ["若者"], hiragana: "わかもの", romanization: "wakamono", meaning: "young person / 年輕人 / 後生仔/女" },
      { kanjis: ["青年"], hiragana: "せいねん", romanization: "seinen", meaning: "young adulthood (age-wise)" },
      { kanjis: ["中年"], hiragana: "ちゅうねん", romanization: "chuunen", meaning: "middle-aged" },
      { kanjis: ["高齢者"], hiragana: "こうれいしゃ", romanization: "koureisha", meaning: "elderly" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsProfessions) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["食通"], hiragana: "しょくつう", romanization: "shokutsuu", meaning: "gourmet: someone who is very knowledgeable about food and enjoys trying new things" },
      { katakana: "グルメ", romanization: "gurume", meaning: "gourmet / fine food" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleCharacteristicsSocialStatus) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master" },
      { kanjis: ["大家"], hiragana: "たいか", romanization: "taika", meaning: "authority" },
    );
  }
}
