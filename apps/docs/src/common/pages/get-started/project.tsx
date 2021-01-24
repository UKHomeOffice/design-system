import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';



const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Prototyping - Home Office Design System</title>
      <meta name="og:article:section" content="Get started" />
    </Helmet>
    <div className="govuk-grid-column-one-third">
      <aside>
      <h2>Prototyping</h2>
        <ul className="plain">
          <li><A href="/get-started/start-prototype">Starting a new prototype</A></li>
          <li><A href="/get-started/use-prototype">Using the components</A></li>
          <li><A href="/get-started/deploy-prototype">Deploying</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
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
