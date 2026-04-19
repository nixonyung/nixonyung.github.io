<script lang="ts">
  import Divider from "@/components/svelte/Divider.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { KEYMAP_REVERSED } from "./keymap.svelte.ts";
  import { getLetters } from "./letters.svelte.ts";
  import LettersSettings from "./LettersSettings.svelte";

  const letters = $derived.by(getLetters);
</script>

<Divider />
<LettersSettings />

<Divider />
<TypingQuestions
  questions={letters.map(({ letter, pingyin }) => ({
    letter,
    input: [...letter].map((ch) => KEYMAP_REVERSED[ch]).join(""),
    romanization: pingyin,
    utterance: letter,
  }))}
  keymap={Object.fromEntries(
    letters.flatMap(({ letter }) => [...letter].map((ch) => [KEYMAP_REVERSED[ch], ch])),
  )}
/>
