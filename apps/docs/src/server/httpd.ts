import { resolve } from 'path';
import engine, { AuthMethod, Mode } from '@not-govuk/engine';
import config from './config';
import AppWrap from '../common/app-wrap';
import ErrorPage from '../common/error-page';
import PageWrap from '../common/page-wrap';
import pageLoader from '../common/page-loader';
import isReady from './readiness';

export type httpdOptions = {
  entrypoints?: object
  port?: number
};

export const createServer = ({ entrypoints, port }: httpdOptions) => {
  const app = engine({
    AppWrap,
    ErrorPage,
    PageWrap,
    assets: {
      localPath: resolve(__dirname, '..', '..', 'dist', 'public'),
      publicPath: '/public/',
      entrypoints
    },
    auth: config.auth && (
      ( config.auth.method === AuthMethod.None && { method: AuthMethod.None } )
        || ( config.auth.method === AuthMethod.Dummy && { method: AuthMethod.Dummy, ...config.auth.dummy } )
        || ( config.auth.method === AuthMethod.Headers && { method: AuthMethod.Headers, ...config.auth.headers } )
        || ( config.auth.method === AuthMethod.Basic && { method: AuthMethod.Basic, ...config.auth.basic } )
        || ( config.auth.method === AuthMethod.OIDC && { method: AuthMethod.OIDC, ...config.auth.oidc } )
    ),
    cookies: {
      secret: config.cookies.secret,
      secure: config.cookies.secure
    },
    env: config.env,
    frameAncestors: config.frameAncestors,
    httpd: {
      host: config.httpd.host,
      port: port || config.httpd.port
    },
    logger: {
      destination: config.logger.destination,
      level: config.logger.level && (
        (config.logger.level === 'trace' && 'trace')
          || (config.logger.level === 'debug' && 'debug')
          || (config.logger.level === 'info' && 'info')
          || (config.logger.level === 'warn' && 'warn')
          || (config.logger.level === 'error' && 'error')
          || (config.logger.level === 'fatal' && 'fatal')
      ) || undefined
    },
    isReady,
    mode: config.mode,
    name: config.name,
    pageLoader,
    privacy: config.privacy,
    ssrOnly: config.ssrOnly
  });

  const handler = (
    config.mode === Mode.Serverless
      ? async (...args) => (await app)(...args)
      : undefined
  );

  return {
    app,
    handler
  };
};

export default createServer;
