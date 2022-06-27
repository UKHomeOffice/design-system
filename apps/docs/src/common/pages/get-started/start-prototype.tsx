import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Set up your prototype';
const description = 'How to generate a new prototype based on the Home Office Design System';
const section = 'Get started';
const subsection = 'Prototyping';

const applyPrototype0 = require('../../../../assets/images/github-screen01.png');
const applyPrototype1 = require('../../../../assets/images/terminal-screen01.png');
const applyPrototype2 = require('../../../../assets/images/terminal-screen02.png');
const applyPrototype3a = require('../../../../assets/images/github-screen02.png');
const applyPrototype7 = require('../../../../assets/images/heroku02.png');
const applyPrototype9 = require('../../../../assets/images/heroku4.png');


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
        <ol>
          <li><A href="https://nodejs.org/en/">Node.js</A> - version 12.x.x or 14.x.x</li>
          <li><A href="https://github.com/">GitHub</A> and <A href="http://heroku.com/">Heroku</A> accounts</li>
          <li>Terminal - an application to install, start and stop a prototype. Using a terminal is sometimes called ‘using the command line’.</li>
        </ol>
        <p>Create your GitHub and Heroku accounts with any email address, including your Home Office email addresses.</p>
        <p>If you need to use multiple version of Node.js for different prototypes, install <A href="https://github.com/nvm-sh/nvm">node version manager</A>.</p>
      <h2>Step 1. Set up your GitHub repository</h2>
        <p>This is where your prototype code will be stored.</p>
        <ol>
          <li>Log into your <A href="https://github.com/">GitHub</A> account.</li>
          <li>Create a <A href="https://github.com/new">new repository</A>.</li>
          <li>For our example, we'll use review-licence-applications as the repository name.</li>
          <li>Select public for the privacy.</li>
          <li>Do not add a README, a .gitignore or a license, these will come later.</li>
        </ol>

        <p>Your repository should look like this <A href="https://github.com/tomyems/blank-repository">example blank repostory</A>.</p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <img  src={applyPrototype0} className="confirm-desktop" style={{maxHeight: "100%"}} alt="GitHub screen showing text field with new repository name mock wildcat service"/>
          </div>
        </div>

        <p>We'll connect this blank remote GitHub repository with the prototype you'll create in the next step.</p>

        <h2>Step 2. Create a prototype</h2>
          <h3>Run the prototype generator in terminal</h3>
          <p>Open terminal and enter these commands:</p>
          <ol>
            <li>Run <code>mkdir review-licence-applications</code> (literally make directory) to create a folder for your prototype. You can see this folder in File Explorer on Windows or Finder on Mac.</li>
            <li>Run <code>cd review-licence-applications</code> (literally change directory) to move your terminal inside your prototype folder.</li>
            <li>Run <code>npm init @hods prototype</code> to create the prototype.</li>
            <li>Answer the prompts. Accept the default answers, by pressing the 'return' key</li>
          </ol>

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <img  src={applyPrototype1} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Terminal screen with questions to set up prototype"/>
            </div>
          </div>

        <h3>Download the dependencies</h3>
        <p>Run <code>npm install</code> to pull down the dependencies to make your prototype work. These are stored in the <code>node_modules</code> folder. They are specific to this prototype and do not affect any of your other prototypes.</p>

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

        <h3>Share your prototype on GitHub</h3>
        <p>Once installation is complete, you can share your prototype on GitHub.</p>
        <ol>
          <li>Run <code>git init</code> to create (or initialise) a local git repository.</li>
          <li>Run <code>git add .</code> to locally stage the initial files ready for commit.</li>
          <li>Run <code>git commit -m "initial commit" </code> to locally commit the initial files.</li>
          <li>Go to your blank GitHub repository.</li>
          <li>Find the section on 'push an existing repository'.</li>
          <li>Copy the 3 lines of code, and run them in your terminal.</li>
          <li>Run <code>git remote add origin git@github.com:YOUR_GITHUB_NAME/review-licence-applications.git</code> to add a remote git repository called 'origin'.</li>
        </ol>

        <p>The 3 lines of code are:</p>
        <ol>
          <li><code>git remote add origin git@github.com:YOUR_GITHUB_NAME/review-licence-applications.git</code> to add a remote git repository called 'origin'.</li>
          <li><code>git branch -M main</code> to rename your local branch called 'master' to 'main'.</li>
          <li><code>git push -u origin main</code> to publish your local main branch to the main branch of your remote repository called 'origin'.</li>
        </ol>

        <p><A href="/get-started/use-prototype">Next: Build your prototype</A></p>
    </div>
  </div>
);

export default Page;
