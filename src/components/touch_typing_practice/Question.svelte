<script lang="ts">
  import { globals } from "./globals.svelte";

  const props: {
    index: number;
  } = $props();

  const {
    letter,
    input: answer,
    romanization,
    pronunciation,
  } = $derived(globals.questions[props.index]);

  const input = $derived(globals.inputs[props.index]);

  const isFocusing = $derived(props.index + 1 === globals.inputs.length);
  const isWrong = $derived(!!input && !!answer && input !== answer);

  $effect(() => {
    globals.isCorrects[props.index] = !!answer && input === answer;
  });
</script>

<button
  class={[
    "relative flex w-16 flex-col items-center-safe rounded ring",
    isFocusing || globals.allCorrect ? "opacity-100" : "opacity-50",
    globals.isCorrects[props.index] && "ring-green-600",
    isWrong && "ring-red-600",
    !pronunciation ? "" : globals.isSpeaking ? "cursor-wait" : "cursor-pointer",
  ]}
  onclick={() => globals.speak(pronunciation)}
>
  <div class="grid h-12 place-items-center-safe">
    <span class="text-xl">{letter}</span>
  </div>
  <!-- romanization -->
  {#if globals.showRomanizations}
    <span class="h-6">{romanization && `(${romanization})`}</span>
  {/if}
  <!-- input -->
  <div class="h-6 w-full border-t border-primary-lighter">{input}</div>

  <!-- pronunciation indicator -->
  {#if globals.voice && pronunciation}
    <span class="absolute top-0.5 right-0.5 icon-[heroicons--speaker-wave-solid] text-xs"></span>
  {/if}
</button>
