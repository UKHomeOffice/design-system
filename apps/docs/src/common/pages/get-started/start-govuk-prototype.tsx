import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Set up your GOV.UK prototype';
const description = 'How to generate a new prototype based on the Home Office design system';
const section = 'Get started';
const subsection = 'Prototyping';


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
        <span className="caption">{subsection}</span>
        {title}
      </h1>

      <p>Follow the <A href="https://govuk-prototype-kit.herokuapp.com/docs/install">install GOV.UK prototype kit</A> instructions except <A href="https://github.com/UKHomeOffice/home_office_design_kit/archive/refs/heads/master.zip">download the Home Office-styled zip file</A>.</p>
      <p>Use the <A href="https://govuk-prototype-kit.herokuapp.com/docs/tutorials-and-examples">tutorials and templates</A> to build your prototype.</p>
      <p>You can also <A href="https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku">publish your prototype on Heroku</A>.</p>

    </div>
  </div>
);

export default Page;
