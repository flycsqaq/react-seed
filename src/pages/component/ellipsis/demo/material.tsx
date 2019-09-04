/** @format */

import React, { Dispatch, useState } from 'react';
import Constrant from './constant';
import Tooltip from '@material-ui/core/Tooltip';
import { Ellipsis } from '@components';
export default () => {
    const [str, setStr]: [string, Dispatch<string>] = useState(Constrant[0].name);
    const [lines, setLines]: [number, Dispatch<number>] = useState(2);
    return <Ellipsis style={{ width: 200 }} Tooltip={Tooltip} text={str} lines={lines} />;
};
