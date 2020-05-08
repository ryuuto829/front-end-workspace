/**
 * STACK - DATA-STRUCTURE
 */
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const decimalToBinary = num => {
  const remStack = new Stack;
  let rem = num;

  if (rem == 0) remStack.push(0);

  while (rem > 0) {
    rem % 2 ? remStack.push(1) : remStack.push(0);
    rem = Math.floor(rem / 2);
  }
  return remStack.toString().split(',').reverse().join('');
};

let test1 = decimalToBinary(10);
console.log(test1);


const baseConvert = (num, base) => {
  const remStack = new Stack;
  let rem = num;
  const dig = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  if (rem == 0) remStack.push(0);

  while (rem > 0) {
    rem % base ? remStack.push(1) : remStack.push(0);
    rem = Math.floor(rem / base);
  }

  while (!remStack.isEmpty()) {
    baseString += dig[remStack.pop()];
  }

  return baseString;
};

let test2 = baseConvert(10, 2);
console.log(test2);