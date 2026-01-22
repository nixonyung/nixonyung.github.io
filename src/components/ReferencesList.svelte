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

{#snippet list(nodes: References, listTitle?: string)}
  {listTitle ?? "References:"}
  <ul class={["list-inside list-disc", listTitle && "pl-6"]}>
    {#each Object.entries(nodes) as [title, node] (title)}
      <li>
        {#if node === undefined || typeof node === "string"}
          <ReferenceLink {title} href={node} />
        {:else}
          {@render list(node, title)}
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

<div class={classList}>
  {@render list(references)}
</div>
