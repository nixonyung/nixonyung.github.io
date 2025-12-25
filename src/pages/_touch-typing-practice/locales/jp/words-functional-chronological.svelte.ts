import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendFunctionalChronological(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableFunctionalChronological) {
    words.splice(
      words.length,
      0, //
      // TODO: https://www.sigure.tw/learn-japanese/mix/difference/sorekara-korekara

      // definite point in time
      // TODO: today, tomorrow, yesterday, tonight, now, then, last week, on September 11, in 2008, immediately
      { kanjis: ["時", "刻", "秋"], hiragana: "とき", romanization: "toki", meaning: "at that time", exampleUsages: ["[Verb] 時、", "[Noun] の時、", "[na-Adj.] 時、", "[i-Adj.] 時、"] },

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
      { kanjis: ["最後まで"], hiragana: "さいごまで", romanization: "saigomade", meaning: "till the end", exampleUsages: ["最後まで [Verb]"] },

      { hiragana: "もう", romanization: "mou", meaning: "already / not anymore", exampleUsages: ["もう [Noun (time)] ...", "[Noun] はもう ...", "もう [Verb]"] },
      { hiragana: "すでに", preferredForm: "hiragana", kanjis: ["既に"], rareKanjis: ["已に"], romanization: "sudeni", meaning: "already" },

      { hiragana: "そろそろ", katakana: "ソロソロ", romanization: "sorosoro", meaning: "soon" },

      // duration
      // TODO: for an hour, for a while, since Monday, since 1990, briefly, temporarily, permanently, all day
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) since", exampleUsages: ["[Noun (time/place)] から [Verb]"] },
      { hiragana: "まで", romanization: "made", meaning: "(introducing termination:) until", exampleUsages: ["[Noun (time/place)] まで [Verb]"] },
      { hiragana: "〇〇から〇〇まで", romanization: "kara, made", meaning: "from (time) to (time)", exampleUsages: ["[Noun (time/place)] から [Noun (time/place)] まで [Verb]"] },

      { hiragana: "まだ", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "still", exampleUsages: ["まだ [Noun]"] },
      { kanjis: ["予て", "兼ねて"], hiragana: "かねて", romanization: "kanete", meaning: "for quite a while" },
      { hiragana: "ずっと", romanization: "zutto", meaning: "(continuously)" },

      // definite frequency
      // TODO: daily, weekly, monthly, annually, every day, twice a week

      // indefinite frequency
      // TODO: always, usually, often, sometimes, rarely, seldom, never, occasionally
      { hiragana: "いつも", preferredForm: "hiragana", kanjis: ["何時も"], romanization: "itsumo", meaning: "always", exampleUsages: ["{[Noun] は} いつも [Verb / Adj.]"] },
      { kanjis: ["多くの場合"], hiragana: "おおくのばあい", romanization: "ookunobaai", meaning: "in many cases (written)" },

      // interrogative point in time
      { hiragana: "いつ", preferredForm: "hiragana", kanjis: ["何時"], romanization: "itsu", meaning: "when" },
      { kanjis: ["何時"], hiragana: "なんじ", romanization: "nanji", meaning: "which hour" },
    );
  }
}
