<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  let {
    wider = false,
    matchHighlightedHeight = false,
    class: classList,
    children,
  }: {
    wider?: boolean;
    matchHighlightedHeight?: boolean;
    class?: ClassValue;
    children: Snippet;
  } = $props();
</script>

<div
  class={[
    "flex flex-wrap items-center-safe gap-y-2",
    wider ? "gap-x-8" : "gap-x-4",
    matchHighlightedHeight && "min-h-8",
    classList,
  ]}
>
  {@render children()}
</div>
