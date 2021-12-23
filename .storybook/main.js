const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}