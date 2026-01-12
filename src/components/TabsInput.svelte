<script lang="ts" generics="const LabelsDict extends { [K: string]: string}">
  let {
    value = $bindable(),
    label,
    labelsDict,
    disabled,
  }: {
    value: keyof LabelsDict;
    label: string;
    labelsDict: LabelsDict;
    disabled?: boolean;
  } = $props();
</script>

<div class="flex items-center-safe">
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
