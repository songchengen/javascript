const Stack = function Stack() {
  this.elements = [];
  this.instance = null;
};

Stack.prototype = {
  push(element) {
    if (
      !this.instance
      || element === null
      || element === undefined
    ) {
      if (element !== null && element !== undefined) {
        this.instance = element.constructor;
      }

      return this.elements.push(element);
    }

    if (this.instance === element.constructor) return this.elements.push(element);

    throw new TypeError('element 类型异常');
  },
  pop() { return this.elements.pop(); },
  peek() { return this.elements[this.elements.length - 1]; },
  isEmpty() { return !this.elements.length; },
  size() { return this.elements.length; },
  clear() { this.elements = []; },
  print() { return this.elements.toString(); },
};


module.exports = Stack;
