/** @format */
/* eslint-disable */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const {resolve} = require('./utils');

module.exports = merge(common, {
    entry: {
        app: resolve('src/index.tsx'),
        // vendors: resolve('src/vendors.js'), // CommonsChunkPlugin提取vendor引用
    },
    devtool: 'source-map',
    mode: 'production',
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': JSON.stringify('production'),
    //     }),
    // ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
});
