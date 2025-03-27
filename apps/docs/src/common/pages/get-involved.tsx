import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { PageWrap } from './';

export const menu = (
  <Fragment>
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
        href: '/get-involved/contribution',
        text: 'Contribution criteria'
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
  </Fragment>
);

export const title = 'Get involved';
const description = 'How to get involved and contribute to the Home Office Design System'

const Page: FC<PageProps> = () => (
  <PageWrap>
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1 className="heading-section">Get involved</h1>

          <p>This design system is for everyone. Its purpose is to extend the <A href="https://design-system.service.gov.uk/">GOV.UK Design System</A> with work specific to the Home Office.</p>
          <p>Patterns or components that have a wider use will be contributed to the GOV.UK Design System so they can be used by delivery teams across government.</p>

          <p>Find out more in this section about how you can contribute ideas and get involved with the Home Office design system. </p>
    </div>
  </div>
  </PageWrap>
);

export default Page;
