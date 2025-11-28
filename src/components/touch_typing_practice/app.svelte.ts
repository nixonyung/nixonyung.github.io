import { onDestroy, onMount, untrack } from "svelte";
import type { Settings, SettingsSchema } from "./types";

// searchParams should be initialized before app, as initSettings depends on searchParams
// caveat: SvelteURLSearchParams performs worse
const searchParams = new URLSearchParams(window.location.search);

export const app = new (class {
  DEV = import.meta.env.MODE === "development";

  // settings
  SETTINGS_SCHEMA = {
    lang: { paramKey: "lang", defaultValue: "en-US" },
  };
  settings = $state(initSettings(this.SETTINGS_SCHEMA));

  // locale
  localeKeymap: Record<string, string> = $state({});
  localeDictionary: Record<
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
  > = $state({});
  localeDictionaryKeys = $derived(Object.keys(this.localeDictionary));

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

function readSetting(paramKey: string, defaultValue?: string | number | boolean) {
  if (defaultValue === undefined || typeof defaultValue === "string") {
    return searchParams.get(paramKey) ?? defaultValue ?? "";
  } else if (typeof defaultValue === "number") {
    const value = searchParams.get(paramKey);
    return value !== null ? parseInt(value) : defaultValue;
  } else if (defaultValue) {
    return !searchParams.has(paramKey, "false");
  } else {
    return searchParams.has(paramKey, "true");
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
    for (const [key, { paramKey, defaultValue }] of Object.entries(schema)) {
      settings[key as keyof Sc] = readSetting(paramKey, defaultValue);
    }
  });

  // sync settings with URL
  for (const [key, { paramKey, defaultValue }] of Object.entries(schema)) {
    $effect(() => {
      const value = settings[key as keyof Sc];

      untrack(() => {
        if (value === defaultValue) {
          searchParams.delete(paramKey);
        } else if (typeof value === "string") {
          searchParams.set(paramKey, value);
        } else if (typeof value === "number") {
          searchParams.set(paramKey, value.toString());
        } else {
          searchParams.set(paramKey, value ? "true" : "false");
        }

        updateURL();
      });
    });
  }

  // remove settings from URL onDestroy
  onDestroy(() => {
    for (const { paramKey } of Object.values(schema)) {
      searchParams.delete(paramKey);
    }

    updateURL();
  });

  return settings;
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

export function speak(letters: undefined | string | (undefined | string)[]) {
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
