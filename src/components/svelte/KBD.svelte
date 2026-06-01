<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import Icon from "./Icon.svelte";

  const {
    text,
    icon,
    class: classList,
  }: {
    text?: string;
    icon?: string;
    class?: ClassValue;
  } = $props();
</script>

{#if text}
  <kbd class={["rounded font-code ring", text && "px-1", classList]}>{text}</kbd>
{/if}
{#if icon}
  <kbd class={["rounded font-code ring", classList]}><Icon {icon} /></kbd>
{/if}
