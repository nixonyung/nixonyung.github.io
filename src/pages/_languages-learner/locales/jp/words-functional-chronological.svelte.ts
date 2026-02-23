import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalChronological(words: JapaneseWord[]) {
  // TODO: treat as nouns?
  if (flashcardSettings.words.functional.chronological.value) {
    words.push(
      // TODO: https://www.sigure.tw/learn-japanese/mix/difference/sorekara-korekara

      { kanjis: ["時", "刻", "秋"], hiragana: "とき", romanization: "toki", meaning: "at that time", exampleUsages: ["[Verb] 時、", "[Noun] の時、", "[na-Adj.] 時、", "[i-Adj.] 時、"] },

      // definite point in time
      // TODO: today, tomorrow, yesterday, tonight, now, then, last week, on September 11, in 2008, immediately
      // TODO: specific year / date

      { kanjis: ["今"], hiragana: "いま", romanization: "ima", meaning: "now" },

      { kanjis: ["暁"], hiragana: "あけがた", romanization: "akegata", meaning: "dawn" },
      { kanjis: ["昨暁"], hiragana: "さくぎょう", romanization: "sakugyou", meaning: "yesterday dawn" },
      { kanjis: ["今暁"], hiragana: "こんぎょう", romanization: "kongyou", meaning: "today's dawn" },

      { kanjis: ["夜明け"], hiragana: "よあけ", romanization: "yoake", meaning: "daybreak", exampleUsages: ["明日の夜明け "] },
      { kanjis: ["明け方"], hiragana: "あかつき", romanization: "akatsuki", meaning: "dawn / sunrising", exampleUsages: ["明日の明け方 "] },

      { kanjis: ["昨朝"], hiragana: "さくちょう", romanization: "sakuchou", meaning: "yesterday morning" },
      { kanjis: ["今朝"], hiragana: "けさ", romanization: "kesa", meaning: "this morning" },
      { kanjis: ["明朝"], hiragana: "みょうちょう", romanization: "myouchou", meaning: "tomorrow morning" },

      { kanjis: ["今晩"], hiragana: "こんばん", romanization: "konban", meaning: "tonight" },

      { kanjis: ["昨夜"], hiragana: "ゆうべ", romanization: "yuube", meaning: "last night (the entire night, written)" },
      { kanjis: ["今夜"], hiragana: "こんや", romanization: "konya", meaning: "tonight (the entire night, written)" },
      { kanjis: ["明夜"], hiragana: "みょうや", romanization: "myouya", meaning: "tomorrow night (the entire night, written)" },

      { kanjis: ["日"], hiragana: "ひ", romanization: "hi", meaning: "day", exampleUsages: ["この日 (this day, emphasizing importance)"] },
      { kanjis: ["一昨日"], hiragana: "おととい", romanization: "ototoi", meaning: "the day before yesterday" },
      { kanjis: ["昨日"], hiragana: "きのう", romanization: "kinou", meaning: "yesterday" },
      { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
      { kanjis: ["明日"], hiragana: "あした", romanization: "ashita", meaning: "tomorrow" },
      { kanjis: ["明後日"], hiragana: "あさって", romanization: "asatte", meaning: "the day after tomorrow" },
      { kanjis: ["この間"], hiragana: "このあいだ", romanization: "konoaida", meaning: "some other day" },
      { kanjis: ["初日"], hiragana: "しょにち", romanization: "shonichi", meaning: "the first day" },

      { kanjis: ["今週"], hiragana: "こんしゅう", romanization: "konshuu", meaning: "this week" },
      { kanjis: ["今週末"], hiragana: "こんしゅうまつ", romanization: "konshuumatsu", meaning: "this weekend" },
      { kanjis: ["先週"], hiragana: "せんしゅう", romanization: "senshuu", meaning: "last week" },
      { kanjis: ["前週"], hiragana: "ぜんしゅう", romanization: "zenshuu", meaning: "last week" },
      { kanjis: ["来週"], hiragana: "らいしゅう", romanization: "raishuu", meaning: "next week" },

      { kanjis: ["先月"], hiragana: "せんげつ", romanization: "sengetsu", meaning: "last month" },
      { kanjis: ["今月"], hiragana: "こんげつ", romanization: "kongetsu", meaning: "this month" },
      { kanjis: ["来月"], hiragana: "らいげつ", romanization: "raigetsu", meaning: "next month" },

      { kanjis: ["一昨年"], hiragana: "おととし", romanization: "ototoshi", meaning: "the year before last" },
      { kanjis: ["去年"], hiragana: "きょねん", romanization: "kyonen", meaning: "last year" },
      { kanjis: ["昨年"], hiragana: "さくねん", romanization: "sakunen", meaning: "last year (formal)" },
      { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
      { kanjis: ["来年"], hiragana: "らいねん", romanization: "rainen", meaning: "next year" },
      { kanjis: ["再来年"], hiragana: "さらいねん", romanization: "sarainen", meaning: "the year after next" },

      { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
      { kanjis: ["今期"], hiragana: "こんき", romanization: "konki", meaning: "this session / this term" },
      { kanjis: ["今度"], hiragana: "こんど", romanization: "kondo", meaning: "this time" },
      { kanjis: ["また今度"], hiragana: "またこんど", romanization: "matakondo", meaning: "next time" },
      { kanjis: ["次"], hiragana: "つぎ", romanization: "tsugi", meaning: "next", exampleUsages: ["次のステップ"] },
      { kanjis: ["次回"], hiragana: "じかい", romanization: "jikai", meaning: "next time" },
      { kanjis: ["初めて", "始めて", "甫めて"], hiragana: "はじめて", romanization: "hajimete", meaning: "for the first time" },

      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "previously (root word)" },
      { kanjis: ["以前"], rareKanjis: ["已前"], hiragana: "いぜん", romanization: "izen", meaning: "the past" },

      // indefinite point in time
      // TODO: soon, later, early, recently, already, yet, still, before, afterward, eventually
      { hiragana: "そして", romanization: "soshite", meaning: "and then", exampleUsages: ["...。 そして ..."] },
      { hiragana: "それから", romanization: "sorekara", meaning: "after that", exampleUsages: ["あなたはそれから ..."] },
      { kanjis: ["先に"], rareKanjis: ["曩に"], hiragana: "さきに", romanization: "sakini", meaning: "previously" },
      { hiragana: "かつて", rareKanjis: ["嘗て", "曾て", "曽て", "都て"], romanization: "katsute", meaning: "formerly (formal)", exampleUsages: ["かつては [Clause]"] },
      { kanjis: ["この前"], rareKanjis: ["此の前"], hiragana: "このまえ", romanization: "konomae", meaning: "last time" },

      { kanjis: ["前に"], hiragana: "まえに", romanization: "maeni", meaning: "before xxx", exampleUsages: ["[Noun] の前に ...", "[Verb-る] 前に ..."] },
      { kanjis: ["後"], hiragana: "あと", romanization: "ato", meaning: "afterwards", derivedMeanings: ["(time) left", "behind (locational)"], exampleUsages: ["あとに (after that, formal)", "あとで (after that, informal)", "あと5秒 (5s left)", "あとは (next up)、...", "あと (and also)、..."] },

      { kanjis: ["前もって"], rareKanjis: ["前以て"], hiragana: "まえもって", romanization: "maemotte", meaning: "in advance" },
      { kanjis: ["予め"], hiragana: "あらかじめ", romanization: "arakajime", meaning: "in advance" },
      { kanjis: ["最後"], hiragana: "さいご", romanization: "saigo", meaning: "the end" },
      { kanjis: ["最終"], hiragana: "さいしゅう", romanization: "saishuu", meaning: "the last / final", exampleUsages: ["最終回", "最終調整"] },

      { hiragana: "もう", romanization: "mou", meaning: "already (casual)", exampleUsages: ["もう5年前", "もう宿題終わった (I have already finished my homework)", "もうありません (there is nothing left)"] },
      { hiragana: "すでに", preferredForm: "hiragana", kanjis: ["既に"], rareKanjis: ["已に"], romanization: "sudeni", meaning: "already (formal)" },

      { hiragana: "ずっと", romanization: "zutto", meaning: "the whole time", exampleUsages: ["5年前からずっと [Verb Clause]"] },

      { hiragana: "そろそろ", katakana: "ソロソロ", romanization: "sorosoro", meaning: "soon" },
      { hiragana: "どうしても", rareKanjis: ["如何しても"], romanization: "doushitemo", meaning: "eventually / no matter what" },
      { hiragana: "ようやく", rareKanjis: ["漸く"], romanization: "youyaku", meaning: "finally" },

      // definite duration
      { kanjis: ["二週間", "２週間"], hiragana: "にしゅうかん", romanization: "nishuukan", meaning: "two weeks" },

      // indefinite duration
      // TODO: for a while, since Monday, since 1990, briefly, temporarily, permanently, all day

      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) since", exampleUsages: ["[Noun (time/place)] から [Verb]"] },
      { hiragana: "まで", romanization: "made", meaning: "(introducing termination:) until", exampleUsages: ["[Noun (time/place)] まで [Verb]", "最後まで"] },
      { hiragana: "〇〇から〇〇まで", romanization: "kara, made", meaning: "from (time) to (time)", exampleUsages: ["[Noun (time/place)] から [Noun (time/place)] まで [Verb]"] },

      { hiragana: "まだ", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "still", exampleUsages: ["まだ [Noun]"] },
      { kanjis: ["予て", "兼ねて"], hiragana: "かねて", romanization: "kanete", meaning: "for quite a while" },
      { hiragana: "ずっと", romanization: "zutto", meaning: "(continuously)" },

      // definite frequency
      // TODO: daily, weekly, monthly, annually, every day, twice a week
      { kanjis: ["毎朝"], hiragana: "まいあさ", romanization: "maiasa", meaning: "every morning" },
      { kanjis: ["毎晩"], hiragana: "まいばん", romanization: "maiban", meaning: "every night" },
      { kanjis: ["毎日"], hiragana: "まいにち", romanization: "mainichi", meaning: "every day" },
      { kanjis: ["毎週"], hiragana: "まいしゅう", romanization: "maishuu", meaning: "every week" },
      { kanjis: ["毎月"], hiragana: "まいつき", romanization: "maitsuki", meaning: "every month" },
      { kanjis: ["毎年"], hiragana: "まいとし", romanization: "maitoshi", meaning: "every year" },
      // TODO: 〜に一回

      // indefinite frequency
      // TODO: always, usually, often, sometimes, rarely, seldom, never, occasionally
      /*
      いつも (Itsumo): Always
      たいてい (Taitei): Usually, mostly
      よく (Yoku): Often, frequently
      しばしば (Shibashiba): Frequently, often (slightly formal)
      ときどき (Tokidoki): Sometimes
      たまに (Tamani): Occasionally, once in a while
      めったに...ない (Mettani...nai): Rarely, seldom
      あまり...ません (Amari...masen): Not very often, not much
      ぜんぜん...ません (Zenzen...masen): Never, not at all
      ほとんど...ない (Hotondo...nai): Almost never, hardly
      */
      { kanjis: ["時に"], hiragana: "ときに", romanization: "tokini", meaning: "sometimes (situationally)" },
      { kanjis: ["時々", "時時"], hiragana: "ときどき", romanization: "tokidoki", meaning: "sometimes (regularly)" },
      { kanjis: ["多くの場合"], hiragana: "おおくのばあい", romanization: "ookunobaai", meaning: "in many cases (written)" },
      { hiragana: "いつも", preferredForm: "hiragana", kanjis: ["何時も"], romanization: "itsumo", meaning: "always", exampleUsages: ["{[Noun] は} いつも [Verb / Adj.]"] },
      { kanjis: ["一度も", "１度も"], hiragana: "いちども", romanization: "ichidomo", meaning: "never", exampleUsages: ["ただの一度も [Clause]"] },

      // interrogative point in time
      { hiragana: "いつ", preferredForm: "hiragana", kanjis: ["何時"], romanization: "itsu", meaning: "when" },
      { kanjis: ["何時"], hiragana: "なんじ", romanization: "nanji", meaning: "what hour" },
    );
  }
}
