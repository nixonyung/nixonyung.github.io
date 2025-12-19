import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNouns(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsPeopleGeneric) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["人"], hiragana: "ひと", katakana: "ヒト", romanization: "hito", meaning: "person" },
      { kanjis: ["人々", "人びと", "人人"], hiragana: "ひとびと", romanization: "hitobito", meaning: "people" },
      { kanjis: ["他人"], hiragana: "たにん", romanization: "tanin", meaning: "others" },
      { kanjis: ["人物"], hiragana: "じんぶつ", romanization: "jinbutsu", meaning: "character" },

      { kanjis: ["成人"], hiragana: "せいじん", romanization: "seijin", meaning: "adult" },
      { kanjis: ["大人"], hiragana: "おとな", romanization: "otona", meaning: "grown-up" },

      { kanjis: ["赤ちゃん"], hiragana: "あかちゃん", romanization: "akachan", meaning: "infant" },
      { kanjis: ["幼童"], hiragana: "ようどう", romanization: "youdou", meaning: "young child" },
      { kanjis: ["１０代", "十代"], hiragana: "じゅうだい", romanization: "juudai", meaning: "teenagers" },
      { kanjis: ["若年", "弱年"], hiragana: "じゃくねん", romanization: "jakunen", meaning: "youth (age-wise)" },
      { kanjis: ["若者"], hiragana: "わかもの", romanization: "wakamono", meaning: "young person / 年輕人 / 後生仔/女" },
      { kanjis: ["青年"], hiragana: "せいねん", romanization: "seinen", meaning: "young adulthood (age-wise)" },
      { kanjis: ["中年"], hiragana: "ちゅうねん", romanization: "chuunen", meaning: "middle-aged" },
      { kanjis: ["高齢者"], hiragana: "こうれいしゃ", romanization: "koureisha", meaning: "elderly" },

      { kanjis: ["男"], hiragana: "おとこ", romanization: "otoko", meaning: "man" },
      { kanjis: ["少年"], hiragana: "しょうねん", romanization: "shounen", meaning: "young man" },
      { kanjis: ["公子"], hiragana: "こうし", romanization: "koushi", meaning: "young nobleman" },
      { kanjis: ["紳士"], hiragana: "しんし", romanization: "shinshi", meaning: "gentleman" },
      { kanjis: ["殿方"], hiragana: "とのがた", romanization: "tonogata", meaning: "gentlemen (woman speaking to a group of men)" },

      { kanjis: ["女"], hiragana: "おんな", romanization: "onna", meaning: "woman (objectified)" },
      { kanjis: ["少女"], rareKanjis: ["小女"], hiragana: "しょうじょ", romanization: "shoujo", meaning: "young lady" },
      { kanjis: ["女子"], hiragana: "じょし", romanization: "joshi", meaning: "woman" },
      { kanjis: ["乙女", "少女"], hiragana: "おとめ", romanization: "otome", meaning: "young lady (idealized) / 淑女" },
      { kanjis: ["婦人"], hiragana: "ふじん", romanization: "fujin", meaning: "lady" },

      { kanjis: ["〇〇"], hiragana: "まるまる", romanization: "marumaru", meaning: "(placeholder)" },

      { kanjis: ["一人", "１人", "独り"], hiragana: "ひとり", romanization: "hitori", meaning: "one person" },
      { kanjis: ["一人", "１人"], hiragana: "いちにん", romanization: "ichinin", meaning: "one person" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleFamily) {
    words.splice(
      words.length,
      0, //
      // parents
      { kanjis: ["父母"], hiragana: "ふぼ", romanization: "fubo", meaning: "parents" },
      { kanjis: ["父母"], hiragana: "ちちはは", romanization: "chichihaha", meaning: "parents" },
      { kanjis: ["親"], hiragana: "おや", romanization: "oya", meaning: "parent / parents" },
      { kanjis: ["両親"], hiragana: "りょうしん", romanization: "ryoushin", meaning: "parents" },

      { kanjis: ["父さん"], hiragana: "とうさん", romanization: "tousan", meaning: "father (calling him)" },
      { kanjis: ["老爺"], hiragana: "おやじ", romanization: "oyaji", meaning: "father (calling him, used by old-fashioned men)" },
      { kanjis: ["お父さん"], hiragana: "おとうさん", romanization: "otousan", meaning: "father (referring to him or someone else's)" },
      { kanjis: ["父"], hiragana: "ちち", romanization: "chichi", meaning: "my father (referring to him)" },
      { kanjis: ["父親"], hiragana: "ちちおや", romanization: "chichioya", meaning: "father (objectified)" },

      { kanjis: ["母さん"], hiragana: "かあさん", romanization: "kaasan", meaning: "mother (calling her)" },
      { kanjis: ["お袋"], hiragana: "おふくろ", romanization: "ofukuro", meaning: "mother (calling her, used by old-fashioned men)" },
      { kanjis: ["お母さん"], hiragana: "おかあさん", romanization: "okaasan", meaning: "mother (referring to her or someone else's)" },
      { kanjis: ["母"], hiragana: "はは", romanization: "haha", meaning: "my mother (referring to her)" },
      { kanjis: ["母親"], hiragana: "ははおや", romanization: "hahaoya", meaning: "mother (objectified)" },

      // children
      { kanjis: ["子供", "子ども"], hiragana: "こども", romanization: "kodomo", meaning: "child / children" },
      { kanjis: ["子孫"], hiragana: "しそん", romanization: "shison", meaning: "descendants" },
      { kanjis: ["お子様", "お子さま"], hiragana: "おこさま", romanization: "okosama", meaning: "child (referring to someone else's)" },
      { kanjis: ["親子"], hiragana: "おやこ", romanization: "oyako", meaning: "parent and child" },
      { kanjis: ["親子"], hiragana: "しんし", romanization: "shinshi", meaning: "parent and child" },

      { kanjis: ["息子", "息"], hiragana: "むすこ", romanization: "musuko", meaning: "son" },
      { kanjis: ["お子さん"], hiragana: "おこさん", romanization: "okosan", meaning: "son" },
      { kanjis: ["男の子"], hiragana: "おとこのこ", romanization: "otokonoko", meaning: "baby boy" },

      { kanjis: ["娘"], hiragana: "むすめ", romanization: "musume", meaning: "daughter" },
      { kanjis: ["お嬢さん"], hiragana: "おじょうさん", romanization: "ojousan", meaning: "daughter" },
      { kanjis: ["女の子"], hiragana: "おんなのこ", romanization: "onnanoko", meaning: "baby girl" },
      // TODO: offspring

      // siblings
      { kanjis: ["兄弟姉妹"], hiragana: "きょうだいしまい", romanization: "kyoudaishimai", meaning: "siblings" },
      { kanjis: ["兄弟"], hiragana: "きょうだい", romanization: "kyoudai", meaning: "brothers" },
      { kanjis: ["姉妹"], hiragana: "しまい", romanization: "shimai", meaning: "sisters" },

      { kanjis: ["兄さん"], hiragana: "にいさん", romanization: "niisan", meaning: "elder brother (calling him)" },
      { kanjis: ["お兄さん"], hiragana: "おにいさん", romanization: "oniisan", meaning: "elder brother (referring to him or someone else's)" },
      { kanjis: ["兄"], hiragana: "あに", romanization: "ani", meaning: "my elder brother (referring to him)" },
      { kanjis: ["兄貴"], hiragana: "あにき", katakana: "アニキ", romanization: "aniki", meaning: "elder brother / senior (calling him / referring to him)" },

      { kanjis: ["姉さん"], hiragana: "ねえさん", romanization: "neesan", meaning: "elder sister (calling her)" },
      { kanjis: ["お姉さん"], hiragana: "おねえさん", romanization: "oneesan", meaning: "elder sister (referring to her or someone else's" },
      { kanjis: ["姉"], hiragana: "あね", romanization: "ane", meaning: "my elder sister (referring to her)" },

      { kanjis: ["弟さん"], hiragana: "おとうとさん", romanization: "otoutosan", meaning: "younger brother (referring to him or someone else's" },
      { kanjis: ["弟"], hiragana: "おとうと", romanization: "otouto", meaning: "my younger brother (referring to him)" },

      { kanjis: ["妹さん"], hiragana: "いもうとさん", romanization: "imoutosan", meaning: "younger sister (referring to her or someone else's)" },
      { kanjis: ["妹"], hiragana: "いもうと", romanization: "imouto", meaning: "my younger sister (referring to her)" },

      // grandparents
      { kanjis: ["祖父母"], hiragana: "そふぼ", romanization: "sofubo", meaning: "grandparents" },
      { hiragana: "じじばば", preferredForm: "hiragana", kanjis: ["祖父祖母", "爺婆"], katakana: "ジジババ", romanization: "jijibaba", meaning: "elderly" },

      { kanjis: ["爺さん"], rareKanjis: ["祖父さん"], hiragana: "じいさん", romanization: "jiisan", meaning: "grandfather (calling him)" },
      { kanjis: ["お祖父さん"], hiragana: "おじいさん", romanization: "ojiisan", meaning: "grandfather / old man (referring to him or someone else's)" },
      { kanjis: ["お爺ちゃま", "お祖父ちゃま"], hiragana: "おじいちゃま", romanization: "ojiichama", meaning: "grandfather (child referring to him or someone else's)" },
      { kanjis: ["祖父"], hiragana: "そふ", romanization: "sofu", meaning: "my grandfather (referring to her)" },
      { kanjis: ["祖父"], hiragana: "じじ", romanization: "jiji", meaning: "my grandfather (referring to her)" },
      { katakana: "グランパ", romanization: "gulanpa", meaning: "grandpa" },

      { kanjis: ["婆ちゃん"], rareKanjis: ["祖母ちゃん"], hiragana: "ばあちゃん", romanization: "baachan", meaning: "grandmother (calling her)" },
      { kanjis: ["お婆ちゃん"], rareKanjis: ["お祖母ちゃん"], hiragana: "おばあちゃん", romanization: "obaachan", meaning: "grandmother / old woman (referring to her or someone else's)" },
      { hiragana: "そぼ", romanization: "sobo", meaning: "my grandmother (referring to her)" },
      { hiragana: "ばば", romanization: "baba", meaning: "my grandmother (referring to her)" },
      { katakana: "グランマ", romanization: "gulanma", meaning: "grandma" },

      // miscellaneous relations
      { kanjis: ["曽祖父母"], hiragana: "そうそふぼ", romanization: "sousofubo", meaning: "great-grandparents" },
      { kanjis: ["義父母"], hiragana: "ぎふぼ", romanization: "gifubo", meaning: "parents-in-law" },
      { kanjis: ["継父母"], hiragana: "けいふぼ", romanization: "keifubo", meaning: "step-parents" },
      { kanjis: ["養父母"], hiragana: "ようふぼ", romanization: "youfubo", meaning: "adoptive parents" },

      { kanjis: ["養子"], hiragana: "ようし", romanization: "youshi", meaning: "adoptive son" },
      { kanjis: ["養女"], hiragana: "ようじょ", romanization: "youjo", meaning: "adoptive daughter" },

      { hiragana: "いとこ", preferredForm: "hiragana", kanjis: ["従兄弟"], romanization: "itoko", meaning: "cousins (male)" },
      { hiragana: "いとこ", preferredForm: "hiragana", kanjis: ["従姉妹"], romanization: "itoko", meaning: "cousins (female)" },

      // TODO: child, son, daughter
      // TODO: 叔父 uncle, 叔母 aunt
      // TODO: nieces and nephews
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleFellows) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["夫婦"], rareKanjis: ["妻夫", "女夫"], hiragana: "ふうふ", romanization: "fuufu", meaning: "spouses" },

      { kanjis: ["夫", "良人"], hiragana: "おっと", romanization: "otto", meaning: "husband" },
      { kanjis: ["良人"], hiragana: "りょうじん", romanization: "ryoujin", meaning: "husband" },
      { kanjis: ["妻"], hiragana: "つま", romanization: "tsuma", meaning: "wife" },
      { kanjis: ["夫人"], hiragana: "ふじん", romanization: "fujin", meaning: "Mrs xxx" },

      { kanjis: ["友"], hiragana: "とも", romanization: "tomo", meaning: "friend (root word)" },
      { kanjis: ["友達"], hiragana: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
      { kanjis: ["達"], hiragana: "だち", katakana: "ダチ", romanization: "dachi", meaning: "pal (slang)" },
      { kanjis: ["相棒"], hiragana: "あいぼう", romanization: "aibou", meaning: "partner (informal)" },
      { kanjis: ["友人"], hiragana: "ゆうじん", romanization: "yuujin", meaning: "friend (formal)" },
      { kanjis: ["朋友"], hiragana: "ほうゆう", romanization: "houyuu", meaning: "friend (literary)" },
      { kanjis: ["親友"], hiragana: "しんゆう", romanization: "shinyuu", meaning: "close friend (formal)" },

      { kanjis: ["知り合い"], hiragana: "しりあい", romanization: "shiriai", meaning: "acquaintance" },
      { kanjis: ["先輩"], hiragana: "せんぱい", romanization: "senpai", meaning: "senior" },
      { kanjis: ["後輩"], hiragana: "こうはい", romanization: "kouhai", meaning: "junior" },
      { katakana: "チーム", romanization: "chiimu", meaning: "team" },
      { katakana: "チームワーク", romanization: "chiimuwaaku", meaning: "teamwork" },
      { katakana: "グループ", romanization: "guruupu", meaning: "group" },
      { katakana: "メンバー", romanization: "menbaa", meaning: "member" },

      { kanjis: ["先生"], hiragana: "せんせい", romanization: "sensei", meaning: "master" },
      { kanjis: ["大家"], hiragana: "たいか", romanization: "taika", meaning: "authority" },
      { kanjis: ["親方"], hiragana: "おやかた", romanization: "oyakata", meaning: "boss" },

      { kanjis: ["仲間"], hiragana: "なかま", romanization: "nakama", meaning: "fellow / companion (informal)" },
      { kanjis: ["同僚"], hiragana: "どうりょう", romanization: "douryou", meaning: "colleague (in similar position with you)" },
      { kanjis: ["上司"], hiragana: "じょうし", romanization: "joushi", meaning: "boss" },
      { kanjis: ["部下"], hiragana: "ぶか", romanization: "buka", meaning: "subordinate" },
      { kanjis: ["監督"], hiragana: "かんとく", romanization: "kantoku", meaning: "supervisor" },
      { kanjis: ["主管"], hiragana: "しゅかん", romanization: "shukan", meaning: "section head" },
      { kanjis: ["主任"], hiragana: "しゅにん", romanization: "shunin", meaning: "department head" },
      { kanjis: ["部長"], hiragana: "ぶちょう", romanization: "buchou", meaning: "department head" },
      { kanjis: ["係長"], rareKanjis: ["掛長"], hiragana: "かかりちょう", romanization: "kakarichou", meaning: "department head" },
      { kanjis: ["社長"], hiragana: "しゃちょう", romanization: "shachou", meaning: "president" },
    );
  }

  // TODO: directions
  if (jp.flashcardSettings.enableNounsNavigation) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["方"], hiragana: "ほう", romanization: "hou", meaning: "direction (root word)" },
      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "direction (root word)" },
      { kanjis: ["方向"], hiragana: "ほうこう", romanization: "houkou", meaning: "direction" },

      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "front" },
      { kanjis: ["後"], hiragana: "あと", romanization: "ato", meaning: "back" },
      { kanjis: ["左"], hiragana: "あと", romanization: "hidari", meaning: "left" },
      { kanjis: ["右"], hiragana: "みぎ", romanization: "migi", meaning: "right" },
      { kanjis: ["真ん中"], hiragana: "まんなか", romanization: "mannaka", meaning: "center" },
      { kanjis: ["向こう"], hiragana: "むこう", romanization: "mukou", meaning: "beyond / the other side / 嗰度" },
      { kanjis: ["向こう側", "向う側"], hiragana: "むこうがわ", romanization: "mukougawa", meaning: "the other side / 嗰邊" },
      { kanjis: ["東"], hiragana: "ひがし", romanization: "higashi", meaning: "east" },
      { kanjis: ["南"], hiragana: "みなみ", romanization: "minami", meaning: "south" },
      { kanjis: ["西"], hiragana: "にし", romanization: "nishi", meaning: "west" },
      { kanjis: ["北"], hiragana: "きた", romanization: "kita", meaning: "north" },

      { kanjis: ["間"], hiragana: "あいだ", romanization: "aida", meaning: "gap / distance" },
      { kanjis: ["距離"], hiragana: "きょり", romanization: "kyori", meaning: "distance" },

      { kanjis: ["近く"], hiragana: "ちかく", romanization: "chikaku", meaning: "nearby" },
      { kanjis: ["遠く"], hiragana: "とおく", romanization: "tooku", meaning: "afar" },
      { kanjis: ["隣"], hiragana: "となり", romanization: "tonari", meaning: "immediate neighbor" },
      { kanjis: ["側", "傍"], hiragana: "そば", romanization: "soba", meaning: "nearby" },
      { kanjis: ["側"], hiragana: "そく", romanization: "soku", meaning: "nearby" },

      { kanjis: ["地方"], hiragana: "ちほう", romanization: "chihou", meaning: "area / region" },
      { kanjis: ["場所"], hiragana: "ばしょ", romanization: "basho", meaning: "place" },
      { kanjis: ["名所"], hiragana: "などころ", romanization: "nadokoro", meaning: "famous place" },
      { kanjis: ["国", "邦"], hiragana: "くに", romanization: "kuni", meaning: "country" },
      { kanjis: ["都市"], hiragana: "とし", romanization: "toshi", meaning: "city" },
      { kanjis: ["村"], hiragana: "むら", romanization: "mura", meaning: "village" },

      { kanjis: ["見晴らし"], hiragana: "みはらし", romanization: "miharashi", meaning: "view" },
    );
  }

  // TODO: places
  if (jp.flashcardSettings.enableNounsPlacesGeneric) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["事務所"], hiragana: "じむしょ", romanization: "jimusho", meaning: "office" },
      { kanjis: ["空港"], hiragana: "くうこう", romanization: "kuukou", meaning: "airport" },

      { katakana: "コンビニ", romanization: "konbini", meaning: "convenience store" },
      { katakana: "トイレ", romanization: "toire", meaning: "toilet" },
      { katakana: "トイレット", romanization: "toiretto", meaning: "toilet" },
    );
  }

  // TODO: countries

  // TODO: numbers

  // TODO: colors

  // TODO: datetime
  if (jp.flashcardSettings.enableNounsTime) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["朝"], hiragana: "あさ", romanization: "asa", meaning: "morning" },
      { kanjis: ["午前"], hiragana: "ごぜん", romanization: "gozen", meaning: "morning" },
      { katakana: "モーニング", romanization: "mooningu", meaning: "morning" },
      { kanjis: ["今朝"], hiragana: "けさ", romanization: "kesa", meaning: "this morning" },
      { kanjis: ["今朝"], hiragana: "こんちょう", romanization: "konchou", meaning: "this morning" },
      { kanjis: ["午前中"], hiragana: "ごぜんちゅう", romanization: "gozenchuu", meaning: "in the morning" },

      { kanjis: ["昼", "午"], hiragana: "ひる", romanization: "hiru", meaning: "noon" },

      { kanjis: ["今週"], hiragana: "こんしゅう", romanization: "konshuu", meaning: "this week" },
      { kanjis: ["今週末"], hiragana: "こんしゅうまつ", romanization: "konshuumatsu", meaning: "this weekend" },
      { kanjis: ["先週"], hiragana: "せんしゅう", romanization: "senshuu", meaning: "last week" },
      { kanjis: ["前週"], hiragana: "ぜんしゅう", romanization: "zenshuu", meaning: "last week" },
      { kanjis: ["来週"], hiragana: "らいしゅう", romanization: "raishuu", meaning: "next week" },
      { kanjis: ["月曜日"], hiragana: "げつようび", romanization: "getsuyoubi", meaning: "Monday" },
      { kanjis: ["火曜日"], hiragana: "かようび", romanization: "kayoubi", meaning: "Tuesday" },
      { kanjis: ["水曜日"], hiragana: "すいようび", romanization: "suiyoubi", meaning: "Wednesday" },
      { kanjis: ["木曜日"], hiragana: "もくようび", romanization: "mokuyoubi", meaning: "Thursday" },
      { kanjis: ["金曜日"], hiragana: "きんようび", romanization: "kinyoubi", meaning: "Friday" },
      { kanjis: ["土曜日"], hiragana: "どようび", romanization: "doyoubi", meaning: "Saturday" },
      { kanjis: ["日曜日"], hiragana: "にちようび", romanization: "nichiyoubi", meaning: "Sunday" },

      { kanjis: ["季節"], hiragana: "きせつ", romanization: "kisetsu", meaning: "season" },
      { kanjis: ["春"], hiragana: "はる", romanization: "haru", meaning: "spring" },
      { kanjis: ["夏"], hiragana: "なつ", romanization: "natsu", meaning: "summer" },
      { kanjis: ["秋"], hiragana: "あき", romanization: "aki", meaning: "autumn" },
      { kanjis: ["冬"], hiragana: "ふゆ", romanization: "fuyu", meaning: "winter" },

      { kanjis: ["今年"], hiragana: "ことし", romanization: "kotoshi", meaning: "this year" },
      { kanjis: ["昨年"], hiragana: "さくねん", romanization: "sakunen", meaning: "last year (formal)" },
      { kanjis: ["来年"], hiragana: "らいねん", romanization: "rainen", meaning: "next year" },
      { kanjis: ["今日"], hiragana: "きょう", romanization: "kyou", meaning: "today" },
      { kanjis: ["昨日"], hiragana: "きのう", romanization: "kinou", meaning: "yesterday" },
      { kanjis: ["明日"], hiragana: "あした", romanization: "ashita", meaning: "tomorrow" },

      { kanjis: ["今回"], hiragana: "こんかい", romanization: "konkai", meaning: "this time" },
      { kanjis: ["次回"], hiragana: "じかい", romanization: "jikai", meaning: "next time" },
      { kanjis: ["前"], hiragana: "まえ", romanization: "mae", meaning: "previously (root word)" },
      { kanjis: ["以前"], rareKanjis: ["已前"], hiragana: "いぜん", romanization: "izen", meaning: "the past" },
    );
  }

  // linguistics

  if (jp.flashcardSettings.enableNounsIntangible) {
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

      { kanjis: ["世代"], hiragana: "せだい", romanization: "sedai", meaning: "generation" },
      { kanjis: ["誕生日"], hiragana: "たんじょうび", romanization: "tanjoubi", meaning: "birthday" },
      { kanjis: ["長寿"], hiragana: "ちょうじゅ", romanization: "chouju", meaning: "longevity" },
      { kanjis: ["結婚"], hiragana: "けっこん", romanization: "kekkon", meaning: "marriage" },
      { kanjis: ["離婚"], hiragana: "りこん", romanization: "rikon", meaning: "divorce" },

      { kanjis: ["社会"], hiragana: "しゃかい", romanization: "shakai", meaning: "society" },
      { kanjis: ["学校"], hiragana: "がっこう", romanization: "gakkou", meaning: "school" },
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
    );
  }

  if (jp.flashcardSettings.enableNounsMiscellaneous) {
    words.splice(
      words.length,
      0, //
      { kanjis: ["者"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (person)" },
      { kanjis: ["物"], hiragana: "もの", katakana: "モノ", romanization: "mono", meaning: "thing (object)" },

      // TODO: body parts
      { kanjis: ["手"], hiragana: "て", romanization: "te", meaning: "hand / arm" },
      { kanjis: ["お腹"], rareKanjis: ["お中"], hiragana: "おなか", romanization: "onaka", meaning: "belly / stomach" },

      // TODO: animals
      { kanjis: ["猫"], hiragana: "ねこ", katakana: "ネコ", romanization: "neko", meaning: "cat" },

      // TODO: professions
      { kanjis: ["食通"], hiragana: "しょくつう", romanization: "shokutsuu", meaning: "gourmet: someone who is very knowledgeable about food and enjoys trying new things" },
      { katakana: "グルメ", romanization: "gurume", meaning: "gourmet / fine food" },

      // TODO: transportations
      { katakana: "バス", romanization: "basu", meaning: "bus" },
      { kanjis: ["電車"], hiragana: "でんしゃ", romanization: "densha", meaning: "train" },

      { kanjis: ["食事"], hiragana: "しょくじ", romanization: "shokuji", meaning: "meal" },
      { kanjis: ["ご飯", "御飯"], hiragana: "ごはん", romanization: "gohan", meaning: "meal / cooked rice" },
      { kanjis: ["朝ご飯", "朝ごはん", "朝御飯"], hiragana: "あさごはん", romanization: "asagohan", meaning: "breakfast" },
      { kanjis: ["昼ご飯", "昼ごはん", "昼御飯"], hiragana: "ひるごはん", romanization: "hirugohan", meaning: "lunch" },
      { kanjis: ["晩ご飯", "晩ごはん", "晩御飯"], hiragana: "ばんごはん", romanization: "bangohan", meaning: "dinner" },

      // TODO: food (ingredients / dishes / kinds of restaurant)
      { kanjis: ["食べ物"], hiragana: "たべもの", romanization: "tabemono", meaning: "food" },
      { kanjis: ["外食"], hiragana: "がいしょく", romanization: "gaishoku", meaning: "eating out" },

      { kanjis: ["料理"], hiragana: "りょうり", romanization: "ryouri", meaning: "dish" },
      { kanjis: ["和食"], hiragana: "わしょく", romanization: "washoku", meaning: "Japanese cuisine" },
      { kanjis: ["洋食"], hiragana: "ようしょく", romanization: "youshoku", meaning: "Western cuisine" },

      { kanjis: ["寿司", "鮨"], rareKanjis: ["鮓"], hiragana: "すし", romanization: "sushi", meaning: "sushi" },
      { katakana: "カレー", romanization: "karii", meaning: "curry" },

      // TODO: drinks
      { kanjis: ["茶"], hiragana: "ちゃ", romanization: "cha", meaning: "tea" },
      { kanjis: ["お茶"], hiragana: "おちゃ", romanization: "ocha", meaning: "tea (polite)" },
      { katakana: "コーヒー", romanization: "koohii", meaning: "coffee" },

      // TODO: sports
      { katakana: "サッカー", romanization: "sakkaa", meaning: "soccer" },

      // TODO: household objects
      { kanjis: ["衣類"], hiragana: "いるい", romanization: "irui", meaning: "clothes" },
      { katakana: "シャツ", romanization: "shatsu", meaning: "shirt" },
      { kanjis: ["傘"], hiragana: "かさ", romanization: "kasa", meaning: "umbrella" },
      { kanjis: ["箱"], rareKanjis: ["函", "匣", "筥", "筐", "凾"], hiragana: "はこ", katakana: "ハコ", romanization: "hako", meaning: "box" },

      // TODO: equipments
      { kanjis: ["袋"], rareKanjis: ["嚢"], hiragana: "ふくろ", romanization: "fukuro", meaning: "bag" },
      { hiragana: "かばん", preferredForm: "hiragana", katakana: "カバン", kanjis: ["鞄"], romanization: "kaban", meaning: "bag / basket" },
      { kanjis: ["本"], hiragana: "ほん", romanization: "hon", meaning: "book" },
      { katakana: "カメラ", romanization: "kamera", meaning: "camera" },
      { katakana: "キャメラ", romanization: "kiamera", meaning: "camera" },
      { katakana: "カメラマン", romanization: "kameraman", meaning: "cameraman" },

      // miscellaneous
      { kanjis: ["道", "途", "路", "径"], hiragana: "みち", romanization: "michi", meaning: "road / path" },
      { kanjis: ["地図"], hiragana: "ちず", romanization: "chizu", meaning: "map" },
      { kanjis: ["種"], hiragana: "たね", romanization: "tane", meaning: "seed" },
    );
  }
}
