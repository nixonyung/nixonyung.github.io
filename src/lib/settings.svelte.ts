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
  type: "string[]" | "number[]" | "boolean[]",
): string[] | number[] | boolean[];
function decodeSetting(
  encoded: string,
  type: "string" | "number" | "boolean" | "string[]" | "number[]" | "boolean[]",
): string | number | boolean | string[] | number[] | boolean[];
function decodeSetting(
  encoded: string,
  type: "string" | "number" | "boolean" | "string[]" | "number[]" | "boolean[]",
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

export interface SettingsSchemaField {
  paramKey: string;
  defaultValue: string | number | boolean | string[] | number[] | boolean[];
}

interface SettingsSchema {
  [K: string]: SettingsSchema | SettingsSchemaField;
}

type TSettingsValue<Field extends SettingsSchemaField> = Field["defaultValue"] extends boolean
  ? boolean
  : Field["defaultValue"];

type TSetting<SchemaField extends SettingsSchemaField> = Omit<
  SchemaField,
  "defaultValue" | "value"
> & {
  defaultValue: TSettingsValue<SchemaField>;
  value: TSettingsValue<SchemaField>;
};

type TSettings<Sc extends SettingsSchema> = {
  [K in keyof Sc]: Sc[K] extends SettingsSchema
    ? TSettings<Sc[K]>
    : Sc[K] extends SettingsSchemaField
      ? TSetting<Sc[K]>
      : never;
};

function readSetting(field: {
  paramKey: SettingsSchemaField["paramKey"];
  defaultValue: SettingsSchemaField["defaultValue"];
}) {
  const encoded = searchParams.get(field.paramKey);
  if (encoded === null) return cloneDeep(field.defaultValue);

  if (Array.isArray(field.defaultValue)) {
    if (field.defaultValue.length === 0) return [];

    const arrayType =
      `${typeof field.defaultValue[0] as "string" | "number" | "boolean"}[]` as const;
    const decoded = decodeSetting(encoded, arrayType);
    // arrays in settings should be conceptually fixed in size, so invalidate mismatching-length arrays
    if (decoded.length !== field.defaultValue.length) return cloneDeep(field.defaultValue);

    return decoded;
  } else {
    return decodeSetting(encoded, typeof field.defaultValue as "string" | "number" | "boolean");
  }
}

function isSchemaField(field: SettingsSchema | SettingsSchemaField): field is SettingsSchemaField {
  return field.paramKey !== undefined;
}
export function initSettings<Sc extends SettingsSchema>(schema: Sc): TSettings<Sc> {
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
  ) as TSettings<Sc>;
}

type Setting = TSetting<SettingsSchemaField>;

interface Settings {
  [K: string]: Settings | Setting;
}

function isSetting(setting: Settings | Setting): setting is Setting {
  return setting.paramKey !== undefined;
}
function settingsForEach(
  settings: Settings | Setting,
  callbackFn: ((setting: Setting) => Setting["value"]) | ((setting: Setting) => void),
) {
  if (isSetting(settings)) {
    const result = callbackFn(settings);
    if (result !== undefined) settings.value = result;
    return;
  }

  for (const setting of Object.values(settings)) {
    settingsForEach(setting, callbackFn);
  }
}

export function useSyncSettings(settings: Settings) {
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
