/* eslint-disable no-param-reassign,prefer-rest-params,new-cap,no-proto,prefer-spread */
/**
 * @author songchengen
 * @date 2018/7/18
 * @description Function.prototype.bind
 */

/**
 * 用ES5实现bind
 * 1、基本的绑定功能
 * 2、使用new关键字时绑定this无效，参数生效
 * @param {Function} func
 * @param {Object} ctx
 * @returns {Function}
 */
module.exports = function (func, ctx) {
  if (!({}).toString.call(func) === '[object Function]') {
    throw TypeError('Bind must be called on a function');
  }

  ctx = ctx || this;

  const args = [].slice.call(arguments, 2);

  const factory = function () {
    const obj = {};
    obj.__proto__ = this.prototype;
    const ret = this.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
  }

  const bound = function () {
    if (this instanceof bound) {
      return factory.apply(func, args.concat([].slice.call(arguments)));
    }
    return func.apply(ctx, args.concat([].slice.call(arguments)));
  };

  return bound;
};
