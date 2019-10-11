/** @format */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { numasMockData } from './mock';
import { SatisfationTotalOption } from './numas';

export default () => {
    const option: SatisfationTotalOption = {
        title: {
            text: numasMockData.title,
        },
        xAxis: {
            data: numasMockData.data.map(item => item.name),
        },
    };
    return <ReactEcharts option={option} />;
};
