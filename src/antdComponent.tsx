/** @format */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import {
    Ellipsis,
    RangePicker,
    RequireForm,
    QueryTable,
} from '@components/antd';

const App = () => {
    return (
        <Fragment>
            <Ellipsis />
            <RangePicker />
            <RequireForm />
            <QueryTable />
        </Fragment>
    );
};

const HotApp = hot(App);

const render = () => {
    ReactDOM.render(<HotApp />, document.getElementById('root'));
};

render();
