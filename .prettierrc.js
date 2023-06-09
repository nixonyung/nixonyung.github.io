module.exports = {
  overrides: [
    {
      files: ["*.html"],
      options: {
        plugins: [require.resolve("prettier-plugin-go-template")],
        parser: "go-template",
      },
    },
  ],
};
