import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Prototyping - Home Office Design System</title>
      <meta name="og:article:section" content="Resources" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/resources/accessibility',
          text: 'Accessibility'
        },
        {
          href: '/resources/government',
          text: 'GOV.UK'
        },
        {
          href: '/resources/prototyping',
          text: 'Prototyping'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Resources</span>
        Prototyping
      </h1>
      <p>Helpful resources for prototyping.</p>
      <h2 className="govuk-heading-m">Code</h2>
      <ul className="plain">
        <li><A href="https://github.com/alphagov/govuk-prototype-kit">GOV.UK prototype kit</A></li>
        <li><A href="#">Home Office prototype kit</A></li>
        <li><A href="https://github.com/abbott567/validation-for-prototypes">Validation for prototypes</A> (read <A href="http://www.craigabbott.co.uk/validation-for-prototypes">these notes</A> on using this validation plugin)</li>
      </ul>

      <h2 className="govuk-heading-m">Template files</h2>
      <ul className="plain">
        <li><A href="https://www.figma.com/file/4uhWNtmvpZq7NF8mLlsXFS/Home-Office-Design-Library?node-id=4%3A76">Figma file with Home Office styles and components</A></li>
        <li><A href="https://github.com/abbott567/sketch_wireframing_kit">Sketch file with GOV.UK patterns and components</A></li>
        <li><A href="https://github.com/enoranidi/govuk-design-system-balsamiq">Balsamiq file with GOV.UK patterns and components</A></li>
        <li><A href="https://github.com/charlesrt/gov-flow">GOV flow for creating user flows</A></li>
      </ul>
    </div>
  </div>
);

export default Page;
export const title = 'Resources';
