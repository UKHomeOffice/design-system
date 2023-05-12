import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { Button, ButtonProps } from '@not-govuk/button';

import '../assets/Button.scss';

export type HomeOfficeButtonProps = ButtonProps

const defaultClassBlock = 'hods-button';

export const HomeOfficeButton: FC<ButtonProps> = ({
  children,
  classBlock,
  ...attrs
}) => {
  return (
    <Button
      classBlock={classBlock || defaultClassBlock}
      {...attrs}
    >
      {children}
    </Button>
  );
};

Button.displayName = 'Button';

export default Button;
