/** @format */

import React, { Fragment } from 'react';
import MaterialEllipsisDemo from './demo/material';
import NormalEllipsisDemo from './demo/normal';
import FunctionEllipsisDemo from './demo/function';

export default () => {
    return (
        <Fragment>
            <NormalEllipsisDemo />
            <FunctionEllipsisDemo />
            <MaterialEllipsisDemo />
        </Fragment>
    );
};
