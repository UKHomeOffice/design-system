type SubpageLookup = Record<string, any>;

const reduceToLookup = (acc: SubpageLookup, cur: any): SubpageLookup => ({ ...acc, [cur.default.title]: cur });
const buildLookup = (v: any): SubpageLookup => v.reduce(reduceToLookup, {});

// const loadStories = (r: __WebpackModuleApi.RequireContext) => (
//   r
//     .keys()
//     .map(r)
// );

// const componentLoader = require.context('../../../../components/', true, /^\.\/[^\/]+\/spec\/[^\/]+\.stories\.mdx$/);

// const componentStories = loadStories(componentLoader);
const componentStories = [
  require('../../../../components/alert/spec/Alert.stories.mdx'),
  require('../../../../components/page/spec/Button.stories.mdx'),
  require('../../../../components/expandable-banner/spec/ExpandableBanner.stories.mdx'),
  require('../../../../components/footer/spec/Footer.stories.mdx'),
  require('../../../../components/header/spec/Header.stories.mdx'),
  require('../../../../components/highlight/spec/Highlight.stories.mdx'),
  require('../../../../components/loading-spinner/spec/LoadingSpinner.stories.mdx'),
  require('../../../../components/page/spec/Page.stories.mdx'),
  require('../../../../components/pagination/spec/Pagination.stories.mdx'),
  require('../../../../components/status-message/spec/StatusMessage.stories.mdx'),
  require('../../../../components/timeline/spec/Timeline.stories.mdx'),
  require('../../../../components/date-time/spec/DateTime.stories.mdx'),
  require('../../../../components/date-display/spec/DateDisplay.stories.mdx'),
  require('../../../../components/time/spec/Time.stories.mdx')
];

export const components = buildLookup(componentStories);

export const stories = {
  ...components
};

export const nameParam = 'name';

const buildLink = (page: string, lookup: SubpageLookup) => (v: string) => ({
  href: `/${page}?${nameParam}=${encodeURIComponent(lookup[v].default.title)}`,
  text: v
});

const buildLinks = (page: string) => (v: SubpageLookup) => Object.keys(v).sort().map(buildLink(page, v));
const buildComponentLinks = buildLinks('components');

export const componentLinks = buildComponentLinks(components);

export const links =[
  ...componentLinks
];
