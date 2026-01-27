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

<div
  class={[
    "mb-1 flex w-max flex-col rounded px-3 whitespace-nowrap ring ring-primary-content/50",
    classList,
  ]}
>
  {@render children()}
</div>
