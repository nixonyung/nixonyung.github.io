<script lang="ts">
  import { globals } from "./globals.svelte";

  const {
    hiragana,
    hiraganaOrigin,
    katakana,
    katakanaOrigin,
  }: {
    hiragana?: string;
    hiraganaOrigin?: string;
    katakana?: string;
    katakanaOrigin?: string;
  } = $props();
</script>

<td class="px-1">
  <!-- caveat: table is rtl -->

  {#if katakana && globals.jpUseKatakana}
    <div class="inline-flex flex-col">
      <span>{katakana}</span>
      {#if katakanaOrigin && globals.jpShowOrigins}
        <span>({katakanaOrigin})</span>
      {/if}
    </div>
  {/if}

  {#if hiragana && globals.jpUseHiragana}
    <div class="inline-flex flex-col">
      <span>{hiragana}</span>
      {#if hiraganaOrigin && globals.jpShowOrigins}
        <span>({hiraganaOrigin})</span>
      {/if}
    </div>
  {/if}
</td>
