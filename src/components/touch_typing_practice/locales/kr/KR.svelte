<script lang="ts">
  import { globals } from "../../globals.svelte";
  import Keyboard from "../../Keyboard.svelte";
  import Questions from "../../Questions.svelte";
  import { dictionary, keymap } from "./locale";

  globals.localeKeymap = keymap;
  globals.localeDictionary = dictionary;
</script>

<Questions />
<Keyboard />
