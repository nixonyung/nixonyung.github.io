<script lang="ts" module>
  export type Keymap = Record<string, string>;

  const KEY_TO_SHIFTED: Record<string, string> = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
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
  const KEY_TO_UNSHIFTED = Object.fromEntries(
    Object.entries(KEY_TO_SHIFTED).map(([k, v]) => [v, k]),
  );
</script>

<script lang="ts">
  import { emitKeydown } from "@/lib/keyboard";
  import type { ClassValue } from "svelte/elements";

  const {
    keymap,
    hideKeys = false,
    showCorrectKey = false,
    correctKey,
    class: classList,
  }: {
    keymap: Keymap;

    hideKeys?: boolean;

    showCorrectKey?: boolean;
    correctKey?: string;

    class?: ClassValue;
  } = $props();

  const showNumberRow = $derived([..."1234567890!@#$%^&*()"].some((ch) => ch in keymap));
  const showTilde = $derived([..."`~"].some((ch) => ch in keymap));
  const showSymbols = $derived([..."-_=+[{]}\\|;:'\",<.>/?"].some((ch) => ch in keymap));

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

<div class={["w-fit px-6 py-3 ring ring-primary-lighter", classList]}>
  <div class="flex flex-col gap-2">
    {#snippet keyView(keyLowercase: string)}
      {@const chEmit = isShiftDown ? KEY_TO_SHIFTED[keyLowercase] : keyLowercase}
      {@const chDisplay = keymap[chEmit]}

      <button
        class={[
          "relative grid size-12 place-items-center-safe rounded ring ring-primary-content",
          showCorrectKey &&
            correctKey &&
            ((correctKey === chEmit && "bg-green-400/25") ||
              (KEY_TO_UNSHIFTED[correctKey] === keyLowercase && "bg-yellow-400/25")),
        ]}
        onclick={() => {
          if (chDisplay) emitKeydown({ key: chEmit });
          isShiftDown = false;
        }}
      >
        <span class="text-xl">
          {hideKeys && chDisplay ? "·" : chDisplay}
        </span>

        <!-- key hint -->
        {#if chDisplay && chDisplay !== chEmit}
          <span class="absolute top-0 left-1 text-xs font-light">
            {chEmit}
          </span>
        {/if}

        <!-- bump -->
        {#if keyLowercase === "f" || keyLowercase === "j"}
          <div class="absolute bottom-1.5 w-2.5 border-b"></div>
        {/if}
      </button>
    {/snippet}

    <!-- row 1234 -->
    {#if showNumberRow || showSymbols}
      <div class="flex gap-1">
        {#if showTilde}
          {@render keyView("`")}
        {/if}

        {#each ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] as ch (ch)}
          {@render keyView(showNumberRow ? ch : "")}
        {/each}

        {#if showSymbols}
          {#each ["-", "="] as ch (ch)}
            {@render keyView(ch)}
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
        {@render keyView(ch)}
      {/each}

      {#if showSymbols}
        {#each ["[", "]", "\\"] as ch (ch)}
          {@render keyView(ch)}
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
        {@render keyView(ch)}
      {/each}

      {#if showSymbols}
        {#each [";", "'"] as ch (ch)}
          {@render keyView(ch)}
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
        {@render keyView(ch)}
      {/each}

      {#if showSymbols}
        {#each [",", ".", "/"] as ch (ch)}
          {@render keyView(ch)}
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
