import { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { formatDateTimeFromISOString } from "./utils";

import "../assets/DateTime.scss";

export type DateTimeProps = StandardProps & {
	/** ISO string */
	ISOString: string;
	/** Displays date when true */
	displayDate?: boolean;
	/** Displays time when true */
	displayTime?: boolean;
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
	displayTime,
	displayDate,
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

	const { formattedDate, formattedTime } = formatDateTimeFromISOString(
		ISOString,
		displayDate,
		displayTime,
		clockType
	);

	let formattedDateTimeString;

	if (displayTime && displayDate) {
		formattedDateTimeString =
			precedence === "time"
				? formattedTime
					? `${formattedTime} on ${formattedDate}`
					: `${formattedDate}`
				: formattedTime
				? `${formattedDate} at ${formattedTime}`
				: `${formattedDate}`;
	} else {
		formattedDateTimeString = displayDate
			? formattedDate
			: displayTime
			? formattedTime
			: undefined;
	}

	return (
		<div {...attrs} className={classes()}>
			<time dateTime={ISOString}>{formattedDateTimeString}</time>
		</div>
	);
};

DateTime.displayName = "DateTime";

export default DateTime;
