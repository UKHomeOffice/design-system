import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { Anchor, AnchorList } from "@not-govuk/anchor-list";

import '../assets/StatusMessage.scss';

export type StatusMessageProps = StandardProps & {
  /** Summary of status */
  status: string,
  /** Extra information about the status */
  children?: any,
  /** Links to perform status related actions */
  actions?: Anchor[]
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
  const classes = classBuilder(
    'hods-status-message',
    classBlock,
    classModifiers,
    className
  );

  return (
    <div {...attrs} className={classes()} role="region" aria-labelledby="hods-status-message-status">
        <h2 className={classes('status')} id="hods-status-message-status">{status}</h2>
        {children && <p className={classes('extra')}> {children}</p>}
      {actions && actions.length && (
        <AnchorList items={actions} classBlock={classes('actions')} />
      )}
    </div>
  );
};

export default StatusMessage;
