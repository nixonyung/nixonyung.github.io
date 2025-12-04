<script lang="ts">
  import TabsInput from "@/components/svelte/TabsInput.svelte";
  import { useSyncSettings } from "../../app.svelte";
  import FlashcardQuestions from "../../components/FlashcardQuestions.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import FlashcardSettings from "./FlashcardSettings.svelte";
  import GojuonQuestions from "./GojuonQuestions.svelte";
  import GojuonTable from "./GojuonTable.svelte";
  import { jp } from "./jp.svelte";

  useSyncSettings(jp.SETTINGS_SCHEMA, jp.settings);
</script>

<div class="flex flex-col gap-6">
  <TabsInput
    bind:value={jp.settings.mode}
    label="Select Mode:"
    options={["Typing", "Gojuon Table", "Flashcards"]}
  />
  {#if jp.settings.mode === "Typing"}
    <GojuonTable />
    <TypingQuestions letters={jp.letters} keymap={jp.keymap} />
  {:else if jp.settings.mode === "Gojuon Table"}
    <GojuonTable />
    <GojuonQuestions gojuons={jp.gojuons} />
  {:else if jp.settings.mode === "Flashcards"}
    <FlashcardSettings />
    <FlashcardQuestions
      words={jp.words}
      schema={[
        { label: "word", valueFn: ({ word, aliases = [] }) => [word, ...aliases].join(" / ") },
        { label: "hiragana", valueFn: ({ hiraganaForm }) => hiraganaForm },
        { label: "romanization", valueFn: ({ romanization }) => romanization },
        { label: "meaning", valueFn: ({ meaning }) => meaning },
      ]}
    />
  {/if}
</div>
