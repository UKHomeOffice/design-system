import { monthFromNumber, formatDateTime } from "../src/utils";

describe('Date Utils', () => {

    it.each([
        {number: 1, month: "January"},
        {number: 2, month: "February"},
        {number: 3, month: "March"},
        {number: 4, month: "April"},
        {number: 5, month: "May"},
        {number: 6, month: "June"},
        {number: 7, month: "July"},
        {number: 8, month: "August"},
        {number: 9, month: "September"},
        {number: 10, month: "October"},
        {number: 11, month: "November"},
        {number: 12, month: "December"},
    ])('Converts number to month string', ({number, month}) => {
        const stringMonth = monthFromNumber(number);
        expect(stringMonth).toBe(month);
    })

    it('Formats string from date time value', () => {
        const testDateA = formatDateTime("2022-01-10T19:39:33.233Z");
        expect(testDateA).toBe("10 January 2022")

        const testDateB = formatDateTime("2022-10-10T19:39:33.233Z");
        expect(testDateB).toBe("10 October 2022")

        const testDateC = formatDateTime("2018-10-10T19:39:33.233Z");
        expect(testDateC).toBe("10 October 2018")
    })

})