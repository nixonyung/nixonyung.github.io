<script lang="ts">
  import { globals } from "../../globals.svelte";
  import { dictionary, keymap } from "./locale";

  globals.localeKeymap = keymap;
  globals.localeDictionary = dictionary;
  globals.nextQuestion();
</script>
