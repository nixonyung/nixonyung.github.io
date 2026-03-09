<script lang="ts">
  import { clamp, round } from "es-toolkit";
  import type { ClassValue } from "svelte/elements";
  import Icon from "./Icon.svelte";

  let {
    value = $bindable(),
    label,
    min = -Infinity,
    max = Infinity,
    step = 1,
    class: classList,
    disabled: disabledProp,
  }: {
    value: number;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    class?: ClassValue;
    disabled?: boolean;
  } = $props();

  const numDecimalPlaces = $derived(step.toString().split(".", 2)[1]?.length ?? 0);
  const disabled = $derived(disabledProp || min > max);
  const canDecrement = $derived(!disabled && value - step >= min);
  const canIncrement = $derived(!disabled && value + step <= max);
  function setValue(newValue: number) {
    value = clamp(round(newValue, numDecimalPlaces), min, max);
  }
  $effect.pre(() => {
    if (!disabled) {
      if (value < min) value = min;
      if (value > max) value = max;
    }
  });

  let isMousedown = $state(false);
  let valueBeforeDrag = $state(value);
  let initScreenX = $state(0);
</script>

<svelte:window
  onmousemove={({ screenX }) => {
    if (isMousedown) setValue(valueBeforeDrag + Math.floor((screenX - initScreenX) / 16) * step);
  }}
  onmouseup={() => (isMousedown = false)}
/>

<div class={["flex items-center-safe", disabled && "opacity-50", classList]}>
  <button
    class={[!disabled && "cursor-ew-resize"]}
    onmousedown={({ screenX }) => {
      isMousedown = true;
      valueBeforeDrag = value;
      initScreenX = screenX;
    }}
  >
    <span>{label}:</span>
    <span class="ml-1 min-w-8 text-start">{value}</span>
  </button>

  <!-- decrement button -->
  <button
    title="decrease {label}"
    class="ml-3 not-disabled:cursor-pointer"
    onclick={() => setValue(value - step)}
    disabled={!canDecrement}
  >
    <Icon icon="icon-[heroicons--minus-circle]" class="align-middle text-xl" />
  </button>

  <!-- increment button -->
  <button
    title="increase {label}"
    class="ml-1 not-disabled:cursor-pointer"
    onclick={() => setValue(value + step)}
    disabled={!canIncrement}
  >
    <Icon icon="icon-[heroicons--plus-circle]" class="align-middle text-xl" />
  </button>
</div>
