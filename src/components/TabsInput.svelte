<script lang="ts" generics="const Options extends string[]">
  let {
    value = $bindable(),
    label,
    options,
    disabled,
  }: {
    value: Options[number];
    label: string;
    options: Options;
    disabled?: boolean;
  } = $props();
</script>

<div class="flex items-center-safe">
  <span class="mr-3">{label}:</span>

  {#each options as option (option)}
    <button
      class={[
        "cursor-pointer px-2 py-1 ring transition-all duration-300 ease-out hover:opacity-100",
        option !== value && "opacity-50",
      ]}
      onclick={() => (value = option)}
      {disabled}
    >
      {option}
    </button>
  {/each}
</div>
