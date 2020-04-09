/*
    Minimum

    The previous chapter introduced the standard function Math.min that returns
    its smallest argument. We can build something like that now. Write a function
    min that takes two arguments and returns their minimum.
*/

function minValue(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let printMin = x => "Minimum is " + String(x) + ".";

console.log(printMin(minValue(123, 20)));