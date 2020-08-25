'use strict';

const path = require('path');

/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  setupFilesAfterEnv: [
    path.resolve(__dirname, '.jest', 'setup', 'enzyme.js')
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, '.jest', 'mocks', 'file.js'),
    '\\.(css|scss|sass|less)$': path.resolve(__dirname, '.jest', 'mocks', 'style.js')
  },
  moduleDirectories: [
    'node_modules'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  globals: {
    'ts-jest': {
      tsConfig: path.resolve(__dirname, 'tsconfig.nodejs.json')
    }
  }
};

module.exports = config;
