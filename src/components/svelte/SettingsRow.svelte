<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  let {
    wider = false,
    class: classList,
    children,
  }: {
    wider?: boolean;
    class?: ClassValue;
    children: Snippet;
  } = $props();
</script>

<div
  class={[
    "flex min-h-8 flex-wrap items-center-safe gap-y-1",
    wider ? "gap-x-8" : "gap-x-4",
    classList,
  ]}
>
  {@render children()}
</div>
