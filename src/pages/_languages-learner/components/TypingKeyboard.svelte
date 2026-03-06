<script lang="ts">
  import { emitKeydown } from "@/lib/keyboard";
  import type { Keymap } from "../types";

  const {
    keymap,
    includeNumbers,
    hideLayout,
    showCorrectKey,
    correctKey,
  }: {
    keymap: Keymap | undefined;

    includeNumbers: boolean;
    hideLayout: boolean;

    showCorrectKey: boolean;
    correctKey?: string;
  } = $props();

  let isShiftDown = $state(false);
</script>

<svelte:window
  onkeydown={({ key }) => {
    if (key === "Shift") isShiftDown = true;
  }}
  onkeyup={({ key }) => {
    if (key === "Shift") isShiftDown = false;
  }}
/>

<div class="w-fit px-6 py-3 ring ring-primary-lighter">
  <div class="flex flex-col gap-2">
    {#snippet key(ch: string)}
      {@const upperCaseCh = ch.toUpperCase()}
      {@const mappedCh = keymap ? keymap[ch] : ch}
      {@const mappedUpperCaseCh = keymap ? keymap[upperCaseCh] : upperCaseCh}

      <button
        class={[
          "relative grid size-12 place-items-center-safe rounded ring ring-primary-content",
          showCorrectKey && ch === correctKey && "bg-green-400/25",
        ]}
        onclick={() => {
          emitKeydown({ key: isShiftDown ? upperCaseCh : ch });
          isShiftDown = false;
        }}
      >
        {#if !hideLayout}
          <span class="text-xl">{isShiftDown ? mappedUpperCaseCh : mappedCh}</span>
        {/if}

        <!-- key hint -->
        {#if isShiftDown && mappedUpperCaseCh && mappedUpperCaseCh !== upperCaseCh}
          <span class="absolute top-0 left-1 text-xs font-light">{upperCaseCh}</span>
        {:else if !isShiftDown && mappedCh !== ch}
          <span class="absolute top-0 left-1 text-xs font-light">{ch}</span>
        {/if}

        <!-- bump -->
        {#if ch === "f" || ch === "j"}
          <div class="absolute bottom-1.5 w-2.5 border-b"></div>
        {/if}
      </button>
    {/snippet}

    {#if includeNumbers}
      <!-- row 1234 -->
      <div class="flex gap-1">
        {#each ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] as ch (ch)}
          {@render key(ch)}
        {/each}
      </div>
    {/if}

    <!-- row QWER -->
    <div class="flex gap-1">
      <div class="w-6"></div>
      {#each ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"] as ch (ch)}
        {@render key(ch)}
      {/each}

      <!-- Backspace -->
      <button
        class="ml-4 w-24 rounded border border-dashed opacity-50"
        onclick={() => emitKeydown({ key: "Backspace" })}
      >
        Backspace
      </button>
    </div>

    <!-- row ASDF -->
    <div class="flex gap-1">
      <div class="w-12"></div>
      {#each ["a", "s", "d", "f", "g", "h", "j", "k", "l"] as ch (ch)}
        {@render key(ch)}
      {/each}
    </div>

    <!-- row ZXCV -->
    <div class="flex gap-1">
      <!-- Shift -->
      <button
        class={[
          "mr-3 w-16 rounded border border-dashed opacity-50",
          isShiftDown && "bg-primary-lighter",
        ]}
        onclick={() => (isShiftDown = !isShiftDown)}
      >
        Shift
      </button>

      {#each ["z", "x", "c", "v", "b", "n", "m"] as ch (ch)}
        {@render key(ch)}
      {/each}
    </div>

    <!-- Space -->
    <button
      title="Space"
      class="ml-30 h-12 w-72 rounded border border-dashed opacity-50"
      onclick={() => emitKeydown({ key: " " })}
    >
    </button>
  </div>
</div>
