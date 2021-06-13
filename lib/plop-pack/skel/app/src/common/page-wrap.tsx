import { FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Page } from '@hods/components';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ routes, children }) => {
  const compare = (a, b) => (
    a.href > b.href
    ? 1
    : -1
  );
  const navigation = routes
    .map(e => ({
      href: e.href,
      text: e.title
    }))
    .sort(compare);

  return (
    <Page
      footerNavigation={navigation}
      navigation={navigation}
      title="My new service"
    >
      {children}
    </Page>
  );
};

export default PageWrap;
