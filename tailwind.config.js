/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "themes/mytheme/layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        recursive: "Recursive",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02edd2",
          secondary: "#aaf3eb",
          accent: "#fc226e",
          neutral: "#353B43",
          "base-100": "#242930",
          info: "#3ea5f4",
          success: "#50f779",
          warning: "#dcab60",
          error: "#e86969",
        },
      },
    ],
  },
};
