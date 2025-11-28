<script lang="ts">
  let {
    checked = $bindable(),
    label,
  }: {
    checked: boolean;
    label: string;
  } = $props();
</script>

<div>
  <label>
    <input
      bind:checked
      type="checkbox"
      class="align-middle"
      onclick={({ currentTarget }) => currentTarget.blur()}
    />

    <span>{label}</span>
  </label>
</div>
