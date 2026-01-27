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

<div class={["flex max-w-dvw flex-col gap-3", classList]}>
  {@render children()}
</div>
