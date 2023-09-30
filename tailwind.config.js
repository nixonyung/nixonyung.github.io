/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["themes/MyTheme/layouts/**/*.html", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        base: "Recursive, system-ui",
      },
      listStyleType: {
        circle: "circle",
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
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02edd2",
          secondary: "#aaf3eb",
          accent: "#fc226e",
          neutral: "#353B43",
          "base-100": "#191e24",
          "base-300": "#242930",
          info: "#3ea5f4",
          success: "#50f779",
          warning: "#dcab60",
          error: "#e86969",
        },
      },
    ],
  },
};
