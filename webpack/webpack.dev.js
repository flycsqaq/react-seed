/** @format */
/* eslint-disable */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {resolve} = require('./utils');

const webpack = require('webpack')

module.exports = merge(common, {
    entry: {
        mock: resolve('mock/index.ts'),
    },
    mode: 'development',
    plugins: [
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    // },
});
