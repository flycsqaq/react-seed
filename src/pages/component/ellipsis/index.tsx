/** @format */

import React, { Fragment } from 'react';
import MaterialEllipsisDemo from './demo/material';
import AntdEllipsisDemo from './demo/antd';
import NormalEllipsisDemo from './demo/normal';

export default () => {
    return (
        <Fragment>
            <NormalEllipsisDemo />
            <AntdEllipsisDemo />
            <MaterialEllipsisDemo />
        </Fragment>
    );
};
