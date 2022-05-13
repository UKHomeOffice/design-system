import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Prototype - GOV.UK prototype kit';
const description = 'How to prototype with the Home Office Design System';
const section = 'Get started using GOV.UK prototype kit';

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
      <p>This is a Home Office styled version of the GOV.UK prototype kit.</p>
      <h2>Install the kit</h2>
      <pre><code>
      git clone https://github.com/UKHomeOffice/home_office_design_kit.git<br />
      cd home_office_design_kit <br />
      npm install <br />
      npm start<br />
      </code></pre>

    </div>

  </div>
);

export default Page;
