/** @format */

import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import injectPickerStyle from '../ui/base';

const dayStart = (form: any, passCallback: Function) => {
    const { getFieldDecorator, getFieldsValue } = form;

    return getFieldDecorator('start', {
        initialValue: moment().set({
            month: 1,
            day: 1,
        }),
        rules: [
            {
                validator: (r: any, v: any, callback: any) => {
                    const { start, end } = getFieldsValue();
                    if (moment.isMoment(start) && moment.isMoment(end)) {
                        if (start.isAfter(end)) {
                            return callback('结束时间无法早于开始时间');
                        }
                    }
                    callback();
                    passCallback({
                        start,
                        end,
                    });
                },
            },
        ],
    })(<DatePicker />);
};

const dayEnd = (form: any) => {
    const { getFieldDecorator, validateFields } = form;
    return getFieldDecorator('end', {
        initialValue: moment(),
        rules: [
            {
                validator: (r: any, v: any, callback: any) => {
                    validateFields(['start'], { force: true });
                    callback();
                },
            },
        ],
    })(<DatePicker />);
};

export default (passCallback: Function) =>
    injectPickerStyle(
        {
            start: dayStart,
            end: dayEnd,
        },
        passCallback,
    );
