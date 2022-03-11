import { formatDateFromISOString, formatTimeFromISOString } from "../src/utils";

describe('Date Utils', () => {

    it('Formats date string from date time value', () => {
        const testDateA = formatDateFromISOString("2022-01-10T19:39:33.233Z");
        expect(testDateA).toBe("10 January 2022")

        const testDateB = formatDateFromISOString("2022-10-10T19:39:33.233Z");
        expect(testDateB).toBe("10 October 2022")

        const testDateC = formatDateFromISOString("2018-10-10T19:39:33.233Z");
        expect(testDateC).toBe("10 October 2018")
    })

    it.each([
        {number: 13, value: 1},
        {number: 14, value: 2},
        {number: 15, value: 3},
        {number: 16, value: 4},
        {number: 17, value: 5},
        {number: 18, value: 6},
        {number: 19, value: 7},
        {number: 20, value: 8},
        {number: 21, value: 9},
        {number: 22, value: 10},
        {number: 23, value: 11}
    ])('Converts 24 hour clock into 12 clock', ({number, value}) => {
        const testTime = formatTimeFromISOString(`2022-01-10T${number}:30:33.233Z`);
        expect(testTime).toBe(`${value}:30pm`)
    })

    it('Displays pm or am depending on the time', () => {
        const amTime = formatTimeFromISOString(`2022-01-10T10:30:33.233Z`);
        const pmTime = formatTimeFromISOString(`2022-01-10T22:30:33.233Z`);
        expect(amTime).toBe("10:30am");
        expect(pmTime).toBe("10:30pm");
    })

    it('Displays pm when the hour is 12', () => {
        const timeAM = formatTimeFromISOString(`2022-01-10T00:30:33.233Z`);
        const timePM = formatTimeFromISOString(`2022-01-10T12:30:33.233Z`);
        expect(timeAM).toBe("0:30am");
        expect(timePM).toBe("12:30pm");        
    })

})