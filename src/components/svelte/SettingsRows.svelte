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

<div class={["flex flex-col gap-y-1.5", classList]}>
  {@render children()}
</div>
