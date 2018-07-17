/* eslint-disable no-param-reassign */
/**
 * @author songchengen
 * @date 2018/7/17
 * @description Function.prototype.apply
 */

/**
 * ES6真好用
 * @param f
 * @param thisArg
 * @param args
 * @returns {*}
 */
module.exports = (f, thisArg, args) => {
  thisArg = thisArg || this;
  thisArg.f = f;
  const result = thisArg.f(...args);
  delete thisArg.f;
  return result;
};
