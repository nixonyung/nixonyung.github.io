<script lang="ts" generics="const Options extends string[]">
  let {
    value = $bindable(),
    label,
    options,
    onchange,
  }: {
    value: Options[number];
    label: string;
    options: Options;
    onchange?: (event: Event & { currentTarget: EventTarget & HTMLButtonElement }) => void;
  } = $props();
</script>

<div class="flex items-center-safe">
  <span class="mr-3">{label}</span>

  {#each options as option}
    <button
      class={["cursor-pointer px-2 py-1 ring", option !== value && "opacity-50"]}
      onclick={(ev) => {
        value = option;
        onchange?.(ev);
      }}
    >
      {option}
    </button>
  {/each}
</div>
