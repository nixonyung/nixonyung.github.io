<script lang="ts">
  import Divider from "@/components/svelte/Divider.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { getLetters } from "./letters.svelte";
  import LettersSettings from "./LettersSettings.svelte";

  const letters = $derived.by(getLetters);
</script>

<Divider />
<LettersSettings />

<Divider />
<TypingQuestions
  questions={letters.map((letter) => ({
    letter,
    input: letter,
    utterance: letter,
  }))}
  keymap={Object.fromEntries(letters.map((letter) => [letter, letter]))}
/>
