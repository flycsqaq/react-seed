/** @format */

import React from 'react';
import { Form, DatePicker } from 'antd';
import moment from 'moment';
import { FormComponentProps } from 'antd/es/form';

export default Form.create()((props: FormComponentProps) => {
    const { form } = props;
    const { getFieldDecorator, getFieldsValue, validateFields } = form;
    return (
        <Form>
            <Form.Item>
                {getFieldDecorator('start', {
                    initialValue: moment().set({
                        month: 1,
                        day: 1,
                    }),
                    rules: [
                        {
                            validator: (r, v, callback) => {
                                const { start, end } = getFieldsValue();
                                if (moment.isMoment(start) && moment.isMoment(end)) {
                                    if (start.isAfter(end)) {
                                        return callback('结束时间无法早于开始时间');
                                    }
                                }
                                callback();
                            },
                        },
                    ],
                })(<DatePicker />)}
            </Form.Item>
            至
            <Form.Item>
                {getFieldDecorator('end', {
                    initialValue: moment(),
                    rules: [
                        {
                            validator: (r, v, callback) => {
                                validateFields(['start'], { force: true });
                                callback();
                            },
                        },
                    ],
                })(<DatePicker />)}
            </Form.Item>
        </Form>
    );
});
