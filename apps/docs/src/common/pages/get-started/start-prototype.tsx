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
      <p>Rapidly create HTML prototypes of internal Home Office services.</p>

      <div className="govuk-inset-text">
        If your team is planning to use the Home Office design system production framework,
        consider having the developers create a blank 'app' within the project to make it easier 
        to transform your prototype into a production application.
      </div>

      <h2>Before you start</h2>
        <p>Mac users can use the Terminal application. It's located in the <code>Utilities</code> folder in <code>Applications</code>.</p>
        <p>Windows users should install <A href="https://git-scm.com/download/win">Git Bash (direct download)</A> to use these app-instructions.</p>
        <p>You'll need:</p>
        <ul>
          <li><A href="https://nodejs.org/en/">Node.js (version 16)</A> - you can use version 14 too</li>
          <li>a <A href="https://github.com/">GitHub</A> account</li>
          <li>optionally a <A href="http://heroku.com/">Heroku</A> account, to publish your prototype</li>
          <li>terminal - an application to install, start and stop a prototype. Using a terminal is sometimes called ‘using the command line’</li>
          <li>a text editor, such as <A href="https://code.visualstudio.com/">VSCode</A></li>
        </ul>
        <p>To install Node.js or a text editor, you'll need administrator access to your computer.</p>
        <p>Create your GitHub and Heroku accounts with any email address, including your Home Office email addresses.</p>

      <h2>Step 1. Set up your GitHub repository</h2>
        <p>This is where your prototype code will be stored.</p>
        <ol>
          <li>Log into your <A href="https://github.com/">GitHub</A> account.</li>
          <li>Create a <A href="https://github.com/new">new repository</A>.</li>
          <li>If it's a Home Office prototype, select UKHomeOffice as the repository owner.</li>
          <li>Enter a repository name. For our example, we'll use <code>review-licence-applications</code> as the repository name.</li>
          <li>Select public for the privacy.</li>
          <li>Do not add a README, a .gitignore or a license, these will come later.</li>
        </ol>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <img src={applyPrototype0} className="app-instruction" style={{maxHeight: "100%"}} alt="GitHub screen showing text field with new repository name mock wildcat service"/>
          </div>
        </div>

        <p>We'll connect this blank remote GitHub repository with the prototype you'll create in the next step.</p>

        <h2>Step 2. Create a prototype</h2>
          <h3>Run the prototype generator in terminal</h3>
          <p>You can use any name you like for your prototype folder, in this example we'll use <code>review-licence-applications</code>.</p>
          <p>Open terminal and enter these commands:</p>
          <ol>
            <li>Run <code>mkdir review-licence-applications</code> (literally make directory) to create a folder for your prototype. You can see this folder in File Explorer on Windows or Finder on Mac. Nothing will show in terminal.</li>
            <li>Run <code>cd review-licence-applications</code> (literally change directory) to move your terminal inside your prototype folder. You should see your current folder has changed in terminal.</li>
            <li>Run <code>npm init @hods prototype</code> to create the prototype. You'll see:<br />
            <code>  Need to install the following packages:
    @hods/create
  Ok to proceed? (y)</code></li>
            <li>Press enter to continue.</li>
            <li>Answer the prompts. Accept the default answers, by pressing enter.
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <img  src={applyPrototype1} className="app-instruction" style={{maxHeight: "100%"}} alt="Terminal screen with asking for the short name, long name, version, description and licence needed to set up the prototype"/>
              </div>
            </div>
            You'll see a lot of text in the terminal, it'll end with <code>✔  message Done.</code>.
            </li>

          </ol>

        <h3>Download the dependencies</h3>
        <p>Run <code>npm install</code> to download the dependencies to make your prototype work. These are stored in the <code>node_modules</code> folder. They are specific to this prototype and do not affect any of your other prototypes.</p>

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

        <h2>Step 3. Share your prototype on GitHub</h2>
        <p>Once installation is complete, you can share your prototype on GitHub.</p>
        <ol>
          <li>Run <code>git init</code> to create (or initialise) a local git repository.</li>
          <li>Run <code>git add .</code> to locally stage the initial files ready for commit.</li>
          <li>Run <code>git commit -m "initial commit"</code> to locally commit the initial files.</li>
          <li>Go to your blank GitHub repository.</li>
          <li>Find the section on 'push an existing repository'.</li>
          <li>Copy the 3 lines of code, and run them in your terminal.</li>
        </ol>

        <p>If you can't find the lines of code, use these replacing YOUR_GITHUB_NAME with your user name:</p>
        <ol>
          <li><code>git remote add origin git@github.com:YOUR_GITHUB_NAME/review-licence-applications.git</code> to add a remote git repository called 'origin'.</li>
          <li><code>git branch -M main</code> to rename your local branch called 'master' to 'main'.</li>
          <li><code>git push -u origin main</code> to publish your local main branch to the main branch of your remote repository called 'origin'.</li>
        </ol>

        <p><A href="/get-started/use-prototype">Next: Build your prototype</A></p>

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
