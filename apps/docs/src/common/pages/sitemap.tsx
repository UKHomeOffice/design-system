import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { stories } from '../component-stories';

export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

const Page: FC<PageProps> = ({ routes }) => {

  // Create automatic site index & section arrays
  const misc = routes.map(e => ({ href: e.href, text: e.title }));
  const getStarted = [], styles = [], patterns = [], accessibility = [], getInvolved = [];

  // auto-detect groups by parsing misc array for hrefs
  misc.forEach(element => {
    const siteSection = element.href.substring(1).split("/")[0];

    switch(siteSection) {
      case "get-started":
        getStarted.push({href: element.href, text: element.text});
        break;
      case "styles":
        styles.push({href: element.href, text: element.text});
        break;
      case "patterns":
        patterns.push({href: element.href, text: element.text});
        break;
      case "accessibility":
        accessibility.push({href: element.href, text: element.text});
        break;
      case "get-involved":
        getInvolved.push({href: element.href, text: element.text});
        break;
    };
  });

  // Remove pages from misc section when added to other sections
  getStarted.forEach(element => {
    misc.splice(misc.indexOf(misc.find(route => element.href == route.href)), 1);
  });
  styles.forEach(element => {
    misc.splice(misc.indexOf(misc.find(route => element.href == route.href)), 1);
  });
  patterns.forEach(element => {
    misc.splice(misc.indexOf(misc.find(route => element.href == route.href)), 1);
  });
  accessibility.forEach(element => {
    misc.splice(misc.indexOf(misc.find(route => element.href == route.href)), 1);
  });
  getInvolved.forEach(element => {
    misc.splice(misc.indexOf(misc.find(route => element.href == route.href)), 1);
  });

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
