/**
 * @author songchengen
 * @date 2018/7/17
 * @description Array.prototype.reduce
 */

/**
 * 数组的reduce方法
 * @param {Function} callback
 * @param {Array} arr
 * @param {any} initValue
 * @returns {any}
 */
module.exports = (callback, arr, initValue) => {
  const len = arr.length;

  if (len <= 0 && !initValue) throw new TypeError('Reduce of empty array with no initial value');

  if (len <= 0 && initValue) return initValue;

  let k = initValue ? 0 : 1;
  let accumulator = initValue || arr[0];
  while (k < len) {
    accumulator = callback(accumulator, arr[k], k, arr);

    k += 1;
  }
  return accumulator;
};
