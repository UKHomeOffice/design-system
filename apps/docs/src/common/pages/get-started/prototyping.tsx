import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyPrototype1 = require('../../../../assets/images/prototype-screen01.png').default;
const applyPrototype2 = require('../../../../assets/images/prototype-screen02.png').default;

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Guidance on Home Office Design System</title>
      <meta name="og:article:section" content="Get started" />
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
        <span className="caption">Setup guides</span>
        Prototyping
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
export const title = 'Starting a new prototype';
