import type { JapaneseVerb, JapaneseWord } from "../../types";
import { flashcardSettings } from "./FlashcardSettingsJP.svelte";

export function appendVerbsDescriptive(words: JapaneseWord[]) {
  const verbs: JapaneseVerb[] = [];

  if (flashcardSettings.words.verbs.descriptive.being.value) {
    verbs.push(
      //
      { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", verbGroup: "Godan", verbIsTransitive: false, meaning: "become (reaching a certain time/state)", exampleUsages: ["春になる", "暇になる"] },
      { kanjis: ["似る"], hiragana: "にる", romanization: "niru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "be alike" },
      { kanjis: ["一致する"], hiragana: "いっちする", romanization: "icchisuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "match", exampleUsages: ["[Noun] は [Noun] と一致する。", "[Noun (with counters)] は一致する。"] },
      { kanjis: ["違う"], hiragana: "ちがう", romanization: "chigau", verbGroup: "Godan", verbIsTransitive: false, meaning: "wrong / be mistaken", derivedMeanings: ["differ"], exampleUsages: ["[Noun] は [Noun] と違う"] },
      { kanjis: ["反する"], hiragana: "はんする", romanization: "hansuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "oppose", exampleUsages: ["意に反する (against one's will)", "予測に反する"] },

      { kanjis: ["含む", "銜む"], hiragana: "ふくむ", romanization: "fukumu", verbGroup: "Godan", verbIsTransitive: true, meaning: "contain", exampleUsages: ["A を B に含む (B contains A)"] },

      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "relate" },

      // TODO: will?
      { kanjis: ["目指す"], rareKanjis: ["目差す"], hiragana: "めざす", romanization: "mezasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "aim at", exampleUsages: ["xxx を目指して設立しました (founded for xxx)"] },
    );
  }

  if (flashcardSettings.words.verbs.descriptive.existence.value) {
    verbs.push(
      { hiragana: "いる", rareKanjis: ["居る"], romanization: "iru", verbGroup: "Godan", verbIsTransitive: false, meaning: "exist (for living things)", exampleUsages: ["xxx に入っていました (was starting to perform xxx)"] },
      { hiragana: "いる", preferredForm: "hiragana", kanjis: ["要る"], romanization: "iru", verbGroup: "Godan", verbIsTransitive: false, meaning: "is needed / is necessary" },
      { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", verbGroup: "Godan", verbIsTransitive: false, meaning: "exist (for non-living things)", exampleUsages: ["質問かあれば"] },

      { kanjis: ["来る"], hiragana: "くる", romanization: "kuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "come (spatially / temporally)" },
      { kanjis: ["設立する"], hiragana: "せつりつ", romanization: "setsuritsu", verbGroup: "Irregular", verbIsTransitive: true, meaning: "to found" },

      { kanjis: ["暮らす", "暮す"], hiragana: "くらす", romanization: "kurasu", verbGroup: "Godan", verbIsTransitive: false, meaning: "live / get along" },
      { kanjis: ["死ぬ"], hiragana: "しぬ", romanization: "shinu", verbGroup: "Godan", verbIsTransitive: false, meaning: "die" },
      // TODO: survive
      { kanjis: ["顔を出す", "顔をだす"], hiragana: "かおをだす", romanization: "kaowodasu", verbGroup: "Godan", verbIsTransitive: true, meaning: "show up" },
      // TODO: remain
      { kanjis: ["欠ける", "缺ける", "闕ける"], hiragana: "かける", romanization: "kakeru", verbGroup: "Ichidan", verbIsTransitive: false, meaning: "chip / break / be missing" },
      { kanjis: ["替わる", "代わる", "換わる", "替る", "代る", "換る"], hiragana: "かわる", romanization: "kawaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "replace", derivedMeanings: ["succeed"] },
    );
  }

  if (flashcardSettings.words.verbs.descriptive.processes.value) {
    verbs.push(
      { hiragana: "する", rareKanjis: ["為る"], romanization: "suru", verbGroup: "Irregular", verbIsTransitive: true, meaning: "do / carry out", derivedMeanings: ["choose", "pickpocket"], exampleUsages: ["せールをする (on sale)", "ゲームをする (play a game)", "これにします (choose this)"] },
      { hiragana: "やる", rareKanjis: ["遣る"], romanization: "yaru", verbGroup: "Godan", verbIsTransitive: true, meaning: "undertake" },
      { kanjis: ["取り掛かる", "取りかかる"], hiragana: "とりかかる", romanization: "torikakaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "start" },
      { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", verbGroup: "Godan", verbIsTransitive: true, meaning: "cause / start", derivedMeanings: ["wake someone up", "raise", "set up", "vitalize"] },
      { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", verbGroup: "Godan", verbIsTransitive: false, meaning: "occur" },
      { kanjis: ["始まる"], hiragana: "はじまる", romanization: "hajimaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "begin", exampleUsages: ["で始まる"] },
      { kanjis: ["出発する"], hiragana: "しゅっぱつする", romanization: "shuppatsusuru", verbGroup: "Irregular", verbIsTransitive: false, meaning: "depart / set off" },

      { kanjis: ["待つ"], rareKanjis: ["俟つ"], hiragana: "まつ", romanization: "matsu", verbGroup: "Godan", verbIsTransitive: false, meaning: "wait" },
      { kanjis: ["頑張る"], hiragana: "がんばる", romanization: "ganbaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "persist / keep up" },
      { kanjis: ["急ぐ"], hiragana: "いそぐ", romanization: "isogu", verbGroup: "Godan", verbIsTransitive: false, meaning: "hurry" },

      { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", verbGroup: "Godan", verbIsTransitive: false, meaning: "finish", exampleUsages: ["で終わる", "宿題終わった"] },
      { hiragana: "しまう", rareKanjis: ["仕舞う", "終う", "了う", "蔵う"], romanization: "shimau", verbGroup: "Godan", verbIsTransitive: true, meaning: "finish", derivedMeanings: ["shut down", "put away"] },
      { kanjis: ["着く"], hiragana: "つく", romanization: "tsuku", verbGroup: "Godan", verbIsTransitive: false, meaning: "arrive / reach" },
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
