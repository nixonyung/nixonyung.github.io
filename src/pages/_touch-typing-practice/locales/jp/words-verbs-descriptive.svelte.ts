import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendVerbsDescriptive(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableVerbsDescriptiveBeing) {
    words.push(
      //
      { kanjis: ["成る"], rareKanjis: ["為る"], hiragana: "なる", romanization: "naru", meaning: "become (reaching a certain time/state)", exampleUsages: ["春になる", "暇になる"] },
      { kanjis: ["似る"], hiragana: "にる", romanization: "niru", meaning: "be alike" },
      { kanjis: ["一致する"], hiragana: "いっちする", romanization: "icchisuru", meaning: "match", exampleUsages: ["[Noun] は [Noun] と一致する。", "[Noun (with counters)] は一致する。"] },
      { kanjis: ["違う"], hiragana: "ちがう", romanization: "chigau", meaning: "differ", exampleUsages: ["[Noun] は [Noun] と違う"] },
      { kanjis: ["反する"], hiragana: "はんする", romanization: "hansuru", meaning: "oppose", exampleUsages: ["意に反する (against one's will)", "予測に反する"] },

      { kanjis: ["含む", "銜む"], hiragana: "ふくむ", romanization: "fukumu", meaning: "contain", exampleUsages: ["A を B に含む (B contains A)"] },

      { kanjis: ["関連する"], rareKanjis: ["関聯"], hiragana: "かんれんする", romanization: "kanrensuru", meaning: "relate" },
    );
  }

  if (jp.flashcardSettings.enableVerbsDescriptiveExistence) {
    words.push(
      { hiragana: "いる", rareKanjis: ["居る"], romanization: "iru", meaning: "exist (for living things)" },
      { hiragana: "ある", preferredForm: "hiragana", kanjis: ["有る", "在る"], romanization: "aru", meaning: "exist (for non-living things)", exampleUsages: ["質問かあれば"] },

      { kanjis: ["暮らす", "暮す"], hiragana: "くらす", romanization: "kurasu", meaning: "live / get along" },
      { kanjis: ["死ぬ"], hiragana: "しぬ", romanization: "shinu", meaning: "die" },
      // TODO: survive
      { kanjis: ["顔を出す", "顔をだす"], hiragana: "かおをだす", romanization: "kaowodasu", meaning: "show up" },
      // TODO: remain
      { kanjis: ["欠ける", "缺ける", "闕ける"], hiragana: "かける", romanization: "kakeru", meaning: "chip / break / be missing" },
      { kanjis: ["替わる", "代わる", "換わる", "替る", "代る", "換る"], hiragana: "かわる", romanization: "kawaru", meaning: "replace", derivedMeanings: ["succeed"] },
    );
  }

  if (jp.flashcardSettings.enableVerbsDescriptiveProcesses) {
    words.push(
      { hiragana: "する", rareKanjis: ["為る"], romanization: "suru", meaning: "do / carry out", derivedMeanings: ["choose", "pickpocket"], exampleUsages: ["せールをする (on sale)", "ゲームをする (play a game)", "これにします (choose this)"] },
      { hiragana: "やる", rareKanjis: ["遣る"], romanization: "yaru", meaning: "undertake" },
      { kanjis: ["待つ"], rareKanjis: ["俟つ"], hiragana: "まつ", romanization: "matsu", meaning: "wait" },
      { kanjis: ["急ぐ"], hiragana: "いそぐ", romanization: "isogu", meaning: "hurry" },
      { kanjis: ["起こす", "起す"], hiragana: "おこす", romanization: "okosu", meaning: "cause / start", derivedMeanings: ["wake someone up", "raise", "set up", "vitalize"] },
      { kanjis: ["起こる", "起る"], hiragana: "おこる", romanization: "okoru", meaning: "occur" },
      { kanjis: ["始まる"], hiragana: "はじまる", romanization: "hajimaru", meaning: "begin", exampleUsages: ["で始まる"] },
      { kanjis: ["頑張る"], hiragana: "がんばる", romanization: "ganbaru", meaning: "persist / keep up" },
      { kanjis: ["終わる", "終る"], rareKanjis: ["了る", "卒る", "畢る", "竟る"], hiragana: "おわる", romanization: "owaru", meaning: "finish", exampleUsages: ["で終わる", "宿題終わった"] },
      { hiragana: "しまう", rareKanjis: ["仕舞う", "終う", "了う", "蔵う"], romanization: "shimau", meaning: "finish", derivedMeanings: ["shut down", "put away"] },
    );
  }
}
