/**
 * @author songchengen
 * @date 2018/7/15
 * @description Array.prototype.forEach
 */


/**
 * 简单实现数组原型遍历功能
 * 原函数
 * @param callback
 * @param arr
 * @param thisArg
 */
const forEach = (callback, arr, thisArg) => {
  // 参数校验
  if (arr == null) throw new TypeError('arr is null or not defined');
  if (Object.prototype.toString.call(callback) !== '[object Function]') throw new TypeError(`${callback} is not a function`);

  // ToObject(arr)
  const O = Object(arr);

  // get(O, 'length') 原：O.length >>> 0
  const len = O.length;

  // 数组遍历
  let k = 0;
  while (k < len) {
    const Pk = k;

    if (Pk in O) {
      callback.call(thisArg, O[Pk], k, O);
    }

    k += 1;
  }
};

module.exports = forEach;
