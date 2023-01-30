module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  babel: async (options) => ({
    ...options,
    presets: [["@babel/typescript", { jsxPragma: "h" }]],
  }),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/preact",
};
