<script lang="ts">
  import { app, emitKeydown } from "./app.svelte";

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
    {#snippet key(key: string, mappedKey?: string, mappedShiftKey?: string)}
      <button
        class="relative grid size-12 place-items-center-safe rounded ring ring-primary-content"
        onclick={() => {
          emitKeydown({ key: isShiftDown ? key.toUpperCase() : key });
          isShiftDown = false;
        }}
      >
        <span class="text-xl">{isShiftDown ? mappedShiftKey : mappedKey}</span>

        <!-- key hint -->
        {#if isShiftDown && mappedShiftKey !== key.toUpperCase()}
          <span class="absolute top-0 left-1 text-xs font-light">{key.toUpperCase()}</span>
        {:else if !isShiftDown && mappedKey !== key}
          <span class="absolute top-0 left-1 text-xs font-light">{key}</span>
        {/if}

        <!-- bumps -->
        {#if key === "f" || key === "j"}
          <div class="absolute bottom-1.5 w-2.5 border-b"></div>
        {/if}
      </button>
    {/snippet}

    <!-- row 1 -->
    <div class="flex gap-1">
      <div class="w-6"></div>
      {@render key("q", app.localeKeymap["q"], app.localeKeymap["Q"])}
      {@render key("w", app.localeKeymap["w"], app.localeKeymap["W"])}
      {@render key("e", app.localeKeymap["e"], app.localeKeymap["E"])}
      {@render key("r", app.localeKeymap["r"], app.localeKeymap["R"])}
      {@render key("t", app.localeKeymap["t"], app.localeKeymap["T"])}
      {@render key("y", app.localeKeymap["y"], app.localeKeymap["Y"])}
      {@render key("u", app.localeKeymap["u"], app.localeKeymap["U"])}
      {@render key("i", app.localeKeymap["i"], app.localeKeymap["I"])}
      {@render key("o", app.localeKeymap["o"], app.localeKeymap["O"])}
      {@render key("p", app.localeKeymap["p"], app.localeKeymap["P"])}
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
      {@render key("a", app.localeKeymap["a"], app.localeKeymap["A"])}
      {@render key("s", app.localeKeymap["s"], app.localeKeymap["S"])}
      {@render key("d", app.localeKeymap["d"], app.localeKeymap["D"])}
      {@render key("f", app.localeKeymap["f"], app.localeKeymap["F"])}
      {@render key("g", app.localeKeymap["g"], app.localeKeymap["G"])}
      {@render key("h", app.localeKeymap["h"], app.localeKeymap["H"])}
      {@render key("j", app.localeKeymap["j"], app.localeKeymap["J"])}
      {@render key("k", app.localeKeymap["k"], app.localeKeymap["K"])}
      {@render key("l", app.localeKeymap["l"], app.localeKeymap["L"])}
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
      {@render key("z", app.localeKeymap["z"], app.localeKeymap["Z"])}
      {@render key("x", app.localeKeymap["x"], app.localeKeymap["X"])}
      {@render key("c", app.localeKeymap["c"], app.localeKeymap["C"])}
      {@render key("v", app.localeKeymap["v"], app.localeKeymap["V"])}
      {@render key("b", app.localeKeymap["b"], app.localeKeymap["B"])}
      {@render key("n", app.localeKeymap["n"], app.localeKeymap["N"])}
      {@render key("m", app.localeKeymap["m"], app.localeKeymap["M"])}
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
