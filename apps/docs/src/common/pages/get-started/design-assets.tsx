import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Deploying your prototype';
const description = 'How to deploy your prototype';
const section = 'Get started';

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
      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>

      <h2>Home Office</h2>
      <ul className="plain">
        <li><A href="https://www.figma.com/file/URKoeYCUBVGqz6KROO3fLh/HO-DDaT-journey-map-template?node-id=64%3A0/">Journey map template (Figma)</A></li>
        <li><A href="https://www.figma.com/file/4uhWNtmvpZq7NF8mLlsXFS/Home-Office-Design-Library?node-id=4%3A76/">Styles and components (Figma)</A></li>
      </ul>
      <h2>GOV.UK</h2>
      <ul className="plain">
        <li><A href="https://github.com/alphagov/govuk-prototype-kit/">HTML prototype kit</A></li>
        <li><A href="https://github.com/abbott567/sketch_wireframing_kit/">Patterns and components (Sketch)</A></li>
        <li><A href="https://github.com/enoranidi/govuk-design-system-balsamiq/">Patterns and components (Balsamiq)</A></li>
        <li><A href="https://github.com/charlesrt/gov-flow/">GOV flow for creating user flows (Sketch)</A></li>
      </ul>
    </div>
    </div>
);

export default Page;
