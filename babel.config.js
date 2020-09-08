module.exports = {
  presets: [["@babel/preset-env"], ["@vue/app", { useBuiltIns: "entry" }]],
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    [
      "prismjs",
      {
        languages: ["json", "ruby"],
        plugins: ["line-numbers"],
        theme: "tomorrow",
        css: true,
      }
    ],
  ],
};
