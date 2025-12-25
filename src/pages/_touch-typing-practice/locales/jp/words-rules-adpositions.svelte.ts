import type { JapaneseWord } from "../../types";
import { jp } from "./jp.svelte";

export function appendRulesAdpositions(words: JapaneseWord[]) {
  if (jp.flashcardSettings.enableRulesAdpositions) {
    words.splice(
      words.length,
      0, //
      { hiragana: "は", romanization: "wa", meaning: "(known subject marker)", exampleUsages: ["[Noun] は ..."] },
      { hiragana: "が", romanization: "ga", meaning: "(new subject marker)", exampleUsages: ["[Noun] が ..."] },

      { hiragana: "を", romanization: "o", meaning: "(object marker)", exampleUsages: ["[Noun (object)] を [Verb (transitive)] ..."] },

      { hiragana: "に", romanization: "ni", meaning: "(time/location marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ...", "[Noun (time)] に [Noun (location)] に [Verb] ..."] },
      { hiragana: "へ", romanization: "e", meaning: "(direction marker)", exampleUsages: ["[Noun (time/location)] に [Verb] ..."] },
      { hiragana: "で", romanization: "de", meaning: "location/method/tool/material/language/scope/cause of an action", exampleUsages: ["[Noun] で [Verb] ..."] },

      { hiragana: "か", romanization: "ka", meaning: "(question marker)", exampleUsages: ["[Clause] か？"] },
      {
        hiragana: "ば",
        romanization: "ba",
        meaning: "(conditional marker)",
        exampleUsages: [
          // positive forms
          "[Verb-u (dropped)] -e か ...",
          "[Verb-ru] れば ...",
          "来れば ...",
          "[Verb-suru (drop ru)] れば ...",
          "[i-Adj (dropped)] ければ ...",
          "[na-Adj] ならば / であれば ...",
          "[Noun] ならば / であれば ...",
          // negative forms
          "[Verb-nai (dropped)] なければ ...",
          "[i-Adj (dropped)] なければ ...",
          "[na-Adj] じゃなければ / でなければ ...",
          "[Noun] じゃなければ / でなければ ...",
        ],
      },

      // TODO: changing word forms
      // TODO: だっ
      // TODO: no
    );
  }
}
