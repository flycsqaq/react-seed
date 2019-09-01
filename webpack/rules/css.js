/** @format */
/* eslint-disable */

const { resolve } = require('../utils');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const minicss = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        sourceMap: true,
    },
};
module.exports = [
    {
        test: /\.css$/,
        use: [minicss, 'css-loader'],
    },
    {
        test: /\.s(a|c)ss$/,
        use: [
            minicss,
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    camelCass: true,
                    sass: true,
                },
            },
            'sass-loader',
        ],
    },
    {
        test: /.less$/,
        use: [
            minicss,
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true,
                },
            },
        ],
    },
];
