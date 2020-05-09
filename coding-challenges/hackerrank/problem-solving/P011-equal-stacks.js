function equalStacks(...cylinders) {

  const stacks = [];
  let num = 0;

  for (let cyl of cylinders) {

    if (cyl.length === 0) {
      return 0;
    }

    stacks[num] = [];
    stacks[num].push(cyl[cyl.length - 1]);
    let accumulator = stacks[num][0];

    for (let i = cyl.length - 2; i >= 0; i--) {
      accumulator += cyl[i];
      stacks[num].push(accumulator);
    }

    num++;
  }

  let item = stacks[0].pop();

  while (item) {
    const same1 = stacks[1][stacks[1].length - 1];
    const same2 = stacks[2][stacks[2].length - 1];
    // do smthing
  }

  // return 0;
}
const test = equalStacks([1, 1, 1, 1, 2], [3, 7], [1, 3, 1]);
//console.log(test);



/** SLOW */

// function equalStacks(h1, h2, h3) {

//   const cylinders = [h1.reverse()];
//   h2.length > cylinders[0].length ? cylinders.push(h2.reverse()) : cylinders.unshift(h2.reverse());
//   h3.length > cylinders[0].length ? cylinders.push(h3.reverse()) : cylinders.unshift(h3.reverse());

//   const stacks = [];
//   let num = 0;

//   for (let cyl of cylinders) {

//     if (cyl.length) {
//       stacks[num] = [];
//       stacks[num].push(cyl[0]);

//       for (let i = 1; i < cyl.length; i++) {
//         if (i === 0) {
//           stacks[num].push(cyl[i]);
//         } else { }
//         stacks[num].push(cyl[i] + stacks[num][i - 1]);
//       }
//     }

//     num++;
//   }

//   let item = stacks[0].pop();

//   while (item) {
//     const same1 = stacks[1].some(el => el === item);
//     const same2 = stacks[2].some(el => el === item);

//     if (same1 && same2) {
//       return item;
//     } else {
//       item = stacks[0].pop();
//     }
//   }

//   return 0;
// }
// const test = equalStacks([1, 1, 1, 1, 2], [3, 7], [1, 3, 1]);
// console.log(test);