import { vitePreprocess } from "@astrojs/svelte";

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    runes: true,
    warningFilter: (warning) => !["state_referenced_locally"].includes(warning.code),
  },
};
