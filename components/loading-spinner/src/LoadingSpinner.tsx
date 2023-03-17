import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/LoadingSpinner.scss';

export const LoadingSpinner: FC<StandardProps> = ({
   children = 'Loading...',
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('hods-loading-spinner', classBlock, classModifiers, className);

  return (
    <div className={classes()} {...attrs}>
      <div className={classes('spinner')} aria-live="polite" role="status" />
      <div className={classes('content')}>
        <h1 className='govuk-heading-m'>{children}</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
