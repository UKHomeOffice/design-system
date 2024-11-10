import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Build your prototype';
const description = 'Build your prototype';
const section = 'Get started';
const subsection = 'Prototyping';

const applyPrototype3 = require('../../../../assets/images/prototype-screen03.png');
const applyPrototype4 = require('../../../../assets/images/prototype-screen04html.png');
const applyPrototype5 = require('../../../../assets/images/prototype-screen05.png');
const applyPrototype8 = require('../../../../assets/images/prototype-screen08.png');
const applyPrototype9 = require('../../../../assets/images/prototype-screen09.png');
const applyPrototype10 = require('../../../../assets/images/prototype-screen10.png');


const Page: FC<PageProps> = () => (
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
      <p><code>src/common</code> is for your work. You won't need to change any files outside of this folder.</p>
      <p>You can:</p>
      <ul>
        <li><A href="#update-service-name">update your service name</A></li>
        <li><A href="#create-or-modify-a-page">create or modify a page</A></li>
        <li><A href="#update-navigation">update navigation</A></li>
        <li><A href="#add-a-component">add a component</A></li>
      </ul>

      <h2 id="update-service-name">Update service name</h2>

        <ol>
          <li>Open <code>src/common/page-wrap.tsx</code>.
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
              <img  src={applyPrototype9} className="app-instruction" style={{maxHeight: "100%"}} alt="Text editor screen showing prototype file structure"/>
              </div>
            </div>
          </li>
          <li>Find the <code>Page</code> React element.</li>
          <li>Add a new line before <code>title</code>.</li>
          <li>On that line add <code>serviceName="My service name"</code>. To look like:
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
              <img  src={applyPrototype10} className="app-instruction" style={{maxHeight: "100%"}} alt="Text editor screen the addition of the serviceName attribute to the Page component"/>
              </div>
            </div>
          </li>
          <li>Save the file.</li>
          <li>Refresh your web browser and you should see the change. If your prototype is not running, follow View the prototype locally on <A href="start-prototype">set up prototype</A>.</li>
        </ol>

      <h2 id="create-or-modify-a-page">Create or modify a page</h2>
        <p>You can use both HTML (<code>.html</code>) and React (<code>.tsx</code>) to build your prototype. If you are more comfortable using HTML, enter in terminal:</p>
        <ol>
          <li><code>npm run create:page</code>.</li>
          <li>Answer the prompts to choose either HTML or React.</li>
          <li>Edit the new page to suit you.</li>
        </ol>

        <h3>HTML (.html) page</h3>

        <p>A HTML page is HTML that's the content of <code>&lt;main&gt;</code>, between the header and footer. For example:</p>
        <pre><code>&lt;h1&gt;Test&lt;/h1&gt;<br />
        &nbsp;&lt;p&gt;This is a test HTML page. You can any HTML including lists:&lt;/p&gt;<br />
        &nbsp;&lt;ul&gt;<br />
        &nbsp;&nbsp;&lt;li&gt;bullet 1&lt;/li&gt;<br />
        &nbsp;&nbsp;&lt;li&gt;bullet 2&lt;/li&gt;<br />
        &nbsp;&lt;/ul&gt;
          </code></pre>
        <p>By default, the HTML is styled for you, so you don't need to add the standard govuk classes, such as <code>govuk-body</code>.</p>
        <p>If you wish to override the style, add the <code>class</code> or <code>style</code> attribute to the HTML elements.</p>

        <h3>React (.tsx) page</h3>

        <p>If the page generator for React doesn't work, then:</p>
        <ol>
          <li>Copy the index.tsx file.</li>
          <li>Rename the file.</li>
          <li>Edit the <code>title</code> and <code>description</code>.</li>
          <li>Enter your page content between the <code>&lt;/Helmet&gt;</code> and the <code>&lt;/Fragment&gt;</code>.</li>
        </ol>

        <div className="govuk-inset-text">
          Make sure you don't have a React (.tsx) and HTML (.html) file with the same name.
        </div>

          <h2 id="update-navigation">Update the sub-navigation and footer links</h2>
          <ol>
            <li>Open <code>page-wrap.tsx</code> from the <code>pages</code> folder.</li>
            <li>Replace <code>navigation</code> with new sub-navigation and footer links. Press <strong>Cmd+S</strong> to save your changes.</li>
            <li>Check <A href="http://localhost:8080">http://localhost:8080</A> to preview the changes.</li>
          </ol>
          <p>See all the options for the <A href="/components?name=Page">Page component</A>.</p>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
            <img  src={applyPrototype8} className="app-instruction" style={{maxHeight: "100%"}} alt="Text editor screen with a highlight around where service name could be updated"/>
            </div>
          </div>

      <h2 id="add-a-component">Add a component</h2>
        <p>There are several ways to add a <A href="/components">component</A> in your prototype:</p>
        <ul>
          <li>copy the code from the HTML or React tabs in the design system</li>
          <li>copy the code from <A href="https://design-system.service.gov.uk/components/">GOV.UK design system components</A> (HTML only, not Nunjucks)</li>
        </ul>

        <div className="govuk-inset-text">
          If you use components that contain javascript (like tabs or accordions) the React code functions better. The files must be saved as .tsx files.
        </div>

      <h3>Use HTML component</h3>
        <ol>
          <li>Copy the HTML code

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
              <img  src={applyPrototype3} className="app-instruction" style={{maxHeight: "100%"}} alt="HTML code displayed for status banner"/>
              </div>
            </div>
          </li>
        
          <li>Open your prototype in Atom.</li>
          <li>In <code>src/common/pages</code> find the HTML file to add the component to (or create a new one).</li>
          <li>Paste the HTML code. It should look like:
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <img  src={applyPrototype4} className="app-instruction" style={{maxHeight: "100%"}} alt="Text editor screen with a highlight around where example code snippet should sit"/>
              </div>
            </div>
          </li>
          <li>Save your changes.</li>
        
          <li>Go to <A href="http://localhost:8080/">http://localhost:8080/</A> and you will see the changes update automatically in your local web browser.

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <img  src={applyPrototype5} className="app-instruction" style={{maxHeight: "100%"}} alt="Local web browser displaying properly coded status banner"/>
              </div>
            </div>
          </li>
        </ol>

        <h2 className="govuk-heading-l">Help us improve prototyping guidance</h2>
        <p>This needs improving. We need evidence about:</p>
        <ul>
          <li>your experience using this kit</li>
        </ul>

        <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/389">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
  </div>
);

export default Page;
