/* eslint-disable no-undef,no-unused-vars,prefer-destructuring,prefer-rest-params */
/**
 * @author songchengen
 * @date 2018/7/18
 * @description Function.prototype.bind
 */

const bind = require('./../../function/bind');

describe('bind', () => {
  test('Creating a bound function', () => {
    window.value = '全局属性';

    const obj = {
      value: '对象属性',
      getValue() { return this.value; },
    };

    expect(obj.getValue()).toBe('对象属性');

    expect(bind(obj.getValue, obj)()).toBe('对象属性');

    const getValue = obj.getValue;

    expect(getValue()).toBe('全局属性');

    expect(bind(getValue, obj)()).toBe('对象属性');
  });

  test('Partially applied functions', () => {
    function list() {
      return Array.prototype.slice.call(arguments);
    }

    const list1 = list(1, 2, 3);
    expect(list1).toEqual([1, 2, 3]);

    const leadingThirtysevenList = bind(list, null, 37);

    const list2 = leadingThirtysevenList();
    expect(list2).toEqual([37]);

    const list3 = leadingThirtysevenList(1, 2, 3);
    expect(list3).toEqual([37, 1, 2, 3]);
  });

  test('Bound functions used as constructors', () => {
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function () {
      return `${this.x},${this.y}`;
    };

    const p = new Point(1, 2);

    expect(p.toString()).toBe('1,2');

    const Point1 = bind(Point, { x: 1, y: 2 }, 3);

    expect(new Point1('5', '6').toString()).toBe('3,5');
  });
});
