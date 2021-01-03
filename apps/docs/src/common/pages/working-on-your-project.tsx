import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/working-on-your-project.md';

const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>Working on your project - Home Office Design System</title>
      <meta name="og:article:section" content="Get started" />
    </Helmet>
    <span className="govuk-caption-xl">Get started</span>
    <Markdown />
  </Fragment>
);

export default Page;
export const title = 'Working on your project';
