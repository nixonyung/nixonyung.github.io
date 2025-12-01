<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, MouseEventHandler } from "svelte/elements";

  const {
    class: classList,
    onclick,
    children,
  }: {
    class?: ClassValue;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    children: Snippet;
  } = $props();
</script>

<button
  class={[
    "flex w-fit items-center-safe gap-1 bg-primary-lighter/50 px-3 py-1",
    onclick && "cursor-pointer hover:bg-primary-lighter",
    classList,
  ]}
  {onclick}
>
  {@render children()}
</button>
