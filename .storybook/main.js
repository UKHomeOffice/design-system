'use strict';

module.exports = {
  stories: [
    //'../components/*/spec/*.stories.@(js|mdx)', // This can be used if my PR is merged: https://github.com/storybookjs/storybook/pull/11531
    '../components/back-link/spec/*.stories.mdx',
    '../components/form/spec/*.stories.mdx',
    '../components/link/spec/*.stories.mdx',
    '../components/table/spec/*.stories.mdx',
    '../components/tag/spec/*.stories.mdx',
    '../styles/*.stories.mdx',
    '../packages/components/src/components/**/*.stories.mdx'
  ],
  addons: [
    {
      name: '@not-govuk/storybook-preset',
      options: {
        baseDir: __dirname,
        tsConfig: '../tsconfig.json'
      }
    },
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-docs/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre'
    });

    return config;
  }
};
