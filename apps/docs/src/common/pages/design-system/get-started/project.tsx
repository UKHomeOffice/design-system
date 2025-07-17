import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Production';
const longTitle = 'Starting a new project';
const description = 'How to start a new project';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{longTitle} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={longTitle} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>PLACEHOLDER FOR CONTENT</p>
  </SubsectionWrap>
);

export default Page;
