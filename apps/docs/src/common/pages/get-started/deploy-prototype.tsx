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
          text: 'Using your prototype'
        },
        {
          href: '/get-started/deploy-prototype',
          text: 'Deploying your prototype'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Prototyping</span>
        Deploying your prototype
      </h1>
      <p>One of the ways you can deploy, or publish and share your prototype with others, is through Heroku.</p>

      <div className="govuk-inset-text">
      Do not enter real user data into prototypes hosted on Heroku. If your prototype stores or collects user data, talk to a security professional about appropriate security steps you must take.
      </div>

      <p>Placeholder </p>
    </div>
  </div>
);

export default Page;
export const title = 'Deploying your prototype';
