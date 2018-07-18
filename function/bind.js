/* eslint-disable no-param-reassign,prefer-rest-params,new-cap,no-proto,prefer-spread,no-undef */
/**
 * @author songchengen
 * @date 2018/7/18
 * @description Function.prototype.bind
 */

/**
 * 用ES5实现bind
 * 1、基本的绑定功能
 * 2、使用new关键字时绑定this无效，参数生效
 * @param {Function} func 需要绑定的函数
 * @param {Object} ctx 需要绑定的this对象
 * @returns {Function}
 */
module.exports = function (func, ctx) {
  if (!({}).toString.call(func) === '[object Function]') {
    throw TypeError('Bind must be called on a function');
  }

  ctx = ctx || window;

  const args = [].slice.call(arguments, 2);

  /**
   * 构造函数生成对象实例
   * @returns {Object|*}
   */
  const factory = function () {
    const obj = {};

    /* 设置原型指向 */
    obj.__proto__ = this.prototype;

    /**
     * 1、执行目标函数，绑定函数内部的属性
     * 2、如果目标函数有对象类型的返回值则取返回值，符合js new关键字的规范
     */
    const ret = this.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
  };

  const bound = function () {
    if (this instanceof bound) {
      return factory.apply(func, args.concat([].slice.call(arguments)));
    }
    return func.apply(ctx, args.concat([].slice.call(arguments)));
  };

  return bound;
};
