import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Add Home Office plugin to GOV.UK prototype';
const description = 'How to generate a new prototype based on the Home Office design system';
const section = 'Get started';
const subsection = 'Prototyping';


const Page: FC<PageProps> = () => (
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

      <p><A href="https://prototype-kit.service.gov.uk/docs/create-new-prototype">Create a GOV.UK prototype</A>. This is the prototyping infrastructure.</p>
      
      <p>In your terminal, in the folder with your prototype, run: <br /> <code>npm install home-office-kit</code>.</p>
      <p>This allows you to use Home Office design system components and change to the Home Office styling.</p>
      <p>If you run your prototype, and go to 'Manage your prototype' (<code>/manage-prototype/templates</code>), you'll find Home Office templates.</p>

      <p>You can use the <A href="https://prototype-kit.service.gov.uk/docs/tutorials-and-guides">GOV.UK tutorials and guides</A> to help build your prototype.</p>
      
      <h2>Header, footer and page background</h2>
      <p>To change your prototype to by default use the Home Office styling:</p>
      <ol className="govuk-list govuk-list--number">
        <li>In <code>app/views/layouts/main.html</code> change:<br /> <code>&#123;% extends "govuk-prototype-kit/layouts/govuk-branded.njk" %&#125;</code> to <br /><code>&#123;% extends "home-office-kit-layout.html" %&#125;</code></li>
      </ol>
      <h2>Font</h2>
      <p>To change your prototype to use Roboto:</p>
      <ol className="govuk-list govuk-list--number">
        <li>In <code>app/assets/sass</code> create <code>settings.scss</code>, and add one line:<br /> <code>@import "node_modules/home-office-kit/sass/settings"</code></li>
      </ol>


      <h2 className="govuk-heading-l">Help us improve prototyping guidance</h2>
      <p>This needs improving. We need evidence about:</p>
      <ul>
        <li>your experience using this plugin</li>
        <li>suggested improvements or features</li>
        <li>bugs you've found</li>
      </ul>

      <p className="govuk-body">To contribute, add your ideas to our <A href="https://github.com/UKHomeOffice/design-system/discussions/389">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
  </div>
);

export default Page;
