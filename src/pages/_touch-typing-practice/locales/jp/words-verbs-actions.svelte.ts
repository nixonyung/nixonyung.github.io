import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: need to categorize?
// Existence/Being: be, exist, belong, represent.
// Bodily Functions: breathe, cough, sleep.
// Communication: say, tell, whisper, ask, inform.
// Motion: go, walk, arrive, fly.
// Creation/Production: make, build, form, create, compose.
// Emotion/Sensation: feel, love, fear, surprise (often stative).

export function appendVerbsActions(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableVerbsActionsBodily) {
    words.push(
      // rest
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", meaning: "wake up", exampleUsages: ["早く起きられる (can wake up early)"] },
      { kanjis: ["寝る"], rareKanjis: ["寐る"], hiragana: "ねる", romanization: "neru", meaning: "sleep" },
      { kanjis: ["眠る", "睡る"], hiragana: "ねむる", romanization: "nemuru", meaning: "sleep" },
      { kanjis: ["休む"], hiragana: "やすむ", romanization: "yasumu", meaning: "rest", derivedMeanings: ["sleep", "have a day off"] },

      // eyes
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", meaning: "see / look" },
      { kanjis: ["泣き出す"], hiragana: "なきだす", romanization: "nakidasu", meaning: "burst into tears" },

      // ears
      { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", meaning: "hear / listen", derivedMeanings: ["ask"] },

      // mouth
      { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", meaning: "eat" },
      { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", meaning: "drink / swallow" },
      { kanjis: ["噛む", "咬む"], rareKanjis: ["嚙む", "嚼む"], hiragana: "かむ", romanization: "kamu", meaning: "bite / chew" },
      { kanjis: ["吹く"], hiragana: "ふく", romanization: "fuku", meaning: "blow" },
      // TODO: scream, shout

      // nose
      { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", meaning: "smell" },

      // muscular
      { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", meaning: "move / act / shift" },
      { kanjis: ["動き出す", "動きだす"], hiragana: "うごきだす", romanization: "ugokidasu", meaning: "start moving" },
      { kanjis: ["着る"], hiragana: "きる", romanization: "kiru", meaning: "wear", exampleUsages: ["服を着る"] },
      { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", meaning: "stand up" },
      { kanjis: ["寄る"], hiragana: "よる", romanization: "yoru", meaning: "lean towards" },
      { kanjis: ["蹴る"], hiragana: "ける", romanization: "keru", meaning: "kick" },

      // feelings
      { kanjis: ["感じ取る", "感じとる"], hiragana: "かんじとる", romanization: "kanjitoru", meaning: "perceive / feel" },

      { kanjis: ["お腹が空く", "お腹がすく"], hiragana: "おなかがすく", romanization: "onakagasuku", meaning: "be hungry" },

      { kanjis: ["驚く"], hiragana: "おどろく", romanization: "odoroku", meaning: "be surprised" },
      { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", meaning: "calm down" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsIntellectual) {
    words.push(
      // input / studying
      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", meaning: "read" },
      // TODO: observe
      { kanjis: ["勉強する"], hiragana: "べんきょうする", romanization: "benkyousuru", meaning: "study", exampleUsages: ["日本語を勉強します"] },
      { kanjis: ["分かる", "解る", "判る", "分る"], hiragana: "わかる", romanization: "wakaru", meaning: "comprehend" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", meaning: "memorize" },
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", meaning: "learn" },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", meaning: "learn / be taught" },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", meaning: "know" },

      // output / recalling
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", meaning: "think / imagine / expect" },
      { kanjis: ["思い出す"], hiragana: "おもいだす", romanization: "omoidasu", meaning: "recall" },
      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", meaning: "consider / contemplate" },
      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", meaning: "be able to" },
      { kanjis: ["決める", "極める"], hiragana: "きめる", katakana: "キメる", romanization: "kimeru", meaning: "determine" },

      // communicative
      { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", meaning: "say" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", meaning: "call / address" },
      { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", meaning: "converse" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", meaning: "inquire" },
      { kanjis: ["教える"], hiragana: "おしえる", romanization: "oshieru", meaning: "teach", derivedMeanings: ["inform"], exampleUsages: ["べんりなフレーズを三つ教えます (teach)", "教えて (please let me know)"] },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsOwnership) {
    words.push(
      { hiragana: "くれる", rareKanjis: ["呉れる"], romanization: "kureru", meaning: "give / let one have" },
      { kanjis: ["譲る"], hiragana: "ゆずる", romanization: "yuzuru", meaning: "hand over" },
      { hiragana: "もらう", preferredForm: "hiragana", kanjis: ["貰う"], romanization: "morau", meaning: "receive" },
      { hiragana: "くださる", preferredForm: "hiragana", kanjis: ["下さる"], romanization: "kudasaru", meaning: "bestow" },

      { kanjis: ["返す", "反す"], hiragana: "かえす", romanization: "kaesu", meaning: "return" },
      { kanjis: ["帰る", "還る"], hiragana: "かえる", romanization: "kaeru", meaning: "return", exampleUsages: ["家に帰る"] },

      { kanjis: ["買う"], hiragana: "かう", romanization: "kau", meaning: "buy", exampleUsages: ["コーラを買う"] },
      { kanjis: ["払う"], rareKanjis: ["掃う"], hiragana: "はらう", romanization: "harau", meaning: "pay" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsTranspositional) {
    words.push(
      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", meaning: "rise" },

      { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", meaning: "go", exampleUsages: ["東京に行く"] },
      { kanjis: ["会う", "逢う", "遭う"], rareKanjis: ["遇う"], hiragana: "あう", romanization: "au", meaning: "meet" },
      { kanjis: ["訪問する"], hiragana: "ほうもんする", romanization: "houmonsuru", meaning: "visit" },

      { kanjis: ["乗り出す"], hiragana: "のりだす", romanization: "noridasu", meaning: "set out" },
      { kanjis: ["来る"], hiragana: "くる", romanization: "kuru", meaning: "come (spatially / temporally)" },
      { kanjis: ["入る"], hiragana: "はいる", romanization: "hairu", meaning: "enter" },
      { kanjis: ["出る"], hiragana: "でる", romanization: "deru", meaning: "leave / exit" },
      { kanjis: ["出かける"], hiragana: "でかける", romanization: "dekakeru", meaning: "go out" },
      { kanjis: ["出て来る", "出てくる"], hiragana: "でてくる", romanization: "detekuru", meaning: "come out (towards speaker)" },
      { kanjis: ["離れる"], hiragana: "はなれる", romanization: "hanareru", meaning: "separate / leave" },
      { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", meaning: "depart" },
      { kanjis: ["通る"], rareKanjis: ["透る", "徹る"], hiragana: "とおる", romanization: "tooru", meaning: "pass through / travel" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsManeuvers) {
    words.push(
      // holding
      { kanjis: ["取る"], hiragana: "とる", romanization: "toru", meaning: "take / grab" },
      { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", meaning: "hold / carry" },
      { kanjis: ["強いる"], hiragana: "しいる", romanization: "shiiru", meaning: "force / press" },
      { kanjis: ["押す"], hiragana: "おす", romanization: "osu", meaning: "push / press down", exampleUsages: ["ボタンを押す"] },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", meaning: "release" },
      { kanjis: ["置く"], hiragana: "おく", romanization: "oku", meaning: "put / place" },

      // rotating
      { kanjis: ["繰る"], hiragana: "くる", romanization: "kuru", meaning: "reel / spin", derivedMeanings: ["turn (pages)"] },

      // attaching
      { hiragana: "つける", preferredForm: "hiragana", kanjis: ["付ける", "着ける"], rareKanjis: ["附ける"], romanization: "tsukeru", meaning: "attach" },
      { hiragana: "つなぐ", preferredForm: "hiragana", kanjis: ["繋ぐ"], romanization: "tsunagu", meaning: "connect / link", exampleUsages: ["手をつなぐ"] },
      { hiragana: "かける", preferredForm: "hiragana", kanjis: ["掛ける", "懸ける"], romanization: "kakeru", meaning: "hang" },

      // inserting
      { kanjis: ["入れる"], rareKanjis: ["容れる", "函れる"], hiragana: "いれる", romanization: "ireru", meaning: "insert", exampleUsages: ["ここにお金を入れる"] },
      { kanjis: ["出す"], hiragana: "だす", romanization: "dasu", meaning: "take out" },
      { kanjis: ["取り出す", "取出す", "取りだす", "とり出す"], hiragana: "とりだす", romanization: "toridasu", meaning: "take out" },
      { kanjis: ["持ち出す", "持出す"], hiragana: "もちだす", romanization: "mochidasu", meaning: "take out" },
      { kanjis: ["引き出す", "引出す", "引きだす"], hiragana: "ひきだす", romanization: "hikidasu", meaning: "pull out" },
      { kanjis: ["抉る", "刳る", "剔る"], hiragana: "えぐる", romanization: "eguru", meaning: "gouge", derivedMeanings: ["turn (pages)"] },

      // separating
      { kanjis: ["割る"], hiragana: "わる", romanization: "waru", meaning: "cut / divide" },
      { kanjis: ["切れる"], hiragana: "きれる", romanization: "kireru", meaning: "break", derivedMeanings: ["wear out"], exampleUsages: ["電池が切れた"] },
      { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", meaning: "cut apart" },
      { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", meaning: "pull apart" },
      { kanjis: ["欠く"], rareKanjis: ["闕く"], hiragana: "かく", romanization: "kaku", meaning: "crack / lack" },
      { kanjis: ["剃る"], hiragana: "そる", romanization: "soru", meaning: "shave" },

      // repetitive
      { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", meaning: "mix" },
      { kanjis: ["擦る", "擂る"], rareKanjis: ["摩る", "磨る"], hiragana: "する", romanization: "suru", meaning: "rub" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsActivities) {
    words.push(
      // generic
      { kanjis: ["働く"], hiragana: "はたらく", romanization: "hataraku", meaning: "work" },
      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", meaning: "play (games / sports)", derivedMeanings: ["have fun"] },
      { kanjis: ["扱う"], hiragana: "あつかう", romanization: "atsukau", meaning: "deal / handle" },
      { kanjis: ["用いる"], hiragana: "もちいる", romanization: "mochiiru", meaning: "use / utilize" },
      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", meaning: "employ / use (as a tool)" },
      { kanjis: ["参加する"], hiragana: "さんかする", romanization: "sankasuru", meaning: "participate" },
      { kanjis: ["過ごす", "過す"], hiragana: "すごす", romanization: "sugosu", meaning: "spend / spend time" },
      { kanjis: ["準備する"], hiragana: "じゅんびする", romanization: "junbisuru", meaning: "prepare" },
      { kanjis: ["暇する"], hiragana: "ひまする", romanization: "himasuru", meaning: "be free / be unoccupied" },
      { kanjis: ["機能する"], hiragana: "きのうする", romanization: "kinousuru", meaning: "function" },
      { kanjis: ["生み出す", "産み出す"], hiragana: "うみだす", romanization: "umidasu", meaning: "produce" },

      // athletic
      { kanjis: ["歩く"], hiragana: "あるく", romanization: "aruku", meaning: "walk" },
      { kanjis: ["走る", "奔る", "疾る", "趨る"], hiragana: "はしる", romanization: "hashiru", meaning: "run / rush" },
      { kanjis: ["駆ける", "駈ける"], hiragana: "かける", romanization: "kakeru", meaning: "dash / race" },

      { kanjis: ["飛ぶ", "跳ぶ"], hiragana: "とぶ", romanization: "tobu", meaning: "fly", exampleUsages: ["空を飛べ", "山の上を飛んだ"] },
      { kanjis: ["飛び出す"], hiragana: "とびだす", romanization: "tobidasu", meaning: "jump out / fly out" },
      { kanjis: ["翔る", "駆ける"], hiragana: "かける", romanization: "kakeru", meaning: "soar" },

      { kanjis: ["泳ぐ"], rareKanjis: ["游ぐ"], hiragana: "およぐ", romanization: "oyogu", meaning: "swim" },

      { kanjis: ["舞う"], hiragana: "まう", romanization: "mau", meaning: "whirling dance", derivedMeanings: ["dance"] },
      { kanjis: ["踊る"], hiragana: "おどる", romanization: "odoru", meaning: "hopping dance", derivedMeanings: ["dance", "leap"] },

      // games
      { kanjis: ["賭ける"], hiragana: "かける", romanization: "kakeru", meaning: "gamble" },
      { kanjis: ["予測する"], hiragana: "よそくする", romanization: "yosokusuru", meaning: "predict" },

      // assessments
      { kanjis: ["合格する"], hiragana: "ごうかくする", romanization: "goukakusuru", meaning: "pass (an exam)" },

      // using tools
      { kanjis: ["書く"], hiragana: "かく", romanization: "kaku", meaning: "write" },
      { kanjis: ["写す"], hiragana: "うつす", romanization: "utsusu", meaning: "copy / reproduce / describe" },
      { kanjis: ["描く", "画く"], hiragana: "えがく", romanization: "egaku", meaning: "draw / paint" },
      { hiragana: "かく", preferredForm: "hiragana", kanjis: ["掻く"], romanization: "kaku", meaning: "scratch" },
      { kanjis: ["刷る", "摺る"], hiragana: "する", romanization: "suru", meaning: "print" },
      { kanjis: ["打ち出す", "打出す", "打ちだす"], hiragana: "うちだす", romanization: "uchidasu", meaning: "emboss / print" },

      { kanjis: ["射る"], hiragana: "いる", romanization: "iru", meaning: "shoot" },

      { kanjis: ["生ける", "活ける"], hiragana: "いける", romanization: "ikeru", meaning: "plant", derivedMeanings: ["arrange flowers"] },
      { kanjis: ["埋ける"], hiragana: "いける", romanization: "ikeru", meaning: "bury" },

      { kanjis: ["焼く"], hiragana: "やく", romanization: "yaku", meaning: "burn", derivedMeanings: ["bake / toast"], exampleUsages: ["ケーキを焼く"] },
      { kanjis: ["鋳る"], hiragana: "いる", romanization: "iru", meaning: "mint" },

      { kanjis: ["住む"], hiragana: "すむ", romanization: "sumu", meaning: "reside" },
      { kanjis: ["住まう"], rareKanjis: ["棲まう"], hiragana: "すまう", romanization: "sumau", meaning: "reside (formal)" },
      { kanjis: ["居住する"], hiragana: "きょじゅうする", romanization: "kyojuusuru", meaning: "reside" },

      { kanjis: ["乗る"], hiragana: "のる", katakana: "ノる", romanization: "noru", meaning: "get on (transportation)", exampleUsages: ["電車に乗った"] },
    );
  }
}
