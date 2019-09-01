/** @format */

module.exports = api => {
    api.cache(true);
    const plugins = [
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true,
            },
            'ant',
        ],
        [
            'babel-plugin-import',
            {
                libraryName: '@material-ui/core',
                libraryDirectory: 'esm',
                camel2DashComponentName: false,
            },
            'core',
        ],
        [
            'babel-plugin-import',
            {
                libraryName: '@material-ui/icons',
                libraryDirectory: 'esm',
                camel2DashComponentName: false,
            },
            'icons',
        ],
    ];
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ];
    return {
        plugins,
        presets,
    };
};
