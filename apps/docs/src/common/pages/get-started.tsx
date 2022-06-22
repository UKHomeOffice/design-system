import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>How to guides</span>
    <NavigationMenu items={[
      {
        href: '/get-started/prototyping',
        text: 'Prototyping'
      },
      {
        href: '/get-started/start-prototype',
        text: '- Setting up your prototype'
      },
      {
        href: '/get-started/use-prototype',
        text: '- Building your protoype'
      }
    ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Community resources</span>
    <NavigationMenu items={[
      {
        href: '/get-started/design-assets',
        text: 'Design assets'
      }
    ]} />
  </Fragment>
);

export const title = 'Get started';
const description = 'The following introductory guides will help you to get set up';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>{title}</h1>
        <p>The Home Office Design System is an extension of <A href="https://not-gov.uk/">NotGovUK</A> which implements the GOV.UK Design System in React. (See: <A href="https://not-gov.uk/design-decisions">design decisions</A>)</p>
        <p>If you are designing and building an internal Home Office service, here are guides to getting started:</p>
          <ul>
            <li><A href="/get-started/start-prototype">prototyping</A></li>
            <li><A href="/get-started/project">production</A></li>
          </ul>
        <p>Visit the <A href="../styles">Styles</A> section for more information on internal and public facing services.</p>
      <h2>Support</h2>
        <p>If you have a question or need support you can:</p>
          <ul>
            <li>email <a href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</a></li>
            <li>get in touch on Slack #ho-design-system</li>
            <li><A href="https://github.com/UKHomeOffice/design-system/issues">view known issues on GitHub</A></li>
          </ul>

      <h2>Contribute</h2>
        <p>Get involved with <A href="https://github.com/UKHomeOffice/design-system/discussions">GitHub discussions</A> about our styles, components and patterns.</p>
    </div>
  </div>
);

export default Page;
