/** @format */

import React from 'react';
import QueryTable from './queryTable';
import { useConsole } from '@utils/useConsole';

const title = '你好';
const columns = [
    {
        title: '序号',
        dataIndex: 'seq',
        key: 'seq',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
    },
];

const dataSource = [
    {
        seq: 1,
        name: '一号',
        password: '一号M',
    },
    {
        seq: 1,
        name: '二号',
        password: '二号M',
    },
    {
        seq: 1,
        name: '三号',
        password: '三号M',
    },
];

const onSearch = (v: string) => {
    return v;
};

const onAdd = () => {
    return 'add';
};

export default () => {
    const handleSearch = useConsole(onSearch);
    const handleAdd = useConsole(onAdd);

    return (
        <QueryTable
            onSearch={handleSearch}
            onAdd={handleAdd}
            dataSource={dataSource}
            columns={columns}
            title={title}
            style={{
                width: 500,
            }}
        />
    );
};
