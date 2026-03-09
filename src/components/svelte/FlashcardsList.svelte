<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  import { clamp } from "es-toolkit";
  import type { Snippet } from "svelte";
  import Icon from "./Icon.svelte";

  let {
    length,
    maxNumRows = 11,
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

  const numRows = $derived(Math.min(length, maxNumRows));

  let idx = $state(0);
  function setIdx(newIdx: number) {
    idx = clamp(newIdx, 0, length - numRows);
  }
  $effect.pre(() => {
    if (focusedIdx !== undefined) setIdx(focusedIdx - 1);
  });

  const scrollTop = $derived(clamp(idx, 0, length - numRows));
</script>

<div
  class={classList}
  onwheel={(ev) => {
    if (ev.ctrlKey) return;
    ev.stopPropagation();
    ev.preventDefault();

    const step = ev.altKey ? Math.floor((numRows + 1) / 2) : 1;
    setIdx(ev.deltaY > 0 ? idx + step : idx - step);
  }}
>
  <div class="relative">
    {#if focusedIdx !== undefined}
      <button
        class="group/list-top absolute top-0 flex w-full -translate-y-full cursor-pointer items-center-safe rounded px-3 py-1.5 text-end hover:bg-primary-lighter/50"
        onclick={() => setIdx(focusedIdx - 1)}
      >
        <span class="text-sm opacity-50 group-hover/list-top:opacity-100">(return)</span>
        <div class="grow"></div>
        <span>{focusedIdx + 1} / {length}</span>
      </button>
    {/if}

    <div class="flex flex-col divide-y">
      {#each { length: numRows }, i}
        {@const dataIdx = scrollTop + i}

        {#if 0 <= dataIdx && dataIdx < length}
          <div class="relative">
            {@render row(dataIdx)}

            {#if dataIdx === focusedIdx}
              <Icon
                icon="icon-[icon-park-solid--right-one]"
                class="absolute top-1/2 left-0 z-10 -translate-x-full -translate-y-1/2"
              />
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
