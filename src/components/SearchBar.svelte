<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import Icon from "./Icon.svelte";

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
      isInvalid && "bg-red-300 dark:bg-red-950",
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
      <Icon icon="icon-[icon-park-solid--close-one]" class="align-middle" />
    </button>
  </div>
{/if}
