<script lang="ts">
  import type { Snippet } from "@astrojs/svelte/svelte-shims.d.ts";
  import type { ClassValue } from "svelte/elements";

  const {
    noPadding = false,
    class: classList,
    children,
  }: {
    noPadding?: boolean;
    class?: ClassValue;
    children: Snippet;
  } = $props();
</script>

<kbd class={["rounded font-mono ring", !noPadding && "px-1", classList]}>{@render children()}</kbd>
