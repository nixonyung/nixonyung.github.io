<script lang="ts" module>
  export const letterSettings = $state(
    initSettings({
      enableRows: {
        philosophical: { paramKey: "groupPhilosophical", defaultValue: true },
        stroke: { paramKey: "gruopStroke", defaultValue: true },
        bodyParts: { paramKey: "gruopBodyParts", defaultValue: true },
        characterShapes: { paramKey: "groupCharacterShapes", defaultValue: true },
      },
      enableSubsets: {
        auxiliaryShapes: { paramKey: "auxiliaryShapes", defaultValue: true },
        v5: { paramKey: "v5", defaultValue: true },
      },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import ReferencesList from "@/components/ReferencesList.svelte";
  import { initSettings } from "@/lib/settings.svelte.ts";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import { keymap } from "./keymap.svelte.ts";
  import { getLetters } from "./letters.svelte.ts";

  const letters = $derived(getLetters());
</script>

<div>
  <ReferencesList
    references={{
      "倉頡輸入法/輔助字形":
        "https://zh.wikibooks.org/zh-hk/%E5%80%89%E9%A0%A1%E8%BC%B8%E5%85%A5%E6%B3%95/%E8%BC%94%E5%8A%A9%E5%AD%97%E5%BD%A2",
      "倉頡輸入法/版本差異 - 五代與三代之差":
        "https://zh.wikibooks.org/wiki/%E5%80%89%E9%A0%A1%E8%BC%B8%E5%85%A5%E6%B3%95/%E7%89%88%E6%9C%AC%E5%B7%AE%E7%95%B0#%E4%BA%94%E4%BB%A3%E8%88%87%E4%B8%89%E4%BB%A3%E4%B9%8B%E5%B7%AE",
    }}
  />

  <div class="mt-3 mb-1.5 flex flex-col gap-1.5">
    <div class="flex gap-4.5">
      <div>Select rows:</div>

      <div class="flex flex-col gap-1.5">
        <div class="flex gap-4.5">
          <CheckboxInput
            bind:checked={letterSettings.enableRows.philosophical.value}
            label="哲理類 (日月金木水火土)"
          />
          <CheckboxInput
            bind:checked={letterSettings.enableRows.stroke.value}
            label="筆畫類 (竹戈十大中一弓)"
          />
          <CheckboxInput
            bind:checked={letterSettings.enableRows.bodyParts.value}
            label="人體類 (人心手口)"
          />
          <CheckboxInput
            bind:checked={letterSettings.enableRows.characterShapes.value}
            label="字形類 (尸廿山女田卜)"
          />
        </div>

        <div class="flex gap-4.5">
          <CheckboxInput
            bind:checked={letterSettings.enableSubsets.auxiliaryShapes.value}
            label="enable Auxiliary Shapes 輔助字形"
          />
          <CheckboxInput
            bind:checked={letterSettings.enableSubsets.v5.value}
            label="enable Version 5 五代倉頡"
            disabled={!letterSettings.enableSubsets.auxiliaryShapes.value}
          >
            {#snippet customTooltip()}
              enable
              <img
                src="/zh/e/Cjr5m-e1.svg"
                alt="Cjr5m-e1"
                class="inline-block size-6 dark:invert-100"
              />
              (水) and
              <img
                src="/zh/s/Cjr5m-s1.svg"
                alt="Cjr5m-s1"
                class="inline-block size-6 dark:invert-100"
              />
              (尸)
            {/snippet}
          </CheckboxInput>
        </div>
      </div>
    </div>
  </div>

  <TypingQuestions {letters} {keymap} />
</div>
