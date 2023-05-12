import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Button.scss';

export type ButtonProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Button: FC<ButtonProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('hods-button', classBlock, classModifiers, className);
  const title = heading || 'Button';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

Button.displayName = 'Button';

export default Button;
