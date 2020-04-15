const n = 6;
const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);

function plusMinus(arr) {
    let resultArray = [0, 0, 0];
    arr.forEach(element => { return checkNumber(element, resultArray); });
    return resultArray.forEach(element => {
        console.log(precise(element / n));
    });
}

function checkNumber(number, array) {
    if (number > 0) {
        return array[0] += 1;
    } else if (number < 0) {
        return array[1] += 1;
    } else {
        return array[2] += 1;
    }
}

function precise(x) {
    return Number.parseFloat(x).toPrecision(6);
}