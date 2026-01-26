<script lang="ts">
  import SelectInput from "@/components/SelectInput.svelte";
  import { speech } from "@/lib/speech.svelte";
  import "@/styles.css";
  import { initSettings, useSyncSettings } from "../../lib/settings.svelte";
  import EN from "./locales/en/EN.svelte";
  import JP from "./locales/jp/JP.svelte";
  import KR from "./locales/kr/KR.svelte";

  const settings = $state(
    initSettings({
      // values of lang should match codes from SpeechSynthesis
      lang: { paramKey: "lang", defaultValue: "en-US" as "en-US" | "ja-JP" | "ko-KR" },
    }),
  );
  useSyncSettings(settings);

  $effect.pre(() => {
    speech.voice = speech.availableVoices.find(
      ({ lang, name }) => lang === settings?.lang.value && name.startsWith("Google"),
    );
  });
</script>

<div class="flex min-h-dvh flex-col gap-3 px-4 pt-2 pb-6">
  <h1>
    <button
      class="mt-3 mb-6 cursor-pointer text-xl underline underline-offset-4"
      onclick={() => {
        window.location.replace(window.location.pathname);
      }}
    >
      Touch Typing Practice
    </button>
  </h1>

  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <SelectInput
      bind:value={settings.lang.value}
      label="Lang"
      options={["en-US", "ja-JP", "ko-KR"]}
    />
  </div>

  {#if settings.lang.value === "en-US"}
    <EN />
  {:else if settings.lang.value === "ja-JP"}
    <JP />
  {:else if settings.lang.value === "ko-KR"}
    <KR />
  {/if}
</div>
