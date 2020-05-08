function processData(input) {
  const arr = Array.of(input)[0];
  const test = arr.split('\n').slice(1);
  const stack = [];
  let max = -1;

  stack.push(max);

  test.forEach(el => {
    const [com, num] = el.split(' ');
    
    if (com === '1') {
      Number(num) > stack[stack.length - 1] ? max = num : max = stack[stack.length - 1] ;
      stack.push(max);
    } else if (com === '2') {
      stack.pop();
    } else if (com === '3') {
      console.log(stack[stack.length - 1]);
    }
  });
} 

const input = `68
1 1
1 44
3
3
2
3
3
1 3
1 37
2
3
1 29
3
1 73
1 51
3
3
3
1 70
3
1 8
2
1 49
1 56
1 81
2
1 59
1 44
2
3
3
2
3
3
1 4
3
1 89
2
1 37
1 50
1 64
2
1 49
1 35
1 85
3
1 41
2
3
3
1 86
3
1 60
1 8
3
1 100
3
1 83
3
1 47
2
1 78
2
1 55
1 97
2
3
1 40`
processData(input);