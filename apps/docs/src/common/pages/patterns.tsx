import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const newHref = '/design-system/patterns';
const newURL = 'https://design.homeoffice.gov.uk' + newHref;

const Page: FC<PageProps> = () => (
  <div className="hods-width-container">
    <main id="main-content">
      <Helmet>
        <title>Home Office Design System</title>
        <link rel="canonical" href={newURL} />
      </Helmet>
      This content has been moved to a <A href={newHref}>new location</A>.
      <Navigate to={newHref} />
    </main>
  </div>
);

export default Page;
