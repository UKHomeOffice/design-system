import { formatDateTimeFromISOString } from "../src/utils";

describe("Date Utils", () => {
	it("Formats date string dd/mm/yyyy", () => {
		const { formattedDate } = formatDateTimeFromISOString(
			"2022-01-10T19:39:33.233Z",
			["day", "month", "year"],
			false
		);
		expect(formattedDate).toBe(`10 January 2022`);
	});
	it("Formats date string yyyy/mm/dd", () => {
		const { formattedDate } = formatDateTimeFromISOString(
			"2022-01-10T19:39:33.233Z",
			["month", "day", "year"],
			false
		);
		expect(formattedDate).toBe(`January 10 2022`);
	});
	it("Formats date string mm/dd/yyyy", () => {
		const { formattedDate } = formatDateTimeFromISOString(
			"2022-01-10T19:39:33.233Z",
			["year", "day", "month"],
			false
		);
		expect(formattedDate).toBe(`2022 10 January`);
	});
	it.each([
		{ number: "01", string: "January" },
		{ number: "02", string: "February" },
		{ number: "03", string: "March" },
		{ number: "04", string: "April" },
		{ number: "05", string: "May" },
		{ number: "06", string: "June" },
		{ number: "07", string: "July" },
		{ number: "08", string: "August" },
		{ number: "09", string: "September" },
		{ number: "10", string: "October" },
		{ number: "11", string: "November" },
		{ number: "12", string: "December" },
	])("Converts number to month string", ({ number, string }) => {
		const { formattedDate } = formatDateTimeFromISOString(
			`2022-${number}-10T19:39:33.233Z`,
			["day", "month", "year"],
			false
		);
		expect(formattedDate).toBe(`10 ${string} 2022`);
	});
	it.each([
		{ number: 13, value: 1 },
		{ number: 14, value: 2 },
		{ number: 15, value: 3 },
		{ number: 16, value: 4 },
		{ number: 17, value: 5 },
		{ number: 18, value: 6 },
		{ number: 19, value: 7 },
		{ number: 20, value: 8 },
		{ number: 21, value: 9 },
		{ number: 22, value: 10 },
		{ number: 23, value: 11 },
	])("Converts 24 hour clock into 12 clock", ({ number, value }) => {
		const { formattedTime } = formatDateTimeFromISOString(
			`2022-01-10T${number}:30:33.233Z`,
			["day", "month", "year"],
			true
		);
		expect(formattedTime).toBe(`${value}:30pm`);
	});
	it("Displays pm when time is 12", () => {
		const { formattedTime } = formatDateTimeFromISOString(
			`2022-01-10T12:30:33.233Z`,
			["day", "month", "year"],
			true
		);
		expect(formattedTime).toBe("12:30pm");
	});
	it("Displays am when time is 00", () => {
		const { formattedTime } = formatDateTimeFromISOString(
			`2022-01-10T00:30:33.233Z`,
			["day", "month", "year"],
			true
		);
		expect(formattedTime).toBe("0:30am");
	});
});
