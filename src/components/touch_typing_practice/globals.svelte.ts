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

  // locale
  langs = $derived(Object.keys(LOCALES) as Lang[]);
  lang = $state(<Lang>"en-US");
  locale = $derived(LOCALES[this.lang]);
  localeKeymap = $derived(LOCALES[this.lang].keymap);
  localeDictionary = $derived(LOCALES[this.lang].dictionary);
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
  showRomanization = $state(true);
  answer = $derived(this.questions.map(({ input }) => input));
  inputs = $state([""]);
  isCorrects = $state(<boolean[]>[]);
  allCorrect = $derived(this.isCorrects.every((is) => is));

  // miscellaneous states
  isHoldingShift = $state(false);
  isSpeaking = $state(false);

  init() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    if (lang && lang in LOCALES) {
      this.lang = lang as Lang;
    }

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
