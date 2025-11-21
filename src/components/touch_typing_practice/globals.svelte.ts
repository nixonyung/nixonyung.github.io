import { SvelteURLSearchParams } from "svelte/reactivity";
import type { Dictionary, Keymap } from "./locales/locale";

// should match codes from SpeechSynthesis
const LANGS = ["en-US", "ja-JP", "ko-KR"] as const;
export type Lang = (typeof LANGS)[number];
function isLang(lang: string | null | undefined): lang is Lang {
  return !!lang && (LANGS as readonly string[]).includes(lang);
}

export const globals = new (class {
  DEV = import.meta.env.MODE === "development";

  searchParams = new SvelteURLSearchParams(window.location.search);

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
  isSpeaking = $state(false);

  constructor() {
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
    for (const key of this.searchParams.keys()) {
      this.searchParams.delete(key);
    }
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

  emitKeydown({ key, ctrlKey = false }: { key: string; ctrlKey?: boolean }) {
    dispatchEvent(
      new KeyboardEvent("keydown", {
        key,
        ctrlKey,
        bubbles: true,
      }),
    );
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
