<script lang="ts">
  //   import { goto } from "$app/navigation";
  import "@/styles.css";
  import KeyboardKey from "./KeyboardKey.svelte";
  import Question from "./Question.svelte";
  import { globals } from "./globals.svelte";

  globals.init();
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
          window.history.replaceState(null, "", `?lang=${globals.lang}`);
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
          globals.questionLength = Math.max(1, globals.questionLength - 1);
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
          globals.nextQuestion();
        }}
      >
        <span class="icon-[heroicons--plus-circle] text-2xl align-middle"></span>
      </button>
    </div>

    <label>
      show romanization:
      <input
        bind:checked={globals.showRomanization}
        type="checkbox"
        class="align-middle"
        onclick={({ currentTarget }) => currentTarget.blur()}
      />
    </label>
  </div>

  <!-- notifications -->
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

  <!-- keyboard -->
  <div class="w-fit p-2 ring ring-primary-lighter">
    <div class="flex flex-col gap-2">
      <!-- row 1 -->
      <div class="flex gap-1">
        <div class="w-6"></div>
        <KeyboardKey key="q" />
        <KeyboardKey key="w" />
        <KeyboardKey key="e" />
        <KeyboardKey key="r" />
        <KeyboardKey key="t" />
        <KeyboardKey key="y" />
        <KeyboardKey key="u" />
        <KeyboardKey key="i" />
        <KeyboardKey key="o" />
        <KeyboardKey key="p" />
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
        <KeyboardKey key="a" />
        <KeyboardKey key="s" />
        <KeyboardKey key="d" />
        <KeyboardKey key="f" />
        <KeyboardKey key="g" />
        <KeyboardKey key="h" />
        <KeyboardKey key="j" />
        <KeyboardKey key="k" />
        <KeyboardKey key="l" />
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
        <KeyboardKey key="z" />
        <KeyboardKey key="x" />
        <KeyboardKey key="c" />
        <KeyboardKey key="v" />
        <KeyboardKey key="b" />
        <KeyboardKey key="n" />
        <KeyboardKey key="m" />
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

  <!-- question -->
  <div class="flex items-center-safe gap-2">
    <span>question: </span>
    {#each globals.questions, index}
      <Question {index} />
    {/each}
  </div>

  <!-- congratulation -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={!globals.allCorrect ? "invisible" : ""}>
    <div>All correct!</div>
    {#if globals.voice}
      <div onclick={() => globals.onKeyDown({ key: "r" })}>
        <code class="rounded px-1 ring">r</code>
        to read all words
      </div>
    {/if}
    <div onclick={() => globals.onKeyDown({ key: "Enter" })}>
      <code class="rounded px-1 ring"> Enter </code> to continue ...
    </div>
  </div>
</div>
