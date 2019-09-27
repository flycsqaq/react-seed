/** @format */

import React, { useState, useEffect, Dispatch } from 'react';
import { Form, Input, Button } from 'antd';

interface Props {
    items: Item[];
    onSave?: Function; // 保存回调
    onCancel?: Function; // 取消回调
    style?: Object;
}

export interface Item {
    name: string; // 字段
    required: boolean; // 是否必填
    type: string; // input type
    value: string; // 初始值
    lable: string; // input label
}

const RequireForm = ({
    items = [],
    onSave = () => {},
    onCancel = () => {},
    style = {},
}: Props) => {
    const Component = Form.create()(() => {
        /* eslint-disable */
        const [values, setValues]: [Item[], Dispatch<Item[]>] = useState(items);
        /** eslint-disable */

        const changeValues = (name: string, value: string) => {
            const newValues = values.map(item => {
                if (item.name === name) {
                    return {
                        ...item,
                        value,
                    };
                }
                return item;
            });
            setValues(newValues);
        };
        return (
            <div style={style}>
                <Form>
                    {values.map((item) => (
                        <Form.Item
                            key={item.name}
                            required={item.required}
                            label={item.lable}
                            labelCol={{
                                span: 5,
                            }}
                            wrapperCol={{
                                span: 19,
                            }}
                            validateStatus={
                                item.required && item.value === ''
                                    ? 'error'
                                    : 'success'
                            }
                        >
                            <Input
                                value={item.value}
                                type={item.type}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    changeValues(item.name, e.target.value);
                                }}
                            />
                        </Form.Item>
                    ))}
                </Form>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        onClick={() => {
                            const isValid = values.every(item => {
                                return !(item.required && item.value === '');
                            });
                            if (isValid) {
                                const data: any = {};
                                values.forEach(item => {
                                    data[item.name] = item.value;
                                });
                                onSave(data);
                            }
                        }}
                        type="primary"
                        style={{
                            marginRight: 20,
                        }}
                    >
                        保存
                    </Button>
                    <Button
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        取消
                    </Button>
                </div>
            </div>
        );
    });
    return <Component />;
};

export default RequireForm;
