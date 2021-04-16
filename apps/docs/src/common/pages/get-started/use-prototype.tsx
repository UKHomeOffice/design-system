import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyPrototype3 = require('../../../../assets/images/prototype-screen03.png').default;
const applyPrototype4 = require('../../../../assets/images/prototype-screen04html.png').default;
const applyPrototype5 = require('../../../../assets/images/prototype-screen05.png').default;
const applyPrototype6 = require('../../../../assets/images/prototype-screen07.png').default;

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
        <span className="caption">Prototyping</span>
        Building your prototype
      </h1>
      <p>In Atom, select <strong>File</strong> then <strong>Open</strong>. Then select your prototype folder.</p>

      <h2>Overview of folders in your prototype</h2>
      <ul>
        <li><code>/common</code> is for your work. Inside that folder:</li>
        <li><code>page-wrap.tsx</code> is where you change your service name and update your header and footer links </li>
        <li><code>pages</code> is for HTML or React pages</li>
        </ul>

      <h2>Create and modify pages</h2>
        <p>You can use both HTML (<code>.html</code>) and React (<code>.tsx</code>) to build your prototype. If you are more comfortable using HTML, rename <code>index.tsx</code> to <code>index.html</code> from the <code>pages</code> folder.</p>

        <div className="govuk-inset-text">
        Do not make a copy of the index.tsx as having both .tsx and .html with the same index name will create problems in your prototype.
        </div>

      <h3>Change the service name</h3>

          1. open <code>page-wrap.tsx</code> from the <code>pages</code> folder.<br />
          2. find <code>title="My new service"</code> and change that to your new service name. Press <strong>Cmd+S</strong> to save your changes.<br />
          3. check <A href="http://localhost:8080">http://localhost:8080</A> to preview the changes<br /><br />

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
            <img  src={applyPrototype6} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Text editor screen with a highlight around where service name could be updated"/>
            </div>
          </div>
          <p></p>

        <h2>Using components</h2>
            <p>There are several ways to use components in your prototype:</p>
            <ul>
            <li>copy the code from the HTML or React tabs in the design system</li>
             <li>copy the code from GOV.UK design system (HTML only, not Nunjucks)</li></ul>

            <div className="govuk-inset-text">
            Currently, if you are using any components that contains javascript (like tabs or accordions) we advise you use the React code as the functionality will work much better. The files must be saved as .tsx files.
            </div>

      <h3>Using HTML</h3>
        <p>1. Copy the HTML code</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype3} className="confirm-desktop" style={{maxHeight: "100%"}} alt="HTML code displayed for status banner"/>
          </div>
        </div>
        <p></p>
        <p>2. Open your prototype in Atom and find <code>index.html</code>. Delete the contents of the file and paste in any HTML code you want to use between the <code>fragment</code> tags. Save your changes.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <img  src={applyPrototype4} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Text editor screen with a highlight around where example code snippet should sit"/>
          </div>
        </div>
        <p></p>
        <p>3. Go to <A href="http://localhost:8080/">http://localhost:8080/</A> and you will see the changes update automatically in your local web browser.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <img  src={applyPrototype5} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Local web browser displaying properly coded status banner"/>
          </div>
        </div><br /><br />
        <div><A href="/get-started/deploy-prototype">Next: Deploying your prototype</A></div>
    </div>
  </div>
);

export default Page;
export const title = 'Building your prototype';
