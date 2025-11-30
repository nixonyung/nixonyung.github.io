<script lang="ts">
  import Keyboard from "../../Keyboard.svelte";
  import Questions from "../../Questions.svelte";
  import { app } from "../../app.svelte";
  import { keymap, lettersDict } from "./en.svelte";

  app.localeKeymap = keymap;
  app.localeLettersDict = lettersDict;
</script>

<Questions />
<Keyboard />
