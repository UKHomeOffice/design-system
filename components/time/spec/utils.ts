import { formatDateTimeFromISOString } from "../src/utils";

describe("Date Utils", () => {
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
			12
		);
		expect(formattedTime).toBe(`${value}:30pm`);
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
	])("Converts short 24 hour clock into 12 clock", ({ number, value }) => {
		const { formattedTime } = formatDateTimeFromISOString(
			`${number}:30`,
			12
		);
		expect(formattedTime).toBe(`${value}:30pm`);
	});
	
	it("Displays pm when time is 12", () => {
		const { formattedTime } = formatDateTimeFromISOString(
			`2022-01-10T12:30:33.233Z`,
			12
		);
		expect(formattedTime).toBe("12:30pm");
	});
	it("Displays midnight times correctly on a 12-hour clock", () => {
		const { formattedTime } = formatDateTimeFromISOString(
			`2022-01-10T00:30:33.233Z`,
			12
		);
		expect(formattedTime).toBe("12:30am");
	});
	it.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
		"Displays 24 hour time with prepended 0 for 1 - 9 times",
		(number) => {
			const { formattedTime } = formatDateTimeFromISOString(
				`2022-01-10T0${number}:30:33.233Z`,
				24
			);
			expect(formattedTime).toBe(`0${number}:30`);
		}
	);
	it.each([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])(
		"Displays 24 hour time",
		(number) => {
			const { formattedTime } = formatDateTimeFromISOString(
				`2022-01-10T${number}:30:33.233Z`,
				24
			);
			expect(formattedTime).toBe(`${number}:30`);
		}
	);
});
