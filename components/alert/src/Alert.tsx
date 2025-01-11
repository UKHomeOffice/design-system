import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { InsetText } from '@not-govuk/inset-text';

import '../assets/Alert.scss';

export type AlertProps = StandardProps & {
  children?: ReactNode
  /** Heading of the alert */
  heading: string
};

export const Alert: FC<AlertProps> = ({
  children,
  classBlock = 'hods-alert',
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('hods-alert', classBlock, classModifiers, className);

  return (
      <InsetText {...attrs} classBlock={classBlock} classModifiers={classModifiers} className={className}>
        <h2 className={classes('heading')}>{heading}</h2>
        <p>
          {children}
        </p>
      </InsetText>
  );
};

export default Alert;
