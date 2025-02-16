import { FC, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

const siteTitle = config.title;

export const title = 'Content design';
const longTitle = title;
const description = 'How to write content for Home Office services.';

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <NavigationMenu items={[
        {
          href: '/design-and-content/content/content-style-guide',
          text: 'Content style guide'
        },
        {
          href: '/accessibility/written-content/inclusive-language',
          text: 'Inclusive language'
        },
        {
          href: '/accessibility/written-content/readability',
          text: 'Readability'
        },
        {
          href: '/design-and-content/content/designing-for-limited-english',
          text: 'Designing for users with limited English'
        },
        {
          href: '/design-and-content/content/voice-and-tone',
          text: 'Voice and tone'
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
    <p>CONTENT PLACEHOLDER.</p>
  </SubsectionWrap>
);

export default Page;
