import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendFunctionalDegree(words: JapaneseWord[]) {
  // TODO: https://www.nihongomaster.com/japanese/dictionary/word/68426/nanraka-%E4%BD%95%E3%82%89%E3%81%8B-%E4%BD%95%E7%AD%89%E3%81%8B-%E3%81%AA%E3%82%93%E3%82%89%E3%81%8B

  if (flashcardSettings.words.functional.degree.value) {
    words.push(
      // comparative
      { hiragana: "とても", rareKanjis: ["迚も"], romanization: "totemo", meaning: "very", exampleUsages: ["とても [Adj.]", "とても [Verb]"] },
      { hiragana: "とっても", rareKanjis: ["迚も"], romanization: "tottemo", meaning: "very", exampleUsages: ["とても [Adj.]", "とても [Verb]"] },
      { hiragana: "めっちゃ", rareKanjis: ["滅茶"], romanization: "meccha", meaning: "very (casual, slang)" },
      { kanjis: ["非常に"], hiragana: "ひじょうに", romanization: "hijouni", meaning: "very (formal)" },
      { kanjis: ["大変", "大へん"], hiragana: "たいへん", romanization: "taihen", meaning: "very (formal, negative / sorry)" },
      { kanjis: ["大-"], hiragana: "だい", romanization: "dai-", meaning: "big / greatly", exampleUsages: ["大歓迎", "大家族"] },
      { kanjis: ["超-"], hiragana: "ちょう", romanization: "chou-", meaning: "super", exampleUsages: ["超xx"] },
      { kanjis: ["極めて"], hiragana: "きわめて", romanization: "kiwamete", meaning: "extremely (formal)" },
      { kanjis: ["大いに"], hiragana: "おおいに", romanization: "ooini", meaning: "extremely (written, exaggerated)" },

      // comparative - with expectations
      { hiragana: "かなり", rareKanjis: ["可也", "可成り", "可なり", "可成"], romanization: "kanari", meaning: "quite (better than expected)" },
      { hiragana: "すごく", preferredForm: "hiragana", kanjis: ["凄く"], romanization: "sugoku", meaning: "very (casual, better than expected)" },
      { hiragana: "ずいぶん", preferredForm: "hiragana", kanjis: ["随分", "ずい分"], romanization: "zuibun", meaning: "very (better than expected)" },

      { hiragana: "しか", romanization: "shika", meaning: "only (unsatisfied)" },
      { hiragana: "ばかり", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "only (nothing else)", derivedMeanings: ["just / freshly (emphasizing the feeling)"], exampleUsages: ["2025年に設立されたばかり"] },

      // superlative
      { kanjis: ["最も", "尤も"], hiragana: "もっとも", romanization: "mottomo", meaning: "the most" },
      { kanjis: ["一番", "１番"], hiragana: "いちばん", romanization: "ichiban", meaning: "xxx is the most xxx", exampleUsages: ["[Noun] は(が) 一番 [Verb / Adj.] です。"] },
      { kanjis: ["何より"], hiragana: "なにより", romanization: "naniyori", meaning: "above anything else" },

      // indefinite quantities (proportions)
      { kanjis: ["幾-"], hiragana: "いく", romanization: "iku", meaning: "a few", exampleUsages: ["幾つ"] },
      { kanjis: ["何らか", "何等か"], hiragana: "なんらか", romanization: "nanraka", meaning: "somewhat" },
      { kanjis: ["何も"], hiragana: "なにも", romanization: "nanimo", meaning: "not at all" },
      { kanjis: ["何も"], hiragana: "なんも", romanization: "nanmo", meaning: "not at all (spoken)" },
      { hiragana: "あまり", romanization: "amari", meaning: "not much" },
      { kanjis: ["丁度"], hiragana: "ちょうど", romanization: "choudo", meaning: "exactly" },
      { hiragana: "くらい", romanization: "kurai", meaning: "around", exampleUsages: ["5年前くらいから"] },
      { hiragana: "だけ", preferredForm: "hiragana", kanjis: ["丈"], romanization: "dake", meaning: "only (in its entirety)" },
      { hiragana: "いっぱい", romanization: "ippai", meaning: "fully / as much as possible", exampleUsages: ["いっぱいにする (make into full)"] },
      { kanjis: ["全部"], hiragana: "ぜんぶ", romanization: "zenbu", meaning: "all (concrete items)" },
      { hiragana: "すべて", kanjis: ["全て"], rareKanjis: ["総て", "凡て", "惣て", "渾て"], romanization: "subete", meaning: "all (formal, for abstract concepts)" },
      { kanjis: ["全体"], hiragana: "ぜんたい", romanization: "zentai", meaning: "the whole thing (written, for abstract concepts)", exampleUsages: ["[Noun] 全体"] },
      { kanjis: ["半分"], hiragana: "はんぶん", romanization: "hanbun", meaning: "half" },
      { hiragana: "ほとんど", preferredForm: "hiragana", kanjis: ["殆ど"], romanization: "hotondo", meaning: "most of" },
      { hiragana: "だんだん", preferredForm: "hiragana", kanjis: ["段々", "段段"], romanization: "dandan", meaning: "gradually" },
      { kanjis: ["少し"], rareKanjis: ["寡し", "些し"], hiragana: "すこし", romanization: "sukoshi", meaning: "a little (amount)" },
      { hiragana: "もっと", romanization: "motto", meaning: "even more" },
      { kanjis: ["多く"], hiragana: "おおく", romanization: "ooku", meaning: "many / much" },
      { kanjis: ["大分"], hiragana: "だいぶ", romanization: "daibu", meaning: "a lot" },
      { hiragana: "たくさん", preferredForm: "hiragana", kanjis: ["沢山"], romanization: "takusan", meaning: "a lot / much", exampleUsages: ["たくさん勉強します"] },
      { hiragana: "まだまだ", preferredForm: "hiragana", kanjis: ["未だ未だ"], romanization: "madamada", meaning: "not done yet" },
      { hiragana: "いくつか", preferredForm: "hiragana", kanjis: ["幾つか"], romanization: "ikutsuka", meaning: "some / a few" },
      { hiragana: "いくつも", preferredForm: "hiragana", kanjis: ["幾つも"], romanization: "ikutsumo", meaning: "many / much" },
      { hiragana: "いくらか", preferredForm: "hiragana", kanjis: ["幾らか"], romanization: "ikuraka", meaning: "some / a little" },
      { hiragana: "いくらも", preferredForm: "hiragana", kanjis: ["幾らも"], romanization: "ikuramo", meaning: "many" },
      { hiragana: "うんと", romanization: "unto", meaning: "much (spoken, used by women)" },
      { hiragana: "ほとんど", preferredForm: "hiragana", kanjis: ["殆ど"], rareKanjis: ["幾ど"], romanization: "hotondo", meaning: "nearly all" },
      // TODO: each

      // definite quantities - numbers
      { kanjis: ["0", "〇"], hiragana: "ゼロ", romanization: "zero", meaning: "zero / 0" },
      { kanjis: ["零"], hiragana: "れい", romanization: "rei", meaning: "zero / 0" },
      { katakana: "ゼロ", romanization: "zero", meaning: "zero / 0" },
      { kanjis: ["一", "1", "壱", "弌"], hiragana: "いち", romanization: "ichi", meaning: "one / 1" },
      { kanjis: ["二", "2", "弐", "弍"], hiragana: "に", romanization: "ni", meaning: "two / 2" },
      { kanjis: ["二", "2", "弐", "弍"], hiragana: "ふた", romanization: "futa", meaning: "two / 2" },
      { kanjis: ["二", "2", "弐", "弍"], hiragana: "ふ", romanization: "fu", meaning: "two / 2" },
      { kanjis: ["三", "3", "参"], hiragana: "さん", romanization: "san", meaning: "three / 3" },
      { kanjis: ["三", "3", "参"], hiragana: "み", romanization: "mi", meaning: "three / 3" },
      { kanjis: ["三", "3", "参"], hiragana: "み", romanization: "mi", meaning: "three / 3" },
      { kanjis: ["四", "4", "肆"], hiragana: "し", romanization: "shi", meaning: "four / 4" },
      { kanjis: ["四"], hiragana: "よん", romanization: "yon", meaning: "four / 4" },
      { kanjis: ["五", "5", "伍"], hiragana: "ご", romanization: "go", meaning: "five / 5" },
      { kanjis: ["五", "5", "伍"], hiragana: "いつ", romanization: "itsu", meaning: "five / 5" },
      { kanjis: ["六", "6", "陸"], hiragana: "ろく", romanization: "roku", meaning: "six / 6" },
      { kanjis: ["六", "6", "陸"], hiragana: "む", romanization: "mu", meaning: "six / 6" },
      { kanjis: ["七", "7"], hiragana: "しち", romanization: "shichi", meaning: "seven / 7" },
      { kanjis: ["七", "7"], hiragana: "なな", romanization: "nana", meaning: "seven / 7" },
      { kanjis: ["八", "8", "捌"], hiragana: "はち", romanization: "hachi", meaning: "eight / 8" },
      { kanjis: ["八", "8", "捌"], hiragana: "や", romanization: "ya", meaning: "eight / 8" },
      { kanjis: ["九", "9", "玖"], hiragana: "きゅう", romanization: "kyuu", meaning: "nine / 9" },
      { kanjis: ["九", "9", "玖"], hiragana: "く", romanization: "ku", meaning: "nine / 9" },
      { kanjis: ["九", "9", "玖"], hiragana: "この", romanization: "kono", meaning: "nine / 9" },
      { kanjis: ["九", "9", "玖"], hiragana: "ここ", romanization: "koko", meaning: "nine / 9" },
      { kanjis: ["十", "10", "拾", "什", "一〇"], hiragana: "じゅう", romanization: "juu", meaning: "ten / 10" },
      { kanjis: ["百", "100", "陌", "佰", "一〇〇"], hiragana: "ひゃく", romanization: "hyaku", meaning: "hundred / 100" },
      { kanjis: ["千", "阡", "仟"], hiragana: "せん", romanization: "sen", meaning: "thousand / 1,000" },
      { kanjis: ["万"], hiragana: "まん", romanization: "man", meaning: "ten thousand / 10,000" },

      // definite quantities - counters
      // TODO: https://www.tofugu.com/japanese/japanese-counters-list/
      { hiragana: "-つ", rareKanjis: ["-箇", "個"], romanization: "tsu", meaning: "(general purpose counter)", exampleUsages: ['二つ("futatsu") の [Noun]'] },
      { kanjis: ["-個"], rareKanjis: ["-箇"], hiragana: "こ", romanization: "ko", meaning: "(counter for objects)" },
      { kanjis: ["-番"], hiragana: "ばん", romanization: "ban", meaning: "(enumeration in a series)" },
      { kanjis: ["-人"], hiragana: "にん", romanization: "nin", meaning: "(counter for people)" },
      { kanjis: ["-匹", "-疋"], hiragana: "ひき", romanization: "hiki", meaning: "(counter for small animals)" },
      { kanjis: ["-歳", "-才"], hiragana: "さい", romanization: "sai", meaning: "(counter for age)", exampleUsages: ['二十歳("hatachi")'] },
      { kanjis: ["-回"], hiragana: "かい", romanization: "kai", meaning: "(counter for occurrences)" },
      { kanjis: ["-度"], hiragana: "ど", romanization: "do", meaning: "(counter for occurrences / temperature / angle)" },
      { katakana: "-ページ", preferredForm: "katakana", kanjis: ["-頁"], romanization: "peeji", meaning: "page (counter for pages)" },
      { kanjis: ["-冊"], hiragana: "さつ", romanization: "satsu", meaning: "(counter for books)" },
      { kanjis: ["-本"], hiragana: "ほん", romanization: "hon", meaning: "(counter for long, cylindrical objects / TV shows / films / soccer goals / phone calls)" },
      { kanjis: ["-枚"], hiragana: "まい", romanization: "mai", meaning: "(counter for thin, flat objects / sheets of paper / plates / coins)" },
      { kanjis: ["-杯", "-盃"], hiragana: "はい", romanization: "hai", meaning: "(counter for cups)" },
      { kanjis: ["-台"], hiragana: "だい", romanization: "dai", meaning: "(counter for machines)" },
      { kanjis: ["-輛", "-輌"], hiragana: "りょう", romanization: "ryou", meaning: "(counter for vehicles)" },
      { kanjis: ["-階"], hiragana: "かい", romanization: "kai", meaning: "(counter for storeys)" },

      { kanjis: ["一人", "独り"], hiragana: "ひとり", romanization: "hitori", meaning: "one person" },
      { kanjis: ["二人"], hiragana: "ふたり", romanization: "futari", meaning: "two people" },
      { kanjis: ["１００円"], hiragana: "ひゃくえん", romanization: "hyakuen", meaning: "100 yen" },
      { kanjis: ["一杯", "１杯"], hiragana: "いっぱい", romanization: "ippai", meaning: "one cup" },
      { kanjis: ["一周"], hiragana: "いっしゅう", romanization: "isshuu", meaning: "one lap" },
      { kanjis: ["就き"], hiragana: "つき", romanization: "tsuki", meaning: "per" },
      { hiragana: "ごと", preferredForm: "hiragana", kanjis: ["毎"], romanization: "goto", meaning: "each / every" },
      { kanjis: ["もう一度"], hiragana: "もういちど", romanization: "mouichido", meaning: "once more / again" },
      { kanjis: ["年"], hiragana: "ねん", romanization: "nen", meaning: "year" },
      { katakana: "メートル", rareKanjis: ["米"], romanization: "meetoru", meaning: "meter (m)" },
      { katakana: "キロメートル", rareKanjis: ["粁"], romanization: "kiromeetoru", meaning: "kilometer (km)" },
      { katakana: "グラム", rareKanjis: ["瓦"], romanization: "guramu", meaning: "gram (g)" },
      { katakana: "キログラム", rareKanjis: ["瓩"], romanization: "kiroguramu", meaning: "kilogram (kg)" },

      // interrogative
      { kanjis: ["何人"], hiragana: "なんにん", romanization: "nannin", meaning: "how many people" },
      { hiragana: "いくつ", preferredForm: "hiragana", kanjis: ["幾つ"], romanization: "ikutsu", meaning: "how many" },
      { hiragana: "いくら", preferredForm: "hiragana", kanjis: ["幾ら"], romanization: "ikura", meaning: "how much" },
      { kanjis: ["何度"], hiragana: "なんど", romanization: "nando", meaning: "how many times / how many degrees" },
    );
  }
}
