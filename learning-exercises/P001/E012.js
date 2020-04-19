/*
    Your own loop

    Write a higher-order function loop that provides something like a for loop
    statement. It takes a value, a test function, an update function, and a body
    function. Each iteration, it first runs the test function on the current loop value
    and stops if that returns false. Then it calls the body function, giving it the
    current value. Finally, it calls the update function to create a new value and
    starts from the beginning.
    When defining the function, you can use a regular loop to do the actual
    looping.
*/

let a = '#';
for (let i = 0; i < 10; i++) {
    a += i;
}
console.log(a);
console.log("-------");

function loop(value, test, update, body) {

    let current = 0;
    let result = value;
    

    while (test(current)) {
        result = body(result, current);
        current = update(current);
    }
    return result;
}

console.log(loop("#", i => i < 10, i => i + 1, (a, i) => a + String(i)));