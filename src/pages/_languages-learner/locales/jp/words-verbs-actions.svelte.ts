import type { JapaneseVerb, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

// TODO: need to categorize?
// Existence/Being: be, exist, belong, represent.
// Bodily Functions: breathe, cough, sleep.
// Communication: say, tell, whisper, ask, inform.
// Motion: go, walk, arrive, fly.
// Creation/Production: make, build, form, create, compose.
// Emotion/Sensation: feel, love, fear, surprise (often stative).

export function appendVerbsActions(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (flashcardSettings.words.verbs.actions.bodily.value) {
    verbs.push(
      // rest
      { kanjis: ["生きる"], rareKanjis: ["活きる"], hiragana: "いきる", romanization: "ikiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "be alive" },
      { kanjis: ["起きる"], hiragana: "おきる", romanization: "okiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "wake up", exampleUsages: ["早く起きられる (can wake up early)"] },
      { kanjis: ["寝る"], rareKanjis: ["寐る"], hiragana: "ねる", romanization: "neru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "go to bed" },
      { kanjis: ["眠る", "睡る"], hiragana: "ねむる", romanization: "nemuru", verbGroup: "godan", verbIsTransitive: false, meaning: "sleep" },
      { kanjis: ["休む"], hiragana: "やすむ", romanization: "yasumu", verbGroup: "godan", verbIsTransitive: false, meaning: "rest", derivedMeanings: ["sleep", "have a day off"] },

      // eyes
      { kanjis: ["見る", "観る", "視る"], hiragana: "みる", romanization: "miru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "look / see / watch", exampleUsages: ["見て (watch me/this!) (casual)"] },
      { kanjis: ["泣き出す"], hiragana: "なきだす", romanization: "nakidasu", verbGroup: "godan", verbIsTransitive: false, meaning: "start crying" },

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
      { kanjis: ["動く"], hiragana: "うごく", romanization: "ugoku", verbGroup: "godan", verbIsTransitive: false, meaning: "move", derivedMeanings: ["operate"] },
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

  if (flashcardSettings.words.verbs.actions.intellectual.value) {
    verbs.push(
      // knowing
      { hiragana: "わかる", preferredForm: "hiragana", kanjis: ["分かる", "解る", "判る", "分る"], romanization: "wakaru", verbGroup: "godan", verbIsTransitive: false, meaning: "understand", derivedMeanings: ["be able to"], exampleUsages: ["わかるよ (I understand!) (casual)", "わかりました (I understood) (polite)"] },
      { kanjis: ["知る", "識る"], hiragana: "しる", romanization: "shiru", verbGroup: "godan", verbIsTransitive: true, meaning: "know / acquire", exampleUsages: ["知っている (I know)"] },
      { kanjis: ["出来る"], hiragana: "できる", romanization: "dekiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "can do", derivedMeanings: ["ready"] },

      // learning
      { kanjis: ["学ぶ"], hiragana: "まなぶ", romanization: "manabu", verbGroup: "godan", verbIsTransitive: true, meaning: "learn" },
      { kanjis: ["教わる"], hiragana: "おそわる", romanization: "osowaru", verbGroup: "godan", verbIsTransitive: true, meaning: "be taught" },
      { kanjis: ["勉強する"], hiragana: "べんきょうする", romanization: "benkyousuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "study", exampleUsages: ["日本語を勉強します"] },
      { kanjis: ["認める"], hiragana: "みとめる", romanization: "mitomeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "recognize" },
      { kanjis: ["覚える"], rareKanjis: ["憶える"], hiragana: "おぼえる", romanization: "oboeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "memorize" },

      // thinking
      { kanjis: ["思う", "想う"], rareKanjis: ["憶う", "念う"], hiragana: "おもう", romanization: "omou", verbGroup: "godan", verbIsTransitive: true, meaning: "feel about / consider (emotionally)" },
      { kanjis: ["思い出す"], hiragana: "おもいだす", romanization: "omoidasu", verbGroup: "godan", verbIsTransitive: true, meaning: "recall" },
      { kanjis: ["考える", "勘える", "稽える"], hiragana: "かんがえる", romanization: "kangaeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "consider (logically) / contemplate" },
      { kanjis: ["決める", "極める"], hiragana: "きめる", katakana: "キメる", romanization: "kimeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "determine" },

      // communicative
      { kanjis: ["言う", "云う", "謂う"], hiragana: "いう", romanization: "iu", verbGroup: "godan", verbIsTransitive: true, meaning: "say / utter" },
      { kanjis: ["話す"], rareKanjis: ["咄す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "talk / converse" },
      { hiragana: "しゃべる", kanjis: ["喋る"], romanization: "shaberu", verbGroup: "godan", verbIsTransitive: true, meaning: "chatter (casual)" },
      { kanjis: ["呼ぶ"], rareKanjis: ["喚ぶ"], hiragana: "よぶ", romanization: "yobu", verbGroup: "godan", verbIsTransitive: true, meaning: "call / address" },
      { kanjis: ["語る"], hiragana: "かたる", romanization: "kataru", verbGroup: "godan", verbIsTransitive: true, meaning: "narrate / tell a story" },
      { kanjis: ["伺う"], hiragana: "うかがう", romanization: "ukagau", verbGroup: "godan", verbIsTransitive: true, meaning: "inquire" },
      { kanjis: ["教える"], hiragana: "おしえる", romanization: "oshieru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "teach", derivedMeanings: ["inform"], exampleUsages: ["便利なフレーズを三つ教えます", "教えて (please let me know)"] },
    );
  }

  if (flashcardSettings.words.verbs.actions.ownership.value) {
    verbs.push(
      // receiving
      { hiragana: "いる", preferredForm: "hiragana", kanjis: ["要る"], romanization: "iru", verbGroup: "godan", verbIsTransitive: false, meaning: "want" },
      { hiragana: "くれる", rareKanjis: ["呉れる"], romanization: "kureru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "give to me / us" },
      { hiragana: "くださる", preferredForm: "hiragana", kanjis: ["下さる"], romanization: "kudasaru", verbGroup: "godan", verbIsTransitive: true, meaning: "bestow me / us (very polite)" },
      { hiragana: "もらう", preferredForm: "hiragana", kanjis: ["貰う"], romanization: "morau", verbGroup: "godan", verbIsTransitive: true, meaning: "receive" },
      { kanjis: ["頼む"], rareKanjis: ["恃む", "憑む"], hiragana: "たのむ", romanization: "tanomu", verbGroup: "godan", verbIsTransitive: true, meaning: "depend", derivedMeanings: ["request"], exampleUsages: ["生活費を親に頼っている"] },
      { kanjis: ["買う"], hiragana: "かう", romanization: "kau", verbGroup: "godan", verbIsTransitive: true, meaning: "buy", exampleUsages: ["コーラを買う"] },

      // giving
      { kanjis: ["与える"], hiragana: "あたえる", romanization: "ataeru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "give / assign (polite)" },
      { kanjis: ["返す", "反す"], hiragana: "かえす", romanization: "kaesu", verbGroup: "godan", verbIsTransitive: true, meaning: "give back" },
      { kanjis: ["譲る"], hiragana: "ゆずる", romanization: "yuzuru", verbGroup: "godan", verbIsTransitive: true, meaning: "concede" },
      { kanjis: ["払う"], rareKanjis: ["掃う"], hiragana: "はらう", romanization: "harau", verbGroup: "godan", verbIsTransitive: true, meaning: "pay" },
    );
  }

  if (flashcardSettings.words.verbs.actions.transpositional.value) {
    verbs.push(
      { kanjis: ["行く", "往く"], hiragana: "いく", romanization: "iku", verbGroup: "godan", verbIsTransitive: false, meaning: "go", exampleUsages: ["東京に行く"] },
      { kanjis: ["会う", "逢う", "遭う"], rareKanjis: ["遇う"], hiragana: "あう", romanization: "au", verbGroup: "godan", verbIsTransitive: false, meaning: "meet" },
      { kanjis: ["訪問する"], hiragana: "ほうもんする", romanization: "houmonsuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "visit" },
      { kanjis: ["入る"], hiragana: "はいる", romanization: "hairu", verbGroup: "godan", verbIsTransitive: false, meaning: "enter" },
      { kanjis: ["通る"], rareKanjis: ["透る", "徹る"], hiragana: "とおる", romanization: "tooru", verbGroup: "godan", verbIsTransitive: false, meaning: "pass through / go along" },
      { kanjis: ["通う"], hiragana: "かよう", romanization: "kayou", verbGroup: "godan", verbIsTransitive: false, meaning: "regularly commute to" },
      { kanjis: ["戻る"], hiragana: "もどる", romanization: "modoru", verbGroup: "godan", verbIsTransitive: false, meaning: "return / go back" },
      { kanjis: ["帰る", "還る"], hiragana: "かえる", romanization: "kaeru", verbGroup: "godan", verbIsTransitive: false, meaning: "return home", exampleUsages: ["家に帰る"] },

      { kanjis: ["出る"], hiragana: "でる", romanization: "deru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "leave / exit" },
      { kanjis: ["出かける"], hiragana: "でかける", romanization: "dekakeru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "start going out (for doing something)" },
      { kanjis: ["出て来る", "出てくる"], hiragana: "でてくる", romanization: "detekuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "come out (towards speaker)" },
      { kanjis: ["乗り出す"], hiragana: "のりだす", romanization: "noridasu", verbGroup: "godan", verbIsTransitive: true, meaning: "set out / set sail", derivedMeanings: ["start a new venture"] },

      { kanjis: ["上がる"], rareKanjis: ["騰がる"], hiragana: "あがる", romanization: "agaru", verbGroup: "godan", verbIsTransitive: false, meaning: "rise" },
      { kanjis: ["行き来する"], hiragana: "ゆききする", romanization: "yukikisuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "come and go" },
    );
  }

  if (flashcardSettings.words.verbs.actions.maneuvers.value) {
    verbs.push(
      // holding
      { kanjis: ["取る"], hiragana: "とる", romanization: "toru", verbGroup: "godan", verbIsTransitive: true, meaning: "take / grab" },
      { kanjis: ["持つ"], hiragana: "もつ", romanization: "motsu", verbGroup: "godan", verbIsTransitive: true, meaning: "hold / carry" },
      { kanjis: ["強いる"], hiragana: "しいる", romanization: "shiiru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "force / press" },
      { kanjis: ["押す"], hiragana: "おす", romanization: "osu", verbGroup: "godan", verbIsTransitive: true, meaning: "push / press down", exampleUsages: ["ボタンを押す"] },
      { kanjis: ["放す"], hiragana: "はなす", romanization: "hanasu", verbGroup: "godan", verbIsTransitive: true, meaning: "release" },
      { kanjis: ["置く"], hiragana: "おく", romanization: "oku", verbGroup: "godan", verbIsTransitive: true, meaning: "put / place" },
      { kanjis: ["戻す"], hiragana: "もどす", romanization: "modosu", verbGroup: "godan", verbIsTransitive: true, meaning: "put back / restore" },

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
      { kanjis: ["梳く"], hiragana: "すく", romanization: "suku", verbGroup: "godan", verbIsTransitive: true, meaning: "comb" },
    );
  }

  if (flashcardSettings.words.verbs.actions.activities.value) {
    verbs.push(
      // generic
      { kanjis: ["働く"], hiragana: "はたらく", romanization: "hataraku", verbGroup: "godan", verbIsTransitive: false, meaning: "work" },
      { kanjis: ["遊ぶ"], hiragana: "あそぶ", romanization: "asobu", verbGroup: "godan", verbIsTransitive: false, meaning: "play (games / sports)", derivedMeanings: ["have fun"] },
      { kanjis: ["扱う"], hiragana: "あつかう", romanization: "atsukau", verbGroup: "godan", verbIsTransitive: true, meaning: "deal / handle" },
      { kanjis: ["挙げる"], hiragana: "あげる", romanization: "ageru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "propose / suggest", derivedMeanings: ["hold an event"] },
      { kanjis: ["用いる"], hiragana: "もちいる", romanization: "mochiiru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "use / utilize" },
      { kanjis: ["使う", "遣う"], hiragana: "つかう", romanization: "tsukau", verbGroup: "godan", verbIsTransitive: true, meaning: "employ / use (as a tool)" },
      { kanjis: ["参加する"], hiragana: "さんかする", romanization: "sankasuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "participate" },
      { kanjis: ["過ごす", "過す"], hiragana: "すごす", romanization: "sugosu", verbGroup: "godan", verbIsTransitive: true, meaning: "spend / spend time" },
      { kanjis: ["準備する"], hiragana: "じゅんびする", romanization: "junbisuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "prepare" },
      { kanjis: ["暇する"], hiragana: "ひまする", romanization: "himasuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "be free / be unoccupied" },
      { kanjis: ["機能する"], hiragana: "きのうする", romanization: "kinousuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "function" },
      { kanjis: ["作る", "造る", "創る"], hiragana: "つくる", romanization: "tsukuru", verbGroup: "godan", verbIsTransitive: true, meaning: "make / create / produce" },
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
      { kanjis: ["読む"], hiragana: "よむ", romanization: "yomu", verbGroup: "godan", verbIsTransitive: true, meaning: "read" },
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

      { kanjis: ["貯める"], hiragana: "ためる", romanization: "tameru", verbGroup: "ichidan", verbIsTransitive: true, meaning: "save money" },
      { kanjis: ["貯まる"], hiragana: "たまる", romanization: "tamaru", verbGroup: "godan", verbIsTransitive: false, meaning: "accumulate / grow on its own" },
      { kanjis: ["貯金する"], hiragana: "ちょきんする", romanization: "chokinsuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "save money" },
      { kanjis: ["貯蔵する"], hiragana: "ちょぞうする", romanization: "chozousuru", verbGroup: "irregular", verbIsTransitive: true, meaning: "store" },
    );
  }

  for (const verb of verbs) {
    if (flashcardSettings.enableGodanVerbs.value && verb.verbGroup !== "godan") continue;
    if (flashcardSettings.enableIchidanVerbs.value && verb.verbGroup !== "ichidan") continue;
    if (flashcardSettings.enableIrregularVerbs.value && verb.verbGroup !== "irregular") continue;

    if (flashcardSettings.enableTransitiveVerbs.value && !verb.verbIsTransitive) continue;
    if (flashcardSettings.enableIntransitiveVerbs.value && verb.verbIsTransitive) continue;

    words.push(verb);
  }
}
