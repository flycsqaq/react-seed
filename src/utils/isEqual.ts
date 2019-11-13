/** @format */
import { Types } from '@typings/type';

/**
 * 判断两个对象是否相同
 * @param leftObj
 * @param rightObj
 */
export const isEqual = (leftObj: any, rightObj: any): boolean => {
    const leftType: Types = typeof leftObj;
    const rightType: Types = typeof rightObj;
    if (leftType !== rightType) {
        return false;
    }
    if (leftType !== 'object') {
        return leftObj === rightObj;
    }
    const leftKeys = Object.keys(leftObj);
    const rightKeys = Object.keys(rightObj);
    if (leftKeys.length !== rightKeys.length) {
        return false;
    }
    if (!isEqual(leftKeys, rightKeys)) {
        return false;
    }
    return leftKeys.every(key => {
        return isEqual(leftObj[key], rightObj[key]);
    });
};
