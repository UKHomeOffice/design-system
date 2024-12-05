import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

export const title = 'Resources';
const longTitle = 'Accessibility resources';
const description = 'Resources and further guidance for accessibility';
export const section = 'Accessibility';

const Page: FC<PageProps> = () => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{longTitle} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={longTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1>
      <span className="caption">Accessibility</span>
      Resources
    </h1>
    <h2>
      Guidance
    </h2>
    <ul className="plain">
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">GOV.UK Service Manual - Accessibility and assisted digital</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">Understanding disabilities and impairments: user profiles</A></li>
    </ul>

    <h2>
      Tools
    </h2>
    <p>Dos and don'ts for designing accessible services - available as <A href="https://ukhomeoffice.github.io/accessibility-posters/">web pages</A> and <A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility/dos-donts">downloadable posters</A></p>


    <h2>
      Further reading
    </h2>
    <ul className="plain">
      <li><A href="https://hodigital.blog.gov.uk/category/accessibility/">Home Office Digital, Data and Technology blog - Accessibility</A></li>
      <li><A href="https://accessibility.blog.gov.uk/">Accessibility in government blog</A></li>
    </ul>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>

    </div>
  </div>
);

export default Page;
