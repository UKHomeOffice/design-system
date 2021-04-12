import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

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
          text: 'Using your prototype'
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
        Deploying your prototype
      </h1>
      <p>One of the ways you can deploy, or publish and share your prototype with others, is through Heroku.</p>

      <div className="govuk-inset-text">
      Do not enter real user data into prototypes hosted on Heroku. If your prototype stores or collects user data, talk to a security professional about appropriate security steps you must take.
      </div>

      <h3>Step 1</h3>
        <p>Log into your <A href="https://dashboard.heroku.com/apps">Heroku</A> account.</p>

      <h3>Step 2</h3>
        <p>Install the <A href="https://devcenter.heroku.com/articles/heroku-cli">Heroku toolbelt</A></p>
        <p>The toolbelt lets you use Heroku through the terminal. You will need to restart the terminal after installing the toolbelt.</p>

      <h3>Step 3</h3>
        <p>A prototype deployed on Heroku is called an ‘app’. In Heroku, click on 'Create new app' and type in an app name for your prototype.</p>
        <p>For example the name <code>internal-service-prototype</code> will create an app at <code>internal-service-prototype.herokuapp.com</code>.

      <h3>Step 4</h3>
          <p>Under deployment method, Heroku Git should be pre-selected. Follow the instructions on the page to Deploy using Heroku Git</p>

      <h3>Step 5</h3>
          <p>After you’ve completed the last step to deploy your application, click on the ‘Settings’ tab on Heroku, click on Reveal Config Vars and enter your username and password.</p>
          <div className="govuk-inset-text">
           Make sure that strong passwords are used with a minimum of 12 characters made up of numerous words. For example, madbaddaddog (for more information about using prototypes securely, contact <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>).
           </div>

      <h3>Step 6</h3>
          <p>Once that is done, click on the ‘Open App’ tab to view your prototype. It will have a url like internal-service.herokuapp.com</p>
    </div>
  </div>
);

export default Page;
export const title = 'Deploying your prototype';
