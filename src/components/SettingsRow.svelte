<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  let {
    class: classList,
    children,
  }: {
    class?: ClassValue;
    children: Snippet;
  } = $props();
</script>

<div class={["flex min-h-8 flex-wrap items-center-safe gap-x-3", classList]}>
  {@render children()}
</div>
