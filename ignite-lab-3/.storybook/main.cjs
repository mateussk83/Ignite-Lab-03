module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.ts",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}