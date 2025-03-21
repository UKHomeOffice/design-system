import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/accessibility-statement.md';

import { PageWrap } from './';

export const title = 'Accessibility Statement';
const description = 'The accessibility statement of the Home Office Design System'

const Page: FC<PageProps> = props => (
  <PageWrap>
  <Fragment>
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <Markdown />
  </Fragment>
  </PageWrap>
);

export default Page;
