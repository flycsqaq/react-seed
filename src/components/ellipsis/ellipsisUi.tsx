/** @format */

import React, { Dispatch, useState, useEffect } from 'react';
import Ellipsis from './ellipsis';
import { handleEllipsis } from '@utils/cutString';

interface EllipsisUiProps {
    text: string;
    lines: number;
    suffix?: string;
    Tooltip?: any;
    [x: string]: any;
}

export default ({
    text = '',
    lines = 1,
    suffix = '...',
    Tooltip,
    ...restProps
}: EllipsisUiProps) => {
    const [str, setStr]: [string, Dispatch<string>] = useState('');
    const style = {
        ...restProps.style,
        wordBreak: 'break-all',
    };
    useEffect(() => {
        setStr('');
    }, [text, lines, suffix]);
    return (
        <div style={style} {...restProps}>
            <Ellipsis
                text={text}
                lines={lines}
                suffix={suffix}
                endCallback={(str: string) => {
                    setStr(str);
                }}
            />
            {Tooltip ? (
                <Tooltip title={text} {...restProps}>
                    <span>{str}</span>
                </Tooltip>
            ) : (
                <span title={text}>{str}</span>
            )}
        </div>
    );
};
