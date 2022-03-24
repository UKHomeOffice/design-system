import React, { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { dateValues, formatDateTimeFromISOString } from "./utils";
import "../assets/Date.scss";

export type DateProps = StandardProps & {
	ISOString?: string; // takes an ISO date string and returns a formatted date (and time) string

	displayDate: boolean; // set whether date should be shown

	displayTime: boolean; // set whether time should be shown with the date, false unless set to true

	dateFormat?: dateValues[]; // array of three strings that sets the format of the date

	precedence?: "time" | "date"; // sets whether time should written first or date i.e 4:30pm on 31 March 2022 or 31 March 2022 at 4:30pm

	// sets whether clock should be a 12 hour clock or a 24 hour clock - defaults to 12
	clockType?: 12 | 24;
};

export const Date: FC<DateProps> = ({
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
		"hods-date",
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

Date.displayName = "Date";

export default Date;
