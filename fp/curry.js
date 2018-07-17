/**
 * @author songchengen
 * @date 2018/7/16
 * @description curry
 */

/**
 * 实现多参函数curry
 * @param {Function} f 多参函数
 * @returns {Function}
 */
module.exports = (f) => {
  // eslint-disable-next-line no-underscore-dangle
  const _curry = (...args) => {
    if (args.length >= f.length) return f.call(this, ...args);
    return _curry.bind(this, ...args);
  };
  return _curry;
};
