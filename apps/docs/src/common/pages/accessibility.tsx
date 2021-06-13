import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Accessibility';
const description = 'Information on how to ensure your service is accessible'

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/links',
          text: 'Links'
        },
        {
          href: '/accessibility/resources',
          text: 'Resources'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>Accessibility</h1>
      <p>Accessibility means making your website, app or service usable by as many people as possible,
      regardless of specific access needs.</p>
      <p>Making something accessible improves everyone’s ability to use a service, which is affected by
      different needs and circumstances such as location, health and equipment.</p>
      <p>Delivering accessible and inclusive services is also in line with government standards and our legal
      responsibilities for equality and accessibility.</p>
      <p>We will be adding more guidance in the coming weeks.</p>
    </div>
  </div>
);

export default Page;
