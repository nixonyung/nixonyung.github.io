<script lang="ts" module>
  type References = {
    [K: string]: string | undefined | References;
  };
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  import ReferenceLink from "./ReferenceLink.svelte";

  let {
    references,
    class: classList,
  }: {
    references: References;
    class?: ClassValue;
  } = $props();
</script>

{#snippet list(references: References, listTitle?: string)}
  {listTitle ?? "References:"}
  <ul class={["list-inside list-disc", listTitle && "pl-6"]}>
    {#each Object.entries(references) as [title, v]}
      <li>
        {#if v === undefined || typeof v === "string"}
          <ReferenceLink {title} href={v} />
        {:else}
          {@render list(v, title)}
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

<div class={classList}>
  {@render list(references)}
</div>
