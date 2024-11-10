import { FC, Fragment, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { DateDisplay } from "@hods/date-display";
import {Time} from "@hods/time";

import "../assets/DateTime.scss";

export type DateTimeProps = StandardProps & {
	/** Date-time string in ISO-8601 format */
	dateTime: string;
	/** Displays time or date first */
	precedence?: "time" | "date";
	/** Displays time as a 12 or 24 hour clock */
	clockType?: 12 | 24;
};

export const DateTime: FC<DateTimeProps> = ({
	classBlock,
	classModifiers,
	className,
	dateTime,
	precedence = "date",
	clockType = 12,
	...attrs
}) => {
	const classes = classBuilder(
		"hods-date-time",
		classBlock,
		classModifiers,
		className
	);

	return (
		<time {...attrs} className={classes()} dateTime={dateTime}>
		{ precedence === "time" ? (
		<Fragment>
		<Time time={dateTime} clockType={clockType} noWrap /> on <DateDisplay date={dateTime} noWrap />
		</Fragment>
		):(
		<Fragment>
		<DateDisplay date={dateTime} noWrap /> at <Time time={dateTime} clockType={clockType} noWrap />
		</Fragment>
		)}
		</time>
	);
};

DateTime.displayName = "DateTime";

export default DateTime;
