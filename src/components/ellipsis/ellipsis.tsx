/** @format */

import React, { useEffect, useRef, useState, Dispatch, Fragment } from 'react';

interface EllipsisProps {
    text: string;
    lines: number;
    suffix?: string;
    endCallback?: Function;
}

enum STATUS_TYPE {
    START = 'START',
    MATCH = 'MATCH',
    CUT = 'CUT',
    END = 'END',
}

type StatusFn = {
    [key in STATUS_TYPE]: () => void;
};

/**
 * 如何便于测试?
 */
export default ({
    text = '',
    lines = 1,
    suffix = '...',
    endCallback = () => {},
}: EllipsisProps) => {
    const [realLines, setRealLines]: [number, Dispatch<number>] = useState(0);
    const [lineHeight, setLineHeight]: [number, Dispatch<number>] = useState(
        20,
    );

    const rootRef = useRef<HTMLDivElement>(null);
    const rootHeight = realLines * lineHeight;

    const hiddenRef = useRef<HTMLDivElement>(null);
    const [hiddenStr, setHiddenStr]: [string, Dispatch<string>] = useState('');
    const [stepSize, setStepSize]: [number, Dispatch<number>] = useState(0);

    const [status, setStatus]: [STATUS_TYPE, Dispatch<STATUS_TYPE>] = useState(
        STATUS_TYPE.START as STATUS_TYPE,
    );

    useEffect(() => {
        setStatus(STATUS_TYPE.START);
    }, [text, lines, suffix]);

    /**
     * 数据初始化
     *
     */
    const handleStart = () => {
        const realLine = lines > 0 ? lines : 0;
        if (realLine === 0) {
            setHiddenStr('');
            setStatus(STATUS_TYPE.END);
        } else {
            setLineHeight(
                Number.parseInt(
                    getComputedStyle(hiddenRef.current as HTMLDivElement)
                        .lineHeight as string,
                    10,
                ),
            );
            setRealLines(realLine);
            setStepSize(0);
            setHiddenStr(text);
            setStatus(STATUS_TYPE.MATCH);
        }
    };

    /**
     * 字符串高度对比
     *
     */
    const handleMatch = () => {
        const matchHeight: number = (hiddenRef.current as HTMLDivElement)
            .offsetHeight;
        if (matchHeight <= rootHeight) {
            setRealLines(Math.ceil(matchHeight / lineHeight));
            setStatus(STATUS_TYPE.END);
        } else {
            const nextStr = `${text}${suffix}`;
            setHiddenStr(nextStr);
            setStepSize(text.length);
            setStatus(STATUS_TYPE.CUT);
        }
    };

    /**
     * 二分法裁剪字符串
     *
     */
    const handleCut = () => {
        const cutHeight: number = (hiddenRef.current as HTMLDivElement)
            .offsetHeight;
        if (stepSize <= 1 && cutHeight <= rootHeight) {
            setStatus(STATUS_TYPE.END);
        } else {
            const nextSize: number = Math.ceil(stepSize / 2);
            setStepSize(nextSize);
            const nextLength: number =
                cutHeight <= rootHeight
                    ? hiddenStr.length + nextSize
                    : hiddenStr.length - nextSize;
            const nextStr = `${text.substring(
                0,
                nextLength - suffix.length,
            )}${suffix}`;
            if (nextStr === hiddenStr) {
                setStatus(STATUS_TYPE.END);
            } else {
                setHiddenStr(nextStr);
            }
        }
    };

    /**
     * 展示字符串
     *
     */
    const handleEnd = () => {
        endCallback(hiddenStr);
    };

    const statusFns: StatusFn = {
        [STATUS_TYPE.START]: handleStart,
        [STATUS_TYPE.MATCH]: handleMatch,
        [STATUS_TYPE.CUT]: handleCut,
        [STATUS_TYPE.END]: handleEnd,
    };

    useEffect(statusFns[status], [status, hiddenStr]);

    return (
        <Fragment>
            {status === STATUS_TYPE.END ? null : (
                <div
                    ref={rootRef}
                    style={{
                        position: 'relative',
                        height: rootHeight,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            visibility: 'hidden',
                            wordBreak: 'break-all',
                        }}
                        ref={hiddenRef}
                    >
                        {hiddenStr}
                    </div>
                </div>
            )}
        </Fragment>
    );
};
