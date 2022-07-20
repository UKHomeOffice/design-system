import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Building your prototype';
const description = 'How to build your prototype';
const section = 'Get started';
const subsection = 'Prototyping';

const applyPrototype3 = require('../../../../assets/images/prototype-screen03.png');
const applyPrototype4 = require('../../../../assets/images/prototype-screen04html.png');
const applyPrototype5 = require('../../../../assets/images/prototype-screen05.png');
const applyPrototype6 = require('../../../../assets/images/prototype-screen07.png');
const applyPrototype8 = require('../../../../assets/images/prototype-screen08.png');
const applyPrototype9 = require('../../../../assets/images/prototype-screen09.png');


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
      {menu}
    </div>

    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      <p>In Atom, select <strong>File</strong> then <strong>Open</strong>. Then select your prototype folder.</p>

      <h2>Overview of folders in your prototype</h2>
      <ul>
        <li><code>/common</code> is for your work. Inside that folder:</li>
        <li><code>page-wrap.tsx</code> is where you change your service name and update your header and footer links </li>
        <li><code>pages</code> is for HTML or React pages</li>
        </ul>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype9} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Text editor screen showing prototype file structure"/>
          </div>
        </div>
        <br />

      <h2>Create and modify pages</h2>
        <p>You can use both HTML (<code>.html</code>) and React (<code>.tsx</code>) to build your prototype. If you are more comfortable using HTML, enter in terminal:</p>
        <ul>
          <li><code>npm run create:page</code></li>
          <li>answer the prompts to choose either HTML or React</li>
          <li>edit the new page to suit you</li>
          </ul>

        <div className="govuk-inset-text">
        Remove <code>index.tsx</code> from your prototype as having both .tsx and .html with the same index name will create problems in your prototype.
        </div>

      <h3>Change the service name</h3>
          <ol>
            <li>open <code>page-wrap.tsx</code> from the <code>pages</code> folder.</li>
            <li>find <code>title="My new service"</code> and change that to your new service name. Press <strong>Cmd+S</strong> to save your changes.</li>
            <li>check <A href="http://localhost:8080">http://localhost:8080</A> to preview the changes</li>
          </ol>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <img  src={applyPrototype6} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Text editor screen showing changes in code for updating navigation and footer"/>
            </div>
          </div>
          <br />

          <h3>Update the sub-navigation and footer links</h3>
          <ol>
            <li>open <code>page-wrap.tsx</code> from the <code>pages</code> folder.</li>
            <li>replace <code>navigation</code> with new sub-navigation and footer links. Press <strong>Cmd+S</strong> to save your changes.</li>
            <li>check <A href="http://localhost:8080">http://localhost:8080</A> to preview the changes</li>
          </ol>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
            <img  src={applyPrototype8} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Text editor screen with a highlight around where service name could be updated"/>
            </div>
          </div>
          <br />

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
        </div>
    </div>
  </div>
);

export default Page;
