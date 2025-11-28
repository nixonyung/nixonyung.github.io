<script lang="ts">
  import Keyboard from "../../Keyboard.svelte";
  import Questions from "../../Questions.svelte";
  import { app } from "../../app.svelte";
  import { dictionary, keymap } from "./kr.svelte";

  app.localeKeymap = keymap;
  app.localeDictionary = dictionary;
</script>

<Questions />
<Keyboard />
