/*
    Reversing an array

    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear. For this exercise, write two functions, reverseArray
    and reverseArrayInPlace. The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order. The
    second, reverseArrayInPlace, does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the
    standard reverse method.
*/

let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function reverseArray(array) {
    let newArray = [];
    for (let item of array) {
        newArray.unshift(item);
    }
    return newArray;
}

console.log(reverseArray(initialArray));
console.log(initialArray);

// ver.1
function reverseArrayInPlace(array) {
    
    let newArray = [];
    let index = 0;
    for (let item of array) {
        newArray.unshift(item);
    }

    for (let item of newArray) {
        array[index] = item;
        index++;
    }
    return array;
}

console.log(reverseArrayInPlace(initialArray));
console.log(initialArray);

initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//ver.2
function reverseArrayInPlace2(array) {

    let l = array.length - 1;
    for (let i = l; i >= 0; i--) {
        array.push(array[i]);
    }
    for (let i = l; i >= 0; i--) {
        array.shift(array[i]);
    }
    return array;
}

console.log(reverseArrayInPlace2(initialArray));
console.log(initialArray);