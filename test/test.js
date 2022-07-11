/*
 * @Author: wangyunbo
 * @Date: 2022-07-11 14:57:56
 * @LastEditors: wangyunbo
 * @LastEditTime: 2022-07-11 14:59:39
 * @FilePath: \node-docker\test\test.js
 * @Description: file content
 */
var assert = require('assert')

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    })
  })
})