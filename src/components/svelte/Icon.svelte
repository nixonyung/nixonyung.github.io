<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  const {
    icon,
    class: classList,
  }: {
    icon: string | undefined;
    class?: ClassValue;
  } = $props();
</script>

{#if icon}
  <span class={["align-middle", icon, classList]}></span>
{/if}
