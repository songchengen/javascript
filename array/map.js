/**
 * @author songchengen
 * @date 2018/7/15
 * @description Array.prototype.map
 */

/**
 * 简单实现数组原型映射功能
 * @param {Function} callback 回调函数
 * @param {any} arr 遍历对象
 * @param {any} thisArg 回调函数的this指针
 * @returns {any[]} 映射数组
 */
const map = (callback, arr, thisArg) => {
  // 参数教研
  if (arr == null) throw new TypeError('arr is null or not defined');
  if (Object.prototype.toString.call(callback) !== '[object Function]') throw new TypeError(`${callback} is not a function`);

  const O = Object(arr);

  const len = O.length;

  const A = new Array(len);

  let k = 0;

  while (k < len) {
    const Pk = String(k);
    if (Pk in O) {
      A[Pk] = callback.call(thisArg, O[Pk], k, O);
    }
    k += 1;
  }
  return A;
};

module.exports = map;

/**
 * ramda关于map的实现
 * @param fn
 * @param functor
 * @returns {any[]}
 * @private
 */
module.exports.RamdaMap = (fn, functor) => {
  let k = 0;
  const len = functor.length;
  const result = Array(len);
  while (k < len) {
    result[k] = fn(functor[k]);
    k += 1;
  }
  return result;
}
