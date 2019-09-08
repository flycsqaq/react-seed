/** @format */

import React from 'react';
import { Select } from 'antd';
import moment from 'moment';
import { range } from '@utils/range';
import injectPickerStyle from '../ui/base';

const yearRange = range(2010, moment().year() + 1);

const yearStart = (form: any, passCallback: any) => {
    const { getFieldDecorator, getFieldsValue } = form;

    return getFieldDecorator('start', {
        initialValue: yearRange[yearRange.length - 1],
        rules: [
            {
                validator: (r: any, v: any, callback: any) => {
                    const { start, end } = getFieldsValue();
                    if (start > end) {
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
            {yearRange.map(item => {
                return (
                    <Select.Option value={item} key={item}>
                        {item}
                    </Select.Option>
                );
            })}
        </Select>,
    );
};

const yearEnd = (form: any) => {
    const { getFieldDecorator, validateFields } = form;
    return getFieldDecorator('end', {
        initialValue: yearRange[yearRange.length - 1],
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
            {yearRange.map(item => {
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
    start: yearStart,
    end: yearEnd,
};
