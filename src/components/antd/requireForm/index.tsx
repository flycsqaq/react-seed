/** @format */

import React, { useState } from 'react';
import RequireForm, { Item } from './requireForm';
import { useConsole } from '@utils/useConsole';

const demo = () => [
    {
        name: 'username',
        lable: '姓名',
        required: true,
        type: 'text',
        value: '',
    },
    {
        name: 'email',
        lable: '邮箱',
        required: false,
        type: 'text',
        value: '',
    },
];

export default () => {
    const [values, setValues] = useState(demo());
    const onSave = (obj: any) => {
        /* eslint-disable */
        console.log(obj);
        /* eslint-disable */

    };
    const onCancel = () => {
        setValues(demo());
    };
    return (
        <RequireForm
            items={values}
            onSave={onSave}
            onCancel={onCancel}
            style={{ width: 500 }}
        />
    );
};
