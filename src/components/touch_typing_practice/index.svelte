<script lang="ts">
  import "@/styles.css";
  import CheckboxInput from "./CheckboxInput.svelte";
  import { globals } from "./globals.svelte";
  import Keyboard from "./Keyboard.svelte";
  import EN from "./locales/en/EN.svelte";
  import JP from "./locales/jp/JP.svelte";
  import KR from "./locales/kr/KR.svelte";
  import Questions from "./Questions.svelte";
</script>

<svelte:body
  onkeydown={(ev) => globals.onKeyDown(ev)}
  onkeyup={({ key }) => {
    switch (key) {
      case "Shift":
        globals.isHoldingShift = false;
        break;
    }
  }}
/>

<div class="flex min-h-dvh flex-col gap-3 px-4 pt-2 pb-6">
  <h1 class="mt-3 mb-6 text-xl underline underline-offset-4">Touch Typing Practice</h1>

  <!-- settings -->
  <div class="flex gap-9 items-center-safe">
    <label>
      lang:
      <select
        bind:value={globals.lang}
        class="rounded ring bg-primary"
        onchange={async () => {
          globals.resetSearchParams();
          globals.saveSetting("lang", globals.lang);
          globals.saveSetting("questionLength", globals.questionLength, 3);
          globals.saveSetting("showRomanizations", globals.showRomanizations, false);
          globals.nextQuestion();
        }}
      >
        {#each globals.langs as lang}
          <option value={lang}>{lang}</option>
        {/each}
      </select>
    </label>

    <div class="flex gap-1">
      <span class="min-w-[16ch]">
        question length: {globals.questionLength}
      </span>
      <button
        title="decrement questionLength"
        class="cursor-pointer"
        onclick={() => {
          if (globals.questionLength > 1) globals.questionLength -= 1;
          globals.saveSetting("questionLength", globals.questionLength, 3);
          globals.nextQuestion();
        }}
      >
        <span class="icon-[heroicons--minus-circle] text-2xl align-middle"></span>
      </button>
      <button
        title="increment questionLength"
        class="cursor-pointer"
        onclick={() => {
          globals.questionLength += 1;
          globals.saveSetting("questionLength", globals.questionLength, 3);
          globals.nextQuestion();
        }}
      >
        <span class="icon-[heroicons--plus-circle] text-2xl align-middle"></span>
      </button>
    </div>

    <CheckboxInput
      bind:checked={globals.showRomanizations}
      label="show romanizations:"
      onchange={() => globals.saveSetting("showRomanizations", globals.showRomanizations, false)}
    />
  </div>

  <!-- SpeechSynthesis indicator -->
  <div class="flex items-center-safe gap-9">
    <div
      class={[
        "flex items-center-safe gap-1 bg-primary-lighter/50 px-2",
        globals.voice === undefined ? "text-red-700" : "text-green-700",
      ]}
    >
      <span>SpeechSynthesis:</span>
      <span
        class={globals.voice === undefined ? "icon-[heroicons--x-mark]" : "icon-[heroicons--check]"}
      ></span>
    </div>
    {#if globals.speechSynthesisErr}
      <span class="text-red-700">
        SpeechSynthesis: ({globals.speechSynthesisErr.error}) {globals.speechSynthesisErr}
      </span>
    {/if}
  </div>

  {#if globals.lang === "en-US"}
    <EN />
  {:else if globals.lang === "ja-JP"}
    <JP />
  {:else if globals.lang === "ko-KR"}
    <KR />
  {/if}

  <Keyboard />

  <Questions />
</div>
