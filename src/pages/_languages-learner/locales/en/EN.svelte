<script lang="ts" module>
  export const letterSettings = $state(
    initSettings({
      useRowQWER: { paramKey: "rowQWER", defaultValue: true },
      useRowASDF: { paramKey: "rowASDF", defaultValue: true },
      useRowZXCV: { paramKey: "rowZXCV", defaultValue: true },
      useRow1234: { paramKey: "row1234", defaultValue: false },

      onlyLowercase: { paramKey: "onlyLowercase", defaultValue: true },
      onlyUppercase: { paramKey: "onlyUppercase", defaultValue: true },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte";
  import { untrack } from "svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import type { Letter } from "../../types";

  useSyncSettings(letterSettings);
  $effect.pre(() => {
    if (letterSettings.onlyLowercase.value)
      untrack(() => (letterSettings.onlyUppercase.value = false));
  });
  $effect.pre(() => {
    if (letterSettings.onlyUppercase.value)
      untrack(() => (letterSettings.onlyLowercase.value = false));
  });

  const letters: Letter[] = $derived.by(() => {
    const chars: string[] = [];

    if (letterSettings.useRowQWER.value && !letterSettings.onlyUppercase.value) {
      chars.push(...["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
    }
    if (letterSettings.useRowQWER.value && !letterSettings.onlyLowercase.value) {
      chars.push(...["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]);
    }

    if (letterSettings.useRowASDF.value && !letterSettings.onlyUppercase.value) {
      chars.push(...["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
    }
    if (letterSettings.useRowASDF.value && !letterSettings.onlyLowercase.value) {
      chars.push(...["A", "S", "D", "F", "G", "H", "J", "K", "L"]);
    }

    if (letterSettings.useRowZXCV.value && !letterSettings.onlyUppercase.value) {
      chars.push(...["z", "x", "c", "v", "b", "n", "m"]);
    }
    if (letterSettings.useRowZXCV.value && !letterSettings.onlyLowercase.value) {
      chars.push(...["Z", "X", "C", "V", "B", "N", "M"]);
    }

    if (letterSettings.useRow1234.value) {
      chars.push(...["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
    }

    return chars.map((char) => ({ letter: char }));
  });

  function casedLabel(label: string) {
    if (letterSettings.onlyLowercase.value) return label.toLowerCase();
    if (letterSettings.onlyUppercase.value) return label.toUpperCase();
    return label;
  }
</script>

<div>
  <div class="mt-3 mb-1.5 flex flex-col gap-1.5">
    <div class="flex gap-4.5">
      <CheckboxInput bind:checked={letterSettings.useRowQWER.value} label={casedLabel("Qwer...")} />
      <CheckboxInput bind:checked={letterSettings.useRowASDF.value} label={casedLabel("Asdf...")} />
      <CheckboxInput bind:checked={letterSettings.useRowZXCV.value} label={casedLabel("Zxcv...")} />
      <CheckboxInput bind:checked={letterSettings.useRow1234.value} label="1234..." />
    </div>
    <div class="flex gap-4.5">
      <CheckboxInput bind:checked={letterSettings.onlyLowercase.value} label="only lowercase" />
      <CheckboxInput bind:checked={letterSettings.onlyUppercase.value} label="ONLY UPPERCASE" />
    </div>
  </div>

  <TypingQuestions {letters} includeNumbers={letterSettings.useRow1234.value} />
</div>
