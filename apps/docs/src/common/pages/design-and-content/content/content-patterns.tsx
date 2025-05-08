import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';
import Markdown from '../../../../../../../docs/design-and-content/content/content-patterns.md';

const siteTitle = config.title;

export const title = 'Content patterns';
const longTitle = title;
const description = longTitle;

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <span className="govuk-caption-xl">{subsection}</span>
    <Markdown />
  </SubsectionWrap>
);

export default Page;
