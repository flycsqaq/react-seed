/** @format */

module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint-config-alloy/typescript', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['typescript', 'react', 'react-hooks'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        indent: ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/prefer-interface': 0,
        'object-curly-spacing': 2,
        'no-console': 2,
        'no-dupe-keys': 2,
        'no-empty': 2,
        eqeqeq: 2,
        'no-with': 2,
        'vars-on-top': 2,
    },
};
