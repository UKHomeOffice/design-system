import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/LoadingSpinner.scss';

export type LoadingSpinnerProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('hods-loading-spinner', classBlock, classModifiers, className);
  const title = heading || 'loading-spinner';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
