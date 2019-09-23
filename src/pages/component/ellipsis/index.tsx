/** @format */

import React, { Fragment } from 'react';
import AntdEllipsisDemo from './demo/antd';
import NormalEllipsisDemo from './demo/normal';
import FunctionEllipsisDemo from './demo/function';

export default () => {
    return (
        <Fragment>
            <NormalEllipsisDemo />
            <AntdEllipsisDemo />
            <FunctionEllipsisDemo />
            <div>12</div>
        </Fragment>
    );
};
