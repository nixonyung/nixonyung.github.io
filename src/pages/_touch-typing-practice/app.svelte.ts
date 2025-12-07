import { cloneDeep, isEqual } from "es-toolkit";
import { onDestroy, onMount } from "svelte";
import type { Settings, SettingsSchema, SettingValue } from "./types";

// searchParams should be initialized before app, as initSettings depends on searchParams
// caveat: native URLSearchParams has better performance over SvelteURLSearchParams
const searchParams = new URLSearchParams(window.location.search);

export const app = new (class {
  DEV = import.meta.env.MODE === "development";

  // settings
  SETTINGS_SCHEMA = {
    lang: { paramKey: "lang", defaultValue: "en-US" },
  };
  settings = $state(initSettings(this.SETTINGS_SCHEMA));

  // voice
  availableVoices: SpeechSynthesisVoice[] = $state([]);
  voice = $derived(
    this.availableVoices.find(
      ({ lang, name }) => lang === this.settings?.lang && name.startsWith("Google"),
    ),
  );
  speechSynthesisErr = $state(<SpeechSynthesisErrorEvent | undefined>undefined);
  isSpeaking = $state(false);
})();

function decodeSetting(encoded: string, type: "string"): string;
function decodeSetting(encoded: string, type: "number"): number;
function decodeSetting(encoded: string, type: "boolean"): boolean;
function decodeSetting(
  encoded: string,
  type: "string" | "number" | "boolean",
): string | number | boolean;
function decodeSetting(encoded: string, type: "string[]"): string[];
function decodeSetting(encoded: string, type: "number[]"): number[];
function decodeSetting(encoded: string, type: "boolean[]"): boolean[];
function decodeSetting(
  encoded: string,
  type: "string[]" | "number[]" | "boolean[]",
): (string | number | boolean)[];
function decodeSetting(
  encoded: string,
  type: "string" | "number" | "boolean" | "string[]" | "number[]" | "boolean[]" = "string",
): string | number | boolean | (string | number | boolean)[] {
  switch (type) {
    case "string":
      return encoded;
    case "number":
      return parseInt(encoded);
    case "boolean":
      return encoded === "1";
    case "string[]":
      return encoded.split("-").map((token) => decodeSetting(token, "string"));
    case "number[]":
      return encoded.split("-").map((token) => decodeSetting(token, "number"));
    case "boolean[]":
      return encoded.split("-").map((token) => decodeSetting(token, "boolean"));
  }
}

function encodeSetting(value: string | number | boolean): string;
function encodeSetting(value: string | number | boolean | (string | number | boolean)[]): string;
function encodeSetting(value: string | number | boolean | (string | number | boolean)[]) {
  if (Array.isArray(value)) {
    return value.map(encodeSetting).join("-");
  } else {
    switch (typeof value) {
      case "string":
        return value;
      case "number":
        return value.toString();
      case "boolean":
        return value ? "1" : "0";
    }
  }
}

function readSetting(
  paramKey: string,
  defaultValue: string | number | boolean | (string | number | boolean)[] = "",
  arrayType: "string[]" | "number[]" | "boolean[]" = "string[]",
): string | number | boolean | (string | number | boolean)[] {
  const encoded = searchParams.get(paramKey);
  if (encoded === null) return cloneDeep(defaultValue);

  switch (typeof defaultValue) {
    case "string":
      return decodeSetting(encoded, "string");
    case "number":
      return decodeSetting(encoded, "number");
    case "boolean":
      return decodeSetting(encoded, "boolean");
    default:
      return decodeSetting(encoded, arrayType);
  }
}

export function initSettings<Sc extends SettingsSchema>(schema: Sc) {
  return Object.fromEntries(
    Object.entries(schema).map(([key, { paramKey, defaultValue }]) => [
      key,
      readSetting(paramKey, defaultValue),
    ]),
  ) as Settings<Sc>;
}

function updateURL() {
  const paramStr = searchParams.toString();
  history.replaceState(null, "", paramStr ? `?${paramStr}` : location.pathname);
}

export function useSyncSettings<Sc extends SettingsSchema>(schema: Sc, settings: Settings<Sc>) {
  // read settings from URL onMount
  onMount(() => {
    for (const [key, { paramKey, defaultValue, arrayType }] of Object.entries(schema)) {
      settings[key as keyof Sc] = readSetting(paramKey, defaultValue, arrayType) as SettingValue<
        Sc,
        typeof key
      >;
    }
  });

  // sync settings with URL
  for (const [key, { paramKey, defaultValue }] of Object.entries(schema)) {
    $effect(() => {
      const value = settings[key as keyof Sc];
      if (isEqual(value, defaultValue)) {
        searchParams.delete(paramKey);
      } else {
        searchParams.set(paramKey, encodeSetting(value));
      }

      updateURL();
    });
  }

  // remove settings from URL onDestroy
  onDestroy(() => {
    for (const { paramKey } of Object.values(schema)) {
      searchParams.delete(paramKey);
    }

    updateURL();
  });
}

export function emitKeydown({ key, ctrlKey = false }: { key: string; ctrlKey?: boolean }) {
  dispatchEvent(
    new KeyboardEvent("keydown", {
      key,
      ctrlKey,
      bubbles: true,
    }),
  );
}

export function speak(letters: (string | undefined)[] | string | undefined) {
  if (letters === undefined || app.voice === undefined || app.isSpeaking) return false;

  if (typeof letters === "string") {
    letters = [letters];
  }

  app.isSpeaking = true;
  for (const [i, letter] of letters.entries()) {
    if (letters === undefined) continue;

    const utter = new SpeechSynthesisUtterance(letter);
    utter.voice = app.voice;
    utter.rate = 0.8;
    utter.onstart = () => {
      if (i === 0) app.isSpeaking = true;
    };
    utter.onend = () => {
      if (i === letters.length - 1) app.isSpeaking = false;
    };
    utter.onerror = (err) => {
      app.speechSynthesisErr = err;
      app.isSpeaking = false;
    };

    speechSynthesis.speak(utter);
  }

  return true;
}
