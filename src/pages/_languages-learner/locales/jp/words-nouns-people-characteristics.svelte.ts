import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendNounsPeopleByCharacteristics(words: JapaneseWord[]) {
  if (flashcardSettings.words.nouns.people.byCharacteristics.generic.value) {
    words.push(
      //
      { kanjis: ["人"], hiragana: "ひと", katakana: "ヒト", romanization: "hito", meaning: "person" },
      { kanjis: ["人々", "人びと"], hiragana: "ひとびと", romanization: "hitobito", meaning: "people" },
      { kanjis: ["他人"], hiragana: "たにん", romanization: "tanin", meaning: "others" },
      { kanjis: ["人物"], hiragana: "じんぶつ", romanization: "jinbutsu", meaning: "character / a notable person" },
      { kanjis: ["外国人"], hiragana: "がいこくじん", romanization: "gaikokujin", meaning: "foreigner" },
    );
  }

  if (flashcardSettings.words.nouns.people.byCharacteristics.gender.value) {
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

  if (flashcardSettings.words.nouns.people.byCharacteristics.age.value) {
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

  if (flashcardSettings.words.nouns.people.byCharacteristics.professions.value) {
    words.push(
      { kanjis: ["学生"], hiragana: "がくせい", romanization: "gakusei", meaning: "student" },

      { kanjis: ["食通"], hiragana: "しょくつう", romanization: "shokutsuu", meaning: "gourmet / foodie" },
      { katakana: "グルメ", romanization: "gurume", meaning: "gourmet" },

      { katakana: "カメラマン", romanization: "kameraman", meaning: "cameraman" },

      { katakana: "メーカー", romanization: "meekaa", meaning: "maker" },
      { katakana: "アニメーター", romanization: "animeetaa", meaning: "animator" },

      { kanjis: ["医者"], hiragana: "いしゃ", romanization: "isha", meaning: "doctor" },
      { kanjis: ["医師"], hiragana: "いし", romanization: "ishi (formal)", meaning: "doctor" },
    );
  }

  if (flashcardSettings.words.nouns.people.byCharacteristics.socialStatus.value) {
    words.push(
      //
      { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master / teacher" },
      { kanjis: ["親方"], hiragana: "おやかた", romanization: "oyakata", meaning: "master / boss" },
      { kanjis: ["大家"], hiragana: "たいか", romanization: "taika", meaning: "authority (known for expertise)" },
    );
  }
}
