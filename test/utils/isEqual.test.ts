/** @format */

import { isEqual } from '@utils/isEqual';

const reference = {
    a: 1,
    b: [1, 2],
    c: {
        d: 'a',
        e: 'b',
    },
};

const comparison1 = {
    a: '1',
    b: [1, 2],
    c: {
        d: 'a',
        e: 'b',
    },
};

const comparison2 = {
    a: 1,
    b: ['1', 2],
    c: {
        d: 'a',
        e: 'b',
    },
};

const comparison3 = {
    a: 1,
    b: [1, 2],
    c: {
        d: 'a',
        e: 'b',
    },
};

test('isEqual', () => {
    expect(isEqual(reference, comparison1)).toBe(false);
    expect(isEqual(reference, comparison2)).toBe(false);
    expect(isEqual(reference, comparison3)).toBe(true);
});
