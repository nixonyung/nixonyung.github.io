import type { JapaneseVerb, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendVerbsChanges(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (flashcardSettings.words.verbs.changes.environmenal.value) {
    verbs.push(
      //
      { kanjis: ["暮れる", "眩れる", "暗れる", "昏れる"], hiragana: "くれる", romanization: "kureru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "grow dark" },
      { kanjis: ["降り出す"], hiragana: "ふりだす", romanization: "furidasu", verbGroup: "godan", verbIsTransitive: false, meaning: "start raining" },

      { kanjis: ["咲く"], hiragana: "さく", romanization: "saku", verbGroup: "godan", verbIsTransitive: false, meaning: "bloom", exampleUsages: ["花が咲く"] },
      { kanjis: ["荒ぶ", "進ぶ"], hiragana: "すさぶ", romanization: "susabu", verbGroup: "godan", verbIsTransitive: false, meaning: "grow wild" },
    );
  }

  if (flashcardSettings.words.verbs.changes.quantitative.value) {
    verbs.push(
      //
      { kanjis: ["高まる"], hiragana: "たかまる", romanization: "takamaru", verbGroup: "godan", verbIsTransitive: false, meaning: "rise", derivedMeanings: ["swell"] },
    );
  }

  if (flashcardSettings.words.verbs.changes.resultative.value) {
    verbs.push(
      { hiragana: "いける", katakana: "イケる", romanization: "ikeru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "go well (informal, slang)" },
      { kanjis: ["成功する"], hiragana: "せいこうする", romanization: "seikousuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "succeed", exampleUsages: ["ビジネスで成功する"] },
      { kanjis: ["大当たりする", "大当りする"], hiragana: "おおあたりする", romanization: "ooatarisuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "win big / jackpot" },

      { kanjis: ["当たる", "当る", "中る", "中たる"], hiragana: "あたる", romanization: "ataru", verbGroup: "godan", verbIsTransitive: false, meaning: "hit (not miss)" },
      { kanjis: ["外れる"], hiragana: "はずれる", romanization: "hazureru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "miss (not hit)" },
      { kanjis: ["空く"], hiragana: "すく", romanization: "suku", verbGroup: "godan", verbIsTransitive: false, meaning: "empty / thin out" },
      { kanjis: ["消す"], hiragana: "けす", romanization: "kesu", verbGroup: "godan", verbIsTransitive: true, meaning: "erase / turn off" },
      { kanjis: ["閉じる"], hiragana: "とじる", romanization: "tojiru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "close / shut" },

      { kanjis: ["親しむ"], hiragana: "したしむ", romanization: "shitashimu", verbGroup: "godan", verbIsTransitive: false, meaning: "befriend" },
      { kanjis: ["疲れる"], hiragana: "つかれる", romanization: "tsukareru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "get tired" },

      { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", verbGroup: "godan", verbIsTransitive: true, meaning: "vitalize" },
      { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", verbGroup: "godan", verbIsTransitive: true, meaning: "foster" },
    );
  }

  for (const verb of verbs) {
    if (flashcardSettings.enableGodanVerbs.value && verb.verbGroup !== "godan") continue;
    if (flashcardSettings.enableIchidanVerbs.value && verb.verbGroup !== "ichidan") continue;
    if (flashcardSettings.enableIrregularVerbs.value && verb.verbGroup !== "irregular") continue;

    if (flashcardSettings.enableTransitiveVerbs.value && !verb.verbIsTransitive) continue;
    if (flashcardSettings.enableIntransitiveVerbs.value && verb.verbIsTransitive) continue;

    words.push(verb);
  }
}
