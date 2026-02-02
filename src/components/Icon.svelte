<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  const {
    icon,
    class: classList,
  }: {
    icon: string;
    class?: ClassValue;
  } = $props();
</script>

<span class={["align-middle", icon, classList]}></span>
