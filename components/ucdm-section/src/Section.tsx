import { FC, ReactNode,  createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { Head } from '@not-govuk/head';
import { PageBanner } from '@hods/ucdm-page-banner';
import { ServiceNavigation, ServiceNavigationProps } from '@hods/service-navigation';

import '../assets/Section.scss';

export type SectionProps = StandardProps & {
  children?: ReactNode
  /** Description of the section  */
  description?: ReactNode
  /** Links for the navigation  */
  navigation?: Pick<ServiceNavigationProps, 'items'>['items']
  /** Title of the section  */
  title: string
  /** URL of the section  */
  href: string
};

export const Section: FC<SectionProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  description = null,
  navigation = [],
  title,
  href,
  ...attrs
}) => {
  const classes = classBuilder('hods-ucdm-section', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes()}>
      <Head>
        <meta name="og:article:section" content={title} />
      </Head>
      <div className={classes('header')}>
        <PageBanner className={classes('banner')} heading={title}>{description}</PageBanner>
        {!navigation.length ? null : (
          <ServiceNavigation className={classes('navigation')} items={navigation} serviceName={title} serviceHref={href} />
        )}
      </div>
      <div className={classes('container', undefined, 'hods-width-container')}>
        {children}
      </div>
    </div>
  );
};

Section.displayName = 'Section';

export default Section;
