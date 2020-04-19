function aVeryBigSum(ar) {

    let res = 0;
    ar.forEach(element => {
        res += element;
    });
    return res;

}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004,1000000005]));