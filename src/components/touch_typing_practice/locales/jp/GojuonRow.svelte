<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    enabled = $bindable(),
    children,
  }: {
    enabled: boolean;
    children: Snippet;
  } = $props();
</script>

<button
  class={["flex flex-col divide-y hover:bg-primary-lighter", !enabled && "opacity-50"]}
  onclick={() => (enabled = !enabled)}
>
  {@render children()}
</button>
