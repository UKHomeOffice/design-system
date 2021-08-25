import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { A } from '@not-govuk/components';
import { stories } from '../component-stories';

export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

const Page: FC<PageProps> = ({ routes }) => {

  const compare = (a, b) => (
    a.text > b.text
           ? 1
           : -1
  );

  // Create automatic site index & section arrays
  const all = routes.map(e => ({ href: e.href, text: e.title })).sort(compare);

  const getStarted = all.filter(({href}) => (
    href.split('/')[1] === 'get-started'
  ));
  const styles = all.filter(({href}) => (
    href.split('/')[1] === 'styles'
  ));
  const patterns = all.filter(({href}) => (
    href.split('/')[1] === 'patterns'
  ));
  const accessibility = all.filter(({href}) => (
    href.split('/')[1] === 'accessibility'
  ));
  const getInvolved = all.filter(({href}) => (
    href.split('/')[1] === 'get-involved'
  ));

  // Group all component pages (not included in automatic index so no need to remove)
  const components = Object.keys(stories).map(v => ({
    href: `/components?name=${encodeURIComponent(stories[v].default.title)}`,
    text: v
  })).sort(compare);

  // Manually remove pages we don't want to show in the sitemap
  const hidden = [
    ...getStarted.splice(getStarted.indexOf(getStarted.find(element => element.text === "Get started")), 1),
    ...getStarted.splice(getStarted.indexOf(getStarted.find(element => element.text === "Production")), 1),
    ...styles.splice(styles.indexOf(styles.find(element => element.text === "Styles")), 1),
    ...components.splice(components.indexOf(components.find(element => element.text === "Components")), 1),
    ...patterns.splice(patterns.indexOf(patterns.find(element => element.text === "Patterns")), 1),
    ...accessibility.splice(accessibility.indexOf(accessibility.find(element => element.text === "Accessibility")), 1),
    ...accessibility.splice(accessibility.indexOf(accessibility.find(element => element.text === "xxx")), 1),
    ...getInvolved.splice(getInvolved.indexOf(getInvolved.find(element => element.text === "Get involved")), 1),
    ...footer.splice(footer.indexOf(footer.find(element => element.text === "Cookies")), 1),
    ...footer.splice(footer.indexOf(footer.find(element => element.text === "Components")), 1),
  ];

  const getStartedMain = getStarted.filter(({href}) => (
    href.split('/')[2] === undefined
  ))[0];
  const stylesMain = styles.filter(({href}) => (
    href.split('/')[2] === undefined
  ))[0];
  const patternsMain = patterns.filter(({href}) => (
    href.split('/')[2] === undefined
  ))[0];
  const accessibilityMain = accessibility.filter(({href}) => (
    href.split('/')[2] === undefined
  ))[0];
  const getInvolvedMain = getInvolved.filter(({href}) => (
    href.split('/')[2] === undefined
  ))[0];
  const componentsMain = components.filter(({href}) => (
    href.split('/')[2] === undefined
  ))[0];

  const categorised = [
    ...getStarted,
    ...styles,
    ...patterns,
    ...accessibility,
    ...getInvolved,
    ...components,
    ...hidden
  ];

  const footer = all.filter(e => !categorised.includes(e)).sort(compare);

  return (
    <Fragment>
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <h2><A href={getStartedMain.href}>{getStartedMain.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={getStarted} />
      <h2><A href={stylesMain.href}>{stylesMain.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={styles} />
      <h2><A href={componentsMain.href}>{componentsMain.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={components} />
      <h2><A href={patternsMain.href}>{patternsMain.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={patterns} />
      <h2><A href={accessibilityMain.href}>{accessibilityMain.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={accessibility} />
      <h2><A href={getInvolvedMain.href}>{getInvolvedMain.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={getInvolved} />
      <h2>Footer</h2>
      <AnchorList classBlock="govuk-list" items={footer} />
    </Fragment>

  );
};

export default Page;
