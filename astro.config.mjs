import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";
import { defaultLocale, locales } from "./src/i18n";

export default defineConfig({
  // (ref.) [Configure a GitHub Action](https://docs.astro.build/en/guides/deploy/github/#configure-a-github-action)
  site: "https://nixonyung.github.io",

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  integrations: [
    svelte(),
    icon(),
    sitemap(),
  ],

  i18n: {
    locales,
    defaultLocale,
    routing: "manual",
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Recursive",
      cssVariable: "--font-recursive",
      weights: ["300 1000"],
      options: {
        experimental: {
          variableAxis: {
            CASL: [["0", "1"]],
            CRSV: [["0", "1"]],
            MONO: [["0", "0.5"]],
          },
        },
      },
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans HK",
      cssVariable: "--font-noto-sans-hk",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.google(),
      name: "LXGW WenKai TC",
      cssVariable: "--font-lxgw-wenkai-tc",
      weights: ["300", "400", "700"],
    },
  ],
});
