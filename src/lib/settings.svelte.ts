import { cloneDeep } from "es-toolkit";
import { onDestroy, onMount } from "svelte";
import type { Settings, SettingsSchema, SettingValue } from "../pages/_touch-typing-practice/types";

// searchParams should be initialized before app, as initSettings depends on searchParams
// caveat: native URLSearchParams has better performance over SvelteURLSearchParams
const searchParams = new URLSearchParams(window.location.search);

function updateURL() {
  const paramStr = searchParams.toString();
  history.replaceState(null, "", paramStr ? `?${paramStr}` : location.pathname);
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
      return parseFloat(encoded);
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

export function useSyncSettings<Sc extends SettingsSchema>(schema: Sc, settings: Settings<Sc>) {
  onMount(() => {
    // read settings from URL
    for (const [key, { paramKey, defaultValue, arrayType }] of Object.entries(schema)) {
      settings[key as keyof Sc] = readSetting(paramKey, defaultValue, arrayType) as SettingValue<
        Sc,
        typeof key
      >;
    }
  });

  // sync settings with URL
  for (const [key, { paramKey, defaultValue }] of Object.entries(schema)) {
    $effect.pre(() => {
      const value = settings[key as keyof Sc];
      const encoded = encodeSetting(value);

      if (encoded === encodeSetting(defaultValue)) {
        searchParams.delete(paramKey);
      } else {
        searchParams.set(paramKey, encoded);
      }

      updateURL();
    });
  }

  onDestroy(() => {
    // remove settings from URL
    for (const { paramKey } of Object.values(schema)) {
      searchParams.delete(paramKey);
    }

    updateURL();
  });
}
