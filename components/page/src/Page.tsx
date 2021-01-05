import { FC, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { SkipLink } from '@not-govuk/components';
import { Header, HeaderProps } from '@hods/header';
import { Footer, NavigationLink } from '@hods/footer';

import '../assets/Page.scss';

export type PageProps = StandardProps & HeaderProps & {
  /** Footer links */
  footerNavigation?: NavigationLink[]
  /** Footer content */
  footerContent?: ReactNode
  /** Title of the HTML page (can be overridden via Helmet  */
  title?: string
};

export const Page: FC<PageProps> = ({
  accountHref,
  children,
  classBlock,
  classModifiers,
  className,
  footerContent,
  footerNavigation,
  navigation,
  serviceHref,
  serviceName: _serviceName,
  signOutHref,
  signOutText,
  title: _title,
  username,
  ...attrs
}) => {
  const classes = classBuilder('hods-page', classBlock, classModifiers, className);
  const serviceName = _serviceName || _title;
  const title = _title || _serviceName || 'Home Office';
  const headerProps = {
    accountHref,
    navigation,
    serviceHref,
    serviceName,
    signOutHref,
    signOutText,
    username
  };
  const footerProps = {
    navigation: footerNavigation
  };

  return (
    <div {...attrs} className={classes()}>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <SkipLink id="skip-link" for="main-content" />
      <Header {...headerProps} className={classes('header')} />
      <div className={classes('body')}>
        <div className={classes('container') + ' hods-width-container'}>
          <main id="main-content" className={classes('main')} role="main">
            {children}
          </main>
        </div>
      </div>
      <Footer {...footerProps}>{footerContent}</Footer>
    </div>
  );
};

export default Page;
