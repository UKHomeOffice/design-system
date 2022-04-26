const projectConfig = require('../../cypress.json');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  return {
    ...config,
    ...projectConfig,
    baseUrl: config.baseUrl || projectConfig.baseUrl
  };
}
