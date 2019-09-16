/** @format */

import { useMemo } from '@utils/useMemo';

test('useMemo', () => {
    const fib = (x: number): number => {
        if (x === 1 || x === 2) {
            return 1;
        }
        return fib(x - 2) + fib(x - 1);
    };
    const fibMemo = useMemo(fib);
    expect(fibMemo(1)).toBe(1);
    expect(fibMemo(2)).toBe(1);
    expect(fibMemo(3)).toBe(2);
    expect(fibMemo(4)).toBe(3);
    expect(fibMemo(5)).toBe(5);
    expect(fibMemo(6)).toBe(8);
    expect(fibMemo(7)).toBe(13);
    expect(fibMemo(8)).toBe(21);
    expect(fibMemo(9)).toBe(34);
    expect(fibMemo(10)).toBe(55);
    expect(fibMemo(11)).toBe(89);
});
