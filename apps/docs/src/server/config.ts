import { Mode, NodeEnv } from '@not-govuk/engine';
import commonConfig from '../common/config';

const serverConfig = {
  ...commonConfig,
  env: process.env.NODE_ENV as NodeEnv,
  httpd: {
    host: process.env.LISTEN_HOST || '0.0.0.0',
    port: Number(process.env.LISTEN_PORT) || 8080
  },
  mode: (process.env.MODE || 'server') as Mode,
  ssrOnly: !!(process.env.SSR_ONLY && process.env.SSR_ONLY.match(/(yes|true)/i))
};

export default serverConfig;
