import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

export const title = 'Resources';
const longTitle = 'Accessibility resources';
const description = 'Resources and further guidance for accessibility';
export const section = 'Accessibility';

const Page: FC<PageProps> = ({ location }) => (
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
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">Helping people to use your service</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Testing for accessibility</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">User profiles for understanding disabilities and impairments</A></li>
    </ul>
    <h2>Checklists</h2>
    <ul className="plain">
    <li><A href="https://www.w3.org/WAI/test-evaluate/preliminary/">Easy checks – a first review of web accessibility</A></li>
      <li><A href="https://www.a11yproject.com/checklist/">The A11Y Project Checklist</A></li>
    </ul>

    <h2>
      Tools
    </h2>
    <ul className="plain">
    <li>Dos and don'ts for designing accessible services
    <br />- available as <A href="https://ukhomeoffice.github.io/accessibility-posters/">web pages</A> and <A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility/dos-donts">downloadable posters</A></li>
    <li><A href="https://www.tpgi.com/color-contrast-checker/">Colour Contrast Analyser (CCA)</A></li>
    <li><A href="https://www.ssa.gov/accessibility/andi/help/install.html">ANDI - Accessibility Testing Tool</A></li>
    </ul>


    <h2>
      Further reading
    </h2>
    <ul className="plain">
      <li><A href="https://accessibility.blog.gov.uk/">Accessibility in government blog</A></li>
      <li><A href="https://www.digitala11y.com/digital-accessibility-courses-roundup/">Free and paid accessibility courses</A></li>
      <li><A href="https://www.digitala11y.com/digital-accessibility-newsletters-roundup/">Accessibility newsletters</A></li>
      <li><A href="https://www.digitala11y.com/web-accessibility-podcasts-rountup/">Accessibility podcasts</A></li>
      <li><A href="https://www.a11yproject.com/resources/">Other accessibility resources</A></li>
    </ul>

    <div className="contact-us">
      <h2 className="govuk-heading-m">Get in touch</h2>
      <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <a href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</a>.</p>
    </div>

    </div>
  </div>
);

export default Page;
