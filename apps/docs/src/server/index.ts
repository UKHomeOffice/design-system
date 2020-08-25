import { resolve } from 'path';
import engine, { Mode, NodeEnv } from '@not-govuk/engine';
import config from './config';
import Template from './template';
import AppWrap from '../common/app-wrap';
import ErrorPage from '../common/error-page';
import PageWrap from '../common/page-wrap';
import pageLoader from '../common/page-loader';

const setup = () => {
  const assets = (
    config.env === NodeEnv.Development && !config.ssrOnly
      ? require('../../webpack.config')
      : {
        localPath: resolve(__dirname, '..', '..', 'dist', 'public'),
        publicPath: '/public/',
        entrypoints: require('../../dist/public/entrypoints.json')
      }
  );

  return engine({
    assets,
    env: config.env,
    httpd: {
      host: config.httpd.host,
      port: config.httpd.port
    },
    mode: config.mode,
    name: config.name,
    ssrOnly: config.ssrOnly
  });
};

let stage1 = setup();

const startApp = () => stage1.then(
  f => f({
    AppWrap,
    ErrorPage,
    PageWrap,
    Template,
    pageLoader
  })
);

let app = startApp();

export const handler = (
  config.mode === Mode.Serverless
    ? async (...args) => (await app)(...args)
    : undefined
);

export default app;

if (module.hot) {
  const state = {
    needSetup: false,
    stopping: false
  };

  const rehash = (msg: string, needSetup: boolean = false) => () => {
    console.log(msg);

    state.needSetup = state.needSetup || needSetup;

    if (!state.stopping) {
      app.then(
        v => {
          state.stopping = true;

          v.log.info(`${v.name} is going down...`);
          v.stop(
            () => {
              v.log.info(`${v.name} is no longer listening`)

              if (state.needSetup) {
                state.needSetup = false;
                stage1 = setup();
              }

              app = startApp();
              state.stopping = false;
            }
          );
        }
      );
    }
  };

  const restart = rehash('Restarting...', true);
  const refresh = rehash('Refreshing...');

  module.hot.accept([
    '@not-govuk/engine',
    './config',
    '../../dist/public/entrypoints.json',
    '../../webpack.config'
  ], restart);

  module.hot.accept([
    './template',
    '../common/app-wrap',
    '../common/error-page',
    '../common/page-loader',
    '../common/page-wrap'
  ], refresh);
}
