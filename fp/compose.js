/**
 * @author songchengen
 * @date 2018/7/17
 * @description compose
 */

/**
 * 实现函数组合，参考 https://github.com/FEPatients/with-or-without-fp/blob/master/fp.js#L38
 * 这是我看过最简洁的实现方式了
 * @param {Function} f
 * @returns {Function}
 */
module.exports = (...f) => args => f.reduceRight((reducer, currF) => currF(reducer), args);
