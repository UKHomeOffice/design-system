import { createServer } from './httpd';

export const { app, handler } = createServer({
  entrypoints: require('../../dist/public/entrypoints.json')
});

export default app;
