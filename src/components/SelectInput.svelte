<script lang="ts" generics="const Options extends string[]">
  import type { ClassValue } from "svelte/elements";

  let {
    value = $bindable(),
    label,
    options,
    class: classList,
    disabled,
  }: {
    value: Options[number];
    label: string;
    options: Options;
    class?: ClassValue;
    disabled?: boolean;
  } = $props();
</script>

<label class={classList}>
  <span>{label}:</span>

  <select bind:value class="rounded bg-primary px-1 ring" {disabled}>
    {#each options as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
</label>
