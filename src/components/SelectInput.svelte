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

<label>
  <span>{label}</span>

  <select bind:value class="rounded bg-primary px-1 ring" {disabled}>
    {#each options as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
</label>
