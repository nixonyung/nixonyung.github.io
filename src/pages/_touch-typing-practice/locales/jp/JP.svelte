<script lang="ts">
  import TabsInput from "@/components/TabsInput.svelte";
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
      wordToPronunciationFn={({ hiragana, romanization }) => hiragana ?? romanization}
      wordToRomanizationFn={({ romanization }) => romanization}
      schema={[
        {
          label: "kanji",
          valueFn: ({ kanjis, rareKanjis }) => {
            const values = [...(kanjis ?? []), ...(rareKanjis ?? [])];
            return values.length ? values.join(" / ") : undefined;
          },
        },
        {
          label: "kana",
          valueFn: ({ hiragana, katakana }) => {
            const values = [hiragana, katakana].filter((kana) => kana !== undefined);
            return values.length ? values.join(" / ") : undefined;
          },
        },
        {
          label: "preferred written form",
          valueFn: ({ kanjis, hiragana, katakana, preferredForm }) => {
            switch (preferredForm) {
              case "kanji":
                return kanjis?.join(" / ");
              case "hiragana":
                return hiragana;
              case "katakana":
                return katakana;
              case undefined:
                return kanjis?.join(" / ") ?? hiragana ?? katakana ?? "";
            }
          },
          defaultPosition: "question",
        },
        {
          label: "example usages",
          valueFn: ({ exampleUsages }) => exampleUsages ?? [],
          defaultPosition: "question",
        },
        {
          label: "meaning",
          valueFn: ({ meaning }) => meaning,
          defaultPosition: "option",
        },
        {
          label: "derived meanings",
          valueFn: ({ derivedMeanings }) => derivedMeanings ?? [],
          defaultPosition: "option",
        },
        {
          label: "grammar question",
          valueFn: ({ question }) => question,
        },
        {
          label: "grammar answer",
          valueFn: ({ answer }) => answer,
        },
      ]}
    />
  {/if}
</div>
