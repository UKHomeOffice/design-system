import { FC, Fragment, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/DateDisplay.scss';

export type DateDisplayProps = StandardProps & {
  /** The date in ISO format */
  date: string
  /** Whether to not wrap the date in a time element */
  noWrap?: boolean
};

export const DateDisplay: FC<DateDisplayProps> = ({
  classBlock,
  classModifiers,
  className,
  date: _date,
  noWrap = false,
  ...attrs
}) => {
  const classes = classBuilder('hods-date-display', classBlock, classModifiers, className);
  const date = new Date(_date);
  const formattedDate = date.toLocaleString("en-GB", {year: "numeric", month: "long", day: "numeric"});

  return noWrap ? (
    <Fragment>
      {formattedDate}
    </Fragment>
  ) : (
    <time {...attrs} className={classes()} dateTime={_date}>
      {formattedDate}
    </time>
  );
};

DateDisplay.displayName = 'DateDisplay';

export default DateDisplay;
