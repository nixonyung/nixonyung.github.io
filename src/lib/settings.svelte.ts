import { cloneDeep, debounce } from "es-toolkit";
import { onDestroy, onMount } from "svelte";

const searchParams = new URLSearchParams(window.location.search);

// need debounce to handle onDestroy from multiple components
const updateURL = debounce(() => {
  const paramStr = searchParams.toString();
  history.replaceState(null, "", paramStr ? `?${paramStr}` : location.pathname);
}, 50);

function encodeSetting(value: string | number | boolean | string[] | number[] | boolean[]): string {
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
  type: "string" | "number" | "boolean" | "string[]" | "number[]" | "boolean[]",
): string | number | boolean | string[] | number[] | boolean[];
function decodeSetting(
  encoded: string,
  type: "string" | "number" | "boolean" | "string[]" | "number[]" | "boolean[]" = "string",
): string | number | boolean | string[] | number[] | boolean[] {
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

export type SettingsSchemaField = {
  paramKey: string;
} & (
  | { arrayType?: undefined; defaultValue: string }
  | { arrayType?: undefined; defaultValue: number }
  | { arrayType?: undefined; defaultValue: boolean }
  | { arrayType: "string[]"; defaultValue: string[] }
  | { arrayType: "number[]"; defaultValue: number[] }
  | { arrayType: "boolean[]"; defaultValue: boolean[] }
);

type SettingsSchema = {
  [K: string]: SettingsSchemaField | SettingsSchema;
};

type SettingsValue<Field extends SettingsSchemaField> = Field["defaultValue"] extends never[]
  ? Field["arrayType"] extends "string[]"
    ? string[]
    : Field["arrayType"] extends "number[]"
      ? number[]
      : Field["arrayType"] extends "boolean[]"
        ? boolean[]
        : never
  : Field["defaultValue"] extends true | false
    ? boolean
    : Field["defaultValue"];

type Setting<SchemaField extends SettingsSchemaField> = Omit<
  SchemaField,
  "defaultValue" | "value"
> & {
  defaultValue: SettingsValue<SchemaField>;
  value: SettingsValue<SchemaField>;
};

type Settings<Sc extends SettingsSchema> = {
  [K in keyof Sc]: Sc[K] extends SettingsSchemaField
    ? Setting<Sc[K]>
    : Sc[K] extends SettingsSchema
      ? Settings<Sc[K]>
      : never;
};

function readSetting(field: {
  paramKey: SettingsSchemaField["paramKey"];
  arrayType?: SettingsSchemaField["arrayType"];
  defaultValue: SettingsSchemaField["defaultValue"];
}) {
  const encoded = searchParams.get(field.paramKey);
  return encoded !== null
    ? decodeSetting(
        encoded,
        field.arrayType ?? (typeof field.defaultValue as "string" | "number" | "boolean"),
      )
    : cloneDeep(field.defaultValue);
}

function isSchemaField(field: SettingsSchema | SettingsSchemaField): field is SettingsSchemaField {
  return field.paramKey !== undefined;
}
export function initSettings<Sc extends SettingsSchema>(schema: Sc): Settings<Sc> {
  return Object.fromEntries(
    Object.entries(schema).map(([key, field]) => [
      key,
      isSchemaField(field)
        ? {
            paramKey: field.paramKey,
            defaultValue: field.defaultValue,
            value: readSetting(field),
          }
        : initSettings(field),
    ]),
  ) as Settings<Sc>;
}

type ResultSetting = Setting<SettingsSchemaField>;

type ResultSettings = {
  [K: string]: Setting<SettingsSchemaField> | ResultSettings;
};

function isSetting(setting: ResultSetting | ResultSettings): setting is ResultSetting {
  return setting.paramKey !== undefined;
}
function settingsForEach(
  settings: ResultSetting | ResultSettings,
  callbackFn: (setting: ResultSetting) => void,
) {
  if (isSetting(settings)) {
    const result = callbackFn(settings);
    if (result !== undefined) {
      settings.value = result;
    }
  } else {
    for (const setting of Object.values(settings)) {
      settingsForEach(setting, callbackFn);
    }
  }
}

export function useSyncSettings(settings: ResultSettings) {
  // read settings from URL
  onMount(() => {
    settingsForEach(settings, (setting) => readSetting(setting));
  });

  // sync settings with URL when component is in use
  $effect.pre(() => {
    settingsForEach(settings, ({ paramKey, defaultValue, value }) => {
      const encoded = encodeSetting(value);

      if (encoded === encodeSetting(defaultValue)) {
        searchParams.delete(paramKey);
      } else {
        searchParams.set(paramKey, encoded);
      }
    });
    updateURL();
  });

  // remove settings from URL when component is not in use
  onDestroy(() => {
    settingsForEach(settings, ({ paramKey }) => {
      searchParams.delete(paramKey);
    });
    updateURL();
  });
}
