import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { stories } from '../component-stories';

export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

const Page: FC<PageProps> = ({ routes }) => {

  // Create automatic site index & section arrays
  const all = routes.map(e => ({ href: e.href, text: e.title }));

  const getStarted = all.filter(({href}) => (
    href.substring(1).split('/')[0] === 'get-started'
  ));
  const styles = all.filter(({href}) => (
    href.substring(1).split('/')[0] === 'styles'
  ));
  const patterns = all.filter(({href}) => (
    href.substring(1).split('/')[0] === 'patterns'
  ));
  const accessibility = all.filter(({href}) => (
    href.substring(1).split('/')[0] === 'accessibility'
  ));
  const getInvolved = all.filter(({href}) => (
    href.substring(1).split('/')[0] === 'get-involved'
  ));

  const categorised = [
    getStarted,
    styles,
    patterns,
    accessibility,
    getInvolved
  ];

  const misc = all.filter(e => !categorised.flat().includes(e));

  // Group all component pages (not included in automatic index so no need to remove)
  const components = Object.keys(stories).sort().map(v => ({
    href: `/components?name=${encodeURIComponent(stories[v].default.title)}`,
    text: v
  }));

  return (
    <Fragment>
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <h2>Get Started</h2>
      <AnchorList classBlock="govuk-list" items={getStarted} />
      <h2>Styles</h2>
      <AnchorList classBlock="govuk-list" items={styles} />
      <h2>Components</h2>
      <AnchorList classBlock="govuk-list" items={components} />
      <h2>Patterns</h2>
      <AnchorList classBlock="govuk-list" items={patterns} />
      <h2>Accessibility</h2>
      <AnchorList classBlock="govuk-list" items={accessibility} />
      <h2>Get Involved</h2>
      <AnchorList classBlock="govuk-list" items={getInvolved} />
      <h2>Misc</h2>
      <AnchorList classBlock="govuk-list" items={misc} />
    </Fragment>

  );
};

export default Page;
