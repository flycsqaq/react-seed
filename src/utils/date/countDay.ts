/** @format */

export const isLeapYear = (year: number): boolean =>
    year % 100 !== 0 && year % 4 === 0;

export const monthOfDayMap: any = {
    0: (year: number) => 0,
    1: (year: number) => 31,
    2: (year: number) => (isLeapYear(year) ? 29 : 28),
    3: (year: number) => 31,
    4: (year: number) => 30,
    5: (year: number) => 31,
    6: (year: number) => 30,
    7: (year: number) => 31,
    8: (year: number) => 31,
    9: (year: number) => 30,
    10: (year: number) => 31,
    11: (year: number) => 30,
    12: (year: number) => 31,
};

export const monthOfDaysSum = (year: number) => {
    const obj: any = {};
    Object.keys(monthOfDayMap)
        .map(month => Number(month))
        .forEach(month => {
            if (month === 0) {
                obj[month] = monthOfDayMap[month](year);
            } else {
                obj[month] = obj[month - 1] + monthOfDayMap[month](year);
            }
        });
    return obj;
};

/**
 * @param date "YYYY-MM-DD"
 */
export const dayOfYear = (date: string): number => {
    const year = Number(date.substring(0, 4));
    const month = Number(date.substring(5, 7));
    const day = Number(date.substring(8));
    return monthOfDaysSum(year)[month - 1] + day;
};
