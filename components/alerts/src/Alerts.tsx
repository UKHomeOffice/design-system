import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Alerts.scss';

export type AlertsProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading: string
  type?: "standard" | "successful" | "error" 
};

export const Alerts: FC<AlertsProps> = ({ children, classBlock, classModifiers, className, heading, type="standard", ...attrs }) => {
  const classes = classBuilder('hods-alerts', classBlock, classModifiers, className);
  const modifier = `hods-alert-${type}`

  return (
      <div className={`hods-panel hods-panel-border-wide ${modifier}`}>
        <h2 className="govuk-heading-s">{heading}</h2>
        <p>{children}</p>
      </div>
  );
};

export default Alerts;
