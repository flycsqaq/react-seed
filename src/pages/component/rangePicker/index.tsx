/** @format */

import React from 'react';
import DayRangePicker from './dayRangePicker';
import MonthRangePicker from './monthRangePicker';
import QuarterRangePicker from './quarterRangePicker';
import YearRangePicker from './yearRangePicker';

export default () => {
    return (
        <div>
            <DayRangePicker />
            <MonthRangePicker />
            <QuarterRangePicker />
            <YearRangePicker />
            {/* <RangePicker />
            <RangePicker /> */}
        </div>
    );
};
