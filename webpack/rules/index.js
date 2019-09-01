/** @format */
/* eslint-disable */

const fileRules = require('./file');
const cssRules = require('./css');
const jsRules = require('./js');

module.exports = [...cssRules, ...fileRules, ...jsRules];
