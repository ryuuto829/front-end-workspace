function processData(input) {
  const N = parseInt(input.split(' ')[0]);
  const b = parseInt(input.split(' ')[1]);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (palindrome(`${i}`)) {
      if (palindrome(`${baseConvert(i, b)}`)) {
        sum += i;
      };
    }
  }

  console.log(sum);

  function baseConvert(dec, base) {
    const remStack = [];
    const digits = '012345678';
    let number = dec;
    let rem = 0;
    let baseString = '';
    if (!(base >= 2 && base <= 9)) {
      return '';
    }
    while (number > 0) {
      rem = Math.floor(number % base);
      remStack.push(rem);
      number = Math.floor(number / base);
    }
    while (remStack.length !== 0) {
      baseString += digits[remStack.pop()];
    }
    return baseString;
  }

  function palindrome(str) {

    if (!str) {
      return undefined;

    } else {
      const queue = Array.from(str);
      while (queue.length > 1) {

        if (queue.shift() !== queue.pop()) {
          return false;
        }
      }
      return true;
    }
  }
}