<script lang="ts">
  import Divider from "@/components/svelte/Divider.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { getLettersAndKeymap } from "./letters.svelte.ts";
  import LettersSettings from "./LettersSettings.svelte";

  const { letters, keymap } = $derived.by(getLettersAndKeymap);
</script>

<Divider />
<LettersSettings />

<Divider />
<TypingQuestions questions={letters} {keymap} />
