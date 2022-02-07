import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Prototyping';
const description = 'How to prototype with the Home Office Design System';
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

      <p>When prototyping a public-facing service, you should use the <A href="https://govuk-prototype-kit.herokuapp.com/docs">GOV.UK prototype kit</A> which contains the GOV.UK styles.</p>

      <p>For internal services, such as caseworking systems, you should use
      the <A href="/get-started/start-prototype">prototype generator</A> which contains Home Office design styles (including logo, colours and internal font).</p><p>You cannot use certain GOV.UK styles, such as the crown logo or Transport font, for internal services.</p>
      <p>Visit the <A href="../styles">Styles</A> section to find out more about the differences when designing internal or public-facing services.</p>

    </div>

  </div>
);

export default Page;
