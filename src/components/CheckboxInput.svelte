<script lang="ts">
  import WithTooltip, { type WithTooltipProps } from "./WithTooltip.svelte";

  let {
    checked = $bindable(),
    label,
    tooltip,
    disabled,
  }: WithTooltipProps & {
    checked: boolean;
    label: string;
    disabled?: boolean;
  } = $props();
</script>

<label class="flex gap-1 whitespace-nowrap">
  <input
    bind:checked
    type="checkbox"
    class="align-middle accent-primary-content"
    onclick={({ currentTarget }) => currentTarget.blur()}
    {disabled}
  />

  <WithTooltip {tooltip} {disabled}>
    <span class={disabled ? "line-through opacity-50" : ""}>{label}</span>
  </WithTooltip>
</label>
