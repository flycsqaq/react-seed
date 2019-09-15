/** @format */

type HOCFunction<T, U> = (...x: T[]) => U;

export const useConsole = <T, U>(f: HOCFunction<T, U>): HOCFunction<T, U> => {
    return (...args: T[]) => {
        const result = f(...args);
        /* eslint-disable */
        console.log(result);
        /* eslint-enable */

        return result;
    };
};
