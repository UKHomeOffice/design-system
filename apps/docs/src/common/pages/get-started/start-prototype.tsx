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
        <span className="caption">Prototyping</span>
        Starting a new prototype
      </h1>
      <p>Rapidly create HTML prototypes of internal Home Office services. </p>

      <div className="govuk-inset-text">
      If your team is planning to use the HODS production framework, you
      might consider having the developers create a blank 'app' within the
      project to make it easier to transform your prototype into a production
      application.
      </div>

      <h2>Before you start</h2>
        <p>You'll need:</p>
        <p><A href="https://nodejs.org/en/">Node.js</A> - version 12.x.x or higher</p>

        <p>For the purpose of generating a new prototype, we are assuming you'll be using a Mac which comes with a terminal application to install, start and stop the prototype. Using a terminal is sometimes called ‘using the command line’. </p>

      <h2>Generating a new prototype</h2>
        <h3>1. Run the following commands locally</h3>
        <p>Using terminal, run the following commands below (the parts in ALL CAPS should be replaced with something specific to you):</p>

        <pre><code>
        mkdir YOUR-PROTOTYPE<br />
        cd YOUR-PROTOTYPE <br />
        git init <br />
        npm init @hods prototype<br />
        </code></pre>

        <h3>2. Answer the interactive prompts</h3>
        <p>The generator / initialiser will ask you some questions but the defaults should be fine. You can accept the default by simply pressing enter in the terminal.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
        <img  src={applyPrototype1} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Terminal screen with a highlight around running commands to set up prototype"/>
          </div>
        </div>
        <p></p>
        <p>After the prototype has been generated, you should pull down the dependencies (this will take a while):</p>

        <pre><code>
        npm install
        </code></pre>

        <h3>3. View the prototype locally</h3>
        <p>In the terminal, enter:</p>

        <pre><code>
        npm run dev
        </code></pre>

        <p>When your terminal returns a message that says:</p>
        <pre><code>
        No issues found.
        </code></pre>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype2} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Terminal screen with a highlights around npm run dev command and no issues found"/>
          </div>
        </div>
        <p>You can see the prototype by opening <A href="http://localhost:8080/">http://localhost:8080/</A> in your web browser.</p>
        <h3>4. Optional: Set up your remote repository</h3>
          <p>If you want to deploy your prototype so it can be tested with users or allow others to collaborate on it, you can set up a blank code repository in <A href="https://github.com/">GitHub</A>.</p>
        <h3>5. Optional: Commit and push your new prototype</h3>
          <p>Run the following commands to push up the first version of your new prototype to your remote code repository:</p>
        <pre><code>
        git remote add origin git@github.com:YOUR_USER/YOUR-PROTOTYPE.git<br />
        git push -u origin master
        </code></pre><br />
        <div><A href="/get-started/use-prototype">Next: Building your prototype</A></div>
        </div>

  </div>
);

export default Page;
export const title = 'Starting a new prototype';
