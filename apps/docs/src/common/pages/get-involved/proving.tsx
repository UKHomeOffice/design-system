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

    <h1 className="govuk-heading-l">Proving a pattern or component works</h1>
          <p>The working group review new contributions. They may decide that something else meets the need better. If the working group agree that a pattern or component is needed, it will move through the following stages:</p>

          <h2 className="govuk-heading-m">Experimental</h2>
          <p>We've seen this problem in an area and it's being peer reviewed by the team and iterated upon. It may change a lot in Experimental. Teams are free to use it in their own prototypes. Please report back any research findings. It should not be used in production.</p>
          <p>Components and patterns in Experimental will be regularly reviewed by the working group.</p>

          <h2 className="govuk-heading-m">Recommended</h2>
          <p>We've seen this pattern or component work consistently in testing and are recommending its use. There will also be evidence of user research to support this.</p>
          <p>If you've found a user need and this pattern or component meets it, use this version. On occasion we may recommend a pattern or component due to the need for consistency.</p>
    </div>
  </div>
);

export default Page;
export const title = 'Get involved';
