<script lang="ts">
  import { globals } from "./globals.svelte";

  const props: { key: string } = $props();

  const shiftKey = $derived(props.key?.toUpperCase());

  const originalKey = $derived(globals.isHoldingShift ? shiftKey : props.key);
  const mappedKey = $derived(
    globals.isHoldingShift
      ? shiftKey && globals.localeKeymap[shiftKey]
      : props.key && globals.localeKeymap[props.key],
  );
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="relative grid size-12 place-items-center-safe rounded ring ring-primary-content"
  onclick={() => globals.onKeyDown({ key: originalKey })}
>
  <span class="text-xl">{mappedKey}</span>

  <!-- key hint -->
  {#if mappedKey !== originalKey}
    <span class="absolute top-0 left-1 text-xs font-light">{originalKey}</span>
  {/if}

  <!-- bumps -->
  {#if props.key === "f" || props.key === "j"}
    <div class="absolute bottom-1.5 w-2.5 border-b"></div>
  {/if}
</div>
