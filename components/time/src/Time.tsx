import { FC, Fragment, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { formatTime } from "./utils";

import '../assets/Time.scss';

export type TimeProps = StandardProps & {
  /** Displays time as a 12 or 24 hour clock */
  clockType?: 12 | 24
  /** Whether to wrap the time in a time element */
  wrap?: boolean
    /** The time in ISO format */
  time: string
};

export const Time: FC<TimeProps> = ({
  	children,
  	classBlock,
  	classModifiers,
  	className,
  	clockType = 12,
  	time,
  	wrap = true,
  	...attrs
}) => {
  const classes = classBuilder('hods-time', classBlock, classModifiers, className);
  
  const formattedTime = formatTime(
	  time,
	  clockType
  );
  
  return wrap ? (
    <time {...attrs} className={classes()} dateTime={time}>
      {formattedTime}
    </time>
  ) : (
    <Fragment>
      {formattedTime}
    </Fragment>
  );
  
};

Time.displayName = 'Time';

export default Time;
