/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Introdução",
          "Fundamentos",
          ["Logo", "Tipografia", "Cores", "Ícones", "Identidade verbal"],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
