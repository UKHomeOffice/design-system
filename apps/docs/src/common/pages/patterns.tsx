import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Patterns - Home Office Design System</title>
      <meta name="og:article:section" content="Patterns" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[

        {
          href: '/patterns/access-a-service',
          text: 'Access a service'
        },
        {
          href: '/patterns/add-multiple-things',
          text: 'Add multiple things'
        },
        {
          href: '/patterns/find-information-on-document',
          text: 'Find information on a document'
        },
        {
          href: '/patterns/get-more-details',
          text: 'Get more details'
        },
        {
          href: '/patterns/leave-a-service',
          text: 'Leave a service'
        },
        {
          href: '/patterns/stop-a-service-timing-out',
          text: 'Stop a service timing out'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>Patterns</h1>
      <p>Patterns are guidance on how to solve certain types of problems. They include
      examples of successful approaches but are flexible and don’t prescribe exact design solutions.</p>
      <p>These patterns extend those used across Government in the <A href="https://design-system.service.gov.uk/">GOV.UK
      design system</A>.
      As our patterns mature, we will look to contribute them to the GOV.UK system so they can be used more widely.</p>
    </div>
  </div>
);

export default Page;
export const title = 'Patterns';
