import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    loader: glob({ base: "./src/content", pattern: "**/*.md" }),
    schema: z.object({
      title: z.string().optional(),
      publishDate: z.date().optional(),
      lastmod: z.date().optional(),
    }),
  }),
};

export const slugsOrdered = [
  "limit-break",
  "limit-break/self-actualization",
  "limit-break/self-awareness",
  "limit-break/shuhari",
  "limit-break/shuhari/art",
  "limit-break/shuhari/tools",
  "limit-break/truth-seeking",
  "limit-break/truth-seeking/complementation",
  "perspectives-on-life",
  "perspectives-on-life/greed",
  "perspectives-on-life/relationships",
  "perspectives-on-life/being-toward-death",
  "solipsistic",
  "solipsistic/monologue",
  "solipsistic/solitude",
  "scar",
  "scar/incapable",
  "scar/plastic-love",
  "scar/the-furthest-distance",
  "sick",
  "sick/mania",
  "sick/mania/futile",
  "sick/mania/annoyed",
  "sick/depression",
  "sick/depression/numb",
  "sick/depression/over",
  "sick/depression/hollow",
] as const;
