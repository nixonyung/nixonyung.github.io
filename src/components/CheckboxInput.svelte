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
      "flex cursor-pointer items-center-safe gap-1 hover:brightness-150 hover:grayscale-50",
      classList,
      disabled && "line-through opacity-50",
    ]}
    onclick={() => (checked = !checked)}
  >
    <span
      class={[
        "text-sm",
        checked ? "icon-[icon-park-solid--check-one]" : "icon-[icon-park-outline--round]",
      ]}
    >
    </span>
    <span>{label}</span>
  </button>
</WithTooltip>
