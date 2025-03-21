import { FC, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

export const title = 'Page structure';
const longTitle = title;
const description = 'Accessibility concerns regarding page structure';
const siteTitle = config.title;

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <NavigationMenu items={[
        {
          href: '/accessibility/page-structure/headings',
          text: 'Headings'
        },
        {
          href: '/accessibility/page-structure/layout-typography',
          text: 'Layout and typography'
        },
        {
          href: '/accessibility/page-structure/links',
          text: 'Links'
        },
        {
          href: '/accessibility/page-structure/lists',
          text: 'Lists'
        },
        {
          href: '/accessibility/page-structure/navigation',
          text: 'Navigation'
        },
        {
          href: '/accessibility/page-structure/tables',
          text: 'Tables'
        }
      ]} />
    }>
      {children}
    </Subsection>
  </SectionWrap>
);

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{section}</span>
      {longTitle}
    </h1>
    <p>CONTENT PLACEHOLDER</p>
  </SubsectionWrap>
);

export default Page;
