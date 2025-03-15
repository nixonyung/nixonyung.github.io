export const locales = ["zh", "en"] as const;
export const defaultLocale: (typeof locales)[number] = "zh";

const castLocale = (locale?: string) =>
  locale && (locales.slice() as string[]).includes(locale)
    ? (locale as (typeof locales)[number])
    : defaultLocale;

export const getHref = (locale?: string, slug?: string) =>
  `/${castLocale(locale)}` + (slug ? `/${slug}` : "");

export const messages: Record<string, Record<(typeof locales)[number], string>> = {
  languageName: {
    zh: "粵語",
    en: "English",
  },
  siteTitle: {
    zh: "坐享其成抄八成",
    en: "An 80% Imitator",
  },
  home: {
    zh: "首頁",
    en: "Home",
  },
  lastmod: {
    zh: "最後更新於",
    en: "Last updated on",
  },
  publishDate: {
    zh: "上載於",
    en: "First published on",
  },
  prevPost: {
    zh: "上一篇",
    en: "Prev",
  },
  nextPost: {
    zh: "下一篇",
    en: "Next",
  },
} as const;

export const getMessage = (key: keyof typeof messages, locale?: string) =>
  messages[key][castLocale(locale)];
