import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsTime(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsTime) {
    words.splice(
      words.length,
      0, //
      // times of day
      { kanjis: ["朝"], hiragana: "あさ", romanization: "asa", meaning: "morning" },
      { kanjis: ["午前"], hiragana: "ごぜん", romanization: "gozen", meaning: "morning" },
      { katakana: "モーニング", romanization: "mooningu", meaning: "morning" },
      { kanjis: ["午前中"], hiragana: "ごぜんちゅう", romanization: "gozenchuu", meaning: "in the morning" },

      { kanjis: ["昼", "午"], hiragana: "ひる", romanization: "hiru", meaning: "noon" },

      // days of week
      { kanjis: ["月曜日"], hiragana: "げつようび", romanization: "getsuyoubi", meaning: "Monday" },
      { kanjis: ["火曜日"], hiragana: "かようび", romanization: "kayoubi", meaning: "Tuesday" },
      { kanjis: ["水曜日"], hiragana: "すいようび", romanization: "suiyoubi", meaning: "Wednesday" },
      { kanjis: ["木曜日"], hiragana: "もくようび", romanization: "mokuyoubi", meaning: "Thursday" },
      { kanjis: ["金曜日"], hiragana: "きんようび", romanization: "kinyoubi", meaning: "Friday" },
      { kanjis: ["土曜日"], hiragana: "どようび", romanization: "doyoubi", meaning: "Saturday" },
      { kanjis: ["日曜日"], hiragana: "にちようび", romanization: "nichiyoubi", meaning: "Sunday" },

      // TODO: months

      // four seasons
      { kanjis: ["季節"], hiragana: "きせつ", romanization: "kisetsu", meaning: "season" },
      { kanjis: ["春"], hiragana: "はる", romanization: "haru", meaning: "spring" },
      { kanjis: ["夏"], hiragana: "なつ", romanization: "natsu", meaning: "summer" },
      { kanjis: ["秋"], hiragana: "あき", romanization: "aki", meaning: "autumn" },
      { kanjis: ["冬"], hiragana: "ふゆ", romanization: "fuyu", meaning: "winter" },

      // TODO: year?

      // relative time
      { kanjis: ["今朝"], hiragana: "けさ", romanization: "kesa", meaning: "this morning" },
      { kanjis: ["今朝"], hiragana: "こんちょう", romanization: "konchou", meaning: "this morning" },

      { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
      { kanjis: ["昨日"], hiragana: "きのう", romanization: "kinou", meaning: "yesterday" },
      { kanjis: ["明日"], hiragana: "あした", romanization: "ashita", meaning: "tomorrow" },

      { kanjis: ["今週"], hiragana: "こんしゅう", romanization: "konshuu", meaning: "this week" },
      { kanjis: ["今週末"], hiragana: "こんしゅうまつ", romanization: "konshuumatsu", meaning: "this weekend" },
      { kanjis: ["先週"], hiragana: "せんしゅう", romanization: "senshuu", meaning: "last week" },
      { kanjis: ["前週"], hiragana: "ぜんしゅう", romanization: "zenshuu", meaning: "last week" },
      { kanjis: ["来週"], hiragana: "らいしゅう", romanization: "raishuu", meaning: "next week" },

      { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
      { kanjis: ["昨年"], hiragana: "さくねん", romanization: "sakunen", meaning: "last year (formal)" },
      { kanjis: ["来年"], hiragana: "らいねん", romanization: "rainen", meaning: "next year" },

      { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
      { kanjis: ["次回"], hiragana: "じかい", romanization: "jikai", meaning: "next time" },

      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "previously (root word)" },
      { kanjis: ["以前"], rareKanjis: ["已前"], hiragana: "いぜん", romanization: "izen", meaning: "the past" },
    );
  }
}
