import { FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Page as UCDMPage } from '@hods/ucdm-page';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ children }) => {
  const navigation = [
    { href: '/design-system', text: 'Design system' },
    { href: '/accessibility', text: 'Accessibility' },
    { href: '/design-and-content', text: 'Design and content' },
    { href: '/user-research', text: 'User research' },
    { href: '/community', text: 'Community' }
  ];
  const footerNavigation = [
    { href: 'https://github.com/UKHomeOffice/design-system/', text: 'GitHub' },
    { href: '/accessibility-statement', text: 'Accessibility statement' },
    { href: '/sitemap', text: 'Sitemap' },
    { href: 'https://github.com/UKHomeOffice/design-system/issues/new', text: 'Feedback' },
    { href: 'https://design-system.service.gov.uk/', text: 'GOV.UK Design System' }
  ];

  return (
    <UCDMPage
      footerNavigation={footerNavigation}
      navigation={navigation}
      searchAction="https://www.google.co.uk/search"
      searchSiteField="sitesearch"
      searchSiteValue="design.homeoffice.gov.uk"
      serviceName="User-Centred Design Manual"
      serviceNameInHeader
      serviceHref="/"
      title="Home Office UCD Manual"
    >
      {children}
    </UCDMPage>
  );
};

export default PageWrap;
