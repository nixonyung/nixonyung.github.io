import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsIdeas(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsIdeasLife) {
    // TODO: humanity vs wellbeing
    words.push(
      { kanjis: ["人間"], hiragana: "にんげん", romanization: "ningen", meaning: "mankind / human being" },

      { kanjis: ["人生"], hiragana: "じんせい", romanization: "jinsei", meaning: "life" },
      { kanjis: ["人生観"], hiragana: "じんせいかん", romanization: "jinseikan", meaning: "view of life" },
      { kanjis: ["見晴らし"], hiragana: "みはらし", romanization: "miharashi", meaning: "view" },

      { kanjis: ["気持ち", "気持"], hiragana: "きもち", romanization: "kimochi", meaning: "feeling" },
      { kanjis: ["気分"], hiragana: "きぶん", romanization: "kibun", meaning: "mood" },

      // living
      { kanjis: ["健康"], hiragana: "けんこう", romanization: "kenkou", meaning: "health" },
      { kanjis: ["長寿"], hiragana: "ちょうじゅ", romanization: "chouju", meaning: "longevity" },
      { kanjis: ["栄養", "営養"], hiragana: "えいよう", romanization: "eiyou", meaning: "nutrition" },
      { kanjis: ["昼寝"], hiragana: "ひるね", romanization: "hirune", meaning: "afternoon nap" },
      { kanjis: ["疲れ"], hiragana: "つかれ", romanization: "tsukare", meaning: "tiredness" },

      { kanjis: ["暮らし", "暮し"], hiragana: "くらし", romanization: "kurashi", meaning: "the way of living" },
      { kanjis: ["一人暮らし", "１人暮らし"], rareKanjis: ["独り暮らし"], hiragana: "ひとりぐらし", romanization: "hitorigurashi", meaning: "the state of living alone" },

      { kanjis: ["死"], hiragana: "し", romanization: "shi", meaning: "death" },
      { kanjis: ["死去"], hiragana: "しきょ", romanization: "shikyo", meaning: "passing away (formal)" },

      { kanjis: ["車酔い"], hiragana: "くるまよい", romanization: "kurumayoi", meaning: "car sickness" },

      // gender
      { kanjis: ["性"], hiragana: "せい", romanization: "sei", meaning: "sex / nature of a person", derivedMeanings: ["gender"] },
      { kanjis: ["性別"], hiragana: "せいべつ", romanization: "seibetsu", meaning: "gender" },
      { katakana: "ジェンダー", romanization: "jenda", meaning: "gender" },
      { kanjis: ["男性"], hiragana: "だんせい", romanization: "dansei", meaning: "male" },
      { kanjis: ["男らしさ"], hiragana: "おとこらしさ", romanization: "otokorashisa", meaning: "masculinity" },
      { kanjis: ["男性性"], hiragana: "だんせいせい", romanization: "danseisei", meaning: "masculinity (written)" },
      { kanjis: ["女性"], hiragana: "じょせい", romanization: "josei", meaning: "female" },
      { kanjis: ["女らしさ"], hiragana: "おんならしさ", romanization: "onnashisa", meaning: "femininity" },
      { kanjis: ["女性性"], hiragana: "じょせいせい", romanization: "joseisei", meaning: "femininity (written)" },

      { kanjis: ["男装"], hiragana: "だんそう", romanization: "dansou", meaning: "men's clothing" },
      { kanjis: ["女装"], hiragana: "じょそう", romanization: "josou", meaning: "women's clothing" },

      { kanjis: ["難度"], hiragana: "なんど", romanization: "nando", meaning: "difficulty" },
      { kanjis: ["邪魔"], hiragana: "じゃま", romanization: "jama", meaning: "obstacle" },
      { kanjis: ["我慢"], hiragana: "がまん", katakana: "ガマン", romanization: "gaman", meaning: "endurance" },

      { kanjis: ["真面目"], hiragana: "まじめ", katakana: "マジメ", romanization: "majime", meaning: "truthfulness" },

      { kanjis: ["暇"], rareKanjis: ["閑"], hiragana: "ひま", romanization: "hima", meaning: "spare time" },
      { kanjis: ["暇"], rareKanjis: ["遑"], hiragana: "いとま", romanization: "itoma", meaning: "time off (formal)" },
      { kanjis: ["余暇"], hiragana: "よか", romanization: "yoka", meaning: "leisure" },
      { kanjis: ["休暇"], hiragana: "きゅうか", romanization: "kyuuka", meaning: "vacation" },
      { kanjis: ["お休み"], hiragana: "おやすみ", romanization: "oyasumi", meaning: "day off", derivedMeanings: ["sleep / rest"] },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasSocialConstructs) {
    words.push(
      { kanjis: ["家族"], hiragana: "かぞく", romanization: "kazoku", meaning: "family / clan" },
      { kanjis: ["親戚"], hiragana: "しんせき", romanization: "shinseki", meaning: "relatives" },
      { kanjis: ["親類"], hiragana: "しんるい", romanization: "shinrui", meaning: "relatives (formal)" },
      { kanjis: ["肉親"], hiragana: "にくしん", romanization: "nikushin", meaning: "blood relatives" },
      { kanjis: ["親族"], hiragana: "しんぞく", romanization: "shinzoku", meaning: "kin (formal)" },
      { kanjis: ["夫婦"], rareKanjis: ["妻夫", "女夫"], hiragana: "ふうふ", romanization: "fuufu", meaning: "spouse" },
      { kanjis: ["結婚"], hiragana: "けっこん", romanization: "kekkon", meaning: "marriage" },
      { kanjis: ["離婚"], hiragana: "りこん", romanization: "rikon", meaning: "divorce" },
      { kanjis: ["親子"], hiragana: "おやこ", romanization: "oyako", meaning: "parent and child" },
      { kanjis: ["親子"], hiragana: "しんし", romanization: "shinshi", meaning: "parent and child" },
      { kanjis: ["子孫"], hiragana: "しそん", romanization: "shison", meaning: "descendants" },
      { kanjis: ["世代"], hiragana: "せだい", romanization: "sedai", meaning: "generation" },
      { kanjis: ["相続"], hiragana: "そうぞく", romanization: "souzoku", meaning: "succession" },
      { kanjis: ["相続人"], hiragana: "そうぞくにん", romanization: "souzokunin", meaning: "heir" },
      { kanjis: ["継承"], hiragana: "けいしょう", romanization: "keishou", meaning: "inheritance" },

      { kanjis: ["親密"], hiragana: "しんみつ", romanization: "shinmitsu", meaning: "intimacy" },
      { kanjis: ["親しみ"], hiragana: "したしみ", romanization: "shitashimi", meaning: "familarity" },
      { kanjis: ["親善"], hiragana: "しんぜん", romanization: "shinzen", meaning: "goodwill" },

      { kanjis: ["名前"], hiragana: "なまえ", romanization: "namae", meaning: "name" },
      { kanjis: ["姓名"], hiragana: "せいめい", romanization: "seimei", meaning: "full name" },
      { kanjis: ["氏名"], hiragana: "しめい", romanization: "shimei", meaning: "full name (formal)" },
      { kanjis: ["苗字", "名字"], hiragana: "みょうじ", romanization: "myouji", meaning: "surname" },

      { kanjis: ["世界"], hiragana: "せかい", romanization: "sekai", meaning: "the world" },
      { kanjis: ["社会"], hiragana: "しゃかい", romanization: "shakai", meaning: "society" },
      { kanjis: ["場合"], hiragana: "ばあい", romanization: "baai", meaning: "occasion" },

      { kanjis: ["育児"], hiragana: "いくじ", romanization: "ikuji", meaning: "childcare" },
      { kanjis: ["養成"], hiragana: "ようせい", romanization: "yousei", meaning: "development" },
      { kanjis: ["教養"], hiragana: "きょうよう", romanization: "kyouyou", meaning: "manner" },
      { kanjis: ["療養"], hiragana: "りょうよう", romanization: "ryouyou", meaning: "convalescence" },
      { kanjis: ["休養"], hiragana: "きゅうよう", romanization: "kyuuyou", meaning: "recuperation / rest" },

      { kanjis: ["教育"], hiragana: "きょういく", romanization: "kyouiku", meaning: "education" },
      { kanjis: ["留学"], hiragana: "りゅうがく", romanization: "ryuugaku", meaning: "studying abroad" },
      { kanjis: ["学習"], hiragana: "がくしゅう", romanization: "gakushuu", meaning: "study" },
      { kanjis: ["勉強"], hiragana: "べんきょう", romanization: "benkyou", meaning: "dedication", derivedMeanings: ["study"] },
      { kanjis: ["習得", "修得"], hiragana: "しゅうとく", romanization: "shuutoku", meaning: "mastering a skill" },
      { kanjis: ["授業"], hiragana: "じゅぎょう", romanization: "jugyou", meaning: "class" },
      { kanjis: ["授業中"], hiragana: "じゅぎょうちゅう", romanization: "jugyouchuu", meaning: "in class" },
      { katakana: "クラス", romanization: "kurasu", meaning: "class" },
      { kanjis: ["質問"], hiragana: "しつもん", romanization: "shitsumon", meaning: "inquiry" },
      { kanjis: ["宿題"], hiragana: "しゅくだい", romanization: "shukudai", meaning: "homework" },
      { kanjis: ["答え", "答", "応え", "報え"], hiragana: "こたえ", romanization: "kotae", meaning: "answer" },
      { kanjis: ["試験"], hiragana: "しけん", romanization: "shiken", meaning: "formal test / exam" },
      { katakana: "テスト", romanization: "tesuto", meaning: "test / exam" },
      { katakana: "ランキング", romanization: "rankingu", meaning: "ranking" },
      { kanjis: ["部活"], hiragana: "ぶかつ", romanization: "bukatsu", meaning: "club activities" },

      // TODO: trading
      { kanjis: ["本物"], hiragana: "ほんもの", romanization: "honmono", meaning: "the original" },
      { kanjis: ["余り"], hiragana: "あまり", romanization: "amari", meaning: "remains" },
      { kanjis: ["借金"], hiragana: "しゃっきん", romanization: "shakkin", meaning: "debt" },
      { katakana: "せール", romanization: "seeru", meaning: "sale" },
      { katakana: "プレゼント", romanization: "purezento", meaning: "present" },

      { katakana: "チーム", romanization: "chiimu", meaning: "team" },
      { katakana: "チームワーク", romanization: "chiimuwaaku", meaning: "teamwork" },
      { katakana: "グループ", romanization: "guruupu", meaning: "group" },
      { katakana: "メンバー", romanization: "menbaa", meaning: "member" },
      { kanjis: ["役割"], hiragana: "やくわり", romanization: "yakuwari", meaning: "role" },
      { kanjis: ["機能"], hiragana: "きのう", romanization: "kinou", meaning: "function" },

      { hiragana: "こと", preferredForm: "hiragana", kanjis: ["事"], romanization: "koto", meaning: "matter / business" },
      { kanjis: ["事業"], hiragana: "じぎょう", romanization: "jigyou", meaning: "career" },
      { kanjis: ["仕事"], hiragana: "しごと", romanization: "shigoto", meaning: "work" },
      { kanjis: ["企業"], hiragana: "きぎょう", romanization: "kigyou", meaning: "enterprise" },
      { kanjis: ["成功"], hiragana: "せいこう", romanization: "seikou", meaning: "success" },

      { kanjis: ["離別"], hiragana: "りべつ", romanization: "ribetsu", meaning: "separation (of relationships)" },
      { kanjis: ["分離"], hiragana: "ぶんり", romanization: "bunri", meaning: "detachment" },
      { kanjis: ["隔離"], hiragana: "かくり", romanization: "kakuri", meaning: "quarantine" },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasDecisionMaking) {
    words.push(
      { kanjis: ["意見"], hiragana: "いけん", romanization: "iken", meaning: "opinion" },
      { kanjis: ["見方"], hiragana: "みかた", romanization: "mikata", meaning: "point of view" },
      { hiragana: "おすすめ", preferredForm: "hiragana", kanjis: ["お勧め", "お薦め"], rareKanjis: ["お奨め"], katakana: "オススメ", romanization: "osusume", meaning: "recommendation" },
      { kanjis: ["知らせ"], rareKanjis: ["報せ"], hiragana: "しらせ", romanization: "shirase", meaning: "news" },
      // TODO: data, information

      { kanjis: ["一致"], hiragana: "いっち", romanization: "icchi", meaning: "match" },
      { kanjis: ["区別"], hiragana: "くべつ", romanization: "kubetsu", meaning: "difference" },
      { kanjis: ["差別"], hiragana: "さべつ", romanization: "sabetsu", meaning: "difference" },
      { kanjis: ["違い"], hiragana: "ちがい", romanization: "chigai", meaning: "difference" },
      { kanjis: ["関連"], rareKanjis: ["関聯"], hiragana: "かんれん", romanization: "kanren", meaning: "relation" },

      { kanjis: ["選択"], hiragana: "せんたく", romanization: "sentaku", meaning: "choice" },
      { kanjis: ["決定"], hiragana: "けってい", romanization: "kettei", meaning: "decision" },
      { kanjis: ["説得"], hiragana: "せっとく", romanization: "settoku", meaning: "persuasion" },
      { kanjis: ["譲歩"], hiragana: "じょうほ", romanization: "jouho", meaning: "concession" },

      { kanjis: ["積もり", "積り"], hiragana: "つもり", romanization: "tsumori", meaning: "plan / intention" },
      { kanjis: ["約束"], hiragana: "やくそく", romanization: "yakusoku", meaning: "promise" },
      { kanjis: ["検査"], hiragana: "けんさ", romanization: "kensa", meaning: "inspection" },
      { katakana: "コンビニエンス", romanization: "konbiniensu", meaning: "convenience" },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasNarration) {
    words.push(
      // TODO: manual, documents
      { kanjis: ["辞書"], hiragana: "じしょ", romanization: "jisho", meaning: "dictionary" },
      { kanjis: ["辞典"], hiragana: "じてん", romanization: "jiten", meaning: "dictionary" },
      { kanjis: ["事典"], hiragana: "じてん", romanization: "jiten", meaning: "encyclopedia" },
      { kanjis: ["字典"], hiragana: "じてん", romanization: "jiten", meaning: "Kanji dictionary" },
      { kanjis: ["文字典"], hiragana: "もじてん", romanization: "mojiten", meaning: "Kanji dictionary" },

      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "way / method", exampleUsages: ["[Noun] の [Verb-ます (dropped)] 方"] },
      { kanjis: ["仕方"], hiragana: "しかた", romanization: "shikata", meaning: "way / method" },
      { kanjis: ["方法"], hiragana: "ほうほう", romanization: "houhou", meaning: "way / method" },
      { kanjis: ["方式"], hiragana: "ほうしき", romanization: "houshiki", meaning: "way / method" },
      { kanjis: ["やり方", "遣り方"], hiragana: "やりかた", romanization: "yarikata", meaning: "way of doing" },
      { kanjis: ["手順"], hiragana: "てじゅん", romanization: "tejun", meaning: "procedures" },

      { kanjis: ["索引"], hiragana: "さくいん", romanization: "sakuin", meaning: "index" },
      { katakana: "カテゴリ", romanization: "kategori", meaning: "category" },
      { katakana: "キーワード", romanization: "kiiwaado", meaning: "keyword" },
      { katakana: "ポイント", romanization: "pointo", meaning: "point" },

      { kanjis: ["言葉"], rareKanjis: ["詞", "辞"], hiragana: "ことば", romanization: "kotoba", meaning: "word", derivedMeanings: ["language"], exampleUsages: ['"xxx" という言葉 (the word "xxx")'] },
      { kanjis: ["語"], hiragana: "ご", romanization: "go", meaning: "word" },
      { katakana: "ワード", romanization: "woodo", meaning: "word" },
      { kanjis: ["言"], hiragana: "げん", romanization: "gen", meaning: "statement" },
      { kanjis: ["語り"], hiragana: "かたり", romanization: "katari", meaning: "a talk" },
      { kanjis: ["述語"], hiragana: "じゅつご", romanization: "jutsugo", meaning: "predicate (verb and object)" },
      { katakana: "フレーズ", romanization: "fureezu", meaning: "phrase" },
      { kanjis: ["例文"], hiragana: "れいぶん", romanization: "reibun", meaning: "example sentence" },
      { kanjis: ["否定文"], hiragana: "ひていぶん", romanization: "hiteibun", meaning: "negative sentence" },

      { kanjis: ["意味"], hiragana: "いみ", romanization: "imi", meaning: "meaning" },

      { kanjis: ["背景"], hiragana: "はいけい", romanization: "haikei", meaning: "background" },
      { kanjis: ["前後関係"], hiragana: "ぜんごかんけい", romanization: "zengokankei", meaning: "context" },
      { kanjis: ["文脈"], hiragana: "ぶんみゃく", romanization: "bunmyaku", meaning: "context" },
      { kanjis: ["脈絡"], hiragana: "みゃくらく", romanization: "myakuraku", meaning: "context" },

      { kanjis: ["日本語"], hiragana: "にほんご", romanization: "nihongo", meaning: "the Japanese language" },
      { kanjis: ["中国語"], hiragana: "ちゅうごくご", romanization: "chuugokugo", meaning: "the Chinese language" },
      { kanjis: ["英語"], hiragana: "えいご", romanization: "eigo", meaning: "the English language" },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasMath) {
    words.push(
      // numerical
      { kanjis: ["増加"], hiragana: "ぞうか", romanization: "zouka", meaning: "increase" },
      { kanjis: ["上昇"], hiragana: "じょうしょう", romanization: "joushou", meaning: "ascend" },

      // geometry
      { kanjis: ["方"], hiragana: "ほう", romanization: "hou", meaning: "direction" },
      { kanjis: ["方向"], hiragana: "ほうこう", romanization: "houkou", meaning: "direction" },
      { kanjis: ["方角"], hiragana: "ほうがく", romanization: "hougaku", meaning: "direction" },
      { kanjis: ["向き"], hiragana: "むき", romanization: "muki", meaning: "orientation" },

      { kanjis: ["間"], hiragana: "あいだ", romanization: "aida", meaning: "gap / distance" },
      { kanjis: ["距離"], hiragana: "きょり", romanization: "kyori", meaning: "distance" },

      { kanjis: ["分脈"], hiragana: "ぶんみゃく", romanization: "bunmyaku", meaning: "branch / fork", exampleUsages: ["(branches of a family tree)", "(physical branches)"] },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasScience) {
    words.push(
      //
      // TODO: to engineering?
      { katakana: "デジタル", romanization: "dezitaru", meaning: "digital" },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasArts) {
    words.push(
      // drawings
      { kanjis: ["漫画"], hiragana: "まんが", katakana: "マンガ", romanization: "manga", meaning: "manga" },

      // music
      { katakana: "アニメソング", romanization: "anime songu", meaning: "anime song" },
      { katakana: "アニソン", romanization: "anison", meaning: "anime song" },
      { katakana: "メドレー", romanization: "medorii", meaning: "medley" },

      // cinematic
      { katakana: "アニメ", romanization: "anime", meaning: "anime" },
      { katakana: "アニメーション", romanization: "animeeshon", meaning: "animation" },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasActivities) {
    words.push(
      //
      { katakana: "サッカー", romanization: "sakkaa", meaning: "soccer" },

      { kanjis: ["世界一周"], hiragana: "せかいいっしゅう", romanization: "sekaiisshuu", meaning: "round-the-world trip" },
    );
  }

  if (jp.flashcardSettings.enableNounsIdeasVideoGames) {
    words.push(
      //
      { katakana: "ゲーム", romanization: "geemu", meaning: "game" },
      { kanjis: ["遊び"], hiragana: "あそび", romanization: "asobi", meaning: "a play", derivedMeanings: ["game"] },
      { kanjis: ["遊び方"], hiragana: "あそびかた", romanization: "asobikata", meaning: "how to play" },
      { katakana: "ルール", romanization: "ruuru", meaning: "rule" },

      { katakana: "レベル", romanization: "reberu", meaning: "level" },
      { katakana: "ダメージ", romanization: "dameeji", meaning: "damage" },
      { katakana: "マテリアル", romanization: "materiaru", meaning: "material" },
      { katakana: "アイテム", romanization: "aitemu", meaning: "item" },
      { katakana: "オプション", romanization: "opushon", meaning: "option" },
    );
  }
}
