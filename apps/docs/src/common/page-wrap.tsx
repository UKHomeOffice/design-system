import { Fragment, FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
/* import { Page } from '@hods/components'; */

import './app.scss';

/* export const PageWrap: FC<PageProps> = ({ children }) => {
*   const navigation = [
*     { href: '/get-started', text: 'Get started' },
*     { href: '/styles', text: 'Styles' },
*     { href: '/components', text: 'Components' },
*     { href: '/patterns', text: 'Patterns' },
*     { href: '/content-style-guide', text: 'Content style guide' },
*     { href: '/accessibility', text: 'Accessibility' },
*     { href: '/contribute', text: 'Contribute' }
*   ];
*   const footerNavigation = [
*     { href: 'https://github.com/UKHomeOffice/design-system/', text: 'GitHub' },
*     { href: '/accessibility-statement', text: 'Accessibility statement' },
*     { href: '/sitemap', text: 'Sitemap' },
*     { href: 'https://github.com/UKHomeOffice/design-system/issues/new', text: 'Feedback' },
*     { href: 'https://design-system.service.gov.uk/', text: 'GOV.UK Design System' }
*   ];
* 
*   return (
*     <Page
*       footerNavigation={footerNavigation}
*       navigation={navigation}
*       serviceName="Design System"
*       title="Home Office Design System"
*     >
*       {children}
*     </Page>
*   );
* }; */
export const PageWrap: FC<PageProps> = ({ children }) => (
  <Fragment>
    {children}
  </Fragment>
);

export default PageWrap;
