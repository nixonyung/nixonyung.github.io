<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import WithTooltip, { type WithTooltipProps } from "./WithTooltip.svelte";

  let {
    checked = $bindable(),
    label,
    tooltip,
    class: classList,
    disabled,
  }: WithTooltipProps & {
    checked: boolean;
    label: string;
    class?: ClassValue;
    disabled?: boolean;
  } = $props();
</script>

<WithTooltip {tooltip} {disabled}>
  <button
    class={[
      "flex items-center-safe gap-1",
      classList,
      !disabled
        ? "cursor-pointer underline-offset-4 not-dark:hover:underline dark:hover:brightness-150 dark:hover:grayscale-50"
        : "line-through opacity-50",
    ]}
    onclick={() => (checked = !checked)}
    {disabled}
  >
    <span
      class={[
        "text-sm",
        checked
          ? "icon-[icon-park-solid--check-one]"
          : "icon-[icon-park-outline--round] opacity-50",
      ]}
    >
    </span>
    <span>{label}</span>
  </button>
</WithTooltip>
