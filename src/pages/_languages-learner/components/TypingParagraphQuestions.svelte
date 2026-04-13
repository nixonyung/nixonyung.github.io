<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";
  import NumericInput from "@/components/svelte/NumericInput.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte";
  import { tick, untrack } from "svelte";
  import type { Keymap } from "./TypingKeyboard.svelte";
  import TypingKeyboard from "./TypingKeyboard.svelte";
  import type { Question } from "./TypingQuestionViews.svelte";
  import TypingQuestionViews from "./TypingQuestionViews.svelte";

  type ParagraphQuestion = Question & {
    paragraphIdx: number;
    chIdx: number;
  };

  const {
    paragraph,
    keymap,
    numQuestions,
  }: {
    paragraph: ParagraphQuestion[][];
    keymap: Keymap;
    numQuestions?: number;
  } = $props();

  const settings = $state(
    initSettings({
      autoReadQuestion: { paramKey: "autoReadQ", defaultValue: false },
      hideKeys: { paramKey: "hideKeys", defaultValue: false },
      highlightCorrectKey: { paramKey: "showCorrectKey", defaultValue: false },
      ignoreTypos: { paramKey: "ignoreTypos", defaultValue: false },
      startParagraphId: { paramKey: "startIdx", defaultValue: 1 },
    }),
  );
  useSyncSettings(settings);

  let paragraphIdx = $state(0);
  let chIdx = $state(0);

  let questionViewsRef: TypingQuestionViews<ParagraphQuestion> | undefined = $state();
  let isFirstEffectRun = true;
  function getNextQuestion() {
    if (chIdx >= paragraph[paragraphIdx]?.length) {
      paragraphIdx++;
      chIdx = 0;
    }
    if (paragraphIdx >= paragraph.length) {
      paragraphIdx = 0;
    }
    const ch = paragraph[paragraphIdx]?.[chIdx];
    chIdx++;
    return ch;
  }
  async function resetQuestions() {
    paragraphIdx = settings.startParagraphId.value - 1;
    chIdx = 0;

    await tick();
    questionViewsRef?.reset();
  }
  $effect.pre(() => {
    paragraph;

    untrack(() => {
      if (!isFirstEffectRun) settings.startParagraphId.value = paragraph.length ? 1 : 0;
      isFirstEffectRun = false;
      resetQuestions();
    });
  });

  const question = $derived(questionViewsRef?.getQuestion());
  $effect.pre(() => {
    question;

    untrack(() => {
      if (question) settings.startParagraphId.value = question.paragraphIdx + 1;
    });
  });
</script>

<SettingsRows>
  <SettingsRow>
    <CheckboxInput
      bind:checked={settings.autoReadQuestion.value}
      icon="icon-[icon-park-solid--people-speak]"
      label="auto read question"
    />
  </SettingsRow>

  <SettingsRow>
    <CheckboxInput
      bind:checked={settings.hideKeys.value}
      icon="icon-[heroicons--eye-slash-solid]"
      label="hide keys"
    />
    <CheckboxInput
      bind:checked={settings.highlightCorrectKey.value}
      icon="icon-[ix--highlight-filled]"
      label="highlight the correct key"
    />
    <CheckboxInput
      bind:checked={settings.ignoreTypos.value}
      icon="icon-[heroicons--shield-check-solid]"
      label="ignore typos"
    />
  </SettingsRow>

  <SettingsRow>
    <NumericInput
      bind:value={settings.startParagraphId.value}
      label="start from row"
      min={paragraph.length ? 1 : 0}
      max={paragraph.length}
      showLimits
      onchange={() => resetQuestions()}
    />
  </SettingsRow>
</SettingsRows>

<TypingQuestionViews
  bind:this={questionViewsRef}
  {getNextQuestion}
  {keymap}
  {numQuestions}
  autoReadQuestion={settings.autoReadQuestion.value}
  ignoreTypos={settings.ignoreTypos.value}
  showMappedInput
  class="mt-8"
/>

{#if question}
  <div class="mt-4 flex gap-4">
    (row {question.paragraphIdx + 1}, col: {question.chIdx + 1})
  </div>
{/if}

<TypingKeyboard
  {keymap}
  hideKeys={settings.hideKeys.value}
  showCorrectKey={settings.highlightCorrectKey.value}
  correctKey={questionViewsRef?.getCorrectKey()}
  class="mt-8"
/>
