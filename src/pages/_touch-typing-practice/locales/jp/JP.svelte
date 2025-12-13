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
      wordToPronunciationFn={({ hiragana }) => hiragana}
      wordToRomanizationFn={({ romanization }) => romanization}
      schema={[
        {
          label: "kanji",
          valueFn: ({ kanjis, rareKanjis }) =>
            [...(kanjis ?? []), ...(rareKanjis ?? [])].join(" / "),
        },
        {
          label: "kana",
          valueFn: ({ hiragana, katakana }) =>
            [hiragana, katakana].filter((kana) => kana !== undefined).join(" / "),
        },
        {
          label: "preferred written form",
          valueFn: ({ kanjis, hiragana, katakana, exampleUsages, preferredForm }) => {
            switch (preferredForm) {
              case "kanji":
                return kanjis?.join(" / ");
              case "hiragana":
                return hiragana;
              case "katakana":
                return katakana;
              case "example":
                return exampleUsages?.join(" / ");
              case undefined:
                return exampleUsages?.join(" / ") ?? kanjis?.join(" / ") ?? hiragana ?? katakana;
            }
          },
          defaultPosition: "question",
        },
        {
          label: "meaning",
          valueFn: ({ meaning }) => meaning,
          defaultPosition: "option",
        },
      ]}
    />
  {/if}
</div>
