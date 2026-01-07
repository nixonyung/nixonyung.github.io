import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendVerbsChanges(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableVerbsChangesEnvironmenal) {
    words.push(
      //
      { kanjis: ["暮れる", "眩れる", "暗れる", "昏れる"], hiragana: "くれる", romanization: "kureru", meaning: "grow dark" },
      { kanjis: ["降り出す"], hiragana: "ふりだす", romanization: "furidasu", meaning: "start raining" },

      { kanjis: ["咲く"], hiragana: "さく", romanization: "saku", meaning: "bloom", exampleUsages: ["花が咲く"] },
      { kanjis: ["荒ぶ", "進ぶ"], hiragana: "すさぶ", romanization: "susabu", meaning: "grow wild" },
    );
  }

  if (jp.flashcardSettings.enableVerbsChangesQuantitative) {
    words.push(
      //
      { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", meaning: "rise", derivedMeanings: ["swell"] },
    );
  }

  if (jp.flashcardSettings.enableVerbsChangesResultative) {
    words.push(
      { hiragana: "いける", katakana: "イケる", romanization: "ikeru", meaning: "go well (informal, slang)" },
      { kanjis: ["成功する"], hiragana: "せいこうする", romanization: "seikousuru", meaning: "succeed", exampleUsages: ["ビジネスで成功する"] },
      { kanjis: ["大当たりする", "大当りする"], hiragana: "おおあたりする", romanization: "ooatarisuru", meaning: "win big / jackpot" },

      { kanjis: ["当たる", "当る", "中る", "中たる"], hiragana: "あたる", romanization: "ataru", meaning: "hit (not miss)" },
      { kanjis: ["外れる"], hiragana: "はずれる", romanization: "hazureru", meaning: "miss (not hit)" },
      { kanjis: ["消す"], hiragana: "けす", romanization: "kesu", meaning: "erase / turn off" },
      { kanjis: ["閉じる"], hiragana: "とじる", romanization: "tojiru", meaning: "close / shut" },

      { kanjis: ["親しむ"], hiragana: "したしむ", romanization: "shitashimu", meaning: "befriend" },

      { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", meaning: "vitalize" },
      { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", meaning: "foster" },
    );
  }
}
