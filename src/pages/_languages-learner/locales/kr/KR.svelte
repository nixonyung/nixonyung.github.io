<script lang="ts">
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { keymap } from "./keymap.svelte.ts";
  import { letters } from "./letters.svelte.ts";
</script>

<TypingQuestions {letters} {keymap} />
