/** @format */

import React from 'react';
import { RangePicker } from '@components';

export default () => {
    const simpleTest = () => {};
    return (
        <div>
            <RangePicker type={'day'} passCallback={simpleTest} />
            <RangePicker type={'month'} passCallback={simpleTest} />
            <RangePicker type={'quarter'} passCallback={simpleTest} />
            <RangePicker type={'year'} passCallback={simpleTest} />
        </div>
    );
};
