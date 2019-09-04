/** @format */

import React, { Dispatch, useState } from 'react';
import Ellipsis from '../../../../components/ellipsis/ellipsisUi';
import Constrant from './constant';

export default () => {
    const [str, setStr]: [string, Dispatch<string>] = useState(Constrant[0].name);
    const [lines, setLines]: [number, Dispatch<number>] = useState(2);
    return <Ellipsis style={{ width: 200 }} text={str} lines={lines} />;
};
