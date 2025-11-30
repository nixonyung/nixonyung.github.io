export type SettingsSchema = {
  [T: string]: {
    paramKey: string;
    defaultValue: string | number | boolean;
  };
};

export type Settings<const Sc extends SettingsSchema> = {
  [K in keyof Sc]: Sc[K]["defaultValue"];
};

export type Keymap = Record<string, string>;

export type LettersDict = Record<
  string,
  {
    input: string;
    romanization?: string;
    pronunciation?: string;

    gojuonPosition?: {
      row: number;
      col: number;
    };
  }
>;

export type WordsDict = Record<
  string,
  {
    input: string;
    aliases?: string[];
    romanization?: string;
    meaning: string;
  }
>;
