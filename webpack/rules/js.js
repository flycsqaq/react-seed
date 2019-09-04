/** @format */
/* eslint-disable */

const { resolve } = require('../utils');

module.exports = [
    {
        test: /\.(j|t)s(x?)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
            formatter: require('eslint-friendly-formatter')
        }
    },
    {
        test: /\.(j|t)s(x?)$/,
        use: [
            {
                loader: 'babel-loader',
            },
        ],
    },
    {
        test: /\.ts(x?)$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    happyPackMode: true,
                },
            },
        ],
    },
];
