/** @format */
/* eslint-disable */

const {resolve} = require('../utils');

module.exports = [
    {
        test: /.ts(x)$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    happyPackMode: true,
                }
            },
        ]
    },
];
