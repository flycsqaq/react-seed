/** @format */

import React from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/es/form';

const formItemStyle = {
    display: 'inline-block',
    width: 180,
};

const injectBaseUi = ({ start, end }: any, passCallback: any = () => {}) => {
    return Form.create()((props: FormComponentProps) => {
        const { form } = props;
        return (
            <Form>
                <Form.Item
                    style={{
                        ...formItemStyle,
                    }}
                >
                    {start(form, passCallback)}
                </Form.Item>
                <span
                    style={{
                        display: 'inline-block',
                        width: '24px',
                        textAlign: 'center',
                        lineHeight: '40px',
                    }}
                >
                    -
                </span>
                <Form.Item
                    style={{
                        ...formItemStyle,
                    }}
                >
                    {end(form)}
                </Form.Item>
            </Form>
        );
    });
};

export default injectBaseUi;
