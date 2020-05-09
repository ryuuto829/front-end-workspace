function palindrome(str) {

  if (!str) {
    return undefined;

  } else {
    const queue = Array.from(str.toLocaleLowerCase());
    while (queue.length > 1) {

      if (queue.shift() !== queue.pop()) {
        return false;
      }
    }
    return true;
  }
}

const test = palindrome('madam s madam');
console.log(test);