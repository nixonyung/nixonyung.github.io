<script lang="ts">
  import CheckboxInput from "./CheckboxInput.svelte";
  import { globals } from "./globals.svelte";

  let {
    checked = $bindable(),
    ...props
  }: {
    checked: boolean;
    label: string;
    rowName: string;
  } = $props();
</script>

<th dir="ltr">
  <CheckboxInput
    bind:checked
    label={props.label}
    class="block"
    onchange={() => {
      if (checked) {
        globals.searchParams.append("jpRows", props.rowName);
      } else {
        globals.searchParams.delete("jpRows", props.rowName);
      }
      globals.saveSearchParams();
      globals.nextQuestion();
    }}
  />
</th>
