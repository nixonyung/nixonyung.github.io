<script lang="ts">
  let {
    title,
    href,
  }: {
    title: string;
    href: string;
  } = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  (ref.)
  <span class="underline decoration-primary-content/50 underline-offset-4">{title}</span>
</a>
