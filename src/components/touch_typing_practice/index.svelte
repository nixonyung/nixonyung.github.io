<script lang="ts">
  import "@/styles.css";
  import { globals } from "./globals.svelte";
  import EN from "./locales/en/EN.svelte";
  import JP from "./locales/jp/JP.svelte";
  import KR from "./locales/kr/KR.svelte";
</script>

<div class="flex min-h-dvh flex-col gap-3 px-4 pt-2 pb-6">
  <h1 class="mt-3 mb-6 text-xl underline underline-offset-4">Touch Typing Practice</h1>

  <!-- settings -->
  <div class="flex items-center-safe gap-9">
    <label>
      lang:
      <select
        bind:value={globals.lang}
        class="rounded bg-primary ring"
        onchange={() => globals.saveSetting("lang", globals.lang)}
      >
        {#each globals.langs as lang (lang)}
          <option value={lang}>{lang}</option>
        {/each}
      </select>
    </label>
  </div>

  {#if globals.lang === "en-US"}
    <EN />
  {:else if globals.lang === "ja-JP"}
    <JP />
  {:else if globals.lang === "ko-KR"}
    <KR />
  {/if}
</div>
