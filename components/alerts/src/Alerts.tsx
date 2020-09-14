import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Alerts.scss';

export type AlertsProps = StandardProps & {
  /** Heading of the alert */
  heading: string
};

export const Alerts: FC<AlertsProps> = ({ children, classBlock, classModifiers, className, heading, ...attrs }) => {
  const classes = classBuilder('hods-alerts', classBlock, classModifiers, className);

  return (
      <div className={classes()}>
        <h2 className={classes('heading')}>{heading}</h2>
        <p>{children}</p>
      </div>
  );
};

export default Alerts;
