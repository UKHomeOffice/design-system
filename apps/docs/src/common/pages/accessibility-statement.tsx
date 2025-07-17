import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/accessibility-statement.md';

export const title = 'Accessibility Statement';
const description = 'The accessibility statement of the Home Office Design System'

const Page: FC<PageProps> = props => (
  <div className="hods-width-container">
    <main id="main-content">
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <Markdown />
    </main>
  </div>
);

export default Page;
