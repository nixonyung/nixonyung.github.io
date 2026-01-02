<script lang="ts">
  import { clamp } from "es-toolkit";

  let {
    value = $bindable(),
    label,
    min = -Infinity,
    max = Infinity,
    step = 1,
    disabled: disabledProp,
  }: {
    value: number;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
  } = $props();

  const disabled = $derived(disabledProp || min > max);
  const canDecrement = $derived(!disabled && value - step >= min);
  const canIncrement = $derived(!disabled && value + step <= max);
  $effect(() => {
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
      value = Math.floor(clamp(prevValue + (screenX - startScreenX) / 20, min, max));
    }
  }}
  onmouseup={() => (isMousedown = false)}
/>

<div class="flex items-center-safe">
  <button
    class="flex cursor-ew-resize items-center-safe gap-1"
    onmousedown={({ screenX }) => {
      isMousedown = true;
      startScreenX = screenX;
      prevValue = value;
    }}
  >
    <span>{label}</span>
    <span class="min-w-8 text-start">{value}</span>
  </button>

  <div>
    <!-- decrement button -->
    <button
      title="decrement button"
      class="not-disabled:cursor-pointer disabled:opacity-50"
      onclick={() => (value -= step)}
      disabled={!canDecrement}
    >
      <span class="icon-[heroicons--minus-circle] align-middle text-2xl"></span>
    </button>

    <!-- increment button -->
    <button
      title="increment button"
      class="not-disabled:cursor-pointer disabled:opacity-50"
      onclick={() => (value += step)}
      disabled={!canIncrement}
    >
      <span class="icon-[heroicons--plus-circle] align-middle text-2xl"></span>
    </button>
  </div>
</div>
