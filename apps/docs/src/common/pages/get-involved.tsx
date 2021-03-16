import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Get involved - Home Office Design System</title>
      <meta name="og:article:section" content="Get involved" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/get-involved/working',
          text: 'Working group'
        },
        {
          href: '/get-involved/backlog',
          text: 'Backlog'
        },
        {
          href: '/get-involved/suggest',
          text: 'Suggest new ideas'
        },
        {
          href: '/get-involved/githubguide',
          text: 'Using GitHub to propose design system changes'
        },
        {
          href: '/get-involved/proving',
          text: 'Proving ideas work'
        },
        {
          href: '/get-involved/using',
          text: 'Using the system'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1 className="heading-section">Get involved</h1>

          <p>This design system is for everyone. Its purpose is to extend the <A href="https://design-system.service.gov.uk/">GOV.UK Design System</A> with work specific to the Home Office.</p>
          <p>Patterns or components that have a wider use will be contributed to the GOV.UK Design System so they can be used by delivery teams across government.</p>

          <p>Find out more in this section about how you can contribute ideas and get involved with the Home Office design system. </p>
    </div>
  </div>
);

export default Page;
export const title = 'Get involved';
