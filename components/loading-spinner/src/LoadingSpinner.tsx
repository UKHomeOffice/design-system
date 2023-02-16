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
      <h1 className={classes('text')}>{textContent}</h1>
    </div>
  );
};

export default LoadingSpinner;
