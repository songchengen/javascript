/* eslint-disable no-undef */
/**
 * @author songchengen
 * @date 2018/7/17
 * @description compose test
 */

const compose = require('./../../fp/compose');

describe('compose', () => {
  test('base', () => {
    const a = x => x + 1;
    const b = y => y * 3;

    expect(compose(a, b)(5)).toBe(16);
  });

  test('three', () => {
    const a = x => x + 2;
    const b = x => x * 2;
    const num = x => +x;

    expect(compose(a, b, num)(5)).toBe(12);
    expect(compose(a, b, num)('5')).toBe(12);
  });
});
