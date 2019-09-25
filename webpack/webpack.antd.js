/** @format */
/* eslint-disable */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {resolve} = require('./utils');

const webpack = require('webpack')

module.exports = merge(common, {
    entry: {
        app: resolve('src/antdComponent.tsx'),
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
});