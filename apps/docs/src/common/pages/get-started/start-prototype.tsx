import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Setting up your prototype';
const description = 'How to generate a new prototype based on the Home Office Design System';
const section = 'Get started';
const subsection = 'Prototyping';

const applyPrototype0 = require('../../../../assets/images/github-screen01.png').default;
const applyPrototype1 = require('../../../../assets/images/terminal-screen01.png').default;
const applyPrototype2 = require('../../../../assets/images/terminal-screen02.png').default;
const applyPrototype3a = require('../../../../assets/images/github-screen02.png').default;
const applyPrototype7 = require('../../../../assets/images/heroku02.png').default;
const applyPrototype9 = require('../../../../assets/images/heroku4.png').default;


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
      <p>Rapidly create HTML prototypes of internal Home Office services. </p>

      <div className="govuk-inset-text">
      If your team is planning to use the Home Office design system production framework, you
      might consider having the developers create a blank 'app' within the
      project to make it easier to transform your prototype into a production
      application.
      </div>

      <h2>Before you start</h2>
        <p>You'll need:</p>
        <ul>
        <li><A href="https://nodejs.org/en/">Node.js</A> - version 12.x.x or higher</li>
        <li><A href="https://github.com/">GitHub</A> and <A href="http://heroku.com/">Heroku</A> accounts</li>
        <li>Terminal - an application to install, start and stop a prototype. Using a terminal is sometimes called ‘using the command line’. </li>
        </ul>
      <h2>Step 1. Set up your GitHub repository</h2>
        <p>This is where your prototype code will be stored.</p>
        <p>Log into your <A href="https://github.com/">GitHub</A> account and create a new blank repository.
        To give an example, we'll name the repository <strong>review-licence-applications</strong>.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
        <img  src={applyPrototype0} className="confirm-desktop" style={{maxHeight: "100%"}} alt="GitHub screen showing text field with new repository name mock wildcat service"/>
          </div>
        </div>
        <p></p>
        <p>We'll connect this blank repository with the prototype you'll create in the next step.</p>

        <h2>Step 2. Create a new prototype</h2>
        <h3>Run the prototype generator in terminal</h3>
        <p>Open terminal and enter these commands:</p>
        <pre><code>
        mkdir review-licence-applications<br />
        cd review-licence-applications <br />
        git init <br />
        git remote add origin git@github.com:YOUR_GITHUB_NAME/review-licence-applications.git<br />
        npm init @hods prototype<br />
        </code></pre>
        <p>This does two things: it will create your local repository and link it with the remote GitHub repository you set up in Step 1. The last line will generate your new prototype.</p>
        <h3>Answer the interactive prompts</h3>
        <p>The prototype generator will ask you some questions before generating the prototype. Accept the default prompts by simply pressing the 'return' key in terminal.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
        <img  src={applyPrototype1} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Terminal screen with questions to set up prototype"/>
          </div>
        </div>
        <p></p>
        <h3>Pull down the dependencies</h3>
        <p>After the prototype has been generated, you'll need to pull down the dependencies to make your prototype work. Do this by running:</p>
        <pre><code>
        npm install
        </code></pre>

        <h3>Commit and push your new prototype to GitHub</h3>
        <p>Once installation is complete, you can push your prototype to GitHub by entering these commands:</p>
        <pre><code>
        git add .<br />
        git commit -m"initial commit" <br />
        git branch -M main <br />
        git push -u origin main<br />
        </code></pre>

        <h3>View the prototype locally</h3>
        <p>In terminal, enter:</p>
        <pre><code>
        npm run dev
        </code></pre>
        <p>When your terminal returns a message that says:</p>
        <pre><code>
        No issues found.
        </code></pre>
        <p>You can view the prototype by opening <A href="http://localhost:8080/">http://localhost:8080/</A> in your web browser. This will help you track changes locally as you build your prototype.</p>

        <h2>Step 3. Deploy your prototype</h2>
        <p>One of the ways you can deploy, or publish and share your prototype with others, is through Heroku.</p>
        <h3>Create an app on Heroku</h3>
        <ol style={{ maxWidth: '38em' }}>
          <li>Log into your <A href="https://dashboard.heroku.com/">Heroku</A> account</li>
          <li>Click on <strong>New</strong> and select <strong>Create new app</strong></li>
          <li>A prototype deployed on Heroku is called an ‘app’. Type in an app name for your prototype and choose Europe as your region. Click <strong>Create app</strong></li>
        </ol>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype7} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for creating new app"/>
          </div>
        </div>
        <p></p>

        <h3>Run the deployment generator in terminal</h3>
        <p>In terminal, run the command:</p>
         <pre><code>npm run create:deployment</code></pre>

        <h3>Answer the interactive prompts</h3>
         <p>The deployment generator will ask you some questions.</p>
        <ol style={{ maxWidth: '38em' }}>
        <li>Hit the 'return' key to select <strong>Heroku</strong> as your deployment option</li>
        <li>Name your branch <strong>main</strong></li>
        <li>Hit the 'return' key to accept the other prompts called 'secrets' asking about your email address, API key and app name</li>
        </ol>

        <div className="govuk-inset-text">
        Do not enter your email, API key and app name details into terminal for security reasons.
        </div>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
        <img  src={applyPrototype2} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Terminal screen with questions to deploy a prototype"/>
          </div>
        </div>
        <p></p>

        <h3>Setting up secrets in GitHub</h3>
        <p>In your GitHub <strong>Settings</strong>, select <strong>Secrets</strong> on the left hand side menu. Click the button <strong>New repository secret</strong>. This is where you'll be entering the secrets you accepted in your deployment generator.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
        <img  src={applyPrototype3a} className="confirm-desktop" style={{maxHeight: "100%"}} alt="GitHub screen showing text fields to add secrets"/>
          </div>
        </div>
        <p></p>
        <p>Each secret is made up of a name and value. Enter the names as displayed below with the relevant values.</p>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">Name</th>
              <th scope="col" className="govuk-table__header">Value</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">HEROKU_EMAIL</td>
              <td className="govuk-table__cell">This will be your Heroku email address</td>

            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">HEROKU_APP_NAME</td>
              <td className="govuk-table__cell">This will be the app name for your prototype; for example, review-licence-applications</td>


            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">HEROKU_API_KEY</td>
              <td className="govuk-table__cell">You can find this by going into your <strong>Account settings</strong> page in Heroku. Find the section on <strong>API Key</strong> and click <strong>Reveal</strong>.</td>
            </tr>

          </tbody>
        </table>

        <h3>Push your new deployment on Heroku</h3>
        <p>In terminal, run these commands:</p>
        <pre><code>
        git add .<br />
        git commit -m"add deployment pipeline" <br />
        git push <br />
        </code></pre>

        <p>This will build your prototype in Heroku and may take a few minutes. Once that is done, click on the <strong>Open app</strong> tab in Heroku to view your prototype. It will have a url like <strong>review-licence-applications.herokuapp.com</strong> which you can share with others.</p>

        <h3>Set a username and password</h3>
        <p>After you’ve completed the last step to deploy your application, you must protect your prototype and make it secure. To do this:</p>
        <ol style={{ maxWidth: '38em' }}>
        <li>click on the <strong>Settings</strong> tab on Heroku</li>
        <li>under <strong>Config Vars</strong>, click on <strong>Reveal Config Vars</strong></li>
        <li>enter your username and password details</li>
        </ol>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype9} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for setting username and password"/>
          </div>
        </div>
        <br />
        <p><A href="/get-started/use-prototype">Next: Building your prototype</A></p>

        </div>
  </div>
);

export default Page;
