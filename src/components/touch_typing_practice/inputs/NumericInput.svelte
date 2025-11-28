<script lang="ts">
  let {
    value = $bindable(),
    label,
    min,
    max,
    step = 1,
  }: {
    value: number;
    label: string;
    min?: number;
    max?: number;
    step?: number;
  } = $props();
</script>

<div class="flex gap-1">
  <span class="min-w-[16ch]">{label} {value}</span>

  <button
    title="decrement questionLength"
    class="cursor-pointer"
    onclick={() => {
      if (min === undefined || value - step >= min) value -= step;
    }}
  >
    <span class="icon-[heroicons--minus-circle] align-middle text-2xl"></span>
  </button>
  <button
    title="increment questionLength"
    class="cursor-pointer"
    onclick={() => {
      if (max === undefined || value + step <= max) value += step;
    }}
  >
    <span class="icon-[heroicons--plus-circle] align-middle text-2xl"></span>
  </button>
</div>
