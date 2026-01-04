import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendTransitiveVerbs(words: JapaneseWord[]) {
  // TODO: https://www.japanesepod101.com/blog/2020/08/25/japanese-verbs/
  // TODO: https://preply.com/en/blog/basic-japanese-words/

  // TODO: what is the object? e.g. person, time, object, event

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableTransitiveVerbs && jp.flashcardSettings.enableGodanVerbs) {
    words.push(
      { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", meaning: "drink / swallow" },
      { kanjis: ["噛む", "咬む"], rareKanjis: ["嚙む", "嚼む"], hiragana: "かむ", romanization: "kamu", meaning: "bite / chew" },
      { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", meaning: "hear / listen", derivedMeanings: ["ask"] },
      { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", meaning: "smell" },
      { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", meaning: "say" },
      { kanjis: ["取る"], hiragana: "とる", romanization: "toru", meaning: "take / grab" },
      { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", meaning: "hold / carry" },
      { kanjis: ["蹴る"], hiragana: "ける", romanization: "keru", meaning: "kick" },

      { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", meaning: "converse" },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", meaning: "release" },
      { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", meaning: "depart" },
      { kanjis: ["消す"], hiragana: "けす", romanization: "kesu", meaning: "erase / turn off" },
      { kanjis: ["置く"], hiragana: "おく", romanization: "oku", meaning: "put / place" },
      { kanjis: ["押す"], hiragana: "おす", romanization: "osu", meaning: "push / press down", exampleUsages: ["ボタンを押す"] },

      { kanjis: ["出す"], hiragana: "だす", romanization: "dasu", meaning: "take out" },
      { kanjis: ["思い出す"], hiragana: "おもいだす", romanization: "omoidasu", meaning: "recall" },
      { kanjis: ["打ち出す", "打出す", "打ちだす"], hiragana: "うちだす", romanization: "uchidasu", meaning: "emboss / print" },
      { kanjis: ["乗り出す"], hiragana: "のりだす", romanization: "noridasu", meaning: "set out" },
      { kanjis: ["引き出す", "引出す", "引きだす"], hiragana: "ひきだす", romanization: "hikidasu", meaning: "pull out" },
      { kanjis: ["生み出す", "産み出す"], hiragana: "うみだす", romanization: "umidasu", meaning: "produce" },
      { kanjis: ["取り出す", "取出す", "取りだす", "とり出す"], hiragana: "とりだす", romanization: "toridasu", meaning: "take out" },
      { kanjis: ["顔を出す", "顔をだす"], hiragana: "かおをだす", romanization: "kaowodasu", meaning: "show up" },
      { kanjis: ["持ち出す", "持出す"], hiragana: "もちだす", romanization: "mochidasu", meaning: "take out" },
      // TODO: xx出す

      { hiragana: "やる", preferredForm: "hiragana", rareKanjis: ["遣る"], romanization: "yaru", meaning: "do" },
      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", meaning: "read" },
      { kanjis: ["書く"], hiragana: "かく", romanization: "kaku", meaning: "write" },
      { kanjis: ["写す"], hiragana: "うつす", romanization: "utsusu", meaning: "copy / reproduce / describe" },
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", meaning: "think / imagine / expect" },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", meaning: "know" },
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", meaning: "learn" },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", meaning: "be taught" },
      { kanjis: ["繰る"], hiragana: "くる", romanization: "kuru", meaning: "reel / spin", derivedMeanings: ["turn (pages)"] },
      { kanjis: ["抉る", "刳る", "剔る"], hiragana: "えぐる", romanization: "eguru", meaning: "gouge", derivedMeanings: ["turn (pages)"] },
      { kanjis: ["含む", "銜む"], hiragana: "ふくむ", romanization: "fukumu", meaning: "contain", exampleUsages: ["A を B に含む (B contains A)"] },

      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", meaning: "employ / use (as a tool)" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", meaning: "inquire" },
      { kanjis: ["扱う"], hiragana: "あつかう", romanization: "atsukau", meaning: "deal / handle" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", meaning: "call / address" },
      { hiragana: "しまう", rareKanjis: ["仕舞う", "終う", "了う", "蔵う"], romanization: "shimau", meaning: "put away", derivedMeanings: ["finish"] },
      { kanjis: ["過ごす", "過す"], hiragana: "すごす", romanization: "sugosu", meaning: "spend / spend time" },
      { kanjis: ["返す", "反す"], hiragana: "かえす", romanization: "kaesu", meaning: "return" },
      { kanjis: ["譲る"], hiragana: "ゆずる", romanization: "yuzuru", meaning: "hand over" },
      { kanjis: ["閉じる"], hiragana: "とじる", romanization: "tojiru", meaning: "close / shut" },
      { hiragana: "もらう", preferredForm: "hiragana", kanjis: ["貰う"], romanization: "morau", meaning: "receive" },
      { hiragana: "くださる", preferredForm: "hiragana", kanjis: ["下さる"], romanization: "kudasaru", meaning: "bestow" },
      { kanjis: ["焼く"], hiragana: "やく", romanization: "yaku", meaning: "burn", derivedMeanings: ["bake / toast"], exampleUsages: ["ケーキを焼く"] },
      { kanjis: ["買う"], hiragana: "かう", romanization: "kau", meaning: "buy", exampleUsages: ["コーラを買う"] },
      { kanjis: ["割る"], hiragana: "わる", romanization: "waru", meaning: "cut / divide" },
      { kanjis: ["描く", "画く"], hiragana: "えがく", romanization: "egaku", meaning: "draw / paint" },
      { hiragana: "かく", preferredForm: "hiragana", kanjis: ["掻く"], romanization: "kaku", meaning: "scratch" },
      { kanjis: ["欠く"], rareKanjis: ["闕く"], hiragana: "かく", romanization: "kaku", meaning: "crack / lack" },
      { kanjis: ["剃る"], hiragana: "そる", romanization: "soru", meaning: "shave" },

      { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", meaning: "raise" },
      { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", meaning: "vitalize" },
      { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", meaning: "foster" },
      { kanjis: ["払う"], rareKanjis: ["掃う"], hiragana: "はらう", romanization: "harau", meaning: "pay" },

      { kanjis: ["感じ取る", "感じとる"], hiragana: "かんじとる", romanization: "kanjitoru", meaning: "perceive / feel" },
      { hiragana: "つなぐ", preferredForm: "hiragana", kanjis: ["繋ぐ"], romanization: "tsunagu", meaning: "connect", exampleUsages: ["手をつなぐ"] },

      { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", meaning: "cut apart" },
      { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", meaning: "pull apart" },

      { kanjis: ["刷る", "摺る"], hiragana: "する", romanization: "suru", meaning: "print" },
      { kanjis: ["擦る", "擂る"], rareKanjis: ["摩る", "磨る"], hiragana: "する", romanization: "suru", meaning: "rub" },

      { kanjis: ["待つ"], rareKanjis: ["俟つ"], hiragana: "まつ", romanization: "matsu", meaning: "wait" },
      { kanjis: ["急ぐ"], hiragana: "いそぐ", romanization: "isogu", meaning: "hurry" },
    );
  }

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableTransitiveVerbs && jp.flashcardSettings.enableIchidanVerbs) {
    words.push(
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
      { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },

      { kanjis: ["用いる"], hiragana: "もちいる", romanization: "mochiiru", meaning: "use / utilize" },
      { hiragana: "くれる", rareKanjis: ["呉れる"], romanization: "kureru", meaning: "give / let one have" },
      { hiragana: "かける", preferredForm: "hiragana", kanjis: ["掛ける", "懸ける"], romanization: "kakeru", meaning: "hang" },
      { kanjis: ["賭ける"], hiragana: "かける", romanization: "kakeru", meaning: "gamble" },

      { kanjis: ["決める", "極める"], hiragana: "きめる", katakana: "キメる", romanization: "kimeru", meaning: "determine" },
      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", meaning: "consider / contemplate" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", meaning: "memorize" },
      { kanjis: ["教える"], hiragana: "おしえる", romanization: "oshieru", meaning: "teach", derivedMeanings: ["inform"], exampleUsages: ["べんりなフレーズを三つ教えます (teach)", "教えて (please let me know)"] },
      { kanjis: ["強いる"], hiragana: "しいる", romanization: "shiiru", meaning: "force / press" },
      { kanjis: ["着る"], hiragana: "きる", romanization: "kiru", meaning: "wear", exampleUsages: ["服を着る"] },
      { kanjis: ["入れる"], rareKanjis: ["容れる", "函れる"], hiragana: "いれる", romanization: "ireru", meaning: "insert", exampleUsages: ["ここにお金を入れる"] },
      { kanjis: ["生ける", "活ける"], hiragana: "いける", romanization: "ikeru", meaning: "plant", derivedMeanings: ["arrange flowers"] },
      { kanjis: ["埋ける"], hiragana: "いける", romanization: "ikeru", meaning: "bury" },
      { kanjis: ["諦める"], hiragana: "あきらめる", romanization: "akirameru", meaning: "give up" },

      { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", meaning: "mix" },

      { kanjis: ["射る"], hiragana: "いる", romanization: "iru", meaning: "shoot" },
      { kanjis: ["鋳る"], hiragana: "いる", romanization: "iru", meaning: "mint" },
    );
  }

  if (jp.flashcardSettings.enableVerbs && jp.flashcardSettings.enableTransitiveVerbs && jp.flashcardSettings.enableIrregularVerbs) {
    words.push(
      // -suru
      { hiragana: "する", preferredForm: "hiragana", rareKanjis: ["為る"], romanization: "suru", meaning: "do / carry out", derivedMeanings: ["choose", "pickpocket"], exampleUsages: ["せールをする (on sale)", "ゲームをする (play a game)", "これにします (choose this)"] },

      { kanjis: ["勉強する"], hiragana: "べんきょうする", romanization: "benkyousuru", meaning: "study", exampleUsages: ["日本語を勉強します"] },
      { kanjis: ["予測する"], hiragana: "よそくする", romanization: "yosokusuru", meaning: "predict" },
      { kanjis: ["準備する"], hiragana: "じゅんびする", romanization: "junbisuru", meaning: "prepare" },
      { kanjis: ["訪問する"], hiragana: "ほうもんする", romanization: "houmonsuru", meaning: "visit" },
    );
  }
}
