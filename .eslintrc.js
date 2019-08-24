/** @format */

module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
    },
    extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended', 'eslint-config-alloy/typescript'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['typescript'],
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/prefer-interface': 0,
        "object-curly-spacing": 0
    },
};
