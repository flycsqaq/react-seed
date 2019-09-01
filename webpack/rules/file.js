/** @format */
/* eslint-disable */
    
module.exports = [
    {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader?name=img/[name].[hash:12].[ext]'],
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: 'font/[name].[ext]',
            }
        }
    },
    {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader?name=csv/[name].[hash:12].[ext]'],
    },
    {
        test: /\.xml$/,
        use: ['xml-loader?name=xml/[name].[hash:12].[ext]'],
    },
    {
        test: /\.md$/,
        use: ['html-loader?name=md/[name].[hash:12].[ext]', 'markdown-loader'],
    },
];
