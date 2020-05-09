function processData(input) {
  const test = input.split('\n').splice(1);
  const queue = [];

  for (let el of test) {
      const [com, item] = el.split(' ');
      if (com === '1') {
          queue.push(item);
      }
      if (com === '2') {
          queue.shift();
      }
      if (com === '3') {
          console.log(queue[0]);
      }
  }
}