'use strict';

const baseConfig = require('../../jest.config.base');

const config = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/app/**.{ts,tsx}',
  ],
  testMatch: [
    '<rootDir>/spec/**.{ts,tsx}'
  ]
};

module.exports = config;
