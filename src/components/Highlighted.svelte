<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, MouseEventHandler } from "svelte/elements";
  import type { WithTooltipProps } from "./WithTooltip.svelte";
  import WithTooltip from "./WithTooltip.svelte";

  const {
    vertical = false,
    variant = "primary-lighter",
    tooltip,
    customTooltip,
    class: classList,
    onclick,
    disabled,
    children,
  }: WithTooltipProps & {
    vertical?: boolean;
    variant?: "primary-lighter" | "error";
    class?: ClassValue;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children: Snippet;
  } = $props();

  let ref: HTMLButtonElement | undefined = $state();

  export function click() {
    ref?.click();
  }
</script>

<WithTooltip {tooltip} {customTooltip} class={classList} {disabled}>
  <button
    bind:this={ref}
    class={[
      "flex w-fit gap-1 px-3 py-1",
      vertical ? "flex-col items-start" : "items-center-safe",
      variant === "primary-lighter"
        ? "bg-primary-lighter/75"
        : variant === "error"
          ? "bg-red-700/50"
          : "",
      onclick && !disabled && "cursor-pointer hover:bg-primary-lighter hover:brightness-150",
    ]}
    {onclick}
    {disabled}
  >
    {@render children()}
  </button>
</WithTooltip>
