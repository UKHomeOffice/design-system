import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';

const siteTitle = config.title;

export const title = 'Patterns';
const longTitle = title;
const description = 'Patterns are best practice design solutions for specific user-focused tasks and page types';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>
      Patterns are guidance on how to solve certain types of problems. They
      include examples of successful approaches but are flexible and don’t
      prescribe exact design solutions.
    </p>
    <p>
      These patterns extend those used across government in the
      <A href="https://design-system.service.gov.uk/">GOV.UK design system</A>.
      As our patterns mature, we will look to contribute them to the GOV.UK
      system so they can be used more widely.
    </p>
  </SubsectionWrap>
);

export default Page;
