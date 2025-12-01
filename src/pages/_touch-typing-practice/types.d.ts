export type SettingsSchema = {
  [T: string]: {
    paramKey: string;
    defaultValue: string | number | boolean;
  };
};

export type Settings<Sc extends SettingsSchema> = {
  [K in keyof Sc]: Sc[K]["defaultValue"];
};

export type Keymap = Record<string, string>;

export type Letter = {
  letter: string;
  actualPronunciation?: string;

  romanization?: string;
  actualInput?: string;
};

export type Gojuon = Letter & {
  gojuonPosition: {
    row: number;
    col: number;
  };
};

export type Word = {
  word: string;
  aliases?: string[];

  meaning: string;

  romanization?: string;
  actualInput?: string;
};

export type JapaneseWord = Word & {
  hiraganaForm?: string;
  katakanaForm?: string;
};
