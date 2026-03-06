export type Keymap = Record<string, string>;

export interface Letter {
  letter: string;
  svgPath?: string;
  actualPronunciation?: string;

  romanization?: string;
  actualInput?: string;
}

export interface JapaneseWord {
  kanjis?: string[];
  rareKanjis?: string[];
  hiragana?: string;
  katakana?: string;
  preferredForm?: "kanji" | "hiragana" | "katakana";
  romanization: string;
  exampleUsages?: string[];

  meaning?: string;
  derivedMeanings?: string[];

  question?: string;
  answer?: string;
}

export interface JapaneseVerb extends JapaneseWord {
  verbGroup: "Godan" | "Ichidan" | "Irregular";
  verbIsTransitive: boolean;
}

export interface JapaneseAdjective extends JapaneseWord {
  adjGroup: "I" | "Na";
}
