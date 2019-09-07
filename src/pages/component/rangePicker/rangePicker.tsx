/** @format */

import React from 'react';
import DayRangePicker from './dayRangePicker';
import MonthRangePicker from './monthRangePicker';
import QuarterRangePicker from './quarterRangePicker';
import YearRangePicker from './yearRangePicker';

const collectionPicker: any = {
    day: DayRangePicker,
    month: MonthRangePicker,
    quarter: QuarterRangePicker,
    year: YearRangePicker,
};

export default ({ type = 'day', passCallback = () => {} }: any) => {
    const Component = collectionPicker[type](passCallback);
    return <Component />;
};
