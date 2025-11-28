<script lang="ts">
  import "@/styles.css";
  import { app, useSyncSettings } from "./app.svelte";
  import EN from "./locales/en/EN.svelte";
  import JP from "./locales/jp/JP.svelte";
  import KR from "./locales/kr/KR.svelte";

  useSyncSettings(app.SETTINGS_SCHEMA, app.settings);

  speechSynthesis.addEventListener("voiceschanged", () => {
    app.availableVoices = speechSynthesis.getVoices();

    if (app.DEV) {
      console.log(
        "voices",
        app.availableVoices.map(({ lang, name }) => `(${lang}) ${name}`),
      );
    }
  });

  // langs should match codes from SpeechSynthesis
  const langToComponent = {
    "en-US": EN,
    "ja-JP": JP,
    "ko-KR": KR,
  } as const;
  const LangComponent = $derived(
    langToComponent[app.settings.lang as keyof typeof langToComponent],
  );
</script>

<div class="flex min-h-dvh flex-col gap-3 px-4 pt-2 pb-6">
  <h1 class="mt-3 mb-6 text-xl underline underline-offset-4">Touch Typing Practice</h1>

  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <label>
      lang:
      <select bind:value={app.settings.lang} class="rounded bg-primary ring">
        {#each Object.keys(langToComponent) as lang (lang)}
          <option value={lang}>{lang}</option>
        {/each}
      </select>
    </label>
  </div>

  <LangComponent />
</div>
