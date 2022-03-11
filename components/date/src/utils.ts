export type monthNumbers = 
1 | 
2 | 
3 | 
4 | 
5 | 
6 | 
7 | 
8 | 
9 | 
10 | 
11 | 
12;
export type dayNumbers = 
1 | 
2 | 
3 | 
4 | 
5 | 
6 | 
7 | 
8 | 
9 | 
10 | 
11 | 
12 | 
13 | 
14 | 
15 | 
16 | 
17 | 
18 | 
19 | 
20 | 
21 | 
22 | 
23 | 
24 | 
25 | 
26 | 
27 | 
28 | 
29 | 
30 | 
31;

export const convertFrom24HourTime = (time: number): number => {
    switch(time){
        case 13:
            return 1
        case 14:
            return 2
        case 15:
            return 3
        case 16:
            return 4
        case 17:
            return 5
        case 18:
            return 6
        case 19:
            return 7
        case 20:
            return 8
        case 21:
            return 9
        case 22:
            return 10
        case 23:
            return 11
        default:
            return
    }
}

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

export const formatDateFromISOString = (dateStirng: string): string => {
    const date = new Date(dateStirng);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
}

export const formatTimeFromISOString = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours > 12 ? convertFrom24HourTime(hours) : hours}:${minutes}${hours > 11 ? "pm" : "am"}`
}