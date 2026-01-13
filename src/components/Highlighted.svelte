<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, MouseEventHandler } from "svelte/elements";

  const {
    vertical = false,
    variant = "primary-lighter",
    class: classList,
    onclick,
    disabled = false,
    children,
  }: {
    vertical?: boolean;
    variant?: "primary-lighter" | "error";
    class?: ClassValue;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children: Snippet;
  } = $props();
</script>

<button
  class={[
    "relative flex w-fit gap-1 px-3 py-1",
    vertical ? "flex-col items-start" : "items-center-safe",
    variant === "primary-lighter"
      ? "bg-primary-lighter/75"
      : variant === "error"
        ? "bg-red-700/50"
        : "",
    onclick && !disabled && "cursor-pointer hover:bg-primary-lighter hover:brightness-150",
    classList,
  ]}
  {onclick}
  {disabled}
>
  {@render children()}
</button>
