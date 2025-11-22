<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  let {
    checked = $bindable(),
    label,
    class: classVal,
    onchange,
  }: {
    checked: boolean;
    label: string;
    class?: ClassValue;
    onchange?: (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
  } = $props();
</script>

<label class={classVal}>
  <input
    bind:checked
    type="checkbox"
    class="align-middle"
    onclick={({ currentTarget }) => currentTarget.blur()}
    onchange={(ev) => onchange?.(ev)}
  />
  {label}
</label>
