/** @format */
/* eslint-disable */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {resolve} = require('./utils');

const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
module.exports = merge(common, {
    entry: {
        mock: resolve('mock/index.ts'),
        app: resolve('src/hot.tsx'),
        // vendors: resolve('src/vendors.js'), // CommonsChunkPlugin提取vendor引用
    },
    mode: 'development',
    plugins: [
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 9999, // 运行后的端口号
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info',
        }),
    ],
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    // },
});
