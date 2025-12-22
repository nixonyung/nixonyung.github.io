import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsAbstract(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsAbstract) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["人間"], hiragana: "にんげん", romanization: "ningen", meaning: "mankind / human being" },
      { kanjis: ["人生"], hiragana: "じんせい", romanization: "jinsei", meaning: "life" },
      { kanjis: ["人生観"], hiragana: "じんせいかん", romanization: "jinseikan", meaning: "view of life" },
      { kanjis: ["死"], hiragana: "し", romanization: "shi", meaning: "death" },
      { kanjis: ["死去"], hiragana: "しきょ", romanization: "shikyo", meaning: "passing away" },

      { kanjis: ["男性"], hiragana: "だんせい", romanization: "dansei", meaning: "male" },
      { kanjis: ["男性性"], hiragana: "だんせいせい", romanization: "danseisei", meaning: "masculinity" },
      { kanjis: ["男装"], hiragana: "だんそう", romanization: "dansou", meaning: "men's clothing" },
      { kanjis: ["女性"], hiragana: "じょせい", romanization: "josei", meaning: "female" },
      { kanjis: ["女性性"], hiragana: "じょせいせい", romanization: "joseisei", meaning: "femininity" },
      { kanjis: ["女装"], hiragana: "じょそう", romanization: "josou", meaning: "women's clothing" },
      { kanjis: ["性"], hiragana: "せい", romanization: "sei", meaning: "sex / nature of a person" },
      { kanjis: ["性別"], hiragana: "せいべつ", romanization: "seibetsu", meaning: "gender" },
      { katakana: "ジェンダー", romanization: "jenda", meaning: "gender" },

      { kanjis: ["家"], hiragana: "いえ", romanization: "ie", meaning: "home" },
      { hiragana: "うち", preferredForm: "hiragana", kanjis: ["家"], romanization: "uchi", meaning: "house" },
      { kanjis: ["家族"], hiragana: "かぞく", romanization: "kazoku", meaning: "extended family" },
      { kanjis: ["親戚"], hiragana: "しんせき", romanization: "shinseki", meaning: "relatives" },
      { kanjis: ["親類"], hiragana: "しんるい", romanization: "shinrui", meaning: "relatives" },
      { kanjis: ["肉親"], hiragana: "にくしん", romanization: "nikushin", meaning: "blood relatives" },
      { kanjis: ["親族"], hiragana: "しんぞく", romanization: "shinzoku", meaning: "kin" },
      { kanjis: ["名前"], hiragana: "なまえ", romanization: "namae", meaning: "name" },
      { kanjis: ["姓名"], hiragana: "せいめい", romanization: "seimei", meaning: "full name" },
      { kanjis: ["氏名"], hiragana: "しめい", romanization: "shimei", meaning: "full name" },
      { kanjis: ["苗字", "名字"], hiragana: "みょうじ", romanization: "myouji", meaning: "surname" },

      { kanjis: ["親密"], hiragana: "しんみつ", romanization: "shinmitsu", meaning: "intimacy" },
      { kanjis: ["親しみ"], hiragana: "したしみ", romanization: "shitashimi", meaning: "familarity" },
      { kanjis: ["親善"], hiragana: "しんぜん", romanization: "shinzen", meaning: "goodwill" },
      { kanjis: ["離別"], hiragana: "りべつ", romanization: "ribetsu", meaning: "segregation" },
      { kanjis: ["分離"], hiragana: "ぶんり", romanization: "bunri", meaning: "detachment" },
      { kanjis: ["隔離"], hiragana: "かくり", romanization: "kakuri", meaning: "quarantine" },

      { katakana: "チーム", romanization: "chiimu", meaning: "team" },
      { katakana: "チームワーク", romanization: "chiimuwaaku", meaning: "teamwork" },
      { katakana: "グループ", romanization: "guruupu", meaning: "group" },
      { katakana: "メンバー", romanization: "menbaa", meaning: "member" },

      { kanjis: ["世代"], hiragana: "せだい", romanization: "sedai", meaning: "generation" },
      { kanjis: ["誕生日"], hiragana: "たんじょうび", romanization: "tanjoubi", meaning: "birthday" },
      { kanjis: ["長寿"], hiragana: "ちょうじゅ", romanization: "chouju", meaning: "longevity" },
      { kanjis: ["結婚"], hiragana: "けっこん", romanization: "kekkon", meaning: "marriage" },
      { kanjis: ["離婚"], hiragana: "りこん", romanization: "rikon", meaning: "divorce" },

      { kanjis: ["地方"], hiragana: "ちほう", romanization: "chihou", meaning: "area / region" },
      { kanjis: ["場所"], hiragana: "ばしょ", romanization: "basho", meaning: "place" },
      { kanjis: ["名所"], hiragana: "などころ", romanization: "nadokoro", meaning: "famous place" },
      { kanjis: ["国", "邦"], hiragana: "くに", romanization: "kuni", meaning: "country" },
      { kanjis: ["都市"], hiragana: "とし", romanization: "toshi", meaning: "city" },
      { kanjis: ["村"], hiragana: "むら", romanization: "mura", meaning: "village" },

      { kanjis: ["方"], hiragana: "ほう", romanization: "hou", meaning: "direction (root word)" },
      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "direction (root word)" },
      { kanjis: ["方向"], hiragana: "ほうこう", romanization: "houkou", meaning: "direction" },
      // TODO: hougaku, muki
      { kanjis: ["間"], hiragana: "あいだ", romanization: "aida", meaning: "gap / distance" },
      { kanjis: ["距離"], hiragana: "きょり", romanization: "kyori", meaning: "distance" },

      { kanjis: ["見晴らし"], hiragana: "みはらし", romanization: "miharashi", meaning: "view" },

      { kanjis: ["社会"], hiragana: "しゃかい", romanization: "shakai", meaning: "society" },
      { kanjis: ["教育"], hiragana: "きょういく", romanization: "kyouiku", meaning: "education" },
      { kanjis: ["留学"], hiragana: "りゅうがく", romanization: "ryuugaku", meaning: "studying abroad" },
      { kanjis: ["育児"], hiragana: "いくじ", romanization: "ikuji", meaning: "childcare" },
      { kanjis: ["養成"], hiragana: "ようせい", romanization: "yousei", meaning: "development" },
      { kanjis: ["栄養", "営養"], hiragana: "えいよう", romanization: "eiyou", meaning: "nutrition" },
      { kanjis: ["教養"], hiragana: "きょうよう", romanization: "kyouyou", meaning: "manner" },
      { kanjis: ["療養"], hiragana: "りょうよう", romanization: "ryouyou", meaning: "convalescence" },
      { kanjis: ["休養"], hiragana: "きゅうよう", romanization: "kyuuyou", meaning: "recuperation / rest" },

      { kanjis: ["借金"], hiragana: "しゃっきん", romanization: "shakkin", meaning: "debt" },

      { kanjis: ["仕方"], hiragana: "しかた", romanization: "shikata", meaning: "way / method" },
      { kanjis: ["方法"], hiragana: "ほうほう", romanization: "houhou", meaning: "method / procedures" },
      { kanjis: ["方式"], hiragana: "ほうしき", romanization: "houshiki", meaning: "method / way of doing" },
      { kanjis: ["やり方", "遣り方"], hiragana: "やりかた", romanization: "yarikata", meaning: "way of doing" },
      { kanjis: ["手順"], hiragana: "てじゅん", romanization: "tejun", meaning: "procedures" },

      { kanjis: ["言葉"], rareKanjis: ["詞", "辞"], hiragana: "ことば", romanization: "kotoba", meaning: "language / word" },
      { kanjis: ["語"], hiragana: "ご", romanization: "go", meaning: "word" },
      { kanjis: ["言"], hiragana: "げん", romanization: "gen", meaning: "statement" },
      { katakana: "ワード", romanization: "woodo", meaning: "word" },
      { kanjis: ["見方"], hiragana: "みかた", romanization: "mikata", meaning: "point of view" },
      { kanjis: ["意見"], hiragana: "いけん", romanization: "iken", meaning: "opinion" },
      { kanjis: ["知らせ"], rareKanjis: ["報せ"], hiragana: "しらせ", romanization: "shirase", meaning: "news" },
      { kanjis: ["決定"], hiragana: "けってい", romanization: "kettei", meaning: "decision" },
      { kanjis: ["説得"], hiragana: "せっとく", romanization: "settoku", meaning: "persuasion" },

      { kanjis: ["増加"], hiragana: "ぞうか", romanization: "zouka", meaning: "increase" },
      { kanjis: ["上昇"], hiragana: "じょうしょう", romanization: "joushou", meaning: "ascend" },
      { kanjis: ["末"], hiragana: "すえ", romanization: "sue", meaning: "end / tip" },
      { kanjis: ["関連"], rareKanjis: ["関聯"], hiragana: "かんれん", romanization: "kanren", meaning: "relevance" },

      { kanjis: ["真面目"], hiragana: "まじめ", katakana: "マジメ", romanization: "majime", meaning: "truthfulness" },
      { kanjis: ["検査"], hiragana: "けんさ", romanization: "kensa", meaning: "inspection" },

      { kanjis: ["難度"], hiragana: "なんど", romanization: "nando", meaning: "difficulty" },
      { kanjis: ["邪魔"], hiragana: "じゃま", romanization: "jama", meaning: "obstacle" },
      { kanjis: ["我慢"], hiragana: "がまん", katakana: "ガマン", romanization: "gaman", meaning: "endurance" },

      { kanjis: ["相続"], hiragana: "そうぞく", romanization: "souzoku", meaning: "succession" },
      { kanjis: ["相続人"], hiragana: "そうぞくにん", romanization: "souzokunin", meaning: "heir" },
      { kanjis: ["継承"], hiragana: "けいしょう", romanization: "keishou", meaning: "inheritance" },

      { kanjis: ["授業"], hiragana: "じゅぎょう", romanization: "jugyou", meaning: "class" },
      { kanjis: ["授業中"], hiragana: "じゅぎょうちゅう", romanization: "jugyouchuu", meaning: "in class" },
      { kanjis: ["学習"], hiragana: "がくしゅう", romanization: "gakushuu", meaning: "study" },
      { kanjis: ["勉強"], hiragana: "べんきょう", romanization: "benkyou", meaning: "study / hardwork" },
      { kanjis: ["習得", "修得"], hiragana: "しゅうとく", romanization: "shuutoku", meaning: "acquisition of a skill" },
      { kanjis: ["部活"], hiragana: "ぶかつ", romanization: "bukatsu", meaning: "club activities" },
      { kanjis: ["宿題"], hiragana: "しゅくだい", romanization: "shukudai", meaning: "homework" },
      { kanjis: ["試験"], hiragana: "しけん", romanization: "shiken", meaning: "test / exam" },
      { katakana: "テスト", romanization: "tesuto", meaning: "test / exam" },

      { kanjis: ["参加"], hiragana: "さんか", romanization: "sanka", meaning: "participation" },
      { kanjis: ["遊び"], hiragana: "あそび", romanization: "asobi", meaning: "play" },
      { kanjis: ["遊び方"], hiragana: "あそびかた", romanization: "asobikata", meaning: "how to play" },
      { kanjis: ["遊び場"], hiragana: "あそびば", romanization: "asobiba", meaning: "playground" },

      { kanjis: ["居住"], hiragana: "きょじゅう", romanization: "kyojuu", meaning: "reside" },
      { kanjis: ["在住"], hiragana: "ざいじゅう", romanization: "zaijuu", meaning: "reside" },
      { kanjis: ["寝"], hiragana: "ね", romanization: "ne", meaning: "sleep" },
      { kanjis: ["寝"], hiragana: "しん", romanization: "shin", meaning: "sleep" },
      { kanjis: ["訪れ"], hiragana: "おとずれ", romanization: "otozure", meaning: "visit" },

      { kanjis: ["雨"], hiragana: "あめ", romanization: "ame", meaning: "rain" },
      { kanjis: ["暑さ"], hiragana: "あつさ", romanization: "atsusa", meaning: "hotness" },

      { kanjis: ["余り"], hiragana: "あまり", romanization: "amari", meaning: "remains" },
      { kanjis: ["返し", "反し"], hiragana: "かえし", romanization: "kaeshi", meaning: "reversal / return" },

      { kanjis: ["積もり", "積り"], hiragana: "つもり", romanization: "tsumori", meaning: "plan / intention" },

      { hiragana: "ため", preferredForm: "hiragana", kanjis: ["為"], romanization: "tame", meaning: "advantage / benefit" },

      { katakana: "コンビニエンス", romanization: "konbiniensu", meaning: "convenience" },
      { katakana: "トイレットペーパー", romanization: "toirettopeepaa", meaning: "toilet paper" },

      { katakana: "ルール", romanization: "ruuru", meaning: "rule" },
      { katakana: "ダメージ", romanization: "dameeji", meaning: "damage" },

      { kanjis: ["一人暮らし", "１人暮らし"], rareKanjis: ["独り暮らし"], hiragana: "ひとりぐらし", romanization: "hitorigurashi", meaning: "the state of living alone" },

      // TODO: numbers

      // colors
      { kanjis: ["白"], hiragana: "しろ", romanization: "shiro", meaning: "white" },
      { kanjis: ["灰色"], hiragana: "はいいろ", romanization: "haiiro", meaning: "gray" },
      { kanjis: ["黒"], hiragana: "くろ", romanization: "kuro", meaning: "black" },

      { kanjis: ["赤"], hiragana: "あか", romanization: "aka", meaning: "red" },
      { kanjis: ["茶色"], hiragana: "ちゃいろ", romanization: "chairo", meaning: "brown" },
      { katakana: "オレンジ色", romanization: "orenjiiro", meaning: "orange (color)" },
      { kanjis: ["黄色"], hiragana: "きいろ", romanization: "kiiro", meaning: "yellow" },
      { kanjis: ["緑"], hiragana: "みどり", romanization: "midori", meaning: "green" },
      { kanjis: ["青"], hiragana: "あお", romanization: "ao", meaning: "blue" },
      { kanjis: ["紫"], hiragana: "むらさき", romanization: "murasaki", meaning: "purple" },
      { katakana: "ピンク", romanization: "pinku", meaning: "pink" },
      { kanjis: ["桃色"], hiragana: "ももいろ", romanization: "momoiro", meaning: "peach" },

      // TODO: linguistics
    );
  }
}
