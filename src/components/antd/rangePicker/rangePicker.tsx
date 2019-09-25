/** @format */

import React from 'react';
import DayRangePicker from './picker/day';
import MonthRangePicker from './picker/month';
import QuarterRangePicker from './picker/quarter';
import YearRangePicker from './picker/year';
import injectBaseUi from './ui/base';

const collectionPicker: any = {
    day: DayRangePicker,
    month: MonthRangePicker,
    quarter: QuarterRangePicker,
    year: YearRangePicker,
};

export default ({ type = 'day', passCallback = () => {} }: any) => {
    const Component = injectBaseUi(collectionPicker[type], passCallback);
    return <Component />;
};
