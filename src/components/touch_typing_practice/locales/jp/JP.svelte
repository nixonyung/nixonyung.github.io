<script lang="ts">
  import { app, useSyncSettings } from "../../app.svelte";
  import CheckboxInput from "../../inputs/CheckboxInput.svelte";
  import TabsInput from "../../inputs/TabsInput.svelte";
  import Keyboard from "../../Keyboard.svelte";
  import Questions from "../../Questions.svelte";
  import Gojuon from "./Gojuon.svelte";
  import GojuonQuestions from "./GojuonQuestions.svelte";
  import { jp } from "./jp.svelte";

  jp.settings = useSyncSettings(jp.SETTINGS_SCHEMA, jp.settings);

  app.localeKeymap = jp.keymap;
  $effect(() => {
    app.localeDictionary = jp.dictionary();
  });
</script>

<!-- settings -->
<div>
  <div class="flex gap-9">
    <CheckboxInput bind:checked={jp.settings.enableHiragana} label="enable Hiragana 平假名" />
    <CheckboxInput bind:checked={jp.settings.enableKatakana} label="enable Katakana 片假名" />
    <CheckboxInput bind:checked={jp.settings.showOrigins} label="show origins:" />
  </div>
  <div class="flex gap-9">
    <CheckboxInput
      bind:checked={jp.settings.enableDiacritics}
      label="enable Dakuten 濁音 and Handakuten 半濁音"
    />
    <CheckboxInput bind:checked={jp.settings.enableYoon} label="enable Yoon 拗音" />
  </div>
  <div>
    <a
      href="https://www.wikiwand.com/zh-hk/articles/平文式罗马字#罗马字表"
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
    >
      (ref.) 平文式羅馬字
    </a>
  </div>
</div>

<Gojuon />

<TabsInput
  bind:value={jp.settings.mode}
  label="Select Mode:"
  options={["questions", "gojuonQuestions"]}
/>
{#if jp.settings.mode === "questions"}
  <Questions />
  <Keyboard />
{:else if jp.settings.mode === "gojuonQuestions"}
  <GojuonQuestions />
{/if}
