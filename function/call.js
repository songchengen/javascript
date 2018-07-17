/* eslint-disable no-param-reassign */
/**
 * @author songchengen
 * @date 2018/7/17
 * @description Function.prototype.call
 */

/**
 * 函数的call方法，借助ES6实现，也可以通过argument获取参数，那么就不能使用箭头函数了
 * 实现方式非常的不优雅，期待更好的方法
 * @param f
 * @param thisArg
 * @param args
 * @returns {*}
 */
module.exports = (f, thisArg, ...args) => {
  thisArg = thisArg || this;
  thisArg.f = f;
  const result = thisArg.f(...args);
  delete thisArg.f;
  return result;
};
