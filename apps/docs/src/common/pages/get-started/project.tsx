import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Prototyping - Home Office Design System</title>
      <meta name="og:article:section" content="Get started" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/get-started/start-prototype',
          text: 'Starting a new prototype'
        },
        {
          href: '/get-started/use-prototype',
          text: 'Building your prototype'
        },
        {
          href: '/get-started/deploy-prototype',
          text: 'Deploying your prototype'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Production</span>
        Starting a new project
      </h1>
      <p>PLACEHOLDER FOR CONTENT</p>



    </div>
  </div>
);

export default Page;
export const title = 'Get started';
