import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendIntransitiveVerbs(words: JapaneseWord[]) {
  // TODO: https://www.japanesepod101.com/blog/2020/08/25/japanese-verbs/
  // TODO: https://preply.com/en/blog/basic-japanese-words/

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableIntransitiveVerbs && jp.flashcardSettings.enableGodanVerbs) {
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

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableIntransitiveVerbs && jp.flashcardSettings.enableIchidanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", meaning: "wake up" },
      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", meaning: "be able to" },

      { kanjis: ["諦める"], hiragana: "あきらめる", romanization: "akirameru", meaning: "give up" },
      { kanjis: ["外れる"], hiragana: "はずれる", romanization: "hazureru", meaning: "miss (not hit)" },

      { kanjis: ["似る"], hiragana: "にる", romanization: "niru", meaning: "be alike" },
    );
  }

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableIntransitiveVerbs && jp.flashcardSettings.enableIrregularVerbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "する", preferredForm: "hiragana", rareKanjis: ["為る"], romanization: "suru", meaning: "do / carry out" },
      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", meaning: "relate" },

      // TODO: kuru (to come)
    );
  }
}
