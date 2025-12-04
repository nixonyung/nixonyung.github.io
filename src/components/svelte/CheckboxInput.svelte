<script lang="ts">
  let {
    checked = $bindable(),
    label,
    disabled,
  }: {
    checked: boolean;
    label: string;
    disabled?: boolean;
  } = $props();
</script>

<label class="whitespace-nowrap">
  <input
    bind:checked
    type="checkbox"
    class="align-middle"
    onclick={({ currentTarget }) => currentTarget.blur()}
    {disabled}
  />

  <span class={disabled ? "line-through opacity-50" : ""}>{label}</span>
</label>
