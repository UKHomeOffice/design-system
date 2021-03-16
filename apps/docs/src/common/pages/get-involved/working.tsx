import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Design system working group - Home Office Design System</title>
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
      <h1 className="govuk-heading-l">Design system working group</h1>

          <p>The Home Office design system working group meets once a month to discuss ways to develop and improve the Home Office design system.</p>

          <p>The working group also helps support new design proposals, and encourage the communities to <A href="/getinvolved/propose">get involved and contribute.</A></p>

          <p>It is a cross-functional team made up of interaction and content design, user research, accessibility, and front-end development.</p>

          <p>You can contact the working group on the Home Office #ho-design-system slack channel, or email the design system working group on <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>.</p>
    </div>
  </div>
);

export default Page;
export const title = 'Get involved';
