import en from "./locales/en";
import jp from "./locales/jp";
import kr from "./locales/kr";
import type { Dictionary } from "./locales/locale";

const LOCALES = {
  "en-US": en,
  "ja-JP": jp,
  "ko-KR": kr,
};
export type Lang = keyof typeof LOCALES;

export const globals = new (class {
  DEV = import.meta.env.MODE === "development";

  searchParams = $state(new URLSearchParams(window.location.search));

  // locale
  langs = $derived(Object.keys(LOCALES) as Lang[]);
  langParam = $derived(this.searchParams.get("lang"));
  lang: Lang = $state(
    this.langParam && this.langParam in LOCALES ? (this.searchParams.get("lang") as Lang) : "en-US",
  );
  locale = $derived(LOCALES[this.lang]);
  localeKeymap = $derived(LOCALES[this.lang].keymap);
  // localeDictionary = $derived(LOCALES[this.lang].dictionary);
  localeDictionary = $derived.by(() => {
    switch (this.lang) {
      case "en-US":
        return en.dictionary;
      case "ko-KR":
        return kr.dictionary;
      case "ja-JP": {
        // caveat: need to explicitly state dependencies when using conditional properties
        this.jpUseHiragana;
        this.jpUseKatakana;
        this.jpUseRowA;
        this.jpUseRowKa;
        this.jpUseRowSa;
        this.jpUseRowTa;
        this.jpUseRowNa;
        this.jpUseRowHa;
        this.jpUseRowMa;
        this.jpUseRowYa;
        this.jpUseRowRa;
        this.jpUseRowWa;
        this.jpUseRowN;

        // (ref.) [五十音](https://www.wikiwand.com/zh-hk/articles/五十音#五十音)
        return {
          // 平假名 Hiragana
          ...(this.jpUseHiragana &&
            this.jpUseRowA && {
              あ: { input: "a", romanization: "a", pronunciation: "あ" },
              い: { input: "i", romanization: "i", pronunciation: "い" },
              う: { input: "u", romanization: "u", pronunciation: "う" },
              え: { input: "e", romanization: "e", pronunciation: "え" },
              お: { input: "o", romanization: "o", pronunciation: "お" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowKa && {
              か: { input: "ka", romanization: "ka", pronunciation: "か" },
              き: { input: "ki", romanization: "ki", pronunciation: "き" },
              く: { input: "ku", romanization: "ku", pronunciation: "く" },
              け: { input: "ke", romanization: "ke", pronunciation: "け" },
              こ: { input: "ko", romanization: "ko", pronunciation: "こ" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowSa && {
              さ: { input: "sa", romanization: "sa", pronunciation: "さ" },
              し: { input: "si", romanization: "si", pronunciation: "し" },
              す: { input: "su", romanization: "su", pronunciation: "す" },
              せ: { input: "se", romanization: "se", pronunciation: "せ" },
              そ: { input: "so", romanization: "so", pronunciation: "そ" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowTa && {
              た: { input: "ta", romanization: "ta", pronunciation: "た" },
              ち: { input: "ti", romanization: "ti", pronunciation: "ち" },
              つ: { input: "tu", romanization: "tu", pronunciation: "つ" },
              て: { input: "te", romanization: "te", pronunciation: "て" },
              と: { input: "to", romanization: "to", pronunciation: "と" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowNa && {
              な: { input: "na", romanization: "na", pronunciation: "な" },
              に: { input: "ni", romanization: "ni", pronunciation: "に" },
              ぬ: { input: "nu", romanization: "nu", pronunciation: "ぬ" },
              ね: { input: "ne", romanization: "ne", pronunciation: "ね" },
              の: { input: "no", romanization: "no", pronunciation: "の" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowHa && {
              は: { input: "ha", romanization: "ha", pronunciation: "は" },
              ひ: { input: "hi", romanization: "hi", pronunciation: "ひ" },
              ふ: { input: "hu", romanization: "hu", pronunciation: "ふ" },
              へ: { input: "he", romanization: "he", pronunciation: "へ" },
              ほ: { input: "ho", romanization: "ho", pronunciation: "ほ" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowMa && {
              ま: { input: "ma", romanization: "ma", pronunciation: "ま" },
              み: { input: "mi", romanization: "mi", pronunciation: "み" },
              む: { input: "mu", romanization: "mu", pronunciation: "む" },
              め: { input: "me", romanization: "me", pronunciation: "め" },
              も: { input: "mo", romanization: "mo", pronunciation: "も" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowYa && {
              や: { input: "ya", romanization: "ya", pronunciation: "や" },
              ゆ: { input: "yu", romanization: "yu", pronunciation: "ゆ" },
              よ: { input: "yo", romanization: "yo", pronunciation: "よ" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowRa && {
              ら: { input: "ra", romanization: "ra", pronunciation: "ら" },
              り: { input: "ri", romanization: "ri", pronunciation: "り" },
              る: { input: "ru", romanization: "ru", pronunciation: "る" },
              れ: { input: "re", romanization: "re", pronunciation: "れ" },
              ろ: { input: "ro", romanization: "ro", pronunciation: "ろ" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowWa && {
              わ: { input: "wa", romanization: "wa", pronunciation: "わ" },
              を: { input: "wo", romanization: "wo", pronunciation: "を" },
            }),
          ...(this.jpUseHiragana &&
            this.jpUseRowN && {
              ん: { input: "n", romanization: "n", pronunciation: "ん" },
            }),

          // 片假名 Katakana
          ...(this.jpUseKatakana &&
            this.jpUseRowA && {
              ア: { input: "a", romanization: "a", pronunciation: "ア" },
              イ: { input: "i", romanization: "i", pronunciation: "イ" },
              ウ: { input: "u", romanization: "u", pronunciation: "ウ" },
              エ: { input: "e", romanization: "e", pronunciation: "エ" },
              オ: { input: "o", romanization: "o", pronunciation: "オ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowKa && {
              カ: { input: "ka", romanization: "ka", pronunciation: "カ" },
              キ: { input: "ki", romanization: "ki", pronunciation: "キ" },
              ク: { input: "ku", romanization: "ku", pronunciation: "ク" },
              ケ: { input: "ke", romanization: "ke", pronunciation: "ケ" },
              コ: { input: "ko", romanization: "ko", pronunciation: "コ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowSa && {
              サ: { input: "sa", romanization: "sa", pronunciation: "サ" },
              シ: { input: "shi", romanization: "shi", pronunciation: "シ" },
              ス: { input: "su", romanization: "su", pronunciation: "ス" },
              セ: { input: "se", romanization: "se", pronunciation: "セ" },
              ソ: { input: "so", romanization: "so", pronunciation: "ソ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowTa && {
              タ: { input: "ta", romanization: "ta", pronunciation: "タ" },
              チ: { input: "chi", romanization: "chi", pronunciation: "チ" },
              ツ: { input: "tsu", romanization: "tsu", pronunciation: "ツ" },
              テ: { input: "te", romanization: "te", pronunciation: "テ" },
              ト: { input: "to", romanization: "to", pronunciation: "ト" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowNa && {
              ナ: { input: "na", romanization: "na", pronunciation: "ナ" },
              ニ: { input: "ni", romanization: "ni", pronunciation: "ニ" },
              ヌ: { input: "nu", romanization: "nu", pronunciation: "ヌ" },
              ネ: { input: "ne", romanization: "ne", pronunciation: "ネ" },
              ノ: { input: "no", romanization: "no", pronunciation: "ノ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowHa && {
              ハ: { input: "ha", romanization: "ha", pronunciation: "ハ" },
              ヒ: { input: "hi", romanization: "hi", pronunciation: "ヒ" },
              フ: { input: "fu", romanization: "fu", pronunciation: "フ" },
              ヘ: { input: "he", romanization: "he", pronunciation: "ヘ" },
              ホ: { input: "ho", romanization: "ho", pronunciation: "ホ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowMa && {
              マ: { input: "ma", romanization: "ma", pronunciation: "マ" },
              ミ: { input: "mi", romanization: "mi", pronunciation: "ミ" },
              ム: { input: "mu", romanization: "mu", pronunciation: "ム" },
              メ: { input: "me", romanization: "me", pronunciation: "メ" },
              モ: { input: "mo", romanization: "mo", pronunciation: "モ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowYa && {
              ヤ: { input: "ya", romanization: "ya", pronunciation: "ヤ" },
              ユ: { input: "yu", romanization: "yu", pronunciation: "ユ" },
              ヨ: { input: "yo", romanization: "yo", pronunciation: "ヨ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowRa && {
              ラ: { input: "ra", romanization: "ra", pronunciation: "ラ" },
              リ: { input: "ri", romanization: "ri", pronunciation: "リ" },
              ル: { input: "ru", romanization: "ru", pronunciation: "ル" },
              レ: { input: "re", romanization: "re", pronunciation: "レ" },
              ロ: { input: "ro", romanization: "ro", pronunciation: "ロ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowWa && {
              ワ: { input: "wa", romanization: "wa", pronunciation: "ワ" },
              ヲ: { input: "wo", romanization: "wo", pronunciation: "ヲ" },
            }),
          ...(this.jpUseKatakana &&
            this.jpUseRowN && {
              ン: { input: "n", romanization: "n", pronunciation: "ン" },
            }),
        };
      }
    }
  });
  localeDictionaryKeys = $derived(Object.keys(this.localeDictionary));

  // voice
  availableVoices = $state(<SpeechSynthesisVoice[]>[]);
  voice = $derived(
    this.availableVoices.find(({ lang, name }) => lang === this.lang && name.startsWith("Google")),
  );
  speechSynthesisErr = $state(<SpeechSynthesisErrorEvent | undefined>undefined);

  // question
  questionLength = $state(3);
  questions = $state(<({ letter: string } & Dictionary[string])[]>[]);
  showRomanizations = $state(true);
  answer = $derived(this.questions.map(({ input }) => input));
  inputs = $state([""]);
  isCorrects = $state(<boolean[]>[]);
  allCorrect = $derived(this.isCorrects.every((is) => is));

  // language-specific states
  jpUseHiragana = $state(this.searchParams.has("jpSystem", "hiragana"));
  jpUseKatakana = $state(this.searchParams.has("jpSystem", "katakana"));
  jpShowOrigins = $state(this.searchParams.has("jpShowOrigins"));
  jpUseRowA = $state(this.searchParams.has("jpRows", "a"));
  jpUseRowKa = $state(this.searchParams.has("jpRows", "ka"));
  jpUseRowSa = $state(this.searchParams.has("jpRows", "sa"));
  jpUseRowTa = $state(this.searchParams.has("jpRows", "ta"));
  jpUseRowNa = $state(this.searchParams.has("jpRows", "na"));
  jpUseRowHa = $state(this.searchParams.has("jpRows", "ha"));
  jpUseRowMa = $state(this.searchParams.has("jpRows", "ma"));
  jpUseRowYa = $state(this.searchParams.has("jpRows", "ya"));
  jpUseRowRa = $state(this.searchParams.has("jpRows", "ra"));
  jpUseRowWa = $state(this.searchParams.has("jpRows", "wa"));
  jpUseRowN = $state(this.searchParams.has("jpRows", "n"));

  // miscellaneous states
  isHoldingShift = $state(false);
  isSpeaking = $state(false);

  constructor() {
    this.nextQuestion();

    speechSynthesis.addEventListener("voiceschanged", () => {
      this.availableVoices = speechSynthesis.getVoices();
      if (this.DEV) {
        console.log(
          "voices",
          this.availableVoices.map(({ lang, name }) => `(${lang}) ${name}`),
        );
      }
    });
  }

  saveSearchParams() {
    window.history.replaceState(null, "", `?${this.searchParams.toString()}`);
  }

  onKeyDown({ key, ctrlKey = false }: { key: string; ctrlKey?: boolean }) {
    if (
      // ignore refresh (Ctrl-r)
      (ctrlKey && (key === "r" || key === "R")) ||
      // ignore when modifying settings
      document.activeElement instanceof HTMLInputElement
    ) {
      return;
    }

    if (this.DEV) {
      console.log("onInput", key, "ctrl", ctrlKey);
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (this.allCorrect) {
      switch (key) {
        case "r":
          this.speak(this.questions.map(({ pronunciation }) => pronunciation));
          break;
        case "Enter":
          this.nextQuestion();
          break;
      }
    } else {
      if (key.match(/^[a-zA-Z]$/)) {
        this.inputs[this.inputs.length - 1] += key;
        this.isHoldingShift = false;
      } else {
        switch (key) {
          case "Shift":
            this.isHoldingShift = true;
            break;
          case " ":
            if (
              this.inputs[this.inputs.length - 1] !== "" &&
              this.inputs.length < this.questionLength
            ) {
              this.inputs.push("");
            }
            break;
          case "Backspace":
            if (ctrlKey) {
              this.inputs[this.inputs.length - 1] = "";
            } else {
              const lastInput = this.inputs[this.inputs.length - 1];

              if (lastInput === "" && this.inputs.length > 1) {
                this.inputs.pop();
              } else {
                this.inputs[this.inputs.length - 1] = lastInput.slice(0, -1);
              }

              break;
            }
        }
      }
    }
  }

  nextQuestion() {
    this.questions = Array.from({ length: this.questionLength }, () => {
      const letter =
        this.localeDictionaryKeys[Math.floor(Math.random() * this.localeDictionaryKeys.length)];
      return {
        letter,
        ...this.localeDictionary[letter],
      };
    });
    this.inputs = [""];
    this.isCorrects = Array(this.questionLength).fill(false);
  }

  speak(letters: undefined | string | (undefined | string)[], onend?: () => void) {
    if (letters === undefined || this.voice === undefined || this.isSpeaking) {
      onend?.();
      return false;
    }

    if (typeof letters === "string") {
      letters = [letters];
    }

    this.isSpeaking = true;
    for (const [i, letter] of letters.entries()) {
      if (letters === undefined) continue;

      const utter = new SpeechSynthesisUtterance(letter);
      utter.voice = this.voice;
      utter.rate = 0.8;
      utter.onstart = () => {
        if (i === 0) {
          this.isSpeaking = true;
        }
      };
      utter.onend = () => {
        if (i === letters.length - 1) {
          this.isSpeaking = false;
          onend?.();
        }
      };
      utter.onerror = (err) => {
        this.speechSynthesisErr = err;
        this.isSpeaking = false;
      };

      speechSynthesis.speak(utter);
    }

    return true;
  }
})();
