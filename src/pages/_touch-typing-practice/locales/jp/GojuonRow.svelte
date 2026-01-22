<script lang="ts">
  import { tick } from "svelte";
  import { jp } from "./jp.svelte";

  let {
    enabled = $bindable(),
    isMousedown = $bindable(),
    isSelected = $bindable(),
    label,
    gojuons,
  }: {
    enabled: boolean;
    isMousedown: boolean;
    isSelected: boolean;
    label: string;
    gojuons: ({
      hiragana: string;
      hiraganaOrigin: string;
      katakana: string;
      katakanaOrigin: string;
    } | null)[];
  } = $props();

  let headerRef: HTMLButtonElement | undefined = $state();
</script>

<svelte:window
  onmousemove={(ev) => {
    if (isMousedown) {
      const rect = headerRef?.getBoundingClientRect();
      if (rect && rect.left <= ev.x && ev.x < rect.right) isSelected = true;
    }
  }}
/>

<div class="flex w-18 flex-col">
  <!-- header -->
  <button
    bind:this={headerRef}
    class={[
      "h-6 cursor-ew-resize px-2 text-end",
      isMousedown ? isSelected && "bg-primary-lighter" : "hover:bg-primary-lighter",
    ]}
    onmousedown={async () => {
      isMousedown = true;
      await tick(); // wait for parent's $effect which set isSelected = false for all rows
      isSelected = true;
    }}
  >
    {label}
  </button>

  <!-- cells -->
  <button
    class={[
      "flex cursor-pointer flex-col",
      !isMousedown && "hover:bg-primary-lighter",
      !enabled && "opacity-50",
    ]}
    onclick={() => (enabled = !enabled)}
  >
    {#each gojuons as gojuon, i (gojuon?.hiragana ?? i)}
      <div class="flex h-12 gap-2 px-2 ring">
        <div
          class={[
            "flex w-6 flex-col items-center-safe",
            jp.gojuonSettings.enableHiragana ? "visible" : "invisible",
          ]}
        >
          <span>{gojuon?.hiragana}</span>
          {#if gojuon?.hiraganaOrigin && jp.gojuonSettings.showOrigins}
            <span>({gojuon?.hiraganaOrigin})</span>
          {/if}
        </div>

        <div
          class={[
            "flex w-6 flex-col items-center-safe",
            jp.gojuonSettings.enableKatakana ? "visible" : "invisible",
          ]}
        >
          <span>{gojuon?.katakana}</span>
          {#if gojuon?.katakanaOrigin && jp.gojuonSettings.showOrigins}
            <span>({gojuon?.katakanaOrigin})</span>
          {/if}
        </div>
      </div>
    {/each}
  </button>
</div>
