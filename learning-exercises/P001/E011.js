/*
    Flattening

    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of the original
    arrays.
*/

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function flattening(array) {
    return array.reduce((a , b) => a.concat(b));
}

console.log(flattening(array));
console.log(array);