import type { JapaneseVerb, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendVerbsChanges(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (flashcardSettings.words.verbs.changes.environmenal.value) {
    verbs.push(
      //
      { kanjis: ["晴れる", "霽れる"], hiragana: "はれる", romanization: "hareru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "become sunny" },
      { kanjis: ["曇る"], hiragana: "はれる", romanization: "kumoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "become cloudy" },
      { kanjis: ["暮れる", "眩れる", "暗れる", "昏れる"], hiragana: "くれる", romanization: "kureru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "grow dark" },
      { kanjis: ["降り出す"], hiragana: "ふりだす", romanization: "furidasu", verbGroup: "Godan", verbIsTransitive: false, meaning: "start raining" },

      { kanjis: ["咲く"], hiragana: "さく", romanization: "saku", verbGroup: "Godan", verbIsTransitive: false, meaning: "bloom", exampleUsages: ["花が咲く"] },
      { kanjis: ["荒ぶ", "進ぶ"], hiragana: "すさぶ", romanization: "susabu", verbGroup: "Godan", verbIsTransitive: false, meaning: "grow wild" },
    );
  }

  if (flashcardSettings.words.verbs.changes.resultative.value) {
    verbs.push(
      { hiragana: "いける", katakana: "イケる", romanization: "ikeru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "go well (informal, slang)" },
      { kanjis: ["成功する"], hiragana: "せいこうする", romanization: "seikousuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "succeed", exampleUsages: ["ビジネスで成功する"] },
      { kanjis: ["大当たりする", "大当りする"], hiragana: "おおあたりする", romanization: "ooatarisuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "win big / jackpot" },
      { kanjis: ["困る"], hiragana: "こまる", romanization: "komaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "be troubled / have difficulty" },

      { kanjis: ["当たる", "当る", "中る", "中たる"], hiragana: "あたる", romanization: "ataru", verbGroup: "Godan", verbIsTransitive: false, meaning: "hit (not miss)" },
      { kanjis: ["外れる"], hiragana: "はずれる", romanization: "hazureru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "miss (not hit)" },
      { kanjis: ["空く"], hiragana: "すく", romanization: "suku", verbGroup: "Godan", verbIsTransitive: false, meaning: "empty / thin out" },
      { kanjis: ["消す"], hiragana: "けす", romanization: "kesu", verbGroup: "Godan", verbIsTransitive: true, meaning: "erase / turn off" },
      { kanjis: ["消える"], hiragana: "きえる", romanization: "kieru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "disappear" },

      { kanjis: ["親しむ"], hiragana: "したしむ", romanization: "shitashimu", verbGroup: "Godan", verbIsTransitive: false, meaning: "befriend" },
      { kanjis: ["知られる"], hiragana: "しられる", romanization: "shirareru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "be known", exampleUsages: ["xxxで知られる (known for xxx)"] },
      { kanjis: ["疲れる"], hiragana: "つかれる", romanization: "tsukareru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "get tired" },

      { kanjis: ["興す"], hiragana: "おこす", romanization: "okosu", verbGroup: "Godan", verbIsTransitive: true, meaning: "vitalize" },
      { kanjis: ["養う"], hiragana: "やしなう", romanization: "yashinau", verbGroup: "Godan", verbIsTransitive: true, meaning: "foster" },

      // TODO: 差す
    );
  }

  for (const verb of verbs) {
    if (verb.verbGroup === "Godan" && !flashcardSettings.enableGodanVerbs.value) continue;
    if (verb.verbGroup === "Ichidan" && !flashcardSettings.enableIchidanVerbs.value) continue;
    if (verb.verbGroup === "Irregular" && !flashcardSettings.enableIrregularVerbs.value) continue;

    if (verb.verbIsTransitive && !flashcardSettings.enableTransitiveVerbs.value) continue;
    if (!verb.verbIsTransitive && !flashcardSettings.enableIntransitiveVerbs.value) continue;

    words.push(verb);
  }
}
