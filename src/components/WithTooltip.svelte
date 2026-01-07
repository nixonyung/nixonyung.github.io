<script lang="ts" module>
  export type WithTooltipProps = {
    tooltip?: string;
    disabled?: boolean;
  };
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    tooltip,
    disabled,
    children,
  }: WithTooltipProps & {
    children: Snippet;
  } = $props();
</script>

<div role="tooltip" class={["group relative", tooltip && !disabled && "cursor-help"]}>
  {@render children()}

  {#if tooltip && !disabled}
    <span
      class="invisible absolute bottom-0 left-0 z-10 translate-y-full rounded bg-primary px-1.5 py-0.5 ring group-hover:visible"
    >
      {tooltip}
    </span>
  {/if}
</div>
