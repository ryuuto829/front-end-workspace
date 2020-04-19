/*
    A list

    Write a function arrayToList that builds up a list structure like the one
    shown when given [1, 2, 3] as argument. Also write a listToArray function
    that produces an array from a list. Then add a helper function prepend, which
    takes an element and a list and creates a new list that adds the element to the
    front of the input list, and nth, which takes a list and a number and returns
    the element at the given position in the list (with zero referring to the first
    element) or undefined when there is no such element.
    If you haven’t already, also write a recursive version of nth.
*/

let myArray = [1, 2, 3, 4, 5];

function arrayToList(array) {

    let newArray = [];
    for (let n of array) {
        newArray.push(n);
    }

    let initialLength = newArray.length;
    let list = {
        value: newArray.pop(),
        rest: null
    };

    for (let i = 0; i <= initialLength - 2; i++) {
        list = {
            value: newArray.pop(),
            rest: list
        };
    }
    return list;
}

console.log(JSON.stringify(arrayToList(myArray), null, 3));

function listToArray(list) {

    let array = [];

    array.push(list.value);

    let n = list.rest;
    array.push(n.value);

    while (!(n.rest == null)) {
        n = n.rest;
        array.push(n.value);
    }
    return array;
}

console.log(listToArray(arrayToList(myArray)));

function prepend(el, list) {

    let newArray = listToArray(list);
    newArray.unshift(el);

    return arrayToList(newArray);
}

console.log(JSON.stringify(prepend(6, arrayToList(myArray)), null, 3));


function nth(list, num) {

    if (num == 0) {
        return list.value;
    } else if (num > 0) {
        if (list.rest == null) {
            return undefined;
        } else {

            list = list.rest;
        }
        return nth(list, num - 1);
    }
}

console.log(nth(arrayToList(myArray), 4));