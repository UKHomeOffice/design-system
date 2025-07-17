import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { A } from '@not-govuk/components';
import { componentLinksNew } from '../stories';
import config from '../config';

const siteTitle = config.title;

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

  const designSystem = all.filter(({href, text}) => (
    href.split('/')[1] === 'design-system' && href.split('/')[2] !== undefined && text !== 'Production'
  ));
  const accessibility = all.filter(({ href, text }) => (
    href.split('/')[1] === 'accessibility' && href.split('/')[2] !== undefined && text !== 'xxx'
  ));
  const designAndContent = all.filter(({href}) => (
    href.split('/')[1] === 'design-and-content' && href.split('/')[2] !== undefined
  ));
  const userResearch = all.filter(({href}) => (
    href.split('/')[1] === 'user-research' && href.split('/')[2] !== undefined
  ));
  const community = all.filter(({ href }) => (
    href.split('/')[1] === 'community' && href.split('/')[2] !== undefined
  ));

  // Group all component pages (not included in automatic index so no need to remove)
  const components = componentLinksNew.sort(compare);

  // Manually remove pages we don't want to show in the sitemap
  const hidden = [
    ...all.filter(({href}) => href === '/sitemap'),
    ...all.filter(({text}) => text === 'Production'),
    ...all.filter(({text}) => text === 'xxx'),
    ...all.filter(({text}) => text === 'Cookies')
  ];

  const designSystemHeader = all.filter(({href}) => ( href === '/design-system/' ))[0];
  const componentsHeader = all.filter(({ href }) => (href === '/design-system/components'))[0];
  const accessibilityHeader = all.filter(({ href }) => (href === '/accessibility/'))[0];
  const designAndContentHeader = all.filter(({ href }) => (href === '/design-and-content/'))[0];
  const userResearchHeader = all.filter(({ href }) => (href === '/user-research/'))[0];
  const communityHeader = all.filter(({href}) => ( href === '/community/' ))[0];

  const headerPages = [
    designSystemHeader,
    componentsHeader,
    accessibilityHeader,
    designAndContentHeader,
    userResearchHeader,
    communityHeader
  ];

  const categorised = [
    ...designSystem,
    ...components,
    ...accessibility,
    ...designAndContent,
    ...userResearch,
    ...community,
    ...headerPages,
    ...hidden
  ];

  const footer = all.filter(e => !categorised.includes(e));

  return (
    <div className="hods-width-container">
      <main id="main-content">
        <Helmet>
          <title>{title} - {siteTitle}</title>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
        </Helmet>
        <h1>{title}</h1>
        <h2><A href={designSystemHeader.href}>{designSystemHeader.text}</A></h2>
        <AnchorList classBlock="govuk-list" items={designSystem} />
        <h2><A href={componentsHeader.href}>{componentsHeader.text}</A></h2>
        <AnchorList classBlock="govuk-list" items={components} />
        <h2><A href={accessibilityHeader.href}>{accessibilityHeader.text}</A></h2>
        <AnchorList classBlock="govuk-list" items={accessibility} />
        <h2><A href={designAndContentHeader.href}>{designAndContentHeader.text}</A></h2>
        <AnchorList classBlock="govuk-list" items={designAndContent} />
        <h2><A href={userResearchHeader.href}>{userResearchHeader.text}</A></h2>
        <AnchorList classBlock="govuk-list" items={userResearch} />
        <h2><A href={communityHeader.href}>{communityHeader.text}</A></h2>
        <AnchorList classBlock="govuk-list" items={community} />
        <h2>Footer</h2>
        <AnchorList classBlock="govuk-list" items={footer} />
      </main>
    </div>
  );
};

export default Page;
