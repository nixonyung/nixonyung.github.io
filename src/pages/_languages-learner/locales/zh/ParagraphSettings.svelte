<script lang="ts" module>
  export type Paragraph = {
    letter: string;
    cangjieCodes: string;
    cangjieCodesV5?: string;
  }[][];

  export const paragraphSettings = $state(
    initSettings({
      paragraph: {
        paramKey: "paragraph",
        defaultValue: "100Sentences" as
          | "100Sentences"
          | "1000Characters"
          | "tripleCharacters"
          | "zhuMaxims",
      },
      enableV5: { paramKey: "v5", defaultValue: true },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/svelte/CheckboxInput.svelte";

  import ReferencesList from "@/components/svelte/ReferencesList.svelte";
  import SettingsRow from "@/components/svelte/SettingsRow.svelte";
  import SettingsRows from "@/components/svelte/SettingsRows.svelte";

  import TabsInput from "@/components/svelte/TabsInput.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte.ts";

  useSyncSettings(paragraphSettings);
</script>

<SettingsRows>
  <SettingsRow>
    <TabsInput
      bind:value={paragraphSettings.paragraph.value}
      label="Paragraph"
      valueToLabel={{
        "100Sentences": "人生必讀一百句",
        "1000Characters": "千字文",
        tripleCharacters: "三字經",
        zhuMaxims: "朱子治家格言",
      }}
    >
      {#snippet customTooltip()}
        <ReferencesList
          references={{
            人生必讀一百句: "http://www.hkpe.net/cj/exercises/hundred.pdf",
            千字文: "http://hkpe.net/cj/cjinput2.pdf",
            三字經: "http://hkpe.net/cj/cjinput3.pdf",
            "朱子治家格言 (練習)": "http://hkpe.net/cj/cjinput4.pdf",
            "朱子治家格言 (原文)": "https://ctext.org/wiki.pl?if=gb&chapter=329194",
            倉頡字典: "https://www.hkcards.com/",
          }}
        />
      {/snippet}
    </TabsInput>
  </SettingsRow>

  <SettingsRow>
    <CheckboxInput
      bind:checked={paragraphSettings.enableV5.value}
      label="enable Version 5 五代倉頡"
    />
  </SettingsRow>
</SettingsRows>
