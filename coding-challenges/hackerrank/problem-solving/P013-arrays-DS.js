let test = '1 4 3 2'.split(' ');

/** First Case */
console.time('default');

function reverseArray1(test) {
  return test.reverse();
}

console.log(reverseArray1(test));
console.timeEnd('default');


test = '1 4 3 2'.split(' ');

/** Second Case */
console.time('my');

function reverseArray(test) {
  const l = test.length;

  for (let i = 0; i < l / 2; i++) {
    [test[l - 1 - i], test[i]] = [test[i], test[l - 1 - i]];
  }

  return test;
}

console.log(reverseArray(test));
console.timeEnd('my');