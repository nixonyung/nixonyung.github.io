import { getParagraph100Sentences } from "./paragraph-100-sentences.svelte";
import { getParagraph1000Characters } from "./paragraph-1000-characters.svelte";
import { getParagraphTripleCharacters } from "./paragraph-triple-characters.svelte";
import { getParagraphZhuMaxims } from "./paragraph-zhu-maxims.svelte";
import { paragraphSettings, type Paragraph } from "./ParagraphSettings.svelte";

export function getParagraph(): {
  paragraph: Paragraph;
  rowLength: number | undefined;
} {
  switch (paragraphSettings.paragraph.value) {
    case "100Sentences":
      return { paragraph: getParagraph100Sentences(), rowLength: 7 };
    case "1000Characters":
      return { paragraph: getParagraph1000Characters(), rowLength: 8 };
    case "tripleCharacters":
      return { paragraph: getParagraphTripleCharacters(), rowLength: 6 };
    case "zhuMaxims":
      return { paragraph: getParagraphZhuMaxims(), rowLength: undefined };
  }
}
