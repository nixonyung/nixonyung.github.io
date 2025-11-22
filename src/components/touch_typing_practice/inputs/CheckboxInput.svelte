<script lang="ts">
  let {
    checked = $bindable(),
    label,
    onchange,
  }: {
    checked: boolean;
    label: string;
    onchange?: (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
  } = $props();
</script>

<div>
  <label>
    <input
      bind:checked
      type="checkbox"
      class="align-middle"
      onclick={({ currentTarget }) => currentTarget.blur()}
      onchange={(ev) => onchange?.(ev)}
    />

    <span>{label}</span>
  </label>
</div>
