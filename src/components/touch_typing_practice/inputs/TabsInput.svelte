<script lang="ts">
  let {
    value = $bindable(),
    label,
    options,
  }: {
    value: string;
    label: string;
    options: string[];
  } = $props();
</script>

<div class="flex items-center-safe">
  <span class="mr-3">{label}</span>

  {#each options as option (option)}
    <button
      class={["cursor-pointer px-2 py-1 ring", option !== value && "opacity-50"]}
      onclick={() => (value = option)}
    >
      {option}
    </button>
  {/each}
</div>
