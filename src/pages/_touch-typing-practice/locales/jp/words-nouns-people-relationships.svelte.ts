import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendNounsPeopleByRelationships(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableNounsPeopleRelationshipsParents) {
    words.push(
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
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsSiblings) {
    words.push(
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
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsSpouses) {
    words.push(
      //
      { kanjis: ["夫", "良人"], hiragana: "おっと", romanization: "otto", meaning: "husband" },
      { kanjis: ["良人"], hiragana: "りょうじん", romanization: "ryoujin", meaning: "husband" },
      { kanjis: ["妻"], hiragana: "つま", romanization: "tsuma", meaning: "wife" },
      { kanjis: ["夫人"], hiragana: "ふじん", romanization: "fujin", meaning: "Mrs xxx" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsOffsprings) {
    words.push(
      { kanjis: ["お子様", "お子さま"], hiragana: "おこさま", romanization: "okosama", meaning: "child (referring to someone else's)" },

      { kanjis: ["息子", "息"], hiragana: "むすこ", romanization: "musuko", meaning: "son" },
      { kanjis: ["お子さん"], hiragana: "おこさん", romanization: "okosan", meaning: "son" },
      { kanjis: ["男の子"], hiragana: "おとこのこ", romanization: "otokonoko", meaning: "baby boy" },

      { kanjis: ["娘"], hiragana: "むすめ", romanization: "musume", meaning: "daughter" },
      { kanjis: ["お嬢さん"], hiragana: "おじょうさん", romanization: "ojousan", meaning: "daughter" },
      { kanjis: ["女の子"], hiragana: "おんなのこ", romanization: "onnanoko", meaning: "baby girl" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsGrandparents) {
    words.push(
      { kanjis: ["祖父母"], hiragana: "そふぼ", romanization: "sofubo", meaning: "grandparents" },
      { hiragana: "じじばば", preferredForm: "hiragana", kanjis: ["祖父祖母", "爺婆"], katakana: "ジジババ", romanization: "jijibaba", meaning: "elderly" },

      { kanjis: ["爺さん"], rareKanjis: ["祖父さん"], hiragana: "じいさん", romanization: "jiisan", meaning: "grandfather (calling him)" },
      { kanjis: ["お祖父さん"], hiragana: "おじいさん", romanization: "ojiisan", meaning: "grandfather / old man (referring to him or someone else's)" },
      { kanjis: ["お爺ちゃま", "お祖父ちゃま"], hiragana: "おじいちゃま", romanization: "ojiichama", meaning: "grandfather (child referring to him or someone else's)" },
      { kanjis: ["祖父"], hiragana: "そふ", romanization: "sofu", meaning: "my grandfather (referring to him)" },
      { kanjis: ["祖父"], hiragana: "じじ", romanization: "jiji", meaning: "my grandfather (referring to him)" },
      { katakana: "グランパ", romanization: "gulanpa", meaning: "grandpa" },

      { kanjis: ["婆ちゃん"], rareKanjis: ["祖母ちゃん"], hiragana: "ばあちゃん", romanization: "baachan", meaning: "grandmother (calling her)" },
      { kanjis: ["お婆ちゃん"], rareKanjis: ["お祖母ちゃん"], hiragana: "おばあちゃん", romanization: "obaachan", meaning: "grandmother / old woman (referring to her or someone else's)" },
      { hiragana: "そぼ", romanization: "sobo", meaning: "my grandmother (referring to her)" },
      { hiragana: "ばば", romanization: "baba", meaning: "my grandmother (referring to her)" },
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
      // step-family
      { kanjis: ["継父母"], hiragana: "けいふぼ", romanization: "keifubo", meaning: "step-parents" },

      // adopted family
      { kanjis: ["養父母"], hiragana: "ようふぼ", romanization: "youfubo", meaning: "adoptive parents" },
      { kanjis: ["養子"], hiragana: "ようし", romanization: "youshi", meaning: "adoptive son" },
      { kanjis: ["養女"], hiragana: "ようじょ", romanization: "youjo", meaning: "adoptive daughter" },

      // in-laws
      { kanjis: ["義父母"], hiragana: "ぎふぼ", romanization: "gifubo", meaning: "parents-in-law" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsFriends) {
    words.push(
      //
      { kanjis: ["友"], hiragana: "とも", romanization: "tomo", meaning: "friend (root word)" },
      { kanjis: ["友達"], hiragana: "ともだち", romanization: "tomodachi", meaning: "friends (informal)" },
      { kanjis: ["達"], hiragana: "だち", katakana: "ダチ", romanization: "dachi", meaning: "pal (slang)" },
      { kanjis: ["相棒"], hiragana: "あいぼう", romanization: "aibou", meaning: "partner (informal)" },
      { kanjis: ["友人"], hiragana: "ゆうじん", romanization: "yuujin", meaning: "friend (formal)" },
      { kanjis: ["朋友"], hiragana: "ほうゆう", romanization: "houyuu", meaning: "friend (literary)" },
      { kanjis: ["親友"], hiragana: "しんゆう", romanization: "shinyuu", meaning: "close friend (formal)" },
    );
  }

  if (jp.flashcardSettings.enableNounsPeopleRelationshipsFellows) {
    words.push(
      { kanjis: ["知り合い"], hiragana: "しりあい", romanization: "shiriai", meaning: "acquaintance" },
      { kanjis: ["仲間"], hiragana: "なかま", romanization: "nakama", meaning: "fellow / companion (informal)" },
      { kanjis: ["同期"], hiragana: "どうき", romanization: "douki", meaning: "same year", derivedMeanings: ["classmate", "colleague from the same year"] },
      { kanjis: ["先輩"], hiragana: "せんぱい", romanization: "senpai", meaning: "senior" },
      { kanjis: ["後輩"], hiragana: "こうはい", romanization: "kouhai", meaning: "junior" },

      { kanjis: ["同学"], hiragana: "どうがく", romanization: "dougaku", meaning: "classmate" },
      { katakana: "クラスメイト", romanization: "kurasumeito", meaning: "classmate" },
      { kanjis: ["同級生"], hiragana: "どうきゅうせい", romanization: "doukyuusei", meaning: "people in the same grade" },

      { kanjis: ["同僚"], hiragana: "どうりょう", romanization: "douryou", meaning: "colleague (in similar position with you)" },
      { kanjis: ["部下"], hiragana: "ぶか", romanization: "buka", meaning: "subordinate" },
      { kanjis: ["親方"], hiragana: "おやかた", romanization: "oyakata", meaning: "boss" },
      { kanjis: ["上司"], hiragana: "じょうし", romanization: "joushi", meaning: "boss" },
      { kanjis: ["監督"], hiragana: "かんとく", romanization: "kantoku", meaning: "supervisor" },
      { kanjis: ["主管"], hiragana: "しゅかん", romanization: "shukan", meaning: "section head" },
      { kanjis: ["主任"], hiragana: "しゅにん", romanization: "shunin", meaning: "department head" },
      { kanjis: ["部長"], hiragana: "ぶちょう", romanization: "buchou", meaning: "department head" },
      { kanjis: ["係長"], rareKanjis: ["掛長"], hiragana: "かかりちょう", romanization: "kakarichou", meaning: "department head" },
      { kanjis: ["社長"], hiragana: "しゃちょう", romanization: "shachou", meaning: "president" },
    );
  }
}
