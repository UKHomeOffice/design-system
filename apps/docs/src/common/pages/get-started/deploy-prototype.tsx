import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Publish your prototype';
const description = 'How to deploy your prototype';
const section = 'Get started';
const subsection = 'Prototyping';

const applyPrototype0 = require('../../../../assets/images/github-screen01.png').default;
const applyPrototype1 = require('../../../../assets/images/terminal-screen01.png').default;
const applyPrototype2 = require('../../../../assets/images/terminal-screen02.png').default;
const applyPrototype3a = require('../../../../assets/images/github-screen02.png').default;
const applyPrototype7 = require('../../../../assets/images/heroku2.png').default;
const applyPrototype8 = require('../../../../assets/images/heroku3.png').default;
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

        <p>One of the ways you can deploy, or publish and share your prototype with others, is through Heroku.</p>
        <h2>Create an app on Heroku</h2>
        <ol style={{ maxWidth: '38em' }}>
          <li>Log into your <A href="https://dashboard.heroku.com/">Heroku</A> account</li>
          <li>Select on <strong>New</strong> and select <strong>Create new app</strong></li>
          <li>A prototype deployed on Heroku is called an ‘app’. Type in an app name for your prototype and choose Europe as your region. Click <strong>Create app</strong></li>
        </ol>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype7} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for creating new app"/>
          </div>
        </div>
        <p></p>

        <h2>Run the deployment generator in terminal</h2>
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

        <h2>Setting up secrets in GitHub</h2>
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

        <h2>Push your new deployment on Heroku</h2>
        <p>In terminal, run these commands:</p>
        <pre><code>
        git add .<br />
        git commit -m"add deployment pipeline" <br />
        git push <br />
        </code></pre>

        <p>This will build your prototype in Heroku and may take a few minutes. Once that is done, click on the <strong>Open app</strong> tab in Heroku to view your prototype. It will have a url like <strong>review-licence-applications.herokuapp.com</strong> which you can share with others.</p>

        <h2>Set a username and password</h2>
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
    </div>
  </div>
);

export default Page;
