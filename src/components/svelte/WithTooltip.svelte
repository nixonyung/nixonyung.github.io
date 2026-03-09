<script lang="ts" module>
  import type { Snippet } from "svelte";

  export interface WithTooltipProps {
    tooltip?: string;
    customTooltip?: Snippet;
    disabled?: boolean;
  }
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  let {
    tooltip,
    customTooltip,
    class: classList,
    disabled,
    children,
  }: WithTooltipProps & {
    class?: ClassValue;
    children: Snippet;
  } = $props();

  let ref: HTMLDivElement | undefined = $state();
  export function scrollIntoView() {
    ref?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
</script>

<div bind:this={ref} role="tooltip" class={["group/tooltip relative", classList]}>
  {@render children()}

  {#if !disabled && (customTooltip || tooltip)}
    <div
      class="invisible absolute bottom-0 left-0 z-10 w-max translate-y-full pt-2 whitespace-nowrap group-hover/tooltip:visible"
    >
      <div class="rounded bg-primary px-2 py-1 ring brightness-120 dark:brightness-150">
        {#if customTooltip}
          {@render customTooltip()}
        {:else if tooltip}
          {tooltip}
        {/if}
      </div>
    </div>
  {/if}
</div>
