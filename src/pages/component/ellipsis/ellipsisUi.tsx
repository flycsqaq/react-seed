/** @format */

import React, { FunctionComponent, Dispatch, useState, Fragment } from 'react';
import Ellipsis from './ellipsis';

interface EllipsisUiProps {
    text: string;
    lines: number;
    suffix?: string;
    Tooltip?: any;
    [x: string]: any;
}

export default ({ text = '', lines = 1, suffix = '...', Tooltip, ...restProps }: EllipsisUiProps) => {
    const [str, setStr]: [string, Dispatch<string>] = useState('');
    const style = {
        ...restProps.style,
        wordBreak: 'break-all',
    };
    return (
        <div style={style} {...restProps}>
            <Ellipsis
                text={text}
                lines={lines}
                suffix={suffix}
                startCallback={(boo: boolean) => {
                    if (boo) {
                        setStr('');
                    }
                }}
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
