import { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { dateValues, formatDateTimeFromISOString } from "./utils";

import "../assets/DateTime.scss";

export type DateTimeProps = StandardProps & {
	ISOString?: string; // an ISO String representing date with/without time

	displayDate?: boolean; // sets whether date should be shown

	displayTime?: boolean; // sets whether time should be shown with the date

	dateFormat?: dateValues[]; // array of three strings that sets the format of the date

	precedence?: "time" | "date"; // sets whether time should written first or date written first i.e 4:30pm on 31 March 2022 or 31 March 2022 at 4:30pm

	clockType?: 12 | 24; // sets whether clock should be a 12 hour clock or a 24 hour clock
};

export const DateTime: FC<DateTimeProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	ISOString,
	displayTime,
	displayDate,
	dateFormat = ["day", "month", "year"],
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
		dateFormat,
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
