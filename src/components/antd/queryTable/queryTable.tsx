/** @format */

import React from 'react';
import { Table, Input, Button, Col, Row } from 'antd';
import './queryTable.less';

interface Props {
    columns: any[];
    dataSource: any[];
    title?: string;
    onSearch: any;
    style?: any;
    onAdd: Function;
}

export default ({
    columns,
    dataSource,
    title,
    onSearch,
    style = {},
    onAdd,
}: Props) => {
    const Title = () => {
        return (
            <div>
                <Row
                    style={{
                        borderBottom: 'solid 1px #e8e8e8',
                        fontSize: '1.5em',
                        marginBottom: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#fafafa',
                    }}
                >
                    {title}
                </Row>
                <Row
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Col span={8}>
                        <Button onClick={() => onAdd()}>新增</Button>
                    </Col>
                    <Col span={16}>
                        <Input.Search
                            style={{ width: 200 }}
                            onSearch={value => onSearch(value)}
                            enterButton
                        />
                    </Col>
                </Row>
            </div>
        );
    };

    return (
        <Table
            bordered
            title={() => <Title />}
            columns={columns}
            dataSource={dataSource}
            style={{
                ...style,
            }}
        />
    );
};
