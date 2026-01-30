<script lang="ts">
  import type { Snippet } from "@astrojs/svelte/svelte-shims.d.ts";
  import type { ClassValue } from "svelte/elements";

  const {
    class: classList,
    children,
  }: {
    class?: ClassValue;
    children: Snippet;
  } = $props();
</script>

<kbd class={["rounded px-1 font-mono ring", classList]}>{@render children()}</kbd>
