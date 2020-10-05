import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';



const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
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
