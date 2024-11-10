import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/ExpandableBanner.scss';

export type ExpandableBannerProps = StandardProps & {
  children?: ReactNode
  status: string
};

export const ExpandableBanner: FC<ExpandableBannerProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  status,
  ...attrs
}) => {
  const classes = classBuilder('hods-expandable-banner', classBlock, classModifiers, className);

  return (
    <details {...attrs} className={classes()}>
      <summary className={classes('summary')}>{status}</summary>
      <div className={classes('text')}>
        {children}
      </div>
    </details>
  );
};

export default ExpandableBanner;
