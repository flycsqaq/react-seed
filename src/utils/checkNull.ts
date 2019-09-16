/** @format */

export const judgeLegal = (x: any): boolean => {
    return !(x === null || x === undefined || isNaN(x));
};

export const checkNull = (arr: any): any[] => {
    return arr instanceof Array ? [] : arr;
};
