/** @format */
/* eslint-disable */

module.exports = [
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
