/** @format */

import React, { useState, Dispatch } from 'react';
import Ellipsis from './ellipsis';
import { Tooltip } from '@material-ui/core';

const text1: string =
    'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。';
const text2: string =
    'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.';

export default () => {
    const [text, setText]: [string, Dispatch<string>] = useState(text1);
    const [lines, setLines]: [number, Dispatch<number>] = useState(2);
    return (
        <div style={{ width: 200 }}>
            <Tooltip component title={text}>
                <Ellipsis text={text} lines={lines} />
            </Tooltip>
        </div>
    );
};
