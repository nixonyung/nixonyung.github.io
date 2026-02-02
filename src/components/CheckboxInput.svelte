<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import Icon from "./Icon.svelte";
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
    <Icon
      icon={checked ? "icon-[icon-park-solid--check-one]" : "icon-[icon-park-outline--round]"}
      class={["text-sm", !checked && "opacity-50"]}
    />
    <span>{label}</span>
  </button>
</WithTooltip>
