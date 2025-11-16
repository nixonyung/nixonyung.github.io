<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  let {
    checked = $bindable(),
    ...props
  }: {
    checked: boolean;
    label: string;
    class?: ClassValue;
    onchange?: (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
  } = $props();
</script>

<label class={props.class}>
  {props.label}
  <input
    bind:checked
    type="checkbox"
    class="align-middle"
    onclick={({ currentTarget }) => currentTarget.blur()}
    onchange={(ev) => props.onchange?.(ev)}
  />
</label>
