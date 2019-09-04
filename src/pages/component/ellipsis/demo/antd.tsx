/** @format */

import React, { Dispatch, useState } from 'react';
import Constrant from './constant';
import { Ellipsis } from '@components';
import Tooltip from 'antd/es/tooltip';
import 'antd/es/tooltip/style';

export default () => {
    const [str, setStr]: [string, Dispatch<string>] = useState(Constrant[0].name);
    const [lines, setLines]: [number, Dispatch<number>] = useState(2);
    return <Ellipsis style={{ width: 200, padding: 10, margin: 10 }} Tooltip={Tooltip} text={str} lines={lines} />;
};
