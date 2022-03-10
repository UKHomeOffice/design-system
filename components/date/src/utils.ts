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

export const formatDateTime = (dateStirng: string): string => {
    const date = new Date(dateStirng);
    const day = date.getDate();
    const month = monthFromNumber(date.getMonth() + 1);
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
}