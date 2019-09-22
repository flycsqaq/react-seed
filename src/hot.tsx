/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { hot } from 'react-hot-loader/root';
const HotApp = hot(App);
const render = () => {
    ReactDOM.render(<HotApp />, document.getElementById('root'));
};

render();
