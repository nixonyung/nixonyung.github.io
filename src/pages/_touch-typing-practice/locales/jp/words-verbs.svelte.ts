import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendVerbs(words: JapaneseWord[]) {
  // TODO: https://www.japanesepod101.com/blog/2020/08/25/japanese-verbs/
  // TODO: https://preply.com/en/blog/basic-japanese-words/

  if (jp.flashcardSettings.enableVerbsActions && jp.flashcardSettings.enableGodanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", meaning: "drink / swallow" },
      { kanjis: ["噛む", "咬む"], rareKanjis: ["嚙む", "嚼む"], hiragana: "かむ", romanization: "kamu", meaning: "bite / chew" },
      { hiragana: "かむ", preferredForm: "hiragana", rareKanjis: ["擤む"], romanization: "kamu", meaning: "blow" },
      { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", meaning: "hear / listen" },
      { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", meaning: "smell" },
      { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", meaning: "say" },
      { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", meaning: "go" },
      { kanjis: ["取る"], hiragana: "とる", romanization: "toru", meaning: "take / grab" },
      { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", meaning: "hold / carry" },
      { kanjis: ["歩く"], hiragana: "あるく", romanization: "aruku", meaning: "walk" },
      { kanjis: ["走る", "奔る", "疾る", "趨る"], hiragana: "はしる", romanization: "hashiru", meaning: "run / rush" },

      { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", meaning: "converse" },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", meaning: "release" },
      { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", meaning: "depart" },

      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", meaning: "read" },
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", meaning: "think / imagine / expect" },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", meaning: "know" },
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", meaning: "learn" },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", meaning: "teach" },

      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", meaning: "use / employ / utilize" },
      { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", meaning: "move / act / shift" },
      { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", meaning: "occur" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", meaning: "inquire" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", meaning: "call / address" },
      { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", meaning: "become / attain" },

      { kanjis: ["親しむ"], hiragana: "したしむ", romanization: "shitashimu", meaning: "befriend" },
      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", meaning: "play / have fun" },

      { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", meaning: "calm down" },
      { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", meaning: "raise" },
      { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", meaning: "vitalize" },
      { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", meaning: "foster" },

      // TODO: use
      // TODO: come
    );
  }

  if (jp.flashcardSettings.enableVerbsIntransitive && jp.flashcardSettings.enableGodanVerbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", meaning: "exist" },

      { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", meaning: "stand up" },
      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", meaning: "rise" },
      { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", meaning: "rise" },

      { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", meaning: "finish" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActions && jp.flashcardSettings.enableIchidanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
      { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },

      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", meaning: "consider / contemplate" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", meaning: "memorize" },

      { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", meaning: "mix" },

      { kanjis: ["離れる"], hiragana: "はなれる", romanization: "hanareru", meaning: "separate / leave" },
      { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", meaning: "cut apart" },
      { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", meaning: "pull apart" },
    );
  }

  if (jp.flashcardSettings.enableVerbsIntransitive && jp.flashcardSettings.enableIchidanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", meaning: "wake up" },
    );
  }

  if (jp.flashcardSettings.enableVerbsIntransitive && jp.flashcardSettings.enableIrregularVerbs) {
    words.splice(
      words.length,
      0, //
      // TODO: kuru (to come), suru (to do)
      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", meaning: "relate" },
    );
  }
}
