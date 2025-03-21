import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { NavigationMenu } from '@not-govuk/components';

import { content } from './design-and-content/content/content-style-guide';
import { PageWrap } from './';

export const title = 'Content style guide';
const description = 'How to write content for Home Office services.';

export const menu = (
  <Fragment>

    <NavigationMenu items={[
      {
        href: '/accessibility/inclusive-language',
        text: 'Inclusive language'
      },
      {
        href: '/accessibility/readability',
        text: 'Readability'
      },
      {
        href: '/content-style-guide/designing-for-limited-english',
        text: 'Designing for users with limited English'
      },
      {
        href: '/content-style-guide/voice-and-tone',
        text: 'Voice and tone'
      }
    ]} />
  </Fragment>
);

const Page: FC<PageProps> = () => (
  <PageWrap>
    <Fragment>
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:article:section" content={title} />
      </Helmet>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-quarter">
          {menu}
        </div>
        <div className="govuk-grid-column-three-quarters">
          <h1>{title}</h1>
          {content}
        </div>
      </div>
    </Fragment>
  </PageWrap>
);

export default Page;
