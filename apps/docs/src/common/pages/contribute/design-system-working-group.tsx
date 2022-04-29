import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../contribute';

export const title = 'Join the design system working group';
const description = 'The governance of the design system';
const section = 'Contribute';

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
        {title}
      </h1>
      <p>The Home Office design system working group meets once a month to discuss ways to develop and improve the Home Office design system.</p>
      <p>The working group reviews new contributions. They may decide that something else meets the need better.</p>
      <p>The working group also supports new design proposals, and encourages the community to <a href="/contribute/discuss-on-github">discuss on github</a>.</p>
      <p>It is a cross-functional team made up of interaction and content design, user research, accessibility, and front-end development.</p>
      <p>You can contact the working group:</p>
      <ul>
        <li>on the Home Office #ho-design-system slack channel</li>
        <li>by email at <a href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</a></li>
      </ul>
    </div>
  </div>
);

export default Page;
