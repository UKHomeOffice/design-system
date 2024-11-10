import { FC, Fragment, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { formatTime } from "./utils";

import '../assets/Time.scss';

export type TimeProps = StandardProps & {
  /** Displays time as a 12 or 24 hour clock */
  clockType?: 12 | 24
  /** Whether to not wrap the time in a time element */
  noWrap?: boolean
    /** The time in ISO format */
  time: string
};

export const Time: FC<TimeProps> = ({
  	classBlock,
  	classModifiers,
  	className,
  	clockType = 12,
  	time,
    noWrap = false,
  	...attrs
}) => {
  const classes = classBuilder('hods-time', classBlock, classModifiers, className);

  const formattedTime = formatTime(
	  time,
	  clockType
  );

  return noWrap ? (
    <Fragment>
      {formattedTime}
    </Fragment>
  ) : (
    <time {...attrs} className={classes()} dateTime={time}>
      {formattedTime}
    </time>
  );

};

Time.displayName = 'Time';

export default Time;
