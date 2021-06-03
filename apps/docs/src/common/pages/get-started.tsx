import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

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
      <h1>{title}</h1>
        <p>The Home Office Design System (HODS) framework is an extension of <A href="https://not-gov.uk/">NotGovUK</A> which implements the GOV.UK Design System in React. (See: <A href="https://not-gov.uk/design-decisions">design decisions</A>)</p>
        <p>If you are designing and building an internal Home Office service, here are guides to getting started:</p>
          <ul>
            <li><A href="/get-started/start-prototype">prototyping</A></li>
            <li><A href="/get-started/project">production</A></li>
          </ul>
        <p>Visit the <A href="../styles">Styles</A> section for more information on internal and public facing services.</p>
      <h2>Support</h2>
        <p>If you have a question or need support you can:</p>
          <ul>
            <li>email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A></li>
            <li>get in touch on Slack #ho-design-system</li>
            <li><A href="https://github.com/UKHomeOffice/hods-poc/issues">view known issues on GitHub</A></li>
          </ul>

      <h2>Contributing</h2>
        <p>If you’ve got any technical ideas or suggestions for this framework, <A href="https://github.com/UKHomeOffice/hods-poc/pulls">pull requests</A> are welcome but it is probably best to <A href="https://github.com/UKHomeOffice/hods-poc/issues">open an issue</A> first to discuss what you think needs to change.</p>
    </div>
  </div>
);

export default Page;
