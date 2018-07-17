/* eslint-disable no-undef */
/**
 * @author songchengen
 * @date 2018/7/17
 * @description Array.prototype.reduce test
 */

const reduce = require('./../../array/reduce');

describe('reduce', () => {
  test('add', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(reduce((x, y) => x + y, nums)).toBe(15);
    expect(reduce((x, y) => x + y, nums, 10)).toBe(25);
  });

  test('Flatten an array of arrays', () => {
    const nums = [[1, 2], [3, 4], [5, 6]];

    const f = (x, y) => [...x, ...y];

    expect(reduce(f, nums)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(reduce(f, nums, [0])).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  test('Counting instances of values in an object', () => {
    const arrs = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    const f = (obj, y) => {
      // eslint-disable-next-line no-param-reassign
      obj[y] = obj[y] ? obj[y] + 1 : 1;
      return obj;
    };

    expect(reduce(f, arrs, {})).toEqual({
      Alice: 2, Bob: 1, Tiff: 1, Bruce: 1,
    });
  });
});
