export const pageLoader = require.context('./pages', true, /\.([jt]sx?|mdx?|html)$/i, 'sync');
export default pageLoader;
