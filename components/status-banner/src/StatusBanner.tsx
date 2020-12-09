import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';


import '../assets/StatusBanner.scss';

export type StatusBannerProps = StandardProps & {
  status: string
};

export const StatusBanner: FC<StatusBannerProps> = ({ children, classBlock, classModifiers, className, status, ...attrs }) => {
  const classes = classBuilder('hods-status-banner', classBlock, classModifiers, className);

  return (

    <details {...attrs} className={classes()}>
<summary className={classes('summary')}>{status}</summary>
<div className={classes('text')}>
      {children}
      </div>
  </details>

  );
};

export default StatusBanner;
