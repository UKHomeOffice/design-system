import {FC, createElement as h, useEffect, useRef} from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Modal.scss';

export type ModalProps = StandardProps & {
  /** Show or hide the modal */
  show: boolean;
};

export const Modal: FC<ModalProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  show,
  ...attrs
}) => {
  const classes = classBuilder('hods-modal', classBlock, classModifiers, className);

  return (
      <div className={`${show ? classes('overlay') : classes('hide')}`}>
          <dialog open={show} {...attrs} className={classes('content')}>{children}</dialog>
      </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
