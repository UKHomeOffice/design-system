import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Code examples';
const description = 'Useful code examples for interaction designers in the Home Office';
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

      <h2>Home Office React prototype kit</h2>
      <ul className="plain">
        <li><A href="">Today's date (Home Office)</A></li>
        <li><A href="">Display submitted data (Home Office)</A></li>
      </ul>
      <h2>Home Office-styled GOV.UK prototype kit</h2>
      <ul className="plain">
        <li><A href="">Today's date (GOV.UK)</A></li>
        <li><A href="">Display submitted data (GOV.UK)</A></li>
      </ul>
    </div>

  </div>

);

export default Page;
