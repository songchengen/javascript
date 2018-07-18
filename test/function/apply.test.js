/* eslint-disable no-undef */
/**
 * @author songchengen
 * @date 2018/7/18
 * @description Function.prototype.apply test
 */

const apply = require('./../../function/apply');

describe('apply', () => {
  test('basic', () => {
    const numbers = [5, 6, 2, 3, 7];

    const max = apply(Math.max, null, numbers);

    expect(max).toBe(7);

    const min = apply(Math.min, null, numbers);

    expect(min).toBe(2);
  });

  test('append an array to another', () => {
    const array = ['a', 'b'];
    const elements = [0, 1, 2];
    apply(array.push, array, elements);
    expect(array).toEqual(['a', 'b', 0, 1, 2]);
  });

});
