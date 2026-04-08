<script lang="ts" generics="Value extends string">
  import type { ClassValue } from "svelte/elements";
  import WithTooltip, { type WithTooltipProps } from "./WithTooltip.svelte";

  let {
    value = $bindable(),
    label,
    valueToLabel,
    tooltip,
    customTooltip,
    class: classList,
    disabled,
  }: WithTooltipProps & {
    value: Value;
    label: string;
    valueToLabel: Record<Value, string>;
    class?: ClassValue;
    disabled?: boolean;
  } = $props();
</script>

<div class={["flex items-center-safe", classList]}>
  <WithTooltip {tooltip} {customTooltip} {disabled}>
    <span class="mr-2">{label}:</span>
  </WithTooltip>

  {#each Object.entries(valueToLabel) as entry (entry[0])}
    {@const v = entry[0] as Value}
    {@const label = entry[1] as string}

    <button
      class={[
        "cursor-pointer px-2 py-1 ring transition-all duration-300 ease-out hover:opacity-100",
        value !== v && "opacity-50",
      ]}
      onclick={() => (value = v)}
      {disabled}
    >
      {label}
    </button>
  {/each}
</div>
