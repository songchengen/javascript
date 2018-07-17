/* eslint-disable no-undef */
/**
 * @author songchengen
 * @date 2018/7/17
 * @description curry test
 */

const curry = require('./../../fp/curry');

describe('curry', () => {
  test('add', () => {
    const add = curry((x, y) => x + y);
    expect(add(1)(2)).toBe(3);
    expect(add('hello')(' world')).toBe('hello world');

    const add3 = curry((x, y, z) => x + y + z);

    expect(add3(1)(2)(3)).toBe(6);
    expect(add3(1, 2)(3)).toBe(6);
    expect(add3(1, 2, 3)).toBe(6);
  });

  test('prop', () => {
    const prop = curry((obj, key) => obj[key]);

    expect(prop({ id: '1' })('id')).toBe('1');

    const prop2 = curry((key, obj) => obj[key]);

    expect(prop2('id')({ id: '2' })).toBe('2');
  });
});
