import type { JapaneseVerb, JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendVerbsDescriptive(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (jp.flashcardSettings.enableVerbsDescriptiveBeing) {
    verbs.push(
      //
      { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", verbGroup: "godan", verbIsTransitive: false, meaning: "become (reaching a certain time/state)", exampleUsages: ["春になる", "暇になる"] },
      { kanjis: ["似る"], hiragana: "にる", romanization: "niru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "be alike" },
      { kanjis: ["一致する"], hiragana: "いっちする", romanization: "icchisuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "match", exampleUsages: ["[Noun] は [Noun] と一致する。", "[Noun (with counters)] は一致する。"] },
      { kanjis: ["違う"], hiragana: "ちがう", romanization: "chigau", verbGroup: "godan", verbIsTransitive: false, meaning: "differ", exampleUsages: ["[Noun] は [Noun] と違う"] },
      { kanjis: ["反する"], hiragana: "はんする", romanization: "hansuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "oppose", exampleUsages: ["意に反する (against one's will)", "予測に反する"] },

      { kanjis: ["含む", "銜む"], hiragana: "ふくむ", romanization: "fukumu", verbGroup: "godan", verbIsTransitive: true, meaning: "contain", exampleUsages: ["A を B に含む (B contains A)"] },

      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "relate" },
    );
  }

  if (jp.flashcardSettings.enableVerbsDescriptiveExistence) {
    verbs.push(
      { hiragana: "いる", rareKanjis: ["居る"], romanization: "iru", verbGroup: "godan", verbIsTransitive: false, meaning: "exist (for living things)" },
      { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", verbGroup: "godan", verbIsTransitive: false, meaning: "exist (for non-living things)", exampleUsages: ["質問かあれば"] },

      { kanjis: ["来る"], hiragana: "くる", romanization: "kuru", verbGroup: "irregular", verbIsTransitive: false, meaning: "come (spatially / temporally)" },

      { kanjis: ["暮らす", "暮す"], hiragana: "くらす", romanization: "kurasu", verbGroup: "godan", verbIsTransitive: false, meaning: "live / get along" },
      { kanjis: ["死ぬ"], hiragana: "しぬ", romanization: "shinu", verbGroup: "godan", verbIsTransitive: false, meaning: "die" },
      // TODO: survive
      { kanjis: ["顔を出す", "顔をだす"], hiragana: "かおをだす", romanization: "kaowodasu", verbGroup: "godan", verbIsTransitive: true, meaning: "show up" },
      // TODO: remain
      { kanjis: ["欠ける", "缺ける", "闕ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "ichidan", verbIsTransitive: false, meaning: "chip / break / be missing" },
      { kanjis: ["替わる", "代わる", "換わる", "替る", "代る", "換る"], hiragana: "かわる", romanization: "kawaru", verbGroup: "godan", verbIsTransitive: false, meaning: "replace", derivedMeanings: ["succeed"] },
    );
  }

  if (jp.flashcardSettings.enableVerbsDescriptiveProcesses) {
    verbs.push(
      { hiragana: "する", rareKanjis: ["為る"], romanization: "suru", verbGroup: "irregular", verbIsTransitive: true, meaning: "do / carry out", derivedMeanings: ["choose", "pickpocket"], exampleUsages: ["せールをする (on sale)", "ゲームをする (play a game)", "これにします (choose this)"] },
      { hiragana: "やる", rareKanjis: ["遣る"], romanization: "yaru", verbGroup: "godan", verbIsTransitive: true, meaning: "undertake" },
      { kanjis: ["待つ"], rareKanjis: ["俟つ"], hiragana: "まつ", romanization: "matsu", verbGroup: "godan", verbIsTransitive: false, meaning: "wait" },
      { kanjis: ["急ぐ"], hiragana: "いそぐ", romanization: "isogu", verbGroup: "godan", verbIsTransitive: false, meaning: "hurry" },
      { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", verbGroup: "godan", verbIsTransitive: true, meaning: "cause / start", derivedMeanings: ["wake someone up", "raise", "set up", "vitalize"] },
      { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", verbGroup: "godan", verbIsTransitive: false, meaning: "occur" },
      { kanjis: ["始まる"], hiragana: "はじまる", romanization: "hajimaru", verbGroup: "godan", verbIsTransitive: false, meaning: "begin", exampleUsages: ["で始まる"] },
      { kanjis: ["頑張る"], hiragana: "がんばる", romanization: "ganbaru", verbGroup: "godan", verbIsTransitive: false, meaning: "persist / keep up" },
      { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", verbGroup: "godan", verbIsTransitive: false, meaning: "finish", exampleUsages: ["で終わる", "宿題終わった"] },
      { hiragana: "しまう", rareKanjis: ["仕舞う", "終う", "了う", "蔵う"], romanization: "shimau", verbGroup: "godan", verbIsTransitive: true, meaning: "finish", derivedMeanings: ["shut down", "put away"] },
    );
  }

  for (const { kanjis, rareKanjis, hiragana, katakana, exampleUsages, preferredForm, romanization, meaning, derivedMeanings, question, answer, verbGroup, verbIsTransitive } of verbs) {
    if (((verbGroup === "godan" && jp.flashcardSettings.enableGodanVerbs) || (verbGroup === "ichidan" && jp.flashcardSettings.enableIchidanVerbs) || (verbGroup === "irregular" && jp.flashcardSettings.enableIrregularVerbs)) && ((verbIsTransitive && jp.flashcardSettings.enableTransitiveVerbs) || (!verbIsTransitive && jp.flashcardSettings.enableIntransitiveVerbs))) {
      words.push({ kanjis, rareKanjis, hiragana, katakana, exampleUsages, preferredForm, romanization, meaning, derivedMeanings, question, answer });
    }
  }
}
