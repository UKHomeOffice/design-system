import { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from "@not-govuk/component-helpers";
import { monthNumbers, dayNumbers, monthFromNumber } from "./utils";

import "../assets/Date.scss";

export type DateProps = StandardProps & {
	yyyy?: number;
	mm?: monthNumbers;
	dd?: dayNumbers;
	dateTime?: string; // ISO - "2022-03-03T19:39:33.233Z"
};

export const Date: FC<DateProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	heading,
	yyyy,
	mm,
	dd,
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
		return (
			<div {...attrs} className={classes()}>
				{/* {children} */}
				<time dateTime={dateTime}>{}</time>
			</div>
		);
	}

	const dateString = `${dd} ${monthFromNumber(mm)} ${yyyy}`;

	return (
		<div {...attrs} className={classes()}>
			{children}
			<time>{dateString}</time>
		</div>
	);
};

Date.displayName = "Date";

export default Date;