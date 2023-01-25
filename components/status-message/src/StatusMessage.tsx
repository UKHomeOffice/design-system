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
    <div {...attrs} className={classes()}>
      <div>
        <p className={classes('status')}>{status}</p>
        {children && <p className={classes('extra')}> {children}</p>}
      </div>
      {actions && actions.length && (
        <AnchorList items={actions} classBlock={classes('actions')} />
      )}
    </div>
  );
};

export default StatusMessage;
