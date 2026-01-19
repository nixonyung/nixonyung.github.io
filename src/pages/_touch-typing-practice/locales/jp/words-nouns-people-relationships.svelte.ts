import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsPeopleByRelationships(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsPeopleRelationshipsParents) {
    words.push(
      { kanjis: ["父母"], hiragana: "ふぼ", romanization: "fubo", meaning: "parents (formal)" },
      { kanjis: ["父母"], hiragana: "ちちはは", romanization: "chichihaha", meaning: "my parents" },
      { kanjis: ["両親"], hiragana: "りょうしん", romanization: "ryoushin", meaning: "parents" },
      { kanjis: ["親"], hiragana: "おや", romanization: "oya", meaning: "parents" },

      { kanjis: ["父さん"], hiragana: "とうさん", romanization: "tousan", meaning: "father" },
      { kanjis: ["父"], hiragana: "ちち", romanization: "chichi", meaning: "my father" },
      { kanjis: ["父親"], hiragana: "ちちおや", romanization: "chichioya", meaning: "my father (formal)" },
      { kanjis: ["老爺"], hiragana: "おやじ", romanization: "oyaji", meaning: "father (very casual, used by old-fashioned men)", derivedMeanings: ["old man (very casual)"] },
      { katakana: "パパ", romanization: "papa", meaning: "father (casual)" },

      { kanjis: ["母さん"], hiragana: "かあさん", romanization: "kaasan", meaning: "mother" },
      { kanjis: ["母"], hiragana: "はは", romanization: "haha", meaning: "my mother" },
      { kanjis: ["母親"], hiragana: "ははおや", romanization: "hahaoya", meaning: "my mother (formal)" },
      { kanjis: ["お袋"], hiragana: "おふくろ", romanization: "ofukuro", meaning: "mother (very casual, used by old-fashioned men)" },
      { katakana: "ママ", romanization: "mama", meaning: "mother (casual)" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings) {
    words.push(
      { kanjis: ["兄弟姉妹"], hiragana: "きょうだいしまい", romanization: "kyoudaishimai", meaning: "siblings" },
      { kanjis: ["兄弟"], hiragana: "きょうだい", romanization: "kyoudai", meaning: "brothers" },
      { kanjis: ["姉妹"], hiragana: "しまい", romanization: "shimai", meaning: "sisters" },

      { kanjis: ["兄さん"], hiragana: "にいさん", romanization: "niisan", meaning: "elder brother" },
      { kanjis: ["兄"], hiragana: "あに", romanization: "ani", meaning: "my elder brother" },

      { kanjis: ["姉さん"], hiragana: "ねえさん", romanization: "neesan", meaning: "elder sister" },
      { kanjis: ["姉"], hiragana: "あね", romanization: "ane", meaning: "my elder sister" },

      { kanjis: ["弟さん"], hiragana: "おとうとさん", romanization: "otoutosan", meaning: "younger brother" },
      { kanjis: ["弟"], hiragana: "おとうと", romanization: "otouto", meaning: "my younger brother" },

      { kanjis: ["妹さん"], hiragana: "いもうとさん", romanization: "imoutosan", meaning: "younger sister" },
      { kanjis: ["妹"], hiragana: "いもうと", romanization: "imouto", meaning: "my younger sister" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses) {
    words.push(
      //
      { kanjis: ["夫", "良人"], hiragana: "おっと", romanization: "otto", meaning: "husband" },
      { kanjis: ["良人"], hiragana: "りょうじん", romanization: "ryoujin", meaning: "husband" },
      { kanjis: ["主人"], hiragana: "しゅじん", romanization: "shujin", meaning: "master / owner", derivedMeanings: ["husband"] },
      { kanjis: ["旦那", "檀那"], hiragana: "だんな", romanization: "danna", meaning: "master / owner", derivedMeanings: ["husband (casual)"] },

      { kanjis: ["妻"], hiragana: "つま", romanization: "tsuma", meaning: "wife" },
      { kanjis: ["夫人"], hiragana: "ふじん", romanization: "fujin", meaning: "wife / Mrs xxx" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings) {
    words.push(
      { kanjis: ["お子さん"], hiragana: "おこさん", romanization: "okosan", meaning: "child" },
      { kanjis: ["お子様", "お子さま"], hiragana: "おこさま", romanization: "okosama", meaning: "child (very polite)" },

      { kanjis: ["息子さん"], hiragana: "むすこさん", romanization: "musukosan", meaning: "son" },
      { kanjis: ["息子", "息"], hiragana: "むすこ", romanization: "musuko", meaning: "my son" },
      { kanjis: ["男の子"], hiragana: "おとこのこ", romanization: "otokonoko", meaning: "son" },

      { kanjis: ["娘さん"], hiragana: "むすめさん", romanization: "musumesan", meaning: "daughter" },
      { kanjis: ["娘"], hiragana: "むすめ", romanization: "musume", meaning: "my daughter" },
      { kanjis: ["女の子"], hiragana: "おんなのこ", romanization: "onnanoko", meaning: "daughter" },
      { kanjis: ["お嬢さん"], hiragana: "おじょうさん", romanization: "ojousan", meaning: "daughter" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents) {
    words.push(
      { kanjis: ["祖父母"], hiragana: "そふぼ", romanization: "sofubo", meaning: "grandparents" },
      { hiragana: "じじばば", preferredForm: "hiragana", kanjis: ["祖父祖母", "爺婆"], katakana: "ジジババ", romanization: "jijibaba", meaning: "old people (casual)" },

      { kanjis: ["爺さん"], rareKanjis: ["祖父さん"], hiragana: "じいさん", romanization: "jiisan", meaning: "grandfather" },
      { kanjis: ["お爺ちゃま", "お祖父ちゃま"], hiragana: "おじいちゃま", romanization: "ojiichama", meaning: "grandfather (used by child)" },
      { kanjis: ["祖父"], hiragana: "そふ", romanization: "sofu", meaning: "my grandfather (formal)" },
      { kanjis: ["祖父"], hiragana: "じじ", romanization: "jiji", meaning: "my grandfather (very casual)" },
      { katakana: "グランパ", romanization: "gulanpa", meaning: "grandpa" },

      { kanjis: ["婆ちゃん"], rareKanjis: ["祖母ちゃん"], hiragana: "ばあちゃん", romanization: "baachan", meaning: "grandmother" },
      { hiragana: "そぼ", romanization: "sobo", meaning: "my grandmother" },
      { hiragana: "ばば", romanization: "baba", meaning: "my grandmother (very casual)" },
      { katakana: "グランマ", romanization: "gulanma", meaning: "grandma" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsExtendedFamily) {
    words.push(
      { kanjis: ["曽祖父母"], hiragana: "そうそふぼ", romanization: "sousofubo", meaning: "great-grandparents" },

      // TODO: 叔父 uncle, 叔母 aunt

      { hiragana: "いとこ", preferredForm: "hiragana", kanjis: ["従兄弟"], romanization: "itoko", meaning: "cousins (male)" },
      { hiragana: "いとこ", preferredForm: "hiragana", kanjis: ["従姉妹"], romanization: "itoko", meaning: "cousins (female)" },
      // TODO: nieces and nephews
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsChosenFamily) {
    words.push(
      // in-laws
      { kanjis: ["義父母"], hiragana: "ぎふぼ", romanization: "gifubo", meaning: "parents-in-law" },

      // step-family
      { kanjis: ["継父母"], hiragana: "けいふぼ", romanization: "keifubo", meaning: "step-parents" },

      // adopted family
      { kanjis: ["養父母"], hiragana: "ようふぼ", romanization: "youfubo", meaning: "adoptive parents" },
      { kanjis: ["養子"], hiragana: "ようし", romanization: "youshi", meaning: "adoptive son" },
      { kanjis: ["養女"], hiragana: "ようじょ", romanization: "youjo", meaning: "adoptive daughter" },

      // close ones
      { kanjis: ["兄貴"], hiragana: "あにき", katakana: "アニキ", romanization: "aniki", meaning: "big brother / senior (used by men)" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsFriends) {
    words.push(
      //
      { kanjis: ["友達"], hiragana: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
      { kanjis: ["達"], hiragana: "だち", katakana: "ダチ", romanization: "dachi", meaning: "pal (slang)" },
      { kanjis: ["友"], hiragana: "とも", romanization: "tomo", meaning: "friend (written)" },
      { kanjis: ["朋友"], hiragana: "ほうゆう", romanization: "houyuu", meaning: "friend (written)" },
      { kanjis: ["友人"], hiragana: "ゆうじん", romanization: "yuujin", meaning: "friend (formal)" },

      { kanjis: ["相棒"], hiragana: "あいぼう", romanization: "aibou", meaning: "partner (informal)" },
      { kanjis: ["親友"], hiragana: "しんゆう", romanization: "shinyuu", meaning: "close friend (formal)" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsFellows) {
    words.push(
      { kanjis: ["知り合い"], hiragana: "しりあい", romanization: "shiriai", meaning: "acquaintance" },
      { kanjis: ["仲間"], hiragana: "なかま", romanization: "nakama", meaning: "fellow / companion (informal)" },
      { kanjis: ["同期"], hiragana: "どうき", romanization: "douki", meaning: "people from the same period", derivedMeanings: ["classmates", "colleagues from the same year"] },
      { kanjis: ["先輩"], hiragana: "せんぱい", romanization: "senpai", meaning: "senior" },
      { kanjis: ["後輩"], hiragana: "こうはい", romanization: "kouhai", meaning: "junior" },

      // classmates
      { kanjis: ["同学"], hiragana: "どうがく", romanization: "dougaku", meaning: "classmate" },
      { katakana: "クラスメイト", romanization: "kurasumeito", meaning: "classmate" },
      { kanjis: ["同級生"], hiragana: "どうきゅうせい", romanization: "doukyuusei", meaning: "schoolmates in the same grade" },

      // colleagues
      { kanjis: ["同僚"], hiragana: "どうりょう", romanization: "douryou", meaning: "colleague (in similar position with you)" },
      { kanjis: ["部下"], hiragana: "ぶか", romanization: "buka", meaning: "subordinate" },
      { kanjis: ["上司"], hiragana: "じょうし", romanization: "joushi", meaning: "boss" },
      { kanjis: ["監督"], hiragana: "かんとく", romanization: "kantoku", meaning: "supervisor" },
      { kanjis: ["主管"], hiragana: "しゅかん", romanization: "shukan", meaning: "department head" },
      { kanjis: ["主任"], hiragana: "しゅにん", romanization: "shunin", meaning: "department head" },
      { kanjis: ["部長"], hiragana: "ぶちょう", romanization: "buchou", meaning: "department head" },
      { kanjis: ["係長"], rareKanjis: ["掛長"], hiragana: "かかりちょう", romanization: "kakarichou", meaning: "department head" },
      { kanjis: ["社長"], hiragana: "しゃちょう", romanization: "shachou", meaning: "president of a company" },
    );
  }
}
