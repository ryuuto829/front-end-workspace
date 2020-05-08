function processData(input) {
  console.log('start');

  let test = input.split('\n').splice(1);
  test.forEach(el => {
    if (el.length) {

      /** Transform data */
      let [a, d, n, x] = el.split(', ');
      a = parseInt(a);
      d = parseInt(d);
      n = parseInt(n);
      x = parseInt(x);

      /** Main */
      x = -x;

      let sum = 0;
      let r = 1;
      let step = 0.1;
      let count = 0

      while ((Math.abs(sum - x) > 0.1)) {
        let newSum = 0;
        //console.log(Math.abs(sum - x));

        for (let k = 1; k <= n; k++) {
          newSum += (a - d * k) * r ** (k - 1);
        }

        sum = newSum;

        if (sum > x) {
          r += step;
        } else {
          r -= step;
        }
        step /= 2;


        if (count > 100) {
          break;
        } else {
          count++;
        }
      }


      console.log(`${r.toFixed(14)}`);
    }
  });
}

// const input = [1, 1, 3000, 100000000];
const input = `3
1, 1, 3000, 100000000
900, 6, 5000, 600000000
1, 1, 3000, 100000000
`;


//const input = [300, 1, 5000, -200000000000];
processData(input);

let a = 1000;
let d = 10;
let n = 4000;
let r = 1.0000999815530511;
let lol = 0
for (let k = 1; k <= n; k++) {
  lol += (a - d * k) * r ** (k - 1);
}
console.log(lol);
