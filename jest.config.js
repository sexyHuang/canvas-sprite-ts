/*
 * @Author: Sexy
 * @Date: 2019-12-20 10:17:17
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-20 11:26:26
 * @Description: file content
 */
const tsjPreset = require('ts-jest/presets');
module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  transform: {
    ...tsjPreset.transform
  },
  testRegex: '(/test/.*\\.(test|spec))\\.[tj]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: ['!**/node_modules/**', '!**/vendor/**']
};
