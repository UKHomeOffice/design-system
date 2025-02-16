import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/PageBanner.scss';

export type PageBannerProps = StandardProps & {
  /** The contents of the banner */
  children?: ReactNode
  /** The heading of the banner */
  heading: ReactNode
};

export const PageBanner: FC<PageBannerProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('hods-ucdm-page-banner', classBlock, classModifiers, className);

  return (
    <div role="banner" {...attrs} className={classes()}>
      <div className={classes('container', undefined, 'hods-width-container')}>
        <div role="heading" className={classes('heading')}>{heading}</div>
        {children}
      </div>
    </div>
  );
};

PageBanner.displayName = 'PageBanner';

export default PageBanner;
