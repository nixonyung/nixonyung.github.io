import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendConjunctions(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableConjunctions) {
    words.splice(
      words.length,
      0, //
      // TODO: listing
      { hiragana: "か", romanization: "ka", meaning: "or (listing options)", exampleUsages: ["[Noun] か [Noun] か ...", "[Noun] か [Noun] ？"] },
      { hiragana: "たり", romanization: "tari", meaning: "and (listing actions / targets)", exampleUsages: ["[Verb-た] り ...", "[Noun] だったり ...", "[i-Adj. (dropped)] だったり ...", "[na-Adj.] だったり ..."] },
      { hiragana: "と", romanization: "to", meaning: "and (listing ALL subjects) / with me", exampleUsages: ["[Noun] と [Noun] ...", "[Noun] と ..."] },
      { hiragana: "や", romanization: "ya", meaning: "and (listing SOME subjects)", exampleUsages: ["[Noun] や [Noun] ..."] },
      { hiragana: "も", romanization: "mo", meaning: "also", exampleUsages: ["[Noun] も [Verb]", "[Noun] も [Noun] も [Verb]", "[Noun] も [Noun] も [Noun] も [Verb]"] },

      { hiragana: "とか", romanization: "toka", meaning: "or something like that" },

      { hiragana: "ばかり", preferredForm: "hiragana", rareKanjis: ["許り", "許"], romanization: "bakari", meaning: "only / 只" },
      { hiragana: "だけ", preferredForm: "hiragana", kanjis: ["丈"], romanization: "dake", meaning: "merely" },

      { hiragana: "など", preferredForm: "hiragana", kanjis: ["等", "抔"], romanization: "nado", meaning: "etc." },

      // TODO: temporal
      { hiragana: "そして", romanization: "soshite", meaning: "and then", exampleUsages: ["...。 そして ..."] },
      { hiragana: "それから", romanization: "sorekara", meaning: "after that", exampleUsages: ["...。 それから ...", "あなたはそれから ...？"] },

      { hiragana: "もう", romanization: "mou", meaning: '("not happening again":) already', exampleUsages: ["[Noun] はもう [Clause]"] },
      { hiragana: "もう", romanization: "mou", meaning: '("not happening again":) not again', exampleUsages: ["もう [Verb]"] },

      { kanjis: ["時", "刻", "秋"], hiragana: "とき", romanization: "toki", meaning: "at that time", exampleUsages: ["[Verb] 時、", "[Noun] の時、", "[na-Adj.] 時、", "[i-Adj.] 時、"] },

      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) since", exampleUsages: ["[Noun (time/place)] から [Verb]"] },
      { hiragana: "まで", romanization: "made", meaning: "(introducing termination:) until", exampleUsages: ["[Noun (time/place)] まで [Verb]"] },
      { hiragana: "〇〇から〇〇まで", romanization: "kara, made", meaning: "from xxx to xxx", exampleUsages: ["[Noun (time/place)] から [Noun (time/place)] まで [Verb]"] },

      { hiragana: "まだ", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "still (continuing)", exampleUsages: ["まだ [Noun]"] },
      { hiragana: "まだ〇〇いる", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "(emphasize continuity:) still", exampleUsages: ["まだ [Verb-て] いる"] },
      { hiragana: "まだ〇〇いない", preferredForm: "hiragana", kanjis: ["未だ"], romanization: "mada", meaning: "(emphasize continuity:) not yet", exampleUsages: ["まだ [Verb-て] いない", "まだ [Verb-て] いません"] },

      { kanjis: ["前に"], hiragana: "まえに", romanization: "maeni", meaning: "before xxx", exampleUsages: ["[Noun] の前に ...", "[Verb-る] 前に ..."] },
      { kanjis: ["後で"], hiragana: "あとで", romanization: "atode", meaning: "after xxx (informal)", exampleUsages: ["[Noun] の後で ...", "[Verb-た] 後で ..."] },
      { kanjis: ["後に"], hiragana: "あとに", romanization: "atoni", meaning: "after xxx (formal)", exampleUsages: ["[Noun] の後に ...", "[Verb-た] 後に ..."] },

      { hiragana: "つもりです", romanization: "tsumori desu", meaning: "planning to", exampleUsages: ["[Verb] つもりです。"] },
      { hiragana: "つもりはない", romanization: "tsumori wa nai", meaning: "planning not to (spoken, casual)", exampleUsages: ["[Verb-ない (dropped)] つもりはない"] },

      { hiragana: "ている", romanization: "-te iru", meaning: "is doing xxx / xxx is still ongoing (active voice, casual)", exampleUsages: ["[Verb-て] いる ..."] },
      { hiragana: "ています", romanization: "-te imasu", meaning: "is doing xxx / xxx is still ongoing (active voice, polite)", exampleUsages: ["[Verb-て] います ..."] },
      { hiragana: "ていない", romanization: "-te inai", meaning: "is not doing / xxx is still ongoing (active voice, casual)", exampleUsages: ["[Verb-て] いない ..."] },
      { hiragana: "ていません", romanization: "-te imasen", meaning: "is not doing / xxx is still ongoing (active voice, polite)", exampleUsages: ["[Verb-て] いません ..."] },

      { hiragana: "たことがある", romanization: "-ta koto ga aru", meaning: "have done xxx (casual)", exampleUsages: ["[Verb-た] ことがある ..."] },
      { hiragana: "たことがあります", romanization: "-ta koto ga arimasu", meaning: "have done xxx (polite)", exampleUsages: ["[Verb-た] ことがあります ..."] },
      { hiragana: "たことがない", romanization: "-ta koto ga nai", meaning: "haven't done xxx (casual)", exampleUsages: ["[Verb-た] ことがない ..."] },
      { hiragana: "たことがありません", romanization: "-ta koto ga arimasen", meaning: "haven't done xxx (polite)", exampleUsages: ["[Verb-た] ことがありません ..."] },

      { hiragana: "てある", romanization: "-te aru", meaning: "xxx has been done (passive voice, casual)", exampleUsages: ["[Verb-て] ある ..."] },
      { hiragana: "てあります", romanization: "-te arimasu", meaning: "xxx has been done (passive voice, polite)", exampleUsages: ["[Verb-て] あります ..."] },
      { hiragana: "てない", romanization: "-te nai", meaning: "xxx has not been done (passive voice, casual)", exampleUsages: ["[Verb-て] ない ..."] },
      { hiragana: "てありません", romanization: "-te arimasen", meaning: "xxx has not been done (passive voice, polite)", exampleUsages: ["[Verb-て] ありません ..."] },

      // TODO: logical
      { hiragana: "なぜなら", preferredForm: "hiragana", kanjis: ["何故なら"], romanization: "nazenara", meaning: "because" },
      { hiragana: "なぜならば", preferredForm: "hiragana", kanjis: ["何故ならば"], romanization: "nazenaraba", meaning: "because" },
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) because of ...", exampleUsages: ["[Clause ending with Verb] から ...", "[Clause ending with Noun] だから ...", "[Clause ending with i-Adj.] から ...", "[Clause ending with na-Adj.] だから ..."] },
      { hiragana: "から", romanization: "kara", meaning: "(introducing precedent:) (who the action is from)", exampleUsages: ["... [Noun (people/things)] から [Verb]"] },
      { hiragana: "てから", romanization: "kara", meaning: "(introducing precedent:) xxx and immediately after", exampleUsages: ["[Verb-て] から ..."] },
      { hiragana: "ので", romanization: "node", meaning: "because ...", exampleUsages: ["[Clause ending with Verb] ので ...", "[Clause ending with Noun] なので ...", "[Clause ending with i-Adj.] ので ...", "[Clause ending with na-Adj.] なので ..."] },
      { hiragana: "のせいで", preferredForm: "hiragana", rareKanjis: ["の所為で"], romanization: "noseide", meaning: "due to", exampleUsages: ["[Noun] のせいで [Clause]"] },

      // TODO: emphasizing
      { kanjis: ["と言う"], hiragana: "という", romanization: "to iu", meaning: "xxx is called/said", exampleUsages: ["(name) という [Pronoun] ..."] },

      { hiragana: "〇〇んだ ", romanization: "-n da", meaning: "it is because (spoken, casual)", exampleUsages: ["[Clause] んだ。"] },
      { hiragana: "〇〇んです", romanization: "-n desu", meaning: "it is because (spoken, polite)", exampleUsages: ["[Clause] んです。"] },
      { hiragana: "〇〇のだ ", romanization: "-no da", meaning: "it is because (written, casual)", exampleUsages: ["[Clause] のだ。"] },
      { hiragana: "〇〇のです", romanization: "-no desu", meaning: "it is because (written, polite)", exampleUsages: ["[Clause] のです。"] },

      // TODO: politeness
      // TODO: desu, desu ne
      { hiragana: "と思う。", romanization: "to omou", meaning: "I think (casual)", exampleUsages: ["[Verb] と思う。", "[Noun] だと思う。", "[i-Adj.] と思う。", "[na-Adj.] だと思う。"] },
      { hiragana: "と思います。", romanization: "to omoimasu", meaning: "I think (polite)", exampleUsages: ["[Verb] と思います。", "[Noun] だと思います。", "[i-Adj.] と思います。", "[na-Adj.] だと思います。"] },
      { hiragana: "と思っている。", romanization: "to omotteiru", meaning: "I am thinking", exampleUsages: ["[Verb] と思っている。", "[Noun] だと思っている。", "[i-Adj.] と思っている。", "[na-Adj.] だと思っている。"] },

      // TODO: describing degree (adverbs?)
      { kanjis: ["一番", "１番"], hiragana: "いちばん", romanization: "ichiban", meaning: "xxx is the most xxx", exampleUsages: ["[Noun] は(が) 一番 [Verb / Adj.] です。"] },
      { hiragana: "とても", rareKanjis: ["迚も"], romanization: "totemo", meaning: "very", exampleUsages: ["とても [Adj.]", "とても [Verb]"] },

      { hiragana: "だけ", romanization: "dake", meaning: "xxx (in its entirety)", exampleUsages: ["[Noun] だけ", "[Verb] だけ", "[Adj.] だけ", "[Clause] だけ"] },

      // TODO: comparative
      { hiragana: "でも", romanization: "demo", meaning: "however (in contrast) (spoken, casual)", exampleUsages: ["...。 でも、[Clause]"] },
      { hiragana: "しかし", rareKanjis: ["然し", "併し"], romanization: "shikashi", meaning: "however (in contrast) (written, polite)", exampleUsages: ["...。 しかし、[Clause]"] },
      { kanjis: ["但し"], hiragana: "ただし", romanization: "tadashi", meaning: "however (exception to what is said) (written, polite)", exampleUsages: ["...。 しかし、[Clause]"] },

      { hiragana: "が", romanization: "ga", meaning: "even though", exampleUsages: ["[Clause] が、 [Clause]。"] },
      { hiragana: "けど", romanization: "kedo", meaning: "but (casual)", exampleUsages: ["[Clause] けど、 [Clause]。", "[Noun] は [Adj.] けど [Adj.]。", "...。 けど、 [Clause]。"] },
      { hiragana: "けれど", romanization: "keredo", meaning: "but (polite)", exampleUsages: ["[Clause] けれど、 [Clause]。", "[Noun] は [Adj.] けれど [Adj.]。", "...。 けれど、 [Clause]。"] },
      { hiragana: "けれども", romanization: "keredomo", meaning: "but (very formal)", exampleUsages: ["[Clause] けれども、 [Clause]。", "[Noun] は [Adj.] けれども [Adj.]。", "...。 けれども、 [Clause]。"] },

      { hiragana: "より", romanization: "yori", meaning: "compared to", exampleUsages: ["[Noun] は [Noun] より [Adj.] です。"] },
      { kanjis: ["〇〇より〇〇方が"], hiragana: "〇〇より〇〇ほうが", romanization: "yori ~ hou ga", meaning: "compared to xxx, xxx is even more xxx", exampleUsages: ["[Noun] より、 [Noun] のほうが [Adj.] です。", "[Verb] より、 [Verb] のほうが [Adj.] です。", "[Adj.] より、 [Adj.] のほうが [Adj.] です。"] },

      { kanjis: ["〇〇の中で〇〇が一番〇〇"], hiragana: "〇〇のなかで〇〇がいちばん〇〇", romanization: "-no naka de 〇〇 ga ichiban", meaning: "in xxx, xxx is the most xxx", exampleUsages: ["[Noun] の中で [Noun] が 一番 ..."] },

      // TODO: conditional
      { hiragana: "たら", romanization: "tara", meaning: "if" },
      { hiragana: "とも", romanization: "tomo", meaning: "even if" },
      { hiragana: "なら", preferredForm: "hiragana", romanization: "nara", meaning: "in that case" },
      { hiragana: "ならば", preferredForm: "hiragana", romanization: "naraba", meaning: "in that case" },

      // TODO: exclamational
      { hiragana: "よ", romanization: "yo", meaning: "(exclamation, spoken)", exampleUsages: ["[Clause] よ。", "[Clause] よね。"] },
      { hiragana: "なあ", romanization: "naa", meaning: '("I think") - wow / I wonder (casual)', exampleUsages: ["[Clause] なあ。"] },

      { hiragana: "ましょう！", romanization: "mashou", meaning: "let's xxx (polite)", exampleUsages: ["[Verb-ます (dropped)] ましょう！"] },
      { hiragana: "しましょう！", romanization: "shimashou", meaning: "let's do xxx (polite)", exampleUsages: ["[Noun] しましょう！"] },

      // TODO: interrogative
      { hiragana: "か？", romanization: "ka", meaning: "(question marker)", exampleUsages: ["[Clause] か？"] },
      { hiragana: "と思わない？", romanization: "to omowanai", meaning: "don't you think? (casual)", exampleUsages: ["[Verb] と思わない？", "[Noun] だと思わない？", "[i-Adj.] と思わない？", "[na-Adj.] だと思わない？"] },

      { hiragana: "どう", romanization: "dou", meaning: "how is xxx?", exampleUsages: ["[Noun] はどうですか？"] },
      { hiragana: "どうして", romanization: "doushite", meaning: "why does that happen?", exampleUsages: ["どうして [Clause]？", "[Noun] はどうして [Verb]？"] },
      { hiragana: "どうやって", romanization: "douyatte", meaning: "how to xxx?", exampleUsages: ["どうやって [Clause]？", "[Noun] はどうやって [Verb]？"] },

      { hiragana: "どんな", romanization: "donna", meaning: "what kind of", exampleUsages: ["どんな [Noun] ..."] },

      { hiragana: "ませんか？", romanization: "masen ka", meaning: "will you?", exampleUsages: ["[Verb-ます (dropped)] ませんか？"] },
      { hiragana: "ましょうか？", romanization: "mashou ka", meaning: "shall I? (assuming yes)", exampleUsages: ["[Verb-ます (dropped)] ましょうか？"] },

      // TODO: rhetorical questions
      { hiragana: "ね？", romanization: "ne", meaning: "isn't it? (expressing feelings, casual)", exampleUsages: ["[Clause] ね。"] },
      { hiragana: "だろう", romanization: "darou", meaning: "right? (stating facts, casual)", exampleUsages: ["[Clause] だろう？"] },
      { hiragana: "でしょう", romanization: "deshou", meaning: "right? (stating facts, polite)", exampleUsages: ["[Clause] でしょう？"] },

      // TODO: particles
      { hiragana: "は", romanization: "wa", meaning: "(topic marker, e.g. time/place/concept)", exampleUsages: ["[Noun] は [Clause]"] },

      { hiragana: "お", preferredForm: "hiragana", kanjis: ["御"], romanization: "o", meaning: "(honorific, with native Japanese words)", exampleUsages: ["お[Noun]"] },
      { hiragana: "ご", preferredForm: "hiragana", kanjis: ["御"], romanization: "go", meaning: "(honorific, with Chinese-derived words)", exampleUsages: ["ご[Noun]"] },

      { hiragana: "の", romanization: "no", meaning: "(possession marker)", exampleUsages: ["[Noun] の [Noun] ...", "だれの [Noun] ですか？"] },

      { hiragana: "を", romanization: "o", meaning: "(object marker)", exampleUsages: ["[Noun (object)] を [Verb] ..."] },
      { hiragana: "に", romanization: "ni", meaning: "(time/location marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ...", "[Noun (time)] に [Noun (location)] に [Verb] ..."] },
      { hiragana: "へ", romanization: "e", meaning: "(direction marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ..."] },
      { hiragana: "で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action", exampleUsages: ["[Noun] で [Verb] ..."] },

      // miscellaneous
      { hiragana: "ともなく", preferredForm: "hiragana", romanization: "tomonaku", meaning: "unknowingly" },
      { hiragana: "ないで", romanization: "naide", meaning: "without xxx", exampleUsages: ["[Verb-ない (dropped)] ないで [Verb]"] },
      { kanjis: ["方"], hiragana: "かた", romanization: "kata", meaning: "way of doing", exampleUsages: ["[Noun] の [Verb-ます (dropped)] 方"] },

      { hiragana: "なる", preferredForm: "hiragana", kanjis: ["成る"], romanization: "naru", meaning: "become xxx (casual)", exampleUsages: ["[i-Adj. (dropped)] くなる", "[na-Adj.] になる", "[Noun] になる"] },
      { hiragana: "なります", preferredForm: "hiragana", kanjis: ["成ります"], romanization: "narimasu", meaning: "become xxx (polite)", exampleUsages: ["[i-Adj. (dropped)] くなります", "[na-Adj.] になります", "[Noun] になります"] },
      { hiragana: "なっている", preferredForm: "hiragana", kanjis: ["成っている"], romanization: "natteiru", meaning: "becoming xxx (casual)", exampleUsages: ["[i-Adj. (dropped)] くなっている", "[na-Adj.] になっている", "[Noun] になっている"] },
      { hiragana: "なっています", preferredForm: "hiragana", kanjis: ["成っています"], romanization: "natteimasen", meaning: "becoming xxx (polite)", exampleUsages: ["[i-Adj. (dropped)] くなっています", "[na-Adj.] になっています", "[Noun] になっています"] },
      { hiragana: "なった", preferredForm: "hiragana", kanjis: ["成った"], romanization: "natta", meaning: "became xxx (casual)", exampleUsages: ["[i-Adj. (dropped)] くなった", "[na-Adj.] になった", "[Noun] になった"] },
      { hiragana: "なりました", preferredForm: "hiragana", kanjis: ["成りました"], romanization: "narimashita", meaning: "became xxx (polite)", exampleUsages: ["[i-Adj. (dropped)] くなりました", "[na-Adj.] になりました", "[Noun] になりました"] },
      { hiragana: "なりたい", preferredForm: "hiragana", kanjis: ["成りたい"], romanization: "naritai", meaning: "will become xxx", exampleUsages: ["[i-Adj. (dropped)] くなりたい", "[na-Adj.] になりたい", "[Noun] になりたい"] },

      { hiragana: "ほしい", preferredForm: "hiragana", kanjis: ["欲しい"], romanization: "hoshii", meaning: "I want xxx (casual)", exampleUsages: ["[Noun] がほしいです。"] },
      { hiragana: "をください", preferredForm: "hiragana", kanjis: ["を下さい"], romanization: "-o kudasai", meaning: "please give me xxx (polite)", exampleUsages: ["[Noun] をください。", "[Noun] を [Noun (counter)] ください。"] },

      { hiragana: "にする", romanization: "ni suru", meaning: "I am going for xxx (casual)", exampleUsages: ["[Noun] にする。"] },
      { hiragana: "にします", romanization: "ni shimasu", meaning: "I am going for xxx (polite)", exampleUsages: ["[Noun] にします。"] },
    );
  }
}

// decorations
//   politeness
//   exclamations
//   emphasis
//   rhetorical
// questions
// listing, chronological, logical

// adverb (without object) vs preposition (with object) vs connectives
