export const pageLoader = require.context('./pages', true, /\.[jt]sx?$/i, 'sync');
export default pageLoader;
