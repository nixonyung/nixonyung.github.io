import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendVerbs(words: JapaneseWord[]) {
  // TODO: https://www.japanesepod101.com/blog/2020/08/25/japanese-verbs/
  // TODO: https://preply.com/en/blog/basic-japanese-words/

  // TODO: what is the object? e.g. person, time, object, event

  if (jp.flashcardSettings.enableVerbsTransitive && jp.flashcardSettings.enableGodanVerbs) {
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
      { kanjis: ["来る"], hiragana: "くる", romanization: "kuru", meaning: "come (spatially / temporally)" },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", meaning: "release" },
      { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", meaning: "depart" },
      { kanjis: ["消す"], hiragana: "けす", romanization: "kesu", meaning: "erase / turn off" },

      { hiragana: "やる", preferredForm: "hiragana", rareKanjis: ["遣る"], romanization: "yaru", meaning: "do" },
      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", meaning: "read" },
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", meaning: "think / imagine / expect" },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", meaning: "know" },
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", meaning: "learn" },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", meaning: "teach" },

      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", meaning: "use / employ / utilize" },
      { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", meaning: "move / act / shift" },
      { kanjis: ["通る"], rareKanjis: ["透る", "徹る"], hiragana: "とおる", romanization: "tooru", meaning: "pass through / travel" },
      { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", meaning: "occur" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", meaning: "inquire" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", meaning: "call / address" },
      { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", meaning: "become / attain" },
      { kanjis: ["過ごす", "過す"], hiragana: "すごす", romanization: "sugosu", meaning: "spend / spend time" },
      { kanjis: ["返す", "反す"], hiragana: "かえす", romanization: "kaesu", meaning: "return" },
      { hiragana: "もらう", preferredForm: "hiragana", kanjis: ["貰う"], romanization: "morau", meaning: "receive" },
      { hiragana: "いける", katakana: "イケる", romanization: "ikeru", meaning: "go well" },

      { kanjis: ["親しむ"], hiragana: "したしむ", romanization: "shitashimu", meaning: "befriend" },
      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", meaning: "play / have fun" },

      { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", meaning: "calm down" },
      { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", meaning: "raise" },
      { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", meaning: "vitalize" },
      { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", meaning: "foster" },
      { kanjis: ["払う"], rareKanjis: ["掃う"], hiragana: "はらう", romanization: "harau", meaning: "pay" },
    );
  }

  if (jp.flashcardSettings.enableVerbsTransitive && jp.flashcardSettings.enableIchidanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
      { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },

      { kanjis: ["決める", "極める"], hiragana: "きめる", katakana: "キメる", romanization: "kimeru", meaning: "determine" },
      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", meaning: "consider / contemplate" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", meaning: "memorize" },

      { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", meaning: "mix" },

      { kanjis: ["射る"], hiragana: "いる", romanization: "iru", meaning: "shoot" },
      { kanjis: ["鋳る"], hiragana: "いる", romanization: "iru", meaning: "mint" },

      { kanjis: ["離れる"], hiragana: "はなれる", romanization: "hanareru", meaning: "separate / leave" },
      { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", meaning: "cut apart" },
      { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", meaning: "pull apart" },
    );
  }

  if (jp.flashcardSettings.enableVerbsIntransitive && jp.flashcardSettings.enableGodanVerbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", meaning: "exist (for objects)" },
      { hiragana: "いる", preferredForm: "hiragana", rareKanjis: ["居る"], romanization: "iru", meaning: "exist (for living things)" },
      { kanjis: ["暮らす", "暮す"], hiragana: "くらす", romanization: "kurasu", meaning: "live / get along" },
      { kanjis: ["死ぬ"], hiragana: "しぬ", romanization: "shinu", meaning: "die" },
      { kanjis: ["お腹が空く", "お腹がすく"], hiragana: "おなかがすく", romanization: "onakagasuku", meaning: "be hungry" },

      { kanjis: ["分かる", "解る", "判る", "分る"], hiragana: "わかる", romanization: "wakaru", meaning: "comprehend" },
      { kanjis: ["会う", "逢う", "遭う"], rareKanjis: ["遇う"], hiragana: "あう", romanization: "au", meaning: "meet" },
      { kanjis: ["帰る", "還る"], hiragana: "かえる", romanization: "kaeru", meaning: "go back" },
      { kanjis: ["待つ"], rareKanjis: ["俟つ"], hiragana: "まつ", romanization: "matsu", meaning: "wait" },

      { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", meaning: "stand up" },
      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", meaning: "rise" },
      { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", meaning: "rise" },
      { kanjis: ["住まう"], rareKanjis: ["棲まう"], hiragana: "すまう", romanization: "sumau", meaning: "reside" },

      { kanjis: ["入る"], hiragana: "いる", romanization: "iru", meaning: "enter" },
      { kanjis: ["当たる", "当る", "中る", "中たる"], hiragana: "あたる", romanization: "ataru", meaning: "hit (not miss)" },
      { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", meaning: "finish" },
      { kanjis: ["急ぐ"], hiragana: "いそぐ", romanization: "isogu", meaning: "hurry" },
    );
  }

  if (jp.flashcardSettings.enableVerbsIntransitive && jp.flashcardSettings.enableIchidanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", meaning: "wake up" },
      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", meaning: "be able to" },

      { kanjis: ["諦める"], hiragana: "あきらめる", romanization: "akirameru", meaning: "give up" },
      { kanjis: ["外れる"], hiragana: "はずれる", romanization: "hazureru", meaning: "miss (not hit)" },
    );
  }

  if (jp.flashcardSettings.enableVerbsIntransitive && jp.flashcardSettings.enableIrregularVerbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "する", preferredForm: "hiragana", rareKanjis: ["為る"], romanization: "suru", meaning: "do / carry out" },
      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", meaning: "relate" },

      // TODO: kuru (to come)
    );
  }
}
