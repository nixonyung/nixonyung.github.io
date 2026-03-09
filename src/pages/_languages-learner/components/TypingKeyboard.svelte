<script lang="ts" module>
  const shiftSymbolsMap: Record<string, string> = {
    "`": "~",
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "-": "_",
    "=": "+",
    "[": "{",
    "]": "}",
    "\\": "|",
    ";": ":",
    "'": '"',
    ",": "<",
    ".": ">",
    "/": "?",
  };
  const unshiftSymbolsMap = Object.fromEntries(
    Object.entries(shiftSymbolsMap).map(([k, v]) => [v, k]),
  );
</script>

<script lang="ts">
  import { emitKeydown } from "@/lib/keyboard";
  import type { Keymap } from "../types";

  const {
    keymap,
    correctCh,
    showNumberRow,
    showTilde,
    showSymbols,
    hideDisplayKey,
    showCorrectKey,
  }: {
    keymap: Keymap;
    correctCh: string | undefined;

    showNumberRow: boolean;
    showTilde: boolean;
    showSymbols: boolean;

    hideDisplayKey: boolean;
    showCorrectKey: boolean;
  } = $props();

  let isShiftDown = $state(false);

  function getChEmit(ch: string) {
    return !isShiftDown ? ch : ch.match(/[a-z]/) ? ch.toUpperCase() : shiftSymbolsMap[ch];
  }
  function unshiftCh(ch: string | undefined) {
    return ch && (unshiftSymbolsMap[ch] ?? ch.toLowerCase());
  }
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
      {@const chEmit = getChEmit(ch)}
      {@const chDisplay = keymap[chEmit]}

      <button
        class={[
          "relative grid size-12 place-items-center-safe rounded ring ring-primary-content",
          showCorrectKey &&
            correctCh &&
            ((chDisplay === correctCh && "bg-green-400/25") ||
              (ch === unshiftCh(correctCh) && "bg-yellow-400/25")),
        ]}
        onclick={() => {
          if (chDisplay) emitKeydown({ key: chEmit });
          isShiftDown = false;
        }}
      >
        <span class="text-xl">
          {hideDisplayKey && chDisplay ? "·" : chDisplay}
        </span>

        <!-- key hint -->
        {#if chDisplay && chDisplay !== chEmit}
          <span class="absolute top-0 left-1 text-xs font-light">
            {chEmit}
          </span>
        {/if}

        <!-- bump -->
        {#if ch === "f" || ch === "j"}
          <div class="absolute bottom-1.5 w-2.5 border-b"></div>
        {/if}
      </button>
    {/snippet}

    <!-- row 1234 -->
    {#if showNumberRow || showSymbols}
      <div class="flex gap-1">
        {#if showTilde}
          {@render key("`")}
        {/if}

        {#each ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] as ch (ch)}
          {@render key(showNumberRow ? ch : "")}
        {/each}

        {#if showSymbols}
          {#each ["-", "="] as ch (ch)}
            {@render key(ch)}
          {/each}
        {/if}

        <!-- Backspace (if has number row) -->
        {#if showNumberRow || showSymbols}
          <button
            class="ml-4 w-24 rounded border border-dashed opacity-50"
            onclick={() => emitKeydown({ key: "Backspace" })}
          >
            Backspace
          </button>
        {/if}
      </div>
    {/if}

    <!-- row QWER -->
    <div class="flex gap-1">
      <div class={showTilde ? "w-18" : "w-6"}></div>

      {#each ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"] as ch (ch)}
        {@render key(ch)}
      {/each}

      {#if showSymbols}
        {#each ["[", "]", "\\"] as ch (ch)}
          {@render key(ch)}
        {/each}
      {/if}

      <!-- Backspace (if no number row) -->
      {#if !showNumberRow && !showSymbols}
        <button
          class="ml-4 w-24 rounded border border-dashed opacity-50"
          onclick={() => emitKeydown({ key: "Backspace" })}
        >
          Backspace
        </button>
      {/if}
    </div>

    <!-- row ASDF -->
    <div class="flex gap-1">
      <div class={showTilde ? "w-24" : "w-12"}></div>

      {#each ["a", "s", "d", "f", "g", "h", "j", "k", "l"] as ch (ch)}
        {@render key(ch)}
      {/each}

      {#if showSymbols}
        {#each [";", "'"] as ch (ch)}
          {@render key(ch)}
        {/each}
      {/if}
    </div>

    <!-- row ZXCV -->
    <div class="flex gap-1">
      <!-- Shift -->
      <button
        class={[
          "mr-3 w-16 rounded border border-dashed opacity-50",
          isShiftDown && "bg-primary-lighter",
          showTilde && "ml-12",
        ]}
        onclick={() => (isShiftDown = !isShiftDown)}
      >
        Shift
      </button>

      {#each ["z", "x", "c", "v", "b", "n", "m"] as ch (ch)}
        {@render key(ch)}
      {/each}

      {#if showSymbols}
        {#each [",", ".", "/"] as ch (ch)}
          {@render key(ch)}
        {/each}
      {/if}
    </div>

    <!-- Space -->
    <button
      title="Space"
      class={["h-12 w-72 rounded border border-dashed opacity-50", showTilde ? "ml-36" : "ml-24"]}
      onclick={() => emitKeydown({ key: " " })}
    >
    </button>
  </div>
</div>
