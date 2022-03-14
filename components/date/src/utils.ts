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
export const pmTimes = [
    13, 
    14, 
    15, 
    16, 
    17, 
    18, 
    19, 
    20, 
    21, 
    22, 
    23
];
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
    return `${hours > 12 ? pmTimes.indexOf(hours) + 1 : hours}:${minutes}${hours > 11 ? "pm" : "am"}`
}