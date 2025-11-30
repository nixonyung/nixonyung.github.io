<script lang="ts">
  import type { Snippet } from "svelte";
  import type { MouseEventHandler } from "svelte/elements";

  const {
    onclick,
    children,
  }: {
    onclick?: MouseEventHandler<HTMLButtonElement>;
    children: Snippet;
  } = $props();
</script>

<button
  class={[
    "w-fit bg-primary-lighter/50 px-3 py-1",
    onclick && "cursor-pointer hover:bg-primary-lighter",
  ]}
  {onclick}
>
  {@render children()}
</button>
