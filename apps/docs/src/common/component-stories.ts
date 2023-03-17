const reduceToLookup = (acc: object, cur) => ({...acc, [cur.default.title]: cur});
const storySources = [
  require('../../../../components/alert/spec/Alert.stories.mdx'),
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
export const stories = storySources.reduce(reduceToLookup, {})

export default stories;
