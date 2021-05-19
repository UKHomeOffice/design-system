import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { AnchorList } from "@not-govuk/anchor-list";

import '../assets/StatusMessage.scss';

export type StatusAction = {
  /** Location to link to */
  href: string
  /** Text of the link */
  text: string
  /** Title of the link */
  title?: string
};

export type StatusMessageProps = StandardProps & {
  /** Summary of status */
  status: string,
  /** Extra information about the status */
  children?: any,
  /** Links to perform status related actions */
  actions?: StatusAction[]
};

export const StatusMessage: FC<StatusMessageProps> = ({
    classBlock,
    classModifiers,
    className,
    status,
    children,
    actions,
    ...attrs
  }) => {
  const classes = classBuilder('hods-status-message', classBlock, classModifiers, className);

  return status || children ? (
    <div {...attrs} className={classes()}>
      <p>
        {status}
        {children && <span className={classes('extra')}> {children}</span>}
      </p>
      {actions && actions.length && <AnchorList items={actions} classBlock={classes('actions')} />}
    </div>
  ) : null;
};

export default StatusMessage;
