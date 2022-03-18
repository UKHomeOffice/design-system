import React, { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { dateValues, formatDateTimeFromISOString } from "./utils";
import "../assets/Date.scss";

export type DateProps = StandardProps & {
	ISOString?: string; // takes an ISO date string and returns a formatted date (and time) string

	dateFormat?: dateValues[]; // array of three strings that sets the format of the date

	displayTime?: boolean; // set whether time should be shown with the date, false unless set to true

	//** input from designer on how to write date with time - 14:30pm on 31 March 2022 or 31 March 2022 at 14:30pm. What should be the defacto setting? */
	precedence?: "time" | "date"; // sets whether time should written first or date i.e 4:30pm on 31 March 2022 or 31 March 2022 at 4:30pm
};

export const Date: FC<DateProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	ISOString,
	dateFormat = ["day", "month", "year"],
	displayTime = false,
	precedence = "time",
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
		dateFormat,
		displayTime
	);

	return (
		<div {...attrs} className={classes()}>
			{precedence === "time" ? (
				<time dateTime={ISOString}>
					{formattedTime ? `${formattedTime} on ` : ``}
					{formattedDate}
				</time>
			) : (
				<time dateTime={ISOString}>
					{formattedDate}
					{formattedTime ? ` at ${formattedTime}` : ``}
				</time>
			)}
		</div>
	);
};

Date.displayName = "Date";

export default Date;
