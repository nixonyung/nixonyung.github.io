<script lang="ts">
  import { tick } from "svelte";

  let {
    enabled = $bindable(),
    isSelecting = $bindable(),
    label,
  }: {
    enabled: boolean;
    isSelecting: boolean;
    label: string;
  } = $props();

  let ref: HTMLButtonElement | undefined = $state();

  export function rect() {
    return ref?.getBoundingClientRect();
  }
</script>

<button
  bind:this={ref}
  class={[
    "w-18 px-2 text-end hover:bg-primary-lighter active:bg-primary-content/50 cursor-ew-resize",
    isSelecting && enabled && "bg-primary-content/50",
  ]}
  onmousedown={async () => {
    isSelecting = true;
    // wait for JP's $effect
    await tick();
    enabled = true;
  }}
>
  {label}
</button>
