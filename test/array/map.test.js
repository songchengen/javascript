/* eslint-disable no-undef */
/**
 * @author songchengen
 * @date 2018/7/16
 * @description test Array.prototype.map
 */

const map = require('./../../array/map');

describe('map', () => {
  test('simple map', () => {
    const a = [1, 2, 3, 4, 5];
    const f = i => i;
    expect(map(f, a)).toEqual(a);
    expect(a).toEqual([1, 2, 3, 4, 5]);
  });

  test('numbers sqrt', () => {
    const number = [1, 4, 9];
    expect(map(Math.sqrt, number)).toEqual([1, 2, 3]);
    expect(number).toEqual([1, 4, 9]);
  });

  test('format arrs', () => {
    const arr = [{ key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 }];

    const f = obj => ({ [obj.key]: obj.value });

    expect(map(f, arr)).toEqual([{ 1: 10 }, { 2: 20 }, { 3: 30 }]);
    expect(arr).toEqual([{ key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 }]);
  });

  test('string map', () => {
    const str = '12345';

    expect(map(i => +i, str)).toEqual([1, 2, 3, 4, 5]);
  });

  test('parseInt string', () => {
    const strAr = ['1', '2', '3', '4'];

    expect(map(parseInt, strAr)).toEqual([1, NaN, NaN, NaN]);
  });
});
