<script lang="ts">
  import NumericInput from "@/components/svelte/NumericInput.svelte";
  import SelectInput from "@/components/svelte/SelectInput.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import { speech } from "@/lib/speech.svelte";
  import "@/styles.css";
  import { initSettings, useSyncSettings } from "../../lib/settings.svelte";
  import EN from "./locales/en/EN.svelte";
  import JP from "./locales/jp/JP.svelte";
  import KR from "./locales/kr/KR.svelte";
  import ZH from "./locales/zh/ZH.svelte";

  const settings = $state(
    initSettings({
      // values of lang should match codes from SpeechSynthesis
      lang: { paramKey: "lang", defaultValue: "en-US" as "en-US" | "zh-HK" | "ja-JP" | "ko-KR" },
      speechRate: { paramKey: "speechRate", defaultValue: speech.rate },
    }),
  );
  useSyncSettings(settings);
  $effect.pre(() => {
    speech.setLang(settings.lang.value);
  });
  $effect.pre(() => {
    speech.rate = settings.speechRate.value;
  });
</script>

<div
  class="min-h-dvh w-fit min-w-full touch-manipulation flex-col bg-primary p-4 font-content tracking-tight text-primary-content"
>
  <h1>
    <button
      class="cursor-pointer text-xl underline underline-offset-4"
      onclick={() => {
        window.location.replace(window.location.pathname);
      }}
    >
      Languages Learner
    </button>
  </h1>

  <!-- settings -->
  <SettingsRow wider class="mt-8">
    <SelectInput
      bind:value={settings.lang.value}
      label="Lang"
      options={["en-US", "zh-HK", "ja-JP", "ko-KR"]}
    />

    <NumericInput
      bind:value={settings.speechRate.value}
      label="Speech Rate"
      min={0.6}
      max={1.2}
      step={0.2}
      disabled={!speech.voice}
    />
    {#if !speech.voice}
      <span class="-ml-2 text-red-700">SpeechSynthesis is not available.</span>
    {/if}
  </SettingsRow>

  {#if settings.lang.value === "en-US"}
    <EN />
  {:else if settings.lang.value === "zh-HK"}
    <ZH />
  {:else if settings.lang.value === "ja-JP"}
    <JP />
  {:else if settings.lang.value === "ko-KR"}
    <KR />
  {/if}
</div>
