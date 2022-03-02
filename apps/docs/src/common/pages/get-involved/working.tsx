import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-involved';

export const title = 'Design system working group';
const description = 'The Home Office design system working group meets once a month to discuss ways to develop and improve the Home Office design system';
const section = 'Get involved';

const Page: FC<PageProps> = ({ location }) => (
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

          <p>The Home Office design system working group meets once a month to discuss ways to develop and improve the Home Office design system.</p>

          <p>The working group also helps support new design proposals, and encourage the communities to <a href="/get-involved/suggest">get involved and contribute.</a></p>

          <p>It is a cross-functional team made up of interaction and content design, user research, accessibility, and front-end development.</p>

          <p>You can contact the working group on the Home Office #ho-design-system slack channel, or email the design system working group on <a href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</a>.</p>
    </div>
  </div>
);

export default Page;
