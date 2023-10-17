/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleAttributePerLine: true,

  plugins: ["prettier-plugin-go-template", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
};
