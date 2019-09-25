/** @format */

import React from 'react';
import RequireForm, { Item } from './requireForm';
import { useConsole } from '@utils/useConsole';

const demo: Item[] = [
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

const onSave = (body: Object) => {
    return body;
};

const onCancel = () => {
    return 'cancel';
};

export default () => {
    const onSaveConsole = useConsole(onSave);
    const onCancelConsole = useConsole(onCancel);
    return (
        <RequireForm
            items={demo}
            onSave={onSaveConsole}
            onCancel={onCancelConsole}
            style={{ width: 500 }}
        />
    );
};
