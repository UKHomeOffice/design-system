'use strict';

process.env.TZ = 'Europe/London';
process.env.LC_ALL = 'en_GB.UTF-8';
process.env.LANG = 'en_GB.UTF-8';

const path = require('path');

/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  moduleNameMapper: {
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, '.jest', 'mocks', 'file.js'),
    '\\.(css|scss|sass|less)$': path.resolve(__dirname, '.jest', 'mocks', 'style.js')
  },
  moduleDirectories: [
    'node_modules'
  ],
  transform: {
    "^.+\\.jsx?$": 'babel-jest',
    "^.+\\.tsx?$": ['ts-jest', {
      isolatedModules: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      useESM: true
    }]
  },
  transformIgnorePatterns: [
    'node_modules/\.pnpm/(?!@)'
  ],
  extensionsToTreatAsEsm: [
    '.ts',
    '.tsx'
  ]
};

module.exports = config;
