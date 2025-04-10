import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    loader: glob({ base: "./src/content", pattern: "**/*.md" }),
    schema: z.object({
      title: z.string(),
      publishDate: z.date().optional(),
      lastmod: z.date().optional(),
    }),
  }),
};

export const slugsOrdered = [
  "metacognition/self-actualization",
  "metacognition/morphing",
  "metacognition/complementation",
  "humanity/greed",
  "humanity/relationships",
  "humanity/being-toward-death",
  "melancholy/solitude",
  "melancholy/growth",
  "melancholy/futile",
  "melancholy/numb",
  "melancholy/hollow",
  "melancholy/plastic-love",
  "dreamscapes/scar",
  "dreamscapes/incapable",
  "dreamscapes/the-furthest-distance",
] as const;
