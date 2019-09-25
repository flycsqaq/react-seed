/** @format */
/* eslint-disable */

const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const { resolve } = require('./utils');
const rules = require('./rules/index');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
