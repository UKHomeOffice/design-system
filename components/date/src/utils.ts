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

export const monthFromNumber = (monthNumber: number) => {
    switch(monthNumber) { 
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default:
            return undefined
    }
}

export const convertTime = (time: number): number => {
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

export const formatDateFromISOString = (dateStirng: string): string => {
    const date = new Date(dateStirng);
    const day = date.getDate();
    const month = monthFromNumber(date.getMonth() + 1);
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
}

export const formatTimeFromISOString = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours > 12 ? convertTime(hours) : hours}:${minutes}${hours > 11 ? "pm" : "am"}`
}