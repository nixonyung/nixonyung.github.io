export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const messages = {
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
  indexSection1Part1: {
    zh: "80% 臨摹，20% 原創。",
    en: "80% copied, 20% new.",
  },
  indexSection1Part2: {
    zh: "80% 別人，100% 自己。",
    en: "80% others, 100% you.",
  },
  indexSection1Part3: {
    zh: "80% 結果，20% 時間。",
    en: "80% result, 20% time.",
  },
  indexSection1Part4: {
    zh: "80% 努力，100% 風采。",
    en: "80% hardwork, 100% shine.",
  },
  indexSection2Part1: {
    zh: "推薦",
    en: "Recommending",
  },
  indexSection2Item1: {
    zh: "裝左佢 (得 desktop 版瀏覽器有得用)",
    en: "install the extension (only available on desktop browsers)",
  },
  indexSection2Item2: {
    zh: "睇片嗰陣會開始見到左上角有舊嘢 show 宜家嘅速度，見到有就得",
    en: "watch any YouTube video, and verify that a panel appears at the top-left",
  },
  indexSection2Item3: {
    zh: "撳 <code>s</code> 減速, 撳 <code>d</code> 加速",
    en: "now you can press <code>s</code> to slow down the video, <code>d</code> to speed up",
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

export const getLocalizedMessage = (key: keyof typeof messages, locale?: string) =>
  messages[key][(locale ?? defaultLocale) as Locale];
