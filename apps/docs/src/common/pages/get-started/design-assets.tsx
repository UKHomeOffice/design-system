import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Design assets';
const description = 'Useful design assets for interaction designers in the Home Office';
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
      {menu}
    </div>

    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>

      <h2>Home Office</h2>
      <ul className="plain">
        <li><A href="https://www.figma.com/file/y90OmHLuhtNuCUOc7jzQlj/Home-Office-design-library-Roboto">Home Office styles and components (Figma)</A></li>
        <li><A href="https://www.figma.com/file/USbI5GN6y8fsLdCov6aWJx/HO-DDaT-journey-map-template">Journey map template (Figma)</A></li>
        <li><A href="https://www.figma.com/file/gou1Y52jE53jkogQJraQau/HO-DDaT-storyboard-template?node-id=6%3A314">Storyboard template (Figma)</A></li>
        <li><A href="https://www.figma.com/file/enEcPp3OA9XiUVPkPiN9W0/HO-DDaT-workshop-templates?node-id=6%3A314">Workshop activity templates (Figma)</A></li>
        <li><A href="https://github.com/karypun/mock-wildcat-service">Mock service with reusable HTML and React code snippets</A></li>

      </ul>
      <h2>GOV.UK</h2>
      <ul className="plain">
        <li><A href="https://www.figma.com/file/NWuFffKvPQhl3aJ9nKU0p3/GOV.UK-Design-System?node-id=0%3A1">GOV.UK styles and components (Figma)</A></li>
        <li><A href="https://github.com/charlesrt/gov-flow/">GOV flow for creating user flows (Sketch)</A></li>
        <li><A href="https://github.com/dashouse/govuk-design-system-flow-diagrams">GOV.UK design system flow diagrams (Sketch)</A></li>
        <li><A href="https://github.com/alirawashdeh/govuk-userflow-icons">GOV.UK userflow icons (SVG images)</A></li>
        <li><A href="https://github.com/alphagov/govuk-prototype-kit/">HTML prototype kit</A></li>
        <li><A href="https://github.com/abbott567/sketch_wireframing_kit/">Wireframing kit (Sketch)</A></li>
        <li><A href="https://github.com/enoranidi/govuk-design-system-balsamiq/">Wireframing kit (Balsamiq)</A></li>

      </ul>


    </div>

    </div>

);

export default Page;
