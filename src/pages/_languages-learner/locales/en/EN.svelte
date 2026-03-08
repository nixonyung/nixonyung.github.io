<script lang="ts" module>
  export const letterSettings = $state(
    initSettings({
      enableRows: {
        rowQWER: { paramKey: "rowQWER", defaultValue: true },
        rowASDF: { paramKey: "rowASDF", defaultValue: true },
        rowZXCV: { paramKey: "rowZXCV", defaultValue: true },
        row1234: { paramKey: "row1234", defaultValue: false },
      },
      enableSubsets: {
        lowercase: { paramKey: "lowercase", defaultValue: true },
        uppercase: { paramKey: "uppercase", defaultValue: true },
      },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import { initSettings, useSyncSettings } from "@/lib/settings.svelte";
  import TypingQuestions from "../../components/TypingQuestions.svelte";
  import type { Keymap, Letter } from "../../types";

  useSyncSettings(letterSettings);

  const [
    letters,
    keymap,
  ]: [
    Letter[],
    Keymap,
  ] = $derived.by(() => {
    const letters: Letter[] = [];
    let keymap: Keymap = {};

    if (letterSettings.enableRows.rowQWER.value && letterSettings.enableSubsets.lowercase.value) {
      for (const ch of ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }
    if (letterSettings.enableRows.rowQWER.value && letterSettings.enableSubsets.uppercase.value) {
      for (const ch of ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }

    if (letterSettings.enableRows.rowASDF.value && letterSettings.enableSubsets.lowercase.value) {
      for (const ch of ["a", "s", "d", "f", "g", "h", "j", "k", "l"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }
    if (letterSettings.enableRows.rowASDF.value && letterSettings.enableSubsets.uppercase.value) {
      for (const ch of ["A", "S", "D", "F", "G", "H", "J", "K", "L"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }

    if (letterSettings.enableRows.rowZXCV.value && letterSettings.enableSubsets.lowercase.value) {
      for (const ch of ["z", "x", "c", "v", "b", "n", "m"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }
    if (letterSettings.enableRows.rowZXCV.value && letterSettings.enableSubsets.uppercase.value) {
      for (const ch of ["Z", "X", "C", "V", "B", "N", "M"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }

    if (letterSettings.enableRows.row1234.value) {
      for (const ch of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]) {
        letters.push({ letter: ch });
        keymap[ch] = ch;
      }
    }

    return [letters, keymap];
  });

  function casedLabel(label: string) {
    return letterSettings.enableSubsets.lowercase.value &&
      letterSettings.enableSubsets.uppercase.value
      ? label
      : letterSettings.enableSubsets.lowercase.value
        ? label.toLowerCase()
        : letterSettings.enableSubsets.uppercase.value
          ? label.toUpperCase()
          : label;
  }
</script>

<div>
  <div class="mt-3 mb-1.5 flex flex-col gap-1.5">
    <div class="flex gap-4.5">
      <div>Select rows:</div>

      <div class="flex flex-col gap-1.5">
        <div class="flex gap-4.5">
          <CheckboxInput
            bind:checked={letterSettings.enableRows.rowQWER.value}
            label={casedLabel("Qwer...")}
          />
          <CheckboxInput
            bind:checked={letterSettings.enableRows.rowASDF.value}
            label={casedLabel("Asdf...")}
          />
          <CheckboxInput
            bind:checked={letterSettings.enableRows.rowZXCV.value}
            label={casedLabel("Zxcv...")}
          />
          <CheckboxInput bind:checked={letterSettings.enableRows.row1234.value} label="1234..." />
        </div>

        <div class="flex gap-4.5">
          <CheckboxInput
            bind:checked={letterSettings.enableSubsets.lowercase.value}
            label="enable lowercase"
          />
          <CheckboxInput
            bind:checked={letterSettings.enableSubsets.uppercase.value}
            label="enable UPPERCASE"
          />
        </div>
      </div>
    </div>
  </div>

  <TypingQuestions {letters} {keymap} includeNumbers={letterSettings.enableRows.row1234.value} />
</div>
