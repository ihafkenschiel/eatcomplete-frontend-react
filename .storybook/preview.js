export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Welcome',
        ['Getting Started', 'Component Status'],
        'Tokens',
        'Components',
        ['Basic', 'Composite'],
        'Pages',
      ],
    },
  },
}
