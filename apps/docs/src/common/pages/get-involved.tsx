import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Get involved - Home Office Design System</title>
      <meta name="og:article:section" content="Get involved" />
    </Helmet>
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Get involved</h2>
        <ul className="plain">
        <li><A href="/get-involved/working">Working group</A></li>
        <li><A href="/get-involved/backlog">Backlog</A></li>
        <li><A href="/get-involved/suggest">Suggest new ideas</A></li>
        <li><A href="/get-involved/githubguide">Using GitHub to propose design system changes</A></li>
        <li><A href="/get-involved/proving">Proving ideas work</A></li>
        <li><A href="/get-involved/using">Using the system</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
    <h1 className="heading-section">Get involved</h1>

          <p>This design system is for everyone. Its purpose is to extend the <A href="https://design-system.service.gov.uk/">GOV.UK Design System</A> with work specific to the Home Office.</p>
          <p>Patterns or components that have a wider use will be contributed to the GOV.UK Design System so they can be used by delivery teams across government.</p>

          <p>Find out more in this section about how you can contribute ideas and get involved with the Home Office design system. </p>
    </div>
  </div>
);

export default Page;
export const title = 'Get involved';
