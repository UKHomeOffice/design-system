import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { SkipLink } from '@not-govuk/components';
import { Header, HeaderProps } from '@hods/header';
import { Footer, NavigationLink } from '@hods/footer';

import '../assets/Page.scss';

export type PageProps = HeaderProps & {
  /** Footer links */
  footerNavigation?: NavigationLink[]
  /** Footer content */
  footerContent?: ReactNode
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
  signOutHref,
  signOutText,
  title,
  titleHref,
  username,
  ...attrs
}) => {
  const classes = classBuilder('hods-page', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes()}>
      <SkipLink id="skip-link" href="#main-content" />
      <Header
        accountHref={accountHref}
        navigation={navigation}
        signOutHref={signOutHref}
        signOutText={signOutText}
        title={title}
        titleHref={titleHref}
        username={username}
      />
      <div className={classes('body')}>
        <div className={classes('container') + ' hods-width-container'}>
          <main id="main-content" className={classes('main')} role="main">
            {children}
          </main>
        </div>
      </div>
      <Footer navigation={footerNavigation}>{footerContent}</Footer>
    </div>
  );
};

export default Page;
