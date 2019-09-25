/** @format */

import React from 'react';
import { Select } from 'antd';
import moment from 'moment';
import { range } from '@utils/range';

const quarterRange = range(
    0,
    (moment().year() - 2010) * 4 + moment().quarter(),
).map(number => {
    return `${2010 + Math.floor(number / 4)}Q${(number % 4) + 1}`;
});

const quaterStart = (form: any, passCallback: Function) => {
    const { getFieldDecorator, getFieldsValue } = form;

    return getFieldDecorator('start', {
        initialValue: `${moment().year()}Q1`,
        rules: [
            {
                validator: (r: any, v: any, callback: any) => {
                    const { start, end } = getFieldsValue();
                    const [startYear, startQuarter] = start.split('Q');
                    const [endYear, endQuarter] = end.split('Q');
                    if (
                        startYear > endYear ||
                        (startYear === endYear && startQuarter > endQuarter)
                    ) {
                        return callback('结束时间无法早于开始时间');
                    }
                    callback();
                    passCallback({
                        start,
                        end,
                    });
                },
            },
        ],
    })(
        <Select>
            {quarterRange.map(item => {
                return (
                    <Select.Option value={item} key={item}>
                        {item}
                    </Select.Option>
                );
            })}
        </Select>,
    );
};

const quaterEnd = (form: any) => {
    const { getFieldDecorator, validateFields } = form;
    return getFieldDecorator('end', {
        initialValue: quarterRange[quarterRange.length - 1],
        rules: [
            {
                validator: (r: any, v: any, callback: any) => {
                    validateFields(['start'], { force: true });
                    callback();
                },
            },
        ],
    })(
        <Select>
            {quarterRange.map(item => {
                return (
                    <Select.Option value={item} key={item}>
                        {item}
                    </Select.Option>
                );
            })}
        </Select>,
    );
};

export default {
    start: quaterStart,
    end: quaterEnd,
};
