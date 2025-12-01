<script lang="ts">
  let {
    title,
    href,
  }: {
    title: string;
    href: string;
  } = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="underline underline-offset-2">
  (ref.) {title}
</a>
