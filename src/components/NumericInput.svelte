<script lang="ts">
  import { clamp, round } from "es-toolkit";
  import type { ClassValue } from "svelte/elements";

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
  function clampValue() {
    value = clamp(round(value, numDecimalPlaces), min, max);
  }
  $effect.pre(() => {
    if (!disabled) {
      if (value < min) value = min;
      if (value > max) value = max;
    }
  });

  let isMousedown = $state(false);
  let startScreenX = $state(0);
  let prevValue = $state(value);
</script>

<svelte:window
  onmousemove={({ screenX }) => {
    if (isMousedown) {
      value = prevValue + Math.floor((screenX - startScreenX) / 16) * step;
      clampValue();
    }
  }}
  onmouseup={() => (isMousedown = false)}
/>

<div class={["flex items-center-safe gap-1", classList]}>
  <button
    class="flex cursor-ew-resize items-center-safe gap-1"
    onmousedown={({ screenX }) => {
      isMousedown = true;
      startScreenX = screenX;
      prevValue = value;
    }}
  >
    <span>{label}:</span>
    <span class="min-w-8 text-start">{value}</span>
  </button>

  <div>
    <!-- decrement button -->
    <button
      title="Decrement."
      class="not-disabled:cursor-pointer disabled:opacity-50"
      onclick={() => {
        value -= step;
        clampValue();
      }}
      disabled={!canDecrement}
    >
      <span class="icon-[heroicons--minus-circle] align-middle text-2xl"></span>
    </button>

    <!-- increment button -->
    <button
      title="Increment."
      class="not-disabled:cursor-pointer disabled:opacity-50"
      onclick={() => {
        value += step;
        clampValue();
      }}
      disabled={!canIncrement}
    >
      <span class="icon-[heroicons--plus-circle] align-middle text-2xl"></span>
    </button>
  </div>
</div>
