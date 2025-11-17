<script lang="ts">
  import { globals } from "./globals.svelte";
</script>

<div class="w-fit p-2 ring ring-primary-lighter">
  <div class="flex flex-col gap-2">
    {#snippet key(key: string, mappedKey?: string, mappedShiftKey?: string)}
      <button
        class="relative grid size-12 place-items-center-safe rounded ring ring-primary-content"
        onclick={() => globals.onKeyDown({ key: globals.isHoldingShift ? key.toUpperCase() : key })}
      >
        <span class="text-xl">{globals.isHoldingShift ? mappedShiftKey : mappedKey}</span>

        <!-- key hint -->
        {#if globals.isHoldingShift && mappedShiftKey !== key.toUpperCase()}
          <span class="absolute top-0 left-1 text-xs font-light">{key.toUpperCase()}</span>
        {:else if !globals.isHoldingShift && mappedKey !== key}
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
      {@render key("q", globals.localeKeymap["q"], globals.localeKeymap["Q"])}
      {@render key("w", globals.localeKeymap["w"], globals.localeKeymap["W"])}
      {@render key("e", globals.localeKeymap["e"], globals.localeKeymap["E"])}
      {@render key("r", globals.localeKeymap["r"], globals.localeKeymap["R"])}
      {@render key("t", globals.localeKeymap["t"], globals.localeKeymap["T"])}
      {@render key("y", globals.localeKeymap["y"], globals.localeKeymap["Y"])}
      {@render key("u", globals.localeKeymap["u"], globals.localeKeymap["U"])}
      {@render key("i", globals.localeKeymap["i"], globals.localeKeymap["I"])}
      {@render key("o", globals.localeKeymap["o"], globals.localeKeymap["O"])}
      {@render key("p", globals.localeKeymap["p"], globals.localeKeymap["P"])}
      <!-- Backspace -->
      <button
        class="ml-4 w-24 border-dashed border rounded opacity-50"
        onclick={() => globals.onKeyDown({ key: "Backspace" })}
      >
        Backspace
      </button>
    </div>

    <!-- row 2 -->
    <div class="flex gap-1">
      <div class="w-12"></div>
      {@render key("a", globals.localeKeymap["a"], globals.localeKeymap["A"])}
      {@render key("s", globals.localeKeymap["s"], globals.localeKeymap["S"])}
      {@render key("d", globals.localeKeymap["d"], globals.localeKeymap["D"])}
      {@render key("f", globals.localeKeymap["f"], globals.localeKeymap["F"])}
      {@render key("g", globals.localeKeymap["g"], globals.localeKeymap["G"])}
      {@render key("h", globals.localeKeymap["h"], globals.localeKeymap["H"])}
      {@render key("j", globals.localeKeymap["j"], globals.localeKeymap["J"])}
      {@render key("k", globals.localeKeymap["k"], globals.localeKeymap["K"])}
      {@render key("l", globals.localeKeymap["l"], globals.localeKeymap["L"])}
      <!-- Enter -->
      <button
        class="ml-4 w-24 border-dashed border rounded opacity-50"
        onclick={() => globals.onKeyDown({ key: "Enter" })}
      >
        Enter
      </button>
    </div>

    <!-- row 3 -->
    <div class="flex gap-1">
      <!-- Shift -->
      <button
        class={[
          "mr-3 w-16 border-dashed border rounded opacity-50",
          globals.isHoldingShift && "bg-primary-lighter",
        ]}
        onclick={() => {
          if (!globals.allCorrect) {
            globals.isHoldingShift = !globals.isHoldingShift;
          }
        }}
      >
        Shift
      </button>
      {@render key("z", globals.localeKeymap["z"], globals.localeKeymap["Z"])}
      {@render key("x", globals.localeKeymap["x"], globals.localeKeymap["X"])}
      {@render key("c", globals.localeKeymap["c"], globals.localeKeymap["C"])}
      {@render key("v", globals.localeKeymap["v"], globals.localeKeymap["V"])}
      {@render key("b", globals.localeKeymap["b"], globals.localeKeymap["B"])}
      {@render key("n", globals.localeKeymap["n"], globals.localeKeymap["N"])}
      {@render key("m", globals.localeKeymap["m"], globals.localeKeymap["M"])}
    </div>

    <!-- Space -->
    <button
      title="Space"
      class="ml-30 w-72 h-12 border-dashed border rounded opacity-50"
      onclick={() => globals.onKeyDown({ key: " " })}
    >
    </button>
  </div>
</div>
