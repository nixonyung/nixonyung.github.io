<script lang="ts" module>
  import type { Snippet } from "svelte";

  export type WithTooltipProps = {
    tooltip?: string;
    customTooltip?: Snippet;
    disabled?: boolean;
  };
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
</script>

<div role="tooltip" class={["group/tooltip relative", classList]}>
  {@render children()}

  {#if !disabled && (customTooltip || tooltip)}
    <div
      class="invisible absolute -bottom-1.5 left-0 z-10 translate-y-full rounded bg-primary px-1.5 py-0.5 whitespace-nowrap ring brightness-150 group-hover/tooltip:visible"
    >
      {#if customTooltip}
        {@render customTooltip()}
      {:else if tooltip}
        {tooltip}
      {/if}
    </div>
  {/if}
</div>
