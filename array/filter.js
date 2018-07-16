/**
 * @author songchengen
 * @date 2018/7/15
 * @description Array.prototype.filter
 */

/**
 * 简单实现数组原过滤功能
 * @param {Function} callback 回调函数
 * @param {any} arr 遍历对象
 * @param {any} thisArg 回调函数的this指针
 * @returns {any[]} 过滤后的数组
 */
const filter = (callback, arr, thisArg) => {
  // 参数校验
  if (arr == null) throw new TypeError('arr is null or not defined');
  if (Object.prototype.toString.call(callback) !== '[object Function]') throw new TypeError(`${callback} is not a function`);

  // 原：ToObject(arr)
  const O = Object(arr);

  // get(O, 'length') 原：O.length >>> 0
  const len = O.length;

  // 原：Let A be ? ArraySpeciesCreate(O, 0).
  const R = [];

  const k = 0;
  while (k < len) {
    const Pk = String(k);
    if (Pk in O) {
      if (callback.call(thisArg, O[Pk], k, O)) {
        R.push(O[Pk]);
      }
    }
  }
  return R;
};

module.exports = filter;
