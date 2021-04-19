import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyPrototype7 = require('../../../../assets/images/heroku2.png').default;
const applyPrototype8 = require('../../../../assets/images/heroku3.png').default;
const applyPrototype9 = require('../../../../assets/images/heroku4.png').default;

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
        Deploying your prototype
      </h1>
      <p>One of the ways you can deploy, or publish and share your prototype with others, is through Heroku.</p>

        <h2>Create an app on Heroku</h2>
        <p>1. Create a <A href="https://dashboard.heroku.com/">Heroku</A> account</p>
        <p>2. Click on <strong>New</strong> and select <strong>Create new app</strong> </p>
        <p>3. A prototype deployed on Heroku is called an ‘app’. Type in an app name for your prototype and choose Europe as your region. Click <strong>Create app</strong></p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype7} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for creating new app"/>
          </div>
        </div>
        <p></p>

        <h2>Deploy your prototype</h2>
        <p>Under deployment method, <strong>Heroku Git</strong> should be pre-selected. Follow the instructions on the page to <strong>Deploy using Heroku Git</strong></p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype8} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing deployment method using Heroku Git"/>
          </div>
        </div>
        <p></p>

        <h2>Set a username and password</h2>
        <p>1. After you’ve completed the last step to deploy your application, click on the <strong>Settings</strong> tab on Heroku, click on <strong>Reveal config vars</strong> and enter your username and password.</p>
        <p>2. Once that is done, click on the <strong>Open app</strong> tab to view your prototype. It will have a url like <strong>your-prototype.herokuapp.com</strong></p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype9} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for setting username and password"/>
          </div>
        </div>
    </div>
  </div>
);

export default Page;
export const title = 'Deploying your prototype';
