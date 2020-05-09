function hotPotato(num) {
  const queue = ['John', 'Adam', 'Den', 'Mark'];
  const list = [];

  while (queue.length > 1) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift());
    }
    list.push(queue.shift());
  }

  return `${queue[0]} is winner and ${list} are not:)`
}

console.log(hotPotato(Math.round(Math.random()*10)));