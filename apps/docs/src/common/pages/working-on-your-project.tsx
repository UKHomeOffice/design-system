import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';

import { PageWrap } from './';

import Markdown from '../../../../../docs/working-on-your-project.md';

export const title = 'Working on your project';
const description = 'How to work on your HODS-based project';
const section = 'Get started';

const Page: FC<PageProps> = props => (
  <PageWrap>
  <Fragment>
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <span className="govuk-caption-xl">Get started</span>
    <Markdown />
  </Fragment>
  </PageWrap>
);

export default Page;
