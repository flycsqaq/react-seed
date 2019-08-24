/** @format */

import {increase, decrease} from '../src/utils';

test('increase test', () => {
    expect(increase(1, 2, 3)).toBe(6);
    expect(increase(-4, 5, -6)).toBe(-5);
});

test('decreate test', () => {
    expect(decrease(3, 2, 1)).toBe(0);
    expect(decrease(-4, 5, -6)).toBe(-3);
});
