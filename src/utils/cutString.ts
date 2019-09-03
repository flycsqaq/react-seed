/** @format */

export const cutString = (text: string, length: number, suffix = '...'): string => {
    return `${text.substring(0, length - suffix.length)}${suffix}`;
};

export const getLineHeight = (dom: Element) => {
    return Number.parseInt(getComputedStyle(dom).lineHeight as string, 10);
};
