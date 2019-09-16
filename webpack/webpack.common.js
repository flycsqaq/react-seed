/** @format */
/* eslint-disable */

const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const { resolve } = require('./utils');
const rules = require('./rules/index');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: resolve('src/index.tsx'),
        // vendors: resolve('src/vendors.js'), // CommonsChunkPlugin提取vendor引用
    },
    output: {
        path: resolve('dist'),
        chunkFilename: '[name].bundle.js',
        filename: 'js/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [...rules],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            title: 'webpack',
            favicon: resolve('public/favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[hash:12].css',
        }),
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsWebpackPlugin({
                configFile: resolve('tsconfig.json'),
            }),
        ],
    },
};
