<script lang="ts">
  import { globals } from "./globals.svelte";
</script>

<div class="flex items-center-safe gap-2">
  <span>question: </span>

  {#snippet question(index: number)}
    <button
      class={[
        "relative flex w-16 flex-col items-center-safe rounded ring",
        globals.isCorrects[index] ? "ring-green-600" : !!globals.inputs[index] && "ring-red-600",
        globals.allCorrect || index + 1 === globals.inputs.length ? "opacity-100" : "opacity-50",
        !globals.questions[index].pronunciation
          ? ""
          : globals.isSpeaking
            ? "cursor-wait"
            : "cursor-pointer",
      ]}
      onclick={() => globals.speak(globals.questions[index].pronunciation)}
    >
      <!-- letter -->
      <div class="grid h-12 place-items-center-safe">
        <span class="text-xl">{globals.questions[index].letter}</span>
      </div>
      <!-- romanization -->
      <div class="h-6">
        {#if globals.questions[index].romanization && globals.showRomanizations}
          ({globals.questions[index].romanization})
        {/if}
      </div>
      <!-- input -->
      <div class="h-6 w-full border-t border-primary-lighter">{globals.inputs[index]}</div>

      <!-- pronunciation indicator -->
      {#if globals.questions[index].pronunciation && globals.voice}
        <span class="absolute top-0.5 right-0.5 icon-[heroicons--speaker-wave-solid] text-xs"
        ></span>
      {/if}
    </button>
  {/snippet}
  {#each globals.questions, index}
    <!-- <Question {index} /> -->
    {@render question(index)}
  {/each}
</div>

<div class={!globals.allCorrect ? "invisible" : ""}>
  <div>All correct!</div>

  {#snippet kbd(text: string)}
    <kbd class="rounded px-1 ring">{text}</kbd>
  {/snippet}

  {#if globals.voice}
    <button class="block" onclick={() => globals.onKeyDown({ key: "r" })}>
      {@render kbd("r")} to read all words
    </button>
  {/if}
  <button class="block" onclick={() => globals.onKeyDown({ key: "Enter" })}>
    {@render kbd("Enter")} to continue ...
  </button>
</div>
