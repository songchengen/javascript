/* eslint-disable no-undef */
/**
 * @auth songchengen
 * @date 2018/11/9
 */
const Stack = require('./../../datastruct/Stack');

describe('Stack', () => {
  it('should init', () => {
    const stack = new Stack();

    expect(stack.elements).toEqual([]);

    stack.push(12);

    expect([
      stack.elements,
      stack.instance,
      stack.size(),
      stack.isEmpty(),
    ]).toEqual([[12], Number, 1, false]);
  });
});
