export type Keymap = Record<string, string>;

export type Dictionary = Record<
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
