<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  const {
    class: classList,
  }: {
    class?: ClassValue;
  } = $props();
</script>

<hr class={["-mx-4 my-6 opacity-25", classList]} />
