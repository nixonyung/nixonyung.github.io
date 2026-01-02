<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, MouseEventHandler } from "svelte/elements";

  const {
    class: classList,
    vertical = false,
    onclick,
    children,
  }: {
    class?: ClassValue;
    vertical?: boolean;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    children: Snippet;
  } = $props();
</script>

<button
  class={[
    "relative flex w-fit gap-1 bg-primary-lighter/50 px-3 py-1",
    vertical ? "flex-col items-start" : "items-center-safe",
    onclick && "cursor-pointer hover:bg-primary-lighter",
    classList,
  ]}
  {onclick}
>
  {@render children()}
</button>
