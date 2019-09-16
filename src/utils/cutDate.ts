/** @format */
'2019-09-01 00:00:00';

const totalDay: any = {
    1: () => 31,
    2: (year: number) => (year % 4 === 0 ? 29 : 28),
    3: () => 31,
    4: () => 30,
    5: () => 31,
    6: () => 30,
    7: () => 31,
    8: () => 31,
    9: () => 30,
    10: () => 31,
    11: () => 30,
    12: () => 31,
};

const range = (start: number, end: number) => {
    const arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
};

const cutDate = (arr: string[]): string => {
    const year = arr[0].substring(0, 4);
    const month = arr[0].substring(5, 6);
    const deficiency = [];
    const totalDayArr = range(1, totalDay[Number(month)](year));
};
