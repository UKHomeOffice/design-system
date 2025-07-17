import { FC, Fragment, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

const siteTitle = config.title;

export const title = 'Get started';
const longTitle = title;
const description = 'The following introductory guides will help you to get set up';

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <Fragment>
        <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Home Office plugin for GOV.UK prototype</span>
        <NavigationMenu items={[
          {
            href: '/design-system/get-started/home-office-plugin',
            text: 'Add Home Office plugin to GOV.UK prototype'
          }
        ]} />
        <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Home Office React prototype</span>
        <NavigationMenu items={[

          {
            href: '/design-system/get-started/start-prototype',
            text: 'Set up your prototype'
          },
          {
            href: '/design-system/get-started/use-prototype',
            text: 'Build your protoype'
          }
        ]} />
        <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Community resources</span>
        <NavigationMenu items={[
          {
            href: '/design-system/get-started/design-assets',
            text: 'Design assets'
          }
        ]} />
      </Fragment>
    }>
      {children}
    </Subsection>
  </SectionWrap>
);

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{section}</span>
      {longTitle}
    </h1>
    <p>The Home Office design system helps us understand what Home Office services look like and how they should behave. It builds on the <A href="https://design-system.service.gov.uk/">GOV.UK design system</A>.</p>
    <p>There is an implementation of the design system that's an extension of <A href="https://not-gov.uk/">NotGovUK</A> which implements the GOV.UK design system in React. (See: <A href="https://not-gov.uk/design-decisions">design decisions</A>)</p>
    <p>You can use the Home Office design system for prototyping and products in production. See <A href="../styles">styles</A> for more information on internal and public facing services.</p>
    <h2>Design prototype assets</h2>
    <p>You can explore ideas and demonstrate page flows using these design assets:</p>
    <ul>
      <li><A href="https://app.mural.co/t/digitalhmrc9032/m/digitalhmrc9032/1660126757244/a18e7737b3a8c9b507dd02e5cafcb73e660ddaf5?sender=u88f21b544bf2ceb924a42629">GOV.UK design system flow diagram (Mural)</A></li>
      <li><A href="https://design-system.service.gov.uk/community/resources-and-tools/">GOV.UK design system community assets</A></li>
      <li><A href="https://www.figma.com/file/y90OmHLuhtNuCUOc7jzQlj/Home-Office-design-library-Roboto">Home Office styles and components (Figma)</A></li>
    </ul>
    <h2>HTML prototype</h2>
    <h3>Public facing services</h3>
    <p>When prototyping an external public-facing service, use the <A href="https://prototype-kit.service.gov.uk/docs/">GOV.UK prototype kit</A> which contains the GOV.UK styles.</p>
    <p>You may find some of features of the <A href="/get-started/home-office-plugin">Home Office plugin</A> makes it easier and quicker to prototype.</p>
    <h3>Internal services</h3>
    <p>For internal services, such as caseworking systems, use the Home Office styles (including logo, colours and internal font) in your prototypes. You can choose whether to use the:</p>
    <ul>
      <li><A href="/get-started/home-office-plugin">GOV.UK prototype kit with the Home Office plugin</A></li>
      <li><A href="/get-started/start-prototype">Home Office design system React prototype kit</A></li>
    </ul>

    <p>You cannot use certain GOV.UK styles, such as the crown logo or Transport font, for internal services.</p>

    <h2>Production</h2>
    <p>This content still needs to be written.</p>

    <h2>Support</h2>
    <p>If you have a question or need support you can:</p>
    <ul>
      <li>email <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk</A></li>
      <li>get in touch on Slack #ho-design-system</li>
      <li>read and create <A href="https://github.com/UKHomeOffice/design-system/discussions">GitHub discussions</A></li>
      <li><A href="https://github.com/UKHomeOffice/design-system/issues">view known issues on GitHub</A></li>
    </ul>

    <h2>Contribute</h2>
    <p>Get involved with <A href="https://github.com/UKHomeOffice/design-system/discussions">GitHub discussions</A> about our styles, components and patterns.</p>
  </SubsectionWrap>
);

export default Page;
