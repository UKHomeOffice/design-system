import { FC, Fragment, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Section } from '@hods/ucdm-section';
import config from '../../config';

import { PageWrap } from '../ucdm';

export const title = 'Accessibility';
const longTitle = title;
const description = 'Information on how to ensure your service is accessible'
const siteTitle = config.title;

export const SectionWrap: FC<{ children?: ReactNode, showBanner?: boolean }> = ({ children, showBanner }) => (
  <PageWrap>
    <Section title={title} href="/accessibility/index-new" showBanner={showBanner} navigation={[
      { href: '/accessibility/page-structure', text: 'Page structure' },
      { href: '/accessibility/interactivity', text: 'Interactivity' },
      { href: '/accessibility/written-content', text: 'Written content' },
      { href: '/accessibility/providing-alternatives', text: 'Providing alternatives' },
      { href: '/accessibility/resources/index-new', text: 'Resources' }
    ]}>
      {children}
    </Section>
  </PageWrap>
);

const Page: FC<PageProps> = () => (
  <SectionWrap showBanner>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={longTitle} />
      <meta name="og:description" content={description} />
    </Helmet>
    <main id="main-content" role="main">
      <h1>{longTitle}</h1>
      <p>Accessibility means making your website, app or service usable by as many people as possible,
        regardless of specific access needs.</p>
      <p>Making something accessible improves everyone’s ability to use a service, which is affected by
        different needs and circumstances such as location, health and equipment.</p>
      <p>Delivering accessible and inclusive services is also in line with government standards and our legal
        responsibilities for equality and accessibility.</p>
      <p>In order to provide consistency for users and product teams, we’ve developed a <A href="/accessibility/resources/standard">Home Office Accessibility Standard</A> that closely aligns to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA but simplifies and focuses on the areas most likely to present challenges for Home Office users.</p>
    </main>
  </SectionWrap>
);

export default Page;
