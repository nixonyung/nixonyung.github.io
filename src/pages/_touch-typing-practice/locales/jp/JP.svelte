<script lang="ts">
  import TabsInput from "@/components/svelte/TabsInput.svelte";
  import { useSyncSettings } from "../../../../lib/settings.svelte";
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
      pronunciationFn={({ hiragana }) => hiragana}
      schema={[
        {
          label: "kanji",
          valueFn: ({ kanjis }) => kanjis?.join(" / "),
          defaultPosition: "question",
        },
        {
          label: "kana",
          valueFn: ({ hiragana, katakana }) => (katakana ? `${hiragana} / ${katakana}` : hiragana),
          defaultPosition: "option",
        },
        {
          label: "preferred written form",
          valueFn: ({ hiragana, katakana, kanjis, preferredForm }) => {
            switch (preferredForm) {
              case undefined:
              case "kanji":
                return kanjis?.join(" / ");
              case "hiragana":
                return hiragana;
              case "katakana":
                return katakana;
            }
          },
        },
        {
          label: "romanization",
          valueFn: ({ romanization }) => romanization,
        },
        {
          label: "meaning",
          valueFn: ({ meaning }) => meaning,
          defaultPosition: "question",
        },
      ]}
    />
  {/if}
</div>
