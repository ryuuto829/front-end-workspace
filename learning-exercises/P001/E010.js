/*
    Deep comparison

    Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties, where the values
    of the properties are equal when compared with a recursive call to deepEqual.
    To find out whether values should be compared directly (use the === operator
    for that) or have their properties compared, you can use the typeof operator.
    If it produces "object" for both values, you should do a deep comparison.
    But you have to take one silly exception into account: because of a historical
    accident, typeof null also produces "object".
    The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

let obj1 = { num: 1, day: 3 };
let obj2 = { num: 1, day: 3, lol: 4 };
console.log(obj1 == obj2);
let a = 10;
let b = '10';

console.log(a === b);
console.log("--------------------");

// without recursion

function deepEqual1(a, b) {



    if ((typeof (a) && typeof (b)) == 'object') {

        if ((a === null) || (b === null)) {
            return a === b;
        } else {

            let arr1 = Object.keys(a);
            let arr2 = Object.keys(b);

            if (arr1.length == arr2.length) {

                for (let entry of arr1) {
                    if (arr2.includes(String(entry))) {
                        if (!(a[String(entry)] === b[String(entry)])) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }

                return true;

            } else {
                return false;
            }
        }
    } else {
        return a === b;
    }
}

console.log(deepEqual1(obj1, obj2));
console.log(deepEqual1(a, b));
console.log("--------------------");

// with recursion

function deepEqual(a, b) {



    if ((typeof (a) && typeof (b)) == 'object') {

        if ((a === null) || (b === null)) {
            return a === b;
        } else {

            let arr1 = Object.keys(a);
            let arr2 = Object.keys(b);


            if (arr1.length == arr2.length) {

                for (let entry of arr1) {
                    if (arr2.includes(String(entry))) {

                        if (!(deepEqual(a[String(entry)], b[String(entry)]))) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }

                return true;

            } else {
                return false;
            }
        }
    } else {
        return a === b;
    }
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(a, b));