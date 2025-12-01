<script lang="ts">
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { en } from "./en.svelte";
</script>

<TypingQuestions keymap={en.keymap} letters={en.letters} />
