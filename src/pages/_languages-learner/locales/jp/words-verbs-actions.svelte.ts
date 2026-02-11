import type { JapaneseVerb, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendVerbsActions(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (flashcardSettings.words.verbs.actions.bodily.value) {
    verbs.push(
      // rest
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "wake up", exampleUsages: ["早く起きられる (can wake up early)"] },
      { kanjis: ["寝る"], rareKanjis: ["寐る"], hiragana: "ねる", romanization: "neru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "go to bed" },
      { kanjis: ["眠る", "睡る"], hiragana: "ねむる", romanization: "nemuru", verbGroup: "Godan", verbIsTransitive: false, meaning: "sleep" },
      { kanjis: ["休む"], hiragana: "やすむ", romanization: "yasumu", verbGroup: "Godan", verbIsTransitive: false, meaning: "rest", derivedMeanings: ["sleep", "have a day off"] },

      // eyes
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "look / see / watch", exampleUsages: ["見て (watch me/this!) (casual)"] },
      { kanjis: ["泣き出す"], hiragana: "なきだす", romanization: "nakidasu", verbGroup: "Godan", verbIsTransitive: false, meaning: "start crying" },

      // ears
      { kanjis: ["聞く", "聴く"], hiragana: "きく", romanization: "kiku", verbGroup: "Godan", verbIsTransitive: true, meaning: "hear / listen", derivedMeanings: ["ask"] },

      // mouth
      { kanjis: ["食べる"], hiragana: "たべる", romanization: "taberu", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "eat" },
      { kanjis: ["飲む", "呑む"], hiragana: "のむ", romanization: "nomu", verbGroup: "Godan", verbIsTransitive: true, meaning: "drink / swallow" },
      { kanjis: ["噛む", "咬む"], rareKanjis: ["嚙む", "嚼む"], hiragana: "かむ", romanization: "kamu", verbGroup: "Godan", verbIsTransitive: true, meaning: "bite / chew" },
      { kanjis: ["吹く"], hiragana: "ふく", romanization: "fuku", verbGroup: "Godan", verbIsTransitive: false, meaning: "blow" },
      { kanjis: ["吸う", "喫う"], hiragana: "すう", romanization: "suu", verbGroup: "Godan", verbIsTransitive: true, meaning: "breathe in / suck", derivedMeanings: ["smoke"] },
      // TODO: scream, shout

      // nose
      { kanjis: ["嗅ぐ"], hiragana: "かぐ", romanization: "kagu", verbGroup: "Godan", verbIsTransitive: true, meaning: "smell" },

      // muscular
      { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", verbGroup: "Godan", verbIsTransitive: false, meaning: "move", derivedMeanings: ["operate"] },
      { kanjis: ["動き出す", "動きだす"], hiragana: "うごきだす", romanization: "ugokidasu", verbGroup: "Godan", verbIsTransitive: false, meaning: "start moving" },
      { kanjis: ["止まる", "留まる", "停まる", "駐まる", "止る", "留る"], hiragana: "とまる", romanization: "tomaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "stop (moving / doing)" },
      { kanjis: ["立つ"], hiragana: "たつ", romanization: "tatsu", verbGroup: "Godan", verbIsTransitive: false, meaning: "stand up" },
      { kanjis: ["座る", "据わる"], rareKanjis: ["坐る"], hiragana: "すわる", romanization: "suwaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "sit" },
      { kanjis: ["寄る"], hiragana: "よる", romanization: "yoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "lean towards" },
      { kanjis: ["蹴る"], hiragana: "ける", romanization: "keru", verbGroup: "Godan", verbIsTransitive: true, meaning: "kick" },

      // feelings
      { kanjis: ["感じ取る", "感じとる"], hiragana: "かんじとる", romanization: "kanjitoru", verbGroup: "Godan", verbIsTransitive: true, meaning: "perceive / feel" },

      { kanjis: ["お腹が空く", "お腹がすく"], hiragana: "おなかがすく", romanization: "onakagasuku", verbGroup: "Godan", verbIsTransitive: false, meaning: "be hungry" },

      { kanjis: ["驚く"], hiragana: "おどろく", romanization: "odoroku", verbGroup: "Godan", verbIsTransitive: false, meaning: "be surprised" },
      { kanjis: ["落ち着く", "落ちつく", "落着く"], rareKanjis: ["落ち付く"], hiragana: "おちつく", romanization: "ochitsuku", verbGroup: "Godan", verbIsTransitive: false, meaning: "calm down" },
    );
  }

  if (flashcardSettings.words.verbs.actions.intellectual.value) {
    verbs.push(
      // knowing
      { hiragana: "わかる", preferredForm: "hiragana", kanjis: ["分かる", "解る", "判る", "分る"], romanization: "wakaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "understand", derivedMeanings: ["be able to"], exampleUsages: ["わかるよ (I understand!) (casual)", "わかりました (I understood) (polite)"] },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", verbGroup: "Godan", verbIsTransitive: true, meaning: "know / acquire", exampleUsages: ["知っている (I know)"] },
      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "can do", derivedMeanings: ["ready"] },
      { kanjis: ["忘れる"], hiragana: "わすれる", romanization: "wasureru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "forget" },

      // learning
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", verbGroup: "Godan", verbIsTransitive: true, meaning: "learn" },
      { kanjis: ["勉強する"], hiragana: "べんきょうする", romanization: "benkyousuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "study", exampleUsages: ["日本語を勉強します"] },
      { kanjis: ["練習する"], hiragana: "れんしゅうする", romanization: "renshuusuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "practice" },
      { kanjis: ["認める"], hiragana: "みとめる", romanization: "mitomeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "recognize" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "memorize" },

      // thinking
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", verbGroup: "Godan", verbIsTransitive: true, meaning: "feel about / consider (emotionally)" },
      { kanjis: ["思い出す"], hiragana: "おもいだす", romanization: "omoidasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "recall" },
      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "consider (logically) / contemplate" },
      { kanjis: ["決める", "極める"], hiragana: "きめる", katakana: "キメる", romanization: "kimeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "determine" },

      // communicative
      { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", verbGroup: "Godan", verbIsTransitive: true, meaning: "say / utter" },
      { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "talk / converse" },
      { hiragana: "しゃべる", kanjis: ["喋る"], romanization: "shaberu", verbGroup: "Godan", verbIsTransitive: true, meaning: "chatter (casual)" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", verbGroup: "Godan", verbIsTransitive: true, meaning: "call / address", derivedMeanings: ["invite"] },
      { kanjis: ["挙げる"], hiragana: "あげる", romanization: "ageru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "propose / suggest", derivedMeanings: ["hold an event"] },
      { kanjis: ["答える"], hiragana: "こたえる", romanization: "kotaeru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "answer / reply" },
      { kanjis: ["語る"], hiragana: "かたる", romanization: "kataru", verbGroup: "Godan", verbIsTransitive: true, meaning: "narrate / tell a story" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", verbGroup: "Godan", verbIsTransitive: true, meaning: "inquire" },
      { kanjis: ["習う"], hiragana: "ならう", romanization: "narau", verbGroup: "Godan", verbIsTransitive: true, meaning: "take lesson / learn from a teacher" },
      { kanjis: ["教える"], hiragana: "おしえる", romanization: "oshieru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "teach", derivedMeanings: ["inform"], exampleUsages: ["便利なフレーズを三つ教えます", "教えて (please let me know)"] },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", verbGroup: "Godan", verbIsTransitive: true, meaning: "be taught / receive instructions" },
    );
  }

  if (flashcardSettings.words.verbs.actions.ownership.value) {
    verbs.push(
      // receiving
      { hiragana: "いる", preferredForm: "hiragana", kanjis: ["要る"], romanization: "iru", verbGroup: "Godan", verbIsTransitive: false, meaning: "want" },
      { hiragana: "くれる", rareKanjis: ["呉れる"], romanization: "kureru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "give to me / us" },
      { hiragana: "くださる", preferredForm: "hiragana", kanjis: ["下さる"], romanization: "kudasaru", verbGroup: "Godan", verbIsTransitive: true, meaning: "bestow me / us (very polite)" },
      { hiragana: "もらう", preferredForm: "hiragana", kanjis: ["貰う"], romanization: "morau", verbGroup: "Godan", verbIsTransitive: true, meaning: "receive" },
      { hiragana: "かかる", preferredForm: "hiragana", kanjis: ["掛かる", "掛る"], rareKanjis: ["懸かる", "懸る"], romanization: "kakaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "take (time/money/resource)", derivedMeanings: ["hang"] },
      { kanjis: ["頼む"], rareKanjis: ["恃む", "憑む"], hiragana: "たのむ", romanization: "tanomu", verbGroup: "Godan", verbIsTransitive: true, meaning: "request", derivedMeanings: ["rely"], exampleUsages: ["生活費を親に頼っている"] },
      { kanjis: ["買う"], hiragana: "かう", romanization: "kau", verbGroup: "Godan", verbIsTransitive: true, meaning: "buy", exampleUsages: ["コーラを買う"] },
      { kanjis: ["借りる"], hiragana: "かりる", romanization: "kariru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "borrow" },

      // giving
      { kanjis: ["与える"], hiragana: "あたえる", romanization: "ataeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "give / assign (polite)" },
      { hiragana: "なくす", preferredForm: "hiragana", kanjis: ["無くす"], romanization: "nakusu", verbGroup: "Godan", verbIsTransitive: true, meaning: "lose something" },
      { kanjis: ["返す", "反す"], hiragana: "かえす", romanization: "kaesu", verbGroup: "Godan", verbIsTransitive: true, meaning: "give back" },
      { kanjis: ["譲る"], hiragana: "ゆずる", romanization: "yuzuru", verbGroup: "Godan", verbIsTransitive: true, meaning: "concede" },
      { kanjis: ["売る"], hiragana: "うる", romanization: "uru", verbGroup: "Godan", verbIsTransitive: true, meaning: "sell" },
      { kanjis: ["払う"], rareKanjis: ["掃う"], hiragana: "はらう", romanization: "harau", verbGroup: "Godan", verbIsTransitive: true, meaning: "pay" },
      { kanjis: ["貸す", "藉す"], hiragana: "かす", romanization: "kasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "lend" },
    );
  }

  if (flashcardSettings.words.verbs.actions.transpositional.value) {
    verbs.push(
      { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", verbGroup: "Godan", verbIsTransitive: false, meaning: "go", exampleUsages: ["東京に行く"] },
      { kanjis: ["渡す"], hiragana: "わたす", romanization: "watasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "go across (a river)", derivedMeanings: ["hand over"] },
      { kanjis: ["渡る"], hiragana: "わたる", romanization: "wataru", verbGroup: "Godan", verbIsTransitive: false, meaning: "go across (a river)" },
      { kanjis: ["会う", "逢う", "遭う"], rareKanjis: ["遇う"], hiragana: "あう", romanization: "au", verbGroup: "Godan", verbIsTransitive: false, meaning: "meet" },
      { kanjis: ["訪問する"], hiragana: "ほうもんする", romanization: "houmonsuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "visit" },
      { kanjis: ["入る"], hiragana: "はいる", romanization: "hairu", verbGroup: "Godan", verbIsTransitive: false, meaning: "enter" },
      { kanjis: ["通る"], rareKanjis: ["透る", "徹る"], hiragana: "とおる", romanization: "tooru", verbGroup: "Godan", verbIsTransitive: false, meaning: "pass through / go along" },
      { kanjis: ["通う"], hiragana: "かよう", romanization: "kayou", verbGroup: "Godan", verbIsTransitive: false, meaning: "regularly commute to" },
      { kanjis: ["戻る"], hiragana: "もどる", romanization: "modoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "return / go back" },
      { kanjis: ["帰る", "還る"], hiragana: "かえる", romanization: "kaeru", verbGroup: "Godan", verbIsTransitive: false, meaning: "return home", exampleUsages: ["家に帰る"] },
      { kanjis: ["行き来する"], hiragana: "ゆききする", romanization: "yukikisuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "come and go" },

      { kanjis: ["出る"], hiragana: "でる", romanization: "deru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "leave / exit" },
      { kanjis: ["出かける"], hiragana: "でかける", romanization: "dekakeru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "start going out (for doing something)" },
      { kanjis: ["出て来る", "出てくる"], hiragana: "でてくる", romanization: "detekuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "come out (towards speaker)" },
      { kanjis: ["乗り出す"], hiragana: "のりだす", romanization: "noridasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "set out / set sail", derivedMeanings: ["start a new venture"] },

      { kanjis: ["上げる"], hiragana: "あげる", romanization: "ageru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "raise" },
      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "rise" },
      { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "rise", derivedMeanings: ["swell"] },
      { kanjis: ["上る", "登る", "昇る"], hiragana: "のぼる", romanization: "noboru", verbGroup: "Godan", verbIsTransitive: false, meaning: "climb / ascend" },
      { kanjis: ["降る"], hiragana: "ふる", romanization: "furu", verbGroup: "Godan", verbIsTransitive: false, meaning: "fall" },
      { kanjis: ["降りる", "下りる"], hiragana: "おりる", romanization: "oriru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "come down / descend" },
    );
  }

  if (flashcardSettings.words.verbs.actions.maneuvers.value) {
    verbs.push(
      // holding
      { kanjis: ["取る"], hiragana: "とる", romanization: "toru", verbGroup: "Godan", verbIsTransitive: true, meaning: "take / grab" },
      { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", verbGroup: "Godan", verbIsTransitive: true, meaning: "hold / carry" },
      { kanjis: ["強いる"], hiragana: "しいる", romanization: "shiiru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "force / press" },
      { kanjis: ["押す"], hiragana: "おす", romanization: "osu", verbGroup: "Godan", verbIsTransitive: true, meaning: "push / press down", exampleUsages: ["ボタンを押す"] },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "release" },
      { kanjis: ["置く"], hiragana: "おく", romanization: "oku", verbGroup: "Godan", verbIsTransitive: true, meaning: "put / place" },
      { kanjis: ["戻す"], hiragana: "もどす", romanization: "modosu", verbGroup: "Godan", verbIsTransitive: true, meaning: "put back / restore" },

      // rotating
      { kanjis: ["繰る"], hiragana: "くる", romanization: "kuru", verbGroup: "Godan", verbIsTransitive: true, meaning: "reel / spin", derivedMeanings: ["turn (pages)"] },

      // attaching
      { hiragana: "つける", preferredForm: "hiragana", kanjis: ["付ける", "着ける"], rareKanjis: ["附ける"], romanization: "tsukeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "attach" },
      { hiragana: "つなぐ", preferredForm: "hiragana", kanjis: ["繋ぐ"], romanization: "tsunagu", verbGroup: "Godan", verbIsTransitive: true, meaning: "connect / link", exampleUsages: ["手をつなぐ"] },
      { hiragana: "かける", preferredForm: "hiragana", kanjis: ["掛ける", "懸ける"], romanization: "kakeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "hang" },
      { kanjis: ["張る", "貼る"], hiragana: "はる", romanization: "haru", verbGroup: "Godan", verbIsTransitive: true, meaning: "stick / paste" },
      { kanjis: ["並べる"], rareKanjis: ["双べる"], hiragana: "ならべる", romanization: "naraberu", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "line up" },
      { kanjis: ["並ぶ"], rareKanjis: ["列ぶ", "双ぶ"], hiragana: "ならぶ", romanization: "narabu", verbGroup: "Godan", verbIsTransitive: false, meaning: "line up" },

      // inserting
      { kanjis: ["入れる"], rareKanjis: ["容れる", "函れる"], hiragana: "いれる", romanization: "ireru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "put in / insert", derivedMeanings: ["accept"], exampleUsages: ["ここにお金を入れる"] },
      { kanjis: ["出す"], hiragana: "だす", romanization: "dasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "take out" },
      { kanjis: ["取り出す", "取出す", "取りだす", "とり出す"], hiragana: "とりだす", romanization: "toridasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "take out" },
      { kanjis: ["持ち出す", "持出す"], hiragana: "もちだす", romanization: "mochidasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "take out" },
      { kanjis: ["引く", "曳く", "牽く"], hiragana: "ひく", romanization: "hiku", verbGroup: "Godan", verbIsTransitive: true, meaning: "pull" },
      { kanjis: ["引き出す", "引出す", "引きだす"], hiragana: "ひきだす", romanization: "hikidasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "pull out" },
      { kanjis: ["抉る", "刳る", "剔る"], hiragana: "えぐる", romanization: "eguru", verbGroup: "Godan", verbIsTransitive: true, meaning: "gouge" },

      // separating
      { kanjis: ["離す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "separate" },
      { kanjis: ["離れる"], hiragana: "はなれる", romanization: "hanareru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "be separated", derivedMeanings: ["leave"] },
      { kanjis: ["割る"], hiragana: "わる", romanization: "waru", verbGroup: "Godan", verbIsTransitive: true, meaning: "break / smash" },
      { kanjis: ["切る"], hiragana: "きる", romanization: "kiru", verbGroup: "Godan", verbIsTransitive: true, meaning: "cut / slice" },
      { kanjis: ["切れる"], hiragana: "きれる", romanization: "kireru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "break / crack", derivedMeanings: ["wear out"], exampleUsages: ["電池が切れた"] },
      { kanjis: ["切り離す", "切離す"], rareKanjis: ["切り放す", "切放す"], hiragana: "きりはなす", romanization: "kirihanasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "cut apart" },
      { kanjis: ["引き離す", "引離す"], hiragana: "ひきはなす", romanization: "hikihanasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "pull apart" },
      { kanjis: ["欠く"], rareKanjis: ["闕く"], hiragana: "かく", romanization: "kaku", verbGroup: "Godan", verbIsTransitive: true, meaning: "crack / lack" },
      { kanjis: ["剃る"], hiragana: "そる", romanization: "soru", verbGroup: "Godan", verbIsTransitive: true, meaning: "shave" },

      // repetitive
      { hiragana: "こする", preferredForm: "hiragana", kanjis: ["擦る"], rareKanjis: ["錯る"], romanization: "kosuru", verbGroup: "Godan", verbIsTransitive: true, meaning: "rub" },
      { kanjis: ["擦る", "擂る"], rareKanjis: ["摩る", "磨る"], hiragana: "する", romanization: "suru", verbGroup: "Godan", verbIsTransitive: true, meaning: "rub" },
      { kanjis: ["交える", "混える", "雑える"], hiragana: "まじえる", romanization: "majieru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "mix" },
      { kanjis: ["梳く"], hiragana: "すく", romanization: "suku", verbGroup: "Godan", verbIsTransitive: true, meaning: "comb" },
      { kanjis: ["洗う"], hiragana: "あらう", romanization: "arau", verbGroup: "Godan", verbIsTransitive: true, meaning: "wash / cleanse" },
      { kanjis: ["磨く"], rareKanjis: ["研く", "琢く"], hiragana: "みがく", romanization: "migaku", verbGroup: "Godan", verbIsTransitive: true, meaning: "polish", derivedMeanings: ["brush (teeth)", "refine (a skill)"], exampleUsages: ["歯を磨く", "技を磨く"] },
      { kanjis: ["鳴る"], hiragana: "なる", romanization: "naru", verbGroup: "Godan", verbIsTransitive: false, meaning: "make sound / ring / echo" },
      { kanjis: ["鳴く", "啼く"], hiragana: "なく", romanization: "naku", verbGroup: "Godan", verbIsTransitive: false, meaning: "make sound like an animal" },

      // transformative
      { kanjis: ["直る"], hiragana: "なおる", romanization: "naoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "put right / sit properly", derivedMeanings: ["fix / repair"] },
      { kanjis: ["曲がる", "曲る"], hiragana: "まがる", romanization: "magaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "bend", derivedMeanings: ["fix / repair"] },
      { kanjis: ["立ち直る", "立ちなおる", "立直る"], hiragana: "たちなおる", romanization: "tachinaoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "regain one's footing" },
      { kanjis: ["開き直る"], hiragana: "ひらきなおる", romanization: "hirakinaoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "be defiant", derivedMeanings: ["fight back"] },

      { kanjis: ["開ける", "空ける", "明ける"], hiragana: "あける", romanization: "akeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "open / make space", exampleUsages: ["ドアを開ける (slide the door)", "かべに穴を開ける (I made a hole in the wall)"] },
      { kanjis: ["開く", "空く", "明く"], hiragana: "あく", romanization: "aku", verbGroup: "Godan", verbIsTransitive: false, meaning: "open / make space" },
      { kanjis: ["開く"], hiragana: "ひらく", romanization: "hiraku", verbGroup: "Godan", verbIsTransitive: true, meaning: "open / unfold", exampleUsages: ["ドアを開く (turn the door)"] },
      { kanjis: ["開ける"], hiragana: "ひらける", romanization: "hirakeru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "open / unfold", derivedMeanings: ["open for business"] },
      { kanjis: ["閉じる"], hiragana: "とじる", romanization: "tojiru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "close / shut" },
      { kanjis: ["閉める"], hiragana: "しめる", romanization: "shimeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "close / shut" },
      { kanjis: ["閉まる", "締まる"], rareKanjis: ["緊まる"], hiragana: "しまる", romanization: "shimaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "be closed / be shut" },

      { kanjis: ["締める"], hiragana: "しめる", romanization: "shimeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "tie / fasten" },
      { kanjis: ["弾く"], hiragana: "はじく", romanization: "hajiku", verbGroup: "Godan", verbIsTransitive: true, meaning: "flick", derivedMeanings: ["snap", "repel", "pluck strings"] },
    );
  }

  if (flashcardSettings.words.verbs.actions.activities.value) {
    verbs.push(
      // generic
      { kanjis: ["試す"], rareKanjis: ["験す"], hiragana: "ためす", romanization: "tamesu", verbGroup: "Godan", verbIsTransitive: true, meaning: "try (casual)" },
      { kanjis: ["試みる"], hiragana: "こころみる", romanization: "kokoromiru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "try (formal)" },
      { kanjis: ["見せる"], hiragana: "みせる", romanization: "miseru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "show / display" },

      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", verbGroup: "Godan", verbIsTransitive: false, meaning: "play (games / sports)", derivedMeanings: ["have fun"] },
      { kanjis: ["働く"], hiragana: "はたらく", romanization: "hataraku", verbGroup: "Godan", verbIsTransitive: false, meaning: "work" },
      { kanjis: ["勤める", "務める"], hiragana: "つとめる", romanization: "tsutomeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "work for / be employed at" },
      { kanjis: ["扱う"], hiragana: "あつかう", romanization: "atsukau", verbGroup: "Godan", verbIsTransitive: true, meaning: "deal / handle" },
      { kanjis: ["用いる"], hiragana: "もちいる", romanization: "mochiiru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "use / utilize" },
      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", verbGroup: "Godan", verbIsTransitive: true, meaning: "employ / use (as a tool)" },
      { kanjis: ["参加する"], hiragana: "さんかする", romanization: "sankasuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "participate" },
      { kanjis: ["過ごす", "過す"], hiragana: "すごす", romanization: "sugosu", verbGroup: "Godan", verbIsTransitive: true, meaning: "spend / spend time" },
      { kanjis: ["準備する"], hiragana: "じゅんびする", romanization: "junbisuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "prepare" },
      { kanjis: ["暇する"], hiragana: "ひまする", romanization: "himasuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "be free / be unoccupied" },
      { kanjis: ["機能する"], hiragana: "きのうする", romanization: "kinousuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "function" },
      { kanjis: ["作る", "造る", "創る"], hiragana: "つくる", romanization: "tsukuru", verbGroup: "Godan", verbIsTransitive: true, meaning: "make / create / produce" },
      { kanjis: ["生み出す", "産み出す"], hiragana: "うみだす", romanization: "umidasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "produce" },
      { kanjis: ["惹く"], hiragana: "ひく", romanization: "hiku", verbGroup: "Godan", verbIsTransitive: true, meaning: "draw attention" },

      // athletic
      { kanjis: ["歩く"], hiragana: "あるく", romanization: "aruku", verbGroup: "Godan", verbIsTransitive: false, meaning: "walk" },
      { kanjis: ["走る", "奔る", "疾る", "趨る"], hiragana: "はしる", romanization: "hashiru", verbGroup: "Godan", verbIsTransitive: false, meaning: "run / rush" },
      { kanjis: ["駆ける", "駈ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "dash / race" },

      { kanjis: ["飛ぶ", "跳ぶ"], hiragana: "とぶ", romanization: "tobu", verbGroup: "Godan", verbIsTransitive: false, meaning: "fly", exampleUsages: ["空を飛べ", "山の上を飛んだ"] },
      { kanjis: ["飛び出す"], hiragana: "とびだす", romanization: "tobidasu", verbGroup: "Godan", verbIsTransitive: false, meaning: "jump out / fly out" },
      { kanjis: ["翔る", "駆ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "Godan", verbIsTransitive: false, meaning: "soar" },

      { kanjis: ["泳ぐ"], rareKanjis: ["游ぐ"], hiragana: "およぐ", romanization: "oyogu", verbGroup: "Godan", verbIsTransitive: false, meaning: "swim" },

      { kanjis: ["舞う"], hiragana: "まう", romanization: "mau", verbGroup: "Godan", verbIsTransitive: false, meaning: "whirling dance", derivedMeanings: ["dance"] },
      { kanjis: ["踊る"], hiragana: "おどる", romanization: "odoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "hopping dance", derivedMeanings: ["dance", "leap"] },

      // artistic
      { kanjis: ["歌う", "唄う", "詠う"], rareKanjis: ["唱う"], hiragana: "うたう", romanization: "utau", verbGroup: "Godan", verbIsTransitive: true, meaning: "sing" },

      // games
      { kanjis: ["賭ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "gamble" },
      { kanjis: ["予測する"], hiragana: "よそくする", romanization: "yosokusuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "predict" },

      // assessments
      { kanjis: ["合格する"], hiragana: "ごうかくする", romanization: "goukakusuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "pass (an exam)" },

      // using tools
      { kanjis: ["着る"], hiragana: "きる", romanization: "kiru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "wear (tops)", exampleUsages: ["服を着る"] },
      { kanjis: ["履く", "穿く"], rareKanjis: ["佩く", "帯く"], hiragana: "はく", romanization: "haku", verbGroup: "Godan", verbIsTransitive: true, meaning: "wear (pants)" },
      { kanjis: ["脱ぐ"], hiragana: "ぬぐ", romanization: "nugu", verbGroup: "Godan", verbIsTransitive: true, meaning: "take off (clothes)" },

      { kanjis: ["浴びる"], hiragana: "あびる", romanization: "abiru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "bathe" },

      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", verbGroup: "Godan", verbIsTransitive: true, meaning: "read" },
      { kanjis: ["書く"], hiragana: "かく", romanization: "kaku", verbGroup: "Godan", verbIsTransitive: true, meaning: "write" },
      { kanjis: ["写す"], hiragana: "うつす", romanization: "utsusu", verbGroup: "Godan", verbIsTransitive: true, meaning: "copy / reproduce / describe" },
      { kanjis: ["描く", "画く"], hiragana: "えがく", romanization: "egaku", verbGroup: "Godan", verbIsTransitive: true, meaning: "draw / paint" },
      { hiragana: "かく", preferredForm: "hiragana", kanjis: ["掻く"], romanization: "kaku", verbGroup: "Godan", verbIsTransitive: true, meaning: "scratch" },
      { kanjis: ["刷る", "摺る"], hiragana: "する", romanization: "suru", verbGroup: "Godan", verbIsTransitive: true, meaning: "print" },
      { kanjis: ["打ち出す", "打出す", "打ちだす"], hiragana: "うちだす", romanization: "uchidasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "emboss / print" },

      { kanjis: ["射る"], hiragana: "いる", romanization: "iru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "shoot" },

      { kanjis: ["生ける", "活ける"], hiragana: "いける", romanization: "ikeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "plant", derivedMeanings: ["arrange flowers"] },
      { kanjis: ["埋ける"], hiragana: "いける", romanization: "ikeru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "bury" },

      { kanjis: ["焼く"], hiragana: "やく", romanization: "yaku", verbGroup: "Godan", verbIsTransitive: true, meaning: "burn", derivedMeanings: ["bake / toast"], exampleUsages: ["ケーキを焼く"] },
      { kanjis: ["鋳る"], hiragana: "いる", romanization: "iru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "mint" },

      { kanjis: ["住む"], hiragana: "すむ", romanization: "sumu", verbGroup: "Godan", verbIsTransitive: false, meaning: "reside" },
      { kanjis: ["住まう"], rareKanjis: ["棲まう"], hiragana: "すまう", romanization: "sumau", verbGroup: "Godan", verbIsTransitive: false, meaning: "reside (formal)" },
      { kanjis: ["居住する"], hiragana: "きょじゅうする", romanization: "kyojuusuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "reside" },

      { kanjis: ["乗る"], hiragana: "のる", katakana: "ノる", romanization: "noru", verbGroup: "Godan", verbIsTransitive: false, meaning: "get on (transportation)", exampleUsages: ["電車に乗った"] },

      { kanjis: ["撮る", "録る"], hiragana: "とる", romanization: "toru", verbGroup: "Godan", verbIsTransitive: true, meaning: "take (a photo) / film" },

      { kanjis: ["貯める"], hiragana: "ためる", romanization: "tameru", verbGroup: "Ichidan", verbIsTransitive: true, meaning: "save money" },
      { kanjis: ["貯まる"], hiragana: "たまる", romanization: "tamaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "accumulate / grow on its own" },
      { kanjis: ["貯金する"], hiragana: "ちょきんする", romanization: "chokinsuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "save money" },
      { kanjis: ["貯蔵する"], hiragana: "ちょぞうする", romanization: "chozousuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "store" },

      // (misc.)
      { kanjis: ["歓迎する"], hiragana: "かんげいする", romanization: "kangeisuru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "welcome" },

      { kanjis: ["生む", "産む"], hiragana: "うむ", romanization: "umu", verbGroup: "Godan", verbIsTransitive: true, meaning: "give birth / lay (eggs)" },
      { kanjis: ["生まれる", "産まれる"], hiragana: "うまれる", romanization: "umareru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "be born" },
    );
  }

  for (const verb of verbs) {
    if (verb.verbGroup === "Godan" && !flashcardSettings.enableGodanVerbs.value) continue;
    if (verb.verbGroup === "Ichidan" && !flashcardSettings.enableIchidanVerbs.value) continue;
    if (verb.verbGroup === "Irregular" && !flashcardSettings.enableIrregularVerbs.value) continue;

    if (verb.verbIsTransitive && !flashcardSettings.enableTransitiveVerbs.value) continue;
    if (!verb.verbIsTransitive && !flashcardSettings.enableIntransitiveVerbs.value) continue;

    words.push(verb);
  }
}
