export type SettingsSchema = {
  [T: string]: {
    paramKey: string;
    defaultValue: string | number | boolean | (string | number | boolean)[] | never[];
    arrayType?: "string[]" | "number[]" | "boolean[]";
  };
};

type SettingValue<
  Sc extends SettingsSchema,
  K extends keyof Sc,
> = Sc[K]["defaultValue"] extends never[]
  ? Sc[K]["arrayType"] extends "string[]"
    ? string[]
    : Sc[K]["arrayType"] extends "number[]"
      ? number[]
      : Sc[K]["arrayType"] extends "boolean[]"
        ? boolean[]
        : never
  : Sc[K]["defaultValue"];

export type Settings<Sc extends SettingsSchema> = {
  [K in keyof Sc]: SettingValue<Sc, K>;
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
  actualPronunciation?: string;
  aliases?: string[];

  meaning: string;

  romanization?: string;
  actualInput?: string;
};

export type JapaneseWord = {
  kanjis?: string[];
  rareKanjis?: string[];
  hiragana?: string;
  katakana?: string;
  exampleUsages?: string[];
  preferredForm?: "kanji" | "hiragana" | "katakana" | "example";
  romanization?: string;

  meaning: string;
};
