import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Alert.scss';

export type AlertProps = StandardProps & {
  /** Heading of the alert */
  heading: string
};

export const Alert: FC<AlertProps> = ({ children, classBlock, classModifiers, className, heading, ...attrs }) => {
  const classes = classBuilder('hods-alert', classBlock, classModifiers, className);

  return (
      <div className={classes()}>
        <h2 className={classes('heading')}>{heading}</h2>
        <p>{children}</p>
      </div>
  );
};

export default Alert;
