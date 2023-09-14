import { FC, createElement as h, useState } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/TimeoutModal.scss';
import { Timer } from './Timer';

export type TimeoutModalProps = StandardProps & {
  /** Determines whether the modal should be opend or closed */
  isOpen: boolean,
  /** Starting value of the timeout timer in seconds */
  timerDurationInSeconds: number,
  /** Function called when the user clicks the modal button */
  onContinue: () => void,
  /** Function called when the user clicks the modal link */
  onSignout: () => void,
};

export const TimeoutModal: FC<TimeoutModalProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  isOpen,
  timerDurationInSeconds = 300,
  onContinue,
  onSignout,
  ...attrs
}) => {
  const classes = classBuilder('hods-timeout-modal', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes('overlay')}>
      <div role='dialog' aria-labelledby='modalTitle' aria-describedby='modalContent' className={classes('content')}>
        <h1 id='modalTitle'>You will be signed out soon</h1>
        <p id='modalContent' aria-live='polite'>To protect your information, you will be signed out in <Timer className={classes('timer')} timerFrom={timerDurationInSeconds}/>.</p>
        <div className={classes('buttons')}>
          <button role='button' onClick={onContinue}>Continue on this page</button>
          <a role='link' onClick={onSignout}>Sign out</a>  
        </div>
      </div>
    </div>
  );
};

TimeoutModal.displayName = 'TimeoutModal';

export default TimeoutModal;
