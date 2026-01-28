<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  import { clamp } from "es-toolkit";
  import type { Snippet } from "svelte";

  let {
    length,
    maxNumRows = 5,
    focusedIdx,
    class: classList,
    row,
  }: {
    length: number;
    maxNumRows?: number;
    focusedIdx?: number;
    class?: ClassValue;
    row: Snippet<[number]>;
  } = $props();

  const numRows = $derived(Math.min(maxNumRows, length));

  let idx = $state(0);
  function setIdx(newIdx: number) {
    idx = clamp(newIdx, 0, length - numRows);
  }
  $effect.pre(() => {
    if (focusedIdx !== undefined) setIdx(focusedIdx);
  });

  const scrollTop = $derived(Math.min(length - numRows, idx));
</script>

<div
  class={classList}
  onwheel={(ev) => {
    if (ev.ctrlKey) return;
    ev.stopImmediatePropagation();
    ev.preventDefault();

    const step = ev.altKey ? Math.floor((numRows + 1) / 2) : 1;
    setIdx(ev.deltaY > 0 ? idx + step : idx - step);
  }}
>
  <div class="relative">
    {#if focusedIdx !== undefined}
      <button
        class="absolute top-0 w-full -translate-y-full cursor-pointer text-end"
        onclick={() => (idx = focusedIdx)}
      >
        {focusedIdx + 1} / {length}
      </button>
    {/if}

    <div class="flex flex-col divide-y">
      {#each { length: numRows }, i}
        {@const dataIdx = scrollTop + i}

        {#if 0 <= dataIdx && dataIdx < length}
          <div class="relative">
            {@render row(dataIdx)}

            {#if dataIdx === focusedIdx}
              <span
                class="absolute top-1/2 left-0 z-10 icon-[icon-park-solid--right-one] -translate-x-full -translate-y-1/2"
              ></span>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
