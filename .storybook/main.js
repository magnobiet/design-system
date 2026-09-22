import react from "@vitejs/plugin-react";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|mjs)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/html-vite",
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(react());

    return config;
  },
};

export default config;
