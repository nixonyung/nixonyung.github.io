<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  let {
    searchInput = $bindable(""),
    class: classList,
    enabled = $bindable(false),
    isInvalid: isInvalid = false,
  }: {
    searchInput: string;
    class?: ClassValue;
    enabled?: boolean;
    isInvalid?: boolean;
  } = $props();

  $effect.pre(() => {
    if (!enabled) {
      searchInput = "";
    }
  });
</script>

{#if enabled}
  <div
    class={[
      "fixed right-0 bottom-0 left-0 flex items-center-safe gap-1.5 bg-primary-lighter px-1.5",
      classList,
      isInvalid && "bg-red-950",
    ]}
  >
    <span>Search:</span>
    <span class="grow">{searchInput}</span>
    <button
      title="Close"
      class="cursor-pointer px-2 py-1.5"
      onclick={() => {
        enabled = false;
      }}
    >
      <span class="icon-[icon-park-solid--close-one]"></span>
    </button>
  </div>
{/if}
