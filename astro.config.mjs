// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { defaultLocale, locales } from "./src/i18n";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // required by the sitemap integration
  site: "https://nixonyung.github.io",
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: "manual",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), sitemap(), svelte()],
});