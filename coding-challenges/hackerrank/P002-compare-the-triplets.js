function compareTriplets(a, b) {

    let countA = 0, countB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) a[i] > b[i] ? countA += 1 : countB += 1;
    }
    return [countA, countB];
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));