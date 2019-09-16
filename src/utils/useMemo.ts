/** @format */

import { OneParamFunction } from '@typings/function';
import { ObjectType } from '@typings/object';

/**
 * 记忆函数
 * @param f
 */
export const useMemo = (f: Function): Function => {
    const memo: ObjectType = {};
    return x => {
        if (!memo[x]) {
            memo[x] = f(x);
        }
        return memo[x];
    };
};

export const useMapMemo = (f: Function): Function => {
    const memo: Map<Object, Object> = new Map();
    return x => {
        if (!memo.get(x)) {
            memo.set(x, f(x));
        }
        return memo.get(x);
    };
};
