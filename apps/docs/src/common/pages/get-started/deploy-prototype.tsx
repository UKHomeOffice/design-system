import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Guidance on Home Office Design System</title>
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
          text: 'Using the components'
        },
        {
          href: '/get-started/deploy-prototype',
          text: 'Deploying'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Prototyping</span>
        Deploying your prototype
      </h1>
      <p>PLACEHOLDER</p>


    </div>
  </div>
);

export default Page;
export const title = 'Get started';
