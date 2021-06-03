import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';

const reduceToLookup = (acc: object, cur) => ({...acc, [cur.default.title]: cur});
const storiesComponents = [
  require('../../../../../components/alert/spec/Alert.stories.mdx'),
  require('../../../../../components/expandable-banner/spec/ExpandableBanner.stories.mdx'),
  require('../../../../../components/footer/spec/Footer.stories.mdx'),
  require('../../../../../components/header/spec/Header.stories.mdx'),
  require('../../../../../components/page/spec/Page.stories.mdx'),
  require('../../../../../components/pagination/spec/Pagination.stories.mdx'),
  require('../../../../../components/status-message/spec/StatusMessage.stories.mdx'),
  require('../../../../../components/timeline/spec/Timeline.stories.mdx')
];
const subpagesComponents = storiesComponents.reduce(reduceToLookup, {})
const components = Object.keys(subpagesComponents).sort().map(v => ({
  href: `/components?name=${encodeURIComponent(subpagesComponents[v].default.title)}`,
  text: v
}));

export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

const Page: FC<PageProps> = ({ routes }) => {
  const compare = (a, b) => (
    a.href > b.href
           ? 1
           : -1
  );
  console.log(routes);
  const pages = routes
    .map(e => ({
      href: e.href,
      text: e.title
    }))
    .sort(compare);

  return (
    <Fragment>
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <AnchorList classBlock="govuk-list" items={pages} />
      <h2>Components</h2>
      <AnchorList classBlock="govuk-list" items={components} />
    </Fragment>
  );
};

export default Page;
