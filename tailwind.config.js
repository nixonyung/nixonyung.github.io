/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["themes/MyTheme/layouts/**/*.html", "layouts/**/*.html"],
  // (ref.) [Force Tailwind to include some classes in build phase](https://stackoverflow.com/questions/71186718/force-tailwind-to-include-some-classes-in-build-phase)
  // e.g. classes used in assets/breadcrumbs.js
  safelist: ["text-transparent"],
  theme: {
    extend: {
      fontFamily: {
        "recursive-sans-casual": "Recursive Sans Casual, system-ui",
        "recursive-mono-casual": "Recursive Mono Casual, system-ui",
      },
      letterSpacing: {
        tightest: "-0.125em",
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
          primary: "#aaf3eb",
          accent: "#02edd2",
          "base-100": "#191e24",
          "base-300": "#303840",
          "base-content": "#eeeeee",
          info: "#3ea5f4",
          success: "#50f779",
          warning: "#dcab60",
          error: "#e86969",
        },
      },
    ],
  },
};
