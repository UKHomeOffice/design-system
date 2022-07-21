import { FC, Fragment, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/DateDisplay.scss';

export type DateDisplayProps = StandardProps & {
  /** The date in ISO format */
  date: string
  /** Whether to wrap the date in a time element */
  wrap?: boolean
 
};

export const DateDisplay: FC<DateDisplayProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  date: _date,
  wrap = true,
  ...attrs
}) => {
  const classes = classBuilder('hods-date-display', classBlock, classModifiers, className);
  const date = new Date(_date);
  const formattedDate = date.toLocaleString("en-GB", {year: "numeric", month: "long", day: "numeric"});

  return wrap ? (
    <time {...attrs} className={classes()} dateTime={_date}>
      {formattedDate}
    </time>
  ) : (
    <Fragment>
      {formattedDate}
    </Fragment>
  );
};

DateDisplay.displayName = 'DateDisplay';

export default DateDisplay;
