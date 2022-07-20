import { FC, Fragment, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { formatDateTimeFromISOString } from "./utils";
import { DateDisplay } from "@hods/date-display";

import "../assets/DateTime.scss";

export type DateTimeProps = StandardProps & {
	/** ISO string */
	ISOString: string;
	/** Displays time or date first */
	precedence?: "time" | "date";
	/** Displays time as a 12 or 24 hour clock */
	clockType?: 12 | 24;
};

export const DateTime: FC<DateTimeProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	ISOString,
	precedence = "time",
	clockType = 12,
	...attrs
}) => {
	const classes = classBuilder(
		"hods-date-time",
		classBlock,
		classModifiers,
		className
	);

	const { formattedTime } = formatDateTimeFromISOString(
		ISOString,
		clockType
	);

	return (
		<time {...attrs} className={classes()} dateTime={ISOString}>
		{ precedence === "time" ? (
		<Fragment>
		{formattedTime} on <DateDisplay date={ISOString} wrap={false} />
		</Fragment>
		):(
		<Fragment>
		<DateDisplay date={ISOString} wrap={false} /> at {formattedTime}
		</Fragment>
		)}
		</time>
	);
};

DateTime.displayName = "DateTime";

export default DateTime;
