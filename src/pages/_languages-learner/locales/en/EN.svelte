<script lang="ts">
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import type { Letter } from "../../types";

  const letters = $derived.by(() => {
    const letters: Letter[] = [];

    // A-Z
    for (let i = 65; i <= 90; i++) letters.push({ letter: String.fromCharCode(i) });
    // a-z
    for (let i = 97; i <= 122; i++) letters.push({ letter: String.fromCharCode(i) });

    return letters;
  });
</script>

<TypingQuestions {letters} />
