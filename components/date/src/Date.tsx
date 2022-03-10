import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Date.scss';

export type DateProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Date: FC<DateProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('hods-date', classBlock, classModifiers, className);
  const title = heading || 'date';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

Date.displayName = 'Date';

export default Date;
