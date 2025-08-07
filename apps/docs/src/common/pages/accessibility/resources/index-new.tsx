import { FC, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

export const title = 'Resources';
const longTitle = 'Accessibility resources';
const description = 'Resources and further guidance for accessibility';
const siteTitle = config.title;

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <NavigationMenu items={[
        {
          href: '/accessibility/resources/leaders-guide',
          text: 'Leader\'s guide to accessibility'
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

    <h2>Guidance</h2>
    <ul className="plain">
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">GOV.UK Service Manual - Accessibility and assisted digital</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">Understanding disabilities and impairments: user profiles</A></li>
    </ul>

    <h2>Tools</h2>
    <p>Dos and don'ts for designing accessible services - available as <A href="https://ukhomeoffice.github.io/accessibility-posters/">web pages</A> and <A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility/dos-donts">downloadable posters</A></p>

    <h2>Further reading</h2>
    <ul className="plain">
      <li><A href="https://hodigital.blog.gov.uk/category/accessibility/">Home Office Digital, Data and Technology blog - Accessibility</A></li>
      <li><A href="https://accessibility.blog.gov.uk/">Accessibility in government blog</A></li>
    </ul>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;
