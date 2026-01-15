<script lang="ts">
  import { emitKeydown } from "@/lib/keyboard";
  import type { Keymap } from "../types";

  const {
    keymap,
  }: {
    keymap?: Keymap;
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

<div class="w-fit p-2 ring ring-primary-lighter">
  <div class="flex flex-col gap-2">
    {#snippet key(key: string)}
      {@const upperCaseKey = key.toUpperCase()}
      {@const mappedKey = keymap ? keymap[key] : key}
      {@const mappedUpperCaseKey = keymap ? keymap[upperCaseKey] : upperCaseKey}

      <button
        class="relative grid size-12 place-items-center-safe rounded ring ring-primary-content"
        onclick={() => {
          emitKeydown({ key: isShiftDown ? upperCaseKey : key });
          isShiftDown = false;
        }}
      >
        <span class="text-xl">{isShiftDown ? mappedUpperCaseKey : mappedKey}</span>

        <!-- key hint -->
        {#if isShiftDown && mappedUpperCaseKey !== upperCaseKey}
          <span class="absolute top-0 left-1 text-xs font-light">{upperCaseKey}</span>
        {:else if !isShiftDown && mappedKey !== key}
          <span class="absolute top-0 left-1 text-xs font-light">{key}</span>
        {/if}

        <!-- bump -->
        {#if key === "f" || key === "j"}
          <div class="absolute bottom-1.5 w-2.5 border-b"></div>
        {/if}
      </button>
    {/snippet}

    <!-- row 1 -->
    <div class="flex gap-1">
      <div class="w-6"></div>
      {@render key("q")}
      {@render key("w")}
      {@render key("e")}
      {@render key("r")}
      {@render key("t")}
      {@render key("y")}
      {@render key("u")}
      {@render key("i")}
      {@render key("o")}
      {@render key("p")}

      <!-- Backspace -->
      <button
        class="ml-4 w-24 rounded border border-dashed opacity-50"
        onclick={() => emitKeydown({ key: "Backspace" })}
      >
        Backspace
      </button>
    </div>

    <!-- row 2 -->
    <div class="flex gap-1">
      <div class="w-12"></div>
      {@render key("a")}
      {@render key("s")}
      {@render key("d")}
      {@render key("f")}
      {@render key("g")}
      {@render key("h")}
      {@render key("j")}
      {@render key("k")}
      {@render key("l")}

      <!-- Enter -->
      <button
        class="ml-4 w-24 rounded border border-dashed opacity-50"
        onclick={() => emitKeydown({ key: "Enter" })}
      >
        Enter
      </button>
    </div>

    <!-- row 3 -->
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

      {@render key("z")}
      {@render key("x")}
      {@render key("c")}
      {@render key("v")}
      {@render key("b")}
      {@render key("n")}
      {@render key("m")}
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
