<script lang="ts" generics="const LabelsDict extends { [K: string]: string}">
  import type { ClassValue } from "svelte/elements";

  let {
    value = $bindable(),
    label,
    labelsDict,
    class: classList,
    disabled,
  }: {
    value: keyof LabelsDict;
    label: string;
    labelsDict: LabelsDict;
    class?: ClassValue;
    disabled?: boolean;
  } = $props();
</script>

<div class={["flex items-center-safe", classList]}>
  <span class="mr-3">{label}:</span>

  {#each Object.entries(labelsDict) as [optionValue, label] (optionValue)}
    <button
      class={[
        "cursor-pointer px-2 py-1 ring transition-all duration-300 ease-out hover:opacity-100",
        value !== optionValue && "opacity-50",
      ]}
      onclick={() => (value = optionValue)}
      {disabled}
    >
      {label}
    </button>
  {/each}
</div>
