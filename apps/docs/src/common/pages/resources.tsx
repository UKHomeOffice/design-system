import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Resources - Home Office Design System</title>
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
      <h1>Resources</h1>
      <p>A collection of resources to help teams design and build services in Government.</p>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-three-quarters">
          <p>Resources cover:</p>
          <ul>
            <li>how to design and build <A href="/resources/accessibility">accessible</A> services</li>
            <li>helpful resources from across <A href="/resources/government">government</A></li>
            <li>tools to help build <A href="/resources/prototyping">prototypes</A></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
export const title = 'Resources';
