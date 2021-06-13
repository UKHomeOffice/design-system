import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Prototyping';
const description = 'How to prototype with the Home Office Design System';
const section = 'Get started';

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
      <NavigationMenu items={[
        {
          href: '/get-started/prototyping',
          text: 'Prototyping'
        },
        {
          href: '/get-started/design-assets',
          text: 'Design assets'
        }
      ]} />
    </div>

    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>

      <ul className="plain">
        <li><A href="/get-started/start-prototype">Starting a new prototype</A></li>
        <li><A href="/get-started/use-prototype">Building your prototype</A></li>
        <li><A href="/get-started/deploy-prototype">Deploying your prototype</A></li>
      </ul>
    </div>

  </div>
);

export default Page;
