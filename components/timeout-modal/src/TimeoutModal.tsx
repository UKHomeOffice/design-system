import { FC, createElement as h, useState, useEffect, useRef } from 'react';
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
  /** Function called when timeout timer ends */
  onTimeout: () => void
};

export const TimeoutModal: FC<TimeoutModalProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  isOpen = true,
  timerDurationInSeconds,
  onContinue,
  onSignout,
  onTimeout,
  ...attrs
}) => {
  const classes = classBuilder('hods-timeout-modal', classBlock, classModifiers, className);
  const modalRef = useRef();

  // Taken from React documentation for managing modals with useEffect
  useEffect(() => {
    if(!isOpen) {
      return;
    }
    const dialog = modalRef.current;
    // @ts-ignore
    dialog.showModal(); return () => dialog.close();
  }, [isOpen]);

  if(!isOpen) {
    return null;
  }

  return (
      <div {...attrs} className={classes('overlay')} >
        <dialog ref={modalRef} aria-labelledby='modalTitle' aria-describedby='modalContent' className={classes('content')}>
          <h2 id='modalTitle'>You will be signed out soon</h2>
          <p id='modalContent' aria-live='polite'>
            To protect your information, you will be signed out in <Timer className={classes('timer')} timerFrom={isOpen ? timerDurationInSeconds : 0} onTimeout={onTimeout}/>.
          </p>
          <div className={classes('buttons')}>
            <button role='button' onClick={onContinue}>Continue on this page</button>
            <a role='link' onClick={onSignout}>Sign out</a>
          </div>
        </dialog>
      </div>
  );
};

TimeoutModal.displayName = 'TimeoutModal';

export default TimeoutModal;
