import { FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Page } from '@hods/components';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ children }) => {
  const navigation = [
    { href: '/get-started', text: 'Get started' },
    { href: '/styles', text: 'Styles' },
    { href: '/components', text: 'Components' },
    { href: '/patterns', text: 'Patterns' },
    { href: '/accessibility', text: 'Accessibility' },
    { href: '/get-involved', text: 'Get involved' }
  ];
  const footerNavigation = [
    { href: 'https://github.com/UKHomeOffice/hods-poc/', text: 'GitHub' },
    { href: '/cookies', text: 'Cookies' },
    { href: 'https://github.com/UKHomeOffice/hods-poc/issues/new', text: 'Feedback' },
    { href: 'https://design-system.service.gov.uk/', text: 'Gov.UK Design System' }
  ];

  return (
    <Page
      footerNavigation={footerNavigation}
      navigation={navigation}
      serviceName="Design System"
      title="Home Office Design System"
    >
      {children}
    </Page>
  );
};

export default PageWrap;
