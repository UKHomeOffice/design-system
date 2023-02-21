import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/LoadingSpinner.scss';

export type LoadingSpinnerProps = StandardProps & {
  /** Text content for the loading spinner */
  textContent: string
};

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  textContent,
  ...attrs
}) => {
  const classes = classBuilder('hods-loading-spinner', classBlock, classModifiers, className);

  return (
    <div className={classes()} {...attrs}>
      <div className={classes('spinner')} aria-live="polite" role="status" />
      <div className={classes('content')}>
        <h1 className='govuk-heading-m'>{textContent}</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
