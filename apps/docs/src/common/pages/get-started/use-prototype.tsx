import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
const applyPrototype3 = require('../../../../assets/images/prototype-screen03.png').default;
const applyPrototype4 = require('../../../../assets/images/prototype-screen04.png').default;
const applyPrototype5 = require('../../../../assets/images/prototype-screen05.png').default;

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Guidance on Home Office Design System</title>
      <meta name="og:article:section" content="Resources" />
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
        <span className="caption">Prototyping</span>
        Using the components
      </h1>
        <p>There are two ways to use components. You can either copy the code from the HTML or React tabs. </p>

        <div className="govuk-inset-text">
        React is more powerful and maintainable and production code should
        make use of it over HTML.
        </div>

      <h2>Using HTML</h2>
        <p>1. Copy the HTML code</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype3} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="HTML code displayed for status banner"/>
          </div>
        </div>
        <p></p>
        <p>2. Open up your prototype in a text editor like Atom. Find the <code>index.tsx</code> file in <code>src/common/pages/index.tsx</code> and paste the code between the <code>fragment</code>  tags. Save your changes.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <img  src={applyPrototype4} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Text editor screen with a highlight around where example code snippet should sit"/>
          </div>
        </div>
        <p></p>
        <p>3. Go to <A href="http://localhost:8080/">http://localhost:8080/</A> and you will see the changes update automatically in your local web browser.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <img  src={applyPrototype5} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Local web browser displaying properly coded status banner"/>
          </div>
        </div>

    </div>
  </div>
);

export default Page;
export const title = 'Get started';
