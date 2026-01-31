import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalChronological(words: JapaneseWord[]) {
  // TODO: treat as nouns?
  if (flashcardSettings.words.functional.chronological.value) {
    words.push(
      // TODO: https://www.sigure.tw/learn-japanese/mix/difference/sorekara-korekara

      // definite point in time
      // TODO: today, tomorrow, yesterday, tonight, now, then, last week, on September 11, in 2008, immediately
      { kanjis: ["時", "刻", "秋"], hiragana: "とき", romanization: "toki", meaning: "at that time", exampleUsages: ["[Verb] 時、", "[Noun] の時、", "[na-Adj.] 時、", "[i-Adj.] 時、"] },
      // TODO: specific year / date

      { kanjis: ["今"], hiragana: "いま", romanization: "ima", meaning: "now" },

      { kanjis: ["今朝"], hiragana: "けさ", romanization: "kesa", meaning: "this morning" },
      { kanjis: ["今朝"], hiragana: "こんちょう", romanization: "konchou", meaning: "this morning" },

      { kanjis: ["日"], hiragana: "ひ", romanization: "hi", meaning: "day" },
      { kanjis: ["この日"], hiragana: "このひ", romanization: "konohi", meaning: "this day (emphasizing importance)" },
      { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
      { kanjis: ["昨日"], hiragana: "きのう", romanization: "kinou", meaning: "yesterday" },
      { kanjis: ["明日"], hiragana: "あした", romanization: "ashita", meaning: "tomorrow" },
      { kanjis: ["この間"], hiragana: "このあいだ", romanization: "konoaida", meaning: "some other day" },
      { kanjis: ["初日"], hiragana: "しょにち", romanization: "shonichi", meaning: "the first day" },

      { kanjis: ["今週"], hiragana: "こんしゅう", romanization: "konshuu", meaning: "this week" },
      { kanjis: ["今週末"], hiragana: "こんしゅうまつ", romanization: "konshuumatsu", meaning: "this weekend" },
      { kanjis: ["先週"], hiragana: "せんしゅう", romanization: "senshuu", meaning: "last week" },
      { kanjis: ["前週"], hiragana: "ぜんしゅう", romanization: "zenshuu", meaning: "last week" },
      { kanjis: ["来週"], hiragana: "らいしゅう", romanization: "raishuu", meaning: "next week" },

      { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
      { kanjis: ["昨年"], hiragana: "さくねん", romanization: "sakunen", meaning: "last year (formal)" },
      { kanjis: ["来年"], hiragana: "らいねん", romanization: "rainen", meaning: "next year" },

      { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
      { kanjis: ["今度"], hiragana: "こんど", romanization: "kondo", meaning: "this time" },
      { kanjis: ["また今度"], hiragana: "またこんど", romanization: "matakondo", meaning: "next time" },
      { kanjis: ["次"], hiragana: "つぎ", romanization: "tsugi", meaning: "next", exampleUsages: ["次のステップ"] },
      { kanjis: ["次回"], hiragana: "じかい", romanization: "jikai", meaning: "next time" },

      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "previously (root word)" },
      { kanjis: ["以前"], rareKanjis: ["已前"], hiragana: "いぜん", romanization: "izen", meaning: "the past" },

      // indefinite point in time
      // TODO: soon, later, early, recently, already, yet, still, before, afterward, eventually
      { hiragana: "そして", romanization: "soshite", meaning: "and then", exampleUsages: ["...。 そして ..."] },
      { hiragana: "それから", romanization: "sorekara", meaning: "after that", exampleUsages: ["...。 それから ...", "あなたはそれから ...？"] },
      { kanjis: ["先に"], rareKanjis: ["曩に"], hiragana: "さきに", romanization: "sakini", meaning: "previously" },
      { kanjis: ["この前"], rareKanjis: ["此の前"], hiragana: "このまえ", romanization: "konomae", meaning: "last time" },

      { kanjis: ["前に"], hiragana: "まえに", romanization: "maeni", meaning: "before xxx", exampleUsages: ["[Noun] の前に ...", "[Verb-る] 前に ..."] },
      { kanjis: ["後で"], hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal)", exampleUsages: ["[Noun] の後で ...", "[Verb-た] 後で ..."] },
      { kanjis: ["後に"], hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal)", exampleUsages: ["[Noun] の後に ...", "[Verb-た] 後に ..."] },

      { kanjis: ["前もって"], rareKanjis: ["前以て"], hiragana: "まえもって", romanization: "maemotte", meaning: "in advance" },
      { kanjis: ["予め"], hiragana: "あらかじめ", romanization: "arakajime", meaning: "in advance" },
      { kanjis: ["最後"], hiragana: "さいご", romanization: "saigo", meaning: "the end" },
      { kanjis: ["最終"], hiragana: "さいしゅう", romanization: "saishuu", meaning: "the last / final", exampleUsages: ["最終回", "最終調整"] },

      { hiragana: "もう", romanization: "mou", meaning: "already / not anymore", exampleUsages: ["もう宿題終わった", "もう [Noun (time)] ...", "[Noun] はもう ...", "もう [Verb]"] },
      { hiragana: "すでに", preferredForm: "hiragana", kanjis: ["既に"], rareKanjis: ["已に"], romanization: "sudeni", meaning: "already" },

      { hiragana: "そろそろ", katakana: "ソロソロ", romanization: "sorosoro", meaning: "soon" },
      { kanjis: ["即"], hiragana: "そく", romanization: "soku", meaning: "at once / immediately" },

      { kanjis: ["晴れ", "晴"], hiragana: "はれ", romanization: "hare", meaning: "good weather", derivedMeanings: ["when the weather is good"] },

      // definite duration
      { kanjis: ["二週間", "２週間"], hiragana: "にしゅうかん", romanization: "nishuukan", meaning: "two weeks", exampleUsages: ["二週間で [Clause]"] },

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

      // indefinite frequency
      // TODO: always, usually, often, sometimes, rarely, seldom, never, occasionally
      { kanjis: ["多くの場合"], hiragana: "おおくのばあい", romanization: "ookunobaai", meaning: "in many cases (written)" },
      { hiragana: "いつも", preferredForm: "hiragana", kanjis: ["何時も"], romanization: "itsumo", meaning: "always", exampleUsages: ["{[Noun] は} いつも [Verb / Adj.]"] },
      { hiragana: "また", preferredForm: "hiragana", kanjis: ["又"], rareKanjis: ["亦", "復"], romanization: "mata", meaning: "again" },
      { hiragana: "ばかり", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "just / freshly (emphasizing the feeling)", exampleUsages: ["2025年に設立されたばかり"] },
      // interrogative point in time
      { hiragana: "いつ", preferredForm: "hiragana", kanjis: ["何時"], romanization: "itsu", meaning: "when" },
      { kanjis: ["何時"], hiragana: "なんじ", romanization: "nanji", meaning: "what hour" },
    );
  }
}
