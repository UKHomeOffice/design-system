import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/LoadingSpinner.scss';

export type LoadingSpinnerProps = StandardProps & {
  children?: ReactNode
};

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  children = 'Loading...',
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('hods-loading-spinner', classBlock, classModifiers, className);

  return (
    <div className={classes()} {...attrs} role="status">
      <div className={classes('spinner')} />
      <div className={classes('content')}>
        <h1 className='govuk-heading-m'>{children}</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
