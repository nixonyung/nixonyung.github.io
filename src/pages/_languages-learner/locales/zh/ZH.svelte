<script lang="ts">
  import Divider from "@/components/svelte/Divider.svelte";
  import TabsInput from "@/components/svelte/TabsInput.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte.ts";
  import TypingParagraphQuestions from "../../components/TypingParagraphQuestions.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { KEYMAP, KEYMAP_REVERSED as KEYMAP_INVERTED } from "./keymap.svelte.ts";
  import { getLetters } from "./letters.svelte.ts";
  import LettersSettings from "./LettersSettings.svelte";
  import { getParagraph } from "./paragraph.svelte.ts";

  const settings = $state(
    initSettings({
      mode: {
        paramKey: "mode",
        defaultValue: "typingShapes" as "typingShapes" | "typingParagraph",
      },
    }),
  );
  useSyncSettings(settings);
</script>

<TabsInput
  bind:value={settings.mode.value}
  label="Mode"
  valueToLabel={{
    typingShapes: "Typing - Shapes",
    typingParagraph: "Typing - Paragraph",
  }}
  class="mt-4"
/>

<Divider />
{#if settings.mode.value === "typingShapes"}
  {@const { letters, usedKeys } = getLetters()}

  <LettersSettings />

  <Divider />
  <TypingQuestions
    questions={letters.map(({ letter, svgPath }) => ({
      letter,
      input: KEYMAP_INVERTED[letter],
      svgPath,
      utterance: letter,
    }))}
    keymap={Object.fromEntries(usedKeys.map((key) => [key, KEYMAP[key]]))}
  />
{:else if settings.mode.value === "typingParagraph"}
  {@const paragraph = getParagraph()}

  <TypingParagraphQuestions
    paragraph={paragraph.map((letters, paragraphIdx) =>
      letters.map(({ letter, cangjieCodes }, chIdx) => ({
        letter,
        input: [...cangjieCodes].map((code) => KEYMAP_INVERTED[code]).join(""),
        utterance: letter,
        paragraphIdx,
        chIdx,
      })),
    )}
    keymap={KEYMAP}
  />
{/if}
