export type dateValues = "day" | "month" | "year";
export const pmTimes = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const formatDateTimeFromISOString = (
	dateString: string,
	dateFormatArray: dateValues[],
	displayTime: boolean,
	clockType: 12 | 24
) => {
	const date = new Date(dateString);
	const formattedDate = dateFormatArray
		.map((dateValue) => {
			switch (dateValue) {
				case "day":
					return date.getDate();
				case "month":
					return months[date.getMonth()];
				case "year":
					return date.getFullYear();
			}
		})
		.join(" ");

	let formattedTime = null;

	if (displayTime) {
		const hours = date.getHours();
		const minutes = date.getMinutes();

		formattedTime =
			clockType === 24
				? (`${hours}:${minutes}`)
				: (`${
						hours > 12 ? pmTimes.indexOf(hours) + 1 : hours
				  }:${minutes}${hours > 11 ? "pm" : "am"}`);
	}

	return {
		formattedDate,
		formattedTime,
	};
};
