export const pageLoader = (src: string) => import(/* webpackPrefetch: true */ './pages/' + src);
pageLoader.dir = 'src/common/pages';
export default pageLoader;
