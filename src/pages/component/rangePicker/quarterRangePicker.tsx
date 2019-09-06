/** @format */

import React from 'react';
import { Form, DatePicker, Select } from 'antd';
import moment from 'moment';
import { FormComponentProps } from 'antd/es/form';

const range = (start: number, end: number) => {
    const arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
};

interface Date {
    year?: number;
    quarter?: number;
    month?: number;
    day?: number;
}

/**
 * true: 非之后
 */
const isNotAfter = (left: any, right: any, prop: string): boolean => {
    return left[prop] && right[prop] && left[prop] > right[prop];
};

const timeIsNotAfter = (left: Date, right: Date) => {
    const props = ['year', 'quarter', 'month', 'day'];
    return props.every(prop => !isNotAfter(left, right, prop));
};

const quarterRange = range(0, (moment().year() - 2010) * 4 + moment().quarter()).map(number => {
    return `${2010 + Math.floor(number / 4)}Q${(number % 4) + 1}`;
});

export default Form.create()((props: FormComponentProps) => {
    const { form } = props;
    const { getFieldDecorator, getFieldsValue, validateFields } = form;
    return (
        <Form>
            <Form.Item>
                {getFieldDecorator('start', {
                    initialValue: quarterRange[0],
                    rules: [
                        {
                            validator: (r, v, callback) => {
                                const { start, end } = getFieldsValue();
                                const [year, quarter] = start.split('Q');

                                if (moment.isMoment(start) && moment.isMoment(end)) {
                                    if (start.isAfter(end)) {
                                        return callback('结束时间无法早于开始时间');
                                    }
                                }
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
                )}
            </Form.Item>
            至
            <Form.Item>
                {getFieldDecorator('end', {
                    initialValue: quarterRange[quarterRange.length - 1],
                    rules: [
                        {
                            validator: (r, v, callback) => {
                                // validateFields(['start'], { force: true });
                                // callback();
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
                )}
            </Form.Item>
        </Form>
    );
});
