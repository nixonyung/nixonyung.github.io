import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendNounsObjects(words: JapaneseWord[]) {
  if (flashcardSettings.words.nouns.objects.generic.value) {
    words.push(
      //
      { kanjis: ["者"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (person)" },
      { kanjis: ["物"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (object)" },

      { kanjis: ["空"], rareKanjis: ["虚"], hiragana: "から", katakana: "カラ", romanization: "kara", meaning: "emptiness" },
    );
  }

  if (flashcardSettings.words.nouns.objects.biological.value) {
    words.push(
      //
      { kanjis: ["体", "身体"], rareKanjis: ["躯", "躰"], hiragana: "からだ", romanization: "karada", meaning: "body" },
      { kanjis: ["頭"], hiragana: "あたま", romanization: "atama", meaning: "head" },
      { kanjis: ["顔", "貌"], hiragana: "かお", romanization: "kao", meaning: "face", derivedMeanings: ["expression"] },
      { kanjis: ["目", "眼"], hiragana: "め", romanization: "me", meaning: "eye" },
      { kanjis: ["耳"], hiragana: "みみ", romanization: "mimi", meaning: "ear" },
      { kanjis: ["口"], hiragana: "くち", romanization: "kuchi", meaning: "mouth" },
      { kanjis: ["鼻"], hiragana: "はな", romanization: "hana", meaning: "nose" },
      { kanjis: ["髪"], hiragana: "かみ", romanization: "kami", meaning: "hair" },
      { kanjis: ["瞼", "目蓋", "眼蓋"], hiragana: "まぶた", romanization: "mabuta", meaning: "eyelid" },
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

      { kanjis: ["空"], hiragana: "そら", romanization: "sora", meaning: "sky", derivedMeanings: ["air", "the heavens"] },
      { kanjis: ["夕暮れ"], hiragana: "ゆうぐれ", romanization: "yuugure", meaning: "twilight" },
      { kanjis: ["夕陽"], hiragana: "せきよう", romanization: "sekiyou", meaning: "the setting sun" },

      { kanjis: ["水"], hiragana: "みず", romanization: "mizu", meaning: "water" },
      { kanjis: ["川", "河"], hiragana: "かわ", romanization: "kawa", meaning: "river" },
      { kanjis: ["海"], hiragana: "うみ", romanization: "umi", meaning: "sea" },
      { kanjis: ["雲"], hiragana: "くも", romanization: "kumo", meaning: "cloud" },
      { kanjis: ["雨"], hiragana: "あめ", romanization: "ame", meaning: "rain" },
      { kanjis: ["雪"], hiragana: "ゆき", romanization: "yuki", meaning: "snow" },

      { kanjis: ["風"], hiragana: "かぜ", romanization: "kaze", meaning: "wind" },
      { kanjis: ["台風", "颱風"], hiragana: "たいふう", romanization: "taifuu", meaning: "typhoon" },

      { kanjis: ["山"], hiragana: "やま", romanization: "yama", meaning: "mountain / hill" },
      { kanjis: ["岩", "巌", "磐"], hiragana: "いわ", romanization: "iwa", meaning: "rock / boulder" },
      { kanjis: ["石"], hiragana: "いし", romanization: "ishi", meaning: "rock / stone" },
      { kanjis: ["砂利"], hiragana: "じゃり", romanization: "jari", meaning: "gravel / pebbles" },

      { kanjis: ["木", "樹"], hiragana: "き", romanization: "ki", meaning: "tree", derivedMeanings: ["wood"] },
      { kanjis: ["花", "華"], hiragana: "はな", romanization: "hana", meaning: "flower" },
      { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },

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
      { kanjis: ["食"], hiragana: "しょく", romanization: "shoku", meaning: "food / eating (root word)" },
      { kanjis: ["食事"], hiragana: "しょくじ", romanization: "shokuji", meaning: "meal" },
      { kanjis: ["ご飯", "御飯"], hiragana: "ごはん", romanization: "gohan", meaning: "meal / cooked rice" },
      { kanjis: ["朝ご飯", "朝ごはん", "朝御飯"], hiragana: "あさごはん", romanization: "asagohan", meaning: "breakfast" },
      { kanjis: ["昼ご飯", "昼ごはん", "昼御飯"], hiragana: "ひるごはん", romanization: "hirugohan", meaning: "lunch" },
      { kanjis: ["晩ご飯", "晩ごはん", "晩御飯"], hiragana: "ばんごはん", romanization: "bangohan", meaning: "dinner" },
      { kanjis: ["夕飯"], hiragana: "ゆうはん", romanization: "yuuhan", meaning: "dinner" },

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

      { kanjis: ["卵", "玉子"], hiragana: "たまご", romanization: "tamago", meaning: "egg", derivedMeanings: ["chicken egg"] },

      { kanjis: ["野菜"], hiragana: "やさい", romanization: "yasai", meaning: "vegetable" },
      { kanjis: ["果物"], hiragana: "くだもの", romanization: "kudamono", meaning: "fruit" },

      { kanjis: ["麺麭", "麪包", "麵麭"], hiragana: "めんぽう", romanization: "menpou", meaning: "bread" },
      { katakana: "パン", romanization: "pan", meaning: "bun / bread" },

      { kanjis: ["寿司", "鮨"], rareKanjis: ["鮓"], hiragana: "すし", romanization: "sushi", meaning: "sushi" },
      { katakana: "カレー", romanization: "karee", meaning: "curry" },

      // seasoning
      { kanjis: ["塩"], hiragana: "しお", romanization: "shio", meaning: "salt" },
      { kanjis: ["砂糖"], hiragana: "さとう", romanization: "satou", meaning: "sugar" },
      { katakana: "ジャム", romanization: "jamu", meaning: "jam" },
      // dairy
      { kanjis: ["牛乳"], hiragana: "ぎゅうにゅう", romanization: "gyuunyuu", meaning: "cow's milk" },
      { katakana: "バター", romanization: "bataa", meaning: "butter" },
      // soy-based
      { kanjis: ["醤油"], rareKanjis: ["醬油"], hiragana: "しょうゆ", romanization: "shouyu", meaning: "soy sauce" },

      // dessert
      { kanjis: ["菓子"], hiragana: "かし", romanization: "kashi", meaning: "sweets" },
      { kanjis: ["綿菓子"], hiragana: "わたがし", romanization: "watagashi", meaning: "cotton candy" },
      { kanjis: ["飴"], hiragana: "あめ", romanization: "ame", meaning: "(hard) candy" },
      { katakana: "ケーキ", romanization: "keeki", meaning: "cake" },
      { katakana: "プリン", romanization: "purin", meaning: "pudding" },

      { katakana: "タバコ", preferredForm: "katakana", kanjis: ["煙草"], rareKanjis: ["莨", "烟草"], romanization: "tabako", meaning: "tobacco / cigarette" },
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
      { katakana: "ジュース", romanization: "juusu", meaning: "juice" },
    );
  }

  if (flashcardSettings.words.nouns.objects.outfits.value) {
    words.push(
      // clothes
      { kanjis: ["服"], hiragana: "ふく", romanization: "fuku", meaning: "clothes" },
      { kanjis: ["衣類"], hiragana: "いるい", romanization: "irui", meaning: "clothes" },

      { katakana: "シャツ", romanization: "shatsu", meaning: "shirt" },
      { katakana: "ワイシャツ", romanization: "waishatsu", meaning: "(business) white shirt" },
      { kanjis: ["背広"], hiragana: "せびろ", romanization: "sebiro", meaning: "business suit" },

      { kanjis: ["上着", "上衣"], rareKanjis: ["表着"], hiragana: "うわぎ", romanization: "uwagi", meaning: "coat / jacket / outerwear" },
      { katakana: "セーター", romanization: "seetaa", meaning: "sweater" },
      { katakana: "コート", romanization: "kooto", meaning: "coat" },

      { katakana: "ズボン", rareKanjis: ["洋袴", "段袋"], romanization: "zubon", meaning: "trousers / pants", exampleUsages: ["長ズボン"] },
      { katakana: "パンツ", romanization: "pantsu", meaning: "underpants" },
      { katakana: "トラウザーズ", romanization: "torauzaazu", meaning: "trousers" },
      { katakana: "スカート", romanization: "sukaato", meaning: "skirt" },

      { kanjis: ["靴"], rareKanjis: ["沓", "履", "鞋"], hiragana: "くつ", romanization: "kutsu", meaning: "shoes" },
      { katakana: "スリッパ", romanization: "surippa", meaning: "slippers" },
      { kanjis: ["靴下"], rareKanjis: ["沓下"], hiragana: "くつした", romanization: "kutsushita", meaning: "socks" },

      // accessories
      { kanjis: ["帽子"], hiragana: "ぼうし", romanization: "boushi", meaning: "hat" },
      { katakana: "メガネ", preferredForm: "katakana", kanjis: ["眼鏡"], hiragana: "めがね", romanization: "megane", meaning: "glasses" },
      { kanjis: ["眼鏡"], hiragana: "がんきょう", romanization: "gankyou", meaning: "glasses (literarily)" },
      { katakana: "ネクタイ", romanization: "nekutai", meaning: "necktie" },
      { katakana: "ハンカチ", romanization: "hankachi", meaning: "handkerchief" },
      { katakana: "ボタン", romanization: "botan", meaning: "button (clothing / machinery)" },
      { katakana: "ポケット", romanization: "poketto", meaning: "pocket" },
      { kanjis: ["香水"], hiragana: "こうすい", romanization: "kousui", meaning: "perfume" },
      { katakana: "ウィッグ", romanization: "wiggu", meaning: "wig" },

      // clothing styles
      { kanjis: ["和服"], hiragana: "わふく", romanization: "wafuku", meaning: "Japanese-style clothes" },
      { kanjis: ["洋服"], hiragana: "ようふく", romanization: "youfuku", meaning: "Western-style clothes" },
    );
  }

  if (flashcardSettings.words.nouns.objects.equipments.value) {
    words.push(
      { kanjis: ["道具"], hiragana: "どうぐ", romanization: "dougu", meaning: "tool" },
      { kanjis: ["用具"], hiragana: "ようぐ", romanization: "yougu", meaning: "tool" },
      { kanjis: ["工具"], hiragana: "こうぐ", romanization: "kougu", meaning: "tool" },

      { kanjis: ["荷物"], hiragana: "にもつ", romanization: "nimotsu", meaning: "luggage" },

      { kanjis: ["機械", "器械"], hiragana: "きかい", romanization: "kikai", meaning: "machine / machinery" },

      // money / currencies
      { kanjis: ["金"], hiragana: "かね", romanization: "kane", meaning: "money" },
      { kanjis: ["お金", "御金"], hiragana: "おかね", romanization: "okane", meaning: "money (polite)" },

      { kanjis: ["石鹸", "石けん"], hiragana: "せっけん", romanization: "sekken", meaning: "soap" },
      { katakana: "トイレットペーパー", romanization: "toirettopeepaa", meaning: "toilet paper" },

      { kanjis: ["薬"], hiragana: "くすり", romanization: "kusuri", meaning: "medicine" },

      // engineering tools
      { katakana: "テープ", romanization: "teepu", meaning: "tape" },

      // utensils
      { kanjis: ["箸"], hiragana: "はし", romanization: "hashi", meaning: "chopsticks" },
      { katakana: "スプーン", romanization: "supuun", meaning: "spoon" },
      { katakana: "フォーク", romanization: "fooku", meaning: "fork" },
      { katakana: "ナイフ", romanization: "naifu", meaning: "knife" },
      { katakana: "カップ", romanization: "kappu", meaning: "cup" },
      { katakana: "コップ", rareKanjis: ["洋杯"], romanization: "koppu", meaning: "wine glass" },

      // furniture
      { kanjis: ["家具"], hiragana: "かぐ", romanization: "kagu", meaning: "furniture" },
      { kanjis: ["机"], hiragana: "つくえ", romanization: "tsukue", meaning: "desk" },
      { katakana: "テーブル", romanization: "teeburu", meaning: "table" },
      { kanjis: ["椅子"], hiragana: "いす", romanization: "isu", meaning: "chair" },
      { katakana: "ソファ", romanization: "sofaa", meaning: "sofa" },
      { kanjis: ["本棚"], hiragana: "ほんだな", romanization: "hondana", meaning: "bookshelf" },

      // gadgets
      { kanjis: ["財布"], hiragana: "さいふ", romanization: "saifu", meaning: "wallet" },
      { kanjis: ["鍵"], rareKanjis: ["鑰"], hiragana: "かぎ", romanization: "kagi", meaning: "key (for locks)", derivedMeanings: ["key (to a problem)"] },
      { kanjis: ["傘"], hiragana: "かさ", romanization: "kasa", meaning: "umbrella" },

      // containers
      { hiragana: "かばん", preferredForm: "hiragana", katakana: "カバン", kanjis: ["鞄"], romanization: "kaban", meaning: "bag / basket" },
      { kanjis: ["器"], hiragana: "うつわ", romanization: "utsuwa", meaning: "device / instrument", derivedMeanings: ["container / vessel"] },
      { kanjis: ["容器"], hiragana: "ようき", romanization: "youki", meaning: "container / vessel" },
      { kanjis: ["入れ物", "容れ物"], hiragana: "いれもの", romanization: "iremono", meaning: "container / case" },
      { kanjis: ["箱"], rareKanjis: ["函", "匣", "筥", "筐", "凾"], hiragana: "はこ", katakana: "ハコ", romanization: "hako", meaning: "box" },
      { kanjis: ["袋"], rareKanjis: ["嚢"], hiragana: "ふくろ", romanization: "fukuro", meaning: "bag" },
      { kanjis: ["碗"], rareKanjis: ["盌"], hiragana: "わん", romanization: "wan", meaning: "bowl" },
      { kanjis: ["茶碗", "茶わん"], hiragana: "ちゃわん", romanization: "chawan", meaning: "tea cup" },
      { kanjis: ["瓶"], rareKanjis: ["壜", "罎"], hiragana: "びん", romanization: "bin", meaning: "bottle" },
      { kanjis: ["花瓶"], hiragana: "かびん", romanization: "kabin", meaning: "vase" },
      { kanjis: ["皿"], rareKanjis: ["盤"], hiragana: "さら", romanization: "sara", meaning: "dish / plate" },
      { kanjis: ["灰皿"], hiragana: "はいざら", romanization: "haizara", meaning: "ashtray" },
      { kanjis: ["棚"], hiragana: "たな", romanization: "tana", meaning: "shelf / rack" },
      { katakana: "ポスト", romanization: "posuto", meaning: "postbox (post)" },

      // paper-based
      { kanjis: ["紙"], hiragana: "かみ", romanization: "kami", meaning: "paper" },
      { kanjis: ["切符"], hiragana: "きっぷ", romanization: "kippu", meaning: "ticket" },
      { katakana: "チケット", romanization: "chiketto", meaning: "ticket" },
      { kanjis: ["手紙"], hiragana: "てがみ", romanization: "tegami", meaning: "letter", derivedMeanings: ["note"] },
      { kanjis: ["封筒"], hiragana: "ふうとう", romanization: "fuutou", meaning: "envelope" },
      { kanjis: ["切手"], hiragana: "きって", romanization: "kitte", meaning: "postage stamp" },
      { kanjis: ["葉書", "葉書き"], rareKanjis: ["端書", "端書き", "羽書"], hiragana: "はがき", romanization: "hagaki", meaning: "postcard" },
      { kanjis: ["壁紙"], hiragana: "かべがみ", romanization: "kabegami", meaning: "wallpaper", derivedMeanings: ["background image"] },
      { katakana: "カレンダー", romanization: "karendaa", meaning: "calendar" },
      { kanjis: ["新聞"], hiragana: "しんぶん", romanization: "shinbun", meaning: "newspaper" },
      { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },

      // books
      { kanjis: ["本"], hiragana: "ほん", romanization: "hon", meaning: "book" },
      { kanjis: ["手帳", "手帖"], hiragana: "てちょう", romanization: "techou", meaning: "notebook" },
      { katakana: "ノート", romanization: "nooto", meaning: "notebook", derivedMeanings: ["(verb) take note", "musical note", "notebook (computer)"] },
      { kanjis: ["メモ帳"], hiragana: "メモちょう", romanization: "memochou", meaning: "memo book" },
      { kanjis: ["日記"], hiragana: "にっき", romanization: "nikki", meaning: "diary" },
      { kanjis: ["教科書"], hiragana: "きょうかしょ", romanization: "kyoukasho", meaning: "textbook" },
      { kanjis: ["字引", "字引き"], hiragana: "じびき", romanization: "jibiki", meaning: "dictionary" },
      { kanjis: ["辞書"], hiragana: "じしょ", romanization: "jisho", meaning: "dictionary" },
      { kanjis: ["辞典"], hiragana: "じてん", romanization: "jiten", meaning: "dictionary" },
      { kanjis: ["事典"], hiragana: "じてん", romanization: "jiten", meaning: "encyclopedia" },
      { kanjis: ["字典"], hiragana: "じてん", romanization: "jiten", meaning: "Kanji dictionary" },
      { kanjis: ["文字典"], hiragana: "もじてん", romanization: "mojiten", meaning: "Kanji dictionary" },
      { kanjis: ["雑誌"], hiragana: "ざっし", romanization: "zasshi", meaning: "magazine" },

      // pens
      { kanjis: ["万年筆"], hiragana: "まんねんひつ", romanization: "mannenhitsu", meaning: "fountain pen" },
      { katakana: "ペン", romanization: "pen", meaning: "pen" },
      { katakana: "ボールペン", romanization: "boorupen", meaning: "ballpoint pen" },

      // electronics
      { kanjis: ["電気"], hiragana: "でんき", romanization: "denki", meaning: "electricity" },
      { kanjis: ["電池"], hiragana: "でんち", romanization: "denchi", meaning: "battery" },
      { kanjis: ["時計"], rareKanjis: ["土圭"], hiragana: "とけい", romanization: "tokei", meaning: "clock / watch" },
      { kanjis: ["電話"], hiragana: "でんわ", romanization: "denwa", meaning: "telephone", derivedMeanings: ["phone call"] },
      { katakana: "スマートフォン", romanization: "sumaatofon", meaning: "smartphone" },
      { katakana: "スマホ", romanization: "sumaho", meaning: "smartphone" },
      { katakana: "レコーダー", romanization: "rekoodaa", meaning: "recorder" },
      { katakana: "カメラ", romanization: "kamera", meaning: "camera" },
      { katakana: "キャメラ", romanization: "kyamera", meaning: "camera" },
      { katakana: "ロボット", romanization: "robotto", meaning: "robot" },
      { katakana: "ラジオ", romanization: "rajio", meaning: "radio" },
      { kanjis: ["録音機"], hiragana: "ろくおんき", romanization: "rokuonki", meaning: "tape recorder" },
      { katakana: "テープレコーダー", romanization: "teepurekoodaa", meaning: "tape recorder" },
      { katakana: "カセット", romanization: "kasetto", meaning: "cassette" },
      { katakana: "テレビ", romanization: "terebi", meaning: "television" },
      { katakana: "ストーブ", romanization: "sutoobu", meaning: "stove" },
      { kanjis: ["冷蔵庫"], hiragana: "れいぞうこ", romanization: "reizouko", meaning: "refrigerator" },
      { kanjis: ["洗濯機"], hiragana: "せんたくき", romanization: "sentakuki", meaning: "washing machine" },

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
      { kanjis: ["交通"], hiragana: "こうつう", romanization: "koutsuu", meaning: "traffic / transportation" },

      { katakana: "エスカレーター", romanization: "esukareetaa", meaning: "escalator" },
      { katakana: "エレベーター", romanization: "erebeetaa", meaning: "elevator" },

      { kanjis: ["車"], hiragana: "くるま", romanization: "kuruma", meaning: "car" },
      { kanjis: ["自転車"], hiragana: "じてんしゃ", romanization: "jitensha", meaning: "bicycle" },
      { kanjis: ["自動車"], hiragana: "じどうしゃ", romanization: "jidousha", meaning: "automobile" },
      { katakana: "バス", romanization: "basu", meaning: "bus" },
      { katakana: "タクシー", romanization: "takushii", meaning: "taxi" },
      { kanjis: ["電車"], hiragana: "でんしゃ", romanization: "densha", meaning: "train" },
      { kanjis: ["地下鉄"], hiragana: "ちかてつ", romanization: "chikatetsu", meaning: "subway" },
      { kanjis: ["路線"], hiragana: "ろせん", romanization: "rosen", meaning: "route (bus/train/airplane)" },

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
      { kanjis: ["音"], hiragana: "おと", romanization: "oto", meaning: "sound / musical note" },
      { kanjis: ["音楽"], hiragana: "おんがく", romanization: "ongaku", meaning: "music" },
      { katakana: "ミュージック", romanization: "myuujikku", meaning: "music" },
      { kanjis: ["声"], hiragana: "こえ", romanization: "koe", meaning: "voice" },
      { kanjis: ["音声"], hiragana: "おんせい", romanization: "onsei", meaning: "speech sound (as a data)" },
      { kanjis: ["歌", "唄", "詩"], hiragana: "うた", romanization: "uta", meaning: "song / singing" },
      { katakana: "アニメソング", romanization: "anime songu", meaning: "anime song" },
      { katakana: "アニソン", romanization: "anison", meaning: "anime song" },
      { katakana: "メドレー", romanization: "medorii", meaning: "medley" },

      // cinematic
      { kanjis: ["映画"], hiragana: "えいが", romanization: "eiga", meaning: "movie" },
      { katakana: "フィルム", romanization: "firumu", meaning: "film" },
      { katakana: "アニメ", romanization: "anime", meaning: "anime" },
      { katakana: "アニメーション", romanization: "animeeshon", meaning: "animation" },
      { katakana: "ドラマ", romanization: "dorama", meaning: "drama (TV shows / stage play)" },

      // shows
      { katakana: "ポッドキャスト", romanization: "poddokyasuto", meaning: "podcast" },
    );
  }
}
