import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    loader: glob({ base: "./src/content", pattern: "**/*.md" }),
    schema: z.object({
      title: z.string().optional(),
      publishDate: z.date().optional(),
      lastmod: z.date().optional(),
      order: z.number().optional(),
    }),
  }),
};
