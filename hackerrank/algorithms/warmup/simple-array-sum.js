function simpleArraySum(ar) {
    let result = 0;
    for (let item of ar) {
        result += item;
    }
return result;
}

console.log(simpleArraySum([1,2,3]));