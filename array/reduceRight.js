/* eslint-disable no-param-reassign */
/**
 * @author songchengen
 * @date 2018/7/17
 * @description Array.prototype.reduceRight
 */

/**
 * 数组的reduceRight方法
 * @param {Function} callback
 * @param {Array} arr
 * @param {any} accumulator
 * @returns {any}
 */
module.exports = (callback, arr, accumulator) => {
  const len = arr.length;

  if (len <= 0 && !accumulator) throw new TypeError('Reduce of empty array with no initial value');

  if (len <= 0 && accumulator) return accumulator;

  let k = accumulator ? len - 1 : len - 2;
  accumulator = accumulator || arr[len - 1];

  while (k >= 0) {
    accumulator = callback(accumulator, arr[k], k, arr);

    k -= 1;
  }
  return accumulator;
};
