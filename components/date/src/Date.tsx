import { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import {
	monthNumbers,
	dayNumbers,
	monthFromNumber,
	formatDateTimeFromISOString,
} from "./utils";

import "../assets/Date.scss";

export type DateProps = StandardProps & {
	//** allow year, month, day values to be inputted seperately */
	year?: number;
	month?: monthNumbers;
	day?: dayNumbers;
	//** alternatively, input a javascript ISO date string to transfor into a date - "2022-03-03T19:39:33.233Z" */
	dateTime?: string;
};

export const Date: FC<DateProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	heading,
	year,
	month,
	day,
	dateTime,
	...attrs
}) => {
	const classes = classBuilder(
		"hods-date",
		classBlock,
		classModifiers,
		className
	);

	if (dateTime) {
		const dateString = formatDateTimeFromISOString(dateTime);

		return (
			<div {...attrs} className={classes()}>
				<time dateTime={dateTime}>{dateString}</time>
			</div>
		);
	}

	const dateString = `${day} ${monthFromNumber(month)} ${year}`;

	return (
		<div {...attrs} className={classes()}>
			<time>{dateString}</time>
		</div>
	);
};

Date.displayName = "Date";

export default Date;