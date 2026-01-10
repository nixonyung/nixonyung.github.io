<script lang="ts">
  import SelectInput from "@/components/SelectInput.svelte";
  import { speech } from "@/lib/speech.svelte";
  import "@/styles.css";
  import { initSettings, useSyncSettings } from "../../lib/settings.svelte";
  import EN from "./locales/en/EN.svelte";
  import JP from "./locales/jp/JP.svelte";
  import KR from "./locales/kr/KR.svelte";

  // settings
  const SETTINGS_SCHEMA = {
    // values of lang should match codes from SpeechSynthesis
    lang: { paramKey: "lang", defaultValue: <"en-US" | "ja-JP" | "ko-KR">"en-US" },
  };
  const settings = $state(initSettings(SETTINGS_SCHEMA));
  useSyncSettings(SETTINGS_SCHEMA, settings);

  $effect(() => {
    speech.voice = speech.availableVoices.find(
      ({ lang, name }) => lang === settings?.lang && name.startsWith("Google"),
    );
  });
</script>

<div class="flex min-h-dvh flex-col gap-3 px-4 pt-2 pb-6">
  <h1 class="mt-3 mb-6 text-xl underline underline-offset-4">Touch Typing Practice</h1>

  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <SelectInput bind:value={settings.lang} label="Lang" options={["en-US", "ja-JP", "ko-KR"]} />
  </div>

  {#if settings.lang === "en-US"}
    <EN />
  {:else if settings.lang === "ja-JP"}
    <JP />
  {:else if settings.lang === "ko-KR"}
    <KR />
  {/if}
</div>
