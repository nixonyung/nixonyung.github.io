import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendIntransitiveVerbs(words: JapaneseWord[]) {
  // TODO: https://www.japanesepod101.com/blog/2020/08/25/japanese-verbs/
  // TODO: https://preply.com/en/blog/basic-japanese-words/

  // TODO: volitional verbs

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableIntransitiveVerbs && jp.flashcardSettings.enableGodanVerbs) {
    words.splice(
      words.length,
      0, //
      { hiragana: "いる", preferredForm: "hiragana", rareKanjis: ["居る"], romanization: "iru", meaning: "exist (for living things)" },
      { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", meaning: "exist (for non-living things)" },

      { kanjis: ["暮らす", "暮す"], hiragana: "くらす", romanization: "kurasu", meaning: "live / get along" },
      { kanjis: ["死ぬ"], hiragana: "しぬ", romanization: "shinu", meaning: "die" },
      { kanjis: ["お腹が空く", "お腹がすく"], hiragana: "おなかがすく", romanization: "onakagasuku", meaning: "be hungry" },
      { kanjis: ["吹く"], hiragana: "ふく", romanization: "fuku", meaning: "blow" },
      { kanjis: ["眠る", "睡る"], hiragana: "ねむる", romanization: "nemuru", meaning: "sleep" },

      { kanjis: ["分かる", "解る", "判る", "分る"], hiragana: "わかる", romanization: "wakaru", meaning: "comprehend" },
      { kanjis: ["会う", "逢う", "遭う"], rareKanjis: ["遇う"], hiragana: "あう", romanization: "au", meaning: "meet" },
      { kanjis: ["帰る", "還る"], hiragana: "かえる", romanization: "kaeru", meaning: "go back", exampleUsages: ["家に帰る"] },
      { kanjis: ["乗る"], hiragana: "のる", katakana: "ノる", romanization: "noru", meaning: "get on (transportation)", exampleUsages: ["電車に乗った"] },
      { kanjis: ["待つ"], rareKanjis: ["俟つ"], hiragana: "まつ", romanization: "matsu", meaning: "wait" },

      { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", meaning: "stand up" },
      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", meaning: "rise" },
      { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", meaning: "rise" },
      { kanjis: ["住まう"], rareKanjis: ["棲まう"], hiragana: "すまう", romanization: "sumau", meaning: "reside" },
      { kanjis: ["始まる"], hiragana: "はじまる", romanization: "hajimaru", meaning: "begin", exampleUsages: ["で始まる"] },
      { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", meaning: "finish", exampleUsages: ["で終わる"] },

      { kanjis: ["飛び出す"], hiragana: "とびだす", romanization: "tobidasu", meaning: "jump out / fly out" },

      { kanjis: ["寄る"], hiragana: "よる", romanization: "yoru", meaning: "lean towards" },
      { kanjis: ["入る"], hiragana: "はいる", romanization: "hairu", meaning: "enter" },
      { kanjis: ["当たる", "当る", "中る", "中たる"], hiragana: "あたる", romanization: "ataru", meaning: "hit (not miss)" },
      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", meaning: "play (games / sports)" },

      { kanjis: ["急ぐ"], hiragana: "いそぐ", romanization: "isogu", meaning: "hurry" },

      { kanjis: ["働く"], hiragana: "はたらく", romanization: "hataraku", meaning: "work" },
      { kanjis: ["頑張る"], hiragana: "がんばる", romanization: "ganbaru", meaning: "persist / keep up" },
    );
  }

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableIntransitiveVerbs && jp.flashcardSettings.enableIchidanVerbs) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", meaning: "wake up", exampleUsages: ["早く起きられる (can wake up early)"] },
      { kanjis: ["寝る"], rareKanjis: ["寐る"], hiragana: "ねる", romanization: "neru", meaning: "sleep" },

      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", meaning: "be able to" },
      { kanjis: ["出かける"], hiragana: "でかける", romanization: "dekakeru", meaning: "go out" },
      { kanjis: ["諦める"], hiragana: "あきらめる", romanization: "akirameru", meaning: "give up" },

      { kanjis: ["似る"], hiragana: "にる", romanization: "niru", meaning: "be alike" },

      { kanjis: ["外れる"], hiragana: "はずれる", romanization: "hazureru", meaning: "miss (not hit)" },
    );
  }

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableIntransitiveVerbs && jp.flashcardSettings.enableIrregularVerbs) {
    words.splice(
      words.length,
      0, //
      // -suru
      { kanjis: ["合格する"], hiragana: "ごうかくする", romanization: "goukakusuru", meaning: "pass (an exam)" },
      { kanjis: ["機能する"], hiragana: "きのうする", romanization: "kinousuru", meaning: "function" },
      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", meaning: "relate" },
      { kanjis: ["反する"], hiragana: "はんする", romanization: "hansuru", meaning: "oppose", exampleUsages: ["意に反する (against one's will)", "予測に反する"] },
      { kanjis: ["成功する"], hiragana: "せいこうする", romanization: "seikousuru", meaning: "succeed", exampleUsages: ["ビジネスで成功する"] },
      { kanjis: ["大当たりする", "大当りする"], hiragana: "おおあたりする", romanization: "ooatarisuru", meaning: "win big / jackpot" },

      // -kuru
      // TODO: kuru (to come)
    );
  }
}
