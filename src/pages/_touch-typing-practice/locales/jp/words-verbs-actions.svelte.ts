import type { JapaneseVerb, JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

// TODO: need to categorize?
// Existence/Being: be, exist, belong, represent.
// Bodily Functions: breathe, cough, sleep.
// Communication: say, tell, whisper, ask, inform.
// Motion: go, walk, arrive, fly.
// Creation/Production: make, build, form, create, compose.
// Emotion/Sensation: feel, love, fear, surprise (often stative).

export function appendVerbsActions(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (jp.flashcardSettings.enableVerbsActionsBodily) {
    verbs.push(
      // rest
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "wake up", exampleUsages: ["早く起きられる (can wake up early)"] },
      { kanjis: ["寝る"], rareKanjis: ["寐る"], hiragana: "ねる", romanization: "neru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "sleep" },
      { kanjis: ["眠る", "睡る"], hiragana: "ねむる", romanization: "nemuru", verbGroup: "godan", verbIsTransitive: false, meaning: "sleep" },
      { kanjis: ["休む"], hiragana: "やすむ", romanization: "yasumu", verbGroup: "godan", verbIsTransitive: false, meaning: "rest", derivedMeanings: ["sleep", "have a day off"] },

      // eyes
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "see / look" },
      { kanjis: ["泣き出す"], hiragana: "なきだす", romanization: "nakidasu", verbGroup: "godan", verbIsTransitive: false, meaning: "burst into tears" },

      // ears
      { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", verbGroup: "godan", verbIsTransitive: true, meaning: "hear / listen", derivedMeanings: ["ask"] },

      // mouth
      { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", verbGroup: "ichidan", verbIsTransitive: true, meaning: "eat" },
      { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", verbGroup: "godan", verbIsTransitive: true, meaning: "drink / swallow" },
      { kanjis: ["噛む", "咬む"], rareKanjis: ["嚙む", "嚼む"], hiragana: "かむ", romanization: "kamu", verbGroup: "godan", verbIsTransitive: true, meaning: "bite / chew" },
      { kanjis: ["吹く"], hiragana: "ふく", romanization: "fuku", verbGroup: "godan", verbIsTransitive: false, meaning: "blow" },
      // TODO: scream, shout

      // nose
      { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", verbGroup: "godan", verbIsTransitive: true, meaning: "smell" },

      // muscular
      { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", verbGroup: "godan", verbIsTransitive: false, meaning: "move / act / shift" },
      { kanjis: ["動き出す", "動きだす"], hiragana: "うごきだす", romanization: "ugokidasu", verbGroup: "godan", verbIsTransitive: false, meaning: "start moving" },
      { kanjis: ["着る"], hiragana: "きる", romanization: "kiru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "wear", exampleUsages: ["服を着る"] },
      { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", verbGroup: "godan", verbIsTransitive: false, meaning: "stand up" },
      { kanjis: ["寄る"], hiragana: "よる", romanization: "yoru", verbGroup: "godan", verbIsTransitive: false, meaning: "lean towards" },
      { kanjis: ["蹴る"], hiragana: "ける", romanization: "keru", verbGroup: "godan", verbIsTransitive: true, meaning: "kick" },

      // feelings
      { kanjis: ["感じ取る", "感じとる"], hiragana: "かんじとる", romanization: "kanjitoru", verbGroup: "godan", verbIsTransitive: true, meaning: "perceive / feel" },

      { kanjis: ["お腹が空く", "お腹がすく"], hiragana: "おなかがすく", romanization: "onakagasuku", verbGroup: "godan", verbIsTransitive: false, meaning: "be hungry" },

      { kanjis: ["驚く"], hiragana: "おどろく", romanization: "odoroku", verbGroup: "godan", verbIsTransitive: false, meaning: "be surprised" },
      { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", verbGroup: "godan", verbIsTransitive: false, meaning: "calm down" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsIntellectual) {
    verbs.push(
      // input / studying
      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", verbGroup: "godan", verbIsTransitive: true, meaning: "read" },
      // TODO: observe
      { kanjis: ["勉強する"], hiragana: "べんきょうする", romanization: "benkyousuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "study", exampleUsages: ["日本語を勉強します"] },
      { hiragana: "わかる", preferredForm: "hiragana", kanjis: ["分かる", "解る", "判る", "分る"], romanization: "wakaru", verbGroup: "godan", verbIsTransitive: false, meaning: "comprehend" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "memorize" },
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", verbGroup: "godan", verbIsTransitive: true, meaning: "learn" },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", verbGroup: "godan", verbIsTransitive: true, meaning: "learn / be taught" },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", verbGroup: "godan", verbIsTransitive: true, meaning: "know" },

      // output / recalling
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", verbGroup: "godan", verbIsTransitive: true, meaning: "think / imagine / expect" },
      { kanjis: ["思い出す"], hiragana: "おもいだす", romanization: "omoidasu", verbGroup: "godan", verbIsTransitive: true, meaning: "recall" },
      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "consider / contemplate" },
      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "be able to" },
      { kanjis: ["決める", "極める"], hiragana: "きめる", katakana: "キメる", romanization: "kimeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "determine" },

      // communicative
      { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", verbGroup: "godan", verbIsTransitive: true, meaning: "say" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", verbGroup: "godan", verbIsTransitive: true, meaning: "call / address" },
      { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "converse" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", verbGroup: "godan", verbIsTransitive: true, meaning: "inquire" },
      { kanjis: ["教える"], hiragana: "おしえる", romanization: "oshieru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "teach", derivedMeanings: ["inform"], exampleUsages: ["べんりなフレーズを三つ教えます (teach)", "教えて (please let me know)"] },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsOwnership) {
    verbs.push(
      { hiragana: "くれる", rareKanjis: ["呉れる"], romanization: "kureru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "give / let one have" },
      { kanjis: ["譲る"], hiragana: "ゆずる", romanization: "yuzuru", verbGroup: "godan", verbIsTransitive: true, meaning: "hand over" },
      { hiragana: "もらう", preferredForm: "hiragana", kanjis: ["貰う"], romanization: "morau", verbGroup: "godan", verbIsTransitive: true, meaning: "receive" },
      { hiragana: "くださる", preferredForm: "hiragana", kanjis: ["下さる"], romanization: "kudasaru", verbGroup: "godan", verbIsTransitive: true, meaning: "bestow" },

      { kanjis: ["返す", "反す"], hiragana: "かえす", romanization: "kaesu", verbGroup: "godan", verbIsTransitive: true, meaning: "return" },
      { kanjis: ["帰る", "還る"], hiragana: "かえる", romanization: "kaeru", verbGroup: "godan", verbIsTransitive: false, meaning: "return", exampleUsages: ["家に帰る"] },
      { kanjis: ["頼む"], rareKanjis: ["恃む", "憑む"], hiragana: "たのむ", romanization: "tanomu", verbGroup: "godan", verbIsTransitive: true, meaning: "depend", derivedMeanings: ["request"], exampleUsages: ["生活費を親に頼っている"] },

      { kanjis: ["買う"], hiragana: "かう", romanization: "kau", verbGroup: "godan", verbIsTransitive: true, meaning: "buy", exampleUsages: ["コーラを買う"] },
      { kanjis: ["払う"], rareKanjis: ["掃う"], hiragana: "はらう", romanization: "harau", verbGroup: "godan", verbIsTransitive: true, meaning: "pay" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsTranspositional) {
    verbs.push(
      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", verbGroup: "godan", verbIsTransitive: false, meaning: "rise" },

      { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", verbGroup: "godan", verbIsTransitive: false, meaning: "go", exampleUsages: ["東京に行く"] },
      { kanjis: ["会う", "逢う", "遭う"], rareKanjis: ["遇う"], hiragana: "あう", romanization: "au", verbGroup: "godan", verbIsTransitive: false, meaning: "meet" },
      { kanjis: ["訪問する"], hiragana: "ほうもんする", romanization: "houmonsuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "visit" },

      { kanjis: ["乗り出す"], hiragana: "のりだす", romanization: "noridasu", verbGroup: "godan", verbIsTransitive: true, meaning: "set out" },
      { kanjis: ["入る"], hiragana: "はいる", romanization: "hairu", verbGroup: "godan", verbIsTransitive: false, meaning: "enter" },
      { kanjis: ["出る"], hiragana: "でる", romanization: "deru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "leave / exit" },
      { kanjis: ["出かける"], hiragana: "でかける", romanization: "dekakeru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "go out" },
      { kanjis: ["出て来る", "出てくる"], hiragana: "でてくる", romanization: "detekuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "come out (towards speaker)" },
      { kanjis: ["通る"], rareKanjis: ["透る", "徹る"], hiragana: "とおる", romanization: "tooru", verbGroup: "godan", verbIsTransitive: false, meaning: "pass through / travel" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsManeuvers) {
    verbs.push(
      // holding
      { kanjis: ["取る"], hiragana: "とる", romanization: "toru", verbGroup: "godan", verbIsTransitive: true, meaning: "take / grab" },
      { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", verbGroup: "godan", verbIsTransitive: true, meaning: "hold / carry" },
      { kanjis: ["強いる"], hiragana: "しいる", romanization: "shiiru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "force / press" },
      { kanjis: ["押す"], hiragana: "おす", romanization: "osu", verbGroup: "godan", verbIsTransitive: true, meaning: "push / press down", exampleUsages: ["ボタンを押す"] },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "release" },
      { kanjis: ["置く"], hiragana: "おく", romanization: "oku", verbGroup: "godan", verbIsTransitive: true, meaning: "put / place" },

      // rotating
      { kanjis: ["繰る"], hiragana: "くる", romanization: "kuru", verbGroup: "godan", verbIsTransitive: true, meaning: "reel / spin", derivedMeanings: ["turn (pages)"] },

      // attaching
      { hiragana: "つける", preferredForm: "hiragana", kanjis: ["付ける", "着ける"], rareKanjis: ["附ける"], romanization: "tsukeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "attach" },
      { hiragana: "つなぐ", preferredForm: "hiragana", kanjis: ["繋ぐ"], romanization: "tsunagu", verbGroup: "godan", verbIsTransitive: true, meaning: "connect / link", exampleUsages: ["手をつなぐ"] },
      { hiragana: "かける", preferredForm: "hiragana", kanjis: ["掛ける", "懸ける"], romanization: "kakeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "hang" },

      // inserting
      { kanjis: ["入れる"], rareKanjis: ["容れる", "函れる"], hiragana: "いれる", romanization: "ireru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "put in / insert", derivedMeanings: ["accept"], exampleUsages: ["ここにお金を入れる"] },
      { kanjis: ["出す"], hiragana: "だす", romanization: "dasu", verbGroup: "godan", verbIsTransitive: true, meaning: "take out" },
      { kanjis: ["取り出す", "取出す", "取りだす", "とり出す"], hiragana: "とりだす", romanization: "toridasu", verbGroup: "godan", verbIsTransitive: true, meaning: "take out" },
      { kanjis: ["持ち出す", "持出す"], hiragana: "もちだす", romanization: "mochidasu", verbGroup: "godan", verbIsTransitive: true, meaning: "take out" },
      { kanjis: ["引き出す", "引出す", "引きだす"], hiragana: "ひきだす", romanization: "hikidasu", verbGroup: "godan", verbIsTransitive: true, meaning: "pull out" },
      { kanjis: ["抉る", "刳る", "剔る"], hiragana: "えぐる", romanization: "eguru", verbGroup: "godan", verbIsTransitive: true, meaning: "gouge" },

      // separating
      { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "separate" },
      { kanjis: ["離れる"], hiragana: "はなれる", romanization: "hanareru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "be separated", derivedMeanings: ["leave"] },
      { kanjis: ["割る"], hiragana: "わる", romanization: "waru", verbGroup: "godan", verbIsTransitive: true, meaning: "cut / divide" },
      { kanjis: ["切れる"], hiragana: "きれる", romanization: "kireru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "break", derivedMeanings: ["wear out"], exampleUsages: ["電池が切れた"] },
      { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "cut apart" },
      { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "pull apart" },
      { kanjis: ["欠く"], rareKanjis: ["闕く"], hiragana: "かく", romanization: "kaku", verbGroup: "godan", verbIsTransitive: true, meaning: "crack / lack" },
      { kanjis: ["剃る"], hiragana: "そる", romanization: "soru", verbGroup: "godan", verbIsTransitive: true, meaning: "shave" },

      // repetitive
      { hiragana: "こする", preferredForm: "hiragana", kanjis: ["擦る"], rareKanjis: ["錯る"], romanization: "kosuru", verbGroup: "godan", verbIsTransitive: true, meaning: "rub" },
      { kanjis: ["擦る", "擂る"], rareKanjis: ["摩る", "磨る"], hiragana: "する", romanization: "suru", verbGroup: "godan", verbIsTransitive: true, meaning: "rub" },
      { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "mix" },
    );
  }

  if (jp.flashcardSettings.enableVerbsActionsActivities) {
    verbs.push(
      // generic
      { kanjis: ["働く"], hiragana: "はたらく", romanization: "hataraku", verbGroup: "godan", verbIsTransitive: false, meaning: "work" },
      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", verbGroup: "godan", verbIsTransitive: false, meaning: "play (games / sports)", derivedMeanings: ["have fun"] },
      { kanjis: ["扱う"], hiragana: "あつかう", romanization: "atsukau", verbGroup: "godan", verbIsTransitive: true, meaning: "deal / handle" },
      { kanjis: ["用いる"], hiragana: "もちいる", romanization: "mochiiru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "use / utilize" },
      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", verbGroup: "godan", verbIsTransitive: true, meaning: "employ / use (as a tool)" },
      { kanjis: ["参加する"], hiragana: "さんかする", romanization: "sankasuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "participate" },
      { kanjis: ["過ごす", "過す"], hiragana: "すごす", romanization: "sugosu", verbGroup: "godan", verbIsTransitive: true, meaning: "spend / spend time" },
      { kanjis: ["準備する"], hiragana: "じゅんびする", romanization: "junbisuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "prepare" },
      { kanjis: ["暇する"], hiragana: "ひまする", romanization: "himasuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "be free / be unoccupied" },
      { kanjis: ["機能する"], hiragana: "きのうする", romanization: "kinousuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "function" },
      { kanjis: ["生み出す", "産み出す"], hiragana: "うみだす", romanization: "umidasu", verbGroup: "godan", verbIsTransitive: true, meaning: "produce" },

      // athletic
      { kanjis: ["歩く"], hiragana: "あるく", romanization: "aruku", verbGroup: "godan", verbIsTransitive: false, meaning: "walk" },
      { kanjis: ["走る", "奔る", "疾る", "趨る"], hiragana: "はしる", romanization: "hashiru", verbGroup: "godan", verbIsTransitive: false, meaning: "run / rush" },
      { kanjis: ["駆ける", "駈ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "dash / race" },

      { kanjis: ["飛ぶ", "跳ぶ"], hiragana: "とぶ", romanization: "tobu", verbGroup: "godan", verbIsTransitive: false, meaning: "fly", exampleUsages: ["空を飛べ", "山の上を飛んだ"] },
      { kanjis: ["飛び出す"], hiragana: "とびだす", romanization: "tobidasu", verbGroup: "godan", verbIsTransitive: false, meaning: "jump out / fly out" },
      { kanjis: ["翔る", "駆ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "godan", verbIsTransitive: false, meaning: "soar" },

      { kanjis: ["泳ぐ"], rareKanjis: ["游ぐ"], hiragana: "およぐ", romanization: "oyogu", verbGroup: "godan", verbIsTransitive: false, meaning: "swim" },

      { kanjis: ["舞う"], hiragana: "まう", romanization: "mau", verbGroup: "godan", verbIsTransitive: false, meaning: "whirling dance", derivedMeanings: ["dance"] },
      { kanjis: ["踊る"], hiragana: "おどる", romanization: "odoru", verbGroup: "godan", verbIsTransitive: false, meaning: "hopping dance", derivedMeanings: ["dance", "leap"] },

      // games
      { kanjis: ["賭ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "gamble" },
      { kanjis: ["予測する"], hiragana: "よそくする", romanization: "yosokusuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "predict" },

      // assessments
      { kanjis: ["合格する"], hiragana: "ごうかくする", romanization: "goukakusuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "pass (an exam)" },

      // using tools
      { kanjis: ["書く"], hiragana: "かく", romanization: "kaku", verbGroup: "godan", verbIsTransitive: true, meaning: "write" },
      { kanjis: ["写す"], hiragana: "うつす", romanization: "utsusu", verbGroup: "godan", verbIsTransitive: true, meaning: "copy / reproduce / describe" },
      { kanjis: ["描く", "画く"], hiragana: "えがく", romanization: "egaku", verbGroup: "godan", verbIsTransitive: true, meaning: "draw / paint" },
      { hiragana: "かく", preferredForm: "hiragana", kanjis: ["掻く"], romanization: "kaku", verbGroup: "godan", verbIsTransitive: true, meaning: "scratch" },
      { kanjis: ["刷る", "摺る"], hiragana: "する", romanization: "suru", verbGroup: "godan", verbIsTransitive: true, meaning: "print" },
      { kanjis: ["打ち出す", "打出す", "打ちだす"], hiragana: "うちだす", romanization: "uchidasu", verbGroup: "godan", verbIsTransitive: true, meaning: "emboss / print" },

      { kanjis: ["射る"], hiragana: "いる", romanization: "iru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "shoot" },

      { kanjis: ["生ける", "活ける"], hiragana: "いける", romanization: "ikeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "plant", derivedMeanings: ["arrange flowers"] },
      { kanjis: ["埋ける"], hiragana: "いける", romanization: "ikeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "bury" },

      { kanjis: ["焼く"], hiragana: "やく", romanization: "yaku", verbGroup: "godan", verbIsTransitive: true, meaning: "burn", derivedMeanings: ["bake / toast"], exampleUsages: ["ケーキを焼く"] },
      { kanjis: ["鋳る"], hiragana: "いる", romanization: "iru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "mint" },

      { kanjis: ["住む"], hiragana: "すむ", romanization: "sumu", verbGroup: "godan", verbIsTransitive: false, meaning: "reside" },
      { kanjis: ["住まう"], rareKanjis: ["棲まう"], hiragana: "すまう", romanization: "sumau", verbGroup: "godan", verbIsTransitive: false, meaning: "reside (formal)" },
      { kanjis: ["居住する"], hiragana: "きょじゅうする", romanization: "kyojuusuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "reside" },

      { kanjis: ["乗る"], hiragana: "のる", katakana: "ノる", romanization: "noru", verbGroup: "godan", verbIsTransitive: false, meaning: "get on (transportation)", exampleUsages: ["電車に乗った"] },
    );
  }

  for (const { kanjis, rareKanjis, hiragana, katakana, exampleUsages, preferredForm, romanization, meaning, derivedMeanings, question, answer, verbGroup, verbIsTransitive } of verbs) {
    if (((jp.flashcardSettings.enableGodanVerbs && verbGroup === "godan") || (jp.flashcardSettings.enableIchidanVerbs && verbGroup === "ichidan") || (jp.flashcardSettings.enableIrregularVerbs && verbGroup === "irregular")) && ((jp.flashcardSettings.enableTransitiveVerbs && verbIsTransitive) || (jp.flashcardSettings.enableIntransitiveVerbs && !verbIsTransitive))) {
      words.push({ kanjis, rareKanjis, hiragana, katakana, exampleUsages, preferredForm, romanization, meaning, derivedMeanings, question, answer });
    }
  }
}
