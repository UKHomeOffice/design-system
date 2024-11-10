'use strict';

module.exports = {
  stories: [
    '../components/*/spec/*.stories.@(js|mdx)'
  ],
  addons: [
    {
      name: '@not-govuk/storybook-preset',
      options: {
        baseDir: __dirname,
        tsConfig: '../tsconfig.storybook.json'
      }
    },
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-docs/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register'
  ],
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
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
