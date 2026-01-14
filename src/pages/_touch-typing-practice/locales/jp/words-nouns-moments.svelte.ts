import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsMoments(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsMomentsTimesOfDay) {
    words.push(
      { kanjis: ["朝"], hiragana: "あさ", romanization: "asa", meaning: "morning" },
      { kanjis: ["午前"], hiragana: "ごぜん", romanization: "gozen", meaning: "morning", exampleUsages: ["午前中"] },
      { katakana: "モーニング", romanization: "mooningu", meaning: "morning" },

      { kanjis: ["昼", "午"], hiragana: "ひる", romanization: "hiru", meaning: "noon" },
      { kanjis: ["夕方", "夕がた"], hiragana: "ゆうがた", romanization: "yuugata", meaning: "dusk" },

      { kanjis: ["晩"], hiragana: "ばん", romanization: "ban", meaning: "evening" },
      { kanjis: ["夜"], hiragana: "よる", romanization: "yoru", meaning: "night" },
    );
  }

  if (jp.flashcardSettings.enableNounsMomentsDaysOfWeek) {
    words.push(
      //
      { kanjis: ["日曜日"], hiragana: "にちようび", romanization: "nichiyoubi", meaning: "Sunday" },
      { kanjis: ["月曜日"], hiragana: "げつようび", romanization: "getsuyoubi", meaning: "Monday" },
      { kanjis: ["火曜日"], hiragana: "かようび", romanization: "kayoubi", meaning: "Tuesday" },
      { kanjis: ["水曜日"], hiragana: "すいようび", romanization: "suiyoubi", meaning: "Wednesday" },
      { kanjis: ["木曜日"], hiragana: "もくようび", romanization: "mokuyoubi", meaning: "Thursday" },
      { kanjis: ["金曜日"], hiragana: "きんようび", romanization: "kinyoubi", meaning: "Friday" },
      { kanjis: ["土曜日"], hiragana: "どようび", romanization: "doyoubi", meaning: "Saturday" },
    );
  }

  // TODO: months
  if (jp.flashcardSettings.enableNounsMomentsMonths) {
    words.push(
      //
      { kanjis: ["１月", "一月"], hiragana: "いちがつ", romanization: "ichigatsu", meaning: "January" },
      { kanjis: ["２月", "二月"], hiragana: "にがつ", romanization: "nigatsu", meaning: "February" },
      { kanjis: ["３月", "三月"], hiragana: "さんがつ", romanization: "sangatsu", meaning: "March" },
      { kanjis: ["４月", "四月"], hiragana: "しがつ", romanization: "shigatsu", meaning: "April" },
      { kanjis: ["５月", "五月"], hiragana: "ごがつ", romanization: "gogatsu", meaning: "May" },
      { kanjis: ["６月", "六月"], hiragana: "ろくがつ", romanization: "rokugatsu", meaning: "June" },
      { kanjis: ["７月", "七月"], hiragana: "しちがつ", romanization: "shichigatsu", meaning: "July" },
      { kanjis: ["７月", "七月"], hiragana: "なながつ", romanization: "nanagatsu", meaning: "July (spoken)" },
      { kanjis: ["８月", "八月"], hiragana: "はちがつ", romanization: "hachigatsu", meaning: "August" },
      { kanjis: ["９月", "九月"], hiragana: "くがつ", romanization: "kugatsu", meaning: "September" },
      { kanjis: ["１０月", "十月", "一〇月"], hiragana: "じゅうがつ", romanization: "juugatsu", meaning: "October" },
      { kanjis: ["１１月", "十一月", "一一月"], hiragana: "じゅういちがつ", romanization: "juuichigatsu", meaning: "November" },
      { kanjis: ["１２月", "十二月", "一二月"], hiragana: "じゅうにがつ", romanization: "juunigatsu", meaning: "December" },
    );
  }

  if (jp.flashcardSettings.enableNounsMomentsSeasons) {
    words.push(
      { kanjis: ["季節"], hiragana: "きせつ", romanization: "kisetsu", meaning: "season" },

      { kanjis: ["春"], hiragana: "はる", romanization: "haru", meaning: "spring" },
      { kanjis: ["夏"], hiragana: "なつ", romanization: "natsu", meaning: "summer" },
      { kanjis: ["秋"], hiragana: "あき", romanization: "aki", meaning: "autumn" },
      { kanjis: ["冬"], hiragana: "ふゆ", romanization: "fuyu", meaning: "winter" },
    );
  }

  if (jp.flashcardSettings.enableNounsMomentsFestivals) {
    words.push(
      { kanjis: ["誕生日"], hiragana: "たんじょうび", romanization: "tanjoubi", meaning: "birthday" },

      { katakana: "クリスマス", romanization: "kurisumasu", meaning: "Christmas" },
    );
  }

  // if (jp.flashcardSettings.enableNounsMomentsMisc) {
  //   words.push(
  //   );
  // }
}
