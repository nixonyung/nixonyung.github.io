import type { Dictionary, Keymap } from "./locales/locale";

// should match codes from SpeechSynthesis
const LANGS = ["en-US", "ja-JP", "ko-KR"] as const;
export type Lang = (typeof LANGS)[number];
function isLang(lang: string | null | undefined): lang is Lang {
  return !!lang && (LANGS as readonly string[]).includes(lang);
}

export const globals = new (class {
  DEV = import.meta.env.MODE === "development";

  searchParams = $state(new URLSearchParams(window.location.search));

  // locale
  langs = LANGS;
  lang: Lang = $state(
    (() => {
      const lang = this.searchParams.get("lang");
      return isLang(lang) ? lang : "en-US";
    })(),
  );
  localeKeymap: Keymap = $state({});
  localeDictionary: Dictionary = $state({});
  localeDictionaryKeys = $derived(Object.keys(this.localeDictionary));

  // voice
  availableVoices: SpeechSynthesisVoice[] = $state([]);
  voice = $derived(
    this.availableVoices.find(({ lang, name }) => lang === this.lang && name.startsWith("Google")),
  );
  speechSynthesisErr = $state(<SpeechSynthesisErrorEvent | undefined>undefined);

  // question
  questionLength = $state(parseInt(this.searchParams.get("questionLength") ?? "3"));
  questions: ({ letter: string } & Dictionary[string])[] = $state([]);
  showRomanizations = $state(this.searchParams.has("showRomanizations", "true"));
  inputs: string[] = $state([""]);
  isCorrects = $derived(this.questions.map(({ input }, i) => input && this.inputs[i] === input));
  allCorrect = $derived(this.isCorrects.every((is) => is));

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

  resetSearchParams() {
    this.searchParams = new URLSearchParams();
  }

  saveSetting(key: string, value: string, defaultValue?: string): void;
  saveSetting(key: string, value: number, defaultValue?: number): void;
  saveSetting(key: string, value: boolean, defaultValue?: boolean): void;
  saveSetting(
    key: string,
    value: string | number | boolean,
    defaultValue?: string | number | boolean,
  ) {
    if (value === defaultValue) {
      this.searchParams.delete(key);
    } else if (typeof value === "string") {
      this.searchParams.set(key, value);
    } else if (typeof value === "number") {
      this.searchParams.set(key, value.toString());
    } else {
      this.searchParams.set(key, value ? "true" : "false");
    }

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
