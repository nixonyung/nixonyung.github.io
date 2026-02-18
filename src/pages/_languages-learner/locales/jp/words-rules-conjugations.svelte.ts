import type { JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendRulesConjugations(words: JapaneseWord[]) {
  if (flashcardSettings.words.grammarRules.conjugations.stemForm.value) {
    words.push(
      // stem form: forming compound verbs / act as noun prefixes
      { question: "会う -> stem", answer: "会い", romanization: "ai" },
      { question: "書く -> stem", answer: "書き", romanization: "kaki" },
      { question: "泳ぐ -> stem", answer: "泳ぎ", romanization: "oyogi" },
      { question: "写す -> stem", answer: "写し", romanization: "utsushi" },
      { question: "立つ -> stem", answer: "立ち", romanization: "tachi" },
      { question: "死ぬ -> stem", answer: "死に", romanization: "shini" },
      { question: "学ぶ -> stem", answer: "学び", romanization: "manabi" },
      { question: "休む -> stem", answer: "休み", romanization: "yasumi" },
      { question: "割る -> stem", answer: "割り", romanization: "wari" },
      { question: "食べる -> stem", answer: "食べ", romanization: "tabe" },
      { question: "起きる -> stem", answer: "起き", romanization: "oki" },
      { question: "閉じる -> stem", answer: "閉じ", romanization: "toji" },
      { question: "来る -> stem", answer: "来", romanization: "ki" },
      { question: "する -> stem", answer: "し", romanization: "shi" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.naiForm.value) {
    words.push(
      // -nai: negative
      { question: "会う + ない", answer: "会わない", romanization: "awanai" },
      { question: "書く + ない", answer: "書かない", romanization: "kakanai" },
      { question: "泳ぐ + ない", answer: "泳がない", romanization: "oyoganai" },
      { question: "写す + ない", answer: "写さない", romanization: "utsusanai" },
      { question: "立つ + ない", answer: "立たない", romanization: "tatanai" },
      { question: "死ぬ + ない", answer: "死なない", romanization: "shinanai" },
      { question: "学ぶ + ない", answer: "学ばない", romanization: "manabanai" },
      { question: "休む + ない", answer: "休まない", romanization: "yasumanai" },
      { question: "割る + ない", answer: "割らない", romanization: "waranai" },
      { question: "食べる + ない", answer: "食べない", romanization: "tabenai" },
      { question: "起きる + ない", answer: "起きない", romanization: "okinai" },
      { question: "閉じる + ない", answer: "閉じない", romanization: "tojinai" },
      { question: "来る + ない", answer: "来ない", romanization: "konai" },
      { question: "する + ない", answer: "しない", romanization: "shinai" },
      { question: "ある + ない (special case)", answer: "ない", romanization: "nai" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.passiveForm.value) {
    words.push(
      // passive form: passive voice
      { question: "会う -> passive", answer: "会われる", romanization: "awareru" },
      { question: "書く -> passive", answer: "書かれる", romanization: "kakareru" },
      { question: "泳ぐ -> passive", answer: "泳がれる", romanization: "oyogareru" },
      { question: "写す -> passive", answer: "写される", romanization: "utsusareru" },
      { question: "立つ -> passive", answer: "立たれる", romanization: "tatareru" },
      { question: "死ぬ -> passive", answer: "死なれる", romanization: "shinareru" },
      { question: "学ぶ -> passive", answer: "学ばれる", romanization: "manabareru" },
      { question: "休む -> passive", answer: "休まれる", romanization: "yasumareru" },
      { question: "割る -> passive", answer: "割られる", romanization: "warareru" },
      { question: "食べる -> passive", answer: "食べられる", romanization: "taberareru" },
      { question: "起きる -> passive", answer: "起きられる", romanization: "okirareru" },
      { question: "閉じる -> passive", answer: "閉じられる", romanization: "tojirareru" },
      { question: "来る -> passive", answer: "来られる", romanization: "korareru" },
      { question: "する -> passive", answer: "される", romanization: "sareru" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.causativeForm.value) {
    words.push(
      // -saseru: causative (forced / allowed) -> not on one's will
      { question: "会う -> causative", answer: "会わせる", romanization: "awaseru" },
      { question: "書く -> causative", answer: "書かせる", romanization: "kaakseru" },
      { question: "泳ぐ -> causative", answer: "泳がせる", romanization: "oyogaseru" },
      { question: "写す -> causative", answer: "写させる", romanization: "utsusaseru" },
      { question: "立つ -> causative", answer: "立たせる", romanization: "tataseru" },
      { question: "死ぬ -> causative", answer: "死なせる", romanization: "shinaseru" },
      { question: "学ぶ -> causative", answer: "学ばせる", romanization: "manabaseru" },
      { question: "休む -> causative", answer: "休ませる", romanization: "yasumaseru" },
      { question: "割る -> causative", answer: "割らせる", romanization: "waraseru" },
      { question: "食べる -> causative", answer: "食べさせる", romanization: "tabesaseru" },
      { question: "起きる -> causative", answer: "起きさせる", romanization: "okisaseru" },
      { question: "閉じる -> causative", answer: "閉じさせる", romanization: "tojisaseru" },
      { question: "来る -> causative", answer: "来させる", romanization: "kisaseru" },
      { question: "する -> causative", answer: "させる", romanization: "saseru" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.imperativeForm.value) {
    words.push(
      // imperative form: making commands
      { question: "会う -> imperative", answer: "会え", romanization: "ae" },
      { question: "書く -> imperative", answer: "書け", romanization: "kake" },
      { question: "泳ぐ -> imperative", answer: "泳げ", romanization: "oyoge" },
      { question: "写す -> imperative", answer: "写せ", romanization: "utsuse" },
      { question: "立つ -> imperative", answer: "立て", romanization: "tate" },
      { question: "死ぬ -> imperative", answer: "死ね", romanization: "shine" },
      { question: "学ぶ -> imperative", answer: "学べ", romanization: "manabe" },
      { question: "休む -> imperative", answer: "休め", romanization: "yasume" },
      { question: "割る -> imperative", answer: "割れ", romanization: "ware" },
      { question: "食べる -> imperative", answer: "食べろ", romanization: "tabero" },
      { question: "起きる -> imperative", answer: "起きろ", romanization: "okiro" },
      { question: "閉じる -> imperative", answer: "閉じろ", romanization: "tojiro" },
      { question: "来る -> imperative", answer: "来い", romanization: "koi" },
      { question: "する -> imperative", answer: "しろ", romanization: "shiro" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.conditionalForm.value) {
    words.push(
      // -ba: conditional
      { question: "会う -> conditional", answer: "会えば", romanization: "aeba" },
      { question: "書く -> conditional", answer: "書けば", romanization: "kakeba" },
      { question: "泳ぐ -> conditional", answer: "泳げば", romanization: "oyogeba" },
      { question: "写す -> conditional", answer: "写せば", romanization: "utsuseba" },
      { question: "立つ -> conditional", answer: "立てば", romanization: "tateba" },
      { question: "死ぬ -> conditional", answer: "死ねば", romanization: "shineba" },
      { question: "学ぶ -> conditional", answer: "学べば", romanization: "manabeba" },
      { question: "休む -> conditional", answer: "休めば", romanization: "yasumeba" },
      { question: "割る -> conditional", answer: "割れば", romanization: "wareba" },
      { question: "食べる -> conditional", answer: "食べれば", romanization: "tabereba" },
      { question: "起きる -> conditional", answer: "起きれば", romanization: "okireba" },
      { question: "閉じる -> conditional", answer: "閉じれば", romanization: "tojireba" },
      { question: "来る -> conditional", answer: "来れば", romanization: "kureba" },
      { question: "する -> conditional", answer: "すれば", romanization: "sureba" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.potentialForm.value) {
    words.push(
      // -eru: potential ("can" / "be able to")
      { question: "会う -> potential", answer: "会える", romanization: "aeru" },
      { question: "書く -> potential", answer: "書ける", romanization: "kakeru" },
      { question: "泳ぐ -> potential", answer: "泳げる", romanization: "oyogeru" },
      { question: "写す -> potential", answer: "写せる", romanization: "utsuseru" },
      { question: "立つ -> potential", answer: "立てる", romanization: "tateru" },
      { question: "死ぬ -> potential", answer: "死ねる", romanization: "shineru" },
      { question: "学ぶ -> potential", answer: "学べる", romanization: "manaberu" },
      { question: "休む -> potential", answer: "休める", romanization: "yasumeru" },
      { question: "割る -> potential", answer: "割れる", romanization: "wareru" },
      { question: "食べる -> potential (written)", answer: "食べられる", romanization: "taberareru" },
      { question: "食べる -> potential (spoken)", answer: "食べれる", romanization: "tabereru" },
      { question: "起きる -> potential (written)", answer: "起きられる", romanization: "okirareru" },
      { question: "起きる -> potential (spoken)", answer: "起きれる", romanization: "okireru" },
      { question: "閉じる -> potential (written)", answer: "閉じられる", romanization: "tojirareru" },
      { question: "閉じる -> potential (spoken)", answer: "閉じれる", romanization: "tojireru" },
      { question: "来る -> potential (written)", answer: "来られる", romanization: "kurareru" },
      { question: "来る -> potential (spoken)", answer: "来れる", romanization: "kureru" },
      { question: "する -> potential", answer: "できる", romanization: "sukiru" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.taForm.value) {
    words.push(
      // -ta: past tense
      { question: "会う + た", answer: "会った", romanization: "atta" },
      { question: "書く + た", answer: "書いた", romanization: "kaita" },
      { question: "行く + た (special case)", answer: "行った", romanization: "itta" },
      { question: "泳ぐ + た", answer: "泳いだ", romanization: "oyoida" },
      { question: "写す + た", answer: "写した", romanization: "utsushita" },
      { question: "立つ + た", answer: "立った", romanization: "tatta" },
      { question: "死ぬ + た", answer: "死んだ", romanization: "shinda" },
      { question: "学ぶ + た", answer: "学んだ", romanization: "mananda" },
      { question: "休む + た", answer: "休んだ", romanization: "yasunda" },
      { question: "割る + た", answer: "割った", romanization: "watta" },
      { question: "食べる + た", answer: "食べた", romanization: "tabeta" },
      { question: "起きる + た", answer: "起きた", romanization: "okita" },
      { question: "閉じる + た", answer: "閉じた", romanization: "tojita" },
      { question: "来る + た", answer: "来た", romanization: "kita" },
      { question: "する + た", answer: "した", romanization: "shita" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.teForm.value) {
    words.push(
      // -te: linking verbs

      // Godan verbs
      { question: "会う + て", answer: "会って", romanization: "atte" },
      { question: "書く + て", answer: "書いて", romanization: "kaite" },
      { question: "行く + て (special case)", answer: "行って", romanization: "itte" },
      { question: "泳ぐ + て", answer: "泳いで", romanization: "oyoide" },
      { question: "写す + て", answer: "写して", romanization: "utsushite" },
      { question: "立つ + て", answer: "立って", romanization: "tatte" },
      { question: "死ぬ + て", answer: "死んで", romanization: "shinde" },
      { question: "学ぶ + て", answer: "学んで", romanization: "manande" },
      { question: "休む + て", answer: "休んで", romanization: "yasunde" },
      { question: "割る + て", answer: "割って", romanization: "watte" },

      // Ichidan verbs
      { question: "食べる + て", answer: "食べて", romanization: "tabete" },
      { question: "起きる + て", answer: "起きて", romanization: "okite" },
      { question: "閉じる + て", answer: "閉じて", romanization: "tojite" },

      // Irregular verbs
      { question: "来る + て", answer: "来て", romanization: "kite" },
      { question: "する + て", answer: "して", romanization: "shite" },

      // Adj.
      { question: "甘い + て", answer: "甘くて", romanization: "amakute" },
      { question: "静かな + て", answer: "静かて", romanization: "shizukate" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.volitionalForm.value) {
    words.push(
      // volitional: "let's" / "shall we"
      { question: "会う -> volitional", answer: "会おう", romanization: "aou" },
      { question: "書く -> volitional", answer: "書こう", romanization: "kakou" },
      { question: "泳ぐ -> volitional", answer: "泳ごう", romanization: "oyogou" },
      { question: "写す -> volitional", answer: "写そう", romanization: "utsusou" },
      { question: "立つ -> volitional", answer: "立とう", romanization: "tatou" },
      { question: "死ぬ -> volitional", answer: "死のう", romanization: "shinou" },
      { question: "学ぶ -> volitional", answer: "学ぼう", romanization: "manabou" },
      { question: "休む -> volitional", answer: "休もう", romanization: "yasumou" },
      { question: "割る -> volitional", answer: "割ろう", romanization: "warou" },
      { question: "食べる -> volitional", answer: "食べよう", romanization: "tabeyou" },
      { question: "起きる -> volitional", answer: "起きよう", romanization: "okiyou" },
      { question: "閉じる -> volitional", answer: "閉じよう", romanization: "tojiyou" },
      { question: "来る -> volitional", answer: "来よう", romanization: "koyou" },
      { question: "する -> volitional", answer: "しよう", romanization: "shiyou" },
    );
  }

  if (flashcardSettings.words.grammarRules.conjugations.misc.value) {
    words.push(
      // i-Adjs.
      { hiragana: "い", romanization: "i", meaning: "(i-adj. in present tense)", exampleUsages: ["[i-Adj.]-い"] },
      { hiragana: "かった", romanization: "katta", meaning: "(i-adj. in past tense)", exampleUsages: ["[i-Adj.]-かった"] },
      { hiragana: "くない", romanization: "ku nai", meaning: "(i-adj. in present negative tense, casual)", exampleUsages: ["[i-Adj.]-くない"] },
      { hiragana: "くありません", romanization: "ku arimasen", meaning: "(i-adj. in present negative tense, polite)", exampleUsages: ["[i-Adj.]-くありません"] },
      { hiragana: "くなかった", romanization: "ku nakatta", meaning: "(i-adj. in past negative tense, casual)", exampleUsages: ["[i-Adj.]-くなかった"] },
      { hiragana: "くありませんでした", romanization: "ku arimasen deshita", meaning: "(i-adj. in past negative tense, polite)", exampleUsages: ["[i-Adj.]-くありませんでした"] },
      // TODO: -ku to change to adverb

      // na-Adjs.
      { hiragana: "な", romanization: "na", meaning: "(na-adj. in present tense, middle-of-sentence)", exampleUsages: ["[na-Adj.] な"] },
      { hiragana: "だ", romanization: "da", meaning: "(na-adj. in present tense, end-of-sentence, casual)", exampleUsages: ["[na-Adj.] だ。"] },
      { hiragana: "です", romanization: "desu", meaning: "(na-adj. in present tense, end-of-sentence, polite)", exampleUsages: ["[na-Adj.] です。"] },
      { hiragana: "だった", romanization: "datta", meaning: "(na-adj. in past tense, casual)", exampleUsages: ["[na-Adj.] だった"] },
      { hiragana: "でした", romanization: "deshita", meaning: "(na-adj. in past tense, polite)", exampleUsages: ["[na-Adj.] でした"] },
      { hiragana: "ない", romanization: "nai", meaning: "(na-adj. in present negative tense, casual)", exampleUsages: ["[na-Adj.] ない"] },
      { hiragana: "ではない", romanization: "dewa nai", meaning: "(na-adj. in present negative tense, polite)", exampleUsages: ["[na-Adj.] ではない"] },
      { hiragana: "じゃなかった", romanization: "ja nakatta", meaning: "(na-adj. in past negative tense, casual)", exampleUsages: ["[na-Adj.] じゃなかった"] },
      { hiragana: "ではありませんでした", romanization: "dewa arimasen deshita", meaning: "(na-adj. in past negative tense, polite)", exampleUsages: ["[na-Adj.] ではありませんでした"] },
      // TODO: -ni to change to adverb
    );
  }
}
