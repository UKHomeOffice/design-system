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
export const formatDateFromISOString = (
	dateStirng: string,
	dateFormatArray: dateValues[]
): string => {
	const date = new Date(dateStirng);
	const dateFormat = [];
	dateFormatArray.forEach((dateValue) => {
		switch (dateValue) {
			case "day":
				dateFormat.push(date.getDate());
				break;
			case "month":
				dateFormat.push(months[date.getMonth()]);
				break;
			case "year":
				dateFormat.push(date.getFullYear());
				break;
		}
	});
	return dateFormat.join(" ");
};

export const formatTimeFromISOString = (dateString: string): string => {
	const date = new Date(dateString);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${hours > 12 ? pmTimes.indexOf(hours) + 1 : hours}:${minutes}${
		hours > 11 ? "pm" : "am"
	}`;
};
