import { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import {
	monthNumbers,
	dayNumbers,
	months,
	formatDateFromISOString,
	formatTimeFromISOString,
} from "./utils";
import "../assets/Date.scss";

interface dateValues {
	year: number;
	month: monthNumbers;
	day: dayNumbers;
}

export type DateProps = StandardProps & {
	dateValues?: dateValues;
	ISOString?: string; // takes an ISO date string and returns a formatted date (and time) string
	//** set whether time should shown with the date - 14:30pm 31 March 2021 */
	displayTime?: boolean;
	//** input from designer on how to write date with time - 14:30pm on 31 March 2022 or 31 March 2022 at 14:30pm. What should be the defacto setting? */
	precedence?: "time" | "date";
};

export const Date: FC<DateProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	dateValues,
	ISOString,
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

	//** build date string from inputted values dateValues={{day: 3, month: 1, year: 2022}} */
	if (dateValues) {
		const date = [];
		for (const dateValue in dateValues) {
			if (dateValue == "month") {
				date.push(months[dateValues[dateValue] - 1]);
			} else {
				date.push(dateValues[dateValue]);
			}
		}
		return (
			<div {...attrs} className={classes()}>
				<time>{date.join(" ")}</time>
			</div>
		);
	}

	//** build date and time from an ISO String dateTime={} */
	if (ISOString) {
		const dateString = formatDateFromISOString(ISOString);
		//** convert time to string if displayTime is set to true */
		const timeString = displayTime ? formatTimeFromISOString(ISOString) : null;

		return (
			<div {...attrs} className={classes()}>
				{precedence === "time" ? (
					<time dateTime={ISOString}>
						{timeString ? `${timeString} on ` : ``}
						{dateString}
					</time>
				) : (
					<time dateTime={ISOString}>
						{dateString}
						{timeString ? ` at ${timeString}` : ``}
					</time>
				)}
			</div>
		);
	}
};

Date.displayName = "Date";

export default Date;
