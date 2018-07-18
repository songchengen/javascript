/* eslint-disable no-undef,no-plusplus,no-shadow,no-unused-vars,no-var */
/**
 * @author songchengen
 * @date 2018/7/18
 * @description Function.prototype.call test
 */

const call = require('./../../function/call');

describe('call', () => {
  test('invoke a function and specifying the context for \'this\'', () => {
    const f = () => this.name;
    const obj = { name: 'hello' };
    const f1 = function () { return this.name; };
    expect(call(f, obj)).not.toBe('hello');
    expect(call(f1, obj)).toBe('hello');
  });

  test('chain constructors for an object', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      call(Product, this, name, price);
      this.category = 'food';
    }

    expect(new Food('apple', 2).name).toBe('apple');
  });

  test('invoke an anonymous function', () => {
    const animals = [
      { species: 'Lion', name: 'King' },
      { species: 'Whale', name: 'Fail' },
    ];
    const result = {};
    for (let i = 0; i < animals.length; i++) {
      call((function (i) {
        result[`${i}`] = this.name;
      }), animals[i], i);
    }

    expect(result).toEqual({ 0: 'King', 1: 'Fail' });
  });

  test('invoke a function and without specifying the first argument', () => {
    var sData = 'Wisen';

    function display() {
      return this.sData;
    }

    /* 测试环境中 call(display)的结果是undefined，浏览器环境下是Wisen */
    expect(call(display)).not.toBe('Wisen');
  });
});
