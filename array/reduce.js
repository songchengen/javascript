/**
 * @author songchengen
 * @date 2018/7/17
 * @description Array.prototype.reduce
 */

/**
 * 数组的reduce方法
 * @param {Function} callback
 * @param {Array} arr
 * @param {A} initValue
 * @returns {A}
 */
module.exports = (callback, arr, initValue) => {
  const len = arr.length;
  let k = initValue ? 0 : 1;
  let accumulator = initValue || arr[0];
  while (k < len) {
    accumulator = callback(accumulator, arr[k], k, arr);

    k += 1;
  }
  return accumulator;
};
