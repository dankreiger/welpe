module.exports = {
  stories: [
    './__introduction__/*.stories.mdx',
    '../packages/**/src/*.stories.mdx',
    '../packages/**/src/docs/*.stories.mdx',
    '../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
