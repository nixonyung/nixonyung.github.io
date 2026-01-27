export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const messages = {
  siteTitle: {
    zh: "見・文",
    en: "I came. I saw. I wrote.",
  },
  home: {
    zh: "首頁",
    en: "Home",
  },
  languageName: {
    zh: "最地道",
    en: "Reinterpreted",
  },
  indexIntro: {
    zh: "喺度讕高深、講八卦、發老脾、作故仔、揸流灘",
    en: "Featuring life hacks, human observations, negative energy, random imaginations and unpolished works.",
  },
  indexMetacognitionTitle: {
    zh: "點諗樣",
    en: "Metacognition",
  },
  indexMetacognitionIntro: {
    zh: "醒你兩招，等你行少啲歪路",
    en: "Some mindsets to help you make good life decisions consistently and rapidly.",
  },
  indexHumanityTitle: {
    zh: "眾生相",
    en: "Humanity",
  },
  indexHumanityIntro: {
    zh: "人性嘅規律，多數時候適用",
    en: "Patterns of human nature, which I've found applicable most of the time.",
  },
  indexMelancholyTitle: {
    zh: "病呻吟",
    en: "Melancholy",
  },
  indexMelancholyIntro: {
    zh: "唔記得左點樣流淚，唯有以淚水作墨水吐苦水",
    en: "Mournings of a man who has forgotten how to cry.",
  },
  indexDreamscapesTitle: {
    zh: "大影院",
    en: "Dreamscapes",
  },
  indexDreamscapesIntro: {
    zh: "埋嚟睇我啲奇思妙想",
    en: "My whimsical thoughts, presented as short stories.",
  },
  indexPortfolioTitle: {
    zh: "搞搞震",
    en: "Portfolio",
  },
  indexPortfolioIntro: {
    zh: "未必屬精品",
    en: "Other shits I've made.",
  },
  indexBlogLinkTitle: {
    zh: "呢壇嘢嘅 source code",
    en: "Source code of this thing",
  },
  indexLoLMontageLinkTitle: {
    zh: "LoL ARAM Montage - OH DEAR ITS UDYR",
    en: "LoL ARAM Montage - OH DEAR ITS UDYR",
  },
  indexLoLHighlightsLinkTitle: {
    zh: "LoL ARAM 精華片段",
    en: "LoL ARAM Highlights",
  },
  indexLanguagesLearner: {
    zh: "Languages Learner",
    en: "Languages Learner",
  },
  lastmod: {
    zh: "最後更新於",
    en: "Last updated on",
  },
  publishDate: {
    zh: "最初上載於",
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
