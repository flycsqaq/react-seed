import { cutString } from "@utils/cutString";

test('cutString', () => {
    expect(cutString('abcd...', 2)).toBe('ab...')
    expect(cutString('abcd.', 2, '.')).toBe('ab.')
    expect(cutString('abcdef', 4, '')).toBe('abcd')
})