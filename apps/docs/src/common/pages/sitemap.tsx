import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { stories } from '../component-stories';

const components = Object.keys(stories).sort().map(v => ({
  href: `/components?name=${encodeURIComponent(stories[v].default.title)}`,
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
