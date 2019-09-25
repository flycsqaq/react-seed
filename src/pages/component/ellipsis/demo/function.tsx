/** @format */

import React, { Dispatch, useState, useEffect, useRef } from 'react';
import { handleEllipsis } from '@utils/cutString';
import Constrant from './constant';
import { useConsole } from '@utils/useConsole';

export default () => {
    const [str, setStr]: [string, Dispatch<string>] = useState('');
    const [lines, setLines]: [number, Dispatch<number>] = useState(2);
    useEffect(() => {
        const ell = useConsole(handleEllipsis);
        const text = ell({
            DOM: domRef.current,
            text: Constrant[0].name,
            lines,
        });

        setStr(text);
    }, [lines]);
    const domRef = useRef({} as any);
    return (
        <div>
            <div
                style={{
                    width: 200,
                    padding: 10,
                }}
                ref={domRef}
            >
                {str}
            </div>
        </div>
    );
};
