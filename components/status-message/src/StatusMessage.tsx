import {FC, createElement as h, ReactElement, ReactNodeArray} from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/StatusMessage.scss';

export type StatusMessageProps = StandardProps & {
  /** Summary of status */
  status?: string,
  /** Links to perform status related actions */
  actions?: ReactElement<any> | ReactNodeArray
};

export const StatusMessage: FC<StatusMessageProps> = ({
    children,
    classBlock,
    classModifiers,
    className,
    status,
    actions,
    ...attrs
  }) => {
  const classes = classBuilder('hods-status-message', classBlock, classModifiers, className);

  return status || children ? (
    <div {...attrs} className={classes()}>
      <p className="govuk-!-font-weight-bold">
        {status}
        <span className={classes('extra')}>{status && children ? ' - ' : null}{children}</span>
      </p>
      {actions ? <span className={classes('actions')}>{actions}</span> : null}
    </div>
  ) : null;
};

export default StatusMessage;
