/** @format */

export const increase = (...args: number[]): number => {
    return args.reduce((a, b) => a + b);
};

export const decrease = (...args: number[]): number => {
    return args.reduce((a, b) => a - b);
};
