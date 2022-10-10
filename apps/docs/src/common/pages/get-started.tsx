import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Home Office prototype</span>
    <NavigationMenu items={[

      {
        href: '/get-started/start-prototype',
        text: 'Set up your prototype'
      },
      {
        href: '/get-started/use-prototype',
        text: 'Build your protoype'
      },
      {
        href: '/get-started/deploy-prototype',
        text: 'Publish your protoype'
      }
    ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Home Office-styled GOV.UK prototype</span>
    <NavigationMenu items={[
      {
        href: '/get-started/start-govuk-prototype',
        text: 'Set up your GOV.UK prototype'
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
        <p>The Home Office design system is an extension of <A href="https://not-gov.uk/">NotGovUK</A> which implements the GOV.UK design system in React. (See: <A href="https://not-gov.uk/design-decisions">design decisions</A>)</p>
        <p>You can use the Home Office design system for prototyping and products in production. See <A href="../styles">Styles</A> for more information on internal and public facing services.</p>
        <h2>Design prototype assets</h2>
        <p>You can explore ideas and demonstrate page flows using these design assets:</p>
        <ul>
          <li><A href="https://app.mural.co/t/digitalhmrc9032/m/digitalhmrc9032/1660126757244/a18e7737b3a8c9b507dd02e5cafcb73e660ddaf5?sender=u88f21b544bf2ceb924a42629">GOV.UK design system flow diagram (Mural)</A></li>
          <li><A href="https://design-system.service.gov.uk/community/resources-and-tools/">GOV.UK design system community assets</A></li>
          <li><A href="https://www.figma.com/file/y90OmHLuhtNuCUOc7jzQlj/Home-Office-design-library-Roboto">Home Office styles and components (Figma)</A></li>
        </ul>
        <h2>HTML Prototype</h2>
          <p>When prototyping a public-facing service, you should use the <A href="https://govuk-prototype-kit.herokuapp.com/docs">GOV.UK prototype kit</A> which contains the GOV.UK styles.</p>
          <p>For internal services, such as caseworking systems, you should use the Home Office styles (including logo, colours and internal font) in your prototypes. You can choose whether to use the:</p>
          <ul>
            <li><A href="/get-started/start-prototype">Home Office design system React prototype kit</A></li>
            <li><A href="/get-started/start-govuk-prototype">Home Office-styled GOV.UK prototype kit</A></li>
          </ul>

          <p>You cannot use certain GOV.UK styles, such as the crown logo or Transport font, for internal services.</p>

        <h2>Production</h2>
          <p>This content still needs to be written.</p>

      <h2>Support</h2>
        <p>If you have a question or need support you can:</p>
          <ul>
            <li>email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A></li>
            <li>get in touch on Slack #ho-design-system</li>
            <li><A href="https://github.com/UKHomeOffice/design-system/issues">view known issues on GitHub</A></li>
          </ul>

      <h2>Contribute</h2>
        <p>Get involved with <A href="https://github.com/UKHomeOffice/design-system/discussions">GitHub discussions</A> about our styles, components and patterns.</p>
    </div>
  </div>
);

export default Page;
