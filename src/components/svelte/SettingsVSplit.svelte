<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  let {
    class: classList,
    lhs,
    rhs,
  }: {
    class?: ClassValue;
    lhs: Snippet;
    rhs: Snippet;
  } = $props();
</script>

<div class={["flex items-start gap-4", classList]}>
  {@render lhs()}
  {@render rhs()}
</div>
