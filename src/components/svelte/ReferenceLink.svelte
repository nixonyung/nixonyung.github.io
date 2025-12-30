<script lang="ts">
  let {
    title,
    href,
  }: {
    title: string;
    href?: string;
  } = $props();
</script>

{#if href}
  <a {href} target="_blank" rel="noopener noreferrer">
    (ref.)
    <span class="underline decoration-primary-content/50 underline-offset-4">{title}</span>
  </a>
{:else}
  <span>{title}</span>
{/if}
