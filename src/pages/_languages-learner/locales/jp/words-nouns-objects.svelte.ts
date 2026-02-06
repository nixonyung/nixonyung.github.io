import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendNounsObjects(words: JapaneseWord[]) {
  if (flashcardSettings.words.nouns.objects.generic.value) {
    words.push(
      //
      { kanjis: ["者"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (person)" },
      { kanjis: ["物"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (object)" },
    );
  }

  if (flashcardSettings.words.nouns.objects.biological.value) {
    words.push(
      //
      { kanjis: ["体", "身体"], rareKanjis: ["躯", "躰"], hiragana: "からだ", romanization: "karada", meaning: "body" },
      { kanjis: ["頭"], hiragana: "あたま", romanization: "atama", meaning: "head" },
      { kanjis: ["目", "眼"], hiragana: "め", romanization: "me", meaning: "eye" },
      { kanjis: ["耳"], hiragana: "みみ", romanization: "mimi", meaning: "ear" },
      { kanjis: ["口"], hiragana: "くち", romanization: "kuchi", meaning: "mouth" },
      { kanjis: ["鼻"], hiragana: "はな", romanization: "hana", meaning: "nose" },
      { kanjis: ["髪"], hiragana: "かみ", romanization: "kami", meaning: "hair" },
      { kanjis: ["歯"], hiragana: "は", romanization: "ha", meaning: "tooth" },
      { kanjis: ["手"], hiragana: "て", romanization: "te", meaning: "hand / arm" },
      { kanjis: ["肩"], hiragana: "かた", romanization: "kata", meaning: "shoulder" },
      { kanjis: ["足", "脚", "肢"], hiragana: "あし", romanization: "ashi", meaning: "foot / leg" },
      { kanjis: ["お腹"], rareKanjis: ["お中"], hiragana: "おなか", romanization: "onaka", meaning: "belly / stomach" },
      { kanjis: ["腹"], rareKanjis: ["肚"], hiragana: "はら", romanization: "hara", meaning: "belly / stomach (masculine)" },
      { kanjis: ["背"], rareKanjis: ["脊"], hiragana: "せ", romanization: "se", meaning: "back of body" },
      { katakana: "ティアー", romanization: "tiaa", meaning: "tear" },
    );
  }

  if (flashcardSettings.words.nouns.objects.nature.value) {
    words.push(
      { kanjis: ["天気"], hiragana: "てんき", romanization: "tenki", meaning: "weather" },
      { kanjis: ["晴れ", "晴"], hiragana: "はれ", romanization: "hare", meaning: "good weather (sunny, warm)", derivedMeanings: ["when the weather is good"] },
      { kanjis: ["曇り", "曇"], hiragana: "くもり", romanization: "kumori", meaning: "cloudy weather" },
      { kanjis: ["暑さ"], hiragana: "あつさ", romanization: "atsusa", meaning: "hotness" },

      { kanjis: ["夕暮れ"], hiragana: "ゆうぐれ", romanization: "yuugure", meaning: "twilight" },
      { kanjis: ["夕陽"], hiragana: "せきよう", romanization: "sekiyou", meaning: "the setting sun" },

      { kanjis: ["水"], hiragana: "みず", romanization: "mizu", meaning: "water" },
      { kanjis: ["川", "河"], hiragana: "かわ", romanization: "kawa", meaning: "river" },
      { kanjis: ["海"], hiragana: "うみ", romanization: "umi", meaning: "sea" },
      { kanjis: ["雲"], hiragana: "くも", romanization: "kumo", meaning: "cloud" },
      { kanjis: ["雨"], hiragana: "あめ", romanization: "ame", meaning: "rain" },

      { kanjis: ["風"], hiragana: "かぜ", romanization: "kaze", meaning: "wind" },
      { kanjis: ["台風", "颱風"], hiragana: "たいふう", romanization: "taifuu", meaning: "typhoon" },

      { kanjis: ["木", "樹"], hiragana: "き", romanization: "ki", meaning: "tree", derivedMeanings: ["wood"] },
      { kanjis: ["花", "華"], hiragana: "はな", romanization: "hana", meaning: "flower" },
      { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },
      { kanjis: ["砂利"], hiragana: "じゃり", romanization: "jari", meaning: "gravel / pebbles" },

      { kanjis: ["声"], hiragana: "こえ", romanization: "koe", meaning: "voice" },
      { kanjis: ["音"], hiragana: "おと", romanization: "oto", meaning: "sound / musical note" },

      { kanjis: ["色"], hiragana: "いろ", romanization: "iro", meaning: "color", derivedMeanings: ["facial expression", "personality"] },
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
      { kanjis: ["桃色"], hiragana: "ももいろ", romanization: "momoiro", meaning: "peach (color)" },
    );
  }

  if (flashcardSettings.words.nouns.objects.foodCuisine.value) {
    words.push(
      { kanjis: ["食事"], hiragana: "しょくじ", romanization: "shokuji", meaning: "meal" },
      { kanjis: ["ご飯", "御飯"], hiragana: "ごはん", romanization: "gohan", meaning: "meal / cooked rice" },
      { kanjis: ["朝ご飯", "朝ごはん", "朝御飯"], hiragana: "あさごはん", romanization: "asagohan", meaning: "breakfast" },
      { kanjis: ["昼ご飯", "昼ごはん", "昼御飯"], hiragana: "ひるごはん", romanization: "hirugohan", meaning: "lunch" },
      { kanjis: ["晩ご飯", "晩ごはん", "晩御飯"], hiragana: "ばんごはん", romanization: "bangohan", meaning: "dinner" },

      { kanjis: ["料理"], hiragana: "りょうり", romanization: "ryouri", meaning: "dish" },
      { kanjis: ["弁当"], hiragana: "べんとう", romanization: "bentou", meaning: "Japanese box lunch" },
      { kanjis: ["和食"], hiragana: "わしょく", romanization: "washoku", meaning: "Japanese cuisine" },
      { kanjis: ["洋食"], hiragana: "ようしょく", romanization: "youshoku", meaning: "Western cuisine" },

      { kanjis: ["外食"], hiragana: "がいしょく", romanization: "gaishoku", meaning: "eating out" },
    );
  }

  if (flashcardSettings.words.nouns.objects.foodDishes.value) {
    words.push(
      { kanjis: ["食べ物"], hiragana: "たべもの", romanization: "tabemono", meaning: "food" },

      { kanjis: ["肉"], hiragana: "にく", romanization: "niku", meaning: "meat" },
      { kanjis: ["鶏肉"], hiragana: "とりにく", romanization: "toriniku", meaning: "chicken meat" },
      { kanjis: ["豚肉"], hiragana: "ぶたにく", romanization: "butaniku", meaning: "pork" },
      { kanjis: ["牛肉"], hiragana: "ぎゅうにく", romanization: "gyuuniku", meaning: "beef" },

      { kanjis: ["野菜"], hiragana: "やさい", romanization: "yasai", meaning: "vegetable" },
      { kanjis: ["果物"], hiragana: "くだもの", romanization: "kudamono", meaning: "fruit" },

      { kanjis: ["麺麭", "麪包", "麵麭"], hiragana: "めんぽう", romanization: "menpou", meaning: "bread" },
      { katakana: "パン", romanization: "pan", meaning: "bread (bun)" },

      { kanjis: ["寿司", "鮨"], rareKanjis: ["鮓"], hiragana: "すし", romanization: "sushi", meaning: "sushi" },
      { katakana: "カレー", romanization: "karee", meaning: "curry" },

      { kanjis: ["牛乳"], hiragana: "ぎゅうにゅう", romanization: "gyuunyuu", meaning: "cow's milk" },
      { katakana: "バター", romanization: "bataa", meaning: "butter" },
      { kanjis: ["砂糖"], hiragana: "さとう", romanization: "satou", meaning: "sugar" },

      // dessert
      { kanjis: ["菓子"], hiragana: "かし", romanization: "kashi", meaning: "sweets" },
      { kanjis: ["綿菓子"], hiragana: "わたがし", romanization: "watagashi", meaning: "cotton candy" },
      { kanjis: ["飴"], hiragana: "あめ", romanization: "ame", meaning: "(hard) candy" },
      { katakana: "ケーキ", romanization: "keeki", meaning: "cake" },
      { katakana: "プリン", romanization: "purin", meaning: "pudding" },
    );
  }

  if (flashcardSettings.words.nouns.objects.foodDrinks.value) {
    words.push(
      //
      { kanjis: ["飲み物", "飲物"], hiragana: "のみもの", romanization: "nomimono", meaning: "drinks / beverage" },

      { kanjis: ["茶"], hiragana: "ちゃ", romanization: "cha", meaning: "tea" },
      { kanjis: ["紅茶"], hiragana: "こうちゃ", romanization: "koucha", meaning: "black tea" },

      { kanjis: ["酒"], hiragana: "さけ", romanization: "sake", meaning: "alcohol" },

      { katakana: "コーヒー", romanization: "koohii", meaning: "coffee" },
      { katakana: "コーラ", romanization: "coola", meaning: "coke" },
    );
  }

  if (flashcardSettings.words.nouns.objects.equipments.value) {
    words.push(
      { kanjis: ["金"], hiragana: "かね", romanization: "kane", meaning: "money" },
      { kanjis: ["お金", "御金"], hiragana: "おかね", romanization: "okane", meaning: "money (polite)" },

      { kanjis: ["荷物"], hiragana: "にもつ", romanization: "nimotsu", meaning: "luggage" },

      { kanjis: ["服"], hiragana: "ふく", romanization: "fuku", meaning: "clothes" },
      { kanjis: ["衣類"], hiragana: "いるい", romanization: "irui", meaning: "clothes" },
      { kanjis: ["靴"], rareKanjis: ["沓", "履", "鞋"], hiragana: "くつ", romanization: "kutsu", meaning: "shoes" },
      { kanjis: ["靴下"], rareKanjis: ["沓下"], hiragana: "くつした", romanization: "kutsushita", meaning: "socks" },
      { kanjis: ["帽子"], hiragana: "ぼうし", romanization: "boushi", meaning: "hat" },
      { kanjis: ["眼鏡"], hiragana: "メガネ", romanization: "megane", meaning: "glasses" },
      { katakana: "シャツ", romanization: "shatsu", meaning: "shirt" },
      { katakana: "セーター", romanization: "seetaa", meaning: "sweater" },
      { katakana: "コート", romanization: "kooto", meaning: "coat" },
      { katakana: "ボタン", romanization: "botan", meaning: "button (clothing / machinery)" },
      { katakana: "ポケット", romanization: "poketto", meaning: "pocket" },
      { katakana: "ハンカチ", romanization: "hankachi", meaning: "handkerchief" },
      { katakana: "ネクタイ", romanization: "nekutai", meaning: "necktie" },
      { kanjis: ["背広"], hiragana: "せびろ", romanization: "sebiro", meaning: "business suit" },

      { kanjis: ["石鹸", "石けん"], hiragana: "せっけん", romanization: "sekken", meaning: "soap" },
      { katakana: "トイレットペーパー", romanization: "toirettopeepaa", meaning: "toilet paper" },

      { kanjis: ["薬"], hiragana: "くすり", romanization: "kusuri", meaning: "medicine" },

      { kanjis: ["箸"], hiragana: "はし", romanization: "hashi", meaning: "chopsticks" },
      { katakana: "スプーン", romanization: "supuun", meaning: "spoon" },
      { katakana: "フォーク", romanization: "fooku", meaning: "fork" },
      { katakana: "ナイフ", romanization: "naifu", meaning: "knife" },
      { katakana: "カップ", romanization: "kappu", meaning: "cup" },
      { katakana: "コップ", rareKanjis: ["洋杯"], romanization: "koppu", meaning: "wine glass" },

      { kanjis: ["財布"], hiragana: "さいふ", romanization: "saifu", meaning: "wallet" },
      { kanjis: ["鍵"], rareKanjis: ["鑰"], hiragana: "かぎ", romanization: "kagi", meaning: "key (for locks)", derivedMeanings: ["key (to a problem)"] },
      { kanjis: ["傘"], hiragana: "かさ", romanization: "kasa", meaning: "umbrella" },

      { kanjis: ["椅子"], hiragana: "いす", romanization: "isu", meaning: "chair" },

      // containers
      { hiragana: "かばん", preferredForm: "hiragana", katakana: "カバン", kanjis: ["鞄"], romanization: "kaban", meaning: "bag / basket" },
      { kanjis: ["器"], hiragana: "うつわ", romanization: "utsuwa", meaning: "container / vessel" },
      { kanjis: ["箱"], rareKanjis: ["函", "匣", "筥", "筐", "凾"], hiragana: "はこ", katakana: "ハコ", romanization: "hako", meaning: "box" },
      { kanjis: ["袋"], rareKanjis: ["嚢"], hiragana: "ふくろ", romanization: "fukuro", meaning: "bag" },
      { kanjis: ["碗"], rareKanjis: ["盌"], hiragana: "わん", romanization: "wan", meaning: "bowl" },
      { kanjis: ["茶碗", "茶わん"], hiragana: "ちゃわん", romanization: "chawan", meaning: "tea cup" },
      { kanjis: ["瓶"], rareKanjis: ["壜", "罎"], hiragana: "びん", romanization: "bin", meaning: "bottle" },
      { kanjis: ["花瓶"], hiragana: "かびん", romanization: "kabin", meaning: "vase" },
      { kanjis: ["皿"], rareKanjis: ["盤"], hiragana: "さら", romanization: "sara", meaning: "dish / plate" },
      { kanjis: ["灰皿"], hiragana: "はいざら", romanization: "haizara", meaning: "ashtray" },
      { kanjis: ["棚"], hiragana: "たな", romanization: "tana", meaning: "shelf / rack" },
      { kanjis: ["本棚"], hiragana: "ほんだな", romanization: "hondana", meaning: "bookshelf" },
      { katakana: "ポスト", romanization: "posuto", meaning: "postbox (post)" },

      // papers
      { kanjis: ["紙"], hiragana: "かみ", romanization: "kami", meaning: "paper" },
      { katakana: "ページ", preferredForm: "katakana", kanjis: ["頁"], romanization: "peeji", meaning: "page" },
      { kanjis: ["切符"], hiragana: "きっぷ", romanization: "kippu", meaning: "ticket" },
      { katakana: "チケット", romanization: "chiketto", meaning: "ticket" },
      { kanjis: ["切手"], hiragana: "きって", romanization: "kitte", meaning: "postage stamp" },
      { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },
      { katakana: "カレンダー", romanization: "karendaa", meaning: "calendar" },
      { kanjis: ["壁紙"], hiragana: "かべがみ", romanization: "kabegami", meaning: "wallpaper", derivedMeanings: ["background image"] },
      { kanjis: ["葉書", "葉書き"], rareKanjis: ["端書", "端書き", "羽書"], hiragana: "はがき", romanization: "hagaki", meaning: "postcard" },
      { kanjis: ["封筒"], hiragana: "ふうとう", romanization: "fuutou", meaning: "envelope" },

      // books
      { kanjis: ["本"], hiragana: "ほん", romanization: "hon", meaning: "book" },
      { kanjis: ["手帳", "手帖"], hiragana: "てちょう", romanization: "techou", meaning: "notebook" },
      { katakana: "ノート", romanization: "nooto", meaning: "notebook", derivedMeanings: ["(verb) take note", "musical note", "notebook (computer)"] },
      { kanjis: ["メモ帳"], hiragana: "メモちょう", romanization: "memochou", meaning: "memo book" },
      { kanjis: ["日記"], hiragana: "にっき", romanization: "nikki", meaning: "diary" },
      { kanjis: ["字引", "字引き"], hiragana: "じびき", romanization: "jibiki", meaning: "dictionary" },
      { kanjis: ["辞書"], hiragana: "じしょ", romanization: "jisho", meaning: "dictionary" },
      { kanjis: ["辞典"], hiragana: "じてん", romanization: "jiten", meaning: "dictionary" },
      { kanjis: ["事典"], hiragana: "じてん", romanization: "jiten", meaning: "encyclopedia" },
      { kanjis: ["字典"], hiragana: "じてん", romanization: "jiten", meaning: "Kanji dictionary" },
      { kanjis: ["文字典"], hiragana: "もじてん", romanization: "mojiten", meaning: "Kanji dictionary" },

      // pen
      { kanjis: ["万年筆"], hiragana: "まんねんひつ", romanization: "mannenhitsu", meaning: "fountain pen" },
      { katakana: "ペン", romanization: "pen", meaning: "pen" },
      { katakana: "ボールペン", romanization: "boorupen", meaning: "ballpoint pen" },

      // electronics
      { kanjis: ["電気"], hiragana: "でんき", romanization: "denki", meaning: "electricity" },
      { kanjis: ["電池"], hiragana: "でんち", romanization: "denchi", meaning: "battery" },
      { kanjis: ["電話"], hiragana: "でんわ", romanization: "denwa", meaning: "telephone", derivedMeanings: ["phone call"] },
      { katakana: "スマートフォン", romanization: "sumaatofon", meaning: "smartphone" },
      { katakana: "スマホ", romanization: "sumaho", meaning: "smartphone" },
      { katakana: "カメラ", romanization: "kamera", meaning: "camera" },
      { katakana: "キャメラ", romanization: "kyamera", meaning: "camera" },
      { katakana: "ロボット", romanization: "robotto", meaning: "robot" },
      { katakana: "ラジオ", romanization: "rajio", meaning: "radio" },
      { kanjis: ["冷蔵庫"], hiragana: "れいぞうこ", romanization: "reizouko", meaning: "refrigerator" },

      // writings
      { kanjis: ["索引"], hiragana: "さくいん", romanization: "sakuin", meaning: "index" },
      { kanjis: ["番号"], hiragana: "ばんごう", romanization: "bangou", meaning: "series of digits" },
      { katakana: "マッピング", romanization: "mappingu", meaning: "mapping (creating associations)" },
      { katakana: "レコード", romanization: "rekoodo", meaning: "record" },
      { katakana: "カテゴリ", romanization: "kategori", meaning: "category" },
      { katakana: "キーワード", romanization: "kiiwaado", meaning: "keyword" },
      { katakana: "ポイント", romanization: "pointo", meaning: "point" },
      { kanjis: ["漢字"], hiragana: "かんじ", romanization: "kanji", meaning: "Chinese character" },
      { kanjis: ["作文"], hiragana: "さくぶん", romanization: "sakubun", meaning: "writing / composition" },
      { kanjis: ["文章"], hiragana: "ぶんしょう", romanization: "bunshou", meaning: "article" },

      // musical instruments
      { katakana: "ギター", romanization: "kitaa", meaning: "guitar" },
    );
  }

  if (flashcardSettings.words.nouns.objects.transportation.value) {
    words.push(
      //
      { katakana: "エスカレーター", romanization: "esukareetaa", meaning: "escalator" },
      { katakana: "エレベーター", romanization: "erebeetaa", meaning: "elevator" },

      { kanjis: ["車"], hiragana: "くるま", romanization: "kuruma", meaning: "car" },
      { kanjis: ["自転車"], hiragana: "じてんしゃ", romanization: "jitensha", meaning: "bicycle" },
      { kanjis: ["自動車"], hiragana: "じどうしゃ", romanization: "jidousha", meaning: "automobile" },
      { katakana: "バス", romanization: "basu", meaning: "bus" },
      { kanjis: ["電車"], hiragana: "でんしゃ", romanization: "densha", meaning: "train" },
      { kanjis: ["地下鉄"], hiragana: "ちかてつ", romanization: "chikatetsu", meaning: "subway" },

      { kanjis: ["飛行機"], hiragana: "ひこうき", romanization: "hikouki", meaning: "airplane" },
    );
  }

  if (flashcardSettings.words.nouns.objects.arts.value) {
    words.push(
      // drawings
      { kanjis: ["絵", "画"], hiragana: "え", romanization: "e", meaning: "picture" },
      { kanjis: ["絵画"], hiragana: "かいが", romanization: "kaiga", meaning: "painting" },
      { kanjis: ["写真"], hiragana: "しゃしん", romanization: "shashin", meaning: "photograph" },
      { kanjis: ["漫画"], hiragana: "まんが", katakana: "マンガ", romanization: "manga", meaning: "manga" },
      { katakana: "コンテ", romanization: "konte", meaning: 'storyboard ("continuity")', exampleUsages: ["絵コンテ / 画コンテ"] },

      // music
      { kanjis: ["音楽"], hiragana: "おんがく", romanization: "ongaku", meaning: "music" },
      { katakana: "ミュージック", romanization: "myuujikku", meaning: "music" },
      { katakana: "アニメソング", romanization: "anime songu", meaning: "anime song" },
      { katakana: "アニソン", romanization: "anison", meaning: "anime song" },
      { katakana: "メドレー", romanization: "medorii", meaning: "medley" },

      // cinematic
      { kanjis: ["映画"], hiragana: "えいが", romanization: "eiga", meaning: "movie" },
      { katakana: "フィルム", romanization: "firumu", meaning: "film" },
      { katakana: "アニメ", romanization: "anime", meaning: "anime" },
      { katakana: "アニメーション", romanization: "animeeshon", meaning: "animation" },
    );
  }
}
