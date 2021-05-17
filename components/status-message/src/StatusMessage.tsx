import { FC, createElement as h, ReactElement, ReactNodeArray } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { A } from "@not-govuk/components";

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
  status?: string,
  /** Links to perform status related actions */
  actions?: StatusAction[]
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
      <p>
        {status}
        {children && <span className={classes('extra')}>{status && ' '}{children}</span>}
      </p>
      {actions && actions.length &&
        <ul className={classes('actions')}>
          {actions.map((a, i) => (
            <li key={i}>
              <A className={classes('button')} href={a.href} title={a.title}>{a.text}</A>
            </li>
          ))}
        </ul>
      }
    </div>
  ) : null;
};

export default StatusMessage;
