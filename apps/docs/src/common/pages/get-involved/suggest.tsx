import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-involved';

import { PageWrap } from '../';

export const title = 'Suggest a new pattern or component';
const description = 'How to propose a new pattern of component should be included in the Home Office Design System'
const section = 'Get involved';

const Page: FC<PageProps> = () => (
  <PageWrap>
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>
          <p>Anyone can suggest adding a new component or pattern to the Home Office design system.</p>

          <h2 className="govuk-heading-m">1. Check the backlog</h2>
          <p>Check if the pattern or component is already on the <A href="https://github.com/UKHomeOffice/design-system/projects/1">backlog</A>. If it is, feel free to comment and post screenshots of your example. Tell the working group if you want to contribute to it.</p>

          <h2 className="govuk-heading-m">2. Share the work</h2>
          <p>Talk about the pattern or component to the community. Share your work, as other teams might be working on the same thing. Gather feedback and examples from the community.</p>

          <h2 className="govuk-heading-m">3. Raise a new issue</h2>
          <p>If your idea is not on the backlog, <A href="https://github.com/UKHomeOffice/design-system/issues">raise an issue in Github</A>. You can use our <A href="/get-involved/githubguide">Github guide</A> to help you do this, or get in touch with <A href="mailto:design@digital.homeoffice.gov.uk">the working group</A>.</p>
          <p> The working group will get in touch to discuss your proposal.</p>
          <p>When raising an issue, explain why you think it should be included in the design system. You can also include screenshots and research notes.</p>

    </div>
  </div>
  </PageWrap>
);

export default Page;
