import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { A } from '@not-govuk/components';
import { componentLinks } from '../stories';

import { PageWrap } from './';

export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

type Route = {
  href: string
  title: string
};

type Link = {
  href: string
  text: string
};

const Page: FC<PageProps> = ({ routes }) => {

  const compare = (a: Link, b: Link) => (
    a.text > b.text
      ? 1
      : -1
  );

  // Create automatic site index & section arrays
  const all: Link[] = routes.map((e: Route) => ({ href: e.href, text: e.title })).sort(compare);

  const getStarted = all.filter(({href, text}) => (
    href.split('/')[1] === 'get-started' && href.split('/')[2] !== undefined && text !== 'Production'
  ));
  const styles = all.filter(({href}) => (
    href.split('/')[1] === 'styles' && href.split('/')[2] !== undefined
  ));
  const patterns = all.filter(({href}) => (
    href.split('/')[1] === 'patterns' && href.split('/')[2] !== undefined
  ));
  const accessibility = all.filter(({href, text}) => (
    href.split('/')[1] === 'accessibility' && href.split('/')[2] !== undefined && text !== 'xxx'
  ));
  const contribute = all.filter(({href}) => (
    href.split('/')[1] === 'contribute' && href.split('/')[2] !== undefined
  ));

  // Group all component pages (not included in automatic index so no need to remove)
  const components = componentLinks.sort(compare);

  // Manually remove pages we don't want to show in the sitemap
  const hidden = [
    ...all.filter(({href}) => href === '/sitemap'),
    ...all.filter(({text}) => text === 'Production'),
    ...all.filter(({text}) => text === 'xxx'),
    ...all.filter(({text}) => text === 'Cookies')
  ];

  const getStartedHeader = all.filter(({href}) => ( href === '/get-started' ))[0];
  const stylesHeader = all.filter(({href}) => ( href === '/styles' ))[0];
  const patternsHeader = all.filter(({href}) => ( href === '/patterns' ))[0];
  const accessibilityHeader = all.filter(({href}) => ( href === '/accessibility' ))[0];
  const contributeHeader = all.filter(({href}) => ( href === '/contribute' ))[0];
  const componentsHeader = all.filter(({href}) => ( href === '/components' ))[0];

  const headerPages = [
    getStartedHeader,
    stylesHeader,
    patternsHeader,
    accessibilityHeader,
    contributeHeader,
    componentsHeader
  ];

  const categorised = [
    ...getStarted,
    ...styles,
    ...patterns,
    ...accessibility,
    ...contribute,
    ...components,
    ...headerPages,
    ...hidden
  ];

  const footer = all.filter(e => !categorised.includes(e));

  return (
    <PageWrap>
    <Fragment>
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <h2><A href={getStartedHeader.href}>{getStartedHeader.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={getStarted} />
      <h2><A href={stylesHeader.href}>{stylesHeader.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={styles} />
      <h2><A href={componentsHeader.href}>{componentsHeader.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={components} />
      <h2><A href={patternsHeader.href}>{patternsHeader.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={patterns} />
      <h2><A href={accessibilityHeader.href}>{accessibilityHeader.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={accessibility} />
      <h2><A href={contributeHeader.href}>{contributeHeader.text}</A></h2>
      <AnchorList classBlock="govuk-list" items={contribute} />
      <h2>Footer</h2>
      <AnchorList classBlock="govuk-list" items={footer} />
    </Fragment>
    </PageWrap>
  );
};

export default Page;
