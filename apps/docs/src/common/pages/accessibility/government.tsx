import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Guidance on GOV.UK - Home Office Design System</title>
      <meta name="og:article:section" content="Resources" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/resources/accessibility',
          text: 'Accessibility'
        },
        {
          href: '/resources/government',
          text: 'GOV.UK'
        },
        {
          href: '/resources/prototyping',
          text: 'Prototyping'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Resources</span>
        Guidance on GOV.UK
      </h1>
      <p>Resources available across government.</p>
      <ul className="plain">
        <li><A href="https://design-system.service.gov.uk/">GOV.UK design system</A></li>
        <li><A href="https://www.gov.uk/guidance/government-design-principles">GOV.UK design principles</A></li>
        <li><A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK content style guide</A></li>
        <li><A href="https://www.gov.uk/service-manual">GOV.UK service manual</A></li>
      </ul>


    </div>
  </div>
);

export default Page;
export const title = 'Resources';
