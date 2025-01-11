/// <reference path='./bundler.d.ts' />
'use client';

import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { Head } from '@not-govuk/head';
import { SkipLink } from '@not-govuk/skip-link';
import { Header, HeaderProps } from '@hods/ucdm-header';
import { Footer, NavigationLink } from '@hods/footer';
import { ServiceNavigation, ServiceNavigationProps } from '@hods/service-navigation';
import { unwrapImage } from './types';

import '../assets/Page.scss';

import iFavicon from '../assets/images/ho-favicon.ico';
import iMaskIcon from '../assets/images/ho-mask-icon.svg';
import iAppleTouchIcon180 from '../assets/images/ho-apple-touch-icon-180x180.png';
import iAppleTouchIcon167 from '../assets/images/ho-apple-touch-icon-167x167.png';
import iAppleTouchIcon152 from '../assets/images/ho-apple-touch-icon-152x152.png';
import iAppleTouchIcon from '../assets/images/ho-apple-touch-icon.png';
import iOGImage from '../assets/images/ho-opengraph-image.png';

const favicon = unwrapImage(iFavicon);
const maskIcon = unwrapImage(iMaskIcon);
const appleTouchIcon180 = unwrapImage(iAppleTouchIcon180);
const appleTouchIcon167 = unwrapImage(iAppleTouchIcon167);
const appleTouchIcon152 = unwrapImage(iAppleTouchIcon152);
const appleTouchIcon = unwrapImage(iAppleTouchIcon);
const ogImage = unwrapImage(iOGImage);

export type PageProps = StandardProps & HeaderProps & {
  children?: ReactNode
  /** Footer links */
  footerNavigation?: NavigationLink[]
  /** Footer content */
  footerContent?: ReactNode
  /** Navigation links */
  navigation?: Pick<ServiceNavigationProps, 'items'>['items']
  /** Force the serviceName to be diplayed in the header */
  serviceNameInHeader?: boolean
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
  navigation = [],
  searchAction,
  serviceHref,
  serviceName: _serviceName,
  serviceNameInHeader: _serviceNameInHeader,
  signOutHref,
  signOutText,
  title: _title,
  username,
  ...attrs
}) => {
  const classes = classBuilder('hods-ucdm-page', classBlock, classModifiers, className);
  const title = _title || _serviceName || 'Home Office';
  const serviceNameInHeader = (
    _serviceNameInHeader !== undefined
    ? _serviceNameInHeader
    : !navigation.length
  );
  const headerProps = {
    accountHref,
    navigation,
    searchAction,
    serviceHref,
    serviceName: serviceNameInHeader ? _serviceName : undefined,
    signOutHref,
    signOutText,
    username
  };
  const serviceName = serviceNameInHeader ? undefined : _serviceName;

  const footerProps = {
    navigation: footerNavigation
  };

  return (
    <div {...attrs} className={classes()}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" sizes="16x16 32x32 48x48" href={favicon} type="image/x-icon" />
        <link rel="mask-icon" href={maskIcon} color="#0b0c0c" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon180} />
        <link rel="apple-touch-icon" sizes="167x167" href={appleTouchIcon167} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleTouchIcon152} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <SkipLink id="skip-link" for="main-content" />
      <Header {...headerProps} className={classes('header')} />
      <ServiceNavigation className={classes('navigation', serviceName && 'service-name')} items={navigation} serviceName={serviceName} serviceHref={serviceHref} />
      <div className={classes('body')}>
        <div className={classes('container')}>
          {children}
        </div>
      </div>
      <Footer {...footerProps}>{footerContent}</Footer>
    </div>
  );
};

Page.displayName = 'Page';

export default Page;
